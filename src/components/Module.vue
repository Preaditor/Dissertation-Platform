<template>
  <div id="module_interact">
    <div id="nav">
          <button v-for="module in nav"
          :id="module.id"
          class="nav_button"
          :key="module.id"
          @click="intro($event)">{{ module.title }}</button>
    </div>
    <div id="interaction">
      <p class="title"> Title</p>
      <h1 class="detail"> Detial</h1>
      <img class="image_1" src="https://blog.malwarebytes.com/wp-content/uploads/2018/09/shutterstock_749866270-900x506.jpg"/>
      <img class="image_2" src="https://blog.malwarebytes.com/wp-content/uploads/2018/09/shutterstock_749866270-900x506.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Module',
  data() {
    return {
      nav: [
        {
          id: 0,
          title: 'Phishing',
          desc: 'test test test',
          active: false,
          image: 'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984 .7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96s-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256S191.3 263.8 190.8 267.6l94.68 47.34C302.8 298.3 326.1 288 352 288C405 288 448 330.1 448 384z"/></svg>',
          func: 'intro',
        },
        {
          id: 1,
          title: 'Ransom',
          desc: 'test test test',
          active: false,
          image: 'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984 .7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96s-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256S191.3 263.8 190.8 267.6l94.68 47.34C302.8 298.3 326.1 288 352 288C405 288 448 330.1 448 384z"/></svg>',
          func: 'intro',
        },
        {
          id: 2,
          title: 'Social',
          desc: 'test test test',
          active: false,
          image: 'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984 .7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96s-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256S191.3 263.8 190.8 267.6l94.68 47.34C302.8 298.3 326.1 288 352 288C405 288 448 330.1 448 384z"/></svg>',
          func: 'intro',
        },
        {
          id: 3,
          title: 'test',
          desc: 'test test test',
          active: false,
          image: 'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984 .7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96s-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256S191.3 263.8 190.8 267.6l94.68 47.34C302.8 298.3 326.1 288 352 288C405 288 448 330.1 448 384z"/></svg>',
          func: 'intro',
        },
      ],
      content: [
        {
          title: 'Phishing',
          overview: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
          detail: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
          image_1: 'https://blog.malwarebytes.com/wp-content/uploads/2018/09/shutterstock_749866270-900x506.jpg',
          image_2: 'https://www.kaspersky.com/content/en-global/images/repository/isc/2017-images/spam-phishing-img-02.jpg',
        },
        {
          title: 'Ransom',
          overview: '',
          detail: '',
          image_1: '',
          image_2: '',
        },
        {
          title: 'Social',
          overview: '',
          detail: '',
          image_1: '',
          image_2: '',
        },
      ],
    };
  },
  methods: {
    intro(e) {
      console.log(e.value);
      console.log(e);
      console.log(e.target.innerHTML);
      console.log(e.target.id);
      console.log('test');
      const selected = e.target.id;
      if (selected === '0') {
        console.log('selected section: phishing');
      } else if (selected === '1') {
        console.log('selected section: ransom');
      } else if (selected === '2') {
        console.log('Selected section: Social');
      } else if (selected === '3') {
        console.log('Selected section: test');
      }
    },
  },
};
</script>

<style lang="less">
#module_interact {
  > #nav {
    padding-top: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    > .nav_button {
            height: 45px;
        border-radius: 30px;
        width: 15vw;
        text-transform: uppercase;
        color: white;
        border: none;
        outline: none;
        text-decoration: none;
        background-color: #3f436e;
        margin-top: 20px;
        transition: 0.5s all;
    }
  }
  > #interaction {
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 0px 0px;
      grid-template-areas:
      ". ."
      ". ."
      ". .";
      width: 80%;
      height: 80%;
      border-color: black;
      border-style: solid;
      border-width: 3px;
      > .title {
        grid-row: 1;
        text-align: left;
      }
      > .detial {
        grid-row: 2;
        float: left;
      }
      > .image_1 {
        grid-row: 2;
        float: right;
      }
      > .image_2 {

      }
  }
}
</style>
