<template>
    <div id="sidebar">
        <div class="side_button" id="profile">
            <img class="icon" src="@/res/fontawesome/svgs/solid/user.svg">
        </div>
        <div class="side_button" id="recmod">
            <img class="icon" src="@/res/fontawesome/svgs/solid/folder-open.svg">
        </div>
        <div class="side_button" id="allmod">
            <img class="icon" src="@/res/fontawesome/svgs/solid/folder-tree.svg">
        </div>
        <div class="side_button" id="progress">
            <img class="icon" src="@/res/fontawesome/svgs/solid/chart-line.svg">
        </div>
        <div class="side_button" id="settings">
            <img class="icon" src="@/res/fontawesome/svgs/solid/gears.svg">
        </div>
        <div class="side_button" id="logout">
            <img class="icon" src="@/res/fontawesome/svgs/solid/sign-out-alt-solid.svg">
        </div>
    </div>
    <button id="expand" v-on:click="expand()">
        <img class="expand_button" src="@/res/fontawesome/svgs/solid/align-left.svg">
    </button>
</template>

<script>
export default {
  data() {
    return {
      openstate: false,
    };
  },
  methods: {
    expand() {
      const side = document.getElementById('sidebar');
      const sidebutton = document.getElementById('expand');
      if (this.openstate === false) {
        side.style.width = '250px';
        sidebutton.style.left = '260px';
        this.openstate = true;
      } else {
        side.style.width = '80px';
        sidebutton.style.left = '90px';
        this.openstate = false;
      }
    },
  },
};
</script>

<style lang="less">
#sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: grid;
  grid-auto-rows: min-content;
  width: 80px;
  border-style: solid;
  border-width: 2px;
  border-color: black;
    > .side_button {
        background-color: green;
        justify-content: center;
        align-items: center;
        > .icon {
            width: 60px;
            height: 60px;
            color: black;
        }
    }
}
#expand {
    position: absolute;
    left: 90px;
    top: 20px;
    > .expand_button {
        width: 20px;
        height: 20px;
    }
}
</style>
