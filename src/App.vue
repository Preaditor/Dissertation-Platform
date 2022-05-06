<template>
  <div class="component-2-–-1">
    <Wave class="component-2-–-1__4d7db5f776d746ccbb0db4a75ebbd492"/>
    <component class="component-2-–-1__c5d07" :is="$state.getActiveComponent()"/>
    <Sidebar v-if="$state.showSidebar" class="component-2-–-1__06d8aa9eaa7d4b61900a14288447c89e"/>
  </div>
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
</style>
