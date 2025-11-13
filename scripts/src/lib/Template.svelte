<script lang="ts">
    import JSZip from "jszip";
    import FileSaver from "file-saver";
    import DownloadIcon from "./DownloadIcon.svelte";
    import { ICON_FONT, getTemplateGameVersions, type Configuration } from "./template/template";
    import { minecraftSupportsDataGen, minecraftSupportsSplitSources, computeCustomModIdErrors, sharedModIdChecks, formatPackageName, nameToModId} from "./template/minecraft";
    import { computePackageNameErrors } from "./template/java"
    import { decode64 } from "./template/utils";

    let minecraftVersion: string;
    let projectName = "Template Mod";
    let packageName = "com.example";
    let useKotlin = false;
    let mojmap = true;
    let dataGeneration = false;
    let splitSources = true;

    let customModId: string | undefined;
    let loading = false;

    $: modid = nameToModId(projectName);

    const versions = Promise.all([getTemplateGameVersions()]).then(([gameVersions]) => {
        minecraftVersion = gameVersions.find((version) => version.stable)!.version;
        return {
            game: gameVersions,
        };
    });

    $: supportsDataGen = minecraftSupportsDataGen(minecraftVersion || "1.99");
    $: supportsSplitSources = minecraftSupportsSplitSources(minecraftVersion || "1.99");

    $: modIdErrors = computeModIdErrors(modid);
    $: customIdErrors = computeCustomModIdErrors(customModId);
    $: packageNameErrors = computePackageNameErrors(packageName);

    function computeModIdErrors(id: string | undefined) : string[] | undefined {
      if (id === undefined) {
        return undefined;
      }

      return sharedModIdChecks(id, customModId === undefined);
    }

    async function generate() {
        if (modIdErrors !== undefined || (customModId !== undefined && customIdErrors !== undefined) || packageNameErrors.length > 0) {
            return;
        }

        loading = true;

        const generator = await import("./template/template");
        const config: Configuration = {
            modid: customModId ?? modid,
            minecraftVersion,
            projectName,
            packageName,
            useKotlin,
            mojmap,
            dataGeneration: dataGeneration && supportsDataGen,
            splitSources: splitSources && supportsSplitSources,
            uniqueModIcon: true
        };

        const zip = new JSZip();

        await generator.generateTemplate({
            config,
            writer: {
                write: async (path, content, options) => {
                    zip.file(path, content, {
                        unixPermissions: options?.executable ? "774": undefined
                    });
                },
            },
            canvas: {
                create(width, height) {
                    const canvas = document.createElement("canvas");
                    canvas.width = width;
                    canvas.height = height;

                    return {
                        getContext: (id) => canvas.getContext(id),
                        getPng: () => decode64(canvas.toDataURL().split(";base64,")[1]),
                        measureText(ctx: CanvasRenderingContext2D, text) {
                            const metrics = ctx.measureText(text);
                            return {
                                width: metrics.width,
                                ascent: metrics.actualBoundingBoxAscent,
                                descent: metrics.actualBoundingBoxDescent
                            }
                        }
                    };
                },
            }
        });

        FileSaver.saveAs(
            await zip.generateAsync({ type: "blob", platform: "UNIX" }),
            `${modid}-template-${config.minecraftVersion}.zip`
        );

        loading = false;
    }

    function doFormatProjectName() {
        projectName = projectName.trim()
    }

    function doFormatPackageName() {
        packageName = formatPackageName(packageName)
    }

    function useCustomModId() {
        customModId = modid;
    }

    function useDefaultModId() {
        customModId = undefined;
    }
</script>

{#await versions}
    <p>
        正在加载数据
    
        <!-- Force the icon fonts to be loaded, https://stackoverflow.com/questions/2756575 -->
        <span style="font-family: {ICON_FONT};">……</span>
    </p>
{:then data}
    <div class="template">
        <div class="form-line">
            <h3>Mod 名：</h3>
            <hr />

            {#if customModId != undefined}
                <p>为你的新 Mod 选择一个名字。</p>
            {:else}
                <p>为你的新 Mod 选择一个名字。Mod ID 将是 <code>{modid}</code>. <a href={""} on:click|preventDefault={useCustomModId}>使用自定义 ID</a></p>
            {/if}

            <input id="project-name" bind:value={projectName} on:blur={doFormatProjectName} />

            {#if modIdErrors != undefined}
                {#each modIdErrors as error}
                    <li style="color: red">{error}</li>
                {/each}
                <br>
            {/if}
        </div>

        {#if customModId != undefined}
            <div class="form-line">
                <h3>Mod ID：</h3>
                <hr />
                <p>请输入您希望用于 Mod 的 Mod ID。<a href={""} on:click|preventDefault={useDefaultModId}>使用默认 Mod ID</a></p>
                {#if customIdErrors != undefined}
                    {#each customIdErrors as error}
                        <li style="color: red">{error}</li>
                    {/each}
                    <br />
                {/if}

                <input id="mod-id" bind:value={customModId} />
            </div>
        {/if}

        <div class="form-line">
            <h3>包名：</h3>
            <hr />
            <p>
                为你的新 Mod 选择一个独一无二的包名。包名必须只有你才能使用。如果你不确定，可以使用 <code>name.modid</code> 格式的包名。
            </p>
            <input id="package-name" on:keyup={doFormatPackageName} bind:value={packageName} />

            {#each packageNameErrors as error}
                <li style="color: red">{error}</li>
            {/each}
        </div>

        <div class="form-line">
            <h3>Minecraft 版本：</h3>
            <hr />
            <p>
                选择你希望 Mod 支持的 Minecraft 版本。
            </p>
            <select
                id="minecraft-version"
                bind:value={minecraftVersion}
                style="min-width: 200px"
            >
                {#each data.game as version}
                    <option value={version.version}>{version.version}</option>
                {/each}
            </select>
        </div>

        <hr>
        <br>

        <h4>高级选项：</h4>

        <div>
            <div class="option-container">
                <input id="kotlin" type="checkbox" class="option-input" bind:checked={useKotlin} />
                <label for="kotlin" class="option-label">Kotlin 编程语言</label>
            </div>
            <p class="option-body">
                <a href="https://kotlinlang.org/">Kotlin</a> 是另一种可用于开发 Fabric Mod 的编程语言。<a href="https://github.com/FabricMC/fabric-language-kotlin">Fabric Kotlin 适配器</a> 用于启用对使用 Kotlin 制作 Fabric Mod 的支持。
            </p>
        </div>

        <div>
            <div class="option-container">
                <input id="mojmap" type="checkbox" class="option-input" bind:checked={mojmap} />
                <label for="mojmap" class="option-label">官方混淆映射表</label>
            </div>
            <p class="option-body">
                使用 Mojang 官方的混淆映射表，而不是 Yarn。请注意，Mojang 官方的混淆映射表虽然完全可用，但是许可协议比 Yarn 有着更多的限制。风险自负。
            </p>
        </div>

        {#if supportsDataGen}
        <div>
            <div class="option-container">
                <input id="datagen" type="checkbox" class="option-input" bind:checked={dataGeneration} />
                <label for="datagen" class="option-label">数据生成</label>
            </div>
            <p class="option-body">
                此选项配置 Mod 使用 <a href="https://wiki.fabricmc.net/tutorial:datagen_setup">Fabric 数据生成 API</a>。它允许您在编译时从代码生成合成配方等数据包资源文件。
            </p>
        </div>
        {/if}

        {#if supportsSplitSources}
        <div>
            <div class="option-container">
                <input id="splitSources" type="checkbox" class="option-input" bind:checked={splitSources} />
                <label for="splitSources" class="option-label">拆分源代码集</label>
            </div>
            <p class="option-body">
                服务器崩溃的常见原因是，在服务器上安装 Mod 时调用了仅供客户端使用的代码。
                此选项会将您的模组配置为使用两套源代码集构建：client (客户端集) 和 main (主程序集，即公共集)。
                这可以确保客户端代码和服务器代码被清晰分离。
            </p>
        </div>
        {/if}

        <br>

        {#if loading}
            <a class="button primary download-button" href={""}>
                <DownloadIcon /> 正在生成项目文件……
            </a>
        {:else}
            <a
                class="button primary large download-button"
                href={""}
                on:click|preventDefault={generate}
            >
                <DownloadIcon /> 下载生成的项目文件 (.zip)
            </a>
        {/if}
    </div>
{:catch error}
    <p style="color: red">错误：{error.message}</p>
    <p>
      如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。
    </p>
{/await}

<style lang="scss">
    @font-face {
    	font-family: "Comic Relief";
	    src: url("/assets/fonts/ComicRelief-Regular.woff2");
    }
    
    .template {
        * {
            text-align: left;
        }

        h3 {
            margin-bottom: 0;
        }
        .download-button {
            text-align: center;
        }
    }

    .option {
        &-container {
            display: flex;
            align-items: center;
        }

        &-input {
            width: 1rem;
            height: 1rem;
        }

        &-label {
            margin-left: 0.5rem;
        }

        &-body {
            display: block;
            padding-left: 1rem;
            margin-top: 0.25rem;
            margin-left: 1rem;
        }
    }
</style>
