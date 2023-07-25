import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-047ff987.js";const p={},o=t(`<h1 id="线上版源码" tabindex="-1"><a class="header-anchor" href="#线上版源码" aria-hidden="true">#</a> 线上版源码</h1><p>其实我不是很想把这个源代码放出来，虽然说我只用了一天时间就写出来了...</p><p>不过还是本着开源精神，我还是把源代码放出来吧~，希望你能学到一些东西，下面是项目结构</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p>下面就是源代码了，请不要把此源代码用于盈利，否则我或将追究法律责任</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>KSA_Online
|-data(文件夹)
|-main.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>data文件夹里面直接放json文件就行，这个json文件就是你的图库啦，里面的格式请参考下面的格式：（简单说就是一个大的列表套n个字典，字典里面的键值对就是示例那样的）</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;$oid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;610fd717abf9ac91bca84728&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;artwork&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;【Genshin】-  凝 光  - ☆&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">86121982</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Kiriko&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">14046928</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sanity_level&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">&quot;r18&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;create_date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;$date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-12-05T22:00:01Z&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">2221</span><span class="token punctuation">,</span>
            <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">3294</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;原神&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;GenshinImpact&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;おっぱい&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;パンツ&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;極上の乳&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;巨乳&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;魅惑のふともも&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;魅惑の谷間&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;凝光(原神)&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;爆乳&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Genshin Impact&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;欧派&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;内裤&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;极上乳房&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;large breasts&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;魅惑的大腿&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;魅惑的乳沟&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Ningguang (Genshin Impact)&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;huge breasts&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;original&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i.pximg.net/img-original/img/2020/12/06/09/39/06/86121982_p1.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;large&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i.pximg.net/c/600x1200_90_webp/img-master/img/2020/12/06/09/39/06/86121982_p1_master1200.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;medium&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i.pximg.net/c/540x540_70/img-master/img/2020/12/06/09/39/06/86121982_p1_master1200.jpg&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就是源代码啦，唉，不过我这个代码的工作效率并没有非常高，如果需要，你可以自己修改源代码，不过记得加上我的标记就好~</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># main.py</span>
<span class="token comment"># Made by KaedeShimizu</span>
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
<span class="token keyword">import</span> json
<span class="token keyword">import</span> random


<span class="token comment"># 直接返回一个可用链接</span>
<span class="token comment"># 需要传入一些参数，具体参数见文档</span>
<span class="token keyword">def</span> <span class="token function">getARandomLink</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> proxy<span class="token punctuation">,</span> size<span class="token punctuation">,</span> r18<span class="token punctuation">,</span> keywords<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;data\\\\</span><span class="token interpolation"><span class="token punctuation">{</span>db<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        json_data <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
        <span class="token comment"># R18判断</span>
        <span class="token keyword">if</span> r18 <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token comment"># 创建一个临时数组</span>
            tmp_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token comment"># 开始便利json文件，筛选出所有的r18内容</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> json_data<span class="token punctuation">:</span>
                <span class="token keyword">if</span> i<span class="token punctuation">[</span><span class="token string">&quot;r18&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    tmp_data<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            json_data <span class="token operator">=</span> tmp_data

        <span class="token keyword">if</span> r18 <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token comment"># 创建一个临时数组</span>
            tmp_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token comment"># 开始便利json文件，筛选出所有的r18内容</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> json_data<span class="token punctuation">:</span>
                <span class="token keyword">if</span> <span class="token keyword">not</span> i<span class="token punctuation">[</span><span class="token string">&quot;r18&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    tmp_data<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            json_data <span class="token operator">=</span> tmp_data

        <span class="token comment"># keywords判断</span>
        <span class="token keyword">if</span> keywords<span class="token punctuation">:</span>
            tmp_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token comment"># 如果有的话开始遍历判断</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> json_data<span class="token punctuation">:</span>
                <span class="token keyword">if</span> keywords <span class="token keyword">in</span> i<span class="token punctuation">[</span><span class="token string">&quot;tags&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    tmp_data<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            json_data <span class="token operator">=</span> tmp_data

        length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>json_data<span class="token punctuation">)</span>
        link <span class="token operator">=</span> json_data<span class="token punctuation">[</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;urls&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>size<span class="token punctuation">]</span>
        <span class="token keyword">return</span> link<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;i.pximg.net&quot;</span><span class="token punctuation">,</span> proxy<span class="token punctuation">)</span>


<span class="token comment"># 重定向页面</span>
<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>responses <span class="token keyword">import</span> RedirectResponse

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># 如果直接访问，跳转到文档页面就行</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> RedirectResponse<span class="token punctuation">(</span><span class="token string">&quot;https://kaedeshimizu.gitee.io/docs/&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/pixiv&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">pixivDefault</span><span class="token punctuation">(</span>
    <span class="token comment"># 使用的数据库，放在data目录下，用json文件</span>
    db<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;setu.json&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># 代理地址</span>
    proxy<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;pixiv.yuki.sh&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># 图片尺寸</span>
    size<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;original&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># 是否用r18图片 2是随机</span>
    r18<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment"># 请求次数，默认是1，如果是其他数字那么返回一个json</span>
    num<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment"># 关键词，可有可无</span>
    keywords<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span>
    default_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        default_dict<span class="token punctuation">.</span>update<span class="token punctuation">(</span>
            <span class="token punctuation">{</span><span class="token string-interpolation"><span class="token string">f&quot;link_</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">:</span> getARandomLink<span class="token punctuation">(</span>db<span class="token punctuation">,</span> proxy<span class="token punctuation">,</span> size<span class="token punctuation">,</span> r18<span class="token punctuation">,</span> keywords<span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token keyword">return</span> default_dict


<span class="token comment"># json的方法get</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/pixiv/json&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">json_get</span><span class="token punctuation">(</span>
    <span class="token comment"># 使用的数据库，放在data目录下，用json文件</span>
    db<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;setu.json&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># 代理地址</span>
    proxy<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;pixiv.yuki.sh&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># 图片尺寸</span>
    size<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;original&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># 是否用r18图片 2是随机</span>
    r18<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment"># 请求次数，默认是1，如果是其他数字那么返回一个json</span>
    num<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment"># 关键词，可有可无</span>
    keywords<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span>
    default_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        default_dict<span class="token punctuation">.</span>update<span class="token punctuation">(</span>
            <span class="token punctuation">{</span><span class="token string-interpolation"><span class="token string">f&quot;link_</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">:</span> getARandomLink<span class="token punctuation">(</span>db<span class="token punctuation">,</span> proxy<span class="token punctuation">,</span> size<span class="token punctuation">,</span> r18<span class="token punctuation">,</span> keywords<span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token keyword">return</span> default_dict


<span class="token comment"># 如果是direct的话，没有什么参数，直接返回一张就行</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/pixiv/direct&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">direct</span><span class="token punctuation">(</span>
    <span class="token comment"># 使用的数据库，放在data目录下，用json文件</span>
    db<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;setu.json&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># 代理地址</span>
    proxy<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;pixiv.yuki.sh&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># 图片尺寸</span>
    size<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;original&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># 是否用r18图片 2是随机</span>
    r18<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment"># 关键词，可有可无</span>
    keywords<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> RedirectResponse<span class="token punctuation">(</span>getARandomLink<span class="token punctuation">(</span>db<span class="token punctuation">,</span> proxy<span class="token punctuation">,</span> size<span class="token punctuation">,</span> r18<span class="token punctuation">,</span> keywords<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">import</span> uvicorn

    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>app<span class="token punctuation">,</span> host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好啦，那么这个项目的所有代码就到这里哩，你可以自己在本地的主机运行，或者挂到服务器上给别人用。</p>`,10),e=[o];function i(c,l){return s(),a("div",null,e)}const k=n(p,[["render",i],["__file","online.html.vue"]]);export{k as default};
