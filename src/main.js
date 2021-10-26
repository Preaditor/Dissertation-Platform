import { createApp } from 'vue';
import App from '@/App.vue';
import VueStates from '@/lib/VueStates';

const app = createApp(App);
const appState = new VueStates();
window.appState = appState;

app.mixin({
  computed: {
    $state() {
      return appState;
    },
  },
});

app.mount('#app');
