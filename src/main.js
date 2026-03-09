
 import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import PrimeVue from 'primevue/config'
import Chart from 'primevue/chart'
import 'primeicons/primeicons.css'
import 'primeicons/primeicons.css'


const app = createApp(App)

app.use(PrimeVue)
app.component('Chart', Chart)

app.mount('#app')