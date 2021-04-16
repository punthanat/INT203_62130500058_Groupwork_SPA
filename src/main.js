import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import frame from './components/frame.vue'

const app = createApp(App)
app.component('frame', frame)
app.mount('#app')
