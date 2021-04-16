import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import frame from './components/frame.vue'

const app = createApp(App).use(router)
app.component('frame', frame)
app.use(router).mount('#app')
