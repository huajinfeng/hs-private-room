<template><div><h1 id="_18-文件处理" tabindex="-1"><a class="header-anchor" href="#_18-文件处理" aria-hidden="true">#</a> 18 文件处理</h1>
<p>到目前为止，我们已经了解了不同的Python数据类型。我们通常在不同的文件格式中存储数据。除了处理文件外，在本节中我们还将看到不同的文件格式（.txt、.json、.xml、.csv、.tsv、.excel）。首先，让我们熟悉使用常见文件格式（.txt）处理文件。</p>
<p>文件处理是编程的重要部分，它允许我们创建、读取、更新和删除文件。在Python中，处理数据我们使用内置函数 <em>open()</em>。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 语法</span>
<span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'filename'</span><span class="token punctuation">,</span> mode<span class="token punctuation">)</span> <span class="token comment"># mode(r, a, w, x, t, b) 可以是读取、写入、更新</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>&quot;r&quot; - 读取 - 默认值。打开文件进行读取，如果文件不存在则返回错误</li>
<li>&quot;a&quot; - 追加 - 打开文件进行追加，如果文件不存在则创建文件</li>
<li>&quot;w&quot; - 写入 - 打开文件进行写入，如果文件不存在则创建文件</li>
<li>&quot;x&quot; - 创建 - 创建指定的文件，如果文件已存在则返回错误</li>
<li>&quot;t&quot; - 文本 - 默认值。文本模式</li>
<li>&quot;b&quot; - 二进制 - 二进制模式（例如图像）</li>
</ul>
<h3 id="打开文件进行读取" tabindex="-1"><a class="header-anchor" href="#打开文件进行读取" aria-hidden="true">#</a> 打开文件进行读取</h3>
<p><em>open</em> 的默认模式是读取，因此我们不必指定'r'或'rt'。我已经在files目录中创建并保存了一个名为reading_file_example.txt的文件。让我们看看它是如何完成的：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/reading_file_example.txt'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment"># &lt;_io.TextIOWrapper name='./files/reading_file_example.txt' mode='r' encoding='UTF-8'></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如上例所示，我打印了打开的文件，它提供了一些关于文件的信息。已打开的文件有不同的读取方法：<em>read()</em>、<em>readline</em>、<em>readlines</em>。打开的文件必须用 <em>close()</em> 方法关闭。</p>
<ul>
<li><em>read()</em>：将整个文本作为字符串读取。如果我们想限制想要读取的字符数，可以通过向 <em>read(number)</em> 方法传递int值来限制。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/reading_file_example.txt'</span><span class="token punctuation">)</span>
txt <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
<span class="token operator">&lt;</span>class <span class="token string">'str'</span><span class="token operator">></span>
This is an example to show how to <span class="token function">open</span> a <span class="token function">file</span> and read.
This is the second line of the text.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与其打印所有文本，不如打印文本文件的前10个字符。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/reading_file_example.txt'</span><span class="token punctuation">)</span>
txt <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
<span class="token operator">&lt;</span>class <span class="token string">'str'</span><span class="token operator">></span>
This is an
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><em>readline()</em>：只读取第一行</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/reading_file_example.txt'</span><span class="token punctuation">)</span>
line <span class="token operator">=</span> f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
<span class="token operator">&lt;</span>class <span class="token string">'str'</span><span class="token operator">></span>
This is an example to show how to <span class="token function">open</span> a <span class="token function">file</span> and read.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><em>readlines()</em>：逐行读取所有文本，并返回一个行列表</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/reading_file_example.txt'</span><span class="token punctuation">)</span>
lines <span class="token operator">=</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>lines<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lines<span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
<span class="token operator">&lt;</span>class <span class="token string">'list'</span><span class="token operator">></span>
<span class="token punctuation">[</span><span class="token string">'This is an example to show how to open a file and read.\n'</span>, <span class="token string">'This is the second line of the text.'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取所有行作为列表的另一种方法是使用 <em>splitlines()</em>：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/reading_file_example.txt'</span><span class="token punctuation">)</span>
lines <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>lines<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lines<span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
<span class="token operator">&lt;</span>class <span class="token string">'list'</span><span class="token operator">></span>
<span class="token punctuation">[</span><span class="token string">'This is an example to show how to open a file and read.'</span>, <span class="token string">'This is the second line of the text.'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在打开文件后，我们应该关闭它。我们很容易忘记关闭它们。有一种使用 <em>with</em> 打开文件的新方法——它会自动关闭文件。让我们用 <em>with</em> 方法重写前面的例子：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/reading_file_example.txt'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    lines <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>lines<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>lines<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
<span class="token operator">&lt;</span>class <span class="token string">'list'</span><span class="token operator">></span>
<span class="token punctuation">[</span><span class="token string">'This is an example to show how to open a file and read.'</span>, <span class="token string">'This is the second line of the text.'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打开文件进行写入和更新" tabindex="-1"><a class="header-anchor" href="#打开文件进行写入和更新" aria-hidden="true">#</a> 打开文件进行写入和更新</h3>
<p>要写入现有文件，我们必须向 <em>open()</em> 函数添加模式作为参数：</p>
<ul>
<li>&quot;a&quot; - 追加 - 将在文件末尾追加，如果文件不存在则创建一个新文件。</li>
<li>&quot;w&quot; - 写入 - 将覆盖任何现有内容，如果文件不存在则创建。</li>
</ul>
<p>让我们在我们一直在读取的文件中追加一些文本：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/reading_file_example.txt'</span><span class="token punctuation">,</span><span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">'此文本必须附加在末尾'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果文件不存在，以下方法将创建一个新文件：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/writing_file_example.txt'</span><span class="token punctuation">,</span><span class="token string">'w'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">'这段文本将被写入新创建的文件中'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h3>
<p>我们在前面的部分中已经看到，如何使用 <em>os</em> 模块创建和删除目录。现在，如果我们想删除一个文件，我们也使用 <em>os</em> 模块。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> os
os<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">'./files/example.txt'</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果文件不存在，remove方法将引发错误，因此最好使用条件语句：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">'./files/example.txt'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    os<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">'./files/example.txt'</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'文件不存在'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件类型" tabindex="-1"><a class="header-anchor" href="#文件类型" aria-hidden="true">#</a> 文件类型</h2>
<h3 id="带有txt扩展名的文件" tabindex="-1"><a class="header-anchor" href="#带有txt扩展名的文件" aria-hidden="true">#</a> 带有txt扩展名的文件</h3>
<p>带有 <em>txt</em> 扩展名的文件是一种非常常见的数据形式，我们已经在前面的部分中介绍了它。让我们转到JSON文件。</p>
<h3 id="带有json扩展名的文件" tabindex="-1"><a class="header-anchor" href="#带有json扩展名的文件" aria-hidden="true">#</a> 带有json扩展名的文件</h3>
<p>JSON代表JavaScript对象表示法。实际上，它是一个字符串化的JavaScript对象或Python字典。</p>
<p><em>示例:</em></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 字典</span>
person_dct<span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"Asabeneh"</span><span class="token punctuation">,</span>
    <span class="token string">"country"</span><span class="token punctuation">:</span><span class="token string">"Finland"</span><span class="token punctuation">,</span>
    <span class="token string">"city"</span><span class="token punctuation">:</span><span class="token string">"Helsinki"</span><span class="token punctuation">,</span>
    <span class="token string">"skills"</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">"JavaScrip"</span><span class="token punctuation">,</span> <span class="token string">"React"</span><span class="token punctuation">,</span><span class="token string">"Python"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment"># JSON: 字典的字符串形式</span>
person_json <span class="token operator">=</span> <span class="token string">"{'name': 'Asabeneh', 'country': 'Finland', 'city': 'Helsinki', 'skills': ['JavaScrip', 'React', 'Python']}"</span>

<span class="token comment"># 我们使用三个引号并使其多行以使其更具可读性</span>
person_json <span class="token operator">=</span> <span class="token triple-quoted-string string">'''{
    "name":"Asabeneh",
    "country":"Finland",
    "city":"Helsinki",
    "skills":["JavaScrip", "React","Python"]
}'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将json转换为字典" tabindex="-1"><a class="header-anchor" href="#将json转换为字典" aria-hidden="true">#</a> 将JSON转换为字典</h3>
<p>要将JSON更改为字典，首先我们导入json模块，然后使用 <em>loads</em> 方法。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token comment"># JSON</span>
person_json <span class="token operator">=</span> <span class="token triple-quoted-string string">'''{
    "name": "Asabeneh",
    "country": "Finland",
    "city": "Helsinki",
    "skills": ["JavaScrip", "React", "Python"]
}'''</span>
<span class="token comment"># 将JSON字符串更改为字典</span>
person_dct <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>person_json<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>person_dct<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person_dct<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person_dct<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
<span class="token operator">&lt;</span>class <span class="token string">'dict'</span><span class="token operator">></span>
<span class="token punctuation">{</span><span class="token string">'name'</span><span class="token builtin class-name">:</span> <span class="token string">'Asabeneh'</span>, <span class="token string">'country'</span><span class="token builtin class-name">:</span> <span class="token string">'Finland'</span>, <span class="token string">'city'</span><span class="token builtin class-name">:</span> <span class="token string">'Helsinki'</span>, <span class="token string">'skills'</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">'JavaScrip'</span>, <span class="token string">'React'</span>, <span class="token string">'Python'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
Asabeneh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将字典转换为json" tabindex="-1"><a class="header-anchor" href="#将字典转换为json" aria-hidden="true">#</a> 将字典转换为JSON</h3>
<p>要将字典更改为JSON，我们使用 <em>dumps</em> 方法。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token comment"># python字典</span>
person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"Asabeneh"</span><span class="token punctuation">,</span>
    <span class="token string">"country"</span><span class="token punctuation">:</span> <span class="token string">"Finland"</span><span class="token punctuation">,</span>
    <span class="token string">"city"</span><span class="token punctuation">:</span> <span class="token string">"Helsinki"</span><span class="token punctuation">,</span>
    <span class="token string">"skills"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"JavaScrip"</span><span class="token punctuation">,</span> <span class="token string">"React"</span><span class="token punctuation">,</span> <span class="token string">"Python"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment"># 将字典转换为JSON字符串</span>
person_json <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>person<span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment"># indent可以是2, 4, 8. 它漂亮地打印了。</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>person_json<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person_json<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
<span class="token operator">&lt;</span>class <span class="token string">'str'</span><span class="token operator">></span>
<span class="token punctuation">{</span>
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Asabeneh"</span>,
    <span class="token string">"country"</span><span class="token builtin class-name">:</span> <span class="token string">"Finland"</span>,
    <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Helsinki"</span>,
    <span class="token string">"skills"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">"JavaScrip"</span>,
        <span class="token string">"React"</span>,
        <span class="token string">"Python"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保存为json文件" tabindex="-1"><a class="header-anchor" href="#保存为json文件" aria-hidden="true">#</a> 保存为JSON文件</h3>
<p>我们也可以将我们的数据保存为JSON文件。让我们使用前面的示例保存：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token comment"># python字典</span>
person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"Asabeneh"</span><span class="token punctuation">,</span>
    <span class="token string">"country"</span><span class="token punctuation">:</span> <span class="token string">"Finland"</span><span class="token punctuation">,</span>
    <span class="token string">"city"</span><span class="token punctuation">:</span> <span class="token string">"Helsinki"</span><span class="token punctuation">,</span>
    <span class="token string">"skills"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"JavaScrip"</span><span class="token punctuation">,</span> <span class="token string">"React"</span><span class="token punctuation">,</span> <span class="token string">"Python"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/json_example.json'</span><span class="token punctuation">,</span> <span class="token string">'w'</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    json<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>person<span class="token punctuation">,</span> f<span class="token punctuation">,</span> ensure_ascii<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们使用了编码和确保_ascii参数。这些参数是为了保存非ASCII字符，如果我们想保存非英语字符。下面是一个包含非ASCII字符的示例：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token comment"># python字典</span>
person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
    <span class="token string">"country"</span><span class="token punctuation">:</span> <span class="token string">"中国"</span><span class="token punctuation">,</span>
    <span class="token string">"city"</span><span class="token punctuation">:</span> <span class="token string">"北京"</span><span class="token punctuation">,</span>
    <span class="token string">"skills"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"JavaScript"</span><span class="token punctuation">,</span> <span class="token string">"React"</span><span class="token punctuation">,</span> <span class="token string">"Python"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/json_example.json'</span><span class="token punctuation">,</span> <span class="token string">'w'</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    json<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>person<span class="token punctuation">,</span> f<span class="token punctuation">,</span> ensure_ascii<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，让我们读取我们刚刚创建的json文件：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/json_example.json'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    person <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
<span class="token punctuation">{</span><span class="token string">'name'</span><span class="token builtin class-name">:</span> <span class="token string">'张三'</span>, <span class="token string">'country'</span><span class="token builtin class-name">:</span> <span class="token string">'中国'</span>, <span class="token string">'city'</span><span class="token builtin class-name">:</span> <span class="token string">'北京'</span>, <span class="token string">'skills'</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">'JavaScript'</span>, <span class="token string">'React'</span>, <span class="token string">'Python'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有csv扩展名的文件" tabindex="-1"><a class="header-anchor" href="#带有csv扩展名的文件" aria-hidden="true">#</a> 带有csv扩展名的文件</h3>
<p>CSV代表逗号分隔值。CSV是一种简单的文件格式，用于存储表格数据，如电子表格或数据库。CSV是数据科学中非常常见的数据格式。</p>
<p><strong>示例：</strong></p>
<div class="language-csv line-numbers-mode" data-ext="csv"><pre v-pre class="language-csv"><code><span class="token value">"name"</span><span class="token punctuation">,</span><span class="token value">"country"</span><span class="token punctuation">,</span><span class="token value">"city"</span><span class="token punctuation">,</span><span class="token value">"skills"</span>
<span class="token value">"Asabeneh"</span><span class="token punctuation">,</span><span class="token value">"Finland"</span><span class="token punctuation">,</span><span class="token value">"Helsinki"</span><span class="token punctuation">,</span><span class="token value">"JavaScript"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> csv
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/csv_example.csv'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    csv_reader <span class="token operator">=</span> csv<span class="token punctuation">.</span>reader<span class="token punctuation">(</span>f<span class="token punctuation">,</span> delimiter<span class="token operator">=</span><span class="token string">','</span><span class="token punctuation">)</span> <span class="token comment"># w+ 创建文件（如果不存在）</span>
    line_count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> row <span class="token keyword">in</span> csv_reader<span class="token punctuation">:</span>
        <span class="token keyword">if</span> line_count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'列名为: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token string">", "</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
            line_count <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>row<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">来自</span><span class="token interpolation"><span class="token punctuation">{</span>row<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">的</span><span class="token interpolation"><span class="token punctuation">{</span>row<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">。 他了解</span><span class="token interpolation"><span class="token punctuation">{</span>row<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
            line_count <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'已处理</span><span class="token interpolation"><span class="token punctuation">{</span>line_count<span class="token punctuation">}</span></span><span class="token string">行。'</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出:</span>
列名为: name, country, city, skills
Asabeneh来自Finland的Helsinki。 他了解JavaScript
已处理2行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以使用相同的方法将数据写入csv文件</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> csv
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'./files/csv_example.csv'</span><span class="token punctuation">,</span> <span class="token string">'w'</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">'UTF8'</span><span class="token punctuation">,</span> newline<span class="token operator">=</span><span class="token string">''</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    writer <span class="token operator">=</span> csv<span class="token punctuation">.</span>writer<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token comment"># 写入列名</span>
    writer<span class="token punctuation">.</span>writerow<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'country'</span><span class="token punctuation">,</span> <span class="token string">'city'</span><span class="token punctuation">,</span> <span class="token string">'skills'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># 写入数据</span>
    writer<span class="token punctuation">.</span>writerow<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Asabeneh'</span><span class="token punctuation">,</span> <span class="token string">'Finland'</span><span class="token punctuation">,</span> <span class="token string">'Helsinki'</span><span class="token punctuation">,</span> <span class="token string">'JavaScript'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有xlsx扩展名的文件" tabindex="-1"><a class="header-anchor" href="#带有xlsx扩展名的文件" aria-hidden="true">#</a> 带有xlsx扩展名的文件</h3>
<p>要读取Excel文件，我们需要安装xlrd包。我们将使用它来读取Excel文件。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> xlrd
excel_book <span class="token operator">=</span> xlrd<span class="token punctuation">.</span>open_workbook<span class="token punctuation">(</span><span class="token string">'sample.xls'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>excel_book<span class="token punctuation">.</span>nsheets<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>excel_book<span class="token punctuation">.</span>sheet_names<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有xml扩展名的文件" tabindex="-1"><a class="header-anchor" href="#带有xml扩展名的文件" aria-hidden="true">#</a> 带有xml扩展名的文件</h3>
<p>XML是一种元标记语言，非常类似于HTML。在XML中，我们可以使用自己的标签，从而使其更加灵活。我们使用XML主要是为了结构化数据。在Python中有少量的XML库。在本部分中，我们将使用xml.etree.ElementTree模块。</p>
<p><strong>示例：XML</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>person</span> <span class="token attr-name">gender</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>female<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>Asabeneh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>country</span><span class="token punctuation">></span></span>Finland<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>country</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>city</span><span class="token punctuation">></span></span>Helsinki<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>city</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skills</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skill</span><span class="token punctuation">></span></span>JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skill</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skill</span><span class="token punctuation">></span></span>React<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skill</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skill</span><span class="token punctuation">></span></span>Python<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skill</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skills</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>person</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将使用xml.etree.ElementTree模块来解析XML文件。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> xml<span class="token punctuation">.</span>etree<span class="token punctuation">.</span>ElementTree <span class="token keyword">as</span> ET
tree <span class="token operator">=</span> ET<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">'./files/xml_example.xml'</span><span class="token punctuation">)</span>
root <span class="token operator">=</span> tree<span class="token punctuation">.</span>getroot<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Root tag:'</span><span class="token punctuation">,</span> root<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Attribute:'</span><span class="token punctuation">,</span> root<span class="token punctuation">.</span>attrib<span class="token punctuation">)</span>
<span class="token keyword">for</span> child <span class="token keyword">in</span> root<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'字段: '</span><span class="token punctuation">,</span> child<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
Root tag: person
Attribute: <span class="token punctuation">{</span><span class="token string">'gender'</span><span class="token builtin class-name">:</span> <span class="token string">'female'</span><span class="token punctuation">}</span>
字段:  name
字段:  country
字段:  city
字段:  skills
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> xml<span class="token punctuation">.</span>etree<span class="token punctuation">.</span>ElementTree <span class="token keyword">as</span> ET
tree <span class="token operator">=</span> ET<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">'./files/xml_example.xml'</span><span class="token punctuation">)</span>
root <span class="token operator">=</span> tree<span class="token punctuation">.</span>getroot<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Root tag:'</span><span class="token punctuation">,</span> root<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Attribute:'</span><span class="token punctuation">,</span> root<span class="token punctuation">.</span>attrib<span class="token punctuation">)</span>
<span class="token keyword">for</span> child <span class="token keyword">in</span> root<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'字段: '</span><span class="token punctuation">,</span> child<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
Root tag: person
Attribute: <span class="token punctuation">{</span><span class="token string">'gender'</span><span class="token builtin class-name">:</span> <span class="token string">'female'</span><span class="token punctuation">}</span>
字段:  name
字段:  country
字段:  city
字段:  skills
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们获取更多细节：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> xml<span class="token punctuation">.</span>etree<span class="token punctuation">.</span>ElementTree <span class="token keyword">as</span> ET
tree <span class="token operator">=</span> ET<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">'./files/xml_example.xml'</span><span class="token punctuation">)</span>
root <span class="token operator">=</span> tree<span class="token punctuation">.</span>getroot<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Root tag:'</span><span class="token punctuation">,</span> root<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Attribute:'</span><span class="token punctuation">,</span> root<span class="token punctuation">.</span>attrib<span class="token punctuation">)</span>
<span class="token keyword">for</span> child <span class="token keyword">in</span> root<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'field: '</span><span class="token punctuation">,</span> child<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
    <span class="token keyword">if</span> child<span class="token punctuation">.</span>tag <span class="token operator">!=</span> <span class="token string">'skills'</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> skill <span class="token keyword">in</span> child<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>skill<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出</span>
Root tag: person
Attribute: <span class="token punctuation">{</span><span class="token string">'gender'</span><span class="token builtin class-name">:</span> <span class="token string">'female'</span><span class="token punctuation">}</span>
field:  name
Asabeneh
field:  country
Finland
field:  city
Helsinki
field:  skills
JavaScript
React
Python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💻-练习-第19天" tabindex="-1"><a class="header-anchor" href="#💻-练习-第19天" aria-hidden="true">#</a> 💻 练习：第19天</h2>
<h3 id="练习-级别1" tabindex="-1"><a class="header-anchor" href="#练习-级别1" aria-hidden="true">#</a> 练习：级别1</h3>
<ol>
<li>编写一个函数，该函数需要一个参数（文件名）并统计文件中单词的数量</li>
<li>阅读obama_speech.txt文件并计算单词数</li>
<li>阅读michelle_obama_speech.txt文件并计算单词数</li>
<li>阅读donald_speech.txt文件并计算单词数</li>
<li>阅读melina_trump_speech.txt文件并计算单词数</li>
</ol>
<h3 id="练习-级别2" tabindex="-1"><a class="header-anchor" href="#练习-级别2" aria-hidden="true">#</a> 练习：级别2</h3>
<ol>
<li>从编程语言中提取所有Python目录文件：
a) 处理30DaysOfPython文件夹，提取出所有python文件，并将它们的名称存储在files_list.txt文件中
b) 创建一个名为find_python.py的脚本，可以通过命令行运行它
c) 添加一个名为--version的标志来处理命令行参数</li>
</ol>
<h3 id="练习-级别3" tabindex="-1"><a class="header-anchor" href="#练习-级别3" aria-hidden="true">#</a> 练习：级别3</h3>
<ol>
<li>使用以下数据集创建一个JSON文件：<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>python_libraries <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
    <span class="token string">"库名称"</span><span class="token punctuation">:</span> <span class="token string">"Django"</span><span class="token punctuation">,</span>
    <span class="token string">"创建者"</span><span class="token punctuation">:</span> <span class="token string">"Adrian Holovaty"</span><span class="token punctuation">,</span>
    <span class="token string">"首次发布年份"</span><span class="token punctuation">:</span> <span class="token number">2005</span><span class="token punctuation">,</span>
    <span class="token string">"版本"</span><span class="token punctuation">:</span> <span class="token string">"4.0.2"</span><span class="token punctuation">,</span>
    <span class="token string">"用途"</span><span class="token punctuation">:</span> <span class="token string">"Web开发"</span><span class="token punctuation">,</span>
    <span class="token string">"描述"</span><span class="token punctuation">:</span> <span class="token string">"Django让您可以快速构建更好的Web应用程序。"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token string">"库名称"</span><span class="token punctuation">:</span> <span class="token string">"Flask"</span><span class="token punctuation">,</span>
    <span class="token string">"创建者"</span><span class="token punctuation">:</span> <span class="token string">"Armin Ronacher"</span><span class="token punctuation">,</span>
    <span class="token string">"首次发布年份"</span><span class="token punctuation">:</span> <span class="token number">2010</span><span class="token punctuation">,</span>
    <span class="token string">"版本"</span><span class="token punctuation">:</span> <span class="token string">"2.0.2"</span><span class="token punctuation">,</span>
    <span class="token string">"用途"</span><span class="token punctuation">:</span> <span class="token string">"Web开发"</span><span class="token punctuation">,</span>
    <span class="token string">"描述"</span><span class="token punctuation">:</span> <span class="token string">"Flask是一个轻量级的WSGI Web应用程序框架。"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token string">"库名称"</span><span class="token punctuation">:</span> <span class="token string">"NumPy"</span><span class="token punctuation">,</span>
    <span class="token string">"创建者"</span><span class="token punctuation">:</span> <span class="token string">"Travis Oliphant"</span><span class="token punctuation">,</span>
    <span class="token string">"首次发布年份"</span><span class="token punctuation">:</span> <span class="token number">2005</span><span class="token punctuation">,</span>
    <span class="token string">"版本"</span><span class="token punctuation">:</span> <span class="token string">"1.22.0"</span><span class="token punctuation">,</span>
    <span class="token string">"用途"</span><span class="token punctuation">:</span> <span class="token string">"科学计算"</span><span class="token punctuation">,</span>
    <span class="token string">"描述"</span><span class="token punctuation">:</span> <span class="token string">"NumPy是Python中用于科学计算的基础包。"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token string">"库名称"</span><span class="token punctuation">:</span> <span class="token string">"Pandas"</span><span class="token punctuation">,</span>
    <span class="token string">"创建者"</span><span class="token punctuation">:</span> <span class="token string">"Wes McKinney"</span><span class="token punctuation">,</span>
    <span class="token string">"首次发布年份"</span><span class="token punctuation">:</span> <span class="token number">2008</span><span class="token punctuation">,</span>
    <span class="token string">"版本"</span><span class="token punctuation">:</span> <span class="token string">"1.4.0"</span><span class="token punctuation">,</span>
    <span class="token string">"用途"</span><span class="token punctuation">:</span> <span class="token string">"数据分析"</span><span class="token punctuation">,</span>
    <span class="token string">"描述"</span><span class="token punctuation">:</span> <span class="token string">"pandas是一个用于数据分析和数据操作的开源库。"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token string">"库名称"</span><span class="token punctuation">:</span> <span class="token string">"Matplotlib"</span><span class="token punctuation">,</span>
    <span class="token string">"创建者"</span><span class="token punctuation">:</span> <span class="token string">"John D. Hunter"</span><span class="token punctuation">,</span>
    <span class="token string">"首次发布年份"</span><span class="token punctuation">:</span> <span class="token number">2003</span><span class="token punctuation">,</span>
    <span class="token string">"版本"</span><span class="token punctuation">:</span> <span class="token string">"3.5.1"</span><span class="token punctuation">,</span>
    <span class="token string">"用途"</span><span class="token punctuation">:</span> <span class="token string">"数据可视化"</span><span class="token punctuation">,</span>
    <span class="token string">"描述"</span><span class="token punctuation">:</span> <span class="token string">"Matplotlib是一个用于在Python中创建静态、动画和交互式可视化的库。"</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>🎉 恭喜！🎉</p>
<p><RouterLink to="/docs/Python/18_regular_expressions_cn.html">&lt;&lt; 第 18 天</RouterLink> | <RouterLink to="/docs/Python/20_python_package_manager_cn.html">第 20 天 &gt;&gt;</RouterLink></p>
</div></template>


