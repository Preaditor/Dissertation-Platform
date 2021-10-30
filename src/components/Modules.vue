<template>
    <div id="module_container" ref="modules">
      <div
      v-for="module in modules"
      class="module"
      :key="module.id"
      >
        <img :src="module.image">
        <label class="title">{{ module.title }}</label>
        <label class="description">{{ module.desc }}</label>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Modules',
  data() {
    return {
      modules: [
        {
          id: 0,
          title: 'Phishing',
          desc: 'test test test',
          active: false,
          image: '@/res/fontawesome/svgs/solid/share-nodes.svg',
        },
        {
          id: 1,
          title: 'Ransom',
          desc: 'test test test',
          active: false,
          image: '@/res/fontawesome/svgs/solid/share-nodes.svg',
        },
        {
          id: 2,
          title: 'Social',
          desc: 'test test test',
          active: false,
          image: '@/res/fontawesome/svgs/solid/share-nodes.svg',
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style lang="less">
</style>
