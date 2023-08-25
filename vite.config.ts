import path from "node:path"
import { defineConfig } from "vite"
import Components from "unplugin-vue-components/vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/el-select-error-demo/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router"],
      dirs: ["./src/components/**"],
      dts: true
    }),
    Components({
      extensions: ["vue"],
      dirs: ["./src/components/**"],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        })
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /**
         * 順序會影響編譯
         */
        additionalData: `
          @use "@/assets/index.scss" as *;
          @use 'element-plus/theme-chalk/src/dark/css-vars.scss' as *;
        `
      }
    }
  }
});
