---
layout: default
title: 开发
permalink: /develop/
topnav: true
---

# 开发

本页面提供精选资源以支持新 Fabric Mod 的创建和现有项目的维护。

如果您需要更多帮助，[Fabric Discord 服务器](https://discord.gg/v6v4pMv) 提供专门的模组开发频道，其中包含来自社区的资源和建议。

<div class="home post-content">
<hr>
   <section>
      <div class="row-3">
         <article class="column">
            <h3>入门</h3>
            <section class="with-button-group">
               <p class="component-body">如果您想学习如何制作 Fabric Mod，您应该参考 Fabric Wiki 或官方文档网站。<br/><br/></p>
            </section>
            <div class="button-group">
							<a class="button secondary" href="https://wiki.fabricmc.net/zh_cn:start">Fabric Wiki</a>
							<a class="button secondary" href="https://docs.fabricmc.net/zh_cn/">Fabric 文档</a>
							<a class="button secondary" href="https://zh.minecraft.wiki/">Minecraft Wiki</a>
						</div>
         </article>
         <article class="column">
            <h3>项目模板</h3>
            <section class="with-button-group">
               <p>项目模板为 Fabric Mod 提供了一个标准化的基础，使您可以快速创建新项目。<br/><br/></p>
            </section>
            <div class="button-group">
							<a class="button secondary" href="https://github.com/FabricMC/fabric-example-mod">示例 Fabric Mod 仓库</a>
							<a class="button secondary" href="./cli/">Fabric 命令行工具</a>
							<a class="button secondary" href="./template/">在线 Fabric Mod 模板生成器</a>
						</div>
         </article>
         <article class="column">
            <h3>Javadoc</h3>
            <section class="with-button-group">
               <p>轻松访问工具链项目和 Minecraft 的 Javadoc，无论是在线访问还是直接在 IDE 中访问。</p>
            </section>
            <noscript style="color:red">您需要启用 Javascript 才能显示文档链接</noscript>
<div class="fabric-component" data-component="Documentation"></div>
         </article>
      </div>
   </section>
   <hr>
</div>

<noscript style="color:red">您需要启用 Javascript 才能显示最新版本</noscript>
<div class="fabric-component" data-component="Versions"></div>

{% assign cacheBust = site.time | date:'?v=%s' %}
<script type="text/javascript" src="{{ "/scripts/main.js" | relative_url | append: cacheBust }}"></script>
<link href="{{ "/scripts/style.css" | relative_url | append: cacheBust }}" rel="stylesheet">
