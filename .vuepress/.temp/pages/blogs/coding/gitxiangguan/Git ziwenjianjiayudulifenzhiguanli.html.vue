<template><div><p>实现github在 main 分支进行源码开发，并将编译生成的 dist 文件夹自动同步到独立的 dist 分支。
删除了远程的 dist 分支，现在我们直接运行以下命令。如果没有dist分支，它会自动在远程创建一个新的 dist 分支，并将本地 dist 文件夹的内容放进去。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> subtree push <span class="token parameter variable">--prefix</span> dist origin dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/blogs/blogImages/githubPagesSet.png" alt="githubPages Set"></p>
</div></template>


