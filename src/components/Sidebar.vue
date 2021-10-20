<template>
    <div id="sidebar">
        <div class="side_button" id="profile">
        </div>
        <div class="side_button" id="recmod">
        </div>
        <div class="side_button" id="allmod">
        </div>
        <div class="side_button" id="settings">
        </div>
        <div class="side_button" id="logout">
        </div>
    </div>
</template>

<script>

</script>

<style lang="less">
#sidebar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
    display: flex;
    width: 150px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    > .side_button {
        background-color: green;
    }
}
</style>
