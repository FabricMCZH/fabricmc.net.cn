<script lang="ts">
  import {getInstallerVersions} from "./Api";
  import DownloadIcon from "./DownloadIcon.svelte";

  const win32 = navigator.platform == "Win32"

  let showVersionSelection = false;
  let expertOptions = false;
  let selectedVersion = "";
  let versions = getDownloads();

  async function getDownloads() {
    const downloads = await getInstallerVersions();
    selectedVersion = downloads.find(v => v.stable)?.url ?? "";
    showVersionSelection = downloads[0].stable == false;
    return downloads;
  }

  function showExpertOptions() {
    expertOptions = true;
  }

  async function getVersion() {
    return (await versions).find(v => v.url === selectedVersion);
  }
</script>

<main>
  {#await versions}
    <p>正在加载版本信息……</p>
  {:then data}

    {#if expertOptions}
      Installer Version:
      <select bind:value={selectedVersion} style="min-width: 200px">
        {#each data as version}
          <option value={version.url}>{version.version}</option>
        {/each}
      </select>

      <br />
      <br />
    {:else if showVersionSelection}
      {#await getVersion() then latest}
        <p>
          {#if latest?.stable}Installer Version: {latest.version} (Latest){/if}
          {#if !expertOptions}
            <a href={'#'} on:click|preventDefault={showExpertOptions}>
              显示 Beta 测试版本
            </a>
          {/if}
        </p>
      {/await}
    {/if}

    <div class="download">
      <p>
        安装程序中可以选择 Minecraft 和 Fabric Loader 的版本，此下载适用于我们支持的所有版本。
      </p>

      {#if win32}
      <p>
        <a class="button primary large" href={selectedVersion.replace('.jar', '.exe')}>
          <DownloadIcon/> 下载适用于 Windows 的安装程序
        </a>
        <br>
        <a href={selectedVersion}>
          下载通用安装程序 (.jar)
        </a>
      </p>
    {:else}
      <p>
        <a class="button primary large" href={selectedVersion}>
          <DownloadIcon/> 下载通用安装程序 (.jar)
        </a>
        <br>
        <a href={selectedVersion.replace('.jar', '.exe')}>
          下载适用于 Windows 的安装程序
        </a>
      </p>
    {/if}
    </div>
  {:catch error}
    <p style="color: red">错误：{error.message}</p>
    <p>
      如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。
    </p>
  {/await}

</main>