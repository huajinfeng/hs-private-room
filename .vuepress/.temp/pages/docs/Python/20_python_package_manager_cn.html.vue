<template><div><h1 id="_30天python编程挑战-第20天-pip" tabindex="-1"><a class="header-anchor" href="#_30天python编程挑战-第20天-pip" aria-hidden="true">#</a> 30天Python编程挑战：第20天 - PIP</h1>
<ul>
<li><a href="#-%E7%AC%AC20%E5%A4%A9">第20天</a>
<ul>
<li><a href="#python-pip---python%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8">Python PIP - Python包管理器</a>
<ul>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AFpip">什么是PIP？</a></li>
<li><a href="#%E5%AE%89%E8%A3%85pip">安装PIP</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8pip%E5%AE%89%E8%A3%85%E5%8C%85">使用pip安装包</a></li>
<li><a href="#%E5%8D%B8%E8%BD%BD%E5%8C%85">卸载包</a></li>
<li><a href="#%E5%8C%85%E5%88%97%E8%A1%A8">包列表</a></li>
<li><a href="#%E6%98%BE%E7%A4%BA%E5%8C%85%E4%BF%A1%E6%81%AF">显示包信息</a></li>
<li><a href="#pip-freeze">PIP Freeze</a></li>
<li><a href="#%E4%BB%8Eurl%E8%AF%BB%E5%8F%96%E6%95%B0%E6%8D%AE">从URL读取数据</a></li>
<li><a href="#%E5%88%9B%E5%BB%BA%E5%8C%85">创建包</a></li>
<li><a href="#%E5%85%B3%E4%BA%8E%E5%8C%85%E7%9A%84%E6%9B%B4%E5%A4%9A%E4%BF%A1%E6%81%AF">关于包的更多信息</a></li>
</ul>
</li>
<li><a href="#%E7%BB%83%E4%B9%A0%E7%AC%AC20%E5%A4%A9">练习：第20天</a></li>
</ul>
</li>
</ul>
<h1 id="📘-第20天" tabindex="-1"><a class="header-anchor" href="#📘-第20天" aria-hidden="true">#</a> 📘 第20天</h1>
<h2 id="python-pip-python包管理器" tabindex="-1"><a class="header-anchor" href="#python-pip-python包管理器" aria-hidden="true">#</a> Python PIP - Python包管理器</h2>
<h3 id="什么是pip" tabindex="-1"><a class="header-anchor" href="#什么是pip" aria-hidden="true">#</a> 什么是PIP？</h3>
<p>PIP代表首选安装程序(Preferred installer program)。我们使用_pip_来安装不同的Python包。
包是一个Python模块，可以包含一个或多个模块或其他包。我们可以安装到应用程序中的模块或模块集合就是一个包。
在编程中，我们不必编写每个实用程序，而是安装包并将它们导入到我们的应用程序中。</p>
<h3 id="安装pip" tabindex="-1"><a class="header-anchor" href="#安装pip" aria-hidden="true">#</a> 安装PIP</h3>
<p>如果你还没有安装pip，让我们现在安装它。转到你的终端或命令提示符，复制并粘贴：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>asabeneh@Asabeneh:~$ pip <span class="token function">install</span> pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过以下命令检查pip是否已安装：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>asabeneh@Asabeneh<span class="token punctuation">:</span><span class="token operator">~</span>$ pip <span class="token operator">-</span><span class="token operator">-</span>version
pip <span class="token number">21.1</span><span class="token number">.3</span> <span class="token keyword">from</span> <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>lib<span class="token operator">/</span>python3<span class="token punctuation">.</span><span class="token number">7</span><span class="token operator">/</span>site<span class="token operator">-</span>packages<span class="token operator">/</span>pip <span class="token punctuation">(</span>python <span class="token number">3.9</span><span class="token number">.6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如你所见，我正在使用pip 21.1.3版本，如果你看到的数字比这个稍低或稍高，说明你已经安装了pip。</p>
<p>让我们了解一下Python社区中用于不同目的的一些包。请注意，有很多可用于不同应用程序的包。</p>
<h3 id="使用pip安装包" tabindex="-1"><a class="header-anchor" href="#使用pip安装包" aria-hidden="true">#</a> 使用pip安装包</h3>
<p>让我们尝试安装_numpy_，即数值Python。它是机器学习和数据科学社区中最流行的包之一。</p>
<ul>
<li>NumPy是Python科学计算的基础包。它包含以下内容：
<ul>
<li>强大的N维数组对象</li>
<li>复杂的（广播）函数</li>
<li>用于集成C/C++和Fortran代码的工具</li>
<li>有用的线性代数、傅里叶变换和随机数功能</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>asabeneh@Asabeneh:~$ pip <span class="token function">install</span> numpy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>让我们开始使用numpy。打开你的Python交互式shell，输入python，然后按如下方式导入numpy：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>asabeneh@Asabeneh<span class="token punctuation">:</span><span class="token operator">~</span>$ python
Python <span class="token number">3.9</span><span class="token number">.6</span> <span class="token punctuation">(</span>default<span class="token punctuation">,</span> Jun <span class="token number">28</span> <span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">:</span><span class="token number">26</span><span class="token punctuation">:</span><span class="token number">21</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>Clang <span class="token number">11.0</span><span class="token number">.0</span> <span class="token punctuation">(</span>clang<span class="token operator">-</span><span class="token number">1100.0</span><span class="token number">.33</span><span class="token number">.8</span><span class="token punctuation">)</span><span class="token punctuation">]</span> on darwin
Type <span class="token string">"help"</span><span class="token punctuation">,</span> <span class="token string">"copyright"</span><span class="token punctuation">,</span> <span class="token string">"credits"</span> <span class="token keyword">or</span> <span class="token string">"license"</span> <span class="token keyword">for</span> more information<span class="token punctuation">.</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">import</span> numpy
<span class="token operator">>></span><span class="token operator">></span> numpy<span class="token punctuation">.</span>version<span class="token punctuation">.</span>version
<span class="token string">'1.20.1'</span>
<span class="token operator">>></span><span class="token operator">></span> lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token operator">>></span><span class="token operator">></span> np_arr <span class="token operator">=</span> numpy<span class="token punctuation">.</span>array<span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token operator">>></span><span class="token operator">></span> np_arr
array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token builtin">len</span><span class="token punctuation">(</span>np_arr<span class="token punctuation">)</span>
<span class="token number">5</span>
<span class="token operator">>></span><span class="token operator">></span> np_arr <span class="token operator">*</span> <span class="token number">2</span>
array<span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token number">2</span><span class="token punctuation">,</span>  <span class="token number">4</span><span class="token punctuation">,</span>  <span class="token number">6</span><span class="token punctuation">,</span>  <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">>></span><span class="token operator">></span> np_arr  <span class="token operator">+</span> <span class="token number">2</span>
array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">>></span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pandas是一个开源的、BSD许可的库，为Python编程语言提供高性能、易用的数据结构和数据分析工具。让我们安装numpy的&quot;大兄弟&quot;<em>pandas</em>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>asabeneh@Asabeneh:~$ pip <span class="token function">install</span> pandas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>asabeneh@Asabeneh<span class="token punctuation">:</span><span class="token operator">~</span>$ python
Python <span class="token number">3.9</span><span class="token number">.6</span> <span class="token punctuation">(</span>default<span class="token punctuation">,</span> Jun <span class="token number">28</span> <span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">:</span><span class="token number">26</span><span class="token punctuation">:</span><span class="token number">21</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>Clang <span class="token number">11.0</span><span class="token number">.0</span> <span class="token punctuation">(</span>clang<span class="token operator">-</span><span class="token number">1100.0</span><span class="token number">.33</span><span class="token number">.8</span><span class="token punctuation">)</span><span class="token punctuation">]</span> on darwin
Type <span class="token string">"help"</span><span class="token punctuation">,</span> <span class="token string">"copyright"</span><span class="token punctuation">,</span> <span class="token string">"credits"</span> <span class="token keyword">or</span> <span class="token string">"license"</span> <span class="token keyword">for</span> more information<span class="token punctuation">.</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">import</span> pandas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这一节不是关于numpy或pandas的，我们在这里尝试学习如何安装包以及如何导入它们。如果需要，我们将在其他章节讨论不同的包。</p>
<p>让我们导入一个Web浏览器模块，它可以帮助我们打开任何网站。我们不需要安装这个模块，它已经默认安装在Python 3中。例如，如果你想随时打开任意数量的网站，或者如果你想安排某些事情，可以使用这个_webbrowser_模块。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> webbrowser <span class="token comment"># web浏览器模块用于打开网站</span>

<span class="token comment"># 网址列表：Python</span>
url_lists <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">'http://www.python.org'</span><span class="token punctuation">,</span>
    <span class="token string">'https://www.linkedin.com/in/asabeneh/'</span><span class="token punctuation">,</span>
    <span class="token string">'https://github.com/Asabeneh'</span><span class="token punctuation">,</span>
    <span class="token string">'https://twitter.com/Asabeneh'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment"># 在不同的标签页中打开上面的网站列表</span>
<span class="token keyword">for</span> url <span class="token keyword">in</span> url_lists<span class="token punctuation">:</span>
    webbrowser<span class="token punctuation">.</span>open_new_tab<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载包" tabindex="-1"><a class="header-anchor" href="#卸载包" aria-hidden="true">#</a> 卸载包</h3>
<p>如果你不想保留已安装的包，可以使用以下命令删除它们。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip uninstall packagename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="包列表" tabindex="-1"><a class="header-anchor" href="#包列表" aria-hidden="true">#</a> 包列表</h3>
<p>要查看我们机器上已安装的包，我们可以使用pip后跟list。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示包信息" tabindex="-1"><a class="header-anchor" href="#显示包信息" aria-hidden="true">#</a> 显示包信息</h3>
<p>要显示有关包的信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip show packagename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>asabeneh@Asabeneh:~$ pip show pandas
Name: pandas
Version: <span class="token number">1.2</span>.3
Summary: Powerful data structures <span class="token keyword">for</span> data analysis, <span class="token function">time</span> series, and statistics
Home-page: http://pandas.pydata.org
Author: None
Author-email: None
License: BSD
Location: /usr/local/lib/python3.7/site-packages
Requires: python-dateutil, pytz, numpy
Required-by:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想要更多的详细信息，只需添加--verbose</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>asabeneh@Asabeneh:~$ pip show <span class="token parameter variable">--verbose</span> pandas
Name: pandas
Version: <span class="token number">1.2</span>.3
Summary: Powerful data structures <span class="token keyword">for</span> data analysis, <span class="token function">time</span> series, and statistics
Home-page: http://pandas.pydata.org
Author: None
Author-email: None
License: BSD
Location: /usr/local/lib/python3.7/site-packages
Requires: numpy, pytz, python-dateutil
Required-by:
Metadata-Version: <span class="token number">2.1</span>
Installer: pip
Classifiers:
  Development Status :: <span class="token number">5</span> - Production/Stable
  Environment :: Console
  Operating System :: OS Independent
  Intended Audience :: Science/Research
  Programming Language :: Python
  Programming Language :: Python :: <span class="token number">3</span>
  Programming Language :: Python :: <span class="token number">3.5</span>
  Programming Language :: Python :: <span class="token number">3.6</span>
  Programming Language :: Python :: <span class="token number">3.7</span>
  Programming Language :: Python :: <span class="token number">3.8</span>
  Programming Language :: Cython
  Topic :: Scientific/Engineering
Entry-points:
  <span class="token punctuation">[</span>pandas_plotting_backends<span class="token punctuation">]</span>
  matplotlib <span class="token operator">=</span> pandas:plotting._matplotlib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pip-freeze" tabindex="-1"><a class="header-anchor" href="#pip-freeze" aria-hidden="true">#</a> PIP Freeze</h3>
<p>生成已安装的Python包及其版本，输出适合在requirements文件中使用。requirements.txt文件是一个包含Python项目中所有已安装的Python包的文件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>asabeneh@Asabeneh:~$ pip freeze
<span class="token assign-left variable">docutils</span><span class="token operator">==</span><span class="token number">0.11</span>
<span class="token assign-left variable">Jinja2</span><span class="token operator">==</span><span class="token number">2.7</span>.2
<span class="token assign-left variable">MarkupSafe</span><span class="token operator">==</span><span class="token number">0.19</span>
<span class="token assign-left variable">Pygments</span><span class="token operator">==</span><span class="token number">1.6</span>
<span class="token assign-left variable">Sphinx</span><span class="token operator">==</span><span class="token number">1.2</span>.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pip freeze给我们列出了使用的、已安装的包及其版本。我们将它与requirements.txt文件一起用于部署。</p>
<h3 id="从url读取数据" tabindex="-1"><a class="header-anchor" href="#从url读取数据" aria-hidden="true">#</a> 从URL读取数据</h3>
<p>到目前为止，你已经熟悉了如何读取或写入位于本地机器上的文件。有时，我们想要使用url从网站或API读取数据。
API代表应用程序编程接口。它是一种在服务器之间交换结构化数据的方式，主要是json数据。要打开网络连接，我们需要一个名为_requests_的包——它允许打开网络连接并实现CRUD（创建、读取、更新和删除）操作。在本节中，我们将只涵盖CRUD的读取或获取部分。</p>
<p>让我们安装_requests_：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>asabeneh@Asabeneh<span class="token punctuation">:</span><span class="token operator">~</span>$ pip install requests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们将在_requests_模块中看到_get_、<em>status_code</em>、<em>headers</em>、_text_和_json_方法：</p>
<ul>
<li><em>get()</em>：打开网络并从url获取数据——它返回一个响应对象</li>
<li><em>status_code</em>：在我们获取数据后，我们可以检查操作的状态（成功、错误等）</li>
<li><em>headers</em>：检查头部类型</li>
<li><em>text</em>：从获取的响应对象中提取文本</li>
<li><em>json</em>：提取json数据
让我们从这个网站读取一个txt文件，https://www.w3.org/TR/PNG/iso_8859-1.txt。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests <span class="token comment"># 导入请求模块</span>

url <span class="token operator">=</span> <span class="token string">'https://www.w3.org/TR/PNG/iso_8859-1.txt'</span> <span class="token comment"># 来自网站的文本</span>

response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token comment"># 打开网络并获取数据</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span> <span class="token comment"># 状态码，成功时为200</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span>     <span class="token comment"># 获取响应的头部信息</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token comment"># 获取文本数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们读取一个API并得到一个json数据：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
url <span class="token operator">=</span> <span class="token string">'https://restcountries.eu/rest/v2/all'</span>  <span class="token comment"># 包含关于250多个国家的信息的国家API</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>  <span class="token comment"># 打开网络并获取数据</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token comment"># 响应对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span>  <span class="token comment"># 状态码，成功时为200</span>
countries <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>countries<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 我们只打印第一个国家信息，原始数据太大</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们用一个国家API示例获取了json数据。我们可以导入json模块，并使用json.loads(response.text)方法将文本转换为json格式。然而，我们也可以直接使用response.json()方法。</p>
<p>Let us see another example similar to the above but with a different API, world_bank_ethiopia data:
让我们看另一个类似于上面的例子，但使用不同的API，世界银行埃塞俄比亚数据：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> pprint <span class="token keyword">import</span> pp <span class="token comment"># 导入pretty print，以美观地显示</span>

url <span class="token operator">=</span> <span class="token string">'http://api.worldbank.org/countries/et?format=json'</span>  <span class="token comment"># 埃塞俄比亚经济数据API</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>  <span class="token comment"># 打开网络并获取数据</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token comment"># 响应对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span>  <span class="token comment"># 状态码，成功时为200</span>
<span class="token comment"># 让我们改变响应的JSON格式</span>
ethiopia_data <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
pp<span class="token punctuation">(</span>ethiopia_data<span class="token punctuation">)</span> <span class="token comment"># 用pretty print打印数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建包" tabindex="-1"><a class="header-anchor" href="#创建包" aria-hidden="true">#</a> 创建包</h3>
<p>我们可以创建自己的包，上传到Python包管理器仓库，并从那里下载它。让我们创建一个非常简单的包来演示。创建一个名为mypackage的目录，在该目录中创建一个名为__init__.py的空文件和以下文件：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># mypackage/arithmetics.py</span>
<span class="token keyword">def</span> <span class="token function">add_numbers</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    total <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> num <span class="token keyword">in</span> args<span class="token punctuation">:</span>
        total <span class="token operator">+=</span> num
    <span class="token keyword">return</span> total

<span class="token keyword">def</span> <span class="token function">subtract</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">multiple</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b

<span class="token keyword">def</span> <span class="token function">division</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">/</span> b

<span class="token keyword">def</span> <span class="token function">remainder</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">%</span> b

<span class="token keyword">def</span> <span class="token function">power</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">**</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># mypackage/greet.py</span>
<span class="token keyword">def</span> <span class="token function">greet_person</span><span class="token punctuation">(</span>firstname<span class="token punctuation">,</span> lastname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>firstname<span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span>lastname<span class="token punctuation">}</span></span><span class="token string">, welcome to 30DaysOfPython Challenge!'</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>init</strong>.py在python 3.3及更高版本中并非绝对必要，但对于兼容性，最好加上。</p>
<p>现在，让我们使用刚刚创建的包：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> mypackage <span class="token keyword">import</span> arithmetics
<span class="token keyword">print</span><span class="token punctuation">(</span>arithmetics<span class="token punctuation">.</span>add_numbers<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>arithmetics<span class="token punctuation">.</span>subtract<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>arithmetics<span class="token punctuation">.</span>multiple<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>arithmetics<span class="token punctuation">.</span>division<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>arithmetics<span class="token punctuation">.</span>remainder<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>arithmetics<span class="token punctuation">.</span>power<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">from</span> mypackage <span class="token keyword">import</span> greet
<span class="token keyword">print</span><span class="token punctuation">(</span>greet<span class="token punctuation">.</span>greet_person<span class="token punctuation">(</span><span class="token string">'张'</span><span class="token punctuation">,</span> <span class="token string">'三'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关于包的更多信息" tabindex="-1"><a class="header-anchor" href="#关于包的更多信息" aria-hidden="true">#</a> 关于包的更多信息</h3>
<ul>
<li>Python有许多不同目的的内置包和模块，但有些不包含在内置包中，我们需要安装它们。</li>
<li>有多种方法可以安装包，但建议使用pip。
<ul>
<li>使用 pip：pip是Python、PyPI和virtualenv推荐的安装和管理Python包的工具。</li>
</ul>
</li>
<li>如何列出已安装的包：
<ul>
<li>pip list：列出机器中安装的所有包。</li>
</ul>
</li>
<li>使用requirements.txt进行开发环境和生产环境：
<ul>
<li>要生成已安装包的列表：pip freeze来本地生成已安装包的列表，以便用于开发环境和生产环境需求。</li>
</ul>
</li>
<li>如何卸载包：
<ul>
<li>要卸载，请使用pip：pip uninstall packagename。</li>
<li>另一种方法：pip uninstall -r requirements.txt卸载在requirements.txt中列出的所有包。</li>
</ul>
</li>
<li>使用virtualenv：
<ul>
<li>virtualenv是一个工具，用于创建隔离的Python环境。它创建一个在自己的目录树中包含所有必要的可执行文件，以使用指定版本的Python运行Python项目所需的包。</li>
<li>原始的virtualenv工具可以通过
<ul>
<li>pip install virtualenv</li>
<li>来安装。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="练习-第20天" tabindex="-1"><a class="header-anchor" href="#练习-第20天" aria-hidden="true">#</a> 练习：第20天</h2>
<ol>
<li>
<p>阅读关于虚拟环境的更多信息，尝试创建虚拟环境并安装至少一个包</p>
</li>
<li>
<p>使用一个国家API，获取所有国家信息，并找出前十个人口最多的国家</p>
</li>
<li>
<p>从国家API数据中找出官方语言是英语(eng)的所有国家</p>
</li>
<li>
<p>从国家API数据中获取数据，根据国家的面积找出前十个最大的国家</p>
</li>
<li>
<p>从国家API数据中找出所有从新列出的国家，按他们的首都排序</p>
</li>
</ol>
<p>🎉 恭喜！🎉</p>
<p><RouterLink to="/docs/Python/19_file_handling_cn.html">&lt;&lt; 第 19 天</RouterLink> | <RouterLink to="/docs/Python/21_classes_and_objects_cn.html">第 21 天 &gt;&gt;</RouterLink></p>
</div></template>


