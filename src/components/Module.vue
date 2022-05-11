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
      <h1 class="title" id="title"></h1>
      <p class="detail" id="sect1">
      </p>
      <img class="image_1" id="img1" src=""/>
      <img class="image_2" id="img2" src=""/>
      <p class="detail_r" id="sect2">
      </p>
    </div>
  </div>
</template>

<script>
const content = require('../lib/content.json');

console.log(content);
export default {
  name: 'Module',
  mounted() {
    const sect1 = document.getElementById('sect1');
    const sect2 = document.getElementById('sect2');
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const title = document.getElementById('title');
    sect1.innerText = content.phishing[0].text1;
    sect2.innerText = content.phishing[0].text2;
    img1.src = content.phishing[0].img1;
    img2.src = content.phishing[0].img2;
    title.innerHTML = 'Phishing';
  },
  data() {
    return {
      nav: [
        {
          id: 0,
          title: 'Phishing',
          desc: 'test test test',
          active: false,
        },
        {
          id: 1,
          title: 'Ransom',
          desc: 'test test test',
          active: false,
        },
        {
          id: 2,
          title: 'Social',
          desc: 'test test test',
          active: false,
        },
        {
          id: 3,
          title: 'Quiz',
          desc: 'test test test',
          active: false,
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
      const sect1 = document.getElementById('sect1');
      const sect2 = document.getElementById('sect2');
      const img1 = document.getElementById('img1');
      const img2 = document.getElementById('img2');
      const title = document.getElementById('title');
      console.log(e.value);
      console.log(e);
      console.log(e.target.innerHTML);
      console.log(e.target.id);
      console.log('test');
      const selected = e.target.id;
      if (selected === '0') {
        console.log('selected section: phishing');
        sect1.innerText = content.phishing[0].text1;
        sect2.innerText = content.phishing[0].text2;
        img1.src = content.phishing[0].img1;
        img2.src = content.phishing[0].img2;
        title.innerHTML = 'Phishing';
      } else if (selected === '1') {
        console.log('selected section: ransom');
        console.log(content.ransom[0].text1);
        sect1.innerText = content.ransom[0].text1;
        sect2.innerText = content.ransom[0].text2;
        img1.src = content.ransom[0].img1;
        img2.src = content.ransom[0].img2;
        title.innerHTML = 'Ransom';
      } else if (selected === '2') {
        console.log('Selected section: Social');
        sect1.innerText = content.social[0].text1;
        sect2.innerText = content.social[0].text2;
        img1.src = content.social[0].img1;
        img2.src = content.social[0].img2;
        title.innerHTML = 'Social';
      } else if (selected === '3') {
        console.log('Selected section: Quiz');
        this.$state.setActiveComponent('quiz');
      }
    },
  },
};
</script>

<style lang="less">
#module_interact {
  margin: auto;
  > #nav {
    position: relative;
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
        transition: 0.5s all;
    }
  }
  > #interaction {
    position: relative;
    top: 5%;
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
      border-width: 3px;
      text-align: center;
      align-items: center;
      overflow-y: hidden;
      > .title {
      grid-row: 1;
      text-align: left;
      border-color: black;
      border-width: 3px;
      }
      > .detail {
        grid-row: 2;
        grid-column: 1;
        float: left;
        align-self: center;
        justify-self: center;
        border-color: black;
      border-width: 3px;
        font-size: 25px;
      }
      > .detail_r {
        grid-row: 3;
        grid-column: 2;
        float: right;
        align-self: center;
        justify-self: center;
        border-color: black;
      border-width: 3px;
        font-size: 25px;
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
      border-width: 3px;
      }
  }
}
</style>
