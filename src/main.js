import { createApp } from 'vue';
import { createStore } from 'vuex';

import VueGriptape from '@stakeordie/griptape-vue.js';

import App from './App.vue';

// Creating a new store.
const store = createStore();

const app = createApp(App);

// Let the application use the store.
app.use(store);

// Not sure if this is the best way to do this.
app.use(VueGriptape, { store });

app.mount('#app');
