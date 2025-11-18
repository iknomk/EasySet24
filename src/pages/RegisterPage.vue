<template>
  <div>
    <header class="header">
      <div class="container">
        <img class="logo" src="@/assets/images/Logo.png" alt="Logo" />
        <ul class="icons">
          <li><img src="@/assets/images/England.png" alt="England" /></li>
          <li><img src="@/assets/images/aid.png" alt="Aid" /></li>
        </ul>
      </div>
      <hr />
    </header>

    <div class="box">
      <img src="@/assets/images/travelPhoto.png" alt="Travel" />
      <div class="box-text">
        <div class="input-box-login">
          <h5>Register</h5>
          <div class="box-text-under-reg">
            <div class="boxt">
              <div class="body-S">
                First Name
              </div>
              <input class="box-input" type="text" placeholder="Easyset24" />
            </div>
            <div class="boxt">
              <div class="body-S">
                Last Name
              </div>
              <input class="box-input" type="text" placeholder="Easyset24" />
            </div>
          </div>
        <div class="boxt">
          <div class="body-S">
              Email
            </div>
          <input
            class="box-input body-XS"
            type="text"
            placeholder="Easyset24@gmail.com"
          />
        </div>
        <div class="boxt pass">
          <div class="body-S">
              Password
            </div>
          <div class="password-wrapper">
            <input
              class="box-input body-XS"
              :type="showPassword.password ? 'text' : 'password'"
              v-model="password"
              placeholder="Enter password"
            />
            <button
              type="button"
              class="eye-btn"
              @click="togglePassword('password')"
            ></button>
          </div>
        </div>

        <div class="boxt pass">
          <div class="body-S">
              Confirm Password
            </div>
          <div class="password-wrapper">
            <input
              class="box-input body-XS"
              :type="showPassword.confirm ? 'text' : 'password'"
              v-model="confirmPassword"
              placeholder="Confirm password"
            />
            <button
              type="button"
              class="eye-btn"
              @click="togglePassword('confirm')"
            ></button>
          </div>
        </div>
        </div>

        <div class="box-text-under">
          <div class="box-text-res">
            <input type="checkbox" class="checkbox-input" />
            <div class="sub-S">I agree to all the Terms and Privacy Policies</div>
          </div>
        </div>

        <div class="box-register">
          <button class="login but-XL">Register Now</button>
          <div class="p">
            <div class="sub-S">Already have an account?</div>
            <div class="forgot sub-S" @click="$router.push('/login')">Login</div>
          </div>
          <div class="divider body-S">Or</div>
          <ul class="apps">
            <li><img src="@/assets/images/Facebook.png" alt="Facebook" /></li>
            <li><img src="@/assets/images/Apple.png" alt="Apple" /></li>
            <li><img src="@/assets/images/Google.png" alt="Google" /></li>
          </ul>
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
