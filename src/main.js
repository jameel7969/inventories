import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration
import 'typeface-poppins'; // Import any additional styles or fonts

// Create the Vue app
const app = createApp(App);

// Use the router with the Vue app
app.use(router);

// Mount the app to the DOM
app.mount('#app');