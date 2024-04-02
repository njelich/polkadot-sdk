(function() {var type_impls = {
"cumulus_test_client":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LongestChain%3CB,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#41-44\">source</a><a href=\"#impl-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#47\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_consensus/longest_chain/struct.LongestChain.html#tymethod.new\" class=\"fn\">new</a>(backend: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;B&gt;) -&gt; <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;</h4></section></summary><div class=\"docblock\"><p>Instantiate a new LongestChain for Backend B</p>\n</div></details></div></details>",0,"cumulus_test_client::LongestChain"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-LongestChain%3CB,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#34\">source</a><a href=\"#impl-Clone-for-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#35\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","cumulus_test_client::LongestChain"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SelectChain%3CBlock%3E-for-LongestChain%3CB,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#136-139\">source</a><a href=\"#impl-SelectChain%3CBlock%3E-for-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; <a class=\"trait\" href=\"cumulus_test_client/sp_consensus/trait.SelectChain.html\" title=\"trait cumulus_test_client::sp_consensus::SelectChain\">SelectChain</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.leaves\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#135\">source</a><a href=\"#method.leaves\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_test_client/sp_consensus/trait.SelectChain.html#tymethod.leaves\" class=\"fn\">leaves</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>&gt;, <a class=\"enum\" href=\"cumulus_test_client/sp_consensus/enum.Error.html\" title=\"enum cumulus_test_client::sp_consensus::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Get all leaves of the chain, i.e. block hashes that have no children currently.\nLeaves that can never be finalized will not be returned.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.best_chain\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#135\">source</a><a href=\"#method.best_chain\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_test_client/sp_consensus/trait.SelectChain.html#tymethod.best_chain\" class=\"fn\">best_chain</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>, <a class=\"enum\" href=\"cumulus_test_client/sp_consensus/enum.Error.html\" title=\"enum cumulus_test_client::sp_consensus::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Among those <code>leaves</code> deterministically pick one chain as the generally\nbest chain to author new blocks upon and probably (but not necessarily)\nfinalize.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finality_target\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#135\">source</a><a href=\"#method.finality_target\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_test_client/sp_consensus/trait.SelectChain.html#method.finality_target\" class=\"fn\">finality_target</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    base_hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    maybe_max_number: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Number\" title=\"type sp_runtime::traits::Header::Number\">Number</a>&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>, <a class=\"enum\" href=\"cumulus_test_client/sp_consensus/enum.Error.html\" title=\"enum cumulus_test_client::sp_consensus::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Get the best descendent of <code>base_hash</code> that we should attempt to\nfinalize next, if any. It is valid to return the given <code>base_hash</code>\nitself if no better descendent exists.</div></details></div></details>","SelectChain<Block>","cumulus_test_client::LongestChain"]],
"polkadot_test_client":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LongestChain%3CB,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#41-44\">source</a><a href=\"#impl-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#47\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_consensus/longest_chain/struct.LongestChain.html#tymethod.new\" class=\"fn\">new</a>(backend: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;B&gt;) -&gt; <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;</h4></section></summary><div class=\"docblock\"><p>Instantiate a new LongestChain for Backend B</p>\n</div></details></div></details>",0,"polkadot_test_client::LongestChain"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-LongestChain%3CB,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#34\">source</a><a href=\"#impl-Clone-for-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#35\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polkadot_test_client::LongestChain"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SelectChain%3CBlock%3E-for-LongestChain%3CB,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#136-139\">source</a><a href=\"#impl-SelectChain%3CBlock%3E-for-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; <a class=\"trait\" href=\"polkadot_test_client/sp_consensus/trait.SelectChain.html\" title=\"trait polkadot_test_client::sp_consensus::SelectChain\">SelectChain</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.leaves\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#135\">source</a><a href=\"#method.leaves\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_test_client/sp_consensus/trait.SelectChain.html#tymethod.leaves\" class=\"fn\">leaves</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>&gt;, <a class=\"enum\" href=\"polkadot_test_client/sp_consensus/enum.Error.html\" title=\"enum polkadot_test_client::sp_consensus::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Get all leaves of the chain, i.e. block hashes that have no children currently.\nLeaves that can never be finalized will not be returned.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.best_chain\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#135\">source</a><a href=\"#method.best_chain\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_test_client/sp_consensus/trait.SelectChain.html#tymethod.best_chain\" class=\"fn\">best_chain</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>, <a class=\"enum\" href=\"polkadot_test_client/sp_consensus/enum.Error.html\" title=\"enum polkadot_test_client::sp_consensus::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Among those <code>leaves</code> deterministically pick one chain as the generally\nbest chain to author new blocks upon and probably (but not necessarily)\nfinalize.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finality_target\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#135\">source</a><a href=\"#method.finality_target\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_test_client/sp_consensus/trait.SelectChain.html#method.finality_target\" class=\"fn\">finality_target</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    base_hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    maybe_max_number: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Number\" title=\"type sp_runtime::traits::Header::Number\">Number</a>&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>, <a class=\"enum\" href=\"polkadot_test_client/sp_consensus/enum.Error.html\" title=\"enum polkadot_test_client::sp_consensus::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Get the best descendent of <code>base_hash</code> that we should attempt to\nfinalize next, if any. It is valid to return the given <code>base_hash</code>\nitself if no better descendent exists.</div></details></div></details>","SelectChain<Block>","polkadot_test_client::LongestChain"]],
"solochain_template_node":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LongestChain%3CB,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#41-44\">source</a><a href=\"#impl-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#47\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_consensus/longest_chain/struct.LongestChain.html#tymethod.new\" class=\"fn\">new</a>(backend: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;B&gt;) -&gt; <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;</h4></section></summary><div class=\"docblock\"><p>Instantiate a new LongestChain for Backend B</p>\n</div></details></div></details>",0,"solochain_template_node::service::FullSelectChain"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-LongestChain%3CB,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#34\">source</a><a href=\"#impl-Clone-for-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#35\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","solochain_template_node::service::FullSelectChain"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SelectChain%3CBlock%3E-for-LongestChain%3CB,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#136-139\">source</a><a href=\"#impl-SelectChain%3CBlock%3E-for-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; <a class=\"trait\" href=\"sp_consensus/select_chain/trait.SelectChain.html\" title=\"trait sp_consensus::select_chain::SelectChain\">SelectChain</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.leaves\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#135\">source</a><a href=\"#method.leaves\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_consensus/select_chain/trait.SelectChain.html#tymethod.leaves\" class=\"fn\">leaves</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>&gt;, <a class=\"enum\" href=\"sp_consensus/error/enum.Error.html\" title=\"enum sp_consensus::error::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Get all leaves of the chain, i.e. block hashes that have no children currently.\nLeaves that can never be finalized will not be returned.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.best_chain\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#135\">source</a><a href=\"#method.best_chain\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_consensus/select_chain/trait.SelectChain.html#tymethod.best_chain\" class=\"fn\">best_chain</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>, <a class=\"enum\" href=\"sp_consensus/error/enum.Error.html\" title=\"enum sp_consensus::error::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Among those <code>leaves</code> deterministically pick one chain as the generally\nbest chain to author new blocks upon and probably (but not necessarily)\nfinalize.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finality_target\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/longest_chain.rs.html#135\">source</a><a href=\"#method.finality_target\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_consensus/select_chain/trait.SelectChain.html#method.finality_target\" class=\"fn\">finality_target</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    base_hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    maybe_max_number: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Number\" title=\"type sp_runtime::traits::Header::Number\">Number</a>&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>, <a class=\"enum\" href=\"sp_consensus/error/enum.Error.html\" title=\"enum sp_consensus::error::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"sc_consensus/longest_chain/struct.LongestChain.html\" title=\"struct sc_consensus::longest_chain::LongestChain\">LongestChain</a>&lt;B, Block&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Get the best descendent of <code>base_hash</code> that we should attempt to\nfinalize next, if any. It is valid to return the given <code>base_hash</code>\nitself if no better descendent exists.</div></details></div></details>","SelectChain<Block>","solochain_template_node::service::FullSelectChain"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()