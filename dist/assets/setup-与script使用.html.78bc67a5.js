import{e as p,o as e,c,f as n,g as o,w as l,F as u,a,i as s}from"./app.4985c1a7.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=a(`<h1 id="\u4E0E\u666E\u901A\u7684-script-\u4E00\u8D77\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u666E\u901A\u7684-script-\u4E00\u8D77\u4F7F\u7528" aria-hidden="true">#</a> \u4E0E\u666E\u901A\u7684 <code>&lt;script&gt;</code> \u4E00\u8D77\u4F7F\u7528</h1><h2 id="\u4F5C\u7528\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u4ECB\u7ECD" aria-hidden="true">#</a> \u4F5C\u7528\u4ECB\u7ECD</h2><p><code>&lt;script setup&gt;</code> \u53EF\u4EE5\u548C\u666E\u901A\u7684 <code>&lt;script&gt;</code> \u4E00\u8D77\u4F7F\u7528\u3002\u666E\u901A\u7684 <code>&lt;script&gt;</code> \u5728\u6709\u8FD9\u4E9B\u9700\u8981\u7684\u60C5\u51B5\u4E0B\u6216\u8BB8\u4F1A\u88AB\u4F7F\u7528\u5230\uFF1A</p><ul><li><p>\u65E0\u6CD5\u5728 <code>&lt;script setup&gt;</code> \u58F0\u660E\u7684\u9009\u9879\uFF0C\u4F8B\u5982 <code>inheritAttrs</code> \u6216\u901A\u8FC7\u63D2\u4EF6\u542F\u7528\u7684\u81EA\u5B9A\u4E49\u7684\u9009\u9879\u3002</p></li><li><p>\u58F0\u660E\u547D\u540D\u5BFC\u51FA\u3002</p></li><li><p>\u8FD0\u884C\u526F\u4F5C\u7528\u6216\u8005\u521B\u5EFA\u53EA\u9700\u8981\u6267\u884C\u4E00\u6B21\u7684\u5BF9\u8C61\u3002</p></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u666E\u901A &lt;script&gt;, \u5728\u6A21\u5757\u8303\u56F4\u4E0B\u6267\u884C(\u53EA\u6267\u884C\u4E00\u6B21)</span>
<span class="token function">runSideEffectOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u58F0\u660E\u989D\u5916\u7684\u9009\u9879</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">customOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u5728 setup() \u4F5C\u7528\u57DF\u4E2D\u6267\u884C (\u5BF9\u6BCF\u4E2A\u5B9E\u4F8B\u7686\u5982\u6B64)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><p>\u5B50\u7EC4\u4EF6\u4F7F\u7528 <code>&lt;script setup&gt;</code> \u65F6\uFF0C<code>&lt;script setup&gt;</code> \u5185\u90E8\u9ED8\u8BA4\u662F\u5173\u95ED\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u7236\u7EC4\u4EF6\u65E0\u6CD5\u901A\u8FC7 <code>ref</code> \u83B7\u53D6\u5230\u5B50\u7EC4\u4EF6\u5185\u90E8\u7684 <code>\u5C5E\u6027</code> \u548C <code>\u65B9\u6CD5</code>\u3002</p><p>\u8981\u60F3\u7236\u7EC4\u4EF6\u901A\u8FC7 <code>ref</code> \u7684\u65B9\u5F0F\u83B7\u53D6\u5230\u5B50\u7EC4\u4EF6\u7684 <code>\u5C5E\u6027</code> \u548C <code>\u65B9\u6CD5</code>\uFF1A</p>`,8),b=n("li",null,[n("p",null,[s("\u53EF\u4EE5\u8BA9\u5B50\u7EC4\u4EF6\u4F7F\u7528\u666E\u901A\u7684 "),n("code",null,"<script>"),s("\uFF0C\u5E76\u4E14\u5728 "),n("code",null,"setup()"),s(" \u65B9\u6CD5\u4E2D\u5C06\u9700\u8981\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u5C5E\u6027\u548C\u65B9\u6CD5 "),n("code",null,"return"),s(" \u51FA\u53BB\u3002")])],-1),d=s("\u5B50\u7EC4\u4EF6\u4F9D\u7136\u4F7F\u7528 "),g=n("code",null,"<script setup>",-1),m=s("\uFF0C\u4F46\u5728\u5176\u5185\u90E8\u4F7F\u7528 "),h=s("defineExpose"),v=s(" \u5B8F\u547D\u4EE4\u5C06\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u66B4\u9732\u51FA\u53BB\u3002"),f=a(`<h2 id="\u5B50\u7EC4\u4EF6\u4F7F\u7528-script-setup" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7EC4\u4EF6\u4F7F\u7528-script-setup" aria-hidden="true">#</a> \u5B50\u7EC4\u4EF6\u4F7F\u7528 <code>&lt;script setup&gt;</code></h2><p>\u5B50\u7EC4\u4EF6\u4F7F\u7528 <code>&lt;script setup&gt;</code>\uFF0C\u6B64\u65F6\uFF0C\u7236\u7EC4\u4EF6\u662F\u4E0D\u80FD\u901A\u8FC7 <code>ref.value.xxx</code> \u83B7\u53D6\u5230\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- Father\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Children</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>childRef<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Children <span class="token keyword">from</span> <span class="token string">&#39;./Children.vue&#39;</span>
<span class="token keyword">const</span> childRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53D1\u73B0 [[Target]] \u4EC0\u4E48\u90FD\u6CA1\u6709\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u5B50\u7EC4\u4EF6\u7684 count\u5C5E\u6027 \u548C setCount\u65B9\u6CD5</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>childRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\uFF1A[[Target]]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- Children\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setCount<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8BA1\u6570\u5668<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// \u5B50\u7EC4\u4EF6\u7684 count \u5C5E\u6027</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6\u5B9A\u4E49\u7684 setCount \u65B9\u6CD5</span>
<span class="token keyword">const</span> <span class="token function-variable function">setCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  count<span class="token punctuation">.</span>value<span class="token operator">++</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u5B50\u7EC4\u4EF6\u4F7F\u7528-script" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7EC4\u4EF6\u4F7F\u7528-script" aria-hidden="true">#</a> \u5B50\u7EC4\u4EF6\u4F7F\u7528 <code>&lt;script&gt;</code></h2><p>\u5B50\u7EC4\u4EF6\u4F7F\u7528\u666E\u901A <code>&lt;script&gt;</code>\uFF0C\u5E76\u4E14\u5728 <code>setup()</code> \u51FD\u6570\u4E2D <code>return</code> \u5C5E\u6027\u6216\u65B9\u6CD5\u65F6\uFF0C\u7236\u7EC4\u4EF6\u5219\u53EF\u4EE5\u901A\u8FC7 <code>ref.value.xxx</code> \u83B7\u53D6\u5230\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- Father\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Children</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>childRef<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Children <span class="token keyword">from</span> <span class="token string">&#39;./Children.vue&#39;</span>
<span class="token keyword">const</span> childRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53D1\u73B0 [[Target]] \u51FA\u73B0\u5B50\u7EC4\u4EF6\u7684 count\u5C5E\u6027 \u548C setCount\u65B9\u6CD5</span>
  <span class="token comment">// \u8F93\u51FA\uFF1A[[Target]]- count\uFF1A0  setCount: () =&gt; ()</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>childRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- Children\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B50\u7EC4\u4EF6\u7684 count \u5C5E\u6027</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5B50\u7EC4\u4EF6\u5B9A\u4E49\u7684 setCount \u65B9\u6CD5</span>
    <span class="token keyword">const</span> <span class="token function-variable function">setCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B50\u7EC4\u4EF6\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5BFC\u51FA-\u7236\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7 ref \u62FF\u5230</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
      setCount<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,8);function _(y,w){const t=p("RouterLink");return e(),c(u,null,[k,n("ul",null,[b,n("li",null,[n("p",null,[d,g,m,o(t,{to:"/document/vue3/setup-defineExpose.html"},{default:l(()=>[h]),_:1}),v])])]),f],64)}var C=r(i,[["render",_]]);export{C as default};
