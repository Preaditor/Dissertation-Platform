import { reactive, markRaw } from 'vue';

import Sidebar from '@/components/Sidebar.vue';
import Login from '@/components/Login.vue';
import Settings from '@/components/Settings.vue';
import Signup from '@/components/Signup.vue';
import Profile from '@/components/Profile.vue';
import Modules from '@/components/Modules.vue';
import Module from '@/components/Module.vue';

export default class VueStates {
  constructor() {
    this.components = {
      sidebar: markRaw(Sidebar),
      login: markRaw(Login),
      settings: markRaw(Settings),
      signup: markRaw(Signup),
      profile: markRaw(Profile),
      modules: markRaw(Modules),
      module: markRaw(Module),
    };
    this.reactive = reactive(Object.create(null));
    this.reactive.activeComponent = this.components.login;
  }

  getActiveComponent() {
    return this.reactive.activeComponent;
  }

  setActiveComponent(name) {
    this.reactive.activeComponent = this.components[name] || this.components.notfound;
  }
}
