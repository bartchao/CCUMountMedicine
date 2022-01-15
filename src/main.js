import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VTooltipPlugin from 'v-tooltip'

createApp(App).use(router).use(store).use(VTooltipPlugin).mount('#app')