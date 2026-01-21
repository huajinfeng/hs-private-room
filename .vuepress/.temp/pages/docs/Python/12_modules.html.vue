<template><div><div align="center">
  <h1> 30 天 Python ：第 12 天 - 模块 </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>
<p><sub>作者:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small>第二版: 2021 年 7 月</small>
</sub></p>
</div>
</div>
<p><RouterLink to="/docs/Python/11_functions.html">&lt;&lt; 第 11 天</RouterLink> | <RouterLink to="/docs/Python/13_list_comprehension.html">第 13 天 &gt;&gt;</RouterLink></p>
<p><img src="@source/docs/images/30DaysOfPython_banner3@2x.png" alt="30DaysOfPython"></p>
<ul>
<li><a href="#-%E7%AC%AC12%E5%A4%A9">📘 第 12 天</a>
<ul>
<li><a href="#%E6%A8%A1%E5%9D%97">模块</a>
<ul>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%A8%A1%E5%9D%97">什么是模块</a></li>
<li><a href="#%E5%88%9B%E5%BB%BA%E6%A8%A1%E5%9D%97">创建模块</a></li>
<li><a href="#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97">导入模块</a></li>
<li><a href="#%E4%BB%8E%E6%A8%A1%E5%9D%97%E4%B8%AD%E5%AF%BC%E5%85%A5%E5%87%BD%E6%95%B0">从模块中导入函数</a></li>
<li><a href="#%E4%BB%8E%E6%A8%A1%E5%9D%97%E4%B8%AD%E5%AF%BC%E5%85%A5%E5%87%BD%E6%95%B0%E5%B9%B6%E9%87%8D%E5%91%BD%E5%90%8D">从模块中导入函数并重命名</a></li>
</ul>
</li>
<li><a href="#%E5%AF%BC%E5%85%A5%E5%86%85%E7%BD%AE%E6%A8%A1%E5%9D%97">导入内置模块</a>
<ul>
<li><a href="#os-%E6%A8%A1%E5%9D%97">OS 模块</a></li>
<li><a href="#sys-%E6%A8%A1%E5%9D%97">Sys 模块</a></li>
<li><a href="#%E7%BB%9F%E8%AE%A1%E6%A8%A1%E5%9D%97">统计模块</a></li>
<li><a href="#%E6%95%B0%E5%AD%A6%E6%A8%A1%E5%9D%97">数学模块</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A8%A1%E5%9D%97">字符串模块</a></li>
<li><a href="#%E9%9A%8F%E6%9C%BA%E6%A8%A1%E5%9D%97">随机模块</a></li>
</ul>
</li>
<li><a href="#-%E7%BB%83%E4%B9%A0-%E7%AC%AC12%E5%A4%A9">💻 练习：第 12 天</a>
<ul>
<li><a href="#%E7%BB%83%E4%B9%A0-%E7%BA%A7%E5%88%AB-1">练习：级别 1</a></li>
<li><a href="#%E7%BB%83%E4%B9%A0-%E7%BA%A7%E5%88%AB-2">练习：级别 2</a></li>
<li><a href="#%E7%BB%83%E4%B9%A0-%E7%BA%A7%E5%88%AB-3">练习：级别 3</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="📘-第-12-天" tabindex="-1"><a class="header-anchor" href="#📘-第-12-天" aria-hidden="true">#</a> 📘 第 12 天</h1>
<h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2>
<h3 id="什么是模块" tabindex="-1"><a class="header-anchor" href="#什么是模块" aria-hidden="true">#</a> 什么是模块</h3>
<p>模块是包含一组代码或一组函数的文件，可以包含在一个应用程序中。一个模块可以是包含单个变量、函数或大规模代码库的文件。</p>
<h3 id="创建模块" tabindex="-1"><a class="header-anchor" href="#创建模块" aria-hidden="true">#</a> 创建模块</h3>
<p>要创建模块，我们在一个 Python 脚本中编写代码并保存为 .py 文件。 在项目文件夹中创建一个名为 mymodule.py 的文件。让我们在此文件中编写一些代码。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># mymodule.py 文件</span>
<span class="token keyword">def</span> <span class="token function">generate_full_name</span><span class="token punctuation">(</span>firstname<span class="token punctuation">,</span> lastname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> firstname <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> lastname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目目录中创建 main.py 文件并导入 mymodule.py 文件。</p>
<h3 id="导入模块" tabindex="-1"><a class="header-anchor" href="#导入模块" aria-hidden="true">#</a> 导入模块</h3>
<p>要导入文件，我们使用 <em>import</em> 关键字和文件名。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># main.py 文件</span>
<span class="token keyword">import</span> mymodule
<span class="token keyword">print</span><span class="token punctuation">(</span>mymodule<span class="token punctuation">.</span>generate_full_name<span class="token punctuation">(</span><span class="token string">'Asabeneh'</span><span class="token punctuation">,</span> <span class="token string">'Yetayeh'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># Asabeneh Yetayeh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从模块中导入函数" tabindex="-1"><a class="header-anchor" href="#从模块中导入函数" aria-hidden="true">#</a> 从模块中导入函数</h3>
<p>我们可以在一个文件中有很多函数，并且我们可以分别导入所有函数。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># main.py 文件</span>
<span class="token keyword">from</span> mymodule <span class="token keyword">import</span> generate_full_name<span class="token punctuation">,</span> sum_two_nums<span class="token punctuation">,</span> person<span class="token punctuation">,</span> gravity
<span class="token keyword">print</span><span class="token punctuation">(</span>generate_full_name<span class="token punctuation">(</span><span class="token string">'Asabneh'</span><span class="token punctuation">,</span><span class="token string">'Yetayeh'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sum_two_nums<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
mass <span class="token operator">=</span> <span class="token number">100</span>
weight <span class="token operator">=</span> mass <span class="token operator">*</span> gravity
<span class="token keyword">print</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person<span class="token punctuation">[</span><span class="token string">'firstname'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从模块中导入函数并重命名" tabindex="-1"><a class="header-anchor" href="#从模块中导入函数并重命名" aria-hidden="true">#</a> 从模块中导入函数并重命名</h3>
<p>在导入过程中，我们可以重命名模块名称。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># main.py 文件</span>
<span class="token keyword">from</span> mymodule <span class="token keyword">import</span> generate_full_name <span class="token keyword">as</span> fullname<span class="token punctuation">,</span> sum_two_nums <span class="token keyword">as</span> total<span class="token punctuation">,</span> person <span class="token keyword">as</span> p<span class="token punctuation">,</span> gravity <span class="token keyword">as</span> g
<span class="token keyword">print</span><span class="token punctuation">(</span>fullname<span class="token punctuation">(</span><span class="token string">'Asabneh'</span><span class="token punctuation">,</span><span class="token string">'Yetayeh'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>total<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
mass <span class="token operator">=</span> <span class="token number">100</span>
weight <span class="token operator">=</span> mass <span class="token operator">*</span> g
<span class="token keyword">print</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span><span class="token string">'firstname'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入内置模块" tabindex="-1"><a class="header-anchor" href="#导入内置模块" aria-hidden="true">#</a> 导入内置模块</h2>
<p>像其他编程语言一样，我们也可以通过使用关键字 <em>import</em> 导入文件/函数来导入模块。让我们导入我们大多数时候会使用的常见模块。一些常见的内置模块：<em>math</em>、<em>datetime</em>、<em>os</em>、<em>sys</em>、<em>random</em>、<em>statistics</em>、<em>collections</em>、<em>json</em>、<em>re</em></p>
<h3 id="os-模块" tabindex="-1"><a class="header-anchor" href="#os-模块" aria-hidden="true">#</a> OS 模块</h3>
<p>使用 Python <em>os</em> 模块可以自动执行许多操作系统任务。Python 中的 OS 模块提供了创建、更改当前工作目录和删除目录（文件夹）、获取其内容、更改和识别当前目录的函数。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入模块</span>
<span class="token keyword">import</span> os
<span class="token comment"># 创建目录</span>
os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">'directory_name'</span><span class="token punctuation">)</span>
<span class="token comment"># 更改当前目录</span>
os<span class="token punctuation">.</span>chdir<span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token comment"># 获取当前工作目录</span>
os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 删除目录</span>
os<span class="token punctuation">.</span>rmdir<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sys-模块" tabindex="-1"><a class="header-anchor" href="#sys-模块" aria-hidden="true">#</a> Sys 模块</h3>
<p>sys 模块提供用于操作 Python 运行时环境不同部分的函数和变量。函数 sys.argv 返回传递给 Python 脚本的命令行参数列表。此列表中索引 0 处的项始终是脚本的名称，索引 1 处是从命令行传递的参数。</p>
<p>示例 script.py 文件：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token comment">#print(sys.argv[0], argv[1],sys.argv[2])  # 这一行会打印出来：文件名 argument1 argument2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Welcome {}. Enjoy  {} challenge!'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在要查看这个脚本的工作效果，我在命令行中写：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python script.py Asabeneh 30DaysOfPython
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Welcome Asabeneh. Enjoy  30DayOfPython challenge<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一些有用的 sys 命令：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 退出 sys</span>
sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 知道最大整数变量</span>
sys<span class="token punctuation">.</span>maxsize
<span class="token comment"># 知道环境路径</span>
sys<span class="token punctuation">.</span>path
<span class="token comment"># 知道使用的 Python 版本</span>
sys<span class="token punctuation">.</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统计模块" tabindex="-1"><a class="header-anchor" href="#统计模块" aria-hidden="true">#</a> 统计模块</h3>
<p>统计模块提供用于数值数据的数学统计的函数。这个模块中定义的流行统计函数：<em>mean</em>、<em>median</em>、<em>mode</em>、<em>stdev</em> 等。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> statistics <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token comment"># 导入所有统计模块</span>
ages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>mean<span class="token punctuation">(</span>ages<span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment"># ~22.9</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>median<span class="token punctuation">(</span>ages<span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># 23</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>mode<span class="token punctuation">(</span>ages<span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment"># 20</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>stdev<span class="token punctuation">(</span>ages<span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># ~2.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数学模块" tabindex="-1"><a class="header-anchor" href="#数学模块" aria-hidden="true">#</a> 数学模块</h3>
<p>包含许多数学运算和常数的模块。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> math
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>pi<span class="token punctuation">)</span>           <span class="token comment"># 3.141592653589793, pi 常数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># 1.4142135623730951, 平方根</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token builtin">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># 8.0, 指数函数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>floor<span class="token punctuation">(</span><span class="token number">9.81</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 9, 向下取整</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>ceil<span class="token punctuation">(</span><span class="token number">9.81</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># 10, 向上取整</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>log10<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># 2, 以 10 为底的对数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们已经导入了包含大量函数的 <em>math</em> 模块，可以帮助我们进行数学计算。要检查模块中包含哪些函数，我们可以使用 <em>help(math)</em> 或 <em>dir(math)</em>。这将显示模块中的可用函数。如果我们只想从模块中导入特定的函数，我们可以这样导入：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> math <span class="token keyword">import</span> pi
<span class="token keyword">print</span><span class="token punctuation">(</span>pi<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以一次导入多个函数</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> math <span class="token keyword">import</span> pi<span class="token punctuation">,</span> sqrt<span class="token punctuation">,</span> <span class="token builtin">pow</span><span class="token punctuation">,</span> floor<span class="token punctuation">,</span> ceil<span class="token punctuation">,</span> log10
<span class="token keyword">print</span><span class="token punctuation">(</span>pi<span class="token punctuation">)</span>                 <span class="token comment"># 3.141592653589793</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sqrt<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>            <span class="token comment"># 1.4142135623730951</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment"># 8.0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>floor<span class="token punctuation">(</span><span class="token number">9.81</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment"># 9</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ceil<span class="token punctuation">(</span><span class="token number">9.81</span><span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment"># 10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>log10<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果我们想要导入数学模块中的所有函数，可以使用 * .</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> math <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>pi<span class="token punctuation">)</span>                  <span class="token comment"># 3.141592653589793, pi 常数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sqrt<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>             <span class="token comment"># 1.4142135623730951, 平方根</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>           <span class="token comment"># 8.0, 指数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>floor<span class="token punctuation">(</span><span class="token number">9.81</span><span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment"># 9, 向下取整</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ceil<span class="token punctuation">(</span><span class="token number">9.81</span><span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment"># 10, 向上取整</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>log10<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们导入时，我们也可以重命名函数名称。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> math <span class="token keyword">import</span> pi <span class="token keyword">as</span>  PI
<span class="token keyword">print</span><span class="token punctuation">(</span>PI<span class="token punctuation">)</span> <span class="token comment"># 3.141592653589793</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串模块" tabindex="-1"><a class="header-anchor" href="#字符串模块" aria-hidden="true">#</a> 字符串模块</h3>
<p>字符串模块是一个很有用的模块。下面的例子展示了字符串模块的一些用法。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> string
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>ascii_letters<span class="token punctuation">)</span> <span class="token comment"># abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>digits<span class="token punctuation">)</span>        <span class="token comment"># 0123456789</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>punctuation<span class="token punctuation">)</span>   <span class="token comment"># !"#$%&amp;'()*+,-./:;&lt;=>?@[\]^_`{|}~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="随机模块" tabindex="-1"><a class="header-anchor" href="#随机模块" aria-hidden="true">#</a> 随机模块</h3>
<p>现在你已经熟悉了导入模块。让我们再进行一次导入以熟悉它。让我们导入 <em>random</em> 模块，它会给我们一个 0 到 0.9999 之间的随机数。<em>random</em> 模块有很多函数，但在本节中，我们将只使用 <em>random</em> 和 <em>randint</em>。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> random <span class="token keyword">import</span> random<span class="token punctuation">,</span> randint
<span class="token keyword">print</span><span class="token punctuation">(</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># 它不需要任何参数；它返回一个介于 0 和 0.9999 之间的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>randint<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 它返回一个介于 [5, 20] 之间的随机整数（含边界）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌕 你走得很远了。继续努力！你刚刚完成第 12 天的挑战，现在你已经在通往伟大的路上迈出了 12 步。现在为你的大脑和肌肉做一些练习。</p>
<h2 id="💻-练习-第-12-天" tabindex="-1"><a class="header-anchor" href="#💻-练习-第-12-天" aria-hidden="true">#</a> 💻 练习：第 12 天</h2>
<h3 id="练习-级别-1" tabindex="-1"><a class="header-anchor" href="#练习-级别-1" aria-hidden="true">#</a> 练习：级别 1</h3>
<ol>
<li>编写一个生成六位数/字符 random_user_id 的函数。<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>  <span class="token keyword">print</span><span class="token punctuation">(</span>random_user_id<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token string">'1ee33d'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>修改上一个任务。声明一个名为 user_id_gen_by_user 的函数。它不接受任何参数，但接受两个输入。一个输入是字符的数量，另一个输入是应生成的 ID 数量。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>user_id_gen_by_user<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 用户输入：5 5</span>
<span class="token comment">#输出：</span>
<span class="token comment">#kcsy2</span>
<span class="token comment">#SMFYb</span>
<span class="token comment">#bWmeq</span>
<span class="token comment">#ZXOYh</span>
<span class="token comment">#2Rgxf</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>user_id_gen_by_user<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 16 5</span>
<span class="token comment">#1GCSgPLMaBAVQZ26</span>
<span class="token comment">#YD7eFwNQKNs7qXaT</span>
<span class="token comment">#ycArC5yrRupyG00S</span>
<span class="token comment">#UbGxOFI7UXSWAyKN</span>
<span class="token comment">#dIV0SSUTgAdKwStr</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>编写一个名为 rgb_color_gen 的函数。它将生成 RGB 颜色（每个值范围从 0 到 255）。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>rgb_color_gen<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># rgb(125,244,255) - 输出应该是这种形式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-级别-2" tabindex="-1"><a class="header-anchor" href="#练习-级别-2" aria-hidden="true">#</a> 练习：级别 2</h3>
<ol>
<li>编写一个函数 list_of_hexa_colors，它返回一个数组中的任意数量的十六进制颜色（六个十六进制数写在 # 后面。十六进制数字系统由 16 个符号组成，0-9 和 前 6 个字母 a-f。查看任务 6 的输出示例）。</li>
<li>编写一个函数 list_of_rgb_colors，它返回一个数组中的任意数量的 RGB 颜色。</li>
<li>编写一个函数 generate_colors，它可以生成任意数量的十六进制或 RGB 颜色。</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>   generate_colors<span class="token punctuation">(</span><span class="token string">'hexa'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment"># ['#a3e12f','#03ed55','#eb3d2b']</span>
   generate_colors<span class="token punctuation">(</span><span class="token string">'hexa'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># ['#b334ef']</span>
   generate_colors<span class="token punctuation">(</span><span class="token string">'rgb'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># ['rgb(5, 55, 175','rgb(50, 105, 100','rgb(15, 26, 80']</span>
   generate_colors<span class="token punctuation">(</span><span class="token string">'rgb'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># ['rgb(33,79, 176)']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-级别-3" tabindex="-1"><a class="header-anchor" href="#练习-级别-3" aria-hidden="true">#</a> 练习：级别 3</h3>
<ol>
<li>调用你的函数 shuffle_list，它接受一个列表作为参数并返回一个打乱的列表。</li>
<li>编写一个函数，它在 0-9 的范围内返回七个随机数的数组。所有数字必须是唯一的。</li>
</ol>
<p>🎉 恭喜！ 🎉</p>
<p><RouterLink to="/docs/Python/11_functions.html">&lt;&lt; 第 11 天</RouterLink> | <RouterLink to="/docs/Python/13_list_comprehension.html">第 13 天 &gt;&gt;</RouterLink></p>
</div></template>


