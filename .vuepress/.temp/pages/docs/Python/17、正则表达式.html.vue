<template><div><h1 id="_17-正则表达式" tabindex="-1"><a class="header-anchor" href="#_17-正则表达式" aria-hidden="true">#</a> 17 正则表达式</h1>
<p>正则表达式（RegEx）是一种特殊的文本字符串，有助于在数据中查找模式。RegEx可用于检查不同数据类型中是否存在某种模式。要在Python中使用RegEx，首先我们应该导入RegEx模块，该模块被称为<em>re</em>。</p>
<h3 id="re-模块" tabindex="-1"><a class="header-anchor" href="#re-模块" aria-hidden="true">#</a> <em>re</em> 模块</h3>
<p>导入模块后，我们可以使用它来检测或查找模式。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="re-模块中的方法" tabindex="-1"><a class="header-anchor" href="#re-模块中的方法" aria-hidden="true">#</a> <em>re</em> 模块中的方法</h3>
<p>要查找模式，我们使用不同的<em>re</em>字符集，这些字符集允许在字符串中搜索匹配项。</p>
<ul>
<li><em>re.match()</em>：只在字符串的第一行开头搜索，如果找到则返回匹配的对象，否则返回None。</li>
<li><em>re.search</em>：如果字符串中的任何地方（包括多行字符串）有匹配项，则返回匹配对象。</li>
<li><em>re.findall</em>：返回包含所有匹配项的列表。</li>
<li><em>re.split</em>：接受一个字符串，在匹配点处分割，返回一个列表。</li>
<li><em>re.sub</em>：替换字符串中的一个或多个匹配项。</li>
</ul>
<h4 id="匹配" tabindex="-1"><a class="header-anchor" href="#匹配" aria-hidden="true">#</a> 匹配</h4>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span>substring<span class="token punctuation">,</span> string<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>
<span class="token comment"># substring是一个字符串或模式，string是我们查找模式的文本，re.I是忽略大小写</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re

txt <span class="token operator">=</span> <span class="token string">'I love to teach python and javaScript'</span>
<span class="token comment"># 它返回一个带有span和match的对象</span>
<span class="token keyword">match</span> <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">'I love to teach'</span><span class="token punctuation">,</span> txt<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">match</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;re.Match object; span=(0, 15), match='I love to teach'></span>
<span class="token comment"># 我们可以使用span获取匹配的起始和结束位置，作为元组</span>
span <span class="token operator">=</span> <span class="token keyword">match</span><span class="token punctuation">.</span>span<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>span<span class="token punctuation">)</span>     <span class="token comment"># (0, 15)</span>
<span class="token comment"># 让我们从span中找到起始和结束位置</span>
start<span class="token punctuation">,</span> end <span class="token operator">=</span> span
<span class="token keyword">print</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>  <span class="token comment"># 0, 15</span>
substring <span class="token operator">=</span> txt<span class="token punctuation">[</span>start<span class="token punctuation">:</span>end<span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>substring<span class="token punctuation">)</span>       <span class="token comment"># I love to teach</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的例子可以看出，我们正在寻找的模式（或我们正在寻找的子字符串）是<em>I love to teach</em>。match函数<strong>只有</strong>在文本以该模式开头时才会返回一个对象。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re

txt <span class="token operator">=</span> <span class="token string">'I love to teach python and javaScript'</span>
<span class="token keyword">match</span> <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">'I like to teach'</span><span class="token punctuation">,</span> txt<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">match</span><span class="token punctuation">)</span>  <span class="token comment"># None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该字符串不以<em>I like to teach</em>开头，因此没有匹配，match方法返回None。</p>
<h4 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h4>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span>substring<span class="token punctuation">,</span> string<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>
<span class="token comment"># substring是一个模式，string是我们查找模式的文本，re.I是忽略大小写标志</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re

txt <span class="token operator">=</span> <span class="token triple-quoted-string string">'''Python is the most beautiful language that a human being has ever created.
I recommend python for a first programming language'''</span>

<span class="token comment"># 它返回一个带有span和match的对象</span>
<span class="token keyword">match</span> <span class="token operator">=</span> re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">'first'</span><span class="token punctuation">,</span> txt<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">match</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;re.Match object; span=(100, 105), match='first'></span>
<span class="token comment"># 我们可以使用span获取匹配的起始和结束位置，作为元组</span>
span <span class="token operator">=</span> <span class="token keyword">match</span><span class="token punctuation">.</span>span<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>span<span class="token punctuation">)</span>     <span class="token comment"># (100, 105)</span>
<span class="token comment"># 让我们从span中找到起始和结束位置</span>
start<span class="token punctuation">,</span> end <span class="token operator">=</span> span
<span class="token keyword">print</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>  <span class="token comment"># 100 105</span>
substring <span class="token operator">=</span> txt<span class="token punctuation">[</span>start<span class="token punctuation">:</span>end<span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>substring<span class="token punctuation">)</span>       <span class="token comment"># first</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如你所见，search比match好得多，因为它可以在整个文本中查找模式。Search返回找到的第一个匹配项的匹配对象，否则返回<em>None</em>。更好的<em>re</em>函数是<em>findall</em>。此函数检查整个字符串中的模式，并将所有匹配项作为列表返回。</p>
<h4 id="使用-findall-搜索所有匹配项" tabindex="-1"><a class="header-anchor" href="#使用-findall-搜索所有匹配项" aria-hidden="true">#</a> 使用 <em>findall</em> 搜索所有匹配项</h4>
<p><em>findall()</em> 将所有匹配项作为列表返回</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>txt <span class="token operator">=</span> <span class="token triple-quoted-string string">'''Python is the most beautiful language that a human being has ever created.
I recommend python for a first programming language'''</span>

<span class="token comment"># 它返回一个列表</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'language'</span><span class="token punctuation">,</span> txt<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['language', 'language']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如你所见，单词<em>language</em>在字符串中被找到了两次。让我们再练习一些。
现在我们将在字符串中查找Python和python这两个单词：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>txt <span class="token operator">=</span> <span class="token triple-quoted-string string">'''Python is the most beautiful language that a human being has ever created.
I recommend python for a first programming language'''</span>

<span class="token comment"># 它返回一个列表</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'python'</span><span class="token punctuation">,</span> txt<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['Python', 'python']</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于我们使用<em>re.I</em>，所以包含了大小写字母。如果我们没有re.I标志，那么我们将不得不以不同的方式编写我们的模式。让我们来看看：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>txt <span class="token operator">=</span> <span class="token triple-quoted-string string">'''Python is the most beautiful language that a human being has ever created.
I recommend python for a first programming language'''</span>

matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'Python|python'</span><span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['Python', 'python']</span>

<span class="token comment">#</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'[Pp]ython'</span><span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['Python', 'python']</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="替换子字符串" tabindex="-1"><a class="header-anchor" href="#替换子字符串" aria-hidden="true">#</a> 替换子字符串</h4>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>txt <span class="token operator">=</span> <span class="token triple-quoted-string string">'''Python is the most beautiful language that a human being has ever created.
I recommend python for a first programming language'''</span>

match_replaced <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">'Python|python'</span><span class="token punctuation">,</span> <span class="token string">'JavaScript'</span><span class="token punctuation">,</span> txt<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>match_replaced<span class="token punctuation">)</span>  <span class="token comment"># JavaScript is the most beautiful language that a human being has ever created.</span>
<span class="token comment"># 或者</span>
match_replaced <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">'[Pp]ython'</span><span class="token punctuation">,</span> <span class="token string">'JavaScript'</span><span class="token punctuation">,</span> txt<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>match_replaced<span class="token punctuation">)</span>  <span class="token comment"># JavaScript is the most beautiful language that a human being has ever created.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们再添加一个例子。除非我们删除%符号，否则以下字符串真的很难阅读。用空字符串替换%将清理文本。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
txt <span class="token operator">=</span> <span class="token triple-quoted-string string">'''%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing. 
T%he%re i%s n%o%th%ing as r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing p%e%o%ple.
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs. 
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher?'''</span>

matches <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">'%'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>I am teacher and I love teaching.
There is nothing as rewarding as educating and empowering people. 
I found teaching <span class="token function">more</span> interesting than any other jobs. Does this motivate you to be a teacher?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用regex拆分文本" tabindex="-1"><a class="header-anchor" href="#使用regex拆分文本" aria-hidden="true">#</a> 使用RegEx拆分文本</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>txt <span class="token operator">=</span> <span class="token triple-quoted-string string">'''I am teacher and  I love teaching.
There is nothing as rewarding as educating and empowering people.
I found teaching more interesting than any other jobs.
Does this motivate you to be a teacher?'''</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">'\n'</span><span class="token punctuation">,</span> txt<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 使用\n分割 - 行尾符号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token string">'I am teacher and  I love teaching.'</span>, <span class="token string">'There is nothing as rewarding as educating and empowering people.'</span>, <span class="token string">'I found teaching more interesting than any other jobs.'</span>, <span class="token string">'Does this motivate you to be a teacher?'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="编写regex模式" tabindex="-1"><a class="header-anchor" href="#编写regex模式" aria-hidden="true">#</a> 编写RegEx模式</h2>
<p>要声明字符串变量，我们使用单引号或双引号。要声明RegEx变量，使用<em>r''</em>。
以下模式仅识别小写的apple，要使其不区分大小写，我们应该重写模式或添加标志。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re

regex_pattern <span class="token operator">=</span> <span class="token string">r'apple'</span>
txt <span class="token operator">=</span> <span class="token string">'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['apple']</span>

<span class="token comment"># 要使其不区分大小写，添加标志'</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['Apple', 'apple']</span>
<span class="token comment"># 或者我们可以使用一组字符方法</span>
regex_pattern <span class="token operator">=</span> <span class="token string">r'[Aa]pple'</span>  <span class="token comment"># 这意味着第一个字母可以是Apple或apple</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['Apple', 'apple']</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>[]:  一组字符
<ul>
<li>[a-c] 表示，a或b或c</li>
<li>[a-z] 表示，从a到z的任何字母</li>
<li>[A-Z] 表示，从A到Z的任何字符</li>
<li>[0-3] 表示，0或1或2或3</li>
<li>[0-9] 表示从0到9的任何数字</li>
<li>[A-Za-z0-9] 任何单个字符，即a到z，A到Z或0到9</li>
</ul>
</li>
</ul>
<h3 id="方括号" tabindex="-1"><a class="header-anchor" href="#方括号" aria-hidden="true">#</a> 方括号</h3>
<p>让我们使用方括号练习更多的模式。记得，我们使用<em>re.I</em>作为标志，使搜索不区分大小写。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>regex_pattern <span class="token operator">=</span> <span class="token string">r'[Aa]pple|[Bb]anana'</span> <span class="token comment"># 这意味着Apple或apple或Banana或banana</span>
txt <span class="token operator">=</span> <span class="token string">'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away.'</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['Apple', 'banana', 'apple', 'banana']</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方括号和管道。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>regex_pattern <span class="token operator">=</span> <span class="token string">r'[a-zA-Z0-9]'</span>  <span class="token comment"># 这个方括号表示 a 到 z, A 到 Z, 0 到 9</span>
txt <span class="token operator">=</span> <span class="token string">'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away.'</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['A', 'p', 'p', 'l', 'e', 'a', 'n', 'd', 'b', 'a', 'n', 'a', 'n', 'a', 'a', 'r', 'e',...]</span>

regex_pattern <span class="token operator">=</span> <span class="token string">r'\d'</span>  <span class="token comment"># d 是一个特殊字符，表示数字</span>
txt <span class="token operator">=</span> <span class="token string">'This regular expression example was made on December 6,  2019 and revised on July 8, 2021'</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['6', '2', '0', '1', '9', '8', '2', '0', '2', '1']</span>

regex_pattern <span class="token operator">=</span> <span class="token string">r'\d+'</span>  <span class="token comment"># d 是一个特殊字符，表示数字，+ 表示一个或多个</span>
txt <span class="token operator">=</span> <span class="token string">'This regular expression example was made on December 6,  2019 and revised on July 8, 2021'</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['6', '2019', '8', '2021']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="regex中的转义字符" tabindex="-1"><a class="header-anchor" href="#regex中的转义字符" aria-hidden="true">#</a> RegEx中的转义字符(\)</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>regex_pattern <span class="token operator">=</span> <span class="token string">r'\d+'</span>  <span class="token comment"># d 是一个特殊字符，表示数字，+ 表示一个或多个</span>
txt <span class="token operator">=</span> <span class="token string">'This regular expression example was made on December 6,  2019 and revised on July 8, 2021'</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['6', '2019', '8', '2021']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要查找 \ 本身，我们应该使用双倍反斜杠：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>regex_pattern <span class="token operator">=</span> <span class="token string">r'\\d'</span>  <span class="token comment"># 这意味着寻找 \d</span>
txt <span class="token operator">=</span> <span class="token string">'This regular expression example was made on December 6,  2019 and revised on July 8, 2021'</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们在字符串中没有任何与 \d 匹配的内容时，找不到任何匹配项。</p>
<h3 id="一次或多次" tabindex="-1"><a class="header-anchor" href="#一次或多次" aria-hidden="true">#</a> 一次或多次(+)</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>regex_pattern <span class="token operator">=</span> <span class="token string">r'\d+'</span>  <span class="token comment"># d 是一个特殊字符，表示数字，+ 表示一个或多个</span>
txt <span class="token operator">=</span> <span class="token string">'This regular expression example was made on December 6,  2019 and revised on July 8, 2021'</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['6', '2019', '8', '2021']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="句点" tabindex="-1"><a class="header-anchor" href="#句点" aria-hidden="true">#</a> 句点(.)</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>regex_pattern <span class="token operator">=</span> <span class="token string">r'[a].'</span>  <span class="token comment"># 这个方括号表示 a 和 . 表示任何字符，除了新行</span>
txt <span class="token operator">=</span> <span class="token triple-quoted-string string">'''Apple and banana are fruits'''</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['an', 'an', 'an', 'a ', 'ar']</span>

regex_pattern <span class="token operator">=</span> <span class="token string">r'[a].+'</span>  <span class="token comment"># . 任何字符，+ 任何字符一次或多次</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['and banana are fruits']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="零次或多次" tabindex="-1"><a class="header-anchor" href="#零次或多次" aria-hidden="true">#</a> 零次或多次(*)</h3>
<p>零次或多次。这个例子不太明显，所以请慢慢看。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>regex_pattern <span class="token operator">=</span> <span class="token string">r'[a].*'</span>  <span class="token comment"># . 任何字符，* 任何字符零次或多次</span>
txt <span class="token operator">=</span> <span class="token triple-quoted-string string">'''Apple and banana are fruits'''</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['and banana are fruits']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="零次或一次" tabindex="-1"><a class="header-anchor" href="#零次或一次" aria-hidden="true">#</a> 零次或一次(?)</h3>
<p>零次或一次。它可以存在，也可以不存在。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>txt <span class="token operator">=</span> <span class="token triple-quoted-string string">'''I am not sure if there is a convention how to write the word e-mail.
Some people write it as email others may write it as Email or E-mail.'''</span>
regex_pattern <span class="token operator">=</span> <span class="token string">r'[Ee]-?mail'</span>  <span class="token comment"># ? 表示零次或一次</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['e-mail', 'email', 'Email', 'E-mail']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="regex中的量词" tabindex="-1"><a class="header-anchor" href="#regex中的量词" aria-hidden="true">#</a> RegEx中的量词</h3>
<p>使用大括号，我们可以指定模式的长度</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>txt <span class="token operator">=</span> <span class="token string">'This regular expression example was made on December 6,  2019 and revised on July 8, 2021'</span>
regex_pattern <span class="token operator">=</span> <span class="token string">r'\d{4}'</span>  <span class="token comment"># 正好有四位数的数字</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['2019', '2021']</span>

txt <span class="token operator">=</span> <span class="token string">'This regular expression example was made on December 6,  2019 and revised on July 8, 2021'</span>
regex_pattern <span class="token operator">=</span> <span class="token string">r'\d{1,4}'</span>   <span class="token comment"># 1到4位数的数字</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['6', '2019', '8', '2021']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脱字符" tabindex="-1"><a class="header-anchor" href="#脱字符" aria-hidden="true">#</a> 脱字符(^)</h3>
<ul>
<li>以什么开始</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>txt <span class="token operator">=</span> <span class="token string">'This regular expression example was made on December 6,  2019 and revised on July 8, 2021'</span>
regex_pattern <span class="token operator">=</span> <span class="token string">r'^This'</span>  <span class="token comment"># ^ 表示以 This 开始</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['This']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>否定</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>txt <span class="token operator">=</span> <span class="token string">'This regular expression example was made on December 6,  2019 and revised on July 8, 2021'</span>
regex_pattern <span class="token operator">=</span> <span class="token string">r'[^A-Za-z ]+'</span>  <span class="token comment"># ^ 在方括号内表示否定，不是A-Z，不是a-z，不是空格</span>
matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_pattern<span class="token punctuation">,</span> txt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># ['6,', '2019', '8,', '2021']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


