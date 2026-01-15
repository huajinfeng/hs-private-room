<template><div><!-- 边栏的标题用 # -->
<h1 id="_03-字符串" tabindex="-1"><a class="header-anchor" href="#_03-字符串" aria-hidden="true">#</a> 03 字符串</h1>
<p><RouterLink to="/docs/Python/2%E3%80%81%E8%BF%90%E7%AE%97%E7%AC%A6.html">&lt;&lt; 上一章</RouterLink> | <RouterLink to="/docs/Python/3%E3%80%81%E5%AD%97%E7%AC%A6%E4%B8%B2.html">下一章 &gt;&gt;</RouterLink></p>
<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2>
<p>文本是一种字符串数据类型。任何以文本形式书写的数据类型都是字符串。任何用单引号、双引号或三引号括起来的数据都是字符串。有很多方法和内置函数来处理字符串类型的数据。使用 len() 方法获取字符串的长度。</p>
<h3 id="创建字符串" tabindex="-1"><a class="header-anchor" href="#创建字符串" aria-hidden="true">#</a> 创建字符串</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>letter <span class="token operator">=</span> <span class="token string">'P'</span>                <span class="token comment"># 字符串可以是一个字符，也可以是一堆文字</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>letter<span class="token punctuation">)</span>               <span class="token comment"># P</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>letter<span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment"># 1</span>
greeting <span class="token operator">=</span> <span class="token string">'Hello, World!'</span>  <span class="token comment"># 字符串使用单引号或双引号构建，"Hello, World!"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span>             <span class="token comment"># Hello, World!</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment"># 13</span>
chinese <span class="token operator">=</span> <span class="token string">"你好"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>chinese<span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment"># 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多行字符串使用三个单引号 (''') 或者三个双引号 (&quot;&quot;&quot;) 创建。 以下为示例：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>multiline_string <span class="token operator">=</span> <span class="token triple-quoted-string string">'''
                      古人学问无遗力，
                      少壮工夫老始成。
                      纸上得来终觉浅，
                      绝知此事要躬行。
                                    ————《冬夜读书示子聿》宋·陆游
                    '''</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>multiline_string<span class="token punctuation">)</span>

<span class="token comment"># 换种方式</span>
multiline_string <span class="token operator">=</span> <span class="token triple-quoted-string string">"""
                      莫言下岭便无难，
                      赚得行人错喜欢。
                      政入万山围子里，
                      一山放出一山拦。
                                    ————《过松源晨炊漆公店》宋·杨万里
                    """</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>multiline_string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串串联" tabindex="-1"><a class="header-anchor" href="#字符串串联" aria-hidden="true">#</a> 字符串串联</h3>
<p>我们可以将字符串连接在一起。合并或连接字符串称为串联。请看下面的示例：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
first_name <span class="token operator">=</span> <span class="token string">'hua'</span>
last_name <span class="token operator">=</span> <span class="token string">'Joffery'</span>
space <span class="token operator">=</span> <span class="token string">' '</span>
full_name <span class="token operator">=</span> first_name  <span class="token operator">+</span>  space <span class="token operator">+</span> last_name
<span class="token keyword">print</span><span class="token punctuation">(</span>full_name<span class="token punctuation">)</span> <span class="token comment"># hua Joffery</span>
<span class="token comment"># 使用 len() 内置函数获取字符串的长度</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>first_name<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>last_name<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># 7</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>first_name<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token builtin">len</span><span class="token punctuation">(</span>last_name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># false</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>full_name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串中的转译序列" tabindex="-1"><a class="header-anchor" href="#字符串中的转译序列" aria-hidden="true">#</a> 字符串中的转译序列</h3>
<p>在 Python 和其他编程语言中，\ 后跟一个字符是转义序列。以下是一些常见的转义序列：</p>
<ul>
<li>\n : 换行</li>
<li>\t : 制表符(4个空格)</li>
<li>\ : 转义字符
eg:</li>
<li>\ : 反斜杠</li>
<li>' : 单引号</li>
<li>&quot; : 双引号</li>
</ul>
<p>现在，让我们看看上面的转义序列的用法和示例。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'世事相违每如此，\n好怀百岁几回开？'</span><span class="token punctuation">)</span> <span class="token comment"># 换行</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'班级\t姓名\t学号'</span><span class="token punctuation">)</span> <span class="token comment"># 增加一个制表符</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'一班\t张三\t01'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'二班\t李四\t02'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'三班\t王五\t03'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'输出一个反斜杠(\\)'</span><span class="token punctuation">)</span> <span class="token comment"># 输出反斜杠</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'\"Hello, World!\"'</span><span class="token punctuation">)</span> <span class="token comment"># 在单引号里写双引号</span>

<span class="token comment"># 输出</span>
世事相违每如此，
好怀百岁几回开？
班级	姓名	学号
一班	张三	<span class="token number">01</span>
二班	李四	<span class="token number">02</span>
三班	王五	<span class="token number">03</span>
输出一个反斜杠<span class="token punctuation">(</span>\<span class="token punctuation">)</span>
<span class="token string">"Hello, World!"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串格式化" tabindex="-1"><a class="header-anchor" href="#字符串格式化" aria-hidden="true">#</a> 字符串格式化</h3>
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
first_name <span class="token operator">=</span> <span class="token string">'hua'</span>
last_name <span class="token operator">=</span> <span class="token string">'joffery'</span>
language <span class="token operator">=</span> <span class="token string">'Python'</span>
formated_string <span class="token operator">=</span> <span class="token string">'I am %s %s. Learning %s'</span> <span class="token operator">%</span><span class="token punctuation">(</span>first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> language<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>formated_string<span class="token punctuation">)</span>

<span class="token comment"># 字符串和数字</span>
radius <span class="token operator">=</span> <span class="token number">10</span>
pi <span class="token operator">=</span> <span class="token number">3.14</span>
area <span class="token operator">=</span> pi <span class="token operator">*</span> radius <span class="token operator">**</span> <span class="token number">2</span>
formated_string <span class="token operator">=</span> <span class="token string">'半径为 %d 的圆的面积为 %.2f.'</span> <span class="token operator">%</span><span class="token punctuation">(</span>radius<span class="token punctuation">,</span> area<span class="token punctuation">)</span> <span class="token comment"># 2 表示小数点后的 2 位有效数字</span>

python_libraries <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Django'</span><span class="token punctuation">,</span> <span class="token string">'Flask'</span><span class="token punctuation">,</span> <span class="token string">'NumPy'</span><span class="token punctuation">,</span> <span class="token string">'Matplotlib'</span><span class="token punctuation">,</span><span class="token string">'Pandas'</span><span class="token punctuation">]</span>
formated_string <span class="token operator">=</span> <span class="token string">'Python的库有 %s'</span> <span class="token operator">%</span> <span class="token punctuation">(</span>python_libraries<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>formated_string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="新式字符串格式化-str-format" tabindex="-1"><a class="header-anchor" href="#新式字符串格式化-str-format" aria-hidden="true">#</a> 新式字符串格式化 (str.format)</h4>
<p>这种格式化方式是在 Python 3 中引入的。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
first_name <span class="token operator">=</span> <span class="token string">'hua'</span>
last_name <span class="token operator">=</span> <span class="token string">'joffery'</span>
language <span class="token operator">=</span> <span class="token string">'Python'</span>
formated_string <span class="token operator">=</span> <span class="token string">'I am {} {}. Learning {}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> language<span class="token punctuation">)</span>
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

<span class="token comment">#### 字符串插值 / f-Strings (Python 3.6+)</span>

另一种新的字符串格式化是字符串插值，f<span class="token operator">-</span>strings。字符串以 f 开头，我们可以在相应的位置注入数据。

```py
a <span class="token operator">=</span> <span class="token number">4</span>
b <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">+</span>b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">-</span> b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> * </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">*</span> b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> / </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">/</span> b<span class="token punctuation">:</span><span class="token format-spec">.2f</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span> <span class="token comment">#:.2f保留两位小数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> % </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">%</span> b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> // </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">//</span> b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string"> ** </span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span>a <span class="token operator">**</span> b<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python-字符串是字符序列" tabindex="-1"><a class="header-anchor" href="#python-字符串是字符序列" aria-hidden="true">#</a> Python 字符串是字符序列</h3>
<p>Python 字符串是字符序列，与其他 Python 有序对象 - 列表和元组 - 共享基本访问方法。从字符串中提取单个字符的最简单方法（以及从任何序列中提取单个成员的方法）是将它们解压缩到相应的变量中。</p>
<h4 id="拆解字符" tabindex="-1"><a class="header-anchor" href="#拆解字符" aria-hidden="true">#</a> 拆解字符</h4>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'Python'</span>
a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">,</span>f <span class="token operator">=</span> language <span class="token comment"># 拆解字符串中的字符并赋值给变量</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment"># P</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment"># y</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment"># t</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token comment"># h</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token comment"># o</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment"># n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通过索引获取字符串中的字符" tabindex="-1"><a class="header-anchor" href="#通过索引获取字符串中的字符" aria-hidden="true">#</a> 通过索引获取字符串中的字符</h4>
<p>在编程中，计数从零开始。因此，字符串的第一个字母位于零索引处，字符串的最后一个字母位于字符串长度减一处。</p>
<p><img src="@source/docs/pythonImages/string_index.png" alt="String index"></p>
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
last_three <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token comment">#当冒号后面没有写数字时（即 [-3:]），会一直截取到序列的末尾。</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>last_three<span class="token punctuation">)</span>   <span class="token comment"># hon</span>
last_three <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>last_three<span class="token punctuation">)</span>   <span class="token comment"># hon</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串反转" tabindex="-1"><a class="header-anchor" href="#字符串反转" aria-hidden="true">#</a> 字符串反转</h4>
<p>我们可以轻松地反转字符串。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>greeting <span class="token operator">=</span> <span class="token string">'Hello, World!'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>greeting<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># !dlroW ,olleH</span>
<span class="token comment">#[start:stop:step]（开始:结束:步长）。</span>
<span class="token comment">#第一个冒号前（start）为空：表示从“端点”开始。</span>
<span class="token comment">#第二个冒号前（stop）为空：表示到“另一端”结束。</span>
<span class="token comment">#步长（step）为 -1:从右向左（逆序）读取，每次移动 1 个单位</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="切片时跳过字符" tabindex="-1"><a class="header-anchor" href="#切片时跳过字符" aria-hidden="true">#</a> 切片时跳过字符</h4>
<p>通过将步长参数传递给切片方法，可以在切片时跳过字符。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'Python'</span>
pto <span class="token operator">=</span> language<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">#</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>pto<span class="token punctuation">)</span> <span class="token comment"># Pto</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串方法" tabindex="-1"><a class="header-anchor" href="#字符串方法" aria-hidden="true">#</a> 字符串方法</h3>
<p>有许多字符串方法可以让我们格式化字符串。在下面的示例中，我们使用其中一些：</p>
<ul>
<li>capitalize(): 将字符串中的第一个字符转换为大写字母</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 'Python'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>count(): 返回字符串中子字符串的出现次数，count(子字符串，start=..，end=..)。start 是计数的起始索引，end 是计数的最后一个索引。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">'n'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">'n'</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1, </span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">'th'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>endswith(): 判断字符串是否以特定的子字符串结尾，返回 True 或 False</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">'ge'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">'on'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>expandtabs(): 用空格替换制表符，默认制表符大小为 8。它接受制表符大小参数</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'learning\tpython\tlanguage'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>expandtabs<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># learning        python  language</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>expandtabs<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># learning  python    language</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>find(): 返回子字符串第一次出现的索引，如果未找到则返回 -1</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">'y'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">'th'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>rfind(): 返回子字符串最后一次出现的索引，如果未找到则返回 -1</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 12</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">'th'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>format(): 将字符串格式化为更美观的输出
更多字符串格式化的方法和信息：请点击<a href="https://www.programiz.com/python-programming/methods/string/format" target="_blank" rel="noopener noreferrer">链接<ExternalLinkIcon/></a></li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>first_name <span class="token operator">=</span> <span class="token string">'hua'</span>
last_name <span class="token operator">=</span> <span class="token string">'joffery'</span>
age <span class="token operator">=</span> <span class="token number">13</span><span class="token operator">&lt;&lt;</span><span class="token number">1</span>
country <span class="token operator">=</span> <span class="token string">'Suzhou'</span>
sentence <span class="token operator">=</span> <span class="token string">'I am {} {}. I am {} years old. I live in {}.'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> country<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span> <span class="token comment"># I am hua joffery. I am 26 years old. I live in Suzhou.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>index(): 返回子字符串的最小索引，附加参数表示起始和结束索引（默认为 0，字符串长度为 - 1）。如果未找到子字符串，则会引发 valueError。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
sub_string <span class="token operator">=</span> <span class="token string">'an'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>index<span class="token punctuation">(</span>sub_string<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 8</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>index<span class="token punctuation">(</span>sub_string<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>rindex(): 返回子字符串的最大索引，附加参数表示起始和结束索引（默认为 0，字符串长度为 - 1）。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
sub_string <span class="token operator">=</span> <span class="token string">'an'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>rindex<span class="token punctuation">(</span>sub_string<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 8</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>rindex<span class="token punctuation">(</span>sub_string<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isalnum(): 判断字符串字符是否都是字母数字字符</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'pythonlanguage'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>

language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False, 空格不是字母字符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isalpha(): 判断字符串字符是否都是字母字符 (a-z and A-Z)</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False, 空格不是字母字符</span>
language <span class="token operator">=</span> <span class="token string">'pythonlanguage'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
num <span class="token operator">=</span> <span class="token string">'123'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isdecimal(): 判断符串中的所有字符是否都是十进制 (0-9)</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isdecimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>
language <span class="token operator">=</span> <span class="token string">'123'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isdecimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
language <span class="token operator">=</span> <span class="token string">'\u00B2'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># False</span>
language <span class="token operator">=</span> <span class="token string">'12 3'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isdecimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False, 含有空格</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isdigit(): 判断字符串中的所有字符是否都是数字（0-9 和一些其他表示数字的 Unicode 字符）</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'one'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
language <span class="token operator">=</span> <span class="token string">'1'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># True</span>
language <span class="token operator">=</span> <span class="token string">'\u00B2'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isnumeric(): 判断字符串中的所有字符是否都是数字或与数字相关（就像 isdigit()，只是接受更多符号，如 ½）</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>num <span class="token operator">=</span> <span class="token string">'10'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>isnumeric<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
num <span class="token operator">=</span> <span class="token string">'½'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>isnumeric<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
num <span class="token operator">=</span> <span class="token string">'\u00BD'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>isnumeric<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
num <span class="token operator">=</span> <span class="token string">'10.5'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>isnumeric<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>isidentifier(): 判断有效的标识符 - 检查字符串是否是有效的变量名</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'123pythonlanguage'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isidentifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False, 因为以数字开头</span>
language <span class="token operator">=</span> <span class="token string">'python_language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isidentifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>islower(): 判断字符串中的所有字母是否都是小写(检查的是字符串中所有的“具备大小写特征的字符”是否都是小写)</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token comment">#忽略不具备大小写属性的字符：空格、数字、标点符号、特殊符号（如 @, #）等都会被直接跳过</span>
<span class="token comment">#在剩下的字符中，只要至少有一个字符具备大小写形式，且所有这些字符都是小写，结果就为 True</span>
language <span class="token operator">=</span> <span class="token string">' '</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<ul>
<li>isupper(): 判断字符串中的所有字母是否都是大写</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#  False</span>
language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>join(): 返回连接后的字符串</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>web_tech <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'HTML'</span><span class="token punctuation">,</span> <span class="token string">'CSS'</span><span class="token punctuation">,</span> <span class="token string">'JavaScript'</span><span class="token punctuation">,</span> <span class="token string">'React'</span><span class="token punctuation">]</span>
result <span class="token operator">=</span> <span class="token string">' '</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>web_tech<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment"># 'HTML CSS JavaScript React'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>web_tech <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'HTML'</span><span class="token punctuation">,</span> <span class="token string">'CSS'</span><span class="token punctuation">,</span> <span class="token string">'JavaScript'</span><span class="token punctuation">,</span> <span class="token string">'React'</span><span class="token punctuation">]</span>
result <span class="token operator">=</span> <span class="token string">'#'</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>web_tech<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment"># HTML#CSS#JavaScript#React</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>strip(): 从字符串的两端（开头和结尾）向中间扫描，删除匹配的字符，直到遇到第一个不匹配的字符为止。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python languageppppp'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">'py'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># thon language</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>replace(): 用给定的字符串替换子字符串</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'python'</span><span class="token punctuation">,</span> <span class="token string">'coding'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># coding language</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>split(): 使用给定的字符串或空格作为分隔符来拆分字符串</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># ['python', 'language']</span>
language <span class="token operator">=</span> <span class="token string">'python，language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">'，'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># ['python', 'language']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>title(): 返回标题大小写的字符串(字符串首字母大写)</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># Python Language</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>swapcase(): 将所有大写字符转换为小写字符，将所有小写字符转换为大写字符</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>swapcase<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># PYTHON LANGUAGE</span>
language <span class="token operator">=</span> <span class="token string">'PYTHON LANGUAGE'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>swapcase<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># python language</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>startswith(): 判断字符串是否以指定字符串开头</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'python language'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">'python'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>大小写转换：capitalize(), title(), swapcase(), islower(), isupper()。</p>
<p>搜索与计数：count(), find(), index(), startswith(), endswith()。</p>
<p>清洗与替换：
strip(): 移除两端指定字符。
replace(): 全局替换子串。</p>
<p>拆分与合并：
split(): 将字符串切分为列表。
join(): 将列表元素连接成字符串。</p>
<p>内容判断：isalpha(), isdigit(), isalnum(), isidentifier() 等。</p>
<p><RouterLink to="/docs/Python/2%E3%80%81%E8%BF%90%E7%AE%97%E7%AC%A6.html">&lt;&lt; 上一章</RouterLink> | <RouterLink to="/docs/Python/3%E3%80%81%E5%AD%97%E7%AC%A6%E4%B8%B2.html">下一章 &gt;&gt;</RouterLink></p>
</div></template>


