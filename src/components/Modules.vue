<template>
    <div id="module_container" ref="modules">
      <div id="module_sub">
        <div id="Social">
          <p>Social Engineering</p>
          <div
            v-for="module in modules"
            class="module"
            :key="module.id"
          >
            <img class="icon" :src="module.image">
            <label class="title">{{ module.title }}</label>
            <label class="desc">{{ module.desc }}</label>
          </div>
        </div>
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
          image: 'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984 .7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96s-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256S191.3 263.8 190.8 267.6l94.68 47.34C302.8 298.3 326.1 288 352 288C405 288 448 330.1 448 384z"/></svg>',
        },
        {
          id: 1,
          title: 'Ransom',
          desc: 'test test test',
          active: false,
          image: 'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984 .7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96s-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256S191.3 263.8 190.8 267.6l94.68 47.34C302.8 298.3 326.1 288 352 288C405 288 448 330.1 448 384z"/></svg>',
        },
        {
          id: 2,
          title: 'Social',
          desc: 'test test test',
          active: false,
          image: 'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984 .7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96s-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256S191.3 263.8 190.8 267.6l94.68 47.34C302.8 298.3 326.1 288 352 288C405 288 448 330.1 448 384z"/></svg>',
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style lang="less">
#module_container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  > #module_sub {
    position: absolute;
    top: 30%;
    padding: 20px;
    > #social {
      border-style: solid;
      border-width: 10px;
      border-color: black;
    }
      > .module {
        display: grid;
        column-gap: 20px;
        row-gap: 20px;
        font-family: "Manjari", sans-serif;
        border-style: solid;
        border-width: 2px;
        border-color: black;
        > .icon {
          width: 80px;
          height: 80px;
          grid-row: 2;
          grid-column: 1;
        }
        > .title {
          grid-row: 1;
          grid-column: 1;
        }
        > .desc {
          grid-row: 2;
          grid-column: 2;
        }
  }
  }
}
</style>
