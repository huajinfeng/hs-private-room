<template><div><h1 id="_21-网页抓取" tabindex="-1"><a class="header-anchor" href="#_21-网页抓取" aria-hidden="true">#</a> 21 网页抓取</h1>
<h3 id="什么是网页抓取" tabindex="-1"><a class="header-anchor" href="#什么是网页抓取" aria-hidden="true">#</a> 什么是网页抓取</h3>
<p>互联网充满了大量的数据，这些数据可以用于不同的目的。要收集这些数据，我们需要知道如何从网站上抓取数据。
网页抓取是从网站提取和收集数据，并将其存储在本地机器或数据库中的过程。
在本节中，我们将使用beautifulsoup和requests包来抓取数据。我们使用的是beautifulsoup 4版本。
要开始抓取网站，你需要_requests_、<em>beautifoulSoup4_和一个_网站</em>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> requests
pip <span class="token function">install</span> beautifulsoup4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要从网站抓取数据，需要基本了解HTML标签和CSS选择器。我们使用HTML标签、类或/和ID来定位网站上的内容。
让我们导入requests和BeautifulSoup模块：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们声明一个url变量，用于我们要抓取的网站。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
url <span class="token operator">=</span> <span class="token string">'https://archive.ics.uci.edu/'</span>
<span class="token comment"># 让我们使用requests的get方法从url获取数据</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token comment"># 检查状态</span>
status <span class="token operator">=</span> response<span class="token punctuation">.</span>status_code
<span class="token keyword">print</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token comment"># 200表示获取成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用beautifulSoup解析页面内容：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
url <span class="token operator">=</span> <span class="token string">'https://archive.ics.uci.edu/'</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
content <span class="token operator">=</span> response<span class="token punctuation">.</span>content <span class="token comment"># 我们从网站获取所有内容</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">'html.parser'</span><span class="token punctuation">)</span> <span class="token comment"># beautiful soup将给我们一个解析的机会</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>title<span class="token punctuation">)</span> <span class="token comment"># &lt;title>UCI Machine Learning Repository: Data Sets&lt;/title></span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>title<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># UCI Machine Learning Repository: Data Sets</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token comment"># 给出网站上的整个页面</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span>

tables <span class="token operator">=</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">'color'</span><span class="token punctuation">:</span><span class="token string">'hsl(var(--p) / var(--tw-text-opacity, 1));'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># find_all: 在页面上寻找所有属性 cellpadding 等于 3 的 &lt;table> 标签。</span>
<span class="token comment"># tables[0]: 因为符合条件的表格可能有多个，结果是一个列表，我们从中提取数据，所以代码取了搜索结果中的第一个（索引为 0）。</span>
table <span class="token operator">=</span> tables<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span>
<span class="token comment"># for td in table.find('tr').find_all('td'):</span>
<span class="token comment">#     print(td.text)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-问题与解决方案" tabindex="-1"><a class="header-anchor" href="#_1-问题与解决方案" aria-hidden="true">#</a> 1. 问题与解决方案</h2>
<table>
<thead>
<tr>
<th><strong>遇到的问题</strong></th>
<th><strong>错误原因分析</strong></th>
<th><strong>解决方案</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>找不到元素 (空列表 <code v-pre>[]</code>)</strong></td>
<td>使用了不存在的属性定位（如 <code v-pre>margin: '0'</code>），或网页版本更新导致旧属性失效。</td>
<td>在浏览器按 <strong>F12</strong> 查看最新 HTML 结构，优先使用 <code v-pre>id</code> 或 <code v-pre>class</code> 定位。</td>
</tr>
<tr>
<td><strong><code v-pre>KeyError: 0</code></strong></td>
<td><strong>对象类型混淆</strong>：对 <code v-pre>find()</code> 返回的单体标签对象使用了列表索引 <code v-pre>[0]</code>。</td>
<td><code v-pre>find()</code> 直接使用；<code v-pre>find_all()</code> 返回列表，才需要用 <code v-pre>[0]</code>。</td>
</tr>
<tr>
<td><strong><code v-pre>DeprecationWarning</code></strong></td>
<td>使用了过时的方法名 <code v-pre>findAll</code>（驼峰命名法）。</td>
<td>统一改用规范的下划线命名法：<strong><code v-pre>find_all()</code></strong>。</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_2-关键技术点深入解析" tabindex="-1"><a class="header-anchor" href="#_2-关键技术点深入解析" aria-hidden="true">#</a> 2. 关键技术点深入解析</h2>
<h3 id="i-定位属性" tabindex="-1"><a class="header-anchor" href="#i-定位属性" aria-hidden="true">#</a> Ⅰ. 定位属性</h3>
<ul>
<li>CSS 样式（如 <code v-pre>margin</code>, <code v-pre>padding</code>, <code v-pre>color</code>）不可以直接作为 BeautifulSoup 的属性查找。</li>
<li>BeautifulSoup 默认只查找 <strong>HTML 标签属性</strong>（如 <code v-pre>class</code>, <code v-pre>id</code>, <code v-pre>href</code>, <code v-pre>src</code>）。</li>
<li><code v-pre>soup.find('h1', class_='text-lg')</code> —— 匹配 <code v-pre>&lt;h1 class=&quot;text-lg&quot;&gt;</code>。</li>
</ul>
<h3 id="ii-find-与-find-all-的区别" tabindex="-1"><a class="header-anchor" href="#ii-find-与-find-all-的区别" aria-hidden="true">#</a> Ⅱ. <code v-pre>find()</code> 与 <code v-pre>find_all()</code> 的区别</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># find_all 返回的是(List)</span>
apples <span class="token operator">=</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">)</span>
first_apple <span class="token operator">=</span> apples<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment"># 正确</span>

<span class="token comment"># find 返回的是(Tag Object)</span>
one_apple <span class="token operator">=</span> soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">)</span>
text <span class="token operator">=</span> one_apple<span class="token punctuation">.</span>text <span class="token comment"># 正确</span>
<span class="token comment"># text = one_apple[0] # 错误！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_3-现代爬虫建议" tabindex="-1"><a class="header-anchor" href="#_3-现代爬虫建议" aria-hidden="true">#</a> 3. 现代爬虫建议</h2>
<ol>
<li>
<p><strong>处理 Class 关键字</strong>：由于 <code v-pre>class</code> 是 Python 的保留关键字，在 BeautifulSoup 中必须写成 <strong><code v-pre>class_</code></strong>。</p>
<ul>
<li><code v-pre>soup.find('div', class_='container')</code></li>
</ul>
</li>
<li>
<p><strong>防止请求被封</strong>：现代网站通常会检查访问者身份。建议加上 <code v-pre>headers</code> 伪装成浏览器：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'User-Agent'</span><span class="token punctuation">:</span> <span class="token string">'Mozilla/5.0'</span><span class="token punctuation">}</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>动态内容意识</strong>：如果你发现 <code v-pre>print(soup.body)</code> 里的内容和你浏览器里看到的不一样，说明网页可能使用了 JavaScript 动态渲染，这时候单纯用 <code v-pre>requests</code> 可能抓不到数据。</p>
</li>
</ol>
</div></template>


