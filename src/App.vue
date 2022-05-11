<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <Wave class="wave"/>
  <component class="mainContent" :is="$state.getActiveComponent()"/>
  <Sidebar class="sidebar" v-if="$state.showSidebar" />
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
  overflow-y: hidden;
}
</style>
