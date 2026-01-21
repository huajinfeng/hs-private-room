<template><div><div align="center">
  <h1> 30 天 Python 挑战: 第 11 天 - 函数</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>
<p><sub>作者:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> 第二版: 2021 年 7 月</small>
</sub></p>
</div>
<p><RouterLink to="/docs/Python/10_loops.html">&lt;&lt; 第 10 天</RouterLink> | <RouterLink to="/docs/Python/12_modules.html">第 12 天 &gt;&gt;</RouterLink></p>
<p><img src="@source/docs/images/30DaysOfPython_banner3@2x.png" alt="30DaysOfPython"></p>
<ul>
<li><a href="#-day-11">📘 第 11 天</a>
<ul>
<li><a href="#functions">函数</a>
<ul>
<li><a href="#defining-a-function">定义函数</a></li>
<li><a href="#declaring-and-calling-a-function">声明和调用函数</a></li>
<li><a href="#function-without-parameters">无参数的函数</a></li>
<li><a href="#function-returning-a-value---part-1">返回值的函数 - 第 1 部分</a></li>
<li><a href="#function-with-parameters">有参数的函数</a></li>
<li><a href="#passing-arguments-with-key-and-value">使用键值对传递参数</a></li>
<li><a href="#function-returning-a-value---part-2">返回值的函数 - 第 2 部分</a></li>
<li><a href="#function-with-default-parameters">带默认参数的函数</a></li>
<li><a href="#arbitrary-number-of-arguments">不定数量的参数</a></li>
<li><a href="#default-and-arbitrary-number-of-parameters-in-functions">函数中的默认和不定数量的参数</a></li>
<li><a href="#function-as-a-parameter-of-another-function">作为另一个函数参数的函数</a></li>
</ul>
</li>
<li><a href="#-exercises-day-11">💻 练习: 第 11 天</a>
<ul>
<li><a href="#exercises-level-1">练习: Level 1</a></li>
<li><a href="#exercises-level-2">练习: Level 2</a></li>
<li><a href="#exercises-level-3">练习: Level 3</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="📘-第-11-天" tabindex="-1"><a class="header-anchor" href="#📘-第-11-天" aria-hidden="true">#</a> 📘 第 11 天</h1>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<p>到目前为止，我们已经学习了很多内置的 Python 函数。在这一节中，我们将重点关注自定义函数。什么是函数？在开始创建函数之前，让我们先了解一下什么是函数以及为什么需要它们。</p>
<h3 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数" aria-hidden="true">#</a> 定义函数</h3>
<p>函数是一块可重复使用的代码块或编程语句，用于执行某些任务。要定义或声明一个函数，Python 提供了 <em>def</em> 关键字。下面是定义函数的语法。只有在调用或触发函数时，这段函数代码才会执行。</p>
<h3 id="声明和调用函数" tabindex="-1"><a class="header-anchor" href="#声明和调用函数" aria-hidden="true">#</a> 声明和调用函数</h3>
<p>当我们创建一个函数时，我们称其为声明一个函数。当我们开始使用它时，我们称其为调用或触发一个函数。函数可以带参数也可以不带参数。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token comment"># 声明一个函数</span>
<span class="token keyword">def</span> <span class="token function">function_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    codes
    codes
<span class="token comment"># 调用一个函数</span>
function_name<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无参数的函数" tabindex="-1"><a class="header-anchor" href="#无参数的函数" aria-hidden="true">#</a> 无参数的函数</h3>
<p>函数可以在没有参数的情况下声明。</p>
<p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">generate_full_name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    first_name <span class="token operator">=</span> <span class="token string">'Asabeneh'</span>
    last_name <span class="token operator">=</span> <span class="token string">'Yetayeh'</span>
    space <span class="token operator">=</span> <span class="token string">' '</span>
    full_name <span class="token operator">=</span> first_name <span class="token operator">+</span> space <span class="token operator">+</span> last_name
    <span class="token keyword">print</span><span class="token punctuation">(</span>full_name<span class="token punctuation">)</span>
generate_full_name <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 调用一个函数</span>

<span class="token keyword">def</span> <span class="token function">add_two_numbers</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    num_one <span class="token operator">=</span> <span class="token number">2</span>
    num_two <span class="token operator">=</span> <span class="token number">3</span>
    total <span class="token operator">=</span> num_one <span class="token operator">+</span> num_two
    <span class="token keyword">print</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span>
add_two_numbers<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回值的函数-第-1-部分" tabindex="-1"><a class="header-anchor" href="#返回值的函数-第-1-部分" aria-hidden="true">#</a> 返回值的函数 - 第 1 部分</h3>
<p>函数也可以返回值，如果一个函数没有 return 语句，那么函数的返回值为 None。让我们使用 return 重写上述函数。从现在开始，当我们调用函数并打印时，我们会得到一个值。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">generate_full_name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    first_name <span class="token operator">=</span> <span class="token string">'Asabeneh'</span>
    last_name <span class="token operator">=</span> <span class="token string">'Yetayeh'</span>
    space <span class="token operator">=</span> <span class="token string">' '</span>
    full_name <span class="token operator">=</span> first_name <span class="token operator">+</span> space <span class="token operator">+</span> last_name
    <span class="token keyword">return</span> full_name
<span class="token keyword">print</span><span class="token punctuation">(</span>generate_full_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">add_two_numbers</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    num_one <span class="token operator">=</span> <span class="token number">2</span>
    num_two <span class="token operator">=</span> <span class="token number">3</span>
    total <span class="token operator">=</span> num_one <span class="token operator">+</span> num_two
    <span class="token keyword">return</span> total
<span class="token keyword">print</span><span class="token punctuation">(</span>add_two_numbers<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有参数的函数" tabindex="-1"><a class="header-anchor" href="#有参数的函数" aria-hidden="true">#</a> 有参数的函数</h3>
<p>在一个函数中，我们可以传递不同的数据类型（数字、字符串、布尔值、列表、元组、字典或集合）作为参数。</p>
<ul>
<li>单个参数：如果我们的函数需要一个参数，我们应该用一个实参调用它。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>  <span class="token comment"># 语法</span>
  <span class="token comment"># 声明一个函数</span>
  <span class="token keyword">def</span> <span class="token function">function_name</span><span class="token punctuation">(</span>parameter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    codes
    codes
  <span class="token comment"># 调用函数</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>function_name<span class="token punctuation">(</span>argument<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">greetings</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    message <span class="token operator">=</span> name <span class="token operator">+</span> <span class="token string">', welcome to Python for Everyone!'</span>
    <span class="token keyword">return</span> message

<span class="token keyword">print</span><span class="token punctuation">(</span>greetings<span class="token punctuation">(</span><span class="token string">'Asabeneh'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">add_ten</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ten <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">return</span> num <span class="token operator">+</span> ten
<span class="token keyword">print</span><span class="token punctuation">(</span>add_ten<span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">square_number</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> x
<span class="token keyword">print</span><span class="token punctuation">(</span>square_number<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">area_of_circle</span> <span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">:</span>
    PI <span class="token operator">=</span> <span class="token number">3.14</span>
    area <span class="token operator">=</span> PI <span class="token operator">*</span> r <span class="token operator">**</span> <span class="token number">2</span>
    <span class="token keyword">return</span> area
<span class="token keyword">print</span><span class="token punctuation">(</span>area_of_circle<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">sum_of_numbers</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    total <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        total<span class="token operator">+=</span>i
    <span class="token keyword">print</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sum_of_numbers<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 55</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sum_of_numbers<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 5050</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>两个参数：一个函数可以没有参数，也可以有一个或多个参数。如果我们的函数需要两个参数，我们应该用两个实参调用它。让我们看看一个带有两个参数的函数：</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>  <span class="token comment"># 语法</span>
  <span class="token comment"># 声明一个函数</span>
  <span class="token keyword">def</span> <span class="token function">function_name</span><span class="token punctuation">(</span>para1<span class="token punctuation">,</span> para2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    codes
    codes
  <span class="token comment"># 调用函数</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>function_name<span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">generate_full_name</span> <span class="token punctuation">(</span>first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    space <span class="token operator">=</span> <span class="token string">' '</span>
    full_name <span class="token operator">=</span> first_name <span class="token operator">+</span> space <span class="token operator">+</span> last_name
    <span class="token keyword">return</span> full_name
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Full Name: '</span><span class="token punctuation">,</span> generate_full_name<span class="token punctuation">(</span><span class="token string">'Asabeneh'</span><span class="token punctuation">,</span><span class="token string">'Yetayeh'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">sum_two_numbers</span> <span class="token punctuation">(</span>num_one<span class="token punctuation">,</span> num_two<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">sum</span> <span class="token operator">=</span> num_one <span class="token operator">+</span> num_two
    <span class="token keyword">return</span> <span class="token builtin">sum</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Sum of two numbers: '</span><span class="token punctuation">,</span> sum_two_numbers<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">calculate_age</span> <span class="token punctuation">(</span>current_year<span class="token punctuation">,</span> birth_year<span class="token punctuation">)</span><span class="token punctuation">:</span>
    age <span class="token operator">=</span> current_year <span class="token operator">-</span> birth_year
    <span class="token keyword">return</span> age<span class="token punctuation">;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Age: '</span><span class="token punctuation">,</span> calculate_age<span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">1819</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">weight_of_object</span> <span class="token punctuation">(</span>mass<span class="token punctuation">,</span> gravity<span class="token punctuation">)</span><span class="token punctuation">:</span>
    weight <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>mass <span class="token operator">*</span> gravity<span class="token punctuation">)</span><span class="token operator">+</span> <span class="token string">' N'</span> <span class="token comment"># 值需要先转换为字符串</span>
    <span class="token keyword">return</span> weight
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Weight of an object in Newtons: '</span><span class="token punctuation">,</span> weight_of_object<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">9.81</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用键值对传递参数" tabindex="-1"><a class="header-anchor" href="#使用键值对传递参数" aria-hidden="true">#</a> 使用键值对传递参数</h3>
<p>如果我们使用键值对传递参数，参数的顺序就无关紧要了。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token comment"># 声明一个函数</span>
<span class="token keyword">def</span> <span class="token function">function_name</span><span class="token punctuation">(</span>para1<span class="token punctuation">,</span> para2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    codes
    codes
<span class="token comment"># 调用函数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>function_name<span class="token punctuation">(</span>para1 <span class="token operator">=</span> <span class="token string">'John'</span><span class="token punctuation">,</span> para2 <span class="token operator">=</span> <span class="token string">'Doe'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 参数的顺序在这里无关紧要</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">print_fullname</span><span class="token punctuation">(</span>firstname<span class="token punctuation">,</span> lastname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    space <span class="token operator">=</span> <span class="token string">' '</span>
    full_name <span class="token operator">=</span> firstname  <span class="token operator">+</span> space <span class="token operator">+</span> lastname
    <span class="token keyword">print</span><span class="token punctuation">(</span>full_name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>print_fullname<span class="token punctuation">(</span>firstname <span class="token operator">=</span> <span class="token string">'Asabeneh'</span><span class="token punctuation">,</span> lastname <span class="token operator">=</span> <span class="token string">'Yetayeh'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">add_two_numbers</span> <span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    total <span class="token operator">=</span> num1 <span class="token operator">+</span> num2
    <span class="token keyword">print</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>add_two_numbers<span class="token punctuation">(</span>num2 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> num1 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 顺序无关紧要</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回值的函数-第-2-部分" tabindex="-1"><a class="header-anchor" href="#返回值的函数-第-2-部分" aria-hidden="true">#</a> 返回值的函数 - 第 2 部分</h3>
<p>如果我们不在函数中返回一个值，那么我们的函数默认返回 <em>None</em>。要用函数返回一个值，我们使用关键字 <em>return</em>，后面跟上我们要返回的变量。我们可以从一个函数返回任何类型的数据。</p>
<ul>
<li>返回字符串:
<strong>示例:</strong></li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">print_name</span><span class="token punctuation">(</span>firstname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> firstname
print_name<span class="token punctuation">(</span><span class="token string">'Asabeneh'</span><span class="token punctuation">)</span> <span class="token comment"># Asabeneh</span>

<span class="token keyword">def</span> <span class="token function">print_full_name</span><span class="token punctuation">(</span>firstname<span class="token punctuation">,</span> lastname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    space <span class="token operator">=</span> <span class="token string">' '</span>
    full_name <span class="token operator">=</span> firstname  <span class="token operator">+</span> space <span class="token operator">+</span> lastname
    <span class="token keyword">return</span> full_name
print_full_name<span class="token punctuation">(</span>firstname<span class="token operator">=</span><span class="token string">'Asabeneh'</span><span class="token punctuation">,</span> lastname<span class="token operator">=</span><span class="token string">'Yetayeh'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>返回数字:</li>
</ul>
<p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add_two_numbers</span> <span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    total <span class="token operator">=</span> num1 <span class="token operator">+</span> num2
    <span class="token keyword">return</span> total
<span class="token keyword">print</span><span class="token punctuation">(</span>add_two_numbers<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">calculate_age</span> <span class="token punctuation">(</span>current_year<span class="token punctuation">,</span> birth_year<span class="token punctuation">)</span><span class="token punctuation">:</span>
    age <span class="token operator">=</span> current_year <span class="token operator">-</span> birth_year
    <span class="token keyword">return</span> age<span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Age: '</span><span class="token punctuation">,</span> calculate_age<span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">1819</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>返回布尔值:
<strong>示例:</strong></li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">is_even</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'even'</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>    <span class="token comment"># return 语句会停止函数的进一步执行，类似于 break</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>is_even<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>is_even<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>返回列表:
<strong>示例:</strong></li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">find_even_numbers</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    evens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            evens<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token keyword">return</span> evens
<span class="token keyword">print</span><span class="token punctuation">(</span>find_even_numbers<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带默认参数的函数" tabindex="-1"><a class="header-anchor" href="#带默认参数的函数" aria-hidden="true">#</a> 带默认参数的函数</h3>
<p>有时我们在调用函数时会传递默认值给参数。如果我们在调用函数时没有传递实参，参数的默认值将会被使用。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token comment"># 声明一个函数</span>
<span class="token keyword">def</span> <span class="token function">function_name</span><span class="token punctuation">(</span>param <span class="token operator">=</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    codes
    codes
<span class="token comment"># 调用函数</span>
function_name<span class="token punctuation">(</span><span class="token punctuation">)</span>
function_name<span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">greetings</span> <span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">'Peter'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    message <span class="token operator">=</span> name <span class="token operator">+</span> <span class="token string">', welcome to Python for Everyone!'</span>
    <span class="token keyword">return</span> message
<span class="token keyword">print</span><span class="token punctuation">(</span>greetings<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>greetings<span class="token punctuation">(</span><span class="token string">'Asabeneh'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">generate_full_name</span> <span class="token punctuation">(</span>first_name <span class="token operator">=</span> <span class="token string">'Asabeneh'</span><span class="token punctuation">,</span> last_name <span class="token operator">=</span> <span class="token string">'Yetayeh'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    space <span class="token operator">=</span> <span class="token string">' '</span>
    full_name <span class="token operator">=</span> first_name <span class="token operator">+</span> space <span class="token operator">+</span> last_name
    <span class="token keyword">return</span> full_name

<span class="token keyword">print</span><span class="token punctuation">(</span>generate_full_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>generate_full_name<span class="token punctuation">(</span><span class="token string">'David'</span><span class="token punctuation">,</span><span class="token string">'Smith'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">calculate_age</span> <span class="token punctuation">(</span>birth_year<span class="token punctuation">,</span>current_year <span class="token operator">=</span> <span class="token number">2021</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    age <span class="token operator">=</span> current_year <span class="token operator">-</span> birth_year
    <span class="token keyword">return</span> age<span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Age: '</span><span class="token punctuation">,</span> calculate_age<span class="token punctuation">(</span><span class="token number">1821</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">weight_of_object</span> <span class="token punctuation">(</span>mass<span class="token punctuation">,</span> gravity <span class="token operator">=</span> <span class="token number">9.81</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    weight <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>mass <span class="token operator">*</span> gravity<span class="token punctuation">)</span><span class="token operator">+</span> <span class="token string">' N'</span> <span class="token comment"># 值需要先转换为字符串</span>
    <span class="token keyword">return</span> weight
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Weight of an object in Newtons: '</span><span class="token punctuation">,</span> weight_of_object<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 9.81 - 地球表面的平均重力</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Weight of an object in Newtons: '</span><span class="token punctuation">,</span> weight_of_object<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1.62</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 月球表面的重力</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不定数量的参数" tabindex="-1"><a class="header-anchor" href="#不定数量的参数" aria-hidden="true">#</a> 不定数量的参数</h3>
<p>如果我们不知道传递给函数的参数数量，可以通过在参数名前加上 * 来创建一个可以接受不定数量参数的函数。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token comment"># 声明一个函数</span>
<span class="token keyword">def</span> <span class="token function">function_name</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    codes
    codes
<span class="token comment"># 调用函数</span>
function_name<span class="token punctuation">(</span>param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> param3<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sum_all_nums</span><span class="token punctuation">(</span><span class="token operator">*</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
    total <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> num <span class="token keyword">in</span> nums<span class="token punctuation">:</span>
        total <span class="token operator">+=</span> num     <span class="token comment"># 相当于 total = total + num</span>
    <span class="token keyword">return</span> total
<span class="token keyword">print</span><span class="token punctuation">(</span>sum_all_nums<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数中的默认和不定数量的参数" tabindex="-1"><a class="header-anchor" href="#函数中的默认和不定数量的参数" aria-hidden="true">#</a> 函数中的默认和不定数量的参数</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">generate_groups</span> <span class="token punctuation">(</span>team<span class="token punctuation">,</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>team<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> args<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>generate_groups<span class="token punctuation">(</span><span class="token string">'Team-1'</span><span class="token punctuation">,</span><span class="token string">'Asabeneh'</span><span class="token punctuation">,</span><span class="token string">'Brook'</span><span class="token punctuation">,</span><span class="token string">'David'</span><span class="token punctuation">,</span><span class="token string">'Eyob'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作为另一个函数参数的函数" tabindex="-1"><a class="header-anchor" href="#作为另一个函数参数的函数" aria-hidden="true">#</a> 作为另一个函数参数的函数</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 你可以将函数作为参数传递</span>
<span class="token keyword">def</span> <span class="token function">square_number</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> n
<span class="token keyword">def</span> <span class="token function">do_something</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> f<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>do_something<span class="token punctuation">(</span>square_number<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 27</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌕 你已经完成了很多。继续加油！你已经完成了第 11 天的挑战，你在走向成功的道路上已经迈出了 11 步。现在做一些锻炼脑力和肌肉的练习。</p>
<h2 id="见证" tabindex="-1"><a class="header-anchor" href="#见证" aria-hidden="true">#</a> 见证</h2>
<p>现在是时候表达你对作者和 30DaysOfPython 的看法了。你可以在这个<a href="https://testimonify.herokuapp.com/" target="_blank" rel="noopener noreferrer">链接<ExternalLinkIcon/></a>留下你的见证。</p>
<h2 id="💻-练习-第-11-天" tabindex="-1"><a class="header-anchor" href="#💻-练习-第-11-天" aria-hidden="true">#</a> 💻 练习: 第 11 天</h2>
<h3 id="练习-level-1" tabindex="-1"><a class="header-anchor" href="#练习-level-1" aria-hidden="true">#</a> 练习: Level 1</h3>
<ol>
<li>声明一个函数 <em>add_two_numbers</em>。它接受两个参数并返回它们的和。</li>
<li>圆的面积计算公式为：area = π x r x r。编写一个函数计算 <em>area_of_circle</em>。</li>
<li>编写一个名为 add_all_nums 的函数，它接受不定数量的参数并求和所有参数。检查所有列表项是否都是数字类型。如果不是，给予合理的反馈。</li>
<li>摄氏温度（°C）可以使用以下公式转换为华氏温度（°F）：°F = (°C x 9/5) + 32。编写一个函数将 °C 转换为 °F，<em>convert_celsius_to_fahrenheit</em>。</li>
<li>编写一个名为 check-season 的函数，它接受一个月份作为参数并返回季节：秋季、冬季、春季或夏季。</li>
<li>编写一个名为 calculate_slope 的函数，它返回线性方程的斜率。</li>
<li>二次方程按以下公式计算：ax² + bx + c = 0。编写一个函数计算二次方程的解集，<em>solve_quadratic_eqn</em>。</li>
<li>声明一个名为 print_list 的函数。它接受一个列表作为参数，并打印列表的每个元素。</li>
<li>声明一个名为 reverse_list 的函数。它接受一个数组作为参数，并返回数组的反转（使用循环）。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>reverse_list<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [5, 4, 3, 2, 1]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>reverse_list1<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token string">"B"</span><span class="token punctuation">,</span> <span class="token string">"C"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># ["C", "B", "A"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10">
<li>声明一个名为 capitalize_list_items 的函数。它接受一个列表作为参数，并返回一个大写的列表项。</li>
<li>声明一个名为 add_item 的函数。它接受一个列表和一个项作为参数。它返回在末尾添加项的列表。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>food_staff <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Potato'</span><span class="token punctuation">,</span> <span class="token string">'Tomato'</span><span class="token punctuation">,</span> <span class="token string">'Mango'</span><span class="token punctuation">,</span> <span class="token string">'Milk'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>add_item<span class="token punctuation">(</span>food_staff<span class="token punctuation">,</span> <span class="token string">'Meat'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># ['Potato', 'Tomato', 'Mango', 'Milk','Meat'];</span>
numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>add_item<span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12">
<li>声明一个名为 remove_item 的函数。它接受一个列表和一个项作为参数。它返回移除该项后的列表。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>food_staff <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Potato'</span><span class="token punctuation">,</span> <span class="token string">'Tomato'</span><span class="token punctuation">,</span> <span class="token string">'Mango'</span><span class="token punctuation">,</span> <span class="token string">'Milk'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>remove_item<span class="token punctuation">(</span>food_staff<span class="token punctuation">,</span> <span class="token string">'Mango'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># ['Potato', 'Tomato', 'Milk'];</span>
numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>remove_item<span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># [2, 7, 9]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13">
<li>声明一个名为 sum_of_numbers 的函数。它接受一个数字参数并将范围内的所有数字相加。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>sum_of_numbers<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 15</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sum_all_numbers<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 55</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sum_all_numbers<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 5050</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="14">
<li>声明一个名为 sum_of_odds 的函数。它接受一个数字参数并将范围内的所有奇数相加。</li>
<li>声明一个名为 sum_of_even 的函数。它接受一个数字参数并将范围内的所有偶数相加。</li>
</ol>
<h3 id="练习-level-2" tabindex="-1"><a class="header-anchor" href="#练习-level-2" aria-hidden="true">#</a> 练习: Level 2</h3>
<ol>
<li>声明一个名为 evens_and_odds 的函数。它接受一个正整数作为参数并计算该数内偶数和奇数的数量。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>    <span class="token keyword">print</span><span class="token punctuation">(</span>evens_and_odds<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 偶数的数量是 50。</span>
    <span class="token comment"># 奇数的数量是 51。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>调用你的函数 factorial，它接受一个整数作为参数并返回该数的阶乘。</li>
<li>调用你的函数 <em>is_empty</em>，它接受一个参数并检查它是否为空。</li>
<li>编写不同的函数，它们接受列表。它们应该计算平均值、计算中位数、计算众数、计算范围、计算方差、计算标准差。</li>
</ol>
<h3 id="练习-level-3" tabindex="-1"><a class="header-anchor" href="#练习-level-3" aria-hidden="true">#</a> 练习: Level 3</h3>
<ol>
<li>编写一个名为 is_prime 的函数，检查一个数是否是质数。</li>
<li>编写一个函数检查列表中的所有项是否都是唯一的。</li>
<li>编写一个函数检查列表中的所有项是否都是相同的数据类型。</li>
<li>编写一个函数检查提供的变量是否是一个有效的 python 变量。</li>
<li>访问数据文件并访问 countries-data.py 文件。</li>
</ol>
<ul>
<li>创建一个名为 the most_spoken_languages 的函数。它返回世界上使用最多的 10 或 20 种语言，按降序排列。</li>
<li>创建一个名为 the most_populated_countries 的函数。它返回世界上人口最多的 10 或 20 个国家，按降序排列。</li>
</ul>
<p>🎉 恭喜! 🎉</p>
<p><RouterLink to="/docs/Python/10_loops.html">&lt;&lt; 第 10 天</RouterLink> | <RouterLink to="/docs/Python/12_modules.html">第 12 天 &gt;&gt;</RouterLink></p>
</div></template>


