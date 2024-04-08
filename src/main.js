import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import VueYoutube from the correct package for Vue 3

const app = createApp(App);

app.use(router); // Use Vue Router

// Use VueYoutube plugin

app.mount('#app');
