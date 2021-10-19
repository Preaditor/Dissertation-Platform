<template>
  <div id="background">
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <path
        id="cv"
        d="M0 119L40 121.3C80 123.7 160 128.3 240 133.3C320 138.3 400 143.7 480 137.2C560 130.7
        640 112.3 720 104C800 95.7 880 97.3 960 109.2C1040 121 1120 143 1200 145.7C1280 148.3
        1360 131.7 1400 123.3L1440 115L1440 0L1400 0C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880
        0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0L0 0Z"
        :fill="colour"
      ></path>
      <path
        id="cvs"
        d="M0 119L40 121.3C80 123.7 160 128.3 240 133.3C320 138.3 400 143.7 480 137.2C560 130.7
        640 112.3 720 104C800 95.7 880 97.3 960 109.2C1040 121 1120 143 1200 145.7C1280 148.3
        1360 131.7 1400 123.3L1440 115"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="miter"
        stroke="rgba(255, 255, 255, 0.4)"
        stroke-width="3%"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      colour: '#4779d6',
      counter: 0,
      forward: true,
    };
  },
  methods: {},
};
</script>

<style lang='less'>
#background {
  position: fixed;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  > svg {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
