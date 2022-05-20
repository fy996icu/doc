import{a as n}from"./app.79cc4554.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="fragments" tabindex="-1"><a class="header-anchor" href="#fragments" aria-hidden="true">#</a> Fragments</h1><p>React \u4E2D\u7684\u4E00\u4E2A\u5E38\u89C1\u6A21\u5F0F\u662F\u4E00\u4E2A\u7EC4\u4EF6\u8FD4\u56DE\u591A\u4E2A\u5143\u7D20\u3002<code>Fragments</code> \u5141\u8BB8\u4F60\u5C06\u5B50\u5217\u8868\u5206\u7EC4\uFF0C\u800C\u65E0\u9700\u5411 DOM \u6DFB\u52A0\u989D\u5916\u8282\u70B9\u3002</p><p><strong>\u5E38\u89C4\u7528\u6CD5\uFF1A</strong></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Fragment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Wrap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u4E0D\u9700\u8981\u5305\u88F9\u989D\u5916\u7684DOM\u8282\u70B9</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Wrap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u6BB5\u8BED\u6CD5\uFF1A</strong></p><p>\u4F7F\u7528 <code>&lt;&gt; &lt;/&gt;</code> \u5305\u88F9\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Wrap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u4E0D\u9700\u8981\u5305\u88F9\u989D\u5916\u7684DOM\u8282\u70B9</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Wrap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u4E24\u8005\u4E4B\u95F4\u7684\u533A\u522B\uFF1A</strong></p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p><code>Fragments</code> \u53EF\u4EE5\u4F7F\u7528 <code>key</code>\uFF0C\u4F46\u662F <code>&lt;&gt; &lt;/&gt;</code> \u4E0D\u80FD\u4F7F\u7528\u3002</p></div>`,9);function p(e,o){return t}var r=s(a,[["render",p]]);export{r as default};