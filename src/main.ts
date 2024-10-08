import {createApp} from 'vue';
import App from './App.vue';
import pinia from './store';
import router from './router';

import './styles/style.css';
import './styles/colors.css';
import './styles/transitions.css';

import {initializeApp} from "./services/initService";

const app = createApp(App);

app.use(pinia);
app.use(router);

initializeApp();

app.mount('#app')
    .$nextTick(() => {
        postMessage({payload: 'removeLoading'}, '*')
    })
