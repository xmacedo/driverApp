import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    
  };
const db = initializeApp(firebaseConfig);
db.use;
export default db;
createApp(App).use(router).mount('#app')
