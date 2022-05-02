<template>
    <div id="main_container">
        <div id="general" class="info_container">
            <div class="data">
                <p class="naming"> Email: </p>
                <p class="info" id="email" :innerHTML="user"> </p>
            </div>
            <div class="data">
                <p class="naming" @click="change_pass()"> Password: </p>
                <!-- need to add hint for the hidden button -->
                <p class="info" id="pass" >  ***** </p>
            </div>
            <div class="data">
              <p class="naming"> Colour: </p>
              <svg
              id="colour" class="info"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              :fill="colour">
                <path d="M512 256c0 141.4-114.6 256-256
                256s-256-114.6-256-256s114.6-256 256-256S512 114.6 512 256z"/>
              </svg>
            </div>
            <button id="request_data" @click="GDPR()"> Request Data </button>
        </div>
        <div id="module" class="info_container">
            <!-- maybe dynamically add modules based on current active modules -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      colour: '#4779d6',
      user: localStorage.getItem('user'),
    };
  },
  methods: {
    GDPR() {
      console.log('request data - gdpr compliance');
      // request all user data to comply with GDPR
    },
    change_pass() {
      console.log('change password');
      // allow password to be changed *** need to create password change form ***
    },
  },
};
</script>

<style lang="less">
#main_container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
    > .info_container {
        position: absolute;
        top: 30%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        > .data {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            align-items: center;
            > .naming {
                padding-right: 5%;
                font-size: 2em;
                font-weight: bold;
            }
            > .info {
                font-size: 2em;
                font-weight: bold;
                color: #4779d6;
            }
            > #colour {
                color: blue;
                height: 40px;
                width: 40px;
                align-self: right;
            }
        }
        > #request_data {
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
            justify-self: center;
        }
    }
}
</style>
