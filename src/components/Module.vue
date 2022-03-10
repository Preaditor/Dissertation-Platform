<template>
  <div id="module_interact">
    <div id="nav">
          <button v-for="module in nav"
          class="nav_button"
          :key="module.id"
          @click="module.func">{{ module.title }}</button>
    </div>
    <div id="interaction">
      <div class="canvas">
        <div class="notepad">
          <div class="cover">
          </div>
          <div class="page one">
            <p>Hello<br />World!</p>
          </div>
          <div class="page two"></div>
          <div class="page three"></div>
        <div class="page four"></div>
      </div>
      <div class="pencil">
        <div class="edge"></div>
      </div>
      </div>
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
          title: 'Social',
          desc: 'test test test',
          active: false,
          image: 'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984 .7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96s-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256S191.3 263.8 190.8 267.6l94.68 47.34C302.8 298.3 326.1 288 352 288C405 288 448 330.1 448 384z"/></svg>',
          func: 'intro',
        },
        {
          id: 4,
          title: 'test',
          desc: 'test test test',
          active: false,
          image: 'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984 .7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96s-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256S191.3 263.8 190.8 267.6l94.68 47.34C302.8 298.3 326.1 288 352 288C405 288 448 330.1 448 384z"/></svg>',
          func: 'intro',
        },
      ],
    };
  },
  methods: {
    intro() {
      console.log('test');
    },
  },
};
</script>

<style lang="less">
#nav {
    padding-top: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .nav_button {
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

body {
  margin: 0;
  padding: 0;
  background-color: #618b9e;
  font-family: 'Indie Flower', cursive, sans-serif;
}

.canvas {
  width: 100vw;
  height: 100vw;
  max-width: 250px;
  max-height: 250px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.notepad {
  position: relative;
  width: 200px;
  height: 250px;
  perspective: 1000px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14),
  0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
}

.notepad .cover,
.notepad .page {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
}

.notepad .cover {
  background: linear-gradient(to right, #24374a 10%, #33495f 10%);
  transform-origin: left center;
  transition: 2s;
  z-index: 20;
  animation: flip 6s infinite ease-in-out;
}

.notepad .cover:before {
  content: '';
  position: absolute;
  top: 15%;
  left: 35%;
  width: 40%;
  height: 20%;
  background-color: #455d75;
  animation: title 6s infinite ease-in-out;
}

.notepad .cover:after {
  content: '';
  position: absolute;
  top: 43%;
  left: 38%;
  width: 34%;
  height: 5%;
  background-color: #455d75;
  animation: title 6s infinite ease-in-out;
}

.notepad .page {
  background: #eee;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
}

.notepad .page:after {
  content: '';
  position: absolute;
  top: 0;
  left: 5%;
  width: 90%;
  height: 100%;
  background: linear-gradient( #eee 0%, #eee 10%,
  #dfdfdf 10%, #dfdfdf 11%, #eee 11%, #eee 20%, #dfdfdf 20%,
  #dfdfdf 21%, #eee 21%, #eee 30%, #dfdfdf 30%, #dfdfdf 31%, #eee 31%,
  #eee 40%, #dfdfdf 40%, #dfdfdf 41%, #eee 41%, #eee 50%, #dfdfdf 50%,
  #dfdfdf 51%, #eee 51%, #eee 60%, #dfdfdf 60%, #dfdfdf 61%, #eee 61%,
  #eee 70%, #dfdfdf 70%, #dfdfdf 71%, #eee 71%, #eee 80%, #dfdfdf 80%,
  #dfdfdf 81%, #eee 81%, #eee 90%, #dfdfdf 90%, #dfdfdf 91%, #eee 91%,
  #eee 100%);
}

.page p {
  position: absolute;
  top: 18%;
  left: 28%;
  z-index: 2;
  width: 0;
  height: 135px;
  margin: 0;
  font-size: 40px;
  text-align: left;
  overflow: hidden;
  animation: write 6s infinite linear;
}

.page.one {
  z-index: 4;
  animation: one 6s infinite ease-in-out;
}

.page.one:before {
  position: absolute;
}

.page.two {
  z-index: 3;
  animation: two 6s infinite ease-in-out;
}

.page.three {
  z-index: 2;
  animation: three 6s infinite ease-in-out;
}

.page.four {
  z-index: 1;
  border-right-width: 0;
}

.page:before {
  content: '';
  position: absolute;
  right: -7%;
  width: 7%;
  height: 10%;
  border-radius: 0 0 20% 0;
}

.page.one:before {
  top: 10%;
  background-color: #cc881b;
}

.page.two:before {
  top: 20%;
  background-color: #49a84d;
}

.page.three:before {
  top: 30%;
  background-color: #bf351f;
}

.page.four:before {
  top: 40%;
  background-color: #d68384;
}

.pencil {
  position: absolute;
  bottom: 5%;
  right: -5%;
  width: 15%;
  height: 35%;
  border-radius: 10% 10% 0 0;
  background: linear-gradient(#dd574b 20%, #bbb 20%, #bbb 30%, #e67e22 30%,
  #e67e22 72%, #ffe0a7 72%, #ffe0a7 85%, transparent 85%);
  overflow: hidden;
  animation: draw 6s infinite ease-out;
}

.pencil:before {
  content: '';
  position: absolute;
  bottom: -10%;
  left: 0;
  border-top: 12px solid #333;
  border-left: 19px solid transparent;
  border-right: 19px solid transparent;
  border-bottom: 10px solid transparent;
}

.pencil:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 85%;
  background-color: rgba(0, 0, 0, .2);
  border-top-right-radius: 20%;
}

.pencil .edge:before {
  content: '';
  position: absolute;
  bottom: 14%;
  left: 0;
  border: 9px solid transparent;
  border-bottom: 4px solid #333;
}

.pencil .edge:after {
  content: '';
  position: absolute;
  bottom: 14%;
  right: 0;
  border: 9px solid transparent;
  border-bottom: 4px solid #333;
  z-index: 2;
}

@keyframes flip {
  0%,
  30%,
  100% {
    transform: rotateY(0deg);
  }
  50%,
  80% {
    transform: rotateY(-150deg);
  }
  80% {
    background: linear-gradient(to right, #1a2938 15%, #1a2938 15%);
  }
}

@keyframes title {
  0%,
  40%,
  90% {
    background-color: #455d75;
  }
  41%,
  89% {
    background-color: transparent;
  }
}

@keyframes draw {
  0%,
  40%,
  88% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-180px, -180px) rotate(20deg);
  }
  55% {
    transform: translate(-160px, -80px) rotate(20deg);
  }
  60% {
    transform: translate(-140px, -180px) rotate(20deg);
  }
  65% {
    transform: translate(-120px, -80px) rotate(20deg);
  }
  70% {
    transform: translate(-100px, -180px) rotate(20deg);
  }
  75% {
    transform: translate(-80px, -80px) rotate(20deg);
  }
  80% {
    transform: translate(-60px, -180px) rotate(20deg);
  }
}

@keyframes write {
  0%,
  52% {
    width: 0;
  }
  57% {
    width: 20px;
  }
  62% {
    width: 40px;
  }
  68% {
    width: 60px;
  }
  72% {
    width: 80px;
  }
  78%,
  100% {
    width: 120px;
  }
}

@keyframes one {
  0%,
  30%,
  100% {
    width: 100%;
  }
  50%,
  80% {
    width: 97%;
  }
}

@keyframes two {
  0%,
  30%,
  100% {
    width: 100%;
  }
  50%,
  80% {
    width: 98%;
  }
}

@keyframes three {
  0%,
  30%,
  100% {
    width: 100%;
  }
  50%,
  80% {
    width: 99%;
  }
}
}
</style>
