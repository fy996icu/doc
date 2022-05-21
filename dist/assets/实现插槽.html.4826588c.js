import{a as n}from"./app.4985c1a7.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5B9E\u73B0\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u63D2\u69FD" aria-hidden="true">#</a> \u5B9E\u73B0\u63D2\u69FD</h1><p>React\u4E2D\u5E76\u6CA1\u6709 <code>\u63D2\u69FD</code> \u7684\u6982\u5FF5\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7 <code>\u7EC4\u5408</code> \u7684\u65B9\u5F0F\u6765\u6A21\u62DF\u5B9E\u73B0\u63D2\u69FD\u3002</p><p>React \u6709\u5341\u5206\u5F3A\u5927\u7684\u7EC4\u5408\u6A21\u5F0F\u3002\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 <code>\u7EC4\u5408</code> \u800C\u975E\u7EE7\u627F\u6765\u5B9E\u73B0\u7EC4\u4EF6\u95F4\u7684\u4EE3\u7801\u91CD\u7528\uFF0C\u53EF\u4EE5\u5C06\u4EFB\u4F55\u4E1C\u897F\u4F5C\u4E3A <code>props</code> \u8FDB\u884C\u4F20\u9012\u3002</p><h2 id="\u9ED8\u8BA4\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u63D2\u69FD" aria-hidden="true">#</a> \u9ED8\u8BA4\u63D2\u69FD</h2><p>\u5728React\u4E2D\u8981\u5B9E\u73B0\u7C7B\u4F3C <code>Vue</code> \u4E2D\u7684\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u8981\u501F\u52A9 <code>props.children</code> \u6765\u5B9E\u73B0\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">const</span> <span class="token function-variable function">Father</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Child</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Child</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
<span class="token keyword">const</span> <span class="token function-variable function">Child</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u901A\u8FC7props.children\u83B7\u53D6\u5230\u7236\u7EC4\u4EF6\u4E2D\u5B50\u7EC4\u4EF6\u6807\u7B7E\u4E2D\u95F4\u7684\u5185\u5BB9</span>
  <span class="token comment">// \u8F93\u51FA\u7EA2\u8272\u6587\u672C\uFF1A\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Father<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><code>Child</code> \u7EC4\u4EF6\u4E2D\u7684 <code>props.children</code> \u5C31\u662F:</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5177\u540D\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u5177\u540D\u63D2\u69FD" aria-hidden="true">#</a> \u5177\u540D\u63D2\u69FD</h2><p>\u5728React\u4E2D\u8981\u5B9E\u73B0\u7C7B\u4F3C <code>Vue</code> \u4E2D\u7684\u5177\u540D\u63D2\u69FD\uFF0C\u8981\u501F\u52A9 <code>props</code> \u6765\u4F20\u9012\u7EC4\u4EF6\u5B9E\u73B0\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5916\u5C42\u7EC4\u4EF6</span>
<span class="token keyword">const</span> <span class="token function-variable function">Wrap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span> <span class="token attr-name">left</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Left</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span> <span class="token attr-name">right</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Right</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5185\u5BB9\u7EC4\u4EF6</span>
<span class="token keyword">const</span> <span class="token function-variable function">Content</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* \u8F93\u51FA\uFF1A\u5DE6\u4FA7 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>left<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* \u8F93\u51FA\uFF1A\u53F3\u4FA7 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>right<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5DE6\u4FA7\u7EC4\u4EF6</span>
<span class="token keyword">const</span> <span class="token function-variable function">Left</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u5DE6\u4FA7</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u53F3\u4FA7\u7EC4\u4EF6</span>
<span class="token keyword">const</span> <span class="token function-variable function">Right</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u53F3\u4FA7</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Wrap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u5C06 <code>Left</code> \u548C <code>Right</code> \u7EC4\u4EF6\u901A\u8FC7 <code>props</code> \u4F20\u9012\u7ED9 <code>Content</code> \u7EC4\u4EF6\u3002</p><p><code>Content</code> \u7EC4\u4EF6\u901A\u8FC7 <code>props.left</code> \u548C <code>props.right</code> \u83B7\u53D6\u4F20\u9012\u8FC7\u6765\u7684\u7EC4\u4EF6\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7C7B\u4F3C <code>Vue</code> \u4E2D\u7684 <code>\u5177\u540D\u63D2\u69FD</code> \u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6B64\u65B9\u6CD5\u65E0\u6CD5\u5B9E\u73B0 <code>Content</code> \u7EC4\u4EF6\u5411 <code>Left</code> \u548C <code>Right</code> \u7EC4\u4EF6\u4F20\u503C\u3002\u9700\u8981\u5B9E\u73B0\u4F20\u503C\u53EF\u4EE5\u4F7F\u7528 <a href="#render-props">Render Props</a></p></div><p>\u67E5\u770B <a href="#render-props">Render Props</a></p>`,15);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};
