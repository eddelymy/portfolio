import './assets/style/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon,faSun,faBars,faXmark,faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMoon,faSun,faBars,faXmark,faDownload);

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
