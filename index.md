---
layout: default
---

<div class="home post-content">
   <header>
      <div class="showcase">
         <h1>Fabric Loader</h1>
         <p>Fabric 是一个模块化、轻量级的 Minecraft Mod Loader</p>
         <br>
         <a class="button primary large" href="/use/">即刻下载！</a>
      </div>
   </header>
   <hr>
   <section>
      <div class="row-3">
         <article class="column">
            <h3>游玩</h3>
            <section>
               <p class="component-body">上面提供的 Fabric Loader 包只有最基本的功能。如果要使用大部分 Fabric Mod 必需的额外功能，就需要将其与 Fabric API 结合。Fabric API 必须被像其他 Fabric Mod 一样放入 mods 文件夹中。</p>
            </section>
            <div class="download-api-container">
                <a class="button secondary" href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files">
                    <img alt="CurseForge logo" src="/assets/icons/curseforge-logo.svg" width="20" />
                    下载 Fabric API
                </a>
                <div class="download-api" tabindex="-1">
                    <div class="button secondary">
                        <span>▼</span>
                    </div>
                    <div class="download-api-dropdown">
                        <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files">
                            <img alt="CurseForge logo" src="/assets/icons/curseforge-logo.svg" width="20" />
                            CurseForge
                        </a>
                        <a href="https://modrinth.com/mod/fabric-api/versions">
                            <img alt="Modrinth logo" src="/assets/icons/modrinth-logo.svg" width="20" />
                            Modrinth
                        </a>
                        <a href="https://github.com/FabricMC/fabric/releases">
                            <img alt="Github logo" src="/assets/icons/github-logo.svg" width="20" />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
         </article>
         <article class="column">
            <h3>开发</h3>
            <section>
               <p>Fabric 为您提供了强大的工具让您可以随心所欲地改变 Minecraft 游戏。使用在线<a href="/develop/template/">模板生成器</a>即可开始创建 Fabric Mod。您也可以使用 <a href="https://github.com/FabricMC/fabric-example-mod">示例 Fabric Mod</a> 仓库或者<a href="/develop/cli/">命令行工具</a>。</p>
            </section>
            <a class="button secondary" href="/develop/">开发 Fabric Mod</a>
         </article>
         <article class="column">
            <h3>探索</h3>
            <section>
               <p>Fabric Wiki 为开发者和玩家提供了丰富的文档。您还可以从 <a href="https://discord.gg/v6v4pMv">Fabric Discord 服务器</a> 获取更多帮助，或者在 <a href="https://github.com/orgs/FabricMC/discussions">GitHub Discussions</a> 提问。</p>
            </section>
            <a class="button secondary" href="https://wiki.fabricmc.net">访问 Fabric Wiki</a>
         </article>
      </div>
   </section>
   <hr>
   <section>
   <h3>核心工具链</h3>
   <ul>
      <li><a href="https://github.com/FabricMC/fabric-loader">Fabric Loader</a> 一款灵活的、平台无关的 Mod Loader，为 Minecraft 或其他游戏及应用程序而设计。</li>
      <li><a href="https://github.com/FabricMC/yarn">Yarn</a> 一套开源的 Minecraft 混淆映射表，根据 Creative Commons Zero 许可协议，任何人都可以自由使用。</li>
      <li><a href="https://github.com/FabricMC/fabric-loom">Fabric Loom</a> 一款 Gradle 插件，使开发者能够轻松开发和调试 Fabric Mod。</li>
      <li><a href="https://github.com/FabricMC/fabric-language-kotlin">Fabric Language Kotlin</a> 在 Fabric Mod 中使用 Kotlin 编程语言。</li>
      <li><a href="https://github.com/FabricMC/intermediary">Intermediary</a> 包含不同 Minecraft 版本之间的匹配信息，让跨版本 Mod 成为可能。</li>
      <li><a href="https://github.com/FabricMC/tiny-remapper">Tiny Remapper</a> 一款小巧高效的 .jar 文件重映射工具。</li>
      <li><a href="https://github.com/FabricMC/mapping-io">Mapping IO</a> 一个用于读取、操作和写入映射文件的库，支持多种格式。</li>
   </ul>
   </section>
   <hr>
   <section>
      <h3>最新博文</h3>
      <div class="row-2">
         {% for post in site.posts limit: 2 %}
         <article class="column">
            <a href="{{ post.url }}">
               <h4>{{ post.title }}</h4>
            </a>
            <section>
               <p>{{ post.content | strip_html | truncate: 310 }}</p>
            </section>
            <a class="button secondary" href="{{ post.url }}">阅读更多</a>
         </article>
         {% endfor %}
      </div>
   </section>
</div>
