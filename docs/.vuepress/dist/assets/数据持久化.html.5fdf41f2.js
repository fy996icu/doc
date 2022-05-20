import{a as n}from"./app.79cc4554.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6570\u636E\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6301\u4E45\u5316" aria-hidden="true">#</a> \u6570\u636E\u6301\u4E45\u5316</h1><p><code>Pinia</code> \u548C <code>Vuex</code> \u540C\u6837\u5B58\u5728 <code>store</code> \u4E2D\u6570\u636E\u5728\u9875\u9762\u5237\u65B0\u540E\u4F1A\u88AB\u91CD\u7F6E\uFF0C<code>Pinia</code> \u4E2D\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u63D2\u4EF6 <code>pinia-plugin-persist</code> \u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> pinia-plugin-persist

<span class="token comment"># npm</span>
$ <span class="token function">npm</span> i pinia-plugin-persist
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u6539\u9020\u4E4B\u524D\u793A\u4F8B\u4EE3\u7801\uFF0C\u65B9\u4FBF\u540E\u9762\u662F\u6848\u4F8B\uFF1A</p><p>\u65B0\u5EFA <code>/src/store/index.ts</code> \u6587\u4EF6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// src/store/index.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token comment">// \u5BFC\u5165 pinia \u6570\u636E\u6301\u4E45\u5316\u63D2\u4EF6</span>
<span class="token keyword">import</span> piniaPluginPersist <span class="token keyword">from</span> <span class="token string">&#39;pinia-plugin-persist&#39;</span>

<span class="token comment">// \u521B\u5EFA store</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u4F7F\u7528\u63D2\u4EF6</span>
store<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPluginPersist<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4FEE\u6539 <code>/src/main.ts</code> \u6587\u4EF6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// src/main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// \u5BFC\u5165 store</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5F00\u542F\u6570\u636E\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u6570\u636E\u6301\u4E45\u5316" aria-hidden="true">#</a> \u5F00\u542F\u6570\u636E\u6301\u4E45\u5316</h2><p>\u5F00\u542F\u6570\u636E\u6301\u4E45\u5316\u53EA\u9700\u8981\u5728\u5BF9\u5E94\u7684 <code>store</code> \u4E2D\u5F00\u542F <code>persist</code> \u5373\u53EF\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// user.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u6570\u636E</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;Pinia&#39;</span><span class="token punctuation">,</span>
      userInfo<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9E\u73B0 count \u52A0 payload</span>
    <span class="token function">increment</span><span class="token punctuation">(</span>payload<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> payload
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F00\u542F\u6570\u636E\u6301\u4E45\u5316</span>
  persist<span class="token operator">:</span> <span class="token punctuation">{</span>
    enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5F53\u6211\u4EEC\u64CD\u4F5C\u8FC7 <code>store</code> \u6570\u636E\u540E\uFF0C\u5C31\u53EF\u4EE5\u5728\u672C\u5730\u50A8\u5B58\u4E2D\u770B\u5230\u50A8\u5B58\u7684\u6570\u636E\u4E86\u3002</p><p>\u6570\u636E\u9ED8\u8BA4\u5B58\u5728 <code>sessionStorage</code> \u91CC\uFF0C\u5E76\u4E14\u4F1A\u4EE5 <code>store</code> \u7684 <code>id</code> \u4F5C\u4E3A <code>key</code>\u3002</p><p><img src="https://gitee.com/fy0829/pics/raw/master/Pinia/pinia-persist.png" alt="img"></p><h2 id="\u81EA\u5B9A\u4E49-key" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-key" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 <code>key</code></h2><p>\u6570\u636E\u9ED8\u8BA4\u5B58\u5728 <code>sessionStorage</code> \u91CC\uFF0C\u5E76\u4E14\u4F1A\u4EE5 <code>store</code> \u7684 <code>id</code> \u4F5C\u4E3A <code>key</code>\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728 <code>strategies</code> \u91CC\u81EA\u5B9A\u4E49 <code>key</code> \u503C\uFF0C\u5E76\u5C06\u5B58\u653E\u4F4D\u7F6E\u7531 <code>sessionStorage</code> \u6539\u4E3A <code>localStorage</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// user.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u6570\u636E</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;Pinia&#39;</span><span class="token punctuation">,</span>
      userInfo<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9E\u73B0 count \u52A0 payload</span>
    <span class="token function">increment</span><span class="token punctuation">(</span>payload<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> payload
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F00\u542F\u6570\u636E\u6301\u4E45\u5316</span>
  persist<span class="token operator">:</span> <span class="token punctuation">{</span>
    enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    strategies<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u4FEE\u6539\u5B58\u50A8\u7684 key \u4E3A pinia_user</span>
        key<span class="token operator">:</span> <span class="token string">&#39;pinia_user&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5C06\u50A8\u5B58\u7684\u5730\u65B9\u6539\u4E3A localStorage</span>
        storage<span class="token operator">:</span> localStorage<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u6B64\u65F6\u6211\u4EEC\u80FD\u770B\u5230\u50A8\u5B58\u7684\u65B9\u5F0F\u548C key \u90FD\u53D1\u751F\u4E86\u6539\u53D8\uFF1A</p><p><img src="https://gitee.com/fy0829/pics/raw/master/Pinia/pinia-persist2.png" alt="img"></p><h2 id="\u6301\u4E45\u5316\u90E8\u5206-state" tabindex="-1"><a class="header-anchor" href="#\u6301\u4E45\u5316\u90E8\u5206-state" aria-hidden="true">#</a> \u6301\u4E45\u5316\u90E8\u5206 <code>State</code></h2><p>\u9ED8\u8BA4\u6240\u6709 <code>state</code> \u90FD\u4F1A\u8FDB\u884C\u7F13\u5B58\uFF0C\u6709\u65F6\u5019\u6211\u4EEC\u53EA\u9700\u8981\u7F13\u5B58\u4E00\u90E8\u5206\u6570\u636E\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>paths</code> \u6307\u5B9A\u8981\u6301\u4E45\u5316\u7684\u5B57\u6BB5\uFF0C\u5176\u4ED6\u7684\u5219\u4E0D\u4F1A\u8FDB\u884C\u6301\u4E45\u5316\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// user.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u6570\u636E</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;Pinia&#39;</span><span class="token punctuation">,</span>
      userInfo<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9E\u73B0 count \u52A0 payload</span>
    <span class="token function">increment</span><span class="token punctuation">(</span>payload<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> payload
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F00\u542F\u6570\u636E\u6301\u4E45\u5316</span>
  persist<span class="token operator">:</span> <span class="token punctuation">{</span>
    enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    strategies<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u4FEE\u6539\u5B58\u50A8\u7684 key \u4E3A pinia_user</span>
        key<span class="token operator">:</span> <span class="token string">&#39;pinia_user&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5C06\u50A8\u5B58\u7684\u5730\u65B9\u6539\u4E3A localStorage</span>
        storage<span class="token operator">:</span> localStorage<span class="token punctuation">,</span>
        <span class="token comment">// \u6301\u4E45\u5316\u6307\u5B9A\u6570\u636E-title\u3001userInfo</span>
        paths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;userInfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p><img src="https://gitee.com/fy0829/pics/raw/master/Pinia/pinia-persist3.png" alt="img"></p><p>\u4E0A\u9762\u6211\u4EEC\u53EA\u6301\u4E45\u5316 <code>title</code> \u548C <code>userInfo</code>\uFF0C\u6CA1\u6709\u6301\u4E45\u5316 <code>count</code>\uFF0C\u5982\u679C\u5176\u72B6\u6001\u53D1\u751F\u66F4\u6539\uFF0C\u9875\u9762\u5237\u65B0\u65F6 <code>count</code> \u5C06\u4F1A\u4E22\u5931\uFF0C\u91CD\u65B0\u56DE\u5230\u521D\u59CB\u72B6\u6001\uFF0C\u800C <code>title</code> \u548C <code>userInfo</code> \u5219\u4E0D\u4F1A\u3002</p>`,26);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
