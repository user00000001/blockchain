import{_ as n,p as a,q as s,a1 as e}from"./framework-f538f058.js";const t={},o=e(`<h1 id="modify-code-for-private-net" tabindex="-1"><a class="header-anchor" href="#modify-code-for-private-net" aria-hidden="true">#</a> Modify Code For Private Net</h1><h2 id="modify-every-epoch-duration" tabindex="-1"><a class="header-anchor" href="#modify-every-epoch-duration" aria-hidden="true">#</a> Modify every epoch duration</h2><blockquote><p>pos/posconfig/config.go:64</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>K <span class="token operator">=</span> <span class="token number">120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="modify-pos-owner-addr-mainnet-with-your-account-s-address" tabindex="-1"><a class="header-anchor" href="#modify-pos-owner-addr-mainnet-with-your-account-s-address" aria-hidden="true">#</a> Modify pos owner addr mainnet with your account&#39;s address</h2><blockquote><p>pos/posconfig/whiteAccountsMainnet.go:6</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**********************!!!PROTECTION POLICY!!!**********************
Waiting For The Next Deployment, Maybe It Will Be Displayed After That.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modify-mainnet-genesis-hash" tabindex="-1"><a class="header-anchor" href="#modify-mainnet-genesis-hash" aria-hidden="true">#</a> Modify mainnet genesis hash</h2><blockquote><p>params/config.go:28</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>MainnetGenesisHash <span class="token operator">=</span> common<span class="token punctuation">.</span><span class="token function">HexToHash</span><span class="token punctuation">(</span><span class="token string">&quot;0x67fdc748f527b404d7a968d0888d2a24a24726af07ced977e5d5677c7fd55607&quot;</span><span class="token punctuation">)</span> <span class="token comment">// Mainnet genesis hash to enforce below configs on, use block number zero&#39;s hash, you can check this block by using console to have this hash.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="modify-pow2pos-upgrade-block-number" tabindex="-1"><a class="header-anchor" href="#modify-pow2pos-upgrade-block-number" aria-hidden="true">#</a> Modify pow2pos upgrade block number</h2><blockquote><p>params/config.go:35</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> MainnetPow2PosUpgradeBlockNumber <span class="token operator">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="modify-asset-allocation-with-your-accounts" tabindex="-1"><a class="header-anchor" href="#modify-asset-allocation-with-your-accounts" aria-hidden="true">#</a> Modify asset allocation with your accounts</h2><blockquote><p>core/genesis_alloc.go:64</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> tesramainchainAllocJson <span class="token operator">=</span> <span class="token string">\`{
 &quot;0xc45f2ec2ff75d2f28ac26973224e73ac866b22ee&quot;: {
  &quot;balance&quot;: &quot;21000000000000000000000000&quot;,
  &quot;staking&quot;: {
   &quot;amount&quot;:&quot;4000000000000000000000000&quot;,
   &quot;s256pk&quot;:&quot;0x047b2de4fa89934d05cd8a414ee2d3f4fe1d5b0ff281b07d4776f81a05d6367a8432731b3be8b94e8f62566809fdd84dc89a3646b9c265858f2e11f663c7a86e25&quot;,
   &quot;bn256pk&quot;:&quot;0x2132cbf0c683683e4d07b628291b0567af15f2a103f03ca2b23f7824f5a7a6051fe6b7b1a28eb1632db5fb8aaa7327b62fda3e779b80d607b7b20c0ded53b65e&quot;
  }
 },
 &quot;0xeffdb9112c9a413e0b8217a9987f5ebc03dbd2f8&quot;: {
  &quot;balance&quot;: &quot;12600000000000000000000000&quot;,
  &quot;staking&quot;: {
   &quot;amount&quot;:&quot;4000000000000000000000000&quot;,
   &quot;s256pk&quot;:&quot;0x0458e7eaaf0ecfb31ca15e4b3eccdb2f48d9863da176c59f65914e76badd59bdca9bce57d4ec96d2d47bc33c56398411379ad645b63a07577c5eea869046fa288d&quot;,
   &quot;bn256pk&quot;:&quot;0x19ddd7b90d59b0773f5763f20224e5e459508888ed3b839dd82c08aaa7c2ca112281c63a82d925fd12c63df3cba2527f5e705ca4c7cae7a4840314edd2b1617b&quot;
  }
 },
 &quot;0x46616dc728f84eFDA02eBa6542362e74bC4A03A4&quot;: {
  &quot;balance&quot;: &quot;12600000000000000000000000&quot;,
  &quot;staking&quot;: {
   &quot;amount&quot;:&quot;4000000000000000000000000&quot;,
   &quot;s256pk&quot;:&quot;0x0489907330798daedafa13b5aa49e0e96534c7ea52a2c410114ed805ad48a632f2f5fac9ddaed5a0bcb4bfdb774138f9d57a7801ca1e7f5b78a493273a7a67d3d3&quot;,
   &quot;bn256pk&quot;:&quot;0x27c17579e1b798bceb028618d8a7844e9441fb88544fb4e99ae3f44c87ecd869045625db735652053418b552e43ecd8f4eff2e3227c2fdde5bc1fc4d51334377&quot;
  }
 },
 &quot;0x588410e29AAF15ad40F8b2d765C937A24E2aC88f&quot;: {
  &quot;balance&quot;: &quot;12600000000000000000000000&quot;,
  &quot;staking&quot;: {
   &quot;amount&quot;:&quot;4000000000000000000000000&quot;,
   &quot;s256pk&quot;:&quot;0x04b2341932cc27c93487141254a33ee3156ef17e6389e03772229111eda533ae3e642d59018fb8dad7219655951665c7d0cf6b62d36912d28b7bcac32ab923459f&quot;,
   &quot;bn256pk&quot;:&quot;0x0e70496649d551da0c29fd31fd0dd9b249030b2fc6d4894f545265a015630c3d20742f52d34f0372cb1ed2b09169d3f0dbe495b977d115a0659c26db99dba498&quot;
  }
 },
 &quot;0xf57639E8D9E018AF05676f0917ddbE92086077F1&quot;: {
  &quot;balance&quot;: &quot;12600000000000000000000000&quot;,
  &quot;staking&quot;: {
   &quot;amount&quot;:&quot;4000000000000000000000000&quot;,
   &quot;s256pk&quot;:&quot;0x04c004d28655b84620a803caccce0c505f170eb2a6817e6da0be367fc55918b3c21f2eb2662bcc6c3c86fa5d3984560dbacd38f33bd24991eab574d2b4c645018e&quot;,
   &quot;bn256pk&quot;:&quot;0x252a979ed24122507d6aa414146fb36efdf21a35a9dabdf5d6fa2e37e53d6b3919cc7acfb6a975a1ed02b4bcd8961845dd9fe163d9a9bd12bbbfbe0c0317d9fe&quot;
  }
 },
 &quot;0xdb96f73e302C4E031901E230363aD72efa3df2AB&quot;: {
  &quot;balance&quot;: &quot;12600000000000000000000000&quot;,
  &quot;staking&quot;: {
   &quot;amount&quot;:&quot;4000000000000000000000000&quot;,
   &quot;s256pk&quot;:&quot;0x04f7f9310a29f6a617c5cdc5ea49e137db45ce12a3b729a8a7102d9077099856b76ec2f6301cd62c0c83b741f86a046a3da22840a3dfc96bbd6bed8f52983fa623&quot;,
   &quot;bn256pk&quot;:&quot;0x086917166f9184737292503bce7eaa0a193b19aa0a825f1d93de5b6bcabb2d2f1b23d05dcdf050b61b5257e58e17ded046943f8567af862baeae287964695cef&quot;
  }
 },
  &quot;0x115d53A7Ea2C372349F5a78e2A9ba31b84F01b42&quot;: {
   &quot;balance&quot;: &quot;12600000000000000000000000&quot;,
   &quot;staking&quot;: {
    &quot;amount&quot;:&quot;4000000000000000000000000&quot;,
    &quot;s256pk&quot;:&quot;0x04405ce5b62589b4f47e77a90fa96b9a70a04d3c94eea4ef8253f0708ffa9dc1a5d9860f88822904c0820c11a8e9568fe4aa7fe51888ec1c22622d0e98f86abc31&quot;,
    &quot;bn256pk&quot;:&quot;0x0f3f1a2261df8f70a325ecefb68707532f85258de003a8181bb60f32c56329f1002fcdc6ca59502d9e449248ee2f006d68b44db194ab41e536706010877871f4&quot;
  }
 }
}\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modify-white-list-mainnet-with-your-accounts-duplicate-public-keys" tabindex="-1"><a class="header-anchor" href="#modify-white-list-mainnet-with-your-accounts-duplicate-public-keys" aria-hidden="true">#</a> Modify white list mainnet with your accounts&#39; duplicate public keys</h2><blockquote><p>pos/posconfig/whiteAccountsMainnet.go:8</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**********************!!!PROTECTION POLICY!!!**********************
Waiting For The Next Deployment, Maybe It Will Be Displayed After That.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="use-genesis-configure-file-you-should-run-this-command-instead-if-you-don-t-want-modify-code" tabindex="-1"><a class="header-anchor" href="#use-genesis-configure-file-you-should-run-this-command-instead-if-you-don-t-want-modify-code" aria-hidden="true">#</a> Use genesis configure file. You should run this command instead if you don&#39;t want modify code</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tesramain <span class="token parameter variable">--etherbase</span> <span class="token number">0</span> <span class="token parameter variable">--ethash.dagdir</span> ~/tesramainchain/dag/0 <span class="token parameter variable">--nodiscover</span> <span class="token parameter variable">--ipcpath</span> ~/tesramainchain/ipc/0 <span class="token parameter variable">--keystore</span> ~/tesramainchain/keystore <span class="token parameter variable">--unlock</span> <span class="token number">0</span> <span class="token parameter variable">--password</span> ~/tesramainchain/password init core/genesis.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <strong>extraData</strong> Field in genesis.json comes from here, record it from terminal logs.</p><blockquote><p>core/genesis_ppw_signers.go:25</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**********************!!!PROTECTION POLICY!!!**********************
Waiting For The Next Deployment, Maybe It Will Be Displayed After That.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>core/genesis.json</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;chainId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;byzantiumBlock&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;pluto&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;period&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;epoch&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;ethash&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;posFirstBlock&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;isPosActive&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;alloc&quot;</span>      <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;0xc45f2ec2ff75d2f28ac26973224e73ac866b22ee&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;21000000000000000000000000&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;staking&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;amount&quot;</span><span class="token operator">:</span><span class="token string">&quot;4000000000000000000000000&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;s256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x047b2de4fa89934d05cd8a414ee2d3f4fe1d5b0ff281b07d4776f81a05d6367a8432731b3be8b94e8f62566809fdd84dc89a3646b9c265858f2e11f663c7a86e25&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;bn256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x2132cbf0c683683e4d07b628291b0567af15f2a103f03ca2b23f7824f5a7a6051fe6b7b1a28eb1632db5fb8aaa7327b62fda3e779b80d607b7b20c0ded53b65e&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;0xeffdb9112c9a413e0b8217a9987f5ebc03dbd2f8&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12600000000000000000000000&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;staking&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;amount&quot;</span><span class="token operator">:</span><span class="token string">&quot;4000000000000000000000000&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;s256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0458e7eaaf0ecfb31ca15e4b3eccdb2f48d9863da176c59f65914e76badd59bdca9bce57d4ec96d2d47bc33c56398411379ad645b63a07577c5eea869046fa288d&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;bn256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x19ddd7b90d59b0773f5763f20224e5e459508888ed3b839dd82c08aaa7c2ca112281c63a82d925fd12c63df3cba2527f5e705ca4c7cae7a4840314edd2b1617b&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;0x46616dc728f84eFDA02eBa6542362e74bC4A03A4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12600000000000000000000000&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;staking&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;amount&quot;</span><span class="token operator">:</span><span class="token string">&quot;4000000000000000000000000&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;s256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0489907330798daedafa13b5aa49e0e96534c7ea52a2c410114ed805ad48a632f2f5fac9ddaed5a0bcb4bfdb774138f9d57a7801ca1e7f5b78a493273a7a67d3d3&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;bn256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x27c17579e1b798bceb028618d8a7844e9441fb88544fb4e99ae3f44c87ecd869045625db735652053418b552e43ecd8f4eff2e3227c2fdde5bc1fc4d51334377&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;0x588410e29AAF15ad40F8b2d765C937A24E2aC88f&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12600000000000000000000000&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;staking&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;amount&quot;</span><span class="token operator">:</span><span class="token string">&quot;4000000000000000000000000&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;s256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x04b2341932cc27c93487141254a33ee3156ef17e6389e03772229111eda533ae3e642d59018fb8dad7219655951665c7d0cf6b62d36912d28b7bcac32ab923459f&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;bn256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0e70496649d551da0c29fd31fd0dd9b249030b2fc6d4894f545265a015630c3d20742f52d34f0372cb1ed2b09169d3f0dbe495b977d115a0659c26db99dba498&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;0xf57639E8D9E018AF05676f0917ddbE92086077F1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12600000000000000000000000&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;staking&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;amount&quot;</span><span class="token operator">:</span><span class="token string">&quot;4000000000000000000000000&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;s256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x04c004d28655b84620a803caccce0c505f170eb2a6817e6da0be367fc55918b3c21f2eb2662bcc6c3c86fa5d3984560dbacd38f33bd24991eab574d2b4c645018e&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;bn256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x252a979ed24122507d6aa414146fb36efdf21a35a9dabdf5d6fa2e37e53d6b3919cc7acfb6a975a1ed02b4bcd8961845dd9fe163d9a9bd12bbbfbe0c0317d9fe&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;0xdb96f73e302C4E031901E230363aD72efa3df2AB&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12600000000000000000000000&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;staking&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;amount&quot;</span><span class="token operator">:</span><span class="token string">&quot;4000000000000000000000000&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;s256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x04f7f9310a29f6a617c5cdc5ea49e137db45ce12a3b729a8a7102d9077099856b76ec2f6301cd62c0c83b741f86a046a3da22840a3dfc96bbd6bed8f52983fa623&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;bn256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x086917166f9184737292503bce7eaa0a193b19aa0a825f1d93de5b6bcabb2d2f1b23d05dcdf050b61b5257e58e17ded046943f8567af862baeae287964695cef&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;0x115d53A7Ea2C372349F5a78e2A9ba31b84F01b42&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12600000000000000000000000&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;staking&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;amount&quot;</span><span class="token operator">:</span><span class="token string">&quot;4000000000000000000000000&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;s256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x04405ce5b62589b4f47e77a90fa96b9a70a04d3c94eea4ef8253f0708ffa9dc1a5d9860f88822904c0820c11a8e9568fe4aa7fe51888ec1c22622d0e98f86abc31&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;bn256pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0f3f1a2261df8f70a325ecefb68707532f85258de003a8181bb60f32c56329f1002fcdc6ca59502d9e449248ee2f006d68b44db194ab41e536706010877871f4&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;difficulty&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;0x100000&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;extraData&quot;</span>  <span class="token operator">:</span> <span class="token string">&quot;0xc45f2ec2ff75d2f28ac26973224e73ac866b22eeeffdb9112c9a413e0b8217a9987f5ebc03dbd2f846616dc728f84efda02eba6542362e74bc4a03a4588410e29aaf15ad40f8b2d765c937a24e2ac88ff57639e8d9e018af05676f0917ddbe92086077f1db96f73e302c4e031901e230363ad72efa3df2ab115d53a7ea2c372349f5a78e2a9ba31b84f01b42&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;gasLimit&quot;</span>   <span class="token operator">:</span> <span class="token string">&quot;0x2fefd8&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;nonce&quot;</span>      <span class="token operator">:</span> <span class="token string">&quot;0x0000000000000062&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;mixhash&quot;</span>    <span class="token operator">:</span> <span class="token string">&quot;0x0000000000000000000000000000000000000000000000000000000000000000&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;parentHash&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;0x0000000000000000000000000000000000000000000000000000000000000000&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;timestamp&quot;</span>  <span class="token operator">:</span> <span class="token string">&quot;0x00&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),p=[o];function c(i,r){return a(),s("div",null,p)}const u=n(t,[["render",c],["__file","modifyCode.html.vue"]]);export{u as default};
