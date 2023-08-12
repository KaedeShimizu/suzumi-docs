import{_ as n,o as s,c as a,a as e}from"./app-c912b07e.js";const t={},p=e(`<h1 id="本地版源码" tabindex="-1"><a class="header-anchor" href="#本地版源码" aria-hidden="true">#</a> 本地版源码</h1><p>本着开源的原则，我把本地版的源码放在这里，不过本地版不涉及关键词查询之类的东西，可以理解为就是一个纯粹的随机涩图查询器。</p><p>当然，即便是本地版，我也使用了<code>FastAPI</code>进行开发，从而更好地模拟随机涩图的API调用效果，下面是本地版的目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>KSA_Local
|-Images_Set
|-|-Arknights
|-GetRankImage.py
|-main.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的<code>Arknights</code>只是一个示例文件夹，代码中也一样；<code>Images_Set</code>顾名思义，就是图片集（图库），也是你调用这个API会查询的文件夹；下面直接上源代码~</p><p>对于<code>main.py</code>，9~16行可以不写，我这里写上是为了避免直接访问链接报错</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># main.py</span>
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>responses <span class="token keyword">import</span> FileResponse<span class="token punctuation">,</span> HTMLResponse
<span class="token keyword">import</span> GetRankImage

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 这里为了节省资源，我选择用字符串的方式来返回一个提示（可以忽略）</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    context <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
    &lt;html&gt;
        &lt;body&gt;Maybe you can get 涩图 at &lt;a&gt;/setu/&lt;/a&gt;&lt;/body&gt;
    &lt;/html&gt;
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> HTMLResponse<span class="token punctuation">(</span>context<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/setu/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">setu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 这里使用电脑本地的文件</span>
    <span class="token comment"># 如果需要，请修改代码</span>
    <span class="token keyword">return</span> FileResponse<span class="token punctuation">(</span>GetRankImage<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">import</span> uvicorn
    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>app<span class="token punctuation">,</span> host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于<code>GetRankImage.py</code>，如果需要的话可以把它和<code>main.py</code>合并为一个文件，我分文件编写是为了更好地管理目录结构，以及更好地对功能进行拓展。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># GetRankImage.py</span>
<span class="token keyword">import</span> os
<span class="token keyword">import</span> random


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 这里使用本地的一个图库，注意是否需要修改对应文件夹</span>
    imagesList <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span><span class="token string">&quot;Images_Set\\\\Arknights&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 获取随机种子</span>
    seed <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>imagesList<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;Images_Set\\\\Arknights\\\\</span><span class="token interpolation"><span class="token punctuation">{</span>imagesList<span class="token punctuation">[</span>seed<span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图片文件夹中的图片没有名称格式要求，因为是完全随机的，代码会自动读取所有的图片然后随机一个出来。</p>`,10),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","local.html.vue"]]);export{d as default};
