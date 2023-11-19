import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineStore } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

createApp(App).use(router).mount('#app')

createApp(App).use(pinia)
console.log("criei o piniapp")
export const useAppStore = defineStore('appStore', {
  state: () => ({ respostas: [], perguntas: [] }),

})

export const appStore = useAppStore();