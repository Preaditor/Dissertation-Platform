<template>
    <div id="sidebar" :class="{'sidebar-expand': openstate}">
        <div class="side_button" id="profile" @click="profile">
            <img class="icon" src="@/res/fontawesome/svgs/solid/user.svg">
            <p id="naming">Profile</p>
        </div>
        <div class="side_button" id="recmod" @click="recent">
            <img class="icon" src="@/res/fontawesome/svgs/solid/folder-open.svg">
            <p id="naming">Recent</p>
        </div>
        <div class="side_button" id="allmod" @click="allmods">
            <img class="icon" src="@/res/fontawesome/svgs/solid/folder-tree.svg">
            <p id="naming">All Modules</p>
        </div>
        <div class="side_button" id="progress" @click="progress">
            <img class="icon" src="@/res/fontawesome/svgs/solid/chart-line.svg">
            <p id="naming">Progress</p>
        </div>
        <div class="side_button" id="logout" @click="logout">
            <img class="icon" src="@/res/fontawesome/svgs/solid/sign-out-alt-solid.svg">
            <p id="naming">Sign Out</p>
        </div>
        <div class="side_button" id="report" @click="report">
            <img class="icon" src="@/res/fontawesome/svgs/solid/clipboard-list.svg">
            <p id="naming">Report</p>
        </div>
        <div class="side_button" id="feedback" @click="feedback">
          <img class="icon" src="@/res/fontawesome/svgs/solid/clipboard-list.svg">
            <p id="naming">Feedback</p>
        </div>
        <button id="expand" @click="openstate=!openstate">
            <img class="expand_button" src="@/res/fontawesome/svgs/solid/align-left.svg">
        </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      openstate: false,
    };
  },
  methods: {
    logout() {
      console.log('logout');
      this.$state.setActiveComponent('login');
    },
    profile() {
      console.log('profile');
      this.$state.setActiveComponent('profile');
    },
    recent() {
      console.log('recent');
      this.$state.setActiveComponent('module');
    },
    allmods() {
      console.log('all modules');
      this.$state.setActiveComponent('modules');
    },
    progress() {
      console.log('progress');
      this.$state.setActiveComponent('progress');
    },
    report() {
      console.log('report');
      this.$state.setActiveComponent('report');
    },
    feedback() {
      console.log('feedback');
      this.$state.setActiveComponent('feedback');
    },
  },
};
</script>

<style lang="less">
#sidebar {
  position: fixed;
  left: 0;
  top: 2%;
  bottom: 0;
  display: grid;
  grid-auto-rows: min-content;
  width: 90px;
    > .side_button {
        display: grid;
        column-gap: 5vw;
        grid-auto-columns: min-content;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
        > .icon {
            width: 60px;
            height: 60px;
            color: black;
            padding: 10px;
            grid-column: 1;
            position: absolute;
        }
        > #naming {
            grid-column: 2;
            font-size: 22px;
            color: black;
            visibility: hidden;
        }
    }

    &.sidebar-expand {
        width: 190px;
        >.side_button {
          #naming {
            visibility: visible;
          }
        }
        #expand {
        left: 200px;
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
