<script lang="ts">
    import {getGameVersions, getInstallerVersions, getLoaderVersions} from "./Api";
    import DownloadIcon from "./DownloadIcon.svelte";

    let gameVersion: string | undefined;
    let loaderVersion: string | undefined;
    let installerVersion: string | undefined;

    $: serverJarUrl = `https://meta.fabricmc.net/v2/versions/loader/${gameVersion}/${loaderVersion}/${installerVersion}/server/jar`;
    $: serverJarFilename = `fabric-server-mc.${gameVersion}-loader.${loaderVersion}-launcher.${installerVersion}.jar`
    $: installerJarUrl = `https://maven.fabricmc.net/net/fabricmc/fabric-installer/${installerVersion}/fabric-installer-${installerVersion}.jar`;

    let versions = Promise.all([getGameVersions(), getLoaderVersions(), getInstallerVersions()])
      .then(([gameVersions, loaderVersions, installerVersions]) => {
        const versions = {
            game: gameVersions,
            loader: loaderVersions.filter((v) => {
              const split = v.version.split(".")
              return parseInt(split[0]) > 0 || parseInt(split[1]) >= 12 // 0.12.0 loader or newer
            }),
            installer: installerVersions.filter((v) => {
              const split = v.version.split(".")
              return parseInt(split[0]) > 0 || parseInt(split[1]) >= 8 // 0.8.0 installer or newer
            })
        };

        // Populates the default version with the latest stable, or latest if none are stable.
        gameVersion = (versions.game.find((v) => v.stable) || versions.game[0]).version;
        loaderVersion = (versions.loader.find((v) => v.stable) || versions.loader[0]).version;
        installerVersion = (versions.installer.find((v) => v.stable) || versions.installer[0]).version;

        return versions;
    })
</script>

<main>
{#await versions}
  <p>正在加载版本信息……</p>
{:then data}

  <div class="download">
    <div class="form-line">
      <label for="minecraft-version">Minecraft 版本：</label>
      <select id="minecraft-version" bind:value={gameVersion} style="min-width: 200px">
        {#each data.game as version}
          <option value={version.version}>{version.version}</option>
        {/each}
      </select>
    </div>

    <div class="form-line">
      <label for="loader-version">Fabric Loader 版本：</label>
      <select id="loader-version" bind:value={loaderVersion} style="min-width: 200px">
        {#each data.loader as version}
          <option value={version.version}>{version.version}</option>
        {/each}
      </select>
    </div>

    <div class="form-line">
      <label for="installer-version">安装程序版本：</label>
      <select id="installer-version" bind:value={installerVersion} style="min-width: 200px">
        {#each data.installer as version}
          <option value={version.version}>{version.version}</option>
        {/each}
      </select>
    </div>

    <div class="download">
      <a class="button primary large" href={serverJarUrl}><DownloadIcon />下载可执行服务器启动器 (.jar)</a>
    </div>
    <p>
      <a href={installerJarUrl}>
        下载旧版本或手动安装的安装程序
      </a>
    </p>
  </div>

  <p>这个可执行 .jar 文件是一个小型启动器，它会使用上面指定的版本启动启用了 Fabric 的 Minecraft 官方服务器。使用此方法无需安装程序。</p>

  <div style="margin-bottom: 15px;">
    <h4>命令行下载：</h4>
    <p>使用以下命令将可执行服务器启动器下载到当前目录。</p>
    <code>
      curl -OJ {serverJarUrl}
    </code>
  </div>

  <div style="margin-bottom: 15px;">
    <h4>启动命令：</h4>
    <p>使用以下命令运行分配了 2GB 运行内存的服务器启动器。稍等片刻安装了 Fabric 的 Minecraft 服务器就会准备就绪。</p>
    <code>
      java -Xmx2G -jar {serverJarFilename} nogui
    </code>
  </div>

{:catch error}
  <p style="color: red">错误：{error.message}</p>
  <p>
    如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。
  </p>
{/await}

</main>

<style>
  code {
    display: inline-block;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    user-select: all;
  }
</style>