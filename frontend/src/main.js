import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()



createApp(App).use(router).mount('#app')

createApp(App).use(pinia)