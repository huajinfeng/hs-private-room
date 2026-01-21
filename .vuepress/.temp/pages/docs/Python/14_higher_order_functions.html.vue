<template><div><div align="center">
  <h1> 30天Python：第14天 - 高阶函数</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>
<p><sub>作者:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small>第二版：2021 年 7 月</small>
</sub></p>
</div>
<p><RouterLink to="/docs/Python/13_list_comprehension.html">&lt;&lt; 第 13 天</RouterLink> | <RouterLink to="/docs/Python/15_python_type_errors_cn.html">第 15 天 &gt;&gt;</RouterLink></p>
<p><img src="@source/docs/images/30DaysOfPython_banner3@2x.png" alt="30DaysOfPython"></p>
<ul>
<li><a href="#-%E7%AC%AC14%E5%A4%A9">📘 第 14 天</a>
<ul>
<li><a href="#%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0">高阶函数</a>
<ul>
<li><a href="#%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0">函数作为参数</a></li>
<li><a href="#%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E8%BF%94%E5%9B%9E%E5%80%BC">函数作为返回值</a></li>
</ul>
</li>
<li><a href="#python%E9%97%AD%E5%8C%85">Python 闭包</a></li>
<li><a href="#python%E8%A3%85%E9%A5%B0%E5%99%A8">Python 装饰器</a>
<ul>
<li><a href="#%E5%88%9B%E5%BB%BA%E8%A3%85%E9%A5%B0%E5%99%A8">创建装饰器</a></li>
<li><a href="#%E5%B0%86%E5%A4%9A%E4%B8%AA%E8%A3%85%E9%A5%B0%E5%99%A8%E5%BA%94%E7%94%A8%E4%BA%8E%E5%8D%95%E4%B8%AA%E5%87%BD%E6%95%B0">将多个装饰器应用于单个函数</a></li>
<li><a href="#%E5%9C%A8%E8%A3%85%E9%A5%B0%E5%99%A8%E5%87%BD%E6%95%B0%E4%B8%AD%E6%8E%A5%E5%8F%97%E5%8F%82%E6%95%B0">在装饰器函数中接受参数</a></li>
</ul>
</li>
<li><a href="#%E5%86%85%E7%BD%AE%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0">内置高阶函数</a>
<ul>
<li><a href="#python---map%E5%87%BD%E6%95%B0">Python - Map 函数</a></li>
<li><a href="#python---filter%E5%87%BD%E6%95%B0">Python - Filter 函数</a></li>
<li><a href="#python---reduce%E5%87%BD%E6%95%B0">Python - Reduce 函数</a></li>
</ul>
</li>
<li><a href="#-%E7%BB%83%E4%B9%A0-%E7%AC%AC14%E5%A4%A9">💻 练习：第 14 天</a>
<ul>
<li><a href="#%E7%BB%83%E4%B9%A0-%E7%AE%80%E5%8D%95">练习：简单</a></li>
<li><a href="#%E7%BB%83%E4%B9%A0-%E4%B8%AD%E7%AD%89">练习：中等</a></li>
<li><a href="#%E7%BB%83%E4%B9%A0-%E9%AB%98%E7%BA%A7">练习：高级</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="📘-第-14-天" tabindex="-1"><a class="header-anchor" href="#📘-第-14-天" aria-hidden="true">#</a> 📘 第 14 天</h1>
<h2 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h2>
<p>在 Python 中，函数被视为第一类公民，可以对函数执行以下操作：</p>
<ul>
<li>一个函数可以接收一个或多个函数作为参数</li>
<li>一个函数可以作为另一个函数的返回值</li>
<li>一个函数可以被修改</li>
<li>一个函数可以被赋值给变量</li>
</ul>
<p>在本节中，我们将讨论：</p>
<ol>
<li>将函数作为参数传递</li>
<li>将函数作为返回值返回</li>
<li>使用 Python 闭包和装饰器</li>
</ol>
<h3 id="函数作为参数" tabindex="-1"><a class="header-anchor" href="#函数作为参数" aria-hidden="true">#</a> 函数作为参数</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sum_numbers</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 普通函数</span>
    <span class="token keyword">return</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>    <span class="token comment"># 使用内置函数sum的函数</span>

<span class="token keyword">def</span> <span class="token function">higher_order_function</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> lst<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 将函数作为参数</span>
    summation <span class="token operator">=</span> f<span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
    <span class="token keyword">return</span> summation
result <span class="token operator">=</span> higher_order_function<span class="token punctuation">(</span>sum_numbers<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>       <span class="token comment"># 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数作为返回值" tabindex="-1"><a class="header-anchor" href="#函数作为返回值" aria-hidden="true">#</a> 函数作为返回值</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>          <span class="token comment"># 求平方函数</span>
    <span class="token keyword">return</span> x <span class="token operator">**</span> <span class="token number">2</span>

<span class="token keyword">def</span> <span class="token function">cube</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>            <span class="token comment"># 求立方函数</span>
    <span class="token keyword">return</span> x <span class="token operator">**</span> <span class="token number">3</span>

<span class="token keyword">def</span> <span class="token function">absolute</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>        <span class="token comment"># 求绝对值函数</span>
    <span class="token keyword">if</span> x <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> x
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">higher_order_function</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 返回一个函数的高阶函数</span>
    <span class="token keyword">if</span> <span class="token builtin">type</span> <span class="token operator">==</span> <span class="token string">'square'</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> square
    <span class="token keyword">elif</span> <span class="token builtin">type</span> <span class="token operator">==</span> <span class="token string">'cube'</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> cube
    <span class="token keyword">elif</span> <span class="token builtin">type</span> <span class="token operator">==</span> <span class="token string">'absolute'</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> absolute

result <span class="token operator">=</span> higher_order_function<span class="token punctuation">(</span><span class="token string">'square'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment"># 9</span>
result <span class="token operator">=</span> higher_order_function<span class="token punctuation">(</span><span class="token string">'cube'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment"># 27</span>
result <span class="token operator">=</span> higher_order_function<span class="token punctuation">(</span><span class="token string">'absolute'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述示例中可以看到，高阶函数根据传入的参数来返回不同的函数。</p>
<h2 id="python-闭包" tabindex="-1"><a class="header-anchor" href="#python-闭包" aria-hidden="true">#</a> Python 闭包</h2>
<p>Python 允许嵌套函数访问外部封闭函数的作用域。 这称为闭包。 让我们看看闭包在 Python 中的工作原理。在 Python 中，闭包是通过在另一个封装函数内部嵌套函数，然后返回内部函数来创建的。请看下面的例子。</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add_ten</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    ten <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> num <span class="token operator">+</span> ten
    <span class="token keyword">return</span> add

closure_result <span class="token operator">=</span> add_ten<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>closure_result<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 15</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>closure_result<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python-装饰器" tabindex="-1"><a class="header-anchor" href="#python-装饰器" aria-hidden="true">#</a> Python 装饰器</h2>
<p>装饰器是一种设计模式，允许用户在不修改对象结构的情况下为其添加新功能。装饰器通常在你想要装饰的函数定义之前调用。</p>
<h3 id="创建装饰器" tabindex="-1"><a class="header-anchor" href="#创建装饰器" aria-hidden="true">#</a> 创建装饰器</h3>
<p>要创建装饰器函数，我们需要一个带有内部包装器函数的外部函数。</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 普通函数</span>
<span class="token keyword">def</span> <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">'Welcome to Python'</span>
<span class="token keyword">def</span> <span class="token function">uppercase_decorator</span><span class="token punctuation">(</span>function<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        func <span class="token operator">=</span> function<span class="token punctuation">(</span><span class="token punctuation">)</span>
        make_uppercase <span class="token operator">=</span> func<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> make_uppercase
    <span class="token keyword">return</span> wrapper
g <span class="token operator">=</span> uppercase_decorator<span class="token punctuation">(</span>greeting<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>g<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment"># WELCOME TO PYTHON</span>

<span class="token comment"># 使用装饰器实现上面的示例</span>

<span class="token triple-quoted-string string">'''这个装饰器函数是一个高阶函数，接收一个函数作为参数'''</span>
<span class="token keyword">def</span> <span class="token function">uppercase_decorator</span><span class="token punctuation">(</span>function<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        func <span class="token operator">=</span> function<span class="token punctuation">(</span><span class="token punctuation">)</span>
        make_uppercase <span class="token operator">=</span> func<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> make_uppercase
    <span class="token keyword">return</span> wrapper
<span class="token decorator annotation punctuation">@uppercase_decorator</span>
<span class="token keyword">def</span> <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">'Welcome to Python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>greeting<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># WELCOME TO PYTHON</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将多个装饰器应用于单个函数" tabindex="-1"><a class="header-anchor" href="#将多个装饰器应用于单个函数" aria-hidden="true">#</a> 将多个装饰器应用于单个函数</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
<span class="token triple-quoted-string string">'''这些装饰器函数是高阶函数，接收函数作为参数'''</span>

<span class="token comment"># 第一个装饰器</span>
<span class="token keyword">def</span> <span class="token function">uppercase_decorator</span><span class="token punctuation">(</span>function<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        func <span class="token operator">=</span> function<span class="token punctuation">(</span><span class="token punctuation">)</span>
        make_uppercase <span class="token operator">=</span> func<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> make_uppercase
    <span class="token keyword">return</span> wrapper

<span class="token comment"># 第二个装饰器</span>
<span class="token keyword">def</span> <span class="token function">split_string_decorator</span><span class="token punctuation">(</span>function<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        func <span class="token operator">=</span> function<span class="token punctuation">(</span><span class="token punctuation">)</span>
        splitted_string <span class="token operator">=</span> func<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> splitted_string

    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@split_string_decorator</span>
<span class="token decorator annotation punctuation">@uppercase_decorator</span>     <span class="token comment"># 在此情况下，装饰器的顺序很重要 - .upper()函数不适用于列表</span>
<span class="token keyword">def</span> <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">'Welcome to Python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>greeting<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># WELCOME TO PYTHON</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在装饰器函数中接受参数" tabindex="-1"><a class="header-anchor" href="#在装饰器函数中接受参数" aria-hidden="true">#</a> 在装饰器函数中接受参数</h3>
<p>大多数时候我们需要我们的函数接受参数，所以我们可能需要定义一个接受参数的装饰器。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">decorator_with_parameters</span><span class="token punctuation">(</span>function<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper_accepting_parameters</span><span class="token punctuation">(</span>para1<span class="token punctuation">,</span> para2<span class="token punctuation">,</span> para3<span class="token punctuation">)</span><span class="token punctuation">:</span>
        function<span class="token punctuation">(</span>para1<span class="token punctuation">,</span> para2<span class="token punctuation">,</span> para3<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"I live in {}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>para3<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper_accepting_parameters

<span class="token decorator annotation punctuation">@decorator_with_parameters</span>
<span class="token keyword">def</span> <span class="token function">print_full_name</span><span class="token punctuation">(</span>first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> country<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"I am {} {}. I love to teach."</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>
        first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> country<span class="token punctuation">)</span><span class="token punctuation">)</span>

print_full_name<span class="token punctuation">(</span><span class="token string">"Asabeneh"</span><span class="token punctuation">,</span> <span class="token string">"Yetayeh"</span><span class="token punctuation">,</span><span class="token string">'Finland'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置高阶函数" tabindex="-1"><a class="header-anchor" href="#内置高阶函数" aria-hidden="true">#</a> 内置高阶函数</h2>
<p>在本部分中，我们将讨论一些内置的高阶函数，如<em>map()</em>, <em>filter</em>和<em>reduce</em>。
Lambda 函数可以作为参数传递，其最佳使用案例是在地图、过滤和减少等功能中。</p>
<h3 id="python-map-函数" tabindex="-1"><a class="header-anchor" href="#python-map-函数" aria-hidden="true">#</a> Python - Map 函数</h3>
<p>map()函数是一个内置函数，接收一个函数和可迭代对象作为参数。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>    <span class="token comment"># 语法</span>
    <span class="token builtin">map</span><span class="token punctuation">(</span>function<span class="token punctuation">,</span> iterable<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：1</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token comment"># 可迭代对象</span>
<span class="token keyword">def</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">**</span> <span class="token number">2</span>
numbers_squared <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span>square<span class="token punctuation">,</span> numbers<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>numbers_squared<span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># [1, 4, 9, 16, 25]</span>
<span class="token comment"># 让我们应用lambda函数</span>
numbers_squared <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x <span class="token punctuation">:</span> x <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">,</span> numbers<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>numbers_squared<span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># [1, 4, 9, 16, 25]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：2</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numbers_str <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">]</span>  <span class="token comment"># 可迭代对象</span>
numbers_int <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> numbers_str<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>numbers_int<span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># [1, 2, 3, 4, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：3</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Asabeneh'</span><span class="token punctuation">,</span> <span class="token string">'Lidiya'</span><span class="token punctuation">,</span> <span class="token string">'Ermias'</span><span class="token punctuation">,</span> <span class="token string">'Abraham'</span><span class="token punctuation">]</span>  <span class="token comment"># 可迭代对象</span>

<span class="token keyword">def</span> <span class="token function">change_to_upper</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> name<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>

names_upper_cased <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span>change_to_upper<span class="token punctuation">,</span> names<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>names_upper_cased<span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># ['ASABENEH', 'LIDIYA', 'ERMIAS', 'ABRAHAM']</span>

<span class="token comment"># 让我们应用lambda函数</span>
names_upper_cased <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> name<span class="token punctuation">:</span> name<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> names<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>names_upper_cased<span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># ['ASABENEH', 'LIDIYA', 'ERMIAS', 'ABRAHAM']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>map 函数实际上是迭代列表。例如，它将名称更改为大写并返回一个新列表。</p>
<h3 id="python-filter-函数" tabindex="-1"><a class="header-anchor" href="#python-filter-函数" aria-hidden="true">#</a> Python - Filter 函数</h3>
<p>filter()函数调用指定函数，该函数对指定的可迭代对象（列表）中的每个项目返回布尔值。它过滤出满足过滤条件的项目。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>    <span class="token comment"># 语法</span>
    <span class="token builtin">filter</span><span class="token punctuation">(</span>function<span class="token punctuation">,</span> iterable<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：1</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 让我们只过滤偶数</span>
numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>  <span class="token comment"># 可迭代对象</span>

<span class="token keyword">def</span> <span class="token function">is_even</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>

even_numbers <span class="token operator">=</span> <span class="token builtin">filter</span><span class="token punctuation">(</span>is_even<span class="token punctuation">,</span> numbers<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>even_numbers<span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment"># [2, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：2</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>  <span class="token comment"># 可迭代对象</span>

<span class="token keyword">def</span> <span class="token function">is_odd</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>

odd_numbers <span class="token operator">=</span> <span class="token builtin">filter</span><span class="token punctuation">(</span>is_odd<span class="token punctuation">,</span> numbers<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>odd_numbers<span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment"># [1, 3, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 过滤长名称</span>
names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Asabeneh'</span><span class="token punctuation">,</span> <span class="token string">'Lidiya'</span><span class="token punctuation">,</span> <span class="token string">'Ermias'</span><span class="token punctuation">,</span> <span class="token string">'Abraham'</span><span class="token punctuation">]</span>  <span class="token comment"># 可迭代对象</span>
<span class="token keyword">def</span> <span class="token function">is_name_long</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">7</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>

long_names <span class="token operator">=</span> <span class="token builtin">filter</span><span class="token punctuation">(</span>is_name_long<span class="token punctuation">,</span> names<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>long_names<span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment"># ['Asabeneh']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python-reduce-函数" tabindex="-1"><a class="header-anchor" href="#python-reduce-函数" aria-hidden="true">#</a> Python - Reduce 函数</h3>
<p>*reduce()*函数定义在 functools 模块中，我们需要从这个模块中导入它。像 map 和 filter 一样，它接收两个参数，一个函数和一个可迭代对象。然而，它不返回另一个可迭代对象，而是返回一个单一的值。
<strong>示例：1</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numbers_str <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">]</span>  <span class="token comment"># 可迭代对象</span>
<span class="token keyword">def</span> <span class="token function">add_two_nums</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">int</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>

total <span class="token operator">=</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span>add_two_nums<span class="token punctuation">,</span> numbers_str<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span>    <span class="token comment"># 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💻-练习-第-14-天" tabindex="-1"><a class="header-anchor" href="#💻-练习-第-14-天" aria-hidden="true">#</a> 💻 练习：第 14 天</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>countries <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Estonia'</span><span class="token punctuation">,</span> <span class="token string">'Finland'</span><span class="token punctuation">,</span> <span class="token string">'Sweden'</span><span class="token punctuation">,</span> <span class="token string">'Denmark'</span><span class="token punctuation">,</span> <span class="token string">'Norway'</span><span class="token punctuation">,</span> <span class="token string">'Iceland'</span><span class="token punctuation">]</span>
names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Asabeneh'</span><span class="token punctuation">,</span> <span class="token string">'Lidiya'</span><span class="token punctuation">,</span> <span class="token string">'Ermias'</span><span class="token punctuation">,</span> <span class="token string">'Abraham'</span><span class="token punctuation">]</span>
numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-简单" tabindex="-1"><a class="header-anchor" href="#练习-简单" aria-hidden="true">#</a> 练习：简单</h3>
<ol>
<li>解释 map、filter 和 reduce 的区别。</li>
<li>解释高阶函数、闭包和装饰器的区别。</li>
<li>定义调用函数，见示例。</li>
<li>使用 for 循环打印 countries 列表中的每个国家。</li>
<li>使用 for 循环打印 names 列表中的每个名称。</li>
<li>使用 for 循环打印 numbers 列表中的每个数字。</li>
</ol>
<h3 id="练习-中等" tabindex="-1"><a class="header-anchor" href="#练习-中等" aria-hidden="true">#</a> 练习：中等</h3>
<ol>
<li>使用 map 将 countries 列表中的每个国家更改为大写，生成一个新列表。</li>
<li>使用 map 将 numbers 列表中的每个数字更改为平方，生成一个新列表。</li>
<li>使用 map 将 names 列表中的每个名称更改为大写，生成一个新列表。</li>
<li>使用 filter 过滤出包含“land”的国家。</li>
<li>使用 filter 过滤出正好六个字符的国家。</li>
<li>使用 filter 过滤出包含六个字母及以上的国家。</li>
<li>使用 filter 过滤出以'E'开头的国家。</li>
<li>链接两个或多个列表迭代器（例如 arr.map(callback).filter(callback).reduce(callback)）。</li>
<li>声明一个函数 get_string_lists，它接收一个列表作为参数并返回一个仅包含字符串项的列表。</li>
<li>使用 reduce 对 numbers 列表中的所有数字求和。</li>
<li>使用 reduce 将所有国家连接起来，生成句子：Estonia, Finland, Sweden, Denmark, Norway, and Iceland are north European countries。</li>
<li>声明一个函数 categorize_countries，返回一个包含某种通用模式的国家列表（可以在本仓库的 countries.js 文件中找到国家列表，例如 'land', 'ia', 'island', 'stan'）。</li>
<li>创建一个返回字典的函数，其中键表示国家名称的首字母，值表示以该字母开头的国家数。</li>
<li>声明一个 get_first_ten_countries 函数 - 它返回数据文件夹中 countries.js 列表中的前十个国家。</li>
<li>声明一个 get_last_ten_countries 函数 - 它返回国家列表中的最后十个国家。</li>
</ol>
<h3 id="练习-高级" tabindex="-1"><a class="header-anchor" href="#练习-高级" aria-hidden="true">#</a> 练习：高级</h3>
<ol>
<li>使用 countries_data.py (https://github.com/Asabeneh/30-Days-Of-Python/blob/master/data/countries-data.py) 文件，完成以下任务：
<ul>
<li>按国家名称、首都和人口排序国家</li>
<li>按位置排序出前十个最常用语言。</li>
<li>排序出前十个人口最多的国家。</li>
</ul>
</li>
</ol>
<p>🎉 恭喜你！ 🎉</p>
<p><RouterLink to="/docs/Python/13_list_comprehension.html">&lt;&lt; 第 13 天</RouterLink> | <RouterLink to="/docs/Python/15_python_type_errors_cn.html">第 15 天 &gt;&gt;</RouterLink></p>
</div></template>


