import './assets/main.css'
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from  './store'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button"
import Card from 'primevue/card';
import Drawer from 'primevue/drawer';
import Popover from 'primevue/popover';


const app = createApp(App);
app.component('Button', Button);
app.component('Card', Card);
app.component('Drawer', Drawer);
app.component('Popover', Popover);

app.use(router);
app.use(Store);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.mount('#app')