import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

// base './'：构建产物可部署在任意子路径
// viteSingleFile：构建时把 JS/CSS 全部内联进 dist/index.html，
// 双击即可离线打开，无需任何服务器与网络
export default defineConfig({
  base: './',
  plugins: [vue(), viteSingleFile()],
})
