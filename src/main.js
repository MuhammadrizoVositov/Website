import { createApp } from 'vue'
import { createPinia } from 'pinia'
import dayjs from 'dayjs'


import App from './App.vue'
import router from './router'

import './assets/index.css'

const app = createApp(App)

app.config.globalProperties.$dayjs = dayjs
// app.use(createPinia())
app.use(router)

app.mount('#app')
