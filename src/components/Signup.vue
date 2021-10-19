<template>
    <div id="login_form">
        <form class="form" id="form_pt1" action="">
        <h1 id="title-main">Ready to continue?</h1>
        <input
          id="input-u"
          class="user_info"
          type="text"
          name="email"
          value=""
          placeholder="Email"
        />
        <input
          id="input-p"
          class="user_info"
          type="password"
          name="pass"
          value=""
          placeholder="Password"
        />
        <input
          id="input-p2"
          class="user_info"
          type="password"
          name="pass"
          value=""
          placeholder="Confirm Password"
        />
        <input
          id="input-firstname"
          class="user_info"
          type="text"
          name="firstname"
          value=""
          placeholder="First Name"
        />
        <input
          id="input-lastname"
          class="user_info"
          type="text"
          name="lastname"
          value=""
          placeholder="Last Name"
        />
        <div id="remember_info">
          <label>Remember me</label>
          <input id="remember" type="checkbox" value="" />
        </div>
        <p
          style="
            color: rgb(0, 0, 0);
            margin-top: 5px;
            padding-bottom: 0;
            width: 500px;
          "
        >
          Don't have an account?
          <a href="../SignUp/index.php">Join Today!</a>
        </p>
        <p style="color: red; padding-bottom: 0; width: 500px"></p>

        <button name="login" id="input-submit" type="button" v-on:click="Login()" >
          Login
        </button>
      </form>
    </div>
</template>

<script>
</script>

<style lang="less">
#login_form {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  z-index: 10;
}
form {
  font-family: "Manjari", sans-serif;
  position: absolute;
  top: 30%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
}
input {
  width: 25vw;
  outline: none;
  border: none;
  border-radius: 30px;
  height: 45px;
  margin-left: 20px;
  margin-top: 20px;
  color: #3b3b3b;
  border-width: 5px;
  border-color: #3b3b3b;
  border-radius: 30px;
}
.user_info {
  width: 20vw;
  outline: none;
  border: solid;
  border-radius: 0px 30px 30px 0px;
  height: 45px;
  padding-left: 20px;
  margin-top: 20px;
  color: #3b3b3b;
  font-size: 18px;
  text-align: center;
}
#input-submit {
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
#title-main {
  font-size: 2vw;
}
#remember_info {
  display: inline-block;
}
</style>
