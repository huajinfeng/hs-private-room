<template><div><div align="center">
  <h1> 30 天 Python：第六天 - Tuples</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>
<p><sub>Author:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> 第二版：2021 年 7 月</small>
</sub></p>
</div>
<p><RouterLink to="/docs/Python/05_lists.html">&lt;&lt; 第五天</RouterLink> | <RouterLink to="/docs/Python/07_sets.html">第七天 &gt;&gt;</RouterLink></p>
<p><img src="@source/docs/images/30DaysOfPython_banner3@2x.png" alt="30DaysOfPython"></p>
<ul>
<li><a href="#%E7%AC%AC%E5%85%AD%E5%A4%A9">第六天:</a>
<ul>
<li><a href="#%E5%85%83%E7%BB%84">元组</a>
<ul>
<li><a href="#%E5%A6%82%E4%BD%95%E5%88%9B%E5%BB%BA%E5%85%83%E7%BB%84">如何创建元组</a></li>
<li><a href="#%E5%85%83%E7%BB%84%E9%95%BF%E5%BA%A6">元组长度</a></li>
<li><a href="#%E8%8E%B7%E5%8F%96%E5%85%83%E7%BB%84%E9%A1%B9">获取元组项</a></li>
<li><a href="#%E5%85%83%E7%BB%84%E5%88%87%E7%89%87">元组切片</a></li>
<li><a href="#%E5%B0%86%E5%85%83%E7%BB%84%E6%9B%B4%E6%94%B9%E4%B8%BA%E5%88%97%E8%A1%A8">将元组更改为列表</a></li>
<li><a href="#%E6%A3%80%E7%B4%A2%E5%85%83%E7%BB%84%E4%B8%AD%E7%9A%84%E9%A1%B9">检索元组中的项</a></li>
<li><a href="#%E8%BF%9E%E6%8E%A5%E5%85%83%E7%BB%84">连接元组</a></li>
<li><a href="#%E5%88%A0%E9%99%A4%E5%85%83%E7%BB%84">删除元组</a></li>
</ul>
</li>
<li><a href="#-%E7%BB%83%E4%B9%A0---%E7%AC%AC%E5%85%AD%E5%A4%A9">💻 练习 - 第六天</a>
<ul>
<li><a href="#%E7%BB%83%E4%B9%A0-1%E7%BA%A7">练习： 1级</a></li>
<li><a href="#%E7%BB%83%E4%B9%A0-2%E7%BA%A7">练习： 2级</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="第六天" tabindex="-1"><a class="header-anchor" href="#第六天" aria-hidden="true">#</a> 第六天:</h1>
<h2 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h2>
<p>元组是有序且不可变的不同数据类型的集合。一旦创建了元组，我们就无法更改其值。我们不能在元组中使用 add、insert、remove 方法，因为它是不可修改的（不可变的）。与列表不同，元组的方法很少。与元组相关的方法有：</p>
<ul>
<li>tuple()：创建一个空元组</li>
<li>count()：计算元组中指定项的数量</li>
<li>index()：查找元组中指定项的索引</li>
<li>
<ul>
<li>运算符：连接两个或多个元组并创建一个新元组</li>
</ul>
</li>
</ul>
<h3 id="如何创建元组" tabindex="-1"><a class="header-anchor" href="#如何创建元组" aria-hidden="true">#</a> 如何创建元组</h3>
<ul>
<li>
<p>创建一个空元组</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
empty_tuple <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 或使用元组构造函数</span>
empty_tuple <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建一个具有初始值的元组</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
tpl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span><span class="token string">'item3'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="元组长度" tabindex="-1"><a class="header-anchor" href="#元组长度" aria-hidden="true">#</a> 元组长度</h3>
<p>我们使用 <em>len()</em> 方法来获取元组的长度。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
tpl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">)</span>
<span class="token builtin">len</span><span class="token punctuation">(</span>tpl<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取元组项" tabindex="-1"><a class="header-anchor" href="#获取元组项" aria-hidden="true">#</a> 获取元组项</h3>
<ul>
<li>
<p>正索引
与列表数据类型类似，我们使用正索引或负索引来访问元组项。
<img src="@source/docs/images/tuples_index.png" alt="Accessing tuple items"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
tpl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">)</span>
first_item <span class="token operator">=</span> tpl<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
second_item <span class="token operator">=</span> tpl<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">)</span>
first_fruit <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
second_fruit <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
last_index <span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
last_fruit <span class="token operator">=</span> fruits<span class="token punctuation">[</span>las_index<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>负索引
负索引是从末尾开始的，-1 表示最后一项，-2 表示倒数第二项，列表/元组长度的负数表示第一项。
<img src="@source/docs/images/tuple_negative_indexing.png" alt="Tuple Negative indexing"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
tpl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span><span class="token string">'item4'</span><span class="token punctuation">)</span>
first_item <span class="token operator">=</span> tpl<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span>
second_item <span class="token operator">=</span> tpl<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">)</span>
first_fruit <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span>
second_fruit <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span>
last_fruit <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="元组切片" tabindex="-1"><a class="header-anchor" href="#元组切片" aria-hidden="true">#</a> 元组切片</h3>
<p>我们可以通过指定开始和结束的索引范围来切出子元组，返回值是一个包含指定项的新元组。</p>
<ul>
<li>
<p>正索引范围</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
tpl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span><span class="token string">'item4'</span><span class="token punctuation">)</span>
all_items <span class="token operator">=</span> tpl<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>         <span class="token comment"># 所有项</span>
all_items <span class="token operator">=</span> tpl<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token punctuation">]</span>         <span class="token comment"># 所有项</span>
middle_two_items <span class="token operator">=</span> tpl<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>  <span class="token comment"># 不包括索引 3 的项</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">)</span>
all_fruits <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>    <span class="token comment"># 所有项</span>
all_fruits<span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token punctuation">]</span>      <span class="token comment"># 所有项</span>
orange_mango <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>  <span class="token comment"># 不包括索引 3 的项</span>
orange_to_the_rest <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>负索引范围</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
tpl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span><span class="token string">'item4'</span><span class="token punctuation">)</span>
all_items <span class="token operator">=</span> tpl<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token punctuation">]</span>         <span class="token comment"># 所有项</span>
middle_two_items <span class="token operator">=</span> tpl<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># 不包括索引 3 的项</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
fruits <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">)</span>
all_fruits <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token punctuation">]</span>    <span class="token comment"># 所有项</span>
orange_mango <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># 不包括索引 3 的项</span>
orange_to_the_rest <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="将元组更改为列表" tabindex="-1"><a class="header-anchor" href="#将元组更改为列表" aria-hidden="true">#</a> 将元组更改为列表</h3>
<p>我们可以将元组更改为列表，将列表更改为元组。如果我们想修改元组，我们应该将其更改为列表。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
tpl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span><span class="token string">'item4'</span><span class="token punctuation">)</span>
lst <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>tpl<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">)</span>
fruits <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>
fruits<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'apple'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>     <span class="token comment"># ['apple', 'orange', 'mango', 'lemon']</span>
fruits <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>     <span class="token comment"># ('apple', 'orange', 'mango', 'lemon')</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检索元组中的项" tabindex="-1"><a class="header-anchor" href="#检索元组中的项" aria-hidden="true">#</a> 检索元组中的项</h3>
<p>我们可以使用 <em>in</em> 检查元组中是否存在某个项，它返回一个布尔值。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
tpl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span><span class="token string">'item4'</span><span class="token punctuation">)</span>
<span class="token string">'item2'</span> <span class="token keyword">in</span> tpl <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'orange'</span> <span class="token keyword">in</span> fruits<span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'apple'</span> <span class="token keyword">in</span> fruits<span class="token punctuation">)</span> <span class="token comment"># False</span>
fruits<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'apple'</span> <span class="token comment"># TypeError: 'tuple' object does not support item assignment</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="连接元组" tabindex="-1"><a class="header-anchor" href="#连接元组" aria-hidden="true">#</a> 连接元组</h3>
<p>我们可以使用 + 运算符连接两个或多个元组</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
tpl1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">)</span>
tpl2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'item4'</span><span class="token punctuation">,</span> <span class="token string">'item5'</span><span class="token punctuation">,</span><span class="token string">'item6'</span><span class="token punctuation">)</span>
tpl3 <span class="token operator">=</span> tpl1 <span class="token operator">+</span> tpl2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">)</span>
vegetables <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'Tomato'</span><span class="token punctuation">,</span> <span class="token string">'Potato'</span><span class="token punctuation">,</span> <span class="token string">'Cabbage'</span><span class="token punctuation">,</span><span class="token string">'Onion'</span><span class="token punctuation">,</span> <span class="token string">'Carrot'</span><span class="token punctuation">)</span>
fruits_and_vegetables <span class="token operator">=</span> fruits <span class="token operator">+</span> vegetables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除元组" tabindex="-1"><a class="header-anchor" href="#删除元组" aria-hidden="true">#</a> 删除元组</h3>
<p>不能删除元组中的单个项，但可以使用 <em>del</em> 删除元组本身。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
tpl1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">)</span>
<span class="token keyword">del</span> tpl1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">)</span>
<span class="token keyword">del</span> fruits
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>🌕 你太勇敢了，你做到了。你刚刚完成了第 6 天的挑战，你已向着伟大的目标迈出了 6 步。现在做一些练习来锻练你的大脑和肌肉。</p>
<h2 id="💻-练习-第六天" tabindex="-1"><a class="header-anchor" href="#💻-练习-第六天" aria-hidden="true">#</a> 💻 练习 - 第六天</h2>
<h3 id="练习-1级" tabindex="-1"><a class="header-anchor" href="#练习-1级" aria-hidden="true">#</a> 练习： 1级</h3>
<ol>
<li>创建一个空元组</li>
<li>创建一个包含你姐妹和兄弟名字的元组（虚构的兄弟姐妹也可以）</li>
<li>连接兄弟姐妹元组并将其分配给 siblings</li>
<li>你有多少兄弟姐妹？</li>
<li>修改兄弟姐妹元组并添加你父母的名字，然后将其分配给 family_members</li>
</ol>
<h3 id="练习-2级" tabindex="-1"><a class="header-anchor" href="#练习-2级" aria-hidden="true">#</a> 练习： 2级</h3>
<ol>
<li>从 family_members 中获取兄弟姐妹和父母</li>
<li>创建 fruits、vegetables 和 animal products 元组。连接三个元组并将其分配给名为 food_stuff_tp 的变量。</li>
<li>将 food_stuff_tp 元组更改为 food_stuff_lt 列表</li>
<li>从 food_stuff_tp 元组或 food_stuff_lt 列表中切出中间项或项。</li>
<li>从 food_staff_lt 列表中切出前三项和最后三项</li>
<li>完全删除 food_staff_tp 元组</li>
<li>检查元组中是否存在项：</li>
</ol>
<ul>
<li>
<p>检查 'Estonia' 是否在 nordic_country 元组中</p>
</li>
<li>
<p>检查 'Iceland' 是否在 nordic_country 元组中</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>nordic_countries <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'Denmark'</span><span class="token punctuation">,</span> <span class="token string">'Finland'</span><span class="token punctuation">,</span><span class="token string">'Iceland'</span><span class="token punctuation">,</span> <span class="token string">'Norway'</span><span class="token punctuation">,</span> <span class="token string">'Sweden'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p><RouterLink to="/docs/Python/05_lists.html">&lt;&lt; 第五天</RouterLink> | <RouterLink to="/docs/Python/07_sets.html">第七天 &gt;&gt;</RouterLink></p>
</div></template>


