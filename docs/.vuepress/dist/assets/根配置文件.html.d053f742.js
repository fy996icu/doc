import{a as n}from"./app.79cc4554.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6839\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6839\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u6839\u914D\u7F6E\u6587\u4EF6</h1><h2 id="browserslistrc" tabindex="-1"><a class="header-anchor" href="#browserslistrc" aria-hidden="true">#</a> .browserslistrc</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; 1%
last 2 versions
not dead
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="editorconfig" tabindex="-1"><a class="header-anchor" href="#editorconfig" aria-hidden="true">#</a> .editorconfig</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8868\u793A\u662F\u6700\u9876\u5C42\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u53D1\u73B0\u8BBE\u4E3Atrue\u65F6\uFF0C\u624D\u4F1A\u505C\u6B62\u67E5\u627E.editorconfig\u6587\u4EF6
root = true
# \u5339\u914D\u7684\u6587\u4EF6
[*.{js,jsx,ts,tsx,vue,json}]
# \u8BBE\u7F6E\u7F16\u7801
charset = utf-8

# \u8BBE\u7F6E\u7F29\u8FDB\u98CE\u683C(tab\u662F\u786C\u7F29\u8FDB\uFF0Cspace\u4E3A\u8F6F\u7F29\u8FDB)
indent_style = tab

# \u7F29\u8FDB\u7684\u5BBD\u5EA6
# indent_size = 8

# tab\u7F29\u8FDB\u7684\u5217\u6570
tab_width = 2

# \u8BBE\u4E3Atrue\u8868\u793A\u4F1A\u53BB\u9664\u6362\u884C\u884C\u9996\u7684\u4EFB\u610F\u7A7A\u767D\u5B57\u7B26
trim_trailing_whitespace = true

# \u8BBE\u4E3Atrue\u8868\u793A\u4F7F\u6587\u4EF6\u4EE5\u4E00\u4E2A\u7A7A\u767D\u884C\u7ED3\u5C3E
insert_final_newline = true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> .env</h2><p><strong><code>.env.development</code></strong></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u9664 <code>NODE_ENV</code> \u5916\uFF0C\u53EA\u80FD\u4EE5 <code>VUE_APP_</code> \u5F00\u5934\uFF0C\u5E76\u4E14\u4E3A\u5927\u5199\u3002</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>NODE_ENV = development
VUE_APP_HOST = http://xxx.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong><code>.env.production</code></strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>NODE_ENV = production
VUE_APP_HOST = http://xxx.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong><code>.env.test</code></strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>NODE_ENV = test
VUE_APP_HOST = http://xxx.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="eslintrc-js" tabindex="-1"><a class="header-anchor" href="#eslintrc-js" aria-hidden="true">#</a> .eslintrc.js</h2><p>\u6839\u636E\u9700\u6C42\u81EA\u7531\u6DFB\u52A0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;plugin:vue/essential&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@vue/prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;babel-eslint&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;no-console&quot;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;warn&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-debugger&quot;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;warn&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
		<span class="token string-property property">&quot;no-var&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token comment">//\u7981\u6B62\u4F7F\u7528var\u58F0\u660E\u53D8\u91CF</span>
		<span class="token string-property property">&quot;no-new-func&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token comment">//\u7981\u6B62\u4F7F\u7528new Function</span>
		<span class="token string-property property">&quot;no-new-object&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token comment">//\u7981\u6B62\u4F7F\u7528new Object()</span>
		<span class="token string-property property">&quot;no-new-require&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token comment">//\u7981\u6B62\u4F7F\u7528new require</span>
		<span class="token string-property property">&quot;no-new-wrappers&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token comment">//\u7981\u6B62\u4F7F\u7528new\u521B\u5EFA\u5305\u88C5\u5B9E\u4F8B\uFF0Cnew String new Boolean new Number</span>
		<span class="token string-property property">&quot;eqeqeq&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token comment">//\u5FC5\u987B\u4F7F\u7528\u5168\u7B49</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;WeixinJSBridge&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span> <span class="token comment">// \u5168\u5C40\u4E0D\u6821\u9A8C</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore" aria-hidden="true">#</a> .gitignore</h2><p>\u6839\u636E\u9700\u6C42\u81EA\u7531\u6DFB\u52A0</p><div class="language-git ext-git line-numbers-mode"><pre class="language-git"><code>.DS_Store
node_modules
/dist


<span class="token comment"># local env files</span>
.env.local
.env.*.local

<span class="token comment"># Log files</span>
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

<span class="token comment"># Editor directories and files</span>
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="prettierrc" tabindex="-1"><a class="header-anchor" href="#prettierrc" aria-hidden="true">#</a> .prettierrc</h2><p>\u6839\u636E\u9700\u6C42\u81EA\u7531\u6DFB\u52A0</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="babel-config-js" tabindex="-1"><a class="header-anchor" href="#babel-config-js" aria-hidden="true">#</a> babel.config.js</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9879\u76EE\u5728\u53D1\u5E03\u65F6\u9700\u8981\u7528\u5230\u7684babel\u63D2\u4EF6\u6570\u7EC4</span>
<span class="token keyword">const</span> proPlugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u751F\u4EA7\u73AF\u5883\u53BB\u6389console</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	proPlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;transform-remove-console&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@vue/cli-plugin-babel/preset&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token operator">...</span>proPlugins<span class="token punctuation">,</span>
    <span class="token comment">// \u6B64\u5904\u4E3AvantUI\u6309\u9700\u52A0\u8F7D</span>
		<span class="token punctuation">[</span>
			<span class="token string">&quot;import&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&quot;vant&quot;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">libraryDirectory</span><span class="token operator">:</span> <span class="token string">&quot;es&quot;</span><span class="token punctuation">,</span>
				<span class="token function-variable function">style</span><span class="token operator">:</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/style/less</span><span class="token template-punctuation string">\`</span></span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token string">&quot;vant&quot;</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="postcss-config-js" tabindex="-1"><a class="header-anchor" href="#postcss-config-js" aria-hidden="true">#</a> postcss.config.js</h2><p>\u79FB\u52A8\u7AEF\u9879\u76EE\u53EF\u914D\u7F6E\u8BE5\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;postcss-pxtorem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6B64\u5904\u914D\u7F6E\u662FvantUI\u6309\u9700\u52A0\u8F7D</span>
			<span class="token function">rootValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> file <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> file<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;vant&quot;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token number">37.5</span> <span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token literal-property property">selectorBlackList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.no-rem&quot;</span><span class="token punctuation">]</span> <span class="token comment">// \u4E0D\u8F6C\u6362\u4EE5no-rem\u5F00\u5934\u7684class</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="vue-config-js" tabindex="-1"><a class="header-anchor" href="#vue-config-js" aria-hidden="true">#</a> vue.config.js</h2><p>vue\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA<code>vue.config.js</code>\u6587\u4EF6\uFF1A</p><p>\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// page \u7684\u5165\u53E3</span>
      <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;src/main.js&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6A21\u677F\u6765\u6E90</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;public/index.html&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5728 dist/index.html \u7684\u8F93\u51FA</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;index.html&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5F53\u4F7F\u7528 title \u9009\u9879\u65F6\uFF0C</span>
      <span class="token comment">// template \u4E2D\u7684 title \u6807\u7B7E\u9700\u8981\u662F &lt;title&gt;&lt;%= htmlWebpackPlugin.options.title %&gt;&lt;/title&gt;</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;element_for_vue2.x&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5728\u8FD9\u4E2A\u9875\u9762\u4E2D\u5305\u542B\u7684\u5757\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u5305\u542B</span>
      <span class="token comment">// \u63D0\u53D6\u51FA\u6765\u7684\u901A\u7528 chunk \u548C vendor chunk\u3002</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;chunk-vendors&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;chunk-common&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5173\u95ED\u751F\u4EA7\u73AF\u5883\u7684 source map</span>
  <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u914D\u7F6E\u4EE3\u7406</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_HOST</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,31);function e(t,o){return p}var c=s(a,[["render",e]]);export{c as default};
