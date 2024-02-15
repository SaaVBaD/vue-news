import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia";
import directives from '@/directives';

const app = createApp(App)
    .use(router)
    .use(createPinia())

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.mount('#app')
