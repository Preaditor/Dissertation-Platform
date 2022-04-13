<template>
    <div id="login_form">
        <form class="form" id="form_pt1" @submit.prevent="Signup">
        <h1 id="title-main">Ready to continue?</h1>
        <input
          id="input-u"
          class="user_info"
          type="text"
          v-model="email"
          placeholder="Email"
        />
        <input
          id="input-p"
          class="user_info"
          type="password"
          v-model="pass1"
          placeholder="Password"
        />
        <input
          id="input-p2"
          class="user_info"
          type="password"
          v-model="pass2"
          placeholder="Confirm Password"
        />
        <input
          id="input-firstname"
          class="user_info"
          type="text"
          v-model="fname"
          placeholder="First Name"
        />
        <input
          id="input-lastname"
          class="user_info"
          type="text"
          v-model="lname"
          placeholder="Last Name"
        />
        <div id="recaptcha">
          <!-- insert recaptcha here -->
        </div>
        <p
          style="
            color: rgb(0, 0, 0);
            margin-top: 5px;
            padding-bottom: 0;
            width: 500px;
          "
        >
          Already have an account?
        <button name="login" id="input-submit" type="button" @click="Login()"> Login </button>
        </p>
        <p style="color: red; padding-bottom: 0; width: 500px"></p>

        <button name="login" id="input-submit" type="submit">
         Signup
        </button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'signup',
  data() {
    return {
      email: '',
      email_valid: true,
      email_pattern: new RegExp(/^\S+@\S+(\.\S+)+$/),
      pass1: '',
      pass2: '',
      fname: '',
      lname: '',
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
      console.log('works');
      this.$state.setActiveComponent('login');
    },
    Signup() {
      console.log('signup');
      if (this.email === '' || this.pass1 === '' || this.pass2 === '' || this.fname === '' || this.lname === '') {
        console.log('empty');
        alert('Please fill out all fields');
      }
      if (this.pass1.length < 8) {
        console.log('password too short');
      }
      if (this.pass1 !== this.pass2) {
        console.log('passwords dont match');
      } else {
        console.log('password match');
        return fetch('//192.168.1.121:3000/api/sign_up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            signupinfo: [{
              First_Name: this.fname,
              Last_Name: this.lname,
              Email: this.email,
              Pass: this.pass1,
            }],
          }),
        }).then(() => {
          this.$state.setActiveComponent('login');
        });
      }
      return true;
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
    top: 25%;
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
    > #recaptcha {
      width: 20vw;
      margin-top: 20px;
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
