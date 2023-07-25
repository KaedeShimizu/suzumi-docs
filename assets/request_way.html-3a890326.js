import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,a as n}from"./app-423d4233.js";const r={},i=n(`<h1 id="请求方法" tabindex="-1"><a class="header-anchor" href="#请求方法" aria-hidden="true">#</a> 请求方法</h1><h2 id="url路径" tabindex="-1"><a class="header-anchor" href="#url路径" aria-hidden="true">#</a> URL路径</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本API无法使用POST，但是都支持GET请求</p></div><p>对于<code>direct</code>的请求没有num参数，因为直接显示的话只能显示一张图片</p><div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token path"><span class="token path-separator">/</span>direct</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更加推荐使用这个进行请求，更快也更加方便，直接返回一个json（Python字典）对象，没有多余的东西</p><div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token path"><span class="token path-separator">/</span>json</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根目录，这个和json是一样的，区别不大。</p><div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token path"><span class="token path-separator">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),t=[i];function d(l,c){return e(),s("div",null,t)}const u=a(r,[["render",d],["__file","request_way.html.vue"]]);export{u as default};