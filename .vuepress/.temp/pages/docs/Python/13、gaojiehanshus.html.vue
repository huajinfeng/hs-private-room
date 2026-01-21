<template><div><h1 id="_13-高阶函数" tabindex="-1"><a class="header-anchor" href="#_13-高阶函数" aria-hidden="true">#</a> 13 高阶函数</h1>
<p>在 Python 中，可以对函数执行以下操作：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">代码执行流程：</p><ol>
<li>代码解析</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add_ten</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    ten <span class="token operator">=</span> <span class="token number">10</span>             <span class="token comment"># 外部函数的局部变量</span>
    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> num <span class="token operator">+</span> ten <span class="token comment"># 内部函数引用了外部变量</span>
    <span class="token keyword">return</span> add           <span class="token comment"># 返回内部函数对象本身</span>
closure_result <span class="token operator">=</span> add_ten<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>closure_result<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出 15</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>closure_result<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 输出 20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行步骤拆解" tabindex="-1"><a class="header-anchor" href="#执行步骤拆解" aria-hidden="true">#</a> 执行步骤拆解</h3>
<ol>
<li><strong>调用 <code v-pre>add_ten()</code></strong>：</li>
</ol>
<ul>
<li>在函数内部定义了一个变量 <code v-pre>ten = 10</code>。</li>
<li>定义了一个内部函数 <code v-pre>add(num)</code>。</li>
<li><strong>关键点</strong>：它没有直接运行 <code v-pre>add</code>，而是把整个 <code v-pre>add</code> 函数作为“礼物”<strong>返回</strong>了出去。</li>
</ul>
<ol start="2">
<li><strong>赋值给 <code v-pre>closure_result</code></strong>：</li>
</ol>
<ul>
<li>此时 <code v-pre>closure_result</code> 指向的就是内部的 <code v-pre>add</code> 函数。</li>
<li>即便 <code v-pre>add_ten()</code> 已经运行结束了，<code v-pre>ten = 10</code> 这个变量并没有被销毁，而是被 <code v-pre>add</code> 函数“打包”带走了。</li>
</ul>
<ol start="3">
<li><strong>调用 <code v-pre>closure_result(5)</code></strong>：</li>
</ol>
<ul>
<li>实际上是在运行 <code v-pre>add(5)</code>，它计算 <code v-pre>5 + 10</code>（这个 10 就是当初打包带走的那个值），结果得到 <strong>15</strong>。</li>
</ul>
<h2 id="_2-闭包的三个必要条件" tabindex="-1"><a class="header-anchor" href="#_2-闭包的三个必要条件" aria-hidden="true">#</a> 2. 闭包的三个必要条件</h2>
<ul>
<li><strong>嵌套函数</strong>：必须在一个函数内部定义另一个函数。</li>
<li><strong>引用自由变量</strong>：内部函数必须引用外部函数中的变量（非全局变量）。</li>
<li><strong>返回内部函数</strong>：外部函数必须将内部函数作为返回值。</li>
</ul>
<h2 id="_3-闭包的优势" tabindex="-1"><a class="header-anchor" href="#_3-闭包的优势" aria-hidden="true">#</a> 3. 闭包的优势</h2>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>数据封装</strong></td>
<td>类似于类的私有属性，外界无法直接修改 <code v-pre>ten</code> 的值。</td>
</tr>
<tr>
<td><strong>减少全局变量</strong></td>
<td>避免了污染全局作用域，使代码更模块化。</td>
</tr>
<tr>
<td><strong>状态保持</strong></td>
<td>能够跨调用保持函数的状态。</td>
</tr>
</tbody>
</table>
<h2 id="_4-进阶对比-工厂模式" tabindex="-1"><a class="header-anchor" href="#_4-进阶对比-工厂模式" aria-hidden="true">#</a> 4. 进阶对比：工厂模式</h2>
<p>闭包允许我们根据参数生成特定的函数（即“函数工厂”）：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">make_multiplier</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">multiplier</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> x <span class="token operator">*</span> n
    <span class="token keyword">return</span> multiplier
double <span class="token operator">=</span> make_multiplier<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># 专门翻倍的函数</span>
triple <span class="token operator">=</span> make_multiplier<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment"># 专门三倍的函数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>double<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>triple<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="python-装饰器" tabindex="-1"><a class="header-anchor" href="#python-装饰器" aria-hidden="true">#</a> Python 装饰器</h2>
<p>装饰器是一种设计模式，允许用户在不修改对象结构的情况下为其添加新功能。装饰器通常在你想要装饰的函数定义之前调用。</p>
<h3 id="创建装饰器" tabindex="-1"><a class="header-anchor" href="#创建装饰器" aria-hidden="true">#</a> 创建装饰器</h3>
<p>要创建装饰器函数，我们需要一个带有内部包装器函数的外部函数。
<strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 普通函数</span>
<span class="token keyword">def</span> <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">'Welcome to Python'</span>
<span class="token keyword">def</span> <span class="token function">uppercase_decorator</span><span class="token punctuation">(</span>function<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        func <span class="token operator">=</span> function<span class="token punctuation">(</span><span class="token punctuation">)</span>
        make_uppercase <span class="token operator">=</span> func<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># upper()函数 将字符串转为大写</span>
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
<span class="token decorator annotation punctuation">@uppercase_decorator</span> <span class="token comment">#这一行是语法糖。它的效果等同于：greeting = uppercase_decorator(greeting)</span>
<span class="token keyword">def</span> <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">'Welcome to Python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>greeting<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># WELCOME TO PYTHON</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将多个装饰器应用于单个函数" tabindex="-1"><a class="header-anchor" href="#将多个装饰器应用于单个函数" aria-hidden="true">#</a> 将多个装饰器应用于单个函数</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token triple-quoted-string string">'''这些装饰器函数是高阶函数，接收函数作为参数'''</span>
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
<span class="token comment">#实际的执行逻辑等同于greeting = split_string_decorator(uppercase_decorator(greeting))</span>
<span class="token keyword">def</span> <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">'Welcome to Python'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>greeting<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># ['WELCOME', 'TO', 'PYTHON']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在装饰器函数中接受参数" tabindex="-1"><a class="header-anchor" href="#在装饰器函数中接受参数" aria-hidden="true">#</a> 在装饰器函数中接受参数</h3>
<p>大多数时候我们需要我们的函数接受参数，所以我们可能需要定义一个接受参数的装饰器。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">decorator_with_parameters</span><span class="token punctuation">(</span>function<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper_accepting_parameters</span><span class="token punctuation">(</span>para1<span class="token punctuation">,</span> para2<span class="token punctuation">,</span> para3<span class="token punctuation">)</span><span class="token punctuation">:</span>
        function<span class="token punctuation">(</span>para1<span class="token punctuation">,</span> para2<span class="token punctuation">,</span> para3<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"I live in {}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>para3<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper_accepting_parameters
<span class="token decorator annotation punctuation">@decorator_with_parameters</span> <span class="token comment">#decorator_with_parameters(print_full_name("Asabeneh", "Yetayeh",'Finland'))</span>
<span class="token keyword">def</span> <span class="token function">print_full_name</span><span class="token punctuation">(</span>first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> country<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"I am {} {}. I am learning python."</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>
        first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
print_full_name<span class="token punctuation">(</span><span class="token string">"hua"</span><span class="token punctuation">,</span> <span class="token string">"joffery"</span><span class="token punctuation">,</span><span class="token string">'China'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置高阶函数" tabindex="-1"><a class="header-anchor" href="#内置高阶函数" aria-hidden="true">#</a> 内置高阶函数</h2>
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
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Zhang'</span><span class="token punctuation">,</span> <span class="token string">'Wang'</span><span class="token punctuation">,</span> <span class="token string">'Li'</span><span class="token punctuation">,</span> <span class="token string">'Zhao'</span><span class="token punctuation">]</span>  <span class="token comment"># 可迭代对象</span>
<span class="token keyword">def</span> <span class="token function">change_to_upper</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> name<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>
names_upper_cased <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span>change_to_upper<span class="token punctuation">,</span> names<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>names_upper_cased<span class="token punctuation">)</span><span class="token punctuation">)</span> 

<span class="token comment"># 让我们应用lambda函数</span>
names_upper_cased <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> name<span class="token punctuation">:</span> name<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> names<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>names_upper_cased<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>map 函数实际上是迭代列表。例如，它将名称更改为大写并返回一个新列表。</p>
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
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>even_numbers<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：2</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>  <span class="token comment"># 可迭代对象</span>
<span class="token keyword">def</span> <span class="token function">is_odd</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>
odd_numbers <span class="token operator">=</span> <span class="token builtin">filter</span><span class="token punctuation">(</span>is_odd<span class="token punctuation">,</span> numbers<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>odd_numbers<span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment"># [1, 3, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 过滤长名称</span>
names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Zhang'</span><span class="token punctuation">,</span> <span class="token string">'Wang'</span><span class="token punctuation">,</span> <span class="token string">'Li'</span><span class="token punctuation">,</span> <span class="token string">'Zhao'</span><span class="token punctuation">]</span>  <span class="token comment"># 可迭代对象</span>
<span class="token keyword">def</span> <span class="token function">is_name_long</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">4</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>
long_names <span class="token operator">=</span> <span class="token builtin">filter</span><span class="token punctuation">(</span>is_name_long<span class="token punctuation">,</span> names<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>long_names<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python-reduce-函数" tabindex="-1"><a class="header-anchor" href="#python-reduce-函数" aria-hidden="true">#</a> Python - Reduce 函数</h3>
<p>*reduce()*函数定义在 functools 模块中，我们需要从这个模块中导入它。像 map 和 filter 一样，它接收两个参数，一个函数和一个可迭代对象。然而，它不返回另一个可迭代对象，而是返回一个单一的值。
<strong>示例：1</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numbers_str <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">]</span>  <span class="token comment"># 可迭代对象</span>
<span class="token keyword">def</span> <span class="token function">add_two_nums</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">int</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
total <span class="token operator">=</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span>add_two_nums<span class="token punctuation">,</span> numbers_str<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span>    <span class="token comment"># 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<h3 id="_1-高阶函数的基础" tabindex="-1"><a class="header-anchor" href="#_1-高阶函数的基础" aria-hidden="true">#</a> 1. 高阶函数的基础</h3>
<ul>
<li>
<p><strong>作为参数</strong>：可以将一个函数（如 <code v-pre>sum_numbers</code>）传递给另一个函数。</p>
</li>
<li>
<p><strong>作为返回值</strong>：一个函数可以根据条件动态地返回不同的函数对象（如 <code v-pre>square</code> 或 <code v-pre>cube</code>）。
闭包是指内部函数引用了外部嵌套函数中的变量，即使外部函数已经执行完毕，内部函数依然能“记住”并访问这些变量。</p>
</li>
<li>
<p><strong>核心作用</strong>：数据封装（类似私有变量）和保持函数状态。</p>
</li>
<li>
<p><strong>示例</strong>：<code v-pre>make_multiplier(n)</code> 可以根据参数生成“翻倍函数”或“三倍函数”。</p>
</li>
</ul>
<h3 id="_3-装饰器-decorators" tabindex="-1"><a class="header-anchor" href="#_3-装饰器-decorators" aria-hidden="true">#</a> 3. 装饰器 (Decorators)</h3>
<p>装饰器是闭包的一种高级应用，用于在不修改原函数代码的情况下，动态地为函数增加新功能。</p>
<ul>
<li><strong>语法糖</strong>：使用 <code v-pre>@decorator_name</code> 符号简化调用。</li>
<li><strong>常见用途</strong>：日志记录、性能测试、权限校验、数据处理（如将输出转为大写）。</li>
<li><strong>多层装饰</strong>：可以同时给一个函数添加多个装饰器，执行顺序由内而外。</li>
</ul>
<h3 id="_4-内置高阶函数" tabindex="-1"><a class="header-anchor" href="#_4-内置高阶函数" aria-hidden="true">#</a> 4. 内置高阶函数</h3>
<p>文档列举了三个处理可迭代对象（如列表）的最常用工具：</p>
<table>
<thead>
<tr>
<th><strong>函数</strong></th>
<th><strong>作用</strong></th>
<th><strong>结果</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><code v-pre>map()</code></strong></td>
<td>对序列中的每个元素应用同一个函数。</td>
<td>返回一个处理后的新序列。</td>
</tr>
<tr>
<td><strong><code v-pre>filter()</code></strong></td>
<td>根据函数返回的布尔值（True/False）筛选元素。</td>
<td>返回满足条件的子序列。</td>
</tr>
<tr>
<td><strong><code v-pre>reduce()</code></strong></td>
<td>对序列进行累积计算（需从 <code v-pre>functools</code> 导入）。</td>
<td>返回一个单一的数值。</td>
</tr>
</tbody>
</table>
</div></template>


