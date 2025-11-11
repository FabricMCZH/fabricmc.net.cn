<script lang="ts">
 import {
        getGameVersions,
        getYarnVersions,
        getLoaderVersions,
        getApiVersions,
        isApiVersionvalidForMcVersion
    } from "./Api";

    let minecraftVersion: string | undefined;
    let yarnVersion: string;
    let loaderVersion: string;
    let apiVersion: string;

    let gameVersions = getGameVersions().then((versions) => {
        minecraftVersion = versions.find((v) => v.stable)!.version
        const latestVersion = versions[0];
        return versions.filter((v) => v.stable || v == latestVersion).map((v) => v.version);
    });

    const loaderVersions = getLoaderVersions().then((versions) => {
        loaderVersion = versions.find((v) => v.stable)!.version
        return versions;
    });

    const yarnVersions = getYarnVersions()
    const apiVersions = getApiVersions();

    $: yarnVersions.then(versions => yarnVersion = versions.find(v => v.gameVersion == minecraftVersion)?.version || "unknown")
    $: apiVersions.then(versions => apiVersion = versions.filter(v => isApiVersionvalidForMcVersion(v, minecraftVersion)).pop()!)
</script>

{#await gameVersions}
    <p>正在加载版本信息……</p>
{:then gameVersions}
		<h2>最新版本</h2>
		<p>选择一个 Minecraft 版本，以获取推荐的 Fabric Loader、Yarn 和 Fabric API 版本，用于您的 <code>gradle.properties</code> 文件。</p>
    <p>
        Minecraft 版本：
        <select bind:value={minecraftVersion} style="min-width: 200px">
            {#each gameVersions as version}
                <option value={version}>{version}</option>
            {/each}
        </select>
    </p>

    <div style="margin-bottom: 15px;">
        <pre><code>
minecraft_version={minecraftVersion}
yarn_mappings={yarnVersion}
loader_version={loaderVersion}
loom_version=1.13-SNAPSHOT

# Fabric API
fabric_version={apiVersion}
        </code></pre>

				<p><strong>重要提醒：</strong>某些情况下，例如快照或特殊版本，<code>fabric-api</code> 版本可能与您的 Minecraft 版本无法完全匹配。</p>
				<p>如果遇到问题，请仔细检查你的 Fabric API 是否是 <a href="https://modrinth.com/mod/fabric-api">Modrinth</a> 或 <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a> 上的最新版本。</p> 
      </div>
			
			<hr />

      <h2>自动更新映射</h2>
			<p>使用以下自动更新命令，使您项目的 Yarn 映射保持最新：</p>

			<code class="copy-code">
				gradlew migrateMappings --mappings "{yarnVersion}"
			</code>

			<p>有关此命令的更多信息，请参阅 <a href="https://wiki.fabricmc.net/zh_cn:tutorial:migratemappings">更新 Yarn 映射</a>。</p>

{:catch error}
    <p style="color: red">错误：{error.message}</p>
    <p>
        如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。
    </p>
{/await}

<hr />

<h2>Fabric Loom</h2>

<p>推荐的 Fabric Loom 版本是 <strong>1.13-SNAPSHOT</strong>。这通常在 build.gradle 文件的顶部附近定义。</p>

<style>
    .copy-code {
      display: inline-block;
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      user-select: all;
    }
  </style>
