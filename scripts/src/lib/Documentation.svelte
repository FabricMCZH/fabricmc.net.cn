<script lang="ts">
    import {
        getJavadocList,
        getYarnVersions,
        getLoaderVersions,
    } from "./Api";

		function handleSelectChange(event: any, project: any) {
				const selectedVersion = event.target.value;

				if (selectedVersion.includes("选择")) return;

                window.location.assign(`https://maven.fabricmc.net/docs/${project.prefix}${selectedVersion}/`);
		}

    function filterAndSortVersions(
        versions: string[],
        prefix: string,
        sorted: string[]
    ): string[] {
        return versions
            .filter((v) => v.startsWith(prefix))
            .map((v) => v.slice(prefix.length))
            .sort((a, b) => {
                return sorted.indexOf(a) - sorted.indexOf(b);
            });
    }

    let data = Promise.all([
        getJavadocList(),
        getYarnVersions(),
        getLoaderVersions(),
    ]).then(([jdList, yarnVersions, loaderVersions]) => {
        const apiVersions = filterAndSortVersions(
            jdList,
            "fabric-api-",
            []
        ).reverse();

        return [
            {
                name: "Minecraft (Yarn)",
                desc: "根据 Yarn 映射中的注释生成的 Minecraft Javadoc 文档",
                prefix: "yarn-",
                versions: filterAndSortVersions(
                    jdList,
                    "yarn-",
                    yarnVersions.map((v) => v.version)
                ),
                selected: "Select Version",
            },
            {
                name: "Fabric API",
                desc: "Fabric API 的 Javadoc 文档",
                prefix: "fabric-api-",
                versions: apiVersions,
                selected: "Select Version",
            },
            {
                name: "Fabric Loader",
                desc: "Fabric Loader 的 Javadoc 文档",
                prefix: "fabric-loader-",
                versions: filterAndSortVersions(
                    jdList,
                    "fabric-loader-",
                    loaderVersions.map((v) => v.version)
                ),
                selected: "Select Version",
            },
            // Disabled for now as the mixin JD css seems broken
            // {
            //     name: "Mixin (Fabric's fork)",
            //     desc: "Javadoc documentation for Fabric's mixin fork",
            //     prefix: "sponge-mixin-",
            //     versions: mixinVersions,
            //     selected: mixinVersions[0],
            // },
        ];
    });
</script>

<div />

{#await data}
    <p>正在加载版本信息……</p>
{:then data}
    {#each data as project}
        <div class="javadoc-selector">
					<select value="选择 {project.name} 版本" on:change={(event) => handleSelectChange(event, project)}>
						<option>选择 {project.name} 版本</option>
							{#each project.versions as version}
									<option value={version}>{version}</option>
							{/each}
					</select>
				</div>
    {/each}
{:catch error}
    <p style="color: red">错误：{error.message}</p>
    <p>
        如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。
    </p>
{/await}
