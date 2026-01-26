<template><div><h1 id="_30天python编程挑战-第22天-网页抓取" tabindex="-1"><a class="header-anchor" href="#_30天python编程挑战-第22天-网页抓取" aria-hidden="true">#</a> 30天Python编程挑战：第22天 - 网页抓取</h1>
<ul>
<li><a href="#-%E7%AC%AC22%E5%A4%A9">第22天</a>
<ul>
<li><a href="#python%E7%BD%91%E9%A1%B5%E6%8A%93%E5%8F%96">Python网页抓取</a>
<ul>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BD%91%E9%A1%B5%E6%8A%93%E5%8F%96">什么是网页抓取</a></li>
</ul>
</li>
<li><a href="#-%E7%BB%83%E4%B9%A0%E7%AC%AC22%E5%A4%A9">💻 练习：第22天</a></li>
</ul>
</li>
</ul>
<h1 id="📘-第22天" tabindex="-1"><a class="header-anchor" href="#📘-第22天" aria-hidden="true">#</a> 📘 第22天</h1>
<h2 id="python网页抓取" tabindex="-1"><a class="header-anchor" href="#python网页抓取" aria-hidden="true">#</a> Python网页抓取</h2>
<h3 id="什么是网页抓取" tabindex="-1"><a class="header-anchor" href="#什么是网页抓取" aria-hidden="true">#</a> 什么是网页抓取</h3>
<p>互联网充满了大量的数据，这些数据可以用于不同的目的。要收集这些数据，我们需要知道如何从网站上抓取数据。</p>
<p>网页抓取是从网站提取和收集数据，并将其存储在本地机器或数据库中的过程。</p>
<p>在本节中，我们将使用beautifulsoup和requests包来抓取数据。我们使用的是beautifulsoup 4版本。</p>
<p>要开始抓取网站，你需要_requests_、<em>beautifoulSoup4_和一个_网站</em>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> requests
pip <span class="token function">install</span> beautifulsoup4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要从网站抓取数据，需要基本了解HTML标签和CSS选择器。我们使用HTML标签、类或/和ID来定位网站上的内容。
让我们导入requests和BeautifulSoup模块：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们声明一个url变量，用于我们要抓取的网站。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
url <span class="token operator">=</span> <span class="token string">'https://archive.ics.uci.edu/ml/datasets.php'</span>

<span class="token comment"># 让我们使用requests的get方法从url获取数据</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token comment"># 检查状态</span>
status <span class="token operator">=</span> response<span class="token punctuation">.</span>status_code
<span class="token keyword">print</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token comment"># 200表示获取成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用beautifulSoup解析页面内容：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
url <span class="token operator">=</span> <span class="token string">'https://archive.ics.uci.edu/ml/datasets.php'</span>

response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
content <span class="token operator">=</span> response<span class="token punctuation">.</span>content <span class="token comment"># 我们从网站获取所有内容</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">'html.parser'</span><span class="token punctuation">)</span> <span class="token comment"># beautiful soup将给我们一个解析的机会</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>title<span class="token punctuation">)</span> <span class="token comment"># &lt;title>UCI Machine Learning Repository: Data Sets&lt;/title></span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>title<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># UCI Machine Learning Repository: Data Sets</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token comment"># 给出网站上的整个页面</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span>

tables <span class="token operator">=</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'table'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">'cellpadding'</span><span class="token punctuation">:</span><span class="token string">'3'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 我们定位cellpadding属性值为3的表格</span>
<span class="token comment"># 我们可以使用id、class或HTML标签进行选择，有关更多信息，请查看beautifulsoup文档</span>
table <span class="token operator">=</span> tables<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment"># 结果是一个列表，我们从中提取数据</span>
<span class="token keyword">for</span> td <span class="token keyword">in</span> table<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">'tr'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'td'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>td<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你运行这段代码，你会发现提取工作只完成了一半。你可以继续完成它，因为这是练习1的一部分。
参考<a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/#quick-start" target="_blank" rel="noopener noreferrer">beautifulsoup文档<ExternalLinkIcon/></a>获取更多信息。</p>
<p>🌕 你非常特别，你每天都在进步。你只剩下八天就要达到伟大的境界了。现在做一些练习来锻炼你的大脑和肌肉。</p>
<h2 id="💻-练习-第22天" tabindex="-1"><a class="header-anchor" href="#💻-练习-第22天" aria-hidden="true">#</a> 💻 练习：第22天</h2>
<ol>
<li>抓取以下网站并将数据存储为json文件（url = 'http://www.bu.edu/president/boston-university-facts-stats/'）。</li>
<li>提取此url中的表格（https://archive.ics.uci.edu/ml/datasets.php）并将其更改为json文件。</li>
<li>抓取总统表并将数据存储为json（https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States）。这个表格结构不是很规整，抓取可能需要很长时间。</li>
</ol>
<p>🎉 恭喜！🎉</p>
<p><RouterLink to="/docs/Python/21_classes_and_objects_cn.html">&lt;&lt; 第 21 天</RouterLink> | <RouterLink to="/docs/Python/23_virtual_environment_cn.html">第 23 天 &gt;&gt;</RouterLink></p>
</div></template>


