import{e as t,o as p,c as e,f as n,g as o,w as c,F as l,a as u,i as s}from"./app.79cc4554.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},k=u(`<h1 id="defineexpose" tabindex="-1"><a class="header-anchor" href="#defineexpose" aria-hidden="true">#</a> <code>defineExpose</code></h1><h2 id="\u9ED8\u8BA4\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u5173\u95ED" aria-hidden="true">#</a> \u9ED8\u8BA4\u5173\u95ED</h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u5728\u5B50\u7EC4\u4EF6\u4E0A\u9762\u7ED1\u5B9A\u4E00\u4E2A <code>ref</code>\uFF0C\u7528\u4E8E\u76F4\u63A5\u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002\u4F46\u662F\u5B98\u65B9\u6587\u6863\u6307\u51FA\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528 <code>&lt;script setup&gt;</code> \u7684\u7EC4\u4EF6\u662F\u9ED8\u8BA4\u5173\u95ED\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u901A\u8FC7\u6A21\u677F <code>ref</code> \u6216\u8005 <code>$parent</code> \u6765\u83B7\u53D6\u5230\u7684\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF0C\u5E76\u4E0D\u4F1A\u66B4\u9732\u4EFB\u4F55\u5728 <code>&lt;script setup&gt;</code> \u4E2D\u58F0\u660E\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- Father\u7EC4\u4EF6 --&gt;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u66B4\u9732\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u66B4\u9732\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> \u66B4\u9732\u5C5E\u6027\u548C\u65B9\u6CD5</h2><p>\u4E3A\u4E86\u5728 <code>&lt;script setup&gt;</code> \u7EC4\u4EF6\u4E2D\u660E\u786E\u8981\u66B4\u9732\u51FA\u53BB\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u4F7F\u7528 <code>defineExpose</code> \u8FD9\u4E2A\u5B8F\u547D\u4EE4\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- Father\u7EC4\u4EF6 --&gt;</span>
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
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- Children\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6\u7684 count \u5C5E\u6027</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6\u5B9A\u4E49\u7684 setCount \u65B9\u6CD5</span>
<span class="token keyword">const</span> <span class="token function-variable function">setCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B50\u7EC4\u4EF6\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4F7F\u7528 defineExpose \u5B8F\u547D\u4EE4\u5C06\u5C5E\u6027\u548C\u65B9\u6CD5\u66B4\u9732\u51FA\u53BB</span>
<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  count<span class="token punctuation">,</span>
  setCount<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u5F53\u7236\u7EC4\u4EF6\u901A\u8FC7\u6A21\u677F <code>ref</code> \u7684\u65B9\u5F0F\u83B7\u53D6\u5230\u5F53\u524D\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF0C\u83B7\u53D6\u5230\u7684\u5B9E\u4F8B\u4F1A\u50CF\u8FD9\u6837 <code>{ count: number, setCount: () =&gt; void }</code> (<code>ref</code> \u4F1A\u548C\u5728\u666E\u901A\u5B9E\u4F8B\u4E2D\u4E00\u6837\u88AB\u81EA\u52A8\u89E3\u5305)\u3002</p><h2 id="\u7279\u522B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u7279\u522B\u8BF4\u660E" aria-hidden="true">#</a> \u7279\u522B\u8BF4\u660E</h2>`,11),b=s("\u4F7F\u7528 "),d=n("code",null,"ref",-1),m=s(" \u7B49\u65B9\u5F0F\u53BB\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u65B9\u6CD5\u6216\u8005\u7EC4\u4EF6\u5C5E\u6027\u672C\u8EAB\u5C31\u4E0D\u662F\u63A8\u8350\u7684\uFF08vue\u3001"),g=s("react"),h=s(" \u5B98\u65B9\u90FD\u6709\u63D0\u53CA\uFF0C"),v=n("code",null,"ref",-1),f=s(" \u7684\u65B9\u5F0F\u5E76\u4E0D\u63A8\u8350\uFF09\uFF0C\u6240\u4EE5 "),_=n("code",null,"defineExpose",-1),w=s(" \u4F7F\u7528\u7684\u9891\u7387\u4E0D\u9AD8\u3002"),x=n("li",null,[n("p",null,[s("\u5411\u5916\u66B4\u9732\u65B9\u6CD5\u6216\u8005\u5C5E\u6027\uFF0C\u90A3\u4E48\u4E5F\u5E76\u4E0D\u9700\u8981\u66B4\u9732\u592A\u591A\uFF0C\u6240\u4EE5 "),n("code",null,"defineExpose"),s(" \u5B8C\u5168\u80FD\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\u3002")])],-1);function q(y,C){const a=t("RouterLink");return p(),e(l,null,[k,n("ul",null,[n("li",null,[n("p",null,[b,d,m,o(a,{to:"/document/react/ref&dom.html#%E5%88%9B%E5%BB%BArefs"},{default:c(()=>[g]),_:1}),h,v,f,_,w])]),x])],64)}var B=i(r,[["render",q]]);export{B as default};
