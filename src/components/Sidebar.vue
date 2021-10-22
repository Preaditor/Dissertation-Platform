<template>
    <div id="sidebar">
        <div class="side_button" id="profile" v-on:click="profile">
            <img class="icon" src="@/res/fontawesome/svgs/solid/user.svg">
            <p id="naming">Profile</p>
        </div>
        <div class="side_button" id="recmod" v-on:click="recent">
            <img class="icon" src="@/res/fontawesome/svgs/solid/folder-open.svg">
            <p id="naming">Recent</p>
        </div>
        <div class="side_button" id="allmod" v-on:click="allmods">
            <img class="icon" src="@/res/fontawesome/svgs/solid/folder-tree.svg">
            <p id="naming">All Modules</p>
        </div>
        <div class="side_button" id="progress" v-on:click="progress">
            <img class="icon" src="@/res/fontawesome/svgs/solid/chart-line.svg">
            <p id="naming">Progress</p>
        </div>
        <div class="side_button" id="settings" v-on:click="settings">
            <img class="icon" src="@/res/fontawesome/svgs/solid/gears.svg">
            <p id="naming">Settings</p>
        </div>
        <div class="side_button" id="logout" v-on:click="logout">
            <img class="icon" src="@/res/fontawesome/svgs/solid/sign-out-alt-solid.svg">
            <p id="naming">Sign Out</p>
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
      const names = document.getElementById('naming');
      if (this.openstate === false) {
        side.style.width = '190px';
        sidebutton.style.left = '200px';
        names.style.visibility = 'visible';
        this.openstate = true;
      } else {
        side.style.width = '90px';
        sidebutton.style.left = '100px';
        names.style.visibility = 'hidden';
        this.openstate = false;
      }
    },
    logout() {
      console.log('logout');
    },
    settings() {
      console.log('settings');
    },
    profile() {
      console.log('profile');
    },
    recent() {
      console.log('recent');
    },
    allmods() {
      console.log('all modules');
    },
    progress() {
      console.log('progress');
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
  width: 90px;
    > .side_button {
        display: grid;
        grid-auto-columns: min-content;
        justify-content: center;
        align-items: center;
        > .icon {
            width: 60px;
            height: 60px;
            color: black;
            padding: 10px;
            grid-column: 1;
            align-self: left;
        }
        > #naming {
            grid-column: 2;
            font-size: 22px;
            color: black;
            visibility: hidden;
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
