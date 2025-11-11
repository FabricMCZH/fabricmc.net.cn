---
layout: page
title: Mod 模板生成器
permalink: /develop/template/
topnav: false
---

使用这个工具从模板生成 Fabric Mod 项目，这类似于预配置的 <a href="https://github.com/FabricMC/fabric-example-mod">fabric-example-mod</a>。

请将任何建议或反馈提交至 <a href="https://github.com/FabricMC/fabricmc.net">github.com/FabricMC/fabricmc.net</a>！

<noscript style="color:red">您需要启用 Javascript 才能生成 Fabric Mod 项目</noscript>
<div class="fabric-component" data-component="Template"></div>

{% assign cacheBust = site.time | date:'?v=%s' %}
<script type="text/javascript" src="{{ "/scripts/main.js" | relative_url | append: cacheBust }}"></script>
<link href="{{ "/scripts/style.css" | relative_url | append: cacheBust }}" rel="stylesheet">

<br>
有关项目配置，请在此 [Fabric Wiki 页面](https://wiki.fabricmc.net/zh_cn/tutorial:setup) 参阅与您使用的 IDE 对应的教程。
此模板生成器采用 CC0 许可协议，欢迎您学习并将其应用到您自己的项目中。
