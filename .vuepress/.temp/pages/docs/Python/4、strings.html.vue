<template><div><div align="center">
  <h1> 30 天 Python：第四天 - Strings</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>
<p><sub>作者:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> 第二版：2021 年 7 月</small>
</sub></p>
</div>
<p><RouterLink to="/docs/Python/03_operators.html">&lt;&lt; 第三天</RouterLink> | <RouterLink to="/docs/Python/05_lists.html">第五天 &gt;&gt;</RouterLink></p>
<p><img src="@source/docs/images/30DaysOfPython_banner3@2x.png" alt="30DaysOfPython"></p>
<p>阅读大约需要：20m</p>
<ul>
<li><a href="#%E7%AC%AC%E5%9B%9B%E5%A4%A9">第四天</a>
<ul>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串</a>
<ul>
<li><a href="#%E5%88%9B%E5%BB%BA%E5%AD%97%E7%AC%A6%E4%B8%B2">创建字符串</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%B2%E8%81%94">字符串串联</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E8%BD%AC%E8%AF%91%E5%BA%8F%E5%88%97">字符串中的转译序列</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%BC%E5%BC%8F%E5%8C%96">字符串格式化</a>
<ul>
<li><a href="#%E4%BC%A0%E7%BB%9F%E9%A3%8E%E6%A0%BC%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%BC%E5%BC%8F%E5%8C%96--%E6%93%8D%E4%BD%9C%E7%AC%A6">传统风格字符串格式化 (% 操作符)</a></li>
<li><a href="#%E6%96%B0%E5%BC%8F%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%BC%E5%BC%8F%E5%8C%96-strformat">新式字符串格式化 (str.format)</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%8F%92%E5%80%BC--f-strings-python-36">字符串插值 / f-Strings (Python 3.6+)</a></li>
</ul>
</li>
<li><a href="#python-%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%98%AF%E5%AD%97%E7%AC%A6%E5%BA%8F%E5%88%97">Python 字符串是字符序列</a>
<ul>
<li><a href="#%E6%8B%86%E8%A7%A3%E5%AD%97%E7%AC%A6">拆解字符</a></li>
<li><a href="#%E9%80%9A%E8%BF%87%E7%B4%A2%E5%BC%95%E8%8E%B7%E5%8F%96%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E5%AD%97%E7%AC%A6">通过索引获取字符串中的字符</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%88%87%E7%89%87">字符串切片</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8F%8D%E8%BD%AC">字符串反转</a></li>
<li><a href="#%E5%88%87%E7%89%87%E6%97%B6%E8%B7%B3%E8%BF%87%E5%AD%97%E7%AC%A6">切片时跳过字符</a></li>
</ul>
</li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%96%B9%E6%B3%95">字符串方法</a></li>
</ul>
</li>
<li><a href="#-%E7%BB%83%E4%B9%A0---%E7%AC%AC%E5%9B%9B%E5%A4%A9">💻 练习 - 第四天</a></li>
</ul>
</li>
</ul>
<h1 id="第四天" tabindex="-1"><a class="header-anchor" href="#第四天" aria-hidden="true">#</a> 第四天</h1>
<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2>
<p>文本是一种字符串数据类型。任何以文本形式书写的数据类型都是字符串。任何用单引号、双引号或三引号括起来的数据都是字符串。有很多方法和内置函数来处理字符串类型的数据。使用 len() 方法获取字符串的长度。</p>
<h3 id="创建字符串" tabindex="-1"><a class="header-anchor" href="#创建字符串" aria-hidden="true">#</a> 创建字符串</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>letter <span class="token operator">=</span> <span class="token string">'P'</span>                <span class="token comment"># 字符串可以是一个字符，也可以是一堆文字</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>letter<span class="token punctuation">)</span>               <span class="token comment"># P</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>letter<span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment"># 1</span>
greeting <span class="token operator">=</span> <span class="token string">'Hello, World!'</span>  <span class="token comment"># 字符串使用单引号或双引号构建，"Hello, World!"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span>             <span class="token comment"># Hello, World!</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment"># 13</span>
sentence <span class="token operator">=</span> <span class="token string">"I hope you are enjoying 30 days of Python Challenge"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多行字符串使用三个单引号 (''') 或者三个双引号 (&quot;&quot;&quot;) 创建。 以下为示例：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>multiline_string <span class="token operator">=</span> <span class="token triple-quoted-string string">'''I am a teacher and enjoy teaching.
I didn't find anything as rewarding as empowering people.
That is why I created 30 days of python.'''</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>multiline_string<span class="token punctuation">)</span>

<span class="token comment"># 换种方式</span>
multiline_string <span class="token operator">=</span> <span class="token triple-quoted-string string">"""I am a teacher and enjoy teaching.
I didn't find anything as rewarding as empowering people.
That is why I created 30 days of python."""</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>multiline_string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串串联" tabindex="-1"><a class="header-anchor" href="#字符串串联" aria-hidden="true">#</a> 字符串串联</h3>
<p>我们可以将字符串连接在一起。合并或连接字符串称为串联。请看下面的示例：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
first_name <span class="token operator">=</span> <span class="token string">'Asabeneh'</span>
last_name <span class="token operator">=</span> <span class="token string">'Yetayeh'</span>
space <span class="token operator">=</span> <span class="token string">' '</span>
full_name <span class="token operator">=</span> first_name  <span class="token operator">+</span>  space <span class="token operator">+</span> last_name
<span class="token keyword">print</span><span class="token punctuation">(</span>full_name<span class="token punctuation">)</span> <span class="token comment"># Asabeneh Yetayeh</span>
<span class="token comment"># 使用 len() 内置函数获取字符串的长度</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>first_name<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 8</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>last_name<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># 7</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>first_name<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token builtin">len</span><span class="token punctuation">(</span>last_name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>full_name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串中的转译序列" tabindex="-1"><a class="header-anchor" href="#字符串中的转译序列" aria-hidden="true">#</a> 字符串中的转译序列</h3>
<p>在 Python 和其他编程语言中，\ 后跟一个字符是转义序列。以下是一些常见的转义序列：</p>
<ul>
<li>\n: 换行</li>
<li>\t: 制表符(4个空格)</li>
<li>\\: 反斜杠</li>
<li>\': 单引号</li>
<li>\&quot;: 双引号</li>
</ul>
<p>现在，让我们看看上面的转义序列的用法和示例。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'I hope everyone is enjoying the Python Challenge.\nAre you ?'</span><span class="token punctuation">)</span> <span class="token comment"># 换行</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Days\tTopics\tExercises'</span><span class="token punctuation">)</span> <span class="token comment"># 增加一个制表符</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Day 1\t5\t5'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Day 2\t6\t20'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Day 3\t5\t23'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Day 4\t1\t35'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'This is a backslash  symbol (\\)'</span><span class="token punctuation">)</span> <span class="token comment"># 输出反斜杠</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'In every programming language it starts with \"Hello, World!\"'</span><span class="token punctuation">)</span> <span class="token comment"># 在单引号里写双引号</span>

<span class="token comment"># 输出</span>
I hope every one <span class="token keyword">is</span> enjoying the Python Challenge<span class="token punctuation">.</span>
Are you ?
Days	Topics	Exercises
Day <span class="token number">1</span>	<span class="token number">5</span>	    <span class="token number">5</span>
Day <span class="token number">2</span>	<span class="token number">6</span>	    <span class="token number">20</span>
Day <span class="token number">3</span>	<span class="token number">5</span>	    <span class="token number">23</span>
Day <span class="token number">4</span>	<span class="token number">1</span>	    <span class="token number">35</span>
This <span class="token keyword">is</span> a backslash  symbol <span class="token punctuation">(</span>\<span class="token punctuation">)</span>
In every programming language it starts <span class="token keyword">with</span> <span class="token string">"Hello, World!"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串格式化" tabindex="-1"><a class="header-anchor" href="#字符串格式化" aria-hidden="true">#</a> 字符串格式化</h3>
<h4 id="传统风格字符串格式化-操作符" tabindex="-1"><a class="header-anchor" href="#传统风格字符串格式化-操作符" aria-hidden="true">#</a> 传统风格字符串格式化 (% 操作符)</h4>
<p>在 Python 中有许多格式化字符串的方法。本节，我们将介绍其中一些方法。
“%”运算符用于格式化包含在“元组”（固定大小列表）中的一组变量，以及格式字符串，其中包含普通文本以及“参数说明符”、特殊符号如“%s”、“%d”、“%f”、“%.<small>数字</small>f”。</p>
<ul>
<li>%s - 字符串 (或者任何可以用字符串表述的对象，例如数字)</li>
<li>%d - 整型</li>
<li>%f - 浮点型</li>
<li>&quot;%.<small>小数位数</small>f&quot; - 固定精度的浮点数</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 仅字符串</span>
first_name <span class="token operator">=</span> <span class="token string">'Asabeneh'</span>
last_name <span class="token operator">=</span> <span class="token string">'Yetayeh'</span>
language <span class="token operator">=</span> <span class="token string">'Python'</span>
formated_string <span class="token operator">=</span> <span class="token string">'I am %s %s. I teach %s'</span> <span class="token operator">%</span><span class="token punctuation">(</span>first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> language<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>formated_string<span class="token punctuation">)</span>

<span class="token comment"># 字符串和数字</span>
radius <span class="token operator">=</span> <span class="token number">10</span>
pi <span class="token operator">=</span> <span class="token number">3.14</span>
area <span class="token operator">=</span> pi <span class="token operator">*</span> radius <span class="token operator">**</span> <span class="token number">2</span>
formated_string <span class="token operator">=</span> <span class="token string">'The area of circle with a radius %d is %.2f.'</span> <span class="token operator">%</span><span class="token punctuation">(</span>radius<span class="token punctuation">,</span> area<span class="token punctuation">)</span> <span class="token comment"># 2 表示小数点后的 2 位有效数字</span>

python_libraries <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Django'</span><span class="token punctuation">,</span> <span class="token string">'Flask'</span><span class="token punctuation">,</span> <span class="token string">'NumPy'</span><span class="token punctuation">,</span> <span class="token string">'Matplotlib'</span><span class="token punctuation">,</span><span class="token string">'Pandas'</span><span class="token punctuation">]</span>
formated_string <span class="token operator">=</span> <span class="token string">'The following are python libraries:%s'</span> <span class="token operator">%</span> <span class="token punctuation">(</span>python_libraries<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>formated_string<span class="token punctuation">)</span> <span class="token comment"># 输出 "The following are python libraries:['Django', 'Flask', 'NumPy', 'Matplotlib','Pandas']"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="新式字符串格式化-str-format" tabindex="-1"><a class="header-anchor" href="#新式字符串格式化-str-format" aria-hidden="true">#</a> 新式字符串格式化 (str.format)</h4>
<p>这种格式化方式是在 Python 3 中引入的。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
first_name <span class="token operator">=</span> <span class="token string">'Asabeneh'</span>
last_name <span class="token operator">=</span> <span class="token string">'Yetayeh'</span>
language <span class="token operator">=</span> <span class="token string">'Python'</span>
formated_string <span class="token operator">=</span> <span class="token string">'I am {} {}. I teach {}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> language<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>formated_string<span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token number">4</span>
b <span class="token operator">=</span> <span class="token number">3</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{} + {} = {}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{} - {} = {}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{} * {} = {}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">*</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{} / {} = {:.2f}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">/</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 限制保留两位小数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{} % {} = {}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{} // {} = {}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">//</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{} ** {} = {}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">**</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
<span class="token number">4</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">7</span>
<span class="token number">4</span> <span class="token operator">-</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token number">4</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">12</span>
<span class="token number">4</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">1.33</span>
<span class="token number">4</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token number">4</span> <span class="token operator">//</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token number">4</span> <span class="token operator">**</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">64</span>

<span class="token comment"># 字符串和数字</span>
radius <span class="token operator">=</span> <span class="token number">10</span>
pi <span class="token operator">=</span> <span class="token number">3.14</span>
area <span class="token operator">=</span> pi <span class="token operator">*</span> radius <span class="token operator">**</span> <span class="token number">2</span>
formated_string <span class="token operator">=</span> <span class="token string">'The area of a circle with a radius {} is {:.2f}.'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>radius<span class="token punctuation">,</span> area<span class="token punctuation">)</span> <span class="token comment"># 保留两位小数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>formated_string<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串插值-f-strings-python-3-6" tabindex="-1"><a class="header-anchor" href="#字符串插值-f-strings-python-3-6" aria-hidden="true">#</a> 字符串插值 / f-Strings (Python 3.6+)</h4>
<p>另一种新的字符串格式化是字符串插值，f-strings。字符串以 f 开头，我们可以在相应的位置注入数据。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">4</span>
b <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">+</span>b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">-</span> b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> * </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">*</span> b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> / </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">/</span> b<span class="token punctuation">:</span><span class="token format-spec">.2f</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> % </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">%</span> b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> // </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">//</span> b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> ** </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">**</span> b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python-字符串是字符序列" tabindex="-1"><a class="header-anchor" href="#python-字符串是字符序列" aria-hidden="true">#</a> Python 字符串是字符序列</h3>
<p>Python 字符串是字符序列，与其他 Python 有序对象 - 列表和元组 - 共享基本访问方法。从字符串中提取单个字符的最简单方法（以及从任何序列中提取单个成员的方法）是将它们解压缩到相应的变量中。</p>
<h4 id="拆解字符" tabindex="-1"><a class="header-anchor" href="#拆解字符" aria-hidden="true">#</a> 拆解字符</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>language = 'Python'
a,b,c,d,e,f = language # 拆解字符串中的字符并赋值给变量
print(a) # P
print(b) # y
print(c) # t
print(d) # h
print(e) # o
print(f) # n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通过索引获取字符串中的字符" tabindex="-1"><a class="header-anchor" href="#通过索引获取字符串中的字符" aria-hidden="true">#</a> 通过索引获取字符串中的字符</h4>
<p>在编程中，计数从零开始。因此，字符串的第一个字母位于零索引处，字符串的最后一个字母位于字符串长度减一处。</p>
<p><img src="@source/docs/images/string_index.png" alt="String index"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'Python'</span>
first_letter <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>first_letter<span class="token punctuation">)</span> <span class="token comment"># P</span>
second_letter <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>second_letter<span class="token punctuation">)</span> <span class="token comment"># y</span>
last_index <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
last_letter <span class="token operator">=</span> language<span class="token punctuation">[</span>last_index<span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>last_letter<span class="token punctuation">)</span> <span class="token comment"># n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想从右边开始，我们可以使用负索引。-1 是最后一个索引。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'Python'</span>
last_letter <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>last_letter<span class="token punctuation">)</span> <span class="token comment"># n</span>
second_last <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>second_last<span class="token punctuation">)</span> <span class="token comment"># o</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串切片" tabindex="-1"><a class="header-anchor" href="#字符串切片" aria-hidden="true">#</a> 字符串切片</h4>
<p>在 Python 中，我们可以将字符串切片为子字符串。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'Python'</span>
first_three <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment"># 从零索引开始，直到 3 但不包括 3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>first_three<span class="token punctuation">)</span> <span class="token comment">#Pyt</span>
last_three <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>last_three<span class="token punctuation">)</span> <span class="token comment"># hon</span>
<span class="token comment"># 另一种方式</span>
last_three <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>last_three<span class="token punctuation">)</span>   <span class="token comment"># hon</span>
last_three <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>last_three<span class="token punctuation">)</span>   <span class="token comment"># hon</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串反转" tabindex="-1"><a class="header-anchor" href="#字符串反转" aria-hidden="true">#</a> 字符串反转</h4>
<p>我们可以轻松地反转字符串。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>greeting <span class="token operator">=</span> <span class="token string">'Hello, World!'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>greeting<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># !dlroW ,olleH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="切片时跳过字符" tabindex="-1"><a class="header-anchor" href="#切片时跳过字符" aria-hidden="true">#</a> 切片时跳过字符</h4>
<p>通过将步长参数传递给切片方法，可以在切片时跳过字符。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'Python'</span>
pto <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">#</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>pto<span class="token punctuation">)</span> <span class="token comment"># Pto</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串方法" tabindex="-1"><a class="header-anchor" href="#字符串方法" aria-hidden="true">#</a> 字符串方法</h3>
<p>有许多字符串方法可以让我们格式化字符串。在下面的示例中，我们使用其中一些：</p>
<ul>
<li>capitalize(): 将字符串中的第一个字符转换为大写字母</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 'Thirty days of python'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>count(): 返回字符串中子字符串的出现次数，count(子字符串，start=..，end=..)。start 是计数的起始索引，end 是计数的最后一个索引。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">'y'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1, </span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">'th'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 2`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>endswith(): 判断字符串是否以特定的子字符串结尾，返回 True 或 False</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">'on'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">'tion'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>expandtabs(): 用空格替换制表符，默认制表符大小为 8。它接受制表符大小参数</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty\tdays\tof\tpython'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>expandtabs<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># 'thirty  days    of      python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>expandtabs<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 'thirty    days      of        python'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>find(): 返回子字符串第一次出现的索引，如果未找到则返回 -1</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">'y'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">'th'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>rfind(): 返回子字符串最后一次出现的索引，如果未找到则返回 -1</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">'y'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 16</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">'th'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>format(): 将字符串格式化为更美观的输出
有关字符串格式化的更多信息，请查看此<a href="https://www.programiz.com/python-programming/methods/string/format" target="_blank" rel="noopener noreferrer">链接<ExternalLinkIcon/></a></li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>first_name <span class="token operator">=</span> <span class="token string">'Asabeneh'</span>
last_name <span class="token operator">=</span> <span class="token string">'Yetayeh'</span>
age <span class="token operator">=</span> <span class="token number">250</span>
job <span class="token operator">=</span> <span class="token string">'teacher'</span>
country <span class="token operator">=</span> <span class="token string">'Finland'</span>
sentence <span class="token operator">=</span> <span class="token string">'I am {} {}. I am a {}. I am {} years old. I live in {}.'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> job<span class="token punctuation">,</span> country<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span> <span class="token comment"># I am Asabeneh Yetayeh. I am 250 years old. I am a teacher. I live in Finland.</span>

radius <span class="token operator">=</span> <span class="token number">10</span>
pi <span class="token operator">=</span> <span class="token number">3.14</span>
area <span class="token operator">=</span> pi <span class="token operator">*</span> radius <span class="token operator">**</span> <span class="token number">2</span>
result <span class="token operator">=</span> <span class="token string">'The area of a circle with radius {} is {}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>radius<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment"># The area of a circle with radius 10 is 314</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>index(): 返回子字符串的最小索引，附加参数表示起始和结束索引（默认为 0，字符串长度为 - 1）。如果未找到子字符串，则会引发 valueError。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
sub_string <span class="token operator">=</span> <span class="token string">'da'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>index<span class="token punctuation">(</span>sub_string<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 7</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>index<span class="token punctuation">(</span>sub_string<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>rindex(): 返回子字符串的最大索引，附加参数表示起始和结束索引（默认为 0，字符串长度为 - 1）。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
sub_string <span class="token operator">=</span> <span class="token string">'da'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>rindex<span class="token punctuation">(</span>sub_string<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 8</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>rindex<span class="token punctuation">(</span>sub_string<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isalnum(): 判断字符串字符是否都是字母数字字符</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'ThirtyDaysPython'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>

challenge <span class="token operator">=</span> <span class="token string">'30DaysPython'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>

challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False, 空格不是字母字符</span>

challenge <span class="token operator">=</span> <span class="token string">'thirty days of python 2019'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isalpha(): 判断字符串字符是否都是字母字符 (a-z and A-Z)</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False, 空格不是字母字符</span>
challenge <span class="token operator">=</span> <span class="token string">'ThirtyDaysPython'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
num <span class="token operator">=</span> <span class="token string">'123'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isdecimal(): 判断符串中的所有字符是否都是十进制 (0-9)</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isdecimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>
challenge <span class="token operator">=</span> <span class="token string">'123'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isdecimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
challenge <span class="token operator">=</span> <span class="token string">'\u00B2'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># False</span>
challenge <span class="token operator">=</span> <span class="token string">'12 3'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isdecimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False, 含有空格</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isdigit(): 判断字符串中的所有字符是否都是数字（0-9 和一些其他表示数字的 Unicode 字符）</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'Thirty'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
challenge <span class="token operator">=</span> <span class="token string">'30'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># True</span>
challenge <span class="token operator">=</span> <span class="token string">'\u00B2'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isnumeric(): 判断字符串中的所有字符是否都是数字或与数字相关（就像 isdigit()，只是接受更多符号，如 ½）</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>num <span class="token operator">=</span> <span class="token string">'10'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>isnumeric<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
num <span class="token operator">=</span> <span class="token string">'\u00BD'</span> <span class="token comment"># ½</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>isnumeric<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
num <span class="token operator">=</span> <span class="token string">'10.5'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>isnumeric<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isidentifier(): 判断有效的标识符 - 检查字符串是否是有效的变量名</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'30DaysOfPython'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isidentifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False, 因为以数字开头</span>
challenge <span class="token operator">=</span> <span class="token string">'thirty_days_of_python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isidentifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>islower(): 判断字符串中的所有字母是否都是小写</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
challenge <span class="token operator">=</span> <span class="token string">'Thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isupper(): 判断字符串中的所有字母是否都是大写</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#  False</span>
challenge <span class="token operator">=</span> <span class="token string">'THIRTY DAYS OF PYTHON'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>join(): 返回连接后的字符串</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>web_tech <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'HTML'</span><span class="token punctuation">,</span> <span class="token string">'CSS'</span><span class="token punctuation">,</span> <span class="token string">'JavaScript'</span><span class="token punctuation">,</span> <span class="token string">'React'</span><span class="token punctuation">]</span>
result <span class="token operator">=</span> <span class="token string">' '</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>web_tech<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment"># 'HTML CSS JavaScript React'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>web_tech <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'HTML'</span><span class="token punctuation">,</span> <span class="token string">'CSS'</span><span class="token punctuation">,</span> <span class="token string">'JavaScript'</span><span class="token punctuation">,</span> <span class="token string">'React'</span><span class="token punctuation">]</span>
result <span class="token operator">=</span> <span class="token string">'# '</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>web_tech<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment"># 'HTML# CSS# JavaScript# React'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>strip(): 删除从字符串开头到结尾的所有给定字符</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of pythoonnn'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">'noth'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 'irty days of py'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>replace(): 用给定的字符串替换子字符串</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'python'</span><span class="token punctuation">,</span> <span class="token string">'coding'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 'thirty days of coding'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>split(): 使用给定的字符串或空格作为分隔符来拆分字符串</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># ['thirty', 'days', 'of', 'python']</span>
challenge <span class="token operator">=</span> <span class="token string">'thirty, days, of, python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># ['thirty', 'days', 'of', 'python']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>title(): 返回标题大小写的字符串</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># Thirty Days Of Python</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>swapcase(): 将所有大写字符转换为小写字符，将所有小写字符转换为大写字符</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>swapcase<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># THIRTY DAYS OF PYTHON</span>
challenge <span class="token operator">=</span> <span class="token string">'Thirty Days Of Python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>swapcase<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># tHIRTY dAYS oF pYTHON</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>startswith(): 判断字符串是否以指定字符串开头</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>challenge <span class="token operator">=</span> <span class="token string">'thirty days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">'thirty'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>

challenge <span class="token operator">=</span> <span class="token string">'30 days of python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>challenge<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">'thirty'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌕 你是一个非凡的人，你拥有非凡的潜力。你刚刚完成了第 4 天的挑战，你在成为伟人的路上已经迈出四步。现在做一些练习来锻练你的大脑和肌肉。</p>
<h2 id="💻-练习-第四天" tabindex="-1"><a class="header-anchor" href="#💻-练习-第四天" aria-hidden="true">#</a> 💻 练习 - 第四天</h2>
<ol>
<li>将字符串 'Thirty', 'Days', 'Of', 'Python' 连接为一个字符串 'Thirty Days Of Python'。</li>
<li>将字符串 'Coding', 'For', 'All' 连接为一个字符串 'Coding For All'。</li>
<li>声明一个名为 company 的变量，并将其赋值为初始值 &quot;Coding For All&quot;。</li>
<li>使用 <em>print()</em> 打印变量 company。</li>
<li>使用 <em>len()</em> 方法和 <em>print()</em> 打印 company 字符串的长度。</li>
<li>使用 <em>upper()</em> 方法将所有字符更改为大写字母。</li>
<li>使用 <em>lower()</em> 方法将所有字符更改为小写字母。</li>
<li>使用 <em>capitalize()</em>、<em>title()</em> 和 <em>swapcase()</em> 方法格式化字符串 <em>Coding For All</em>。</li>
<li>切片出 <em>Coding For All</em> 字符串的第一个单词。</li>
<li>使用 index、find 或其他方法检查 <em>Coding For All</em> 字符串是否包含单词 Coding。</li>
<li>将字符串 'Coding For All' 中的单词 coding 替换为 Python。</li>
<li>使用 replace 方法或其他方法将 Python for Everyone 替换为 Python for All。</li>
<li>使用空格作为分隔符拆分字符串 'Coding For All'。</li>
<li>在逗号处拆分字符串 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'。</li>
<li>字符串 <em>Coding For All</em> 中索引 0 处的字符是什么。</li>
<li>字符串 <em>Coding For All</em> 的最后一个索引是什么。</li>
<li>字符串 <em>Coding For All</em> 中索引 10 处的字符是什么。</li>
<li>为字符串 'Python For Everyone' 创建首字母缩略词或缩写</li>
<li>为名称 'Coding For All' 创建首字母缩略词或缩写。</li>
<li>使用索引确定 'Coding For All' 中 C 第一次出现的位置。</li>
<li>使用索引确定 'Coding For All' 中 F 第一次出现的位置。</li>
<li>使用 rfind 确定 'Coding For All People' 中 l 最后一次出现的位置。</li>
<li>使用 index 或 find 查找以下句子中单词 'because' 第一次出现的位置：'You cannot end a sentence with because because because is a conjunction'</li>
<li>使用 rindex 查找以下句子中单词 because 最后一次出现的位置：'You cannot end a sentence with because because because is a conjunction'</li>
<li>删除以下句子中短语 'because because because'：'You cannot end a sentence with because because because is a conjunction'</li>
<li>查找以下句子中单词 'because' 第一次出现的位置：'You cannot end a sentence with because because because is a conjunction'</li>
<li>删除以下句子中短语 'because 因为 because'：'You cannot end a sentence with because because because is a conjunction'</li>
<li>''Coding For All' 是否以子字符串 <em>Coding</em> 开头？</li>
<li>'Coding For All' 是否以子字符串 <em>coding</em> 结尾？</li>
<li>'   Coding For All      '  , 删除给定字符串中左右空格。</li>
<li>当我们使用方法 isidentifier() 时，下列哪一个变量返回 True:
<ul>
<li>30DaysOfPython</li>
<li>thirty_days_of_python</li>
</ul>
</li>
<li>以下列表包含一些 Python 库的名称：['Django', 'Flask', 'Bottle', 'Pyramid', 'Falcon']。使用空格连接字符串。</li>
<li>使用换行转义序列分隔以下句子。<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>I am enjoying this challenge<span class="token punctuation">.</span>
I just wonder what <span class="token keyword">is</span> <span class="token builtin">next</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>使用制表符专业序列输出以下内容。<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>Name      Age     Country   City
Asabeneh  <span class="token number">250</span>     Finland   Helsinki
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>使用字符串格式化方法输出以下内容:</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>radius <span class="token operator">=</span> <span class="token number">10</span>
area <span class="token operator">=</span> <span class="token number">3.14</span> * radius ** <span class="token number">2</span>
The area of a circle with radius <span class="token number">10</span> is <span class="token number">314</span> meters square.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="36">
<li>使用字符串格式化方法输出以下内容:</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">8</span> + <span class="token number">6</span> <span class="token operator">=</span> <span class="token number">14</span>
<span class="token number">8</span> - <span class="token number">6</span> <span class="token operator">=</span> <span class="token number">2</span>
<span class="token number">8</span> * <span class="token number">6</span> <span class="token operator">=</span> <span class="token number">48</span>
<span class="token number">8</span> / <span class="token number">6</span> <span class="token operator">=</span> <span class="token number">1.33</span>
<span class="token number">8</span> % <span class="token number">6</span> <span class="token operator">=</span> <span class="token number">2</span>
<span class="token number">8</span> // <span class="token number">6</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token number">8</span> ** <span class="token number">6</span> <span class="token operator">=</span> <span class="token number">262144</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🎉 恭喜 ! 🎉</p>
<p><RouterLink to="/docs/Python/03_operators.html">&lt;&lt; 第三天</RouterLink> | <RouterLink to="/docs/Python/05_lists.html">第五天 &gt;&gt;</RouterLink></p>
</div></template>


