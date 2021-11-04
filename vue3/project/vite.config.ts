/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-02 09:42:58
 * @Description: file content
 */
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import vue from '@vitejs/plugin-vue';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        root: process.cwd(),
        base: "/",
        mode: mode,
        plugins: [
            vue(),
        ],
        publicDir: "public",
        cacheDir: "node_modules/.vite",
        resolve: {
            alias: {
                '/\/#\//': resolve(__dirname, "src/types"),
                '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
            },
            extensions: [".ts", ".js", ".tsx", "jsx", ".json"],
            preserveSymlinks: false,
        },
        json: {
            namedExports: true,
            stringify: false,
        },
        logLevel: "info",
        clearScreen: false,
        envDir: "root",
        envPrefix: "VITE_",
        server: {
            host: "127.0.0.1",
            port: 8000,
            strictPort: false,
            https: false,
            open: false,
            proxy: {
                '/api': {
                    target: "http://127.0.0.1:9000",
                    changeOrigin: true,
                    secure: false,
                    rewrite: (path) => path.replace('/api/', '')
                }
            },
            cors: true,
            fs: {
                strict: true,
                allow: [
                    searchForWorkspaceRoot(process.cwd())
                ]
            }
        },
        build: {
            target: "modules",
            polyfillModulePreload: true,
            outDir: "dist",
            assetsDir: "assets",
            assetsInlineLimit: 4096,
            cssCodeSplit: true,
            sourcemap: "hidden",
            manifest: false,
            ssrManifest: false,
            minify: "esbuild",
            write: true,
            emptyOutDir: true,
            brotliSize: true,
            chunkSizeWarningLimit: 500,
        },
        optimizeDeps: {
            include: [],
            keepNames: false
        }
    }
});
