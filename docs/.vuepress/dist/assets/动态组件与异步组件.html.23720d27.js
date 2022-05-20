import{a as n}from"./app.79cc4554.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u52A8\u6001\u7EC4\u4EF6-\u5F02\u6B65\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6-\u5F02\u6B65\u7EC4\u4EF6" aria-hidden="true">#</a> \u52A8\u6001\u7EC4\u4EF6 &amp; \u5F02\u6B65\u7EC4\u4EF6</h1><h2 id="\u52A8\u6001\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6" aria-hidden="true">#</a> \u52A8\u6001\u7EC4\u4EF6</h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u52A8\u6001\u5207\u6362\u7EC4\u4EF6\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u4F7F\u7528\u5230 <code>\u52A8\u6001\u7EC4\u4EF6</code>\u3002\u901A\u8FC7 <code>Vue</code> \u7684 <code>&lt;component&gt;</code> \u5143\u7D20\u52A0\u4E00\u4E2A\u7279\u6B8A\u7684 <code>is</code> attribute \u6765\u5B9E\u73B0\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- \u7EC4\u4EF6\u4F1A\u5728 \`currentTabComponent\` \u6539\u53D8\u65F6\u6539\u53D8 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentTabComponent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728\u4E0A\u8FF0\u793A\u4F8B\u4E2D\uFF0C<code>currentTabComponent</code> \u53EF\u4EE5\u5305\u62EC\uFF1A</p><ul><li><p>\u5DF2\u6CE8\u518C\u7EC4\u4EF6\u7684\u540D\u5B57\uFF0C\u6216</p></li><li><p>\u4E00\u4E2A\u7EC4\u4EF6\u9009\u9879\u5BF9\u8C61\u3002</p></li></ul><p>\u6848\u4F8B\uFF1A\u70B9\u51FB <code>\u52A8\u6001\u5207\u6362\u7EC4\u4EF6</code> \u6309\u94AE\uFF0C\u5207\u6362\u663E\u793A <code>Grandson</code> \u7EC4\u4EF6\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentComponent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeComponent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u52A8\u6001\u5207\u6362\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u5BFC\u5165\u666E\u901A\u7EC4\u4EF7</span>
<span class="token keyword">import</span> Children <span class="token keyword">from</span> <span class="token string">&#39;./Children.vue&#39;</span>
<span class="token keyword">import</span> Grandson <span class="token keyword">from</span> <span class="token string">&#39;./Grandson.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Children<span class="token punctuation">,</span>
    Grandson<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9ED8\u8BA4\u663E\u793AChildren\u7EC4\u4EF6</span>
    <span class="token keyword">const</span> currentComponent <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Children&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5207\u6362\u7EC4\u4EF6</span>
    <span class="token keyword">const</span> <span class="token function-variable function">changeComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      currentComponent<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;Grandson&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      currentComponent<span class="token punctuation">,</span>
      changeComponent<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u5F02\u6B65\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u7EC4\u4EF6" aria-hidden="true">#</a> \u5F02\u6B65\u7EC4\u4EF6</h2><p>\u5728\u5927\u578B\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u5C06\u5E94\u7528\u5206\u5272\u6210\u5C0F\u4E00\u4E9B\u7684\u4EE3\u7801\u5757\uFF0C\u5E76\u4E14\u53EA\u5728\u9700\u8981\u7684\u65F6\u5019\u624D\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u4E00\u4E2A\u6A21\u5757\u3002\u4E3A\u4E86\u5B9E\u73B0\u8FD9\u4E2A\u6548\u679C\uFF0C<code>Vue</code> \u6709\u4E00\u4E2A <code>defineAsyncComponent</code> \u65B9\u6CD5\u3002</p><h3 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h3><p>vue3\u4E2D\u7684Async Components\u5F02\u6B65\u7EC4\u4EF6\u4F7F\u7528\u8FDB\u884C\u4E86\u5F88\u5927\u7684\u6539\u52A8\uFF0C\u6539\u52A8\u5982\u4E0B\uFF1A</p><ul><li><p>\u4F7F\u7528 <code>defineAsyncComponent</code> \u65B9\u6CD5\u6765\u5B9A\u4E49async components\u5F02\u6B65\u7EC4\u4EF6\u3002</p></li><li><p>\u7EC4\u4EF6\u914D\u7F6E\u9879\u7684 <code>component</code> \u91CD\u65B0\u547D\u540D\u4E3A <code>loader</code>\u3002</p></li><li><p><code>loader</code> \u51FD\u6570\uFF08\u5BF9\u5E94vue2\u7684component\u51FD\u6570\uFF09\u4E0D\u518D\u63A5\u53D7 <code>resolve</code> \u548C <code>reject</code> \u53C2\u6570\uFF0C\u5E76\u4E14\u5FC5\u987B\u8FD4\u56DE <code>Promise</code>\u3002</p></li></ul><h3 id="vue2\u7684\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue2\u7684\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> vue2\u7684\u4F7F\u7528\u65B9\u5F0F</h3><p>vue2\u4E2D\u901A\u8FC7\u4E00\u4E2A\u8FD4\u56DE <code>Promise</code> \u51FD\u6570\u6765\u5B9A\u4E49async components\u5F02\u6B65\u7EC4\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">asyncLazy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./Lazy.vue&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u591A\u914D\u7F6E\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> asyncLazy <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./Lazy.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> ErrorComponent<span class="token punctuation">,</span>
  <span class="token literal-property property">loading</span><span class="token operator">:</span> LoadingComponent
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="vue3\u7684\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue3\u7684\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> vue3\u7684\u4F7F\u7528\u65B9\u5F0F</h3><p>\u5728vue3\u4E2D\uFF0C\u5B9A\u4E49async components\u5F02\u6B65\u7EC4\u4EF6\u5FC5\u987B\u4F7F\u7528 <code>defineAsyncComponent</code> \u65B9\u6CD5\u6765\u660E\u786E\u5B9A\u4E49async components\u5F02\u6B65\u7EC4\u4EF6\u800C\u4E0D\u662F\u540C\u6B65\u7EC4\u4EF6\u3002\u540C\u65F6\uFF0C<code>component</code> \u914D\u7F6E\u9879\u91CD\u65B0\u547D\u540D\u4E3A <code>loader</code>\u3002\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span> <span class="token comment">// \u9700\u8981\u5F15\u5165defineAsyncComponent</span>
<span class="token keyword">import</span> ErrorComponent <span class="token keyword">from</span> <span class="token string">&#39;./components/ErrorComponent.vue&#39;</span>
<span class="token keyword">import</span> LoadingComponent <span class="token keyword">from</span> <span class="token string">&#39;./components/LoadingComponent.vue&#39;</span>

<span class="token comment">// \u65E0\u914D\u7F6E\u9879\u5B9A\u4E49\u65B9\u5F0F</span>
<span class="token keyword">const</span> asyncLazy <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./Lazy.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u914D\u7F6E\u9879\u5B9A\u4E49\u65B9\u5F0F</span>
<span class="token keyword">const</span> asyncLazyWithOptions <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// component\u914D\u7F6E\u9879\u91CD\u65B0\u547D\u540D\u4E3Aloader</span>
  <span class="token function-variable function">loader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./Lazy.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">errorComponent</span><span class="token operator">:</span> ErrorComponent<span class="token punctuation">,</span>
  <span class="token literal-property property">loadingComponent</span><span class="token operator">:</span> LoadingComponent
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u914D\u7F6E\u9879\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879\u8BF4\u660E" aria-hidden="true">#</a> \u914D\u7F6E\u9879\u8BF4\u660E</h3><p>\u5BF9\u4E8E\u9AD8\u9636\u7528\u6CD5\uFF0C<code>defineAsyncComponent</code> \u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u4EE5\u4E0B\u683C\u5F0F\u7684\u5BF9\u8C61\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u5DE5\u5382\u51FD\u6570</span>
  <span class="token function-variable function">loader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./Foo.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// \u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6\u65F6\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6</span>
  <span class="token literal-property property">loadingComponent</span><span class="token operator">:</span> LoadingComponent<span class="token punctuation">,</span>
  <span class="token comment">// \u52A0\u8F7D\u5931\u8D25\u65F6\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6</span>
  <span class="token literal-property property">errorComponent</span><span class="token operator">:</span> ErrorComponent<span class="token punctuation">,</span>
  <span class="token comment">// \u5728\u663E\u793A loadingComponent \u4E4B\u524D\u7684\u5EF6\u8FDF | \u9ED8\u8BA4\u503C\uFF1A200\uFF08\u5355\u4F4D ms\uFF09</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5982\u679C\u63D0\u4F9B\u4E86 timeout \uFF0C\u5E76\u4E14\u52A0\u8F7D\u7EC4\u4EF6\u7684\u65F6\u95F4\u8D85\u8FC7\u4E86\u8BBE\u5B9A\u503C\uFF0C\u5C06\u663E\u793A\u9519\u8BEF\u7EC4\u4EF6</span>
  <span class="token comment">// \u9ED8\u8BA4\u503C\uFF1AInfinity\uFF08\u5373\u6C38\u4E0D\u8D85\u65F6\uFF0C\u5355\u4F4D ms\uFF09</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5B9A\u4E49\u7EC4\u4EF6\u662F\u5426\u53EF\u6302\u8D77 | \u9ED8\u8BA4\u503C\uFF1Atrue</span>
  <span class="token literal-property property">suspensible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">error</span> \u9519\u8BEF\u4FE1\u606F\u5BF9\u8C61
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">retry</span> \u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E\u6307\u793A\u5F53 promise \u52A0\u8F7D\u5668 reject \u65F6\uFF0C\u52A0\u8F7D\u5668\u662F\u5426\u5E94\u8BE5\u91CD\u8BD5
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">fail</span>  \u4E00\u4E2A\u51FD\u6570\uFF0C\u6307\u793A\u52A0\u8F7D\u7A0B\u5E8F\u7ED3\u675F\u9000\u51FA
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">attempts</span> \u5141\u8BB8\u7684\u6700\u5927\u91CD\u8BD5\u6B21\u6570
   */</span>
  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> retry<span class="token punctuation">,</span> fail<span class="token punctuation">,</span> attempts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">fetch</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> attempts <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8BF7\u6C42\u53D1\u751F\u9519\u8BEF\u65F6\u91CD\u8BD5\uFF0C\u6700\u591A\u53EF\u5C1D\u8BD5 3 \u6B21</span>
      <span class="token function">retry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6CE8\u610F\uFF0Cretry/fail \u5C31\u50CF promise \u7684 resolve/reject \u4E00\u6837\uFF1A</span>
      <span class="token comment">// \u5FC5\u987B\u8C03\u7528\u5176\u4E2D\u4E00\u4E2A\u624D\u80FD\u7EE7\u7EED\u9519\u8BEF\u5904\u7406\u3002</span>
      <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,24);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
