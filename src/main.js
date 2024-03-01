import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import { GoogleMaps } from '@vue3-google-maps/api';

const app = createApp(App);

app.use(router); // Use Vue Router

// app.use(GoogleMaps, {
//   key: 'AIzaSyCMgjG6AKT_xQXEnYv4ysAMLPFkwzz9o5Q',
//   libraries: ['places'], // Add other libraries as needed
// });

app.mount('#app');
// createApp(App).use(router).mount('#app');
