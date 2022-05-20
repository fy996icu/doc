import{e as o,o as p,c,f as n,g as e,F as l,a as t,i as s}from"./app.79cc4554.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=t(`<h1 id="\u6570\u5B57\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u5904\u7406" aria-hidden="true">#</a> \u6570\u5B57\u5904\u7406</h1><h2 id="\u683C\u5F0F\u5316\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316\u6570\u5B57" aria-hidden="true">#</a> \u683C\u5F0F\u5316\u6570\u5B57</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> numeral
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,3),d=n("strong",null,"\u63D2\u4EF6\u540D\u79F0\uFF1A",-1),m=s(),k={href:"https://www.npmjs.com/package/numeral",target:"_blank",rel:"noopener noreferrer"},h=s("Numeral.js"),_=n("strong",null,"\u5728\u7EBF\u793A\u4F8B\uFF1A",-1),b=s(),g={href:"http://numeraljs.com/",target:"_blank",rel:"noopener noreferrer"},f=s("\u70B9\u51FB\u67E5\u770B\u793A\u4F8B"),v=t(`<p><strong>\u63D2\u4EF6\u7B80\u4ECB\uFF1A</strong> \u7528\u4E8E\u683C\u5F0F\u5316\u548C\u64CD\u4F5C\u6570\u5B57\u7684 javascript \u5E93\u3002</p><p><img src="https://gitee.com/fy0829/pics/raw/master/example/numeral.png" alt="img"></p><h2 id="\u53EF\u8BFB\u6587\u4EF6\u5927\u5C0F\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u53EF\u8BFB\u6587\u4EF6\u5927\u5C0F\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u53EF\u8BFB\u6587\u4EF6\u5927\u5C0F\u5B57\u7B26\u4E32</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> filesize
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,4),j=n("strong",null,"\u63D2\u4EF6\u540D\u79F0\uFF1A",-1),w=s(),x={href:"https://www.npmjs.com/package/filesize",target:"_blank",rel:"noopener noreferrer"},y=s("filesize.js"),N=n("strong",null,"\u5728\u7EBF\u793A\u4F8B\uFF1A",-1),P=s(),z={href:"https://filesizejs.com/",target:"_blank",rel:"noopener noreferrer"},$=s("\u70B9\u51FB\u67E5\u770B\u793A\u4F8B"),B=t(`<p><strong>\u63D2\u4EF6\u7B80\u4ECB\uFF1A</strong> filesize.js \u63D0\u4F9B\u4E86\u4E00\u79CD\u4ECE\u6570\u5B57\uFF08\u6D6E\u70B9\u6570\u6216\u6574\u6570\uFF09\u6216\u5B57\u7B26\u4E32\u4E2D\u83B7\u53D6\u4EBA\u7C7B\u53EF\u8BFB\u6587\u4EF6\u5927\u5C0F\u5B57\u7B26\u4E32\u7684\u7B80\u5355\u65B9\u6CD5\u3002</p><p><img src="https://gitee.com/fy0829/pics/raw/master/example/filesize.png" alt="img"></p><h2 id="\u7CBE\u786E\u7684\u52A0\u51CF\u4E58\u9664" tabindex="-1"><a class="header-anchor" href="#\u7CBE\u786E\u7684\u52A0\u51CF\u4E58\u9664" aria-hidden="true">#</a> \u7CBE\u786E\u7684\u52A0\u51CF\u4E58\u9664</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> number-precision
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token constant">NP</span> <span class="token keyword">from</span> <span class="token string">&#39;number-precision&#39;</span>
<span class="token constant">NP</span><span class="token punctuation">.</span><span class="token function">strip</span><span class="token punctuation">(</span><span class="token number">0.09999999999999998</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// = 0.1</span>
<span class="token constant">NP</span><span class="token punctuation">.</span><span class="token function">plus</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// = 0.3, not 0.30000000000000004</span>
<span class="token constant">NP</span><span class="token punctuation">.</span><span class="token function">plus</span><span class="token punctuation">(</span><span class="token number">2.3</span><span class="token punctuation">,</span> <span class="token number">2.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// = 4.7, not 4.699999999999999</span>
<span class="token constant">NP</span><span class="token punctuation">.</span><span class="token function">minus</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// = 0.1, not 0.09999999999999998</span>
<span class="token constant">NP</span><span class="token punctuation">.</span><span class="token function">times</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">// = 0.9, not 0.8999999999999999</span>
<span class="token constant">NP</span><span class="token punctuation">.</span><span class="token function">times</span><span class="token punctuation">(</span><span class="token number">0.362</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// = 36.2, not 36.199999999999996</span>
<span class="token constant">NP</span><span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span><span class="token number">1.21</span><span class="token punctuation">,</span> <span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// = 1.1, not 1.0999999999999999</span>
<span class="token constant">NP</span><span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">0.105</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// = 0.11, not 0.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,5),M=n("strong",null,"\u63D2\u4EF6\u540D\u79F0\uFF1A",-1),V=s(),E={href:"https://www.npmjs.com/package/number-precision",target:"_blank",rel:"noopener noreferrer"},S=s("number-precision"),D=n("strong",null,"\u5728\u7EBF\u793A\u4F8B\uFF1A",-1),F=s(),I={href:"https://github.com/nefe/number-precision",target:"_blank",rel:"noopener noreferrer"},J=s("\u70B9\u51FB\u67E5\u770B\u793A\u4F8B"),L=t(`<p><strong>\u63D2\u4EF6\u7B80\u4ECB\uFF1A</strong> \u4F7F\u7528javascript\u7CBE\u786E\u6267\u884C\u52A0\u51CF\u4E58\u9664\u8FD0\u7B97\uFF0C\u89E3\u51B3\u7CBE\u5EA6\u4E22\u5931\u95EE\u9898\u3002</p><p><img src="https://gitee.com/fy0829/pics/raw/master/example/number-precision.png" alt="img"></p><h2 id="\u4EFB\u610F\u7CBE\u5EA6-decimal-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u7CBE\u5EA6-decimal-\u7C7B\u578B" aria-hidden="true">#</a> \u4EFB\u610F\u7CBE\u5EA6 Decimal \u7C7B\u578B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> decimal.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,4),C=n("strong",null,"\u63D2\u4EF6\u540D\u79F0\uFF1A",-1),T=s(),q={href:"https://www.npmjs.com/package/decimal.js",target:"_blank",rel:"noopener noreferrer"},A=s("decimal.js"),G=n("strong",null,"\u5728\u7EBF\u793A\u4F8B\uFF1A",-1),H=s(),K={href:"https://github.com/MikeMcl/decimal.js#readme",target:"_blank",rel:"noopener noreferrer"},O=s("\u70B9\u51FB\u67E5\u770B\u793A\u4F8B"),Q=t(`<p><strong>\u63D2\u4EF6\u7B80\u4ECB\uFF1A</strong> JavaScript \u7684\u4EFB\u610F\u7CBE\u5EA6 Decimal \u7C7B\u578B\u3002</p><p><img src="https://gitee.com/fy0829/pics/raw/master/example/decimal.png" alt="img"></p><h2 id="\u4EFB\u610F\u7CBE\u5EA6\u5341\u8FDB\u5236\u7B97\u672F" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u7CBE\u5EA6\u5341\u8FDB\u5236\u7B97\u672F" aria-hidden="true">#</a> \u4EFB\u610F\u7CBE\u5EA6\u5341\u8FDB\u5236\u7B97\u672F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> big.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Big</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
<span class="token comment">// \u52A0\u6CD5</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> x<span class="token punctuation">.</span><span class="token function">plus</span><span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span>
<span class="token comment">// \u8F6C\u6362</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">+</span>y<span class="token punctuation">)</span> <span class="token comment">// 0.3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 0.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,5),R=n("strong",null,"\u63D2\u4EF6\u540D\u79F0\uFF1A",-1),U=s(),W={href:"https://www.npmjs.com/package/big.js",target:"_blank",rel:"noopener noreferrer"},X=s("big.js"),Y=n("strong",null,"\u5728\u7EBF\u793A\u4F8B\uFF1A",-1),Z=s(),nn={href:"https://github.com/MikeMcl/big.js#readme",target:"_blank",rel:"noopener noreferrer"},sn=s("\u70B9\u51FB\u67E5\u770B\u793A\u4F8B"),an=n("p",null,[n("strong",null,"\u63D2\u4EF6\u7B80\u4ECB\uFF1A"),s(" \u4E00\u4E2A\u7528\u4E8E\u4EFB\u610F\u7CBE\u5EA6\u5341\u8FDB\u5236\u7B97\u672F\u7684\u5C0F\u578B\u5FEB\u901F JavaScript \u5E93\u3002")],-1),en=n("p",null,[n("img",{src:"https://gitee.com/fy0829/pics/raw/master/example/bigjs.png",alt:"img"})],-1);function tn(on,pn){const a=o("ExternalLinkIcon");return p(),c(l,null,[u,n("p",null,[d,m,n("a",k,[h,e(a)])]),n("p",null,[_,b,n("a",g,[f,e(a)])]),v,n("p",null,[j,w,n("a",x,[y,e(a)])]),n("p",null,[N,P,n("a",z,[$,e(a)])]),B,n("p",null,[M,V,n("a",E,[S,e(a)])]),n("p",null,[D,F,n("a",I,[J,e(a)])]),L,n("p",null,[C,T,n("a",q,[A,e(a)])]),n("p",null,[G,H,n("a",K,[O,e(a)])]),Q,n("p",null,[R,U,n("a",W,[X,e(a)])]),n("p",null,[Y,Z,n("a",nn,[sn,e(a)])]),an,en],64)}var rn=r(i,[["render",tn]]);export{rn as default};
