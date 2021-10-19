<template>
  <Wave />
  <Login />
</template>

<script>
import Wave from './components/Wave.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Wave,
    Login,
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
