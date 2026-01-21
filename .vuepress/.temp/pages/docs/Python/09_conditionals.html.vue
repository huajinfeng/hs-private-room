<template><div><h1 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h1>
<p>默认情况下，Python 脚本中的语句是从上到下顺序执行的。如果处理逻辑需要，可以通过两种方式来改变顺序：</p>
<ul>
<li>条件执行：如果某个表达式为真，则执行一个或多个语句块</li>
<li>重复执行：只要某个表达式为真，则重复执行一个或多个语句块。在本节中，我们将讨论<em>if</em>，<em>else</em>，<em>elif</em>语句。前面章节中学到的比较运算符和逻辑运算符在这里将派上用场。</li>
</ul>
<h3 id="if-条件" tabindex="-1"><a class="header-anchor" href="#if-条件" aria-hidden="true">#</a> If 条件</h3>
<p>在 Python 和其他编程语言中，关键字<em>if</em>用于检查条件是否为真并执行代码块。请记住冒号后的缩进。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token keyword">if</span> condition<span class="token punctuation">:</span>
    如果条件为真，则运行此部分代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：1</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">if</span> a <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是一个正数'</span><span class="token punctuation">)</span>
<span class="token comment"># A是一个正数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上例所示，3 大于 0。条件为真，执行代码块。然而，如果条件为假，我们不会看到结果。为了看到假条件的结果，我们应有另一个代码块，即<em>else</em>。</p>
<h3 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> If Else</h3>
<p>如果条件为真，则执行第一个代码块，否则执行<em>else</em>条件。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token keyword">if</span> condition<span class="token punctuation">:</span>
    如果条件为真，则运行此部分代码
<span class="token keyword">else</span><span class="token punctuation">:</span>
    如果条件为假，则运行此部分代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">if</span> a <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是一个负数'</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是一个正数'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的条件为假，因此执行<em>else</em>代码块。如果我们的条件超过两个呢？我们可以使用<em>elif</em>。</p>
<h3 id="if-elif-else" tabindex="-1"><a class="header-anchor" href="#if-elif-else" aria-hidden="true">#</a> If Elif Else</h3>
<p>在我们的日常生活中，我们每天都在做决策。我们做出决策不仅仅是检查一个或两个条件，而是多个条件。与生活相似，编程中也充满了条件。当我们有多个条件时，可以使用<em>elif</em>。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token keyword">if</span> condition<span class="token punctuation">:</span>
    代码
<span class="token keyword">elif</span> condition<span class="token punctuation">:</span>
    代码
<span class="token keyword">else</span><span class="token punctuation">:</span>
    代码

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">if</span> a <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是一个正数'</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> a <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是一个负数'</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是零'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简写" tabindex="-1"><a class="header-anchor" href="#简写" aria-hidden="true">#</a> 简写</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
代码 <span class="token keyword">if</span> 条件 <span class="token keyword">else</span> 代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是正数'</span><span class="token punctuation">)</span> <span class="token keyword">if</span> a <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">else</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是负数'</span><span class="token punctuation">)</span> <span class="token comment"># 满足第一个条件，将打印 'A是正数'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套条件" tabindex="-1"><a class="header-anchor" href="#嵌套条件" aria-hidden="true">#</a> 嵌套条件</h3>
<p>条件可以嵌套</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token keyword">if</span> 条件<span class="token punctuation">:</span>
    代码
    <span class="token keyword">if</span> 条件<span class="token punctuation">:</span>
        代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">if</span> a <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> a <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是一个正数且为偶数'</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是一个正数'</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> a <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是零'</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是一个负数'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以使用逻辑运算符<em>and</em>来避免编写嵌套条件。</p>
<h3 id="if-条件和逻辑运算符" tabindex="-1"><a class="header-anchor" href="#if-条件和逻辑运算符" aria-hidden="true">#</a> If 条件和逻辑运算符</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token keyword">if</span> 条件 <span class="token keyword">and</span> 条件<span class="token punctuation">:</span>
    代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">if</span> a <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">and</span> a <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是一个正数且为偶数'</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> a <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">and</span> a <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span>  <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是一个正数'</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> a <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是零'</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'A是一个负数'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-和-or-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#if-和-or-逻辑运算符" aria-hidden="true">#</a> If 和 Or 逻辑运算符</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token keyword">if</span> 条件 <span class="token keyword">or</span> 条件<span class="token punctuation">:</span>
    代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>user <span class="token operator">=</span> <span class="token string">'James'</span>
access_level <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">if</span> user <span class="token operator">==</span> <span class="token string">'admin'</span> <span class="token keyword">or</span> access_level <span class="token operator">>=</span> <span class="token number">4</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'访问授权！'</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'访问拒绝！'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌕 你做得很好。永远不要放弃，因为伟大的事情需要时间。你刚刚完成了第 9 天的挑战，你已经在通向伟大的道路上前进了 9 步。现在做一些练习来锻炼你的大脑和肌肉。</p>
<h2 id="💻-练习-第-9-天" tabindex="-1"><a class="header-anchor" href="#💻-练习-第-9-天" aria-hidden="true">#</a> 💻 练习：第 9 天</h2>
<h3 id="练习-第一层级" tabindex="-1"><a class="header-anchor" href="#练习-第一层级" aria-hidden="true">#</a> 练习：第一层级</h3>
<ol>
<li>
<p>使用 input 获取用户输入（例如：“输入你的年龄：”）。如果用户 18 岁或以上，给出反馈：你已经足够大，可以学习驾驶。如果未满 18 岁，则给出需要等待的年数。输出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>输入你的年龄：30
你已经足够大，可以学习驾驶。
输出：
输入你的年龄：15
你还需要等待3年才能学习驾驶。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用 if…else 比较 my_age 和 your_age 的值。谁更年长（我还是你）？使用 input（“输入你的年龄：”）获取年龄作为输入。您可以使用嵌套条件来打印'年'表示 1 年的年龄差异，'年'表示更大的差异，如果 my_age = your_age，则打印自定义文本。输出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>输入你的年龄：30
你比我大5岁。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用输入提示从用户处获得两个数字。如果 a 大于 b，返回 a 大于 b，如果 a 小于 b，返回 a 小于 b，否则返回 a 等于 b。输出:</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>输入第一个数字：4
输入第二个数字：3
<span class="token number">4</span>大于3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-第二层级" tabindex="-1"><a class="header-anchor" href="#练习-第二层级" aria-hidden="true">#</a> 练习：第二层级</h3>
<ol>
<li>
<p>编写代码，根据学生的分数给出等级：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">80</span>-100, A
<span class="token number">70</span>-79, B
<span class="token number">60</span>-69, C
<span class="token number">50</span>-59, D
<span class="token number">0</span>-49, F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>检查是否是秋天、冬天、春天或夏天。如果用户输入：
9 月、10 月或 11 月，是秋天。
12 月、1 月或 2 月，是冬天。
3 月、4 月或 5 月，是春天。
6 月、7 月或 8 月，是夏天。</p>
</li>
<li>
<p>以下列表包含了一些水果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'banana'</span>, <span class="token string">'orange'</span>, <span class="token string">'mango'</span>, <span class="token string">'lemon'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果列表中不存在某个水果，则将其添加到列表中并打印修改后的列表。如果水果存在，则打印('该水果已在列表中')。</p>
</li>
</ol>
<h3 id="练习-第三层级" tabindex="-1"><a class="header-anchor" href="#练习-第三层级" aria-hidden="true">#</a> 练习：第三层级</h3>
<ol>
<li>这里有一个人员字典。请随意修改它！</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'first_name'</span><span class="token punctuation">:</span> <span class="token string">'Asabeneh'</span><span class="token punctuation">,</span>
    <span class="token string">'last_name'</span><span class="token punctuation">:</span> <span class="token string">'Yetayeh'</span><span class="token punctuation">,</span>
    <span class="token string">'age'</span><span class="token punctuation">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
    <span class="token string">'country'</span><span class="token punctuation">:</span> <span class="token string">'芬兰'</span><span class="token punctuation">,</span>
    <span class="token string">'is_married'</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token string">'skills'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'JavaScript'</span><span class="token punctuation">,</span> <span class="token string">'React'</span><span class="token punctuation">,</span> <span class="token string">'Node'</span><span class="token punctuation">,</span> <span class="token string">'MongoDB'</span><span class="token punctuation">,</span> <span class="token string">'Python'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'address'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">'street'</span><span class="token punctuation">:</span> <span class="token string">'太空街'</span><span class="token punctuation">,</span>
        <span class="token string">'zipcode'</span><span class="token punctuation">:</span> <span class="token string">'02210'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>检查是否在字典中有 skills 键，如果有则打印 skills 列表中的中间技能。</li>
<li>检查是否在字典中有 skills 键，如果有则检查该人是否具备'Python'技能并打印结果。</li>
<li>如果一个人的技能只有 JavaScript 和 React，打印('他是前端开发者')，如果一个人的技能有 Node、Python、MongoDB，打印('他是后端开发者')，如果一个人的技能有 React、Node 和 MongoDB，打印('他是全栈开发者')，否则打印'未知头衔' - 为获得更准确的结果，可以嵌套更多条件！</li>
<li>如果该人结婚了且居住在芬兰，按以下格式打印信息：</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>Asabeneh Yetayeh住在芬兰。他已婚。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>🎉 恭喜！ 🎉</p>
<p><RouterLink to="/docs/Python/08_dictionaries.html">&lt;&lt; 第 8 天</RouterLink> | <RouterLink to="/docs/Python/10_loops.html">第 10 天 &gt;&gt;</RouterLink></p>
</div></template>


