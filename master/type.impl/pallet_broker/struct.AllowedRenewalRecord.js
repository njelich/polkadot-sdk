(function() {var type_impls = {
"pallet_broker":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-AllowedRenewalRecord%3CBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#impl-Encode-for-AllowedRenewalRecord%3CBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance&gt; Encode for <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;<span class=\"where fmt-newline\">where\n    Balance: Encode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</span></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","pallet_broker::types::AllowedRenewalRecordOf"],["<section id=\"impl-StructuralPartialEq-for-AllowedRenewalRecord%3CBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#impl-StructuralPartialEq-for-AllowedRenewalRecord%3CBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;</h3></section>","StructuralPartialEq","pallet_broker::types::AllowedRenewalRecordOf"],["<section id=\"impl-Eq-for-AllowedRenewalRecord%3CBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#impl-Eq-for-AllowedRenewalRecord%3CBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;</h3></section>","Eq","pallet_broker::types::AllowedRenewalRecordOf"],["<section id=\"impl-EncodeLike-for-AllowedRenewalRecord%3CBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#impl-EncodeLike-for-AllowedRenewalRecord%3CBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance&gt; EncodeLike for <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;<span class=\"where fmt-newline\">where\n    Balance: Encode,</span></h3></section>","EncodeLike","pallet_broker::types::AllowedRenewalRecordOf"],["<section id=\"impl-StructuralEq-for-AllowedRenewalRecord%3CBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#impl-StructuralEq-for-AllowedRenewalRecord%3CBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;</h3></section>","StructuralEq","pallet_broker::types::AllowedRenewalRecordOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaxEncodedLen-for-AllowedRenewalRecord%3CBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#impl-MaxEncodedLen-for-AllowedRenewalRecord%3CBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;<span class=\"where fmt-newline\">where\n    Balance: MaxEncodedLen,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_encoded_len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#method.max_encoded_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">max_encoded_len</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Upper bound, in bytes, of the maximum encoded size of this item.</div></details></div></details>","MaxEncodedLen","pallet_broker::types::AllowedRenewalRecordOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AllowedRenewalRecord%3CBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#impl-Clone-for-AllowedRenewalRecord%3CBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","pallet_broker::types::AllowedRenewalRecordOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AllowedRenewalRecord%3CBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#impl-Debug-for-AllowedRenewalRecord%3CBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;<span class=\"where fmt-newline\">where\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","pallet_broker::types::AllowedRenewalRecordOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-AllowedRenewalRecord%3CBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#impl-PartialEq-for-AllowedRenewalRecord%3CBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","pallet_broker::types::AllowedRenewalRecordOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-AllowedRenewalRecord%3CBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#impl-Decode-for-AllowedRenewalRecord%3CBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance&gt; Decode for <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;<span class=\"where fmt-newline\">where\n    Balance: Decode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.75.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","pallet_broker::types::AllowedRenewalRecordOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-AllowedRenewalRecord%3CBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#impl-TypeInfo-for-AllowedRenewalRecord%3CBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance&gt; TypeInfo for <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;<span class=\"where fmt-newline\">where\n    Balance: TypeInfo + 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"pallet_broker/struct.AllowedRenewalRecord.html\" title=\"struct pallet_broker::AllowedRenewalRecord\">AllowedRenewalRecord</a>&lt;Balance&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_broker/types.rs.html#165\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","pallet_broker::types::AllowedRenewalRecordOf"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()