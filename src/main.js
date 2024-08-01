import './assets/style/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope,faCircleExclamation, faThumbsUp, faPhone, faMoon,faSun,faBars,faXmark,faDownload,faGraduationCap,faCertificate,faBriefcase, faLocationDot,faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMoon,faCircleExclamation,faThumbsUp,faSquareInstagram,faPhone,faLinkedin,faEnvelope,faSun,faBars,faXmark,faDownload,faGraduationCap,faCertificate,faBriefcase,faLocationDot,faCalendar);

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
