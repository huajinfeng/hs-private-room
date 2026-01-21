<template><div><h1 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h1>
<p>生活充满了循环。在编程中，我们会做很多重复的任务。编程语言使用循环来处理重复的任务，而Python编程语言提供了以下两种类型的循环:</p>
<ol>
<li>while 循环</li>
<li>for 循环</li>
</ol>
<h3 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h3>
<p>我们使用关键字<code v-pre>while</code>来创建while循环。它在条件被满足时重复执行代码块。当条件变为false时，会结束循环代码块，执行循环之后的代码。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>  <span class="token comment"># syntax</span>
<span class="token keyword">while</span> condition<span class="token punctuation">:</span>
    code goes here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> count <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
    count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token comment">#prints from 0 to 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的循环中，当count等于5时，循环条件变为false，此时循环停止。</p>
<p>如果我们想要在循环条件变为false时运行特定的代码块，我们可以使用<code v-pre>else</code>关键字。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>  <span class="token comment"># syntax</span>
<span class="token keyword">while</span> condition<span class="token punctuation">:</span>
    code goes here
<span class="token keyword">else</span><span class="token punctuation">:</span>
    code goes here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> count <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
    count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当count等于5时，循环条件变为false，循环终止，然后开始执行else块中的代码。因此，5将会被打印输出。</p>
<h3 id="break和continue-part-1" tabindex="-1"><a class="header-anchor" href="#break和continue-part-1" aria-hidden="true">#</a> break和continue - part 1</h3>
<ul>
<li>Break：当我们想要退出循环时，我们使用<code v-pre>break</code>关键字。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># syntax</span>
<span class="token keyword">while</span> condition<span class="token punctuation">:</span>
    code goes here
    <span class="token keyword">if</span> another_condition<span class="token punctuation">:</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> count <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
    count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的while循环只会打印输出0，1，2，但当count等于3时，循环会终止。</p>
<ul>
<li>Continue：当我们想要跳过当前循环并继续执行下一个循环时，我们使用<code v-pre>continue</code>关键字。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>  <span class="token comment"># syntax</span>
<span class="token keyword">while</span> condition<span class="token punctuation">:</span>
    code goes here
    <span class="token keyword">if</span> another_condition<span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> count <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
        count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
    count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的while循环只会打印输出0，1，2，4。（3被跳过了）</p>
<h3 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h3>
<p><code v-pre>for</code>关键字用于创建for循环。和别的编程语言相似，但语法上有一些不同。它可以用于对序列的遍历（也就是列表、元组、字典、集合、字符串等）。</p>
<ul>
<li>列表的for循环</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># syntax</span>
<span class="token keyword">for</span> iterator <span class="token keyword">in</span> lst<span class="token punctuation">:</span>
    code goes here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> number <span class="token keyword">in</span> numbers<span class="token punctuation">:</span> <span class="token comment"># number是引用列表项的临时名称，仅在此循环中有效</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>       <span class="token comment"># number将会被逐行打印，从0到5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>字符串的for循环</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># syntax</span>
<span class="token keyword">for</span> iterator <span class="token keyword">in</span> string<span class="token punctuation">:</span>
    code goes here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>language <span class="token operator">=</span> <span class="token string">'Python'</span>
<span class="token keyword">for</span> letter <span class="token keyword">in</span> language<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>letter<span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>元组的for循环</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># syntax</span>
<span class="token keyword">for</span> iterator <span class="token keyword">in</span> tpl<span class="token punctuation">:</span>
    code goes here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numbers <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> number <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>字典的for循环
循环遍历将会遍历字典的键。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>  <span class="token comment"># syntax</span>
<span class="token keyword">for</span> iterator <span class="token keyword">in</span> dct<span class="token punctuation">:</span>
    code goes here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'first_name'</span><span class="token punctuation">:</span><span class="token string">'Asabeneh'</span><span class="token punctuation">,</span>
    <span class="token string">'last_name'</span><span class="token punctuation">:</span><span class="token string">'Yetayeh'</span><span class="token punctuation">,</span>
    <span class="token string">'age'</span><span class="token punctuation">:</span><span class="token number">250</span><span class="token punctuation">,</span>
    <span class="token string">'country'</span><span class="token punctuation">:</span><span class="token string">'Finland'</span><span class="token punctuation">,</span>
    <span class="token string">'is_marred'</span><span class="token punctuation">:</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token string">'skills'</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">'JavaScript'</span><span class="token punctuation">,</span> <span class="token string">'React'</span><span class="token punctuation">,</span> <span class="token string">'Node'</span><span class="token punctuation">,</span> <span class="token string">'MongoDB'</span><span class="token punctuation">,</span> <span class="token string">'Python'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'address'</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
        <span class="token string">'street'</span><span class="token punctuation">:</span><span class="token string">'Space street'</span><span class="token punctuation">,</span>
        <span class="token string">'zipcode'</span><span class="token punctuation">:</span><span class="token string">'02210'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> key <span class="token keyword">in</span> person<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">#仅输出键</span>

<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> person<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token comment"># 这样我们可以在迭代的过程中同时访问键和值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>集合的for循环</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># syntax</span>
<span class="token keyword">for</span> iterator <span class="token keyword">in</span> st<span class="token punctuation">:</span>
    code goes here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>it_companies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'Facebook'</span><span class="token punctuation">,</span> <span class="token string">'Google'</span><span class="token punctuation">,</span> <span class="token string">'Microsoft'</span><span class="token punctuation">,</span> <span class="token string">'Apple'</span><span class="token punctuation">,</span> <span class="token string">'IBM'</span><span class="token punctuation">,</span> <span class="token string">'Oracle'</span><span class="token punctuation">,</span> <span class="token string">'Amazon'</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> company <span class="token keyword">in</span> it_companies<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>company<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="break-和-continue-part-2" tabindex="-1"><a class="header-anchor" href="#break-和-continue-part-2" aria-hidden="true">#</a> break 和 continue - part 2</h3>
<p>提示：
<em>break</em>:当我们想要在循环完成前退出循环时，我们使用<code v-pre>break</code>关键字。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># syntax</span>
<span class="token keyword">for</span> iterator <span class="token keyword">in</span> sequence<span class="token punctuation">:</span>
    code goes here
    <span class="token keyword">if</span> condition<span class="token punctuation">:</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numbers <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> number <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token comment">#输出 0，1，2，3</span>
    <span class="token keyword">if</span> number <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，当number等于3时，循环会终止。</p>
<p><em>continue</em>:当我们想要跳过当前循环并继续执行下一个循环时，我们使用<code v-pre>continue</code>关键字。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>  <span class="token comment"># syntax</span>
<span class="token keyword">for</span> iterator <span class="token keyword">in</span> sequence<span class="token punctuation">:</span>
    code goes here
    <span class="token keyword">if</span> condition<span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numbers <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> number <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
    <span class="token keyword">if</span> number <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Next number should be '</span><span class="token punctuation">,</span> number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">if</span> number <span class="token operator">!=</span> <span class="token number">5</span> <span class="token keyword">else</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"loop's end"</span><span class="token punctuation">)</span> <span class="token comment"># 简而言之，对于简短的条件，需要同时使用if和else语句</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'outside the loop'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，当number等于3时，在此条件之后的（但在循环中的）语句会被跳过，如果还有未完成的遍历元素，它会继续执行下一个循环。</p>
<h3 id="range-函数" tabindex="-1"><a class="header-anchor" href="#range-函数" aria-hidden="true">#</a> range() 函数</h3>
<p><code v-pre>range()</code>函数用于生成一个序列的数字。_range(start, end, step)_函数接受三个参数：起始值、结束值和步长。默认情况下，起始值是0，步长是1。这个函数需要至少一个参数。（结束值end）</p>
<p>使用<code v-pre>range()</code>函数生成序列</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span> <span class="token comment"># [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span>
st <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># 两个参数分别代表start和stop，步长step为默认值1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span> <span class="token comment"># {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}</span>

lst <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span> <span class="token comment"># [0, 2, 4, 6, 8, 10]</span>
st <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span> <span class="token comment">#  {0, 2, 4, 6, 8, 10}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># syntax</span>
<span class="token keyword">for</span> iterator <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> step<span class="token punctuation">)</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>   <span class="token comment"># 打印输出0到10，不包括11。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套for循环" tabindex="-1"><a class="header-anchor" href="#嵌套for循环" aria-hidden="true">#</a> 嵌套for循环</h3>
<p>我们可以在循环中嵌套另一个循环。这种循环称为嵌套循环。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># syntax</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> y<span class="token punctuation">:</span>
    <span class="token keyword">for</span> t <span class="token keyword">in</span> x<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'first_name'</span><span class="token punctuation">:</span> <span class="token string">'Asabeneh'</span><span class="token punctuation">,</span>
    <span class="token string">'last_name'</span><span class="token punctuation">:</span> <span class="token string">'Yetayeh'</span><span class="token punctuation">,</span>
    <span class="token string">'age'</span><span class="token punctuation">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
    <span class="token string">'country'</span><span class="token punctuation">:</span> <span class="token string">'Finland'</span><span class="token punctuation">,</span>
    <span class="token string">'is_marred'</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token string">'skills'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'JavaScript'</span><span class="token punctuation">,</span> <span class="token string">'React'</span><span class="token punctuation">,</span> <span class="token string">'Node'</span><span class="token punctuation">,</span> <span class="token string">'MongoDB'</span><span class="token punctuation">,</span> <span class="token string">'Python'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'address'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">'street'</span><span class="token punctuation">:</span> <span class="token string">'Space street'</span><span class="token punctuation">,</span>
        <span class="token string">'zipcode'</span><span class="token punctuation">:</span> <span class="token string">'02210'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> key <span class="token keyword">in</span> person<span class="token punctuation">:</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token string">'skills'</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> skill <span class="token keyword">in</span> person<span class="token punctuation">[</span><span class="token string">'skills'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>skill<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for和else" tabindex="-1"><a class="header-anchor" href="#for和else" aria-hidden="true">#</a> for和else</h3>
<p>如果我们想要在循环结束时执行特定的代码块，我们可以使用<code v-pre>else</code>关键字。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># syntax</span>
<span class="token keyword">for</span> iterator <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> step<span class="token punctuation">)</span><span class="token punctuation">:</span>
    do something
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'The loop ended'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>   <span class="token comment"># prints 0 to 10, not including 11</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'The loop stops at'</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pass语句" tabindex="-1"><a class="header-anchor" href="#pass语句" aria-hidden="true">#</a> pass语句</h3>
<p>在python中，当需要一些语句（比如在<code v-pre>:</code>后），但我们不想执行任何代码时，我们可以使用<code v-pre>pass</code>关键字来避免报错。此外，我们也可以用它来作为一个占位符，以便在以后填充代码。</p>
<p><strong>示例:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>🌕 你完成了伟大的一步，太猛了哥。冲冲冲！你刚刚完成了第10天的挑战，你在通往伟大的道路上迈出了10步。现在我们做一些练习来练练肌肉和大脑。</p>
<h2 id="💻-练习-第十天" tabindex="-1"><a class="header-anchor" href="#💻-练习-第十天" aria-hidden="true">#</a> 💻 练习：第十天</h2>
<h3 id="练习-一级" tabindex="-1"><a class="header-anchor" href="#练习-一级" aria-hidden="true">#</a> 练习：一级</h3>
<ol>
<li>
<p>分别使用while和for实现从0到10的迭代。</p>
</li>
<li>
<p>分别使用while和for实现从10到0的迭代。</p>
</li>
<li>
<p>写一个循环，调用7次<code v-pre>print()</code>函数，输出如下的三角形：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code> <span class="token comment">#</span>
 <span class="token comment">##</span>
 <span class="token comment">###</span>
 <span class="token comment">####</span>
 <span class="token comment">#####</span>
 <span class="token comment">######</span>
 <span class="token comment">#######</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用嵌套循环来实现下面的输出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># # # # # # # #</span>
<span class="token comment"># # # # # # # #</span>
<span class="token comment"># # # # # # # #</span>
<span class="token comment"># # # # # # # #</span>
<span class="token comment"># # # # # # # #</span>
<span class="token comment"># # # # # # # #</span>
<span class="token comment"># # # # # # # #</span>
<span class="token comment"># # # # # # # #</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用循环实现下面格式的输出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">0</span> x <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token number">1</span> x <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token number">2</span> x <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">4</span>
<span class="token number">3</span> x <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">9</span>
<span class="token number">4</span> x <span class="token number">4</span> <span class="token operator">=</span> <span class="token number">16</span>
<span class="token number">5</span> x <span class="token number">5</span> <span class="token operator">=</span> <span class="token number">25</span>
<span class="token number">6</span> x <span class="token number">6</span> <span class="token operator">=</span> <span class="token number">36</span>
<span class="token number">7</span> x <span class="token number">7</span> <span class="token operator">=</span> <span class="token number">49</span>
<span class="token number">8</span> x <span class="token number">8</span> <span class="token operator">=</span> <span class="token number">64</span>
<span class="token number">9</span> x <span class="token number">9</span> <span class="token operator">=</span> <span class="token number">81</span>
<span class="token number">10</span> x <span class="token number">10</span> <span class="token operator">=</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>用for循环遍历列表<code v-pre>['Python', 'Numpy','Pandas','Django', 'Flask']</code>，并打印输出每个元素。</p>
</li>
<li>
<p>用for循环从0到100遍历并且打印输出所有偶数。</p>
</li>
<li>
<p>用for循环从0到100遍历并且打印输出所有奇数。</p>
</li>
</ol>
<h3 id="练习-二级" tabindex="-1"><a class="header-anchor" href="#练习-二级" aria-hidden="true">#</a> 练习：二级</h3>
<ol>
<li>使用for循环从0到100遍历并且输出所有数字的和。<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>The <span class="token function">sum</span> of all numbers is <span class="token number">5050</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>使用for循环从0到100遍历并且分别输出所有奇数和所有偶数的和。<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>The <span class="token function">sum</span> of all odd numbers is <span class="token number">2500</span>. And the <span class="token function">sum</span> of all even numbers is <span class="token number">2550</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="练习-三级" tabindex="-1"><a class="header-anchor" href="#练习-三级" aria-hidden="true">#</a> 练习：三级</h3>
<ol>
<li>跳转到data文件夹并使用<a href="https://github.com/Asabeneh/30-Days-Of-Python/blob/master/data/countries.py" target="_blank" rel="noopener noreferrer">countries.py<ExternalLinkIcon/></a>文件。循环遍历所有国家，并且提取出所有包含字母<code v-pre>land</code>的国家。</li>
<li>有一个列表<code v-pre>fruits = ['banana', 'orange', 'mango', 'lemon']</code>，使用循环反转列表中的元素。</li>
<li>跳转到data文件夹并使用<a href="https://github.com/Asabeneh/30-Days-Of-Python/blob/master/data/countries-data.py" target="_blank" rel="noopener noreferrer">countries_data.py<ExternalLinkIcon/></a>文件。
<ol>
<li>数据中一共有多少个语言？</li>
<li>找到被最多国家使用的语言。</li>
<li>找到人数排名前十的国家。</li>
</ol>
</li>
</ol>
<p>🎉 恭喜！ 🎉</p>
<p><RouterLink to="/docs/Python/09_conditionals.html">&lt;&lt; 第 9 天</RouterLink> | <RouterLink to="/docs/Python/11_functions.html">第 11 天 &gt;&gt;</RouterLink></p>
</div></template>


