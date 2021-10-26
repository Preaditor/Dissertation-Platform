import { createApp } from 'vue';
import App from '@/App.vue';
import VueStates from '@/lib/VueStates';
import SidebarStates from '@/lib/Sidebar';

const app = createApp(App);
const appState = new VueStates();
const sidebarState = new SidebarStates();

app.mixin({
  computed: {
    $state() {
      return appState;
    },
    $sidestate() {
      return sidebarState;
    },
  },
});

app.mount('#app');
