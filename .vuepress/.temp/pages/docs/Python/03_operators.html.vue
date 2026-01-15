<template><div><div align="center">
  <h1> 30 天 Python：第三天 - 运算符</h1>
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
<p><RouterLink to="/docs/Python/02_variables_builtin_functions.html">&lt;&lt; 第二天</RouterLink> | <RouterLink to="/docs/Python/04_strings.html">第四天 &gt;&gt;</RouterLink></p>
<p><img src="@source/docs/images/30DaysOfPython_banner3@2x.png" alt="30DaysOfPython"></p>
<p>阅读大约需要：12m</p>
<ul>
<li><a href="#-%E7%AC%AC%E4%B8%89%E5%A4%A9">📘 第三天</a>
<ul>
<li><a href="#boolean">Boolean</a></li>
<li><a href="#%E8%BF%90%E7%AE%97%E7%AC%A6">运算符</a>
<ul>
<li><a href="#%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6">赋值运算符</a></li>
<li><a href="#%E7%AE%97%E6%9C%AF%E8%BF%90%E7%AE%97%E7%AC%A6">算术运算符</a></li>
<li><a href="#%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6">比较运算符</a></li>
<li><a href="#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6">逻辑运算符</a></li>
</ul>
</li>
<li><a href="#-%E7%BB%83%E4%B9%A0---%E7%AC%AC%E4%B8%89%E5%A4%A9">💻 练习 - 第三天</a></li>
</ul>
</li>
</ul>
<h1 id="📘-第三天" tabindex="-1"><a class="header-anchor" href="#📘-第三天" aria-hidden="true">#</a> 📘 第三天</h1>
<h2 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> Boolean</h2>
<p>布尔类型表示两个值之一：<em>True</em> 或 <em>False</em>。一旦我们开始使用比较运算符，这些数据类型的使用将变得清晰。第一个字母 <strong>T</strong> 表示 True，<strong>F</strong> 表示 False，与 JavaScript 不同，Python 的布尔类型的首字母应该是大写。</p>
<p><strong>示例: 布尔类型的值</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2>
<p>Python 语言支持多种类型的运算符。在本节中，我们将重点介绍其中的一些。</p>
<h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h3>
<p>赋值运算符用于将值赋值给变量。让我们以 = 为例。在数学中，等号表示两个值相等，但在 Python 中，它表示我们正在将一个值存储在某个变量中，我们称之为赋值或将值分配给变量。下表显示了不同类型的 Python 赋值运算符，摘自 <a href="https://www.w3schools.com/python/python_operators.asp" target="_blank" rel="noopener noreferrer">w3school<ExternalLinkIcon/></a>。</p>
<p><img src="@source/docs/images/assignment_operators.png" alt="Assignment Operators"></p>
<h3 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符：</h3>
<ul>
<li>加(+)： a + b</li>
<li>减(-)： a - b</li>
<li>乘(*)： a * b</li>
<li>除(/)： a / b</li>
<li>模运算(%)： a % b</li>
<li>整除(//)： a // b</li>
<li>指数运算(**)： a ** b</li>
</ul>
<p><img src="@source/docs/images/arithmetic_operators.png" alt="Arithmetic Operators"></p>
<p><strong>示例：整型</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># Python 中的算术运算符</span>
<span class="token comment"># 整型</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Addition: '</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>        <span class="token comment"># 3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Subtraction: '</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>     <span class="token comment"># 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Multiplication: '</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># 6</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">'Division: '</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>       <span class="token comment"># 2.0  Python 中的除法运算符返回浮点数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Division: '</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>        <span class="token comment"># 3.0         </span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Division: '</span><span class="token punctuation">,</span> <span class="token number">7</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>        <span class="token comment"># 3.5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Division without the remainder: '</span><span class="token punctuation">,</span> <span class="token number">7</span> <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">)</span>   <span class="token comment"># 3,  返回商的整数部分</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">'Division without the remainder: '</span><span class="token punctuation">,</span><span class="token number">7</span> <span class="token operator">//</span> <span class="token number">3</span><span class="token punctuation">)</span>   <span class="token comment"># 2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Modulus: '</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span>         <span class="token comment"># 1, 返回余数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Exponentiation: '</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment"># 8 代表 2 * 2 * 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：浮点数</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 浮点数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Floating Point Number, PI'</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Floating Point Number, gravity'</span><span class="token punctuation">,</span> <span class="token number">9.81</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：复数</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 复数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Complex number: '</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1j</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Multiplying complex numbers: '</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1j</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token number">1j</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们声明一个变量并分配一个数字类型。我下面使用单个字符变量，但请不要养成这样命名变量的习惯。变量名应始终便于记忆。</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 首先声明变量</span>

a <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment"># a 是一个变量名，3 是一个整型值</span>
b <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment"># b 是一个变量名，2 是一个整型值</span>

<span class="token comment"># 进行算术运算，并将结果赋值给变量</span>
total <span class="token operator">=</span> a <span class="token operator">+</span> b
diff <span class="token operator">=</span> a <span class="token operator">-</span> b
product <span class="token operator">=</span> a <span class="token operator">*</span> b
division <span class="token operator">=</span> a <span class="token operator">/</span> b
remainder <span class="token operator">=</span> a <span class="token operator">%</span> b
floor_division <span class="token operator">=</span> a <span class="token operator">//</span> b
exponential <span class="token operator">=</span> a <span class="token operator">**</span> b

<span class="token comment"># 应该使用 sum 而不是 total，但 sum 是一个内置函数 - 尽量避免覆盖内置函数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span> <span class="token comment"># 如果不打印标签字符串，就不知道值是怎么计算出来的</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'a + b = '</span><span class="token punctuation">,</span> total<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'a - b = '</span><span class="token punctuation">,</span> diff<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'a * b = '</span><span class="token punctuation">,</span> product<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'a / b = '</span><span class="token punctuation">,</span> division<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'a % b = '</span><span class="token punctuation">,</span> remainder<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'a // b = '</span><span class="token punctuation">,</span> floor_division<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'a ** b = '</span><span class="token punctuation">,</span> exponentiation<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'== Addition, Subtraction, Multiplication, Division, Modulus =='</span><span class="token punctuation">)</span>

<span class="token comment"># 声明变量，并把声明语句放在一起</span>
num_one <span class="token operator">=</span> <span class="token number">3</span>
num_two <span class="token operator">=</span> <span class="token number">4</span>

<span class="token comment"># 算术运算</span>
total <span class="token operator">=</span> num_one <span class="token operator">+</span> num_two
diff <span class="token operator">=</span> num_two <span class="token operator">-</span> num_one
product <span class="token operator">=</span> num_one <span class="token operator">*</span> num_two
div <span class="token operator">=</span> num_two <span class="token operator">/</span> num_one
remainder <span class="token operator">=</span> num_two <span class="token operator">%</span> num_one

<span class="token comment"># 使用标签打印值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'total: '</span><span class="token punctuation">,</span> total<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'difference: '</span><span class="token punctuation">,</span> diff<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'product: '</span><span class="token punctuation">,</span> product<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'division: '</span><span class="token punctuation">,</span> div<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'remainder: '</span><span class="token punctuation">,</span> remainder<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们开始使用小数点并开始利用我们已经知道的知识来计算（面积、体积、密度、重量、周长、距离、力）。</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 计算圆的面积</span>
radius <span class="token operator">=</span> <span class="token number">10</span>                                 <span class="token comment"># 圆的半径</span>
area_of_circle <span class="token operator">=</span> <span class="token number">3.14</span> <span class="token operator">*</span> radius <span class="token operator">**</span> <span class="token number">2</span>         <span class="token comment"># 两个 * 符号表示指数或幂</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Area of a circle:'</span><span class="token punctuation">,</span> area_of_circle<span class="token punctuation">)</span>

<span class="token comment"># 计算矩形面积</span>
length <span class="token operator">=</span> <span class="token number">10</span>
width <span class="token operator">=</span> <span class="token number">20</span>
area_of_rectangle <span class="token operator">=</span> length <span class="token operator">*</span> width
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Area of rectangle:'</span><span class="token punctuation">,</span> area_of_rectangle<span class="token punctuation">)</span>

<span class="token comment"># 计算物体重量</span>
mass <span class="token operator">=</span> <span class="token number">75</span>
gravity <span class="token operator">=</span> <span class="token number">9.81</span>
weight <span class="token operator">=</span> mass <span class="token operator">*</span> gravity
<span class="token keyword">print</span><span class="token punctuation">(</span>weight<span class="token punctuation">,</span> <span class="token string">'N'</span><span class="token punctuation">)</span>                         <span class="token comment"># 为重量添加单位</span>

<span class="token comment"># 计算液体密度</span>
mass <span class="token operator">=</span> <span class="token number">75</span> <span class="token comment"># 单位是 Kg</span>
volume <span class="token operator">=</span> <span class="token number">0.075</span> <span class="token comment"># 单位是 m³</span>
density <span class="token operator">=</span> mass <span class="token operator">/</span> volume <span class="token comment"># 1000 Kg/m³</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h3>
<p>在编程中，我们使用比较运算符来比较两个值。我们检查一个值是否大于或小于或等于另一个值。下表显示了 Python 比较运算符，摘自 <a href="https://www.w3schools.com/python/python_operators.asp" target="_blank" rel="noopener noreferrer">w3shool<ExternalLinkIcon/></a>。</p>
<p><img src="@source/docs/images/comparison_operators.png" alt="Comparison Operators">
<strong>示例：比较运算符</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">)</span>     <span class="token comment"># True, 因为3大于2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">)</span>    <span class="token comment"># True, 因为3大于2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span>     <span class="token comment"># False,  因为3大于2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span>     <span class="token comment"># True, 因为2小于3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">)</span>    <span class="token comment"># True, 因为2小于3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>    <span class="token comment"># False, 因为3不等于2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span>    <span class="token comment"># True, 因为3不等于2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'mango'</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'avocado'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'mango'</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'avocado'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'mango'</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'avocado'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'milk'</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'meat'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'milk'</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'meat'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'tomato'</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'potato'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'python'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'dragon'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># False</span>


<span class="token comment"># 比较得到 True 或者 False</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'True == True: '</span><span class="token punctuation">,</span> <span class="token boolean">True</span> <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'True == False: '</span><span class="token punctuation">,</span> <span class="token boolean">True</span> <span class="token operator">==</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'False == False:'</span><span class="token punctuation">,</span> <span class="token boolean">False</span> <span class="token operator">==</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上述比较运算符之外，Python 还使用：</p>
<ul>
<li><em>is</em>: 如果变量相等，返回 True(x is y)</li>
<li><em>is not</em>: 如果变量不相等，返回 True(x is not y)</li>
<li><em>in</em>: 如果列表包含某变量，返回 True(x in y)</li>
<li><em>not in</em>: 如果列表不包含某变量(x in y)</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'1 is 1'</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">is</span> <span class="token number">1</span><span class="token punctuation">)</span>                   <span class="token comment"># True - 因为值相等</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'1 is not 2'</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token number">2</span><span class="token punctuation">)</span>           <span class="token comment"># True - 因为值不相等</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A in Asabeneh'</span><span class="token punctuation">,</span> <span class="token string">'A'</span> <span class="token keyword">in</span> <span class="token string">'Asabeneh'</span><span class="token punctuation">)</span> <span class="token comment"># True - 字符串中含有元素 A</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'B in Asabeneh'</span><span class="token punctuation">,</span> <span class="token string">'B'</span> <span class="token keyword">in</span> <span class="token string">'Asabeneh'</span><span class="token punctuation">)</span> <span class="token comment"># False - 没有大写字母 B</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'coding'</span> <span class="token keyword">in</span> <span class="token string">'coding for all'</span><span class="token punctuation">)</span> <span class="token comment"># True - 因为 coding 都在 'coding for all' 中</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'a in an:'</span><span class="token punctuation">,</span> <span class="token string">'a'</span> <span class="token keyword">in</span> <span class="token string">'an'</span><span class="token punctuation">)</span>      <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'4 is 2 ** 2:'</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token keyword">is</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span>   <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3>
<p>不像其他的编程语言，Python 使用关键字 <em>and</em>、<em>or</em> 和 <em>not</em> 作为逻辑运算符。逻辑运算符用于组合条件语句：</p>
<p><img src="@source/docs/images/logical_operators.png" alt="Logical Operators"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">></span> <span class="token number">2</span> <span class="token keyword">and</span> <span class="token number">4</span> <span class="token operator">></span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment"># True - 因为两个语句都是 True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">></span> <span class="token number">2</span> <span class="token keyword">and</span> <span class="token number">4</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment"># False - 因为其中一个语句是 False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token keyword">and</span> <span class="token number">4</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment"># False - 因为两个语句都是 False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'True and True: '</span><span class="token punctuation">,</span> <span class="token boolean">True</span> <span class="token keyword">and</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">></span> <span class="token number">2</span> <span class="token keyword">or</span> <span class="token number">4</span> <span class="token operator">></span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># True - 因为两个语句都是 True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">></span> <span class="token number">2</span> <span class="token keyword">or</span> <span class="token number">4</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># True - 因为其中一个语句是 True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token keyword">or</span> <span class="token number">4</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># False - 因为两个语句都是 False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'True or False:'</span><span class="token punctuation">,</span> <span class="token boolean">True</span> <span class="token keyword">or</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token number">3</span> <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">)</span>     <span class="token comment"># False - 因为 3 > 2 是 True,  not True 得到 False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token boolean">True</span><span class="token punctuation">)</span>      <span class="token comment"># False - not 运算符把 True 改为 False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token boolean">False</span><span class="token punctuation">)</span>     <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token keyword">not</span> <span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token keyword">not</span> <span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token comment"># False</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌕 精力充沛！你刚刚完成了第 3 天的挑战，在通往伟大的道路上又前进了三步。现在做一些练习来锻练你的大脑和肌肉。</p>
<h2 id="💻-练习-第三天" tabindex="-1"><a class="header-anchor" href="#💻-练习-第三天" aria-hidden="true">#</a> 💻 练习 - 第三天</h2>
<ol>
<li>声明一个值是你年龄的整型变量</li>
<li>声明一个值是你身高的浮点型变量</li>
<li>声明一个值是复数变量</li>
<li>编写一个脚本，提示用户输入三角形的底和高，并计算这个三角形的面积（面积 = 0.5 x b x h）。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>    输入底<span class="token punctuation">:</span> <span class="token number">20</span>
    输入高<span class="token punctuation">:</span> <span class="token number">10</span>
    三角形的面积是 <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>编写一个脚本，提示用户输入三角形的边 a、边 b 和边 c。计算三角形的周长（周长 = a + b + c）。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>    输入边 a<span class="token punctuation">:</span> <span class="token number">5</span>
    输入边 b<span class="token punctuation">:</span> <span class="token number">4</span>
    输入边 c<span class="token punctuation">:</span> <span class="token number">3</span>
    三角形的周长是 <span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>提示用户输入矩形的长度和宽度。计算其面积（面积 = 长 x 宽）和周长（周长 = 2 x (长 + 宽)）</li>
<li>提示用户输入圆的半径。计算面积（面积 = pi x r x r）和周长（周长 = 2 x pi x r），其中 pi = 3.14。</li>
<li>计算 y = 2x -2 的斜率、x 截距和 y 截距</li>
<li>斜率是 (m = y2-y1/x2-x1)。找到点 (2, 2) 和点 (6,10) 之间的斜率和<a href="https://en.wikipedia.org/wiki/Euclidean_distance#:~:text=In%20mathematics%2C%20the%20Euclidean%20distance,being%20called%20the%20Pythagorean%20distance." target="_blank" rel="noopener noreferrer">欧几里得距离<ExternalLinkIcon/></a>。</li>
<li>比较练习 8 和练习 9 中的斜率。</li>
<li>计算 y 的值（y = x^2 + 6x + 9）。尝试使用不同的 x 值，并找出 y 何时为 0。</li>
<li>求出 'python' 和 'dragon' 的长度，并进行一个假的比较语句。</li>
<li>使用 <em>and</em> 运算符检查 'python' 和 'dragon' 中是否都有 'on'。</li>
<li><em>I hope this course is not full of jargon</em>。使用 <em>in</em> 运算符检查句子中是否有 <em>jargon</em>。</li>
<li>'dragon' 和 'python' 中都没有 'on'。</li>
<li>找到文本 <em>python</em> 的长度，并将该值转换为浮点数，然后将其转换为字符串。</li>
<li>偶数可以被 2 整除，余数为零。如何使用 Python 检查一个数字是偶数还是奇数？</li>
<li>检查 7 除以 3 的Floor除法是否等于 2.7 的整数转换值。</li>
<li>检查 '10' 的类型是否等于 10 的类型。</li>
<li>检查 int('9.8') 是否等于 10。</li>
<li>编写一个脚本，提示用户输入工时和时薪。计算用户的工资。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>输入工时<span class="token punctuation">:</span> <span class="token number">40</span>
输入时薪<span class="token punctuation">:</span> <span class="token number">28</span>
你每周的薪资是 <span class="token number">1120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="22">
<li>编写一个脚本，提示用户输入年数。计算一个人可以活多少秒。假设一个人可以活一百年</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>输入你已经活了多少年<span class="token punctuation">:</span> <span class="token number">100</span>
你已经活了 <span class="token number">3153600000</span> 秒<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="23">
<li>编写一个 Python 脚本，显示以下表格</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token number">1</span> <span class="token number">1</span> <span class="token number">1</span> <span class="token number">1</span> <span class="token number">1</span>
<span class="token number">2</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">8</span>
<span class="token number">3</span> <span class="token number">1</span> <span class="token number">3</span> <span class="token number">9</span> <span class="token number">27</span>
<span class="token number">4</span> <span class="token number">1</span> <span class="token number">4</span> <span class="token number">16</span> <span class="token number">64</span>
<span class="token number">5</span> <span class="token number">1</span> <span class="token number">5</span> <span class="token number">25</span> <span class="token number">125</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🎉 恭喜 ! 🎉</p>
<p><RouterLink to="/docs/Python/02_variables_builtin_functions.html">&lt;&lt; 第二天</RouterLink> | <RouterLink to="/docs/Python/04_strings.html">第四天 &gt;&gt;</RouterLink></p>
</div></template>


