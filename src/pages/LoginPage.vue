<script >
import headerElem from '@/components/header.vue';
export default {
        components: {
    headerElem   
  },
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

<template>
  <div>
    <headerElem headerType="auth"/>
    <div class="box">
      <img src="@/assets/images/travelPhoto.png" alt="Travel Photo" />
      <div class="box-text">
        <div class="input-box-login">
          <h5>Login</h5>
          <div class="sub-S">Login to access yourEasyset24 account</div>

          <div class="boxt email">
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
                placeholder="•••••••••••••••"
              />
              <button
                type="button"
                class="eye-btn"
                @click="togglePassword('password')"
              ></button>
            </div>
          </div>
        

          <div class="box-text-under">
            <div class="box-text-re">
              <input type="checkbox" class="checkbox-input" id="rememberMe" />
              <div class="body-S">
                Remember Me
              </div>
            </div>
            <div class="forgot body-S">Forgot Password?</div>
          </div>
      
          <button class="login but-XL" type="button">Login</button>
          <div class="divider body-S">Or</div>
        
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
            <div class="sub-XS">"Don't have an account in EasySet24 yet?</div>
            <div class="forgot sub-XS" @click="$router.push('/register')">Register !</div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style src="../pages/auth.css" scoped></style>
