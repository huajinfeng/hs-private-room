<template><div><!-- 边栏的标题用 # -->
<h1 id="_01-变量和内置函数" tabindex="-1"><a class="header-anchor" href="#_01-变量和内置函数" aria-hidden="true">#</a> 01 变量和内置函数</h1>
<p><RouterLink to="/docs/Python/2%E3%80%81%E8%BF%90%E7%AE%97%E7%AC%A6.html">下一章 &gt;&gt;</RouterLink></p>
<h2 id="内置函数" tabindex="-1"><a class="header-anchor" href="#内置函数" aria-hidden="true">#</a> 内置函数</h2>
<p>Python 提供了很多内置函数。内置函数是全局可用的，这意味着可以在不导入或配置的情况下使用内置函数。以下是几种最常用的 Python 内置函数：<em>print()</em>, <em>len()</em>, <em>type()</em>, <em>int()</em>, <em>float()</em>, <em>str()</em>, <em>input()</em>, <em>list()</em>, <em>dict()</em>, <em>min()</em>, <em>max()</em>, <em>sum()</em>, <em>sorted()</em>, <em>open()</em>, <em>file()</em>, <em>help()</em>, <em>dir()</em>。在下表中，您将看到从 <a href="https://docs.python.org/3.9/library/functions.html" target="_blank" rel="noopener noreferrer">Python 文档<ExternalLinkIcon/></a>中获取的详尽的 Python 内置函数列表。</p>
<p><img src="@source/docs/pythonImages/builtin-functions.png" alt="Built-in Functions"></p>
<p>如上所示，Python 有保留字。我们不能使用保留字来声明变量或函数。</p>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<p>变量将数据存储在计算机内存中。在许多编程语言中，建议使用助记符变量。助记符变量是一个易于记忆和关联的变量名。变量指的是存储数据的内存地址。</p>
<p>命名变量时，不允许以数字开头、使用特殊字符和连字符。变量可以有一个简短的名称（如 x、y、z），但强烈建议使用更具描述性的名称（对应的英文）。</p>
<p>Python 变量名规则</p>
<ul>
<li>变量名必须以字母或下划线字符开头</li>
<li>变量名不能以数字开头</li>
<li>变量名只能包含字母数字字符和下划线（A-z、0-9 和 _ ）</li>
<li>变量名区分大小写（firstname、Firstname、FirstName 和 FIRSTNAME 是不同的变量）</li>
</ul>
<p>以下是一些有效变量名的示例：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>firstname
lastname
age
country
city
first_name
last_name
capital_city
_if <span class="token comment"># 如果我们想使用保留字作为变量</span>
year_2021
year2021
current_year_2021
birth_year
num1
num2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无效的变量名</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>first<span class="token operator">-</span>name
first@name
first$name
num<span class="token operator">-</span><span class="token number">1</span>
1num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将使用许多 Python 开发人员采用的标准 Python 变量命名样式。Python 开发人员使用蛇形命名法 (snake_case) 变量命名约定。对于包含多个单词的变量，我们在每个单词后使用下划线（例如 first_name、last_name、engine_rotation_speed）。下面的示例是变量的标准命名示例，当变量名称超过一个单词时，需要使用下划线。</p>
<p>当我们将某种数据类型分配给变量时，这称为变量声明。例如，在下面的例子中，我的名字被分配给变量 first_name。等号是赋值运算符。赋值意味着将数据存储在变量中。Python 中的等号与数学中的等号不同。</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># Python 中的变量</span>
first_name <span class="token operator">=</span> <span class="token string">'hua'</span>
last_name <span class="token operator">=</span> <span class="token string">'joffery'</span>
country <span class="token operator">=</span> <span class="token string">'China'</span>
city <span class="token operator">=</span> <span class="token string">'suzhou'</span>
age <span class="token operator">=</span> <span class="token number">13</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span>
is_married <span class="token operator">=</span> <span class="token boolean">False</span>
skills <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'HTML'</span><span class="token punctuation">,</span> <span class="token string">'CSS'</span><span class="token punctuation">,</span> <span class="token string">'JS'</span><span class="token punctuation">,</span> <span class="token string">'Vue'</span><span class="token punctuation">,</span> <span class="token string">'Python'</span><span class="token punctuation">]</span>
person_info <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'first_name'</span><span class="token punctuation">:</span> <span class="token string">'hua'</span><span class="token punctuation">,</span>
    <span class="token string">'last_name'</span><span class="token punctuation">:</span> <span class="token string">'joffery'</span><span class="token punctuation">,</span>
    <span class="token string">'country'</span><span class="token punctuation">:</span> <span class="token string">'China'</span><span class="token punctuation">,</span>
    <span class="token string">'city'</span><span class="token punctuation">:</span> <span class="token string">'SuZhou'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们使用 <em>print()</em> 和 <em>len()</em> 内置函数。打印函数可以接受无限数量的参数。参数是一个值，我们可以将其传递或放在函数括号内，请参见下面的示例。</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Hello, World!'</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">,</span><span class="token string">','</span><span class="token punctuation">,</span> <span class="token string">'World'</span><span class="token punctuation">,</span><span class="token string">'!'</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">'Hello, World!'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 计算字符串 'Hello, World!' 的长度（包含空格和标点）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们打印并算出在上面声明的变量的长度：</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 打印变量的值</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'First name:'</span><span class="token punctuation">,</span> first_name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'First name length:'</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>first_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Last name: '</span><span class="token punctuation">,</span> last_name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Last name length: '</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>last_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Country: '</span><span class="token punctuation">,</span> country<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'City: '</span><span class="token punctuation">,</span> city<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Age: '</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Married: '</span><span class="token punctuation">,</span> is_married<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Skills: '</span><span class="token punctuation">,</span> skills<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Person information: '</span><span class="token punctuation">,</span> person_info<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在一行中声明多个变量" tabindex="-1"><a class="header-anchor" href="#在一行中声明多个变量" aria-hidden="true">#</a> 在一行中声明多个变量</h3>
<p>多个变量也可以在同一行中声明：</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> country<span class="token punctuation">,</span> age<span class="token punctuation">,</span> is_married <span class="token operator">=</span> <span class="token string">'hua'</span><span class="token punctuation">,</span> <span class="token string">'joffery'</span><span class="token punctuation">,</span> <span class="token string">'SuZhou'</span><span class="token punctuation">,</span> <span class="token number">13</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">False</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> country<span class="token punctuation">,</span> age<span class="token punctuation">,</span> is_married<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'First name:'</span><span class="token punctuation">,</span> first_name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Last name: '</span><span class="token punctuation">,</span> last_name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Country: '</span><span class="token punctuation">,</span> country<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Age: '</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Married: '</span><span class="token punctuation">,</span> is_married<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用内置函数 <em>input()</em> 获取用户输入。让我们从用户那里得到的数据并赋值给 first_name 和 age 变量。</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>first_name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">'What is your name: '</span><span class="token punctuation">)</span>
age <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">'How old are you? '</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>first_name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<p>Python 中有多种数据类型。为了识别数据类型，我们使用 <em>type</em> 内置函数。需要熟练掌握不同的数据类型。当涉及到编程时，一切都与数据类型有关。我们将在数据类型各自的章节中做更详细的介绍。</p>
<h2 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换" aria-hidden="true">#</a> 数据类型转换</h2>
<ul>
<li>
<p>检查数据类型：为了检查某些数据/变量的数据类型，我们使用 <em>type</em> 函数</p>
<p><strong>示例：</strong></p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># python 中不同的数据类型</span>
<span class="token comment"># 声明一些有各种数据类型的变量</span>

first_name <span class="token operator">=</span> <span class="token string">'hua'</span>     <span class="token comment"># str</span>
last_name <span class="token operator">=</span> <span class="token string">'joffery'</span>  <span class="token comment"># str</span>
country <span class="token operator">=</span> <span class="token string">'China'</span>      <span class="token comment"># str</span>
city<span class="token operator">=</span> <span class="token string">'SuZhou'</span>         <span class="token comment"># str</span>
age <span class="token operator">=</span> <span class="token number">13</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span>          <span class="token comment"># int</span>

<span class="token comment"># Printing out types</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">'hua'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># str</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>first_name<span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># str</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>             <span class="token comment"># int</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">)</span>           <span class="token comment"># float</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1j</span><span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment"># complex</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>           <span class="token comment"># bool</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># list</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">'name'</span><span class="token punctuation">:</span><span class="token string">'hua'</span><span class="token punctuation">,</span><span class="token string">'age'</span><span class="token punctuation">:</span><span class="token number">13</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'is_married'</span><span class="token punctuation">:</span><span class="token boolean">False</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># dict</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                                              <span class="token comment"># tuple</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                                   <span class="token comment"># zip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>数据类型转换：将一种数据类型转换为另一种数据类型。我们使用 <em>int()</em>、<em>float()</em>、<em>str()</em>、<em>list</em>、<em>set</em>
当我们进行算术运算时，字符串数字应首先转换为 int 或 float，否则将返回错误。如果我们将数字与字符串连接起来，则应首先将数字转换为字符串。我们将在字符串部分讨论连接。</p>
<p><strong>示例：</strong></p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 整型 到 浮点型</span>
num_int <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'num_int'</span><span class="token punctuation">,</span>num_int<span class="token punctuation">)</span>         <span class="token comment"># 10</span>
num_float <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>num_int<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'num_float:'</span><span class="token punctuation">,</span> num_float<span class="token punctuation">)</span>   <span class="token comment"># 10.0</span>

<span class="token comment"># 浮点型 到 整型</span>
gravity <span class="token operator">=</span> <span class="token number">9.81</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>gravity<span class="token punctuation">)</span><span class="token punctuation">)</span>             <span class="token comment"># 9</span>

<span class="token comment"># 整型 到 字符串</span>
num_int <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num_int<span class="token punctuation">)</span>                  <span class="token comment"># 10</span>
num_str <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>num_int<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num_str<span class="token punctuation">)</span>                  <span class="token comment"># '10'</span>

<span class="token comment"># 字符串 到 整型或浮点型</span>
num_str <span class="token operator">=</span> <span class="token string">'10.6'</span>
<span class="token comment"># int() 函数在处理字符串时，该字符串只能包含数字（和正负号）。如果字符串中出现了小数点，int() 会抛出 ValueError。</span>
<span class="token comment"># print('num_int', int(num_str))      # ValueError: invalid literal for int() with base 10: '10.6'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'num_float'</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">(</span>num_str<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 10.6</span>

<span class="token comment"># 字符串 到 列表</span>
first_name <span class="token operator">=</span> <span class="token string">'hua'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>first_name<span class="token punctuation">)</span>               <span class="token comment"># 'hua'</span>
first_name_to_list <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>first_name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>first_name_to_list<span class="token punctuation">)</span>       <span class="token comment"># ['h', 'u', 'a']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h2>
<p>Python 中不同的数字类型</p>
<ul>
<li>Integer：整型数字(负数, 0 以及 正数)
示例：
... -3, -2, -1, 0, 1, 2, 3 ...</li>
<li>Float：浮点数
示例
... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...</li>
<li>Complex：复数
示例
1 + j, 2 + 4j, 1 - 1j</li>
</ul>
</div></template>


