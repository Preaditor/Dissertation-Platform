<template>
    <div id="main_container">
        <div id="general" class="info_container">
            <div class="data">
                <p class="naming"> Email: </p>
                <p class="info" id="email"> Email </p>
            </div>
            <div class="data">
                <p class="naming"> First Name: </p>
                <p class="info" id="fname"> First Name </p>
            </div>
            <div class="data">
                <p class="naming"> Last Name: </p>
                <p class="info" id="lname"> Last Name </p>
            </div>
            <div class="data">
                <p class="naming" @click="change_pass()"> Password: </p>
                <!-- need to add hint for the hidden button -->
                <p class="info" id="pass" >  ***** </p>
            </div>
        </div>
        <div id="module" class="info_container">
            <!-- maybe dynamically add modules based on current active modules -->
        </div>
        <button id="request_data" @click="GDPR()"> Request Data </button>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
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
    align-content: center;
    align-items: center;
    > .info_container {
        display: grid;
        font-family: "Manjari", sans-serif;
        position: absolute;
        top: 30%;
        border-style: solid;
        border-color: black;
        border-width: 2px;
        > .data {
            display: grid;
            column-gap: 5%;
            > .info {
                grid-column: 2;
                font-size: 22px;
                color: black;
            }
            > .naming {
                grid-column: 1;
                font-size: 24px;
                color: black;
            }
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
    }
}
</style>
