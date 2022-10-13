import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'uno.css'
import './assets/css/style.css'
import VForm3 from 'vform3-builds'

import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router).use(ElementPlus).use(VForm3).mount('#app')