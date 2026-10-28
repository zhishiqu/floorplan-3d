import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

createApp(App).mount('#app')

// 挂载完成后再加载设计器引擎（2D SVG + 3D three.js）：
// 引擎顶层代码会立即查询 DOM（svg#plan、#stage 等），必须在挂载之后执行
import('./app/engine.js')
