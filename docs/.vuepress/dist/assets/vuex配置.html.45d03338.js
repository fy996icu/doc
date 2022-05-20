import{a as n}from"./app.79cc4554.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="vuex\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vuex\u914D\u7F6E" aria-hidden="true">#</a> Vuex\u914D\u7F6E</h1><h2 id="vuex\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#vuex\u6301\u4E45\u5316" aria-hidden="true">#</a> Vuex\u6301\u4E45\u5316</h2><p>\u539F\u59CB\u95EE\u9898\uFF1A\u9875\u9762\u5237\u65B0\u540E\u5BFC\u81F4<code>state</code>\u6570\u636E\u88AB\u521D\u59CB\u5316\u8FD8\u539F\u3002</p><p>\u63D2\u4EF6\u89E3\u51B3\uFF1A<code>vuex-persistedstate</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> vuex-persistedstate
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="mutations\u4FEE\u6539\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#mutations\u4FEE\u6539\u65E5\u5FD7" aria-hidden="true">#</a> mutations\u4FEE\u6539\u65E5\u5FD7</h2><p>\u4F5C\u7528\uFF1A\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u67E5\u770B\u63D0\u4EA4<code>mutations</code>\u7684\u60C5\u51B5\u3002</p><p>\u6A21\u5757\uFF1A<code>vuex/dist/logger</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> createLogger <span class="token keyword">from</span> <span class="token string">&quot;vuex/dist/logger&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5316" aria-hidden="true">#</a> \u6A21\u5757\u5316</h2><p>\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u251C\u2500\u2500 index.html
\u251C\u2500\u2500 main.js
\u251C\u2500\u2500 api
\u2502   \u2514\u2500\u2500 <span class="token punctuation">..</span>. <span class="token comment"># \u62BD\u53D6\u51FAAPI\u8BF7\u6C42</span>
\u251C\u2500\u2500 components
\u2502   \u251C\u2500\u2500 App.vue
\u2502   \u2514\u2500\u2500 <span class="token punctuation">..</span>.
\u2514\u2500\u2500 store
    \u251C\u2500\u2500 index.js          <span class="token comment"># \u6211\u4EEC\u7EC4\u88C5\u6A21\u5757\u5E76\u5BFC\u51FA store \u7684\u5730\u65B9</span>
    \u2514\u2500\u2500 modules						<span class="token comment"># \u6A21\u5757\u6587\u4EF6\u5939</span>
        \u251C\u2500\u2500 global.js       <span class="token comment"># \u8D2D\u7269\u8F66\u6A21\u5757</span>
        \u2514\u2500\u2500 products.js   <span class="token comment"># \u4EA7\u54C1\u6A21\u5757</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>index.js\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6A21\u5757</span>
<span class="token keyword">import</span> global <span class="token keyword">from</span> <span class="token string">&quot;./modules/global&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u6DFB\u52A0\u6A21\u5757</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    global<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6A21\u5757\u6587\u4EF6\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// global.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">state</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>	<span class="token comment">// \u6570\u636E\u4ED3\u5E93</span>
  <span class="token comment">// menu\u5BBD\u5EA6</span>
  <span class="token literal-property property">menuSize</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span>
  <span class="token comment">// menu\u662F\u5426\u5C55\u5F00</span>
  <span class="token literal-property property">isCollapse</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6A21\u5757getters</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u6A21\u5757actions</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u6A21\u5757mutations</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5207\u6362menu\u5BBD\u5EA6</span>
  <span class="token function">changeMenuSize</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>menuSize <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">;</span>
      state<span class="token punctuation">.</span>isCollapse <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>menuSize <span class="token operator">=</span> <span class="token number">64</span><span class="token punctuation">;</span>
      state<span class="token punctuation">.</span>isCollapse <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>		<span class="token comment">// \u5F00\u542F\u547D\u540D\u7A7A\u95F4</span>
  <span class="token comment">// \u5BFC\u51FA</span>
  state<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  actions<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="\u5B8C\u6574\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u914D\u7F6E" aria-hidden="true">#</a> \u5B8C\u6574\u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// index.js</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F15\u5165\u6301\u4E45\u5316\u63D2\u4EF6</span>
<span class="token keyword">import</span> createPersistedstate <span class="token keyword">from</span> <span class="token string">&quot;vuex-persistedstate&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6A21\u5757</span>
<span class="token keyword">import</span> global <span class="token keyword">from</span> <span class="token string">&quot;./modules/global&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6253\u5370\u4FEE\u6539\u65E5\u5FD7</span>
<span class="token keyword">import</span> createLogger <span class="token keyword">from</span> <span class="token string">&quot;vuex/dist/logger&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A\u5F00\u53D1\u73AF\u5883--\u5F00\u53D1\u73AF\u5883debug\u4E3Atrue</span>
<span class="token keyword">const</span> debug <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u7F13\u5B58\u914D\u7F6E</span>
<span class="token keyword">const</span> createPersisted <span class="token operator">=</span> <span class="token function">createPersistedstate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;cache-vuex&quot;</span><span class="token punctuation">,</span>	<span class="token comment">// \u672C\u90FD\u5B58\u653E\u7684key\u540D</span>
  <span class="token literal-property property">storage</span><span class="token operator">:</span> window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">,</span>	<span class="token comment">// \u5B58\u653E\u7684\u5730\u65B9sessionStorage\u6216\u8005localStorage</span>
  <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token punctuation">{</span>	<span class="token comment">// \u6A21\u5757global--\u8FD9\u6837\u624D\u80FD\u5B58\u653E\u5F00\u542F\u4E86\u547D\u540D\u7A7A\u95F4\u7684\u6A21\u5757</span>
        <span class="token literal-property property">menuSize</span><span class="token operator">:</span> state<span class="token punctuation">.</span>global<span class="token punctuation">.</span>menuSize<span class="token punctuation">,</span>	<span class="token comment">// \u9700\u8981\u7F13\u5B58\u7684\u6570\u636E</span>
        <span class="token literal-property property">isCollapse</span><span class="token operator">:</span> state<span class="token punctuation">.</span>global<span class="token punctuation">.</span>isCollapse<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u6DFB\u52A0\u6A21\u5757</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    global<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6DFB\u52A0\u63D2\u4EF6--\u662F\u5426\u5F00\u542F\u5F00\u53D1\u73AF\u5883\u4FEE\u6539\u65E5\u5FD7\u63D2\u4EF6</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> debug <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> createPersisted<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span>createPersisted<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,18);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
