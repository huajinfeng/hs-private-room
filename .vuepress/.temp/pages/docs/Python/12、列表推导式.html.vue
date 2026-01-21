<template><div><h1 id="_12-列表推导式" tabindex="-1"><a class="header-anchor" href="#_12-列表推导式" aria-hidden="true">#</a> 12 列表推导式</h1>
<p>在 Python 中，列表推导式是一种从序列中创建列表的简洁方式。它是创建新列表的简短方法。列表推导式比使用 <em>for</em> 循环处理列表快得多。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> iterable <span class="token keyword">if</span> 表达式<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例子: 1</strong></p>
<p>例如，如果你想将字符串转换为字符列表。你可以使用几种方法。我们来看看其中的一些：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 一种方法</span>
language <span class="token operator">=</span> <span class="token string">'Python'</span>
lst <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span>  <span class="token comment"># 将字符串转换为列表</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># list</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>            <span class="token comment"># ['P', 'y', 't', 'h', 'o', 'n']</span>

<span class="token comment"># 第二种方法: 列表推导式</span>
lst <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> language<span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># list</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>           <span class="token comment"># ['P', 'y', 't', 'h', 'o', 'n']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例子: 2</strong></p>
<p>例如，如果你想生成一个数字列表</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 生成数字</span>
numbers <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment"># 生成从0到10的数字</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>                    <span class="token comment"># [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span>

<span class="token comment"># 也可以在迭代过程中进行数学运算</span>
squares <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token operator">*</span> i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>squares<span class="token punctuation">)</span>                    <span class="token comment"># [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]</span>

<span class="token comment"># 还可以生成元组列表</span>
numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">*</span> i<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>                    <span class="token comment"># [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例子: 3</strong></p>
<p>列表推导式可以与 if 表达式结合使用</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 生成偶数</span>
even_numbers <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">)</span> <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># 生成从0到21的偶数列表</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>even_numbers<span class="token punctuation">)</span>                    <span class="token comment"># [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]</span>

<span class="token comment"># 生成奇数</span>
odd_numbers <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">)</span> <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># 生成从0到21的奇数列表</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>odd_numbers<span class="token punctuation">)</span>                      <span class="token comment"># [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]</span>

<span class="token comment"># 过滤数字：让我们从下面的列表中过滤出正偶数</span>
numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>
positive_even_numbers <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">)</span> <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">and</span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>positive_even_numbers<span class="token punctuation">)</span>           <span class="token comment"># [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]</span>

<span class="token comment"># 扁平化三维数组</span>
list_of_lists <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
flattened_list <span class="token operator">=</span> <span class="token punctuation">[</span>number <span class="token keyword">for</span> row <span class="token keyword">in</span> list_of_lists <span class="token keyword">for</span> number <span class="token keyword">in</span> row<span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>flattened_list<span class="token punctuation">)</span>                  <span class="token comment"># [1, 2, 3, 4, 5, 6, 7, 8, 9]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lambda-函数" tabindex="-1"><a class="header-anchor" href="#lambda-函数" aria-hidden="true">#</a> Lambda 函数</h2>
<p>Lambda 函数是没有名字的小匿名函数。它可以接受任意数量的参数，但只能有一个表达式。Lambda 函数类似于 JavaScript 中的匿名函数。当我们想在另一个函数中编写匿名函数时，需要它。</p>
<h3 id="创建-lambda-函数" tabindex="-1"><a class="header-anchor" href="#创建-lambda-函数" aria-hidden="true">#</a> 创建 Lambda 函数</h3>
<p>要创建一个 lambda 函数，我们使用 <em>lambda</em> 关键字，然后是一个或多个参数，再然后是一个表达式。请参阅下面的语法和示例。Lambda 函数不用 return，但它会隐式地返回表达式。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
x <span class="token operator">=</span> <span class="token keyword">lambda</span> param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> param3<span class="token punctuation">:</span> param1 <span class="token operator">+</span> param2 <span class="token operator">+</span> param3
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> arg3<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 命名函数</span>
<span class="token keyword">def</span> <span class="token function">add_two_nums</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token keyword">print</span><span class="token punctuation">(</span>add_two_nums<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 5</span>
<span class="token comment"># 让我们将上述函数更改为 lambda 函数</span>
add_two_nums <span class="token operator">=</span> <span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> a <span class="token operator">+</span> b
<span class="token keyword">print</span><span class="token punctuation">(</span>add_two_nums<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 5</span>

<span class="token comment"># 自调用 lambda 函数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 5</span>

square <span class="token operator">=</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">**</span> <span class="token number">2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>square<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># 9</span>
cube <span class="token operator">=</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">**</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cube<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># 27</span>

<span class="token comment"># 多个变量</span>
multiple_variable <span class="token operator">=</span> <span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">:</span> a <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">3</span> <span class="token operator">*</span> b <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">*</span> c
<span class="token keyword">print</span><span class="token punctuation">(</span>multiple_variable<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lambda-函数在另一个函数中" tabindex="-1"><a class="header-anchor" href="#lambda-函数在另一个函数中" aria-hidden="true">#</a> Lambda 函数在另一个函数中</h3>
<p>在另一个函数中使用 lambda 函数。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">power</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">lambda</span> n<span class="token punctuation">:</span> x <span class="token operator">**</span> n

cube <span class="token operator">=</span> power<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>   <span class="token comment"># 函数 power 现在需要两个单独的括号中的参数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span>          <span class="token comment"># 8</span>
two_power_of_five <span class="token operator">=</span> power<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>two_power_of_five<span class="token punctuation">)</span>  <span class="token comment"># 32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<h3 id="_1-列表推导式-list-comprehension" tabindex="-1"><a class="header-anchor" href="#_1-列表推导式-list-comprehension" aria-hidden="true">#</a> 1. 列表推导式 (List Comprehension)</h3>
<p>列表推导式提供了一种从旧列表或可迭代对象中创建新列表的极简语法。</p>
<ul>
<li><strong>核心优势</strong>：
<ul>
<li><strong>简洁</strong>：将多行 <code v-pre>for</code> 循环和 <code v-pre>if</code> 判断缩减为一行。</li>
<li><strong>高效</strong>：在底层运行速度通常快于传统的 <code v-pre>for</code> 循环。</li>
</ul>
</li>
<li><strong>语法结构</strong>：<code v-pre>[表达式 for 变量 in 序列 if 条件]</code></li>
<li><strong>应用场景</strong>：
<ul>
<li><strong>简单映射</strong>：如将字符串转为字符列表，或对数字求平方。</li>
<li><strong>过滤数据</strong>：结合 <code v-pre>if</code> 语句筛选偶数、奇数或正数。</li>
<li><strong>嵌套处理</strong>：实现二维/三维数组的“扁平化”（将嵌套列表转化为单层列表）。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_2-lambda-匿名函数" tabindex="-1"><a class="header-anchor" href="#_2-lambda-匿名函数" aria-hidden="true">#</a> 2. Lambda 匿名函数</h3>
<p>Lambda 函数是一种没有函数名、一次性使用的内联函数。</p>
<ul>
<li><strong>核心特征</strong>：
<ul>
<li><strong>无名</strong>：不需要使用 <code v-pre>def</code> 关键字定义。</li>
<li><strong>精简</strong>：只能包含一个表达式，不能有复杂的逻辑块或多行代码。</li>
<li><strong>隐式返回</strong>：不需要写 <code v-pre>return</code>，表达式的结果会自动返回。</li>
</ul>
</li>
<li><strong>语法结构</strong>：<code v-pre>lambda 参数: 表达式</code></li>
<li><strong>应用场景</strong>：
<ul>
<li><strong>即用即弃</strong>：作为临时函数传递给 <code v-pre>map()</code>、<code v-pre>filter()</code> 或 <code v-pre>sort()</code>。</li>
<li><strong>闭包构造</strong>：在另一个函数中返回一个 Lambda 函数，从而动态创建特定功能的函数（如文档中的 <code v-pre>power</code> 示例）。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_3-对比总结" tabindex="-1"><a class="header-anchor" href="#_3-对比总结" aria-hidden="true">#</a> 3. 对比总结</h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>传统方式 (def / for)</strong></th>
<th><strong>高级方式 (lambda / 推导式)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>可读性</strong></td>
<td>适合逻辑复杂、步骤较多的场景</td>
<td>适合简单、逻辑清晰的逻辑</td>
</tr>
<tr>
<td><strong>代码量</strong></td>
<td>较多，通常需要多行</td>
<td>极少，通常只有一行</td>
</tr>
<tr>
<td><strong>复用性</strong></td>
<td>强（定义一次，到处调用）</td>
<td>弱（通常用于局部或临时逻辑）</td>
</tr>
</tbody>
</table>
</div></template>


