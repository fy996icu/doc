import{a as n}from"./app.4985c1a7.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u8DEF\u7531\u5207\u6362\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5207\u6362\u52A8\u753B" aria-hidden="true">#</a> \u8DEF\u7531\u5207\u6362\u52A8\u753B</h1><p>\u4F5C\u7528\uFF1A\u8DEF\u7531\u5207\u6362\u65F6\u6DFB\u52A0\u4E00\u4E2A\u8FC7\u6E21\u6548\u679C\u3002</p><p>\u4F9D\u8D56\u7EC4\u4EF6\uFF1A<code>&lt;transition&gt;&lt;/transition&gt;</code></p><p>vue\u6587\u4EF6\u914D\u7F6E\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- \u6DFB\u52A0\u8FC7\u6E21\u7EC4\u4EF6\u5305\u88F9routerView\u7EC4\u4EF6\uFF0C\u547D\u540D&quot;fade-transform&quot;\uFF0C\u6A21\u5F0F&quot;out-in&quot; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fade-transform<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>out-in<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>css/less/scss\u914D\u7F6E\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u8FC7\u6E21\u52A8\u753B</span>
<span class="token selector">.fade-enter-active,
.fade-leave-active</span><span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.28s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fade-enter,
.fade-leave-active</span><span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fade-transform-leave-active,
.fade-transform-enter-active</span><span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all .5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fade-transform-enter</span><span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token operator">-</span>30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fade-transform-leave-to</span><span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,7);function t(e,c){return p}var r=s(a,[["render",t]]);export{r as default};
