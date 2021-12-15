/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 14:51:38
 * @Description: file content
 */
import { defineConfig, searchForWorkspaceRoot, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// @vitejs/plugin-vue-jsx
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path';
import { wrapperEnv } from './build/utils';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const root = process.cwd();

    const viteEnv = wrapperEnv(loadEnv(mode, root));
    console.log(viteEnv);

    return {
        root,
        base: "/",
        mode: mode,
        plugins: [
            vue(),
            viteMockServe({
                mockPath: './mock',
                supportTs: true,
                logger: true
            })
        ],
        publicDir: "public",
        cacheDir: "node_modules/.vite",
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src/'),
                '@t': resolve(__dirname, "types/"),
                '@m': resolve(__dirname, 'mock/'),
                '@b': resolve(__dirname, 'build/')
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
            brotliSize: true, // 原来写的是 true
            chunkSizeWarningLimit: 500,
            rollupOptions: {
                output: {
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js',
                    assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                }
            }
        },
        esbuild: {
            jsxFactory: "h",
            jsxFragment: "Fragment"
        },
        optimizeDeps: {
            include: [],
            keepNames: false
        }
    }
});
