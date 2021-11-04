import { reactive, markRaw } from 'vue';

import Sidebar from '@/components/Sidebar.vue';

export default class SidebarStates {
  constructor() {
    this.components = {
      sidebar: markRaw(Sidebar),
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
