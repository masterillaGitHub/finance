import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify/index.js'
import axios from './plugins/axios';

import ApiResourceBase  from '@/models_resources/resources/ApiResourceBase.js'
ApiResourceBase.$http = axios

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)
app.config.errorHandler = errorHandler

app.mount('#app')

function errorHandler(err, vm, info) {
    console.error('Vue error:', info, err)
}
