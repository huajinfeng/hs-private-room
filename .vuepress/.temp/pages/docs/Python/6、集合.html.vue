<template><div><p><RouterLink to="/docs/Python/5%E3%80%81%E5%85%83%E7%BB%84.html">&lt;&lt; 上一章</RouterLink> | <RouterLink to="/docs/Python/7%E3%80%81%E5%AD%97%E5%85%B8.html">下一章 &gt;&gt;</RouterLink></p>
<h1 id="_06-集合" tabindex="-1"><a class="header-anchor" href="#_06-集合" aria-hidden="true">#</a> 06 集合</h1>
<p>集合是项目的集合。集合的数学定义也适用于 Python。集合是无序且未索引的不同元素的集合。在 Python 中，集合用于存储唯一项目，可以在集合之间找到 <em>并集</em>、<em>交集</em>、<em>差集</em>、<em>对称差集</em>、<em>子集</em>、<em>超集</em> 和 <em>不相交集</em>。</p>
<h3 id="创建集合" tabindex="-1"><a class="header-anchor" href="#创建集合" aria-hidden="true">#</a> 创建集合</h3>
<p>我们使用 <em>set()</em> 内置函数。</p>
<ul>
<li>创建空集合</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建一个包含初始项目的集合</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
fruits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取设置的长度" tabindex="-1"><a class="header-anchor" href="#获取设置的长度" aria-hidden="true">#</a> 获取设置的长度</h3>
<p>我们使用**len()**方法来查找集合的长度。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
<span class="token builtin">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">}</span>
<span class="token builtin">len</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问集合中的项目" tabindex="-1"><a class="header-anchor" href="#访问集合中的项目" aria-hidden="true">#</a> 访问集合中的项目</h3>
<p>我们使用循环来访问项目。我们将在循环部分看到这一点。</p>
<h3 id="检查项目" tabindex="-1"><a class="header-anchor" href="#检查项目" aria-hidden="true">#</a> 检查项目</h3>
<p>要检查列表中是否存在某个项目，我们使用 <em>in</em> 成员运算符。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"集合中有item3项吗？"</span><span class="token punctuation">,</span> <span class="token string">'item3'</span> <span class="token keyword">in</span> st<span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'香蕉'</span><span class="token punctuation">,</span> <span class="token string">'橙色'</span><span class="token punctuation">,</span> <span class="token string">'芒果'</span><span class="token punctuation">,</span> <span class="token string">'柠檬'</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'芒果'</span> <span class="token keyword">in</span> fruits <span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="向集合中添加元素" tabindex="-1"><a class="header-anchor" href="#向集合中添加元素" aria-hidden="true">#</a> 向集合中添加元素</h3>
<p>一旦集合创建后，我们不能改变其中的任何元素，但可以添加其他的元素。</p>
<ul>
<li>使用 <em>add()</em> 方法添加单个元素</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
st<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">'item5'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'香蕉'</span><span class="token punctuation">,</span> <span class="token string">'橙色'</span><span class="token punctuation">,</span> <span class="token string">'芒果'</span><span class="token punctuation">,</span> <span class="token string">'柠檬'</span><span class="token punctuation">}</span>
fruits<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">'苹果'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <em>update()</em> 方法添加多个元素
<em>update()</em> 方法允许向集合中添加多个元素。<em>update()</em> 接收一个列表作为参数。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
st<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'item5'</span><span class="token punctuation">,</span><span class="token string">'item6'</span><span class="token punctuation">,</span><span class="token string">'item7'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">}</span>
vegetables <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'tomato'</span><span class="token punctuation">,</span> <span class="token string">'potato'</span><span class="token punctuation">,</span> <span class="token string">'cabbage'</span><span class="token punctuation">,</span><span class="token string">'onion'</span><span class="token punctuation">,</span> <span class="token string">'carrot'</span><span class="token punctuation">]</span> <span class="token comment">#('tomato', 'potato', 'cabbage','onion', 'carrot')也可以</span>
fruits<span class="token punctuation">.</span>update<span class="token punctuation">(</span>vegetables<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从集合中移除元素" tabindex="-1"><a class="header-anchor" href="#从集合中移除元素" aria-hidden="true">#</a> 从集合中移除元素</h3>
<p>我们可以使用 <em>remove()</em> 方法从集合中移除一个元素。如果找不到该元素，<em>remove()</em> 方法会抛出错误，因此最好先检查该元素是否存在于集合中。<em>discard()</em> 方法则不会抛出任何错误。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
st<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">'item2'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>pop()</em> 方法从集合中移除一个随机元素并返回该被移除的元素。
<strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">}</span>
fruits<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 从集合中移除一个随机元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想知道被移除的元素:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">}</span>
removed_item <span class="token operator">=</span> fruits<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清空集合中的项目" tabindex="-1"><a class="header-anchor" href="#清空集合中的项目" aria-hidden="true">#</a> 清空集合中的项目</h3>
<p>如果我们想要清空或清除集合中的所有项目，可以使用 <em>clear</em> 方法。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
st<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">}</span>
fruits<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span> <span class="token comment"># set()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除一个集合" tabindex="-1"><a class="header-anchor" href="#删除一个集合" aria-hidden="true">#</a> 删除一个集合</h3>
<p>如果我们想要删除整个集合，可以使用 <em>del</em> 操作符。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
<span class="token keyword">del</span> st
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">}</span>
<span class="token keyword">del</span> fruits
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将列表转换为集合" tabindex="-1"><a class="header-anchor" href="#将列表转换为集合" aria-hidden="true">#</a> 将列表转换为集合</h3>
<p>我们可以将列表转换为集合，也可以将集合转换为列表。将列表转换为集合会去除重复项，只保留唯一项。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">,</span> <span class="token string">'item1'</span><span class="token punctuation">]</span>
st <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>  <span class="token comment"># {'item2', 'item4', 'item1', 'item3'} - 顺序是随机的，因为集合在一般情况下是无序的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">,</span><span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'banana'</span><span class="token punctuation">]</span>
fruits <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span> <span class="token comment"># {'mango', 'lemon', 'banana', 'orange'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并集合" tabindex="-1"><a class="header-anchor" href="#合并集合" aria-hidden="true">#</a> 合并集合</h3>
<p>我们可以使用 <em>union()</em> 或 <em>update()</em> 方法来合并两个集合。</p>
<ul>
<li>Union
这个方法返回一个新集合</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
st2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item5'</span><span class="token punctuation">,</span> <span class="token string">'item6'</span><span class="token punctuation">,</span> <span class="token string">'item7'</span><span class="token punctuation">,</span> <span class="token string">'item8'</span><span class="token punctuation">}</span>
st3 <span class="token operator">=</span> st1<span class="token punctuation">.</span>union<span class="token punctuation">(</span>st2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">}</span>
vegetables <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'tomato'</span><span class="token punctuation">,</span> <span class="token string">'potato'</span><span class="token punctuation">,</span> <span class="token string">'cabbage'</span><span class="token punctuation">,</span><span class="token string">'onion'</span><span class="token punctuation">,</span> <span class="token string">'carrot'</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">.</span>union<span class="token punctuation">(</span>vegetables<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># {'lemon', 'carrot', 'tomato', 'banana', 'mango', 'orange', 'cabbage', 'potato', 'onion'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Update
这个方法将一个集合插入到给定的集合中</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
st2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item5'</span><span class="token punctuation">,</span> <span class="token string">'item6'</span><span class="token punctuation">,</span> <span class="token string">'item7'</span><span class="token punctuation">,</span> <span class="token string">'item8'</span><span class="token punctuation">}</span>
st1<span class="token punctuation">.</span>update<span class="token punctuation">(</span>st2<span class="token punctuation">)</span> <span class="token comment"># st2 的内容被添加到 st1 中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'mango'</span><span class="token punctuation">,</span> <span class="token string">'lemon'</span><span class="token punctuation">}</span>
vegetables <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'tomato'</span><span class="token punctuation">,</span> <span class="token string">'potato'</span><span class="token punctuation">,</span> <span class="token string">'cabbage'</span><span class="token punctuation">,</span><span class="token string">'onion'</span><span class="token punctuation">,</span> <span class="token string">'carrot'</span><span class="token punctuation">}</span>
fruits<span class="token punctuation">.</span>update<span class="token punctuation">(</span>vegetables<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span> <span class="token comment"># {'lemon', 'carrot', 'tomato', 'banana', 'mango', 'orange', 'cabbage', 'potato', 'onion'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找交集项" tabindex="-1"><a class="header-anchor" href="#查找交集项" aria-hidden="true">#</a> 查找交集项</h3>
<p>交集返回两个集合中都存在的项的集合。请参见示例</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
st2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">}</span>
st1<span class="token punctuation">.</span>intersection<span class="token punctuation">(</span>st2<span class="token punctuation">)</span> <span class="token comment"># {'item3', 'item2'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>whole_numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
even_numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
whole_numbers<span class="token punctuation">.</span>intersection<span class="token punctuation">(</span>even_numbers<span class="token punctuation">)</span> <span class="token comment"># {0, 2, 4, 6, 8, 10}</span>
python <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token string">'t'</span><span class="token punctuation">,</span> <span class="token string">'h'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">,</span> <span class="token string">'n'</span><span class="token punctuation">}</span>
dragon <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">,</span> <span class="token string">'n'</span><span class="token punctuation">}</span>
python<span class="token punctuation">.</span>intersection<span class="token punctuation">(</span>dragon<span class="token punctuation">)</span>     <span class="token comment"># {'o', 'n'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查子集和超集" tabindex="-1"><a class="header-anchor" href="#检查子集和超集" aria-hidden="true">#</a> 检查子集和超集</h3>
<p>一个集合可以是另一个集合的子集或超集：</p>
<ul>
<li>子集: <em>issubset()</em></li>
<li>超集: <em>issuperset</em></li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
st2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">}</span>
st2<span class="token punctuation">.</span>issubset<span class="token punctuation">(</span>st1<span class="token punctuation">)</span> <span class="token comment"># True</span>
st1<span class="token punctuation">.</span>issuperset<span class="token punctuation">(</span>st2<span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>whole_numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
even_numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
whole_numbers<span class="token punctuation">.</span>issubset<span class="token punctuation">(</span>even_numbers<span class="token punctuation">)</span> <span class="token comment"># 错误，因为它是超集</span>
whole_numbers<span class="token punctuation">.</span>issuperset<span class="token punctuation">(</span>even_numbers<span class="token punctuation">)</span> <span class="token comment"># 正确</span>

python <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token string">'t'</span><span class="token punctuation">,</span> <span class="token string">'h'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">,</span> <span class="token string">'n'</span><span class="token punctuation">}</span>
dragon <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">,</span> <span class="token string">'n'</span><span class="token punctuation">}</span>
python<span class="token punctuation">.</span>issubset<span class="token punctuation">(</span>dragon<span class="token punctuation">)</span>     <span class="token comment"># 错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查两个集合之间的差异" tabindex="-1"><a class="header-anchor" href="#检查两个集合之间的差异" aria-hidden="true">#</a> 检查两个集合之间的差异</h3>
<p>它返回两个集合之间的差异。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
st2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">}</span>
st2<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>st1<span class="token punctuation">)</span> <span class="token comment"># set()</span>
st1<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>st2<span class="token punctuation">)</span> <span class="token comment"># {'item1', 'item4'} => st1\st2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>whole_numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
even_numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
whole_numbers<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>even_numbers<span class="token punctuation">)</span> <span class="token comment"># {1, 3, 5, 7, 9}</span>
python <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token string">'t'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">,</span> <span class="token string">'n'</span><span class="token punctuation">}</span>
dragon <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">,</span> <span class="token string">'n'</span><span class="token punctuation">}</span>
python<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>dragon<span class="token punctuation">)</span>     <span class="token comment"># {'p', 'y', 't'}  - 结果是无序的（集合的特性）</span>
dragon<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>python<span class="token punctuation">)</span>     <span class="token comment"># {'d', 'r', 'a', 'g'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找两个集合之间的对称差异" tabindex="-1"><a class="header-anchor" href="#查找两个集合之间的对称差异" aria-hidden="true">#</a> 查找两个集合之间的对称差异</h3>
<p>它返回两个集合之间的对称差异。作用是找出 “只在 A 中存在” 和 “只在 B 中存在” 的所有元素</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
st2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">}</span>
<span class="token comment"># 意思是 (A\B)∪(B\A)</span>
st2<span class="token punctuation">.</span>symmetric_difference<span class="token punctuation">(</span>st1<span class="token punctuation">)</span> <span class="token comment"># {'item1', 'item4'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>whole_numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
some_numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
whole_numbers<span class="token punctuation">.</span>symmetric_difference<span class="token punctuation">(</span>some_numbers<span class="token punctuation">)</span> <span class="token comment"># {0, 6, 7, 8, 9, 10}</span>
python <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token string">'t'</span><span class="token punctuation">,</span> <span class="token string">'h'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">,</span> <span class="token string">'n'</span><span class="token punctuation">}</span>
dragon <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">,</span> <span class="token string">'n'</span><span class="token punctuation">}</span>
python<span class="token punctuation">.</span>symmetric_difference<span class="token punctuation">(</span>dragon<span class="token punctuation">)</span>  <span class="token comment"># {'r', 't', 'p', 'y', 'g', 'a', 'd', 'h'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并集合-1" tabindex="-1"><a class="header-anchor" href="#合并集合-1" aria-hidden="true">#</a> 合并集合</h3>
<p>如果两个集合没有共同的项或项，我们称它们为不相交集合。我们可以使用 <em>isdisjoint()</em> 方法来检查两个集合是否相交。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
st1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item1'</span><span class="token punctuation">,</span> <span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">,</span> <span class="token string">'item4'</span><span class="token punctuation">}</span>
st2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'item2'</span><span class="token punctuation">,</span> <span class="token string">'item3'</span><span class="token punctuation">}</span>
st2<span class="token punctuation">.</span>isdisjoint<span class="token punctuation">(</span>st1<span class="token punctuation">)</span> <span class="token comment"># 错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>even_numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span>
odd_numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
even_numbers<span class="token punctuation">.</span>isdisjoint<span class="token punctuation">(</span>odd_numbers<span class="token punctuation">)</span> <span class="token comment"># 正确，因为没有共同项</span>
python <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token string">'t'</span><span class="token punctuation">,</span> <span class="token string">'h'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">,</span> <span class="token string">'n'</span><span class="token punctuation">}</span>
dragon <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">,</span> <span class="token string">'n'</span><span class="token punctuation">}</span>
python<span class="token punctuation">.</span>isdisjoint<span class="token punctuation">(</span>dragon<span class="token punctuation">)</span>  <span class="token comment"># 错误，有共同项 {'o', 'n'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<h3 id="_1-集合的基础操作" tabindex="-1"><a class="header-anchor" href="#_1-集合的基础操作" aria-hidden="true">#</a> 1. 集合的基础操作</h3>
<ul>
<li><strong>创建</strong>：使用 <code v-pre>set()</code> 创建空集合，或使用花括号 <code v-pre>{}</code> 包含初始元素。</li>
<li><strong>特性</strong>：<strong>无序</strong>（没有索引）、<strong>唯一</strong>（自动去重）。</li>
<li><strong>基本工具</strong>：
<ul>
<li><code v-pre>len(set)</code>：获取元素个数。</li>
<li><code v-pre>in</code>：检查成员资格。</li>
<li><code v-pre>set(list)</code>：将列表转换为集合（常用于快速去重）。</li>
</ul>
</li>
</ul>
<h3 id="_2-元素的管理" tabindex="-1"><a class="header-anchor" href="#_2-元素的管理" aria-hidden="true">#</a> 2. 元素的管理</h3>
<ul>
<li><strong>添加</strong>：<code v-pre>add()</code> 添加单个元素；<code v-pre>update()</code> 添加多个元素（可接收列表、元组等）。</li>
<li><strong>移除</strong>：
<ul>
<li><code v-pre>remove()</code>：删除指定元素，若不存在则<strong>报错</strong>。</li>
<li><code v-pre>discard()</code>：删除指定元素，若不存在<strong>不报错</strong>。</li>
<li><code v-pre>pop()</code>：随机删除并返回一个元素。</li>
</ul>
</li>
<li><strong>清理</strong>：<code v-pre>clear()</code> 清空内容；<code v-pre>del</code> 彻底销毁集合对象。</li>
</ul>
<h3 id="_3-集合间的数学运算" tabindex="-1"><a class="header-anchor" href="#_3-集合间的数学运算" aria-hidden="true">#</a> 3. 集合间的数学运算</h3>
<table>
<thead>
<tr>
<th><strong>运算名称</strong></th>
<th><strong>Python 方法</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>并集 (Union)</strong></td>
<td><code v-pre>union()</code> / <code v-pre>update()</code></td>
<td>包含 A 和 B 中的所有元素。</td>
</tr>
<tr>
<td><strong>交集 (Intersection)</strong></td>
<td><code v-pre>intersection()</code></td>
<td>仅包含 A 和 B 共同拥有的元素。</td>
</tr>
<tr>
<td><strong>差集 (Difference)</strong></td>
<td><code v-pre>difference()</code></td>
<td>存在于 A 中但不在 B 中的元素。</td>
</tr>
<tr>
<td><strong>对称差集 (Symmetric Diff)</strong></td>
<td><code v-pre>symmetric_difference()</code></td>
<td>A 和 B 的非共有元素（即：并集减去交集）。</td>
</tr>
</tbody>
</table>
<h2 id="_4-关系判断" tabindex="-1"><a class="header-anchor" href="#_4-关系判断" aria-hidden="true">#</a> 4. 关系判断</h2>
<ul>
<li><strong>子集 (<code v-pre>issubset</code>)</strong>：判断 A 的所有元素是否都在 B 中。</li>
<li><strong>超集 (<code v-pre>issuperset</code>)</strong>：判断 A 是否包含 B 的所有元素。</li>
<li><strong>不相交 (<code v-pre>isdisjoint</code>)</strong>：判断两个集合是否完全没有共同点（交集为空）。</li>
</ul>
</div></template>


