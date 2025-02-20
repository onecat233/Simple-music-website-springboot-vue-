import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'font-awesome/css/font-awesome.min.css'
import router from './router'
import axios from 'axios'
axios.defaults.withCredentials = true;

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
