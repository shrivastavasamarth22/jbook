import {OnLoadResult, PluginBuild} from "esbuild-wasm";
import axios from "axios";
import * as localForage from "localforage";

const fileCache = localForage.createInstance({
    name: 'filecache'
});

export const fetchPlugin = (inputCode: string) => {
    return {
        name: 'fetch-plugin',
        setup(build: PluginBuild) {
            build.onLoad({ filter: /.*/ }, async (args: any) => {
                if (args.path === 'index.js') {
                    return {
                        loader: 'jsx',
                        contents: inputCode,
                    };
                }

                const cachedResult = await fileCache.getItem<OnLoadResult>(args.path);

                if (cachedResult) {
                    return cachedResult
                }

                const { data, request } = await axios.get(args.path);

                const result: OnLoadResult = {
                    loader: 'jsx',
                    contents: data,
                    resolveDir: new URL('./', request.responseURL).pathname
                }

                await fileCache.setItem(args.path, result)

                return result
            });
        }
    }
}