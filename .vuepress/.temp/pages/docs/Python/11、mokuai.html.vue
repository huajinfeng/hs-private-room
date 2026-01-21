<template><div><h1 id="_11-模块" tabindex="-1"><a class="header-anchor" href="#_11-模块" aria-hidden="true">#</a> 11 模块</h1>
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
<span class="token keyword">print</span><span class="token punctuation">(</span>generate_full_name<span class="token punctuation">(</span><span class="token string">'hua'</span><span class="token punctuation">,</span><span class="token string">'joffery'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sum_two_nums<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
mass <span class="token operator">=</span> <span class="token number">100</span>
weight <span class="token operator">=</span> mass <span class="token operator">*</span> gravity
<span class="token keyword">print</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person<span class="token punctuation">[</span><span class="token string">'firstname'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从模块中导入函数并重命名" tabindex="-1"><a class="header-anchor" href="#从模块中导入函数并重命名" aria-hidden="true">#</a> 从模块中导入函数并重命名</h3>
<p>在导入过程中，我们可以重命名模块名称。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># main.py 文件</span>
<span class="token keyword">from</span> mymodule <span class="token keyword">import</span> generate_full_name <span class="token keyword">as</span> fullname<span class="token punctuation">,</span> sum_two_nums <span class="token keyword">as</span> total<span class="token punctuation">,</span> person <span class="token keyword">as</span> p<span class="token punctuation">,</span> gravity <span class="token keyword">as</span> g
<span class="token keyword">print</span><span class="token punctuation">(</span>fullname<span class="token punctuation">(</span><span class="token string">'hua'</span><span class="token punctuation">,</span><span class="token string">'joffery'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
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
<p>sys 模块提供用于操作 Python 运行时环境不同部分的函数和变量。函数 sys.argv 返回传递给 Python 脚本的命令行参数列表。此列表中索引 0 处的项始终是脚本的名称，索引 1 处是从命令行传递的参数。
示例 script.py 文件：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token comment">#print(sys.argv[0], argv[1],sys.argv[2])  # 这一行会打印出来：文件名 argument1 argument2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Welcome {}. Enjoy  {} Language!'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在要查看这个脚本的工作效果，我在命令行中写：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python script.py joffery Python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Welcome joffery. Enjoy  Python Language<span class="token operator">!</span>
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
<span class="token keyword">print</span><span class="token punctuation">(</span>mean<span class="token punctuation">(</span>ages<span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment"># 平均值 ~22.9</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>median<span class="token punctuation">(</span>ages<span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># 中位数 23 (将数据按从小到大排序后，位于中间位置的那个数。)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>mode<span class="token punctuation">(</span>ages<span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment"># 众数 20 (数据集中出现次数最多的数值)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>stdev<span class="token punctuation">(</span>ages<span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># 标准差 ~2.3 (标准差越大，表示数据波动越大；标准差越小，表示数据越集中)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果我们想要导入数学模块中的所有函数，可以使用 “ * ” .</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<h3 id="_1-模块的基础操作" tabindex="-1"><a class="header-anchor" href="#_1-模块的基础操作" aria-hidden="true">#</a> 1. 模块的基础操作</h3>
<ul>
<li><strong>本质</strong>：一个以 <code v-pre>.py</code> 结尾的 Python 文件就是一个模块。</li>
<li><strong>导入方式</strong>：
<ul>
<li><code v-pre>import mymodule</code>: 导入整个模块，使用时需加前缀 <code v-pre>mymodule.func()</code>。</li>
<li><code v-pre>from mymodule import func</code>: 直接导入特定函数，使用时无需前缀。</li>
<li><strong>重命名 (<code v-pre>as</code>)</strong>: 为了简化调用或避免命名冲突，可以给模块或函数起别名（如 <code v-pre>import pandas as pd</code>）。</li>
<li><strong>全导入 (<code v-pre>\*</code>)</strong>: 导入模块内所有内容，但需注意可能引发的命名空间污染。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_2-强大的内置模块" tabindex="-1"><a class="header-anchor" href="#_2-强大的内置模块" aria-hidden="true">#</a> 2. 强大的内置模块</h3>
<p>文档重点列举了 Python 标准库中几个极其常用的模块：</p>
<table>
<thead>
<tr>
<th><strong>模块名</strong></th>
<th><strong>核心功能</strong></th>
<th><strong>典型应用</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><code v-pre>os</code></strong></td>
<td>操作系统接口</td>
<td>创建文件夹 (<code v-pre>mkdir</code>)、获取路径 (<code v-pre>getcwd</code>)。</td>
</tr>
<tr>
<td><strong><code v-pre>sys</code></strong></td>
<td>系统相关参数</td>
<td>处理命令行参数 (<code v-pre>sys.argv</code>)、查看环境路径。</td>
</tr>
<tr>
<td><strong><code v-pre>math</code></strong></td>
<td>数学运算</td>
<td>处理 <code v-pre>pi</code>、开平方 (<code v-pre>sqrt</code>)、取整 (<code v-pre>floor/ceil</code>)。</td>
</tr>
<tr>
<td><strong><code v-pre>random</code></strong></td>
<td>随机数生成</td>
<td>生成 0-1 随机浮点数、生成指定范围整数 (<code v-pre>randint</code>)。</td>
</tr>
<tr>
<td><strong><code v-pre>statistics</code></strong></td>
<td>统计分析</td>
<td>计算平均值 (<code v-pre>mean</code>)、中位数、标准差。</td>
</tr>
<tr>
<td><strong><code v-pre>string</code></strong></td>
<td>字符串常量</td>
<td>快速获取字母表、数字集或标点符号集。</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_3-命令行交互-sys-argv" tabindex="-1"><a class="header-anchor" href="#_3-命令行交互-sys-argv" aria-hidden="true">#</a> 3. 命令行交互 (sys.argv)</h2>
<h2 id="文档展示了如何让-python-脚本接收外部参数。通过-sys-argv-你可以从终端-terminal-cmd-向程序传递信息-这使得脚本具有更强的通用性和自动化能力。" tabindex="-1"><a class="header-anchor" href="#文档展示了如何让-python-脚本接收外部参数。通过-sys-argv-你可以从终端-terminal-cmd-向程序传递信息-这使得脚本具有更强的通用性和自动化能力。" aria-hidden="true">#</a> 文档展示了如何让 Python 脚本接收外部参数。通过 <code v-pre>sys.argv</code>，你可以从终端（Terminal/CMD）向程序传递信息，这使得脚本具有更强的通用性和自动化能力。</h2>
<h2 id="_4-探索模块的技巧" tabindex="-1"><a class="header-anchor" href="#_4-探索模块的技巧" aria-hidden="true">#</a> 4. 探索模块的技巧</h2>
<p>当面对一个陌生的模块时，文档提到了两个非常有用的内置函数：</p>
<ul>
<li><strong><code v-pre>dir(module)</code></strong>: 列出模块中定义的所有标识符（变量、函数、类）。</li>
<li><strong><code v-pre>help(module)</code></strong>: 查看模块的详细帮助文档和功能说明。</li>
</ul>
</div></template>


