<template>
    <div id="main_container">
        <div id="general" class="info_container">
            <div class="data">
            <p class="info" id="email"> Email </p>
            </div>
            <div class="data">
            <p class="info" id="fname"> First Name </p>
            </div>
            <div class="data">
            <p class="info" id="lname"> Last Name </p>
            </div>
        </div>
        <div id="module" class="info_container">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
  },
  methods: {
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
        > .data {
            display: grid;
            > .info {
                font-size: 22px;
                color: black;
            }
        }
    }
}
</style>
