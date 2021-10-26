<template>
  <Wave />
  <component :is="activeComponent"/>
  <Sidebar v-if="!activeComponent.hideSidebar" />
</template>

<script>
import Wave from './components/Wave.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Wave,
    Sidebar,
  },
  computed: {
    activeComponent() {
      return this.$state.getActiveComponent();
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
