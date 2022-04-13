import { reactive, markRaw } from 'vue';

import Sidebar from '@/components/Sidebar.vue';
import Login from '@/components/Login.vue';
import Signup from '@/components/Signup.vue';
import Profile from '@/components/Profile.vue';
import Modules from '@/components/Modules.vue';
import Module from '@/components/Module.vue';
import Report from '@/components/Report.vue';
import Feedback from '@/components/Feedback.vue';

export default class VueStates {
  constructor() {
    this.components = {
      sidebar: markRaw(Sidebar),
      login: markRaw(Login),
      signup: markRaw(Signup),
      profile: markRaw(Profile),
      modules: markRaw(Modules),
      module: markRaw(Module),
      report: markRaw(Report),
      feedback: markRaw(Feedback),
    };
    this.reactive = reactive(Object.create(null));
    this.reactive.activeComponent = this.components.login;
    this.reactive.showSidebar = false;
  }

  get showSidebar() {
    return this.reactive.showSidebar;
  }

  getActiveComponent() {
    return this.reactive.activeComponent;
  }

  setActiveComponent(name) {
    const disableSidebarComponents = [this.components.login, this.components.signup];
    this.reactive.activeComponent = this.components[name] || this.components.notfound;
    this.reactive.showSidebar = !disableSidebarComponents.includes(this.reactive.activeComponent);
  }
}
