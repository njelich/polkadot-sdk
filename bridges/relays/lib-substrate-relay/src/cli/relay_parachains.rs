// Copyright 2019-2021 Parity Technologies (UK) Ltd.
// This file is part of Parity Bridges Common.

// Parity Bridges Common is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity Bridges Common is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity Bridges Common.  If not, see <http://www.gnu.org/licenses/>.

//! Primitives for exposing the parachains finality relaying functionality in the CLI.

use async_std::sync::Mutex;
use async_trait::async_trait;
use parachains_relay::parachains_loop::{AvailableHeader, SourceClient, TargetClient};
use relay_substrate_client::Parachain;
use relay_utils::metrics::{GlobalMetrics, StandaloneMetric};
use std::sync::Arc;
use structopt::StructOpt;

use crate::{
	cli::{
		bridge::{CliBridgeBase, ParachainToRelayHeadersCliBridge},
		chain_schema::*,
		PrometheusParams,
	},
	parachains::{source::ParachainsSource, target::ParachainsTarget, ParachainsPipelineAdapter},
	TransactionParams,
};

/// Parachains heads relaying params.
#[derive(StructOpt)]
pub struct RelayParachainsParams {
	#[structopt(flatten)]
	source: SourceConnectionParams,
	#[structopt(flatten)]
	target: TargetConnectionParams,
	#[structopt(flatten)]
	target_sign: TargetSigningParams,
	#[structopt(flatten)]
	prometheus_params: PrometheusParams,
}

/// Trait used for relaying parachains finality between 2 chains.
#[async_trait]
pub trait ParachainsRelayer: ParachainToRelayHeadersCliBridge
where
	ParachainsSource<Self::ParachainFinality>:
		SourceClient<ParachainsPipelineAdapter<Self::ParachainFinality>>,
	ParachainsTarget<Self::ParachainFinality>:
		TargetClient<ParachainsPipelineAdapter<Self::ParachainFinality>>,
	<Self as CliBridgeBase>::Source: Parachain,
{
	/// Start relaying parachains finality.
	async fn relay_parachains(data: RelayParachainsParams) -> anyhow::Result<()> {
		let source_chain_client = data.source.into_client::<Self::SourceRelay>().await?;
		let source_client = ParachainsSource::<Self::ParachainFinality>::new(
			source_chain_client.clone(),
			Arc::new(Mutex::new(AvailableHeader::Missing)),
		);

		let target_transaction_params = TransactionParams {
			signer: data.target_sign.to_keypair::<Self::Target>()?,
			mortality: data.target_sign.target_transactions_mortality,
		};
		let target_chain_client = data.target.into_client::<Self::Target>().await?;
		let target_client = ParachainsTarget::<Self::ParachainFinality>::new(
			source_chain_client,
			target_chain_client,
			target_transaction_params,
		);

		let metrics_params: relay_utils::metrics::MetricsParams =
			data.prometheus_params.into_metrics_params()?;
		GlobalMetrics::new()?.register_and_spawn(&metrics_params.registry)?;

		parachains_relay::parachains_loop::run(
			source_client,
			target_client,
			metrics_params,
			false, // TODO
			futures::future::pending(),
		)
		.await
		.map_err(|e| anyhow::format_err!("{}", e))
	}
}
