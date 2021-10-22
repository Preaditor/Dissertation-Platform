<template>
  <Wave />
  <Sidebar/>
  <Signup />
</template>

<script>
import Wave from './components/Wave.vue';
import Sidebar from './components/Sidebar.vue';
import Signup from './components/Signup.vue';

export default {
  name: 'App',
  components: {
    Wave,
    Sidebar,
    Signup,
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
