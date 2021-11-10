/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 18:35:26
 * @Description: file content
 */
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        root: process.cwd(),
        base: "/",
        mode: mode,
        plugins: [
            vue(),
            viteMockServe({
                mockPath: 'mock',
                localEnabled: command === 'serve',
                prodEnabled: command !== 'serve',
                injectCode: `
                    import { default as setupProdMockServer } from '../mock/mockProdServer';
                    setupProdMockServer();
                `,
                logger: true,
            }),
        ],
        publicDir: "public",
        cacheDir: "node_modules/.vite",
        resolve: {
            alias: {
                '#': resolve(__dirname, "types/"),
                '@': resolve(__dirname, 'src/'),
                '$': resolve(__dirname, 'domain/'),
                '&': resolve(__dirname, 'mock/'),
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
                // '/NDAPI': {
                //     target: "http://192.1.1.119:8080",
                //     changeOrigin: true,
                //     ws: true,
                //     secure: false,
                //     rewrite: (path) => path.replace(new RegExp('^/NDAPI'), '/NDAPI')
                // }
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
            minify: "esbuild",
            polyfillModulePreload: true,
            outDir: "dist",
            assetsDir: "assets",
            assetsInlineLimit: 4096,
            cssCodeSplit: true,
            sourcemap: "hidden",
            manifest: false,
            ssrManifest: false,
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
