import{_ as n,o as s,c as a,a as t}from"./app-c912b07e.js";const p={},e=t(`<h1 id="线上版源码" tabindex="-1"><a class="header-anchor" href="#线上版源码" aria-hidden="true">#</a> 线上版源码</h1><p>其实我不是很想把这个源代码放出来，虽然说我只用了一天时间就写出来了...</p><p>不过还是本着开源精神，我还是把源代码放出来吧~，希望你能学到一些东西，下面是项目结构</p><div class="custom-container danger"><p class="custom-container-title">注意</p><p>下面就是源代码了，请不要把此源代码用于盈利，否则我或将追究法律责任</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>KSA_Online
|-data(文件夹)
|-main.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>data文件夹里面直接放json文件就行，这个json文件就是你的图库啦，里面的格式请参考下面的格式：（简单说就是一个大的列表套n个字典，字典里面的键值对就是示例那样的）</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">102496475</span><span class="token punctuation">,</span>
        <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">2583663</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;秘蜜~黒の誓い~&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Matcha_&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;r18&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1986</span><span class="token punctuation">,</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">3840</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;初音ミク&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;VOCALOID&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;鏡音リン&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;百合&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;秘蜜〜黒の誓い〜&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;なにこれきれい&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;VOCALOID10000users入り&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;初音未来&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;鏡音鈴&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;yuri&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Alluring Secret ~ Black Vow ~&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;卧槽好漂亮&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Vocaloid 10000+ bookmarks&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;hatsune miku&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;kagamine rin&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;so beautiful&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://px.s.rainchan.win/img-original/img/2022/11/04/04/44/18/102496475_p0.jpg&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就是源代码啦，唉，不过我这个代码的工作效率并没有非常高，如果需要，你可以自己修改源代码，不过记得加上我的标记就好~</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 这个是读取另外一个json文件用的，我试一下怎么样，应该还不错吧</span>
<span class="token comment"># 这个json和前面的不一样，这个是一个大的数组，里面存入了一些元素，每个元素都是字典</span>
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
<span class="token keyword">import</span> json
<span class="token keyword">import</span> random

<span class="token comment"># 初始化一些变量，方便后期修改，或者迭代</span>
<span class="token comment"># 默认的代理地址</span>
default_proxy <span class="token operator">=</span> <span class="token string">&quot;pixiv.yuki.sh&quot;</span>
<span class="token comment"># 默认的数据库（data文件夹下）</span>
default_data <span class="token operator">=</span> <span class="token string">&quot;jitsu.json&quot;</span>
<span class="token comment"># 文档官网地址</span>
default_docs <span class="token operator">=</span> <span class="token string">&quot;https://suzumi.netlify.app/&quot;</span>
<span class="token comment"># 默认r18选项</span>
default_r18 <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment"># 直接返回一个可用链接</span>
<span class="token comment"># 需要传入一些参数，具体参数见文档</span>
<span class="token keyword">def</span> <span class="token function">getARandomLink</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> proxy<span class="token punctuation">,</span> r18<span class="token punctuation">,</span> keywords<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;data/</span><span class="token interpolation"><span class="token punctuation">{</span>db<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
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
        link <span class="token operator">=</span> json_data<span class="token punctuation">[</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> link<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;i.pximg.net&quot;</span><span class="token punctuation">,</span> proxy<span class="token punctuation">)</span>

<span class="token comment"># 返回一个随机的json</span>
<span class="token comment"># 这里给一个数量参数，更加方便一些</span>
<span class="token keyword">def</span> <span class="token function">getARandomJson</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> r18<span class="token punctuation">,</span> keywords<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;data/</span><span class="token interpolation"><span class="token punctuation">{</span>db<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
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
        <span class="token comment"># 临时数组</span>
        temp_arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
            temp_arr<span class="token punctuation">.</span>append<span class="token punctuation">(</span>json_data<span class="token punctuation">[</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> temp_arr


<span class="token comment"># 重定向页面</span>
<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>responses <span class="token keyword">import</span> RedirectResponse

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">pixivDefault</span><span class="token punctuation">(</span>
    <span class="token comment"># 使用的数据库，放在data目录下，用json文件</span>
    db<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> default_data<span class="token punctuation">,</span>
    <span class="token comment"># 是否用r18图片 2是随机</span>
    r18<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> default_r18<span class="token punctuation">,</span>
    <span class="token comment"># 请求次数，默认是1，如果是其他数字那么返回一个json</span>
    num<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment"># 关键词，可有可无</span>
    keywords<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建一个临时数组</span>
    temp_array <span class="token operator">=</span> getARandomJson<span class="token punctuation">(</span>db<span class="token punctuation">,</span> r18<span class="token punctuation">,</span> keywords<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
    <span class="token keyword">return</span> temp_array


<span class="token comment"># json的方法get</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/json&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">json_get</span><span class="token punctuation">(</span>
    <span class="token comment"># 使用的数据库，放在data目录下，用json文件</span>
    db<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> default_data<span class="token punctuation">,</span>
    <span class="token comment"># 是否用r18图片 2是随机</span>
    r18<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> default_r18<span class="token punctuation">,</span>
    <span class="token comment"># 请求次数，默认是1，如果是其他数字那么返回一个json</span>
    num<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment"># 关键词，可有可无</span>
    keywords<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建一个临时数组</span>
    temp_array <span class="token operator">=</span> getARandomJson<span class="token punctuation">(</span>db<span class="token punctuation">,</span> r18<span class="token punctuation">,</span> keywords<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
    <span class="token keyword">return</span> temp_array


<span class="token comment"># 如果是direct的话，没有什么参数，直接返回一张就行</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/direct&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">direct</span><span class="token punctuation">(</span>
    <span class="token comment"># 使用的数据库，放在data目录下，用json文件</span>
    db<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> default_data<span class="token punctuation">,</span>
    <span class="token comment"># 代理地址</span>
    proxy<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> default_proxy<span class="token punctuation">,</span>
    <span class="token comment"># 是否用r18图片 2是随机</span>
    r18<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> default_r18<span class="token punctuation">,</span>
    <span class="token comment"># 关键词，可有可无</span>
    keywords<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> RedirectResponse<span class="token punctuation">(</span>getARandomLink<span class="token punctuation">(</span>db<span class="token punctuation">,</span> proxy<span class="token punctuation">,</span> r18<span class="token punctuation">,</span> keywords<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">import</span> uvicorn

    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>app<span class="token punctuation">,</span> host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好啦，那么这个项目的所有代码就到这里哩，你可以自己在本地的主机运行，或者挂到服务器上给别人用。</p>`,10),o=[e];function i(c,l){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","online.html.vue"]]);export{r as default};
