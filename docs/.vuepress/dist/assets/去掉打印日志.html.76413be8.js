import{a as n}from"./app.79cc4554.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u53BB\u6389\u6253\u5370\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u53BB\u6389\u6253\u5370\u65E5\u5FD7" aria-hidden="true">#</a> \u53BB\u6389\u6253\u5370\u65E5\u5FD7</h1><p>\u76EE\u7684\uFF1A\u53BB\u6389\u751F\u4EA7\u73AF\u5883\u7684console.log\u65E5\u5FD7\uFF0C\u4FDD\u7559\u5F00\u53D1\u73AF\u5883\u7684console.log\u65E5\u5FD7\u3002</p><p>\u63D2\u4EF6\uFF1A<code>babel-plugin-transform-remove-console</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> babel-plugin-transform-remove-console -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u6587\u4EF6\uFF1A<code>babel.config.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9879\u76EE\u5728\u53D1\u5E03\u65F6\u9700\u8981\u7528\u5230\u7684babel\u63D2\u4EF6</span>
<span class="token keyword">const</span> proPlugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u751F\u4EA7\u73AF\u5883\u53BB\u6389console.log</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  proPlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;transform-remove-console&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;@vue/cli-plugin-babel/preset&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>proPlugins<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,6);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
