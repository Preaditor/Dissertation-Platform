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
      <h1 class="title"> Phishing</h1>
      <p class="detail">
        Frontend is a common term for the interface and features the user will interact with,
        it is here where the design and overall look of the app/website is implemented.
        However, with the design, it is imperative that various factors are considered such as
        accessibility and ease of use are well thought-out, this allows more people
        to use the site with minimal difficulty. Moreover, “The objective of designing a site is to
        ensure that when the users open up the site they see the information
        in a format that is easy to read and relevant”, this statement suggests that any none
        essential pieces of information should be removed. Furthermore, frontend
        development needs to take into account of changing factors such as display size,
        resolution as well as browser specific differences,
        all of the previous factor into the overall development time and resources required.
      </p>
      <img class="image_1" src="https://blog.malwarebytes.com/wp-content/uploads/2018/09/shutterstock_749866270-900x506.jpg"/>
      <img class="image_2" src="https://blog.malwarebytes.com/wp-content/uploads/2018/09/shutterstock_749866270-900x506.jpg"/>
      <p class="detail_r">
        Frontend is a common term for the interface and features the user will interact with,
        it is here where the design and overall look of the app/website is implemented.
        However, with the design, it is imperative that various factors are considered such as
        accessibility and ease of use are well thought-out, this allows more people
        to use the site with minimal difficulty. Moreover, “The objective of designing a site is to
        ensure that when the users open up the site they see the information
        in a format that is easy to read and relevant”, this statement suggests that any none
        essential pieces of information should be removed. Furthermore, frontend
        development needs to take into account of changing factors such as display size,
        resolution as well as browser specific differences,
        all of the previous factor into the overall development time and resources required.
      </p>
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
  margin: auto;
  padding-top: 5%;
  > #nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
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
      grid-template-rows: 0.2fr 1fr 1fr;
      gap: 0px 2%;
      grid-template-areas:
      ". ."
      ". ."
      ". .";
      width: 80%;
      height: 50%;
      border-color: black;
      border-style: solid;
      border-width: 3px;
      text-align: center;
      align-items: center;
      > .title {
      grid-row: 1;
      text-align: left;
      border-color: black;
      border-style: solid;
      border-width: 3px;
      }
      > .detail {
        grid-row: 2;
        grid-column: 1;
        float: left;
        align-self: center;
        justify-self: center;
        border-color: black;
      border-style: solid;
      border-width: 3px;
      }
      > .detail_r {
        grid-row: 3;
        grid-column: 2;
        float: right;
        align-self: center;
        justify-self: center;
        border-color: black;
      border-style: solid;
      border-width: 3px;
      }
      > .image_1 {
        height: 80%;
        width: 80%;
        grid-row: 2;
        grid-column: 2;
        align-self: center;
        justify-self: center;
        float: right;
              border-color: black;
      border-style: solid;
      border-width: 3px;
      }
      > .image_2 {
        height: 80%;
        width: 80%;
        grid-row: 3;
        grid-column: 1;
        align-self: center;
        justify-self: center;
        float: right;
              border-color: black;
      border-style: solid;
      border-width: 3px;
      }
  }
}
</style>
