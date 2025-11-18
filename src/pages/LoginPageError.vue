<template>
  <div>
    <header class="header">
      <div class="container">
        <img class="logo" src="@/assets/images/Logo.png" alt="Logo" />

        <ul class="icons">
          <li>
            <img src="@/assets/images/England.png" alt="England" />
          </li>
          <li>
            <img src="@/assets/images/aid.png" alt="Aid" />
          </li>
        </ul>
      </div>
      <hr />
    </header>
    <div class="box">
      <img src="@/assets/images/travelPhoto.png" alt="Travel Photo" />
      <div class="box-text">
        <h2>Login</h2>
        <h6>Login to access yourEasyset24 account</h6>
        <div class="boxt email">
          <h5>Email</h5>
          <input
            class="box-input"
            type="text"
            placeholder="Easyset24@gmail.com"
          />
        </div>
        <div class="boxt pass">
          <h5>Password</h5>
          <div class="password-wrapper">
            <input
              class="box-input error"
              type="password"
              placeholder="Incorrect password"
            />
            <img
              src="@/assets/images/attention.svg"
              alt="Error"
              class="eye-btn"
            />
          </div>
          <p class="error-text">Wrong password</p>
        </div>

        <div class="box-text-under">
          <div class="box-text-re">
            <input type="checkbox" class="checkbox-input" />
            <h5>Remember me</h5>
          </div>
          <h5 class="forgot">Forgot Password?</h5>
        </div>
        <div class="box-area">
          <button class="login" type="button">Login</button>
          <h5 class="divider">Or</h5>
          <ul class="apps">
            <li>
              <img src="@/assets/images/Facebook.png" alt="Facebook" />
            </li>
            <li>
              <img src="@/assets/images/Apple.png" alt="Apple" />
            </li>
            <li>
              <img src="@/assets/images/Google.png" alt="Google" />
            </li>
          </ul>
          <div class="p">
            <p>"Don't have an account in EasySet24 yet?</p>
            <p class="forgot" @click="$router.push('/register')">Register !</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
      showPassword: {
        password: false,
        confirm: false,
      },
    };
  },
  methods: {
    togglePassword(field) {
      this.showPassword[field] = !this.showPassword[field];
    },
  },
};
</script>


<style src="../pages/auth.css" scoped></style>
