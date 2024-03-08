(function() {var type_impls = {
"sp_application_crypto":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RingVerifier%3CF,+CS,+Curve%3E\" class=\"impl\"><a href=\"#impl-RingVerifier%3CF,+CS,+Curve%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F, CS, Curve&gt; RingVerifier&lt;F, CS, Curve&gt;<span class=\"where fmt-newline\">where\n    F: PrimeField,\n    CS: PCS&lt;F&gt;,\n    Curve: SWCurveConfig&lt;BaseField = F&gt;,</span></h3></section></summary><div class=\"impl-items\"><section id=\"method.init\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">init</a>(\n    verifier_key: VerifierKey&lt;F, CS&gt;,\n    piop_params: PiopParams&lt;F, Curve&gt;,\n    empty_transcript: <a class=\"struct\" href=\"https://docs.rs/merlin/3.0.0/merlin/transcript/struct.Transcript.html\" title=\"struct merlin::transcript::Transcript\">Transcript</a>\n) -&gt; RingVerifier&lt;F, CS, Curve&gt;</h4></section><section id=\"method.verify_ring_proof\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">verify_ring_proof</a>(\n    &amp;self,\n    proof: Proof&lt;F, CS, RingCommitments&lt;F, &lt;CS as PCS&lt;F&gt;&gt;::C&gt;, RingEvaluations&lt;F&gt;&gt;,\n    result: Affine&lt;Curve&gt;\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.piop_params\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">piop_params</a>(&amp;self) -&gt; &amp;PiopParams&lt;F, Curve&gt;</h4></section></div></details>",0,"sp_application_crypto::bandersnatch::ring_vrf::RingVerifier"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CRingVerifierData%3E-for-RingVerifier%3CFp%3CMontBackend%3CFrConfig,+4%3E,+4%3E,+KZG%3CBls12%3CConfig%3CHostHooks%3E%3E%3E,+BandersnatchConfig%3CHostHooks%3E%3E\" class=\"impl\"><a href=\"#impl-From%3CRingVerifierData%3E-for-RingVerifier%3CFp%3CMontBackend%3CFrConfig,+4%3E,+4%3E,+KZG%3CBls12%3CConfig%3CHostHooks%3E%3E%3E,+BandersnatchConfig%3CHostHooks%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"sp_application_crypto/bandersnatch/ring_vrf/struct.RingVerifierData.html\" title=\"struct sp_application_crypto::bandersnatch::ring_vrf::RingVerifierData\">RingVerifierData</a>&gt; for RingVerifier&lt;Fp&lt;MontBackend&lt;FrConfig, 4&gt;, 4&gt;, KZG&lt;Bls12&lt;Config&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/bls12_381/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::bls12_381::HostHooks\">HostHooks</a>&gt;&gt;&gt;, BandersnatchConfig&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/ed_on_bls12_381_bandersnatch/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::ed_on_bls12_381_bandersnatch::HostHooks\">HostHooks</a>&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(\n    vd: <a class=\"struct\" href=\"sp_application_crypto/bandersnatch/ring_vrf/struct.RingVerifierData.html\" title=\"struct sp_application_crypto::bandersnatch::ring_vrf::RingVerifierData\">RingVerifierData</a>\n) -&gt; RingVerifier&lt;Fp&lt;MontBackend&lt;FrConfig, 4&gt;, 4&gt;, KZG&lt;Bls12&lt;Config&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/bls12_381/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::bls12_381::HostHooks\">HostHooks</a>&gt;&gt;&gt;, BandersnatchConfig&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/ed_on_bls12_381_bandersnatch/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::ed_on_bls12_381_bandersnatch::HostHooks\">HostHooks</a>&gt;&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<RingVerifierData>","sp_application_crypto::bandersnatch::ring_vrf::RingVerifier"]],
"sp_consensus_sassafras":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RingVerifier%3CF,+CS,+Curve%3E\" class=\"impl\"><a href=\"#impl-RingVerifier%3CF,+CS,+Curve%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F, CS, Curve&gt; RingVerifier&lt;F, CS, Curve&gt;<span class=\"where fmt-newline\">where\n    F: PrimeField,\n    CS: PCS&lt;F&gt;,\n    Curve: SWCurveConfig&lt;BaseField = F&gt;,</span></h3></section></summary><div class=\"impl-items\"><section id=\"method.init\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">init</a>(\n    verifier_key: VerifierKey&lt;F, CS&gt;,\n    piop_params: PiopParams&lt;F, Curve&gt;,\n    empty_transcript: <a class=\"struct\" href=\"https://docs.rs/merlin/3.0.0/merlin/transcript/struct.Transcript.html\" title=\"struct merlin::transcript::Transcript\">Transcript</a>\n) -&gt; RingVerifier&lt;F, CS, Curve&gt;</h4></section><section id=\"method.verify_ring_proof\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">verify_ring_proof</a>(\n    &amp;self,\n    proof: Proof&lt;F, CS, RingCommitments&lt;F, &lt;CS as PCS&lt;F&gt;&gt;::C&gt;, RingEvaluations&lt;F&gt;&gt;,\n    result: Affine&lt;Curve&gt;\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.piop_params\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">piop_params</a>(&amp;self) -&gt; &amp;PiopParams&lt;F, Curve&gt;</h4></section></div></details>",0,"sp_consensus_sassafras::vrf::RingVerifier"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CRingVerifierData%3E-for-RingVerifier%3CFp%3CMontBackend%3CFrConfig,+4%3E,+4%3E,+KZG%3CBls12%3CConfig%3CHostHooks%3E%3E%3E,+BandersnatchConfig%3CHostHooks%3E%3E\" class=\"impl\"><a href=\"#impl-From%3CRingVerifierData%3E-for-RingVerifier%3CFp%3CMontBackend%3CFrConfig,+4%3E,+4%3E,+KZG%3CBls12%3CConfig%3CHostHooks%3E%3E%3E,+BandersnatchConfig%3CHostHooks%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"sp_consensus_sassafras/vrf/struct.RingVerifierData.html\" title=\"struct sp_consensus_sassafras::vrf::RingVerifierData\">RingVerifierData</a>&gt; for RingVerifier&lt;Fp&lt;MontBackend&lt;FrConfig, 4&gt;, 4&gt;, KZG&lt;Bls12&lt;Config&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/bls12_381/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::bls12_381::HostHooks\">HostHooks</a>&gt;&gt;&gt;, BandersnatchConfig&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/ed_on_bls12_381_bandersnatch/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::ed_on_bls12_381_bandersnatch::HostHooks\">HostHooks</a>&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(\n    vd: <a class=\"struct\" href=\"sp_consensus_sassafras/vrf/struct.RingVerifierData.html\" title=\"struct sp_consensus_sassafras::vrf::RingVerifierData\">RingVerifierData</a>\n) -&gt; RingVerifier&lt;Fp&lt;MontBackend&lt;FrConfig, 4&gt;, 4&gt;, KZG&lt;Bls12&lt;Config&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/bls12_381/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::bls12_381::HostHooks\">HostHooks</a>&gt;&gt;&gt;, BandersnatchConfig&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/ed_on_bls12_381_bandersnatch/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::ed_on_bls12_381_bandersnatch::HostHooks\">HostHooks</a>&gt;&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<RingVerifierData>","sp_consensus_sassafras::vrf::RingVerifier"]],
"sp_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RingVerifier%3CF,+CS,+Curve%3E\" class=\"impl\"><a href=\"#impl-RingVerifier%3CF,+CS,+Curve%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F, CS, Curve&gt; RingVerifier&lt;F, CS, Curve&gt;<span class=\"where fmt-newline\">where\n    F: PrimeField,\n    CS: PCS&lt;F&gt;,\n    Curve: SWCurveConfig&lt;BaseField = F&gt;,</span></h3></section></summary><div class=\"impl-items\"><section id=\"method.init\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">init</a>(\n    verifier_key: VerifierKey&lt;F, CS&gt;,\n    piop_params: PiopParams&lt;F, Curve&gt;,\n    empty_transcript: <a class=\"struct\" href=\"https://docs.rs/merlin/3.0.0/merlin/transcript/struct.Transcript.html\" title=\"struct merlin::transcript::Transcript\">Transcript</a>\n) -&gt; RingVerifier&lt;F, CS, Curve&gt;</h4></section><section id=\"method.verify_ring_proof\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">verify_ring_proof</a>(\n    &amp;self,\n    proof: Proof&lt;F, CS, RingCommitments&lt;F, &lt;CS as PCS&lt;F&gt;&gt;::C&gt;, RingEvaluations&lt;F&gt;&gt;,\n    result: Affine&lt;Curve&gt;\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.piop_params\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">piop_params</a>(&amp;self) -&gt; &amp;PiopParams&lt;F, Curve&gt;</h4></section></div></details>",0,"sp_core::bandersnatch::ring_vrf::RingVerifier"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()