import { createApp } from 'vue';
import App from '@/App.vue';
import VueStates from '@/Lib/vuestates';

const app = createApp(App);
const appState = new VueStates();

app.mixin({
  computed: {
    $state() {
      return appState;
    },
  },
});

app.mount('#app');
