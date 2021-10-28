<template>
  <div id="login_form">
    <form class="form" id="form_pt1" @submit.prevent="Login">
      <h1 id="title-main">Ready to continue?</h1>
      <input
        id="input-u"
        class="user_info"
        type="text"
        name="email"
        placeholder="Email"
        v-model="email"
      />
      <input
        id="input-p"
        class="user_info"
        type="password"
        name="pass"
        placeholder="Password"
        v-model="password"
      />
      <div id="remember_info">
        <label>Remember me</label>
        <input id="remember" type="checkbox" value="" v-model="remember" />
      </div>
      <p
        style="
          color: rgb(0, 0, 0);
          margin-top: 5px;
          padding-bottom: 0;
          width: 500px;"
      >
        Don't have an account?
        <button name="signup" id="Signup" type="button" @click="Signup">Sign Up! </button>
      </p>
      <p style="color: red; padding-bottom: 0; width: 500px"></p>

      <button name="login" id="input-submit" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'user-login',
  data() {
    return {
      email: '',
      email_valud: true,
      email_pattern: new RegExp(/^\S+@\S+(\.\S+)+$/),
      password: '',
      remember: false,
      testing: 'test123',
    };
  },
  computed: {
    email_check() {
      if (!this.email) {
        return '';
      }

      return this.email_pattern.test(this.email)
        ? console.log('input--valid')
        : console.log('input--invalid');
    },
  },
  methods: {
    Login() {
      this.$state.setActiveComponent('profile');
    },
    Signup() {
      console.log('signup');
      this.$state.setActiveComponent('signup');
    },
  },
};
</script>

<style lang="less">
#login_form {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  z-index: 10;
  > form {
    font-family: "Manjari", sans-serif;
    position: absolute;
    top: 30%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    > input {
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
    > .user_info {
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
    > #input-submit {
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
    > #Signup {
        height: 45px;
        border-radius: 30px;
        width: 5vw;
        text-transform: uppercase;
        color: white;
        border: none;
        outline: none;
        text-decoration: none;
        background-color: #3f436e;
        margin-top: 20px;
        transition: 0.5s all;
    }
    > #title-main {
        font-size: 2vw;
    }
    > #remember_info {
        display: inline-block;
    }
  }
}
</style>
