<script lang="ts">
  import {getGameVersions, getLatestYarnVersion, getLoaderVersions} from "./Api";

  let listSnapshots = false;

  let selectedGameVersion: string = "";
  let selectedLoaderVersion: string = "";

  let gameVersions = getGameVersions()
  .then(versions => {
    //Select the latest stable version by default
    selectedGameVersion = versions.find(
            version => version.stable || listSnapshots
    )?.version ?? "";
    return versions;
    });

  let loaderVersions = getLoaderVersions()
  .then(versions => {
    selectedLoaderVersion = versions[0]?.version ?? "";
    return versions;
  });

  export async function getSelectedVersions() {
    //Get the latest yarn version for the provided game version, used for legacy support
    const yarnVersion = (await getLatestYarnVersion(selectedGameVersion))?.version ?? "";

    return {yarnVersion, loaderVersion: selectedLoaderVersion, selectedGameVersion};
  }
</script>

<main>

  <label>
    <input type="checkbox" bind:checked={listSnapshots} />
    显示快照版本
  </label>
  <br />
  <br />

  {#await gameVersions}
    <p>正在加载版本信息……</p>
  {:then data}
    Minecraft 版本：
    <select bind:value={selectedGameVersion} style="min-width: 200px">
      {#each data as version}
        {#if version.stable || listSnapshots}
          <option value={version.version}>{version.version}</option>
        {/if}
      {/each}
    </select>
  {:catch error}
    <p style="color: red">错误：{error.message}</p>
    <p>
      如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。
    </p>
  {/await}

  <br />
  <br />

  {#await loaderVersions}
    <p>正在加载版本信息……</p>
  {:then data}
    Fabric Loader 版本：
    <select bind:value={selectedLoaderVersion} style="min-width: 200px">
      {#each data as version}
        <option value={version.version}>{version.version}</option>
      {/each}
    </select>
  {:catch error}
    <p style="color: red">错误：{error.message}</p>
    <p>
      如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。
    </p>
  {/await}

</main>
