---
layout: page
title: "Fabric 命令行工具"
permalink: /develop/cli/
---
<style type="text/css">
  code.command {
    display: inline-block;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    user-select: all;
  }
</style>

Fabric 命令行工具 (Fabric CLI) 可供 Fabric Mod 开发者直接从终端生成新项目。如果您发现任何问题，请务必在我们的 [GitHub](https://github.com/FabricMC/fabricmc.net) 页面上报告。

## 安装

Fabric 命令行工具需要您的系统上装有 [Deno 运行时](https://deno.com/)。Deno 是一个跨平台的 JavaScript 运行时，它允许我们在 Web 和桌面之间使用同一套代码库。按照 [Deno 安装](https://docs.deno.com/runtime/getting_started/installation/) 的说明进行操作后，运行以下命令以全局安装 Fabric CLI：

<code class="command">
deno install -A -g -n fabric https://fabricmc.net/cli
</code>

要更新 Fabric CLI，请运行：

<code class="command">
fabric upgrade
</code>

要卸载 Fabric CLI，请运行：

<code class="command">
deno uninstall fabric
</code>

## 用法
Fabric 命令行工具目前提供一个主要子命令，即 `init`。

`init` 子命令用于从模板生成 Fabric Mod 项目。要在当前目录中生成新项目，可以使用以下命令：

<code class="command">
fabric init
</code>

您可以选择传递目录路径参数，如果目录不存在，则会创建该目录。

<code class="command">
fabric init MyCoolMod
</code>

如果您希望接受所有默认值，可以传递 `-y` 参数。目录名称将用于影响 Mod 名称。

<code class="command">
fabric init MyCoolMod -y
</code>

### 在没有安装 Fabric CLI 的前提下运行

如果您不想在系统中安装 Fabric 命令行工具，可以使用 Deno 直接运行它，如下所示：

<code class="command">
deno run https://fabricmc.net/cli init
</code>

Deno 默认是安全至上的，因此在对您的系统进行任何更改之前都会进行[权限](https://docs.deno.com/runtime/fundamentals/security/)请求。
