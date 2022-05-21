import{a as n}from"./app.4985c1a7.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="refs-\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#refs-\u8F6C\u53D1" aria-hidden="true">#</a> Refs \u8F6C\u53D1</h1><p>Ref \u8F6C\u53D1\u662F\u4E00\u9879\u5C06 ref \u81EA\u52A8\u5730\u901A\u8FC7\u7EC4\u4EF6\u4F20\u9012\u5230\u5176\u4E00\u5B50\u7EC4\u4EF6\u7684\u6280\u5DE7\u3002</p><p><strong>\u8F6C\u53D1 refs \u5230 DOM \u7EC4\u4EF6</strong></p><p>\u8003\u8651\u8FD9\u4E2A\u6E32\u67D3\u539F\u751F DOM \u5143\u7D20 <code>button</code> \u7684 <code>FancyButton</code> \u7EC4\u4EF6\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">FancyButton</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FancyButton<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>React \u7EC4\u4EF6\u9690\u85CF\u5176\u5B9E\u73B0\u7EC6\u8282\uFF0C\u5305\u62EC\u5176\u6E32\u67D3\u7ED3\u679C\u3002\u5176\u4ED6\u4F7F\u7528 <code>FancyButton</code> \u7684\u7EC4\u4EF6\u901A\u5E38\u4E0D\u9700\u8981\u83B7\u53D6\u5185\u90E8\u7684 DOM \u5143\u7D20 button \u7684 ref\u3002\u8FD9\u5F88\u597D\uFF0C\u56E0\u4E3A\u8FD9\u9632\u6B62\u7EC4\u4EF6\u8FC7\u5EA6\u4F9D\u8D56\u5176\u4ED6\u7EC4\u4EF6\u7684 DOM \u7ED3\u6784\u3002</p><p>\u867D\u7136\u8FD9\u79CD\u5C01\u88C5\u5BF9\u7C7B\u4F3C <code>FeedStory</code> \u6216 <code>Comment</code> \u8FD9\u6837\u7684\u5E94\u7528\u7EA7\u7EC4\u4EF6\u662F\u7406\u60F3\u7684\uFF0C\u4F46\u5176\u5BF9 <code>FancyButton</code> \u6216 <code>MyTextInput</code> \u8FD9\u6837\u7684\u9AD8\u53EF\u590D\u7528\u201C\u53F6\u201D\u7EC4\u4EF6\u6765\u8BF4\u53EF\u80FD\u662F\u4E0D\u65B9\u4FBF\u7684\u3002\u8FD9\u4E9B\u7EC4\u4EF6\u503E\u5411\u4E8E\u5728\u6574\u4E2A\u5E94\u7528\u4E2D\u4EE5\u4E00\u79CD\u7C7B\u4F3C\u5E38\u89C4 DOM <code>button</code> \u548C <code>input</code> \u7684\u65B9\u5F0F\u88AB\u4F7F\u7528\uFF0C\u5E76\u4E14\u8BBF\u95EE\u5176 DOM \u8282\u70B9\u5BF9\u7BA1\u7406\u7126\u70B9\uFF0C\u9009\u4E2D\u6216\u52A8\u753B\u6765\u8BF4\u662F\u4E0D\u53EF\u907F\u514D\u7684\u3002</p><p><strong>Ref \u8F6C\u53D1\u662F\u4E00\u4E2A\u53EF\u9009\u7279\u6027\uFF0C\u5176\u5141\u8BB8\u67D0\u4E9B\u7EC4\u4EF6\u63A5\u6536 ref\uFF0C\u5E76\u5C06\u5176\u5411\u4E0B\u4F20\u9012\uFF08\u6362\u53E5\u8BDD\u8BF4\uFF0C\u201C\u8F6C\u53D1\u201D\u5B83\uFF09\u7ED9\u5B50\u7EC4\u4EF6\u3002</strong></p><p>\u5728\u4E0B\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C<code>FancyButton</code> \u4F7F\u7528 <code>React.forwardRef</code> \u6765\u83B7\u53D6\u4F20\u9012\u7ED9\u5B83\u7684 <code>ref</code>\uFF0C\u7136\u540E\u8F6C\u53D1\u5230\u5B83\u6E32\u67D3\u7684 DOM <code>button</code>\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> FancyButton <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FancyButton<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Wrap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6 DOM button \u7684 ref\uFF1A</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ref<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FancyButton</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u70B9\u6211</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FancyButton</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Wrap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u8FD9\u6837\uFF0C\u4F7F\u7528 <code>FancyButton</code> \u7684\u7EC4\u4EF6\u53EF\u4EE5\u83B7\u53D6\u5E95\u5C42 DOM \u8282\u70B9 <code>button</code> \u7684 ref \uFF0C\u5E76\u5728\u5FC5\u8981\u65F6\u8BBF\u95EE\uFF0C\u5C31\u50CF\u5176\u76F4\u63A5\u4F7F\u7528 DOM <code>button</code> \u4E00\u6837\u3002</p><p>\u4EE5\u4E0B\u662F\u5BF9\u4E0A\u8FF0\u793A\u4F8B\u53D1\u751F\u60C5\u51B5\u7684\u9010\u6B65\u89E3\u91CA\uFF1A</p><ol><li>\u6211\u4EEC\u901A\u8FC7\u8C03\u7528 <code>useRef</code> \u521B\u5EFA\u4E86\u4E00\u4E2A React ref \u5E76\u5C06\u5176\u8D4B\u503C\u7ED9 <code>ref</code> \u53D8\u91CF\u3002</li><li>\u6211\u4EEC\u901A\u8FC7\u6307\u5B9A <code>ref</code> \u4E3A JSX \u5C5E\u6027\uFF0C\u5C06\u5176\u5411\u4E0B\u4F20\u9012\u7ED9 <code>&lt;FancyButton ref={ref}&gt;</code>\u3002</li><li>React \u4F20\u9012 <code>ref</code> \u7ED9 <code>forwardRef</code> \u5185\u51FD\u6570 <code>(props, ref) =&gt; ...</code>\uFF0C\u4F5C\u4E3A\u5176\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002</li><li>\u6211\u4EEC\u5411\u4E0B\u8F6C\u53D1\u8BE5 <code>ref</code> \u53C2\u6570\u5230 <code>&lt;button ref={ref}&gt;</code>\uFF0C\u5C06\u5176\u6307\u5B9A\u4E3A JSX \u5C5E\u6027\u3002</li><li>\u5F53 ref \u6302\u8F7D\u5B8C\u6210\uFF0C<code>ref.current</code> \u5C06\u6307\u5411 <code>&lt;button&gt;</code> DOM \u8282\u70B9\u3002</li></ol><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570 <code>ref</code> \u53EA\u5728\u4F7F\u7528 <code>React.forwardRef</code> \u5B9A\u4E49\u7EC4\u4EF6\u65F6\u5B58\u5728\u3002\u5E38\u89C4\u51FD\u6570\u548C class \u7EC4\u4EF6\u4E0D\u63A5\u6536 <code>ref</code> \u53C2\u6570\uFF0C\u4E14 <code>props</code> \u4E2D\u4E5F\u4E0D\u5B58\u5728 <code>ref</code>\u3002</p><p>Ref \u8F6C\u53D1\u4E0D\u4EC5\u9650\u4E8E DOM \u7EC4\u4EF6\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8F6C\u53D1 refs \u5230 class \u7EC4\u4EF6\u5B9E\u4F8B\u4E2D\u3002</p></div>`,14);function p(e,o){return t}var u=s(a,[["render",p]]);export{u as default};
