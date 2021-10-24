<template>
  <Wave />
  <component id="component" :is="$state.getActiveComponent()"/>
</template>

<script>
import Wave from './components/Wave.vue';

export default {
  name: 'App',
  components: {
    Wave,
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
