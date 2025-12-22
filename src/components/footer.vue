<script setup>
import AuthButton from "@/components/UI/signButton.vue";
import subscribeBut from "@/components/UI/fillButton.vue";
const props = defineProps({
  // 'default' – весь подвал, 'noApp' – без верхнего блока приложения
  variant: {
    type: String,
    default: 'default' 
  }
})
</script>

<template>
    <div>
        <div v-if="variant === 'default'" class="app-footer">
            <div class="app-footer-left">
                <h5>Go Further With The EasySet24 App</h5>
                <div class="sub-M">Enjoy savings on chosen hotels and flights when you book through the EasySet24 website. Additionally, earn One Key Cash for every booking made through the app.</div>
                <div class="sub-M">Secured By Europe GTP</div>
            </div>
            <div class="app-footer-right">
                <div class="app-footer-row">
                <img src="@/assets/icons/app-store.svg" alt="App Store">
                <img src="@/assets/icons/QR-code.svg" alt="QR code">
                </div>
                <div class="app-footer-row">
                <img src="@/assets/icons/google-play.svg" alt="Google Play">
                <img src="@/assets/icons/QR-code.svg" alt="QR code">
                </div>
            </div>
        </div>
        <hr v-if="variant === 'default'" class="footer-stroke"></hr>
        <footer class="footer">
            <div class="footer-top">
            <div class="footer-column">
                <h6>About Us</h6>
                <ul>
                <li><a class="body-M" href="#">Our Story</a></li>
                <li><a class="body-M" href="#">Work With Us</a></li>
                <li><a class="body-M" href="#">Press & Media</a></li>
                <li><a class="body-M" href="#">Privacy & Security</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h6>We Offer</h6>
                <ul>
                <li><a class="body-M" href="#">Trip Sponsorship</a></li>
                <li><a class="body-M" href="#">Last Minutes Flights</a></li>
                <li><a class="body-M" href="#">Best Deals</a></li>
                <li><a class="body-M" href="#">AI-Driven Search</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h6>Headquarters</h6>
                <ul>
                <li><a class="body-M" href="#">England</a></li>
                <li><a class="body-M" href="#">France</a></li>
                <li><a class="body-M" href="#">Canada</a></li>
                <li><a class="body-M" href="#">Iceland</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h6>Travel Blogs</h6>
                <ul>
                <li><a class="body-M" href="#">Bali Travel Guide</a></li>
                <li><a class="body-M" href="#">Sri Travel Guide</a></li>
                <li><a class="body-M" href="#">Peru Travel Guide</a></li>
                <li><a class="body-M" href="#">Swiss Travel Guide</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h6>Activities</h6>
                <ul>
                <li><a class="body-M" href="#">Tour Leading</a></li>
                <li><a class="body-M" href="#">Cruising & Sailing</a></li>
                <li><a class="body-M" href="#">Camping</a></li>
                <li><a class="body-M" href="#">Kayaking</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h6>Service</h6>
                <ul>
                <li><a class="body-M" href="#">Report Error</a></li>
                <li><a class="body-M" href="#">Ask Online</a></li>
                <li><a class="body-M" href="#">Travel Insurance</a></li>
                </ul>
            </div>
            </div>

            <!-- Средняя часть -->
            <div class="footer-middle">
            <div class="payment-icons">
                <img src="@/assets/images/visa.png" alt="Visa" />
                <img src="@/assets/images/amex.png" alt="AmEx" />
                <img src="@/assets/images/mastercard.png" alt="MasterCard" />
                <img src="@/assets/images/paypal.png" alt="PayPal" />
            </div>

            <div class="social-icons">
                <a href="#"><img src="@/assets/icons/Footer/_Linkedin.svg" alt="Linkedin" class="fab fa-linkedin"></img></a>
                <a href="#"><img src="@/assets/icons/Footer/_Telegram.svg" alt="Telegram" class="fab fa-telegram"></img></a>
                <a href="#"><img src="@/assets/icons/Footer/_Twitter.svg" alt="Twitter" class="fab fa-twitter"></img></a>
                <a href="#"><img src="@/assets/icons/Footer/Facebook.svg" alt="Facebook" class="fab fa-facebook"></img></a>
                <a href="#"><img src="@/assets/icons/Footer/_Instagram.svg" alt="Instagram" class="fab fa-instagram"></img></a>
            </div>

            <div class="subscribe-block">
                <label for="email" class="email-label body-S">Email</label>
                <div class="subscribe-line">
                  <div class="subscribe-line-input">
                    <img src="@/assets/icons/mail.svg"></img>
                    <input id="email" type="email" class="body-S" placeholder="Enter Your Email" />
                  </div>
                  <subscribeBut size="small">Subscribe</subscribeBut>
                </div>
            </div>
            </div>

            <!-- Нижняя часть -->
            <div class="footer-bottom">
              <div class="footer-info">
                <img src="@/assets/icons/copyright.svg" alt="copyright">
                <span class="cap-S">Copyright EasySet24</span>
              </div>
              <div class="footer-info">
                <img src="@/assets/icons/email-down.svg" alt="email-down">
                <span class="cap-S">Easyset24@gmail.com</span>
              </div>

              <h6>"EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!"</h6>

              <div class="footer-info">
                <img src="@/assets/icons/local-two.svg" alt="local">
                <span class="cap-S">123 Oxford Street, London</span>
              </div>
              <div class="footer-info">
                <img src="@/assets/icons/phone-call.svg" alt="phone">
                <span class="cap-S">+44 20 7123 4567</span>
              </div>
            </div>
        </footer>
    </div>
</template> 

<style scoped>
.app-footer {
display: flex;
justify-content:space-between;
padding: 60px 109px 24px;
background-color: var(--color-neutral-100);
}

.footer-stroke {
      width: 100%;
  border: 2px solid var(--color-neutral-200);
}
.app-footer-left h5{
  color:var(--color-primary-500);
}
.app-footer-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 704px;
  height: 99px;
}

.app-footer-right {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.app-footer-row {
  display: flex;
  gap: 24px;
}

.footer {
  line-height: 1.6;
  width: 100%;
  background-color: rgba(248, 248, 248, 1);

}

.footer-top {
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
height: 174px;

padding: 30px 109px 24px;
}


.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin: 4px 0;
}

.footer-column a {
  color: var(--color-black);
  text-decoration: none;
  opacity: 70%;
  transition: 0.2s;
}

.footer-column a:hover {
  color: var(--color-primary-500);
}

.footer-middle {
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 60px 109px 50px;
  gap: 32px;
  position: relative;
}

.payment-icons,
.social-icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.subscribe-block {
  position: relative;         
  display: flex;
  align-items: center;
}

.email-label {
  position: absolute;
  top: -30px;                 
  left: 0px;
  font-size: 14px;
  padding: 0 4px;
}


.payment-icons img {
  height: 48px;
  border-radius: 4px;
  margin-right: 10px;
}

.social-icons a {
  margin-right: 12px;
  transition: 0.2s;
}

.subscribe {
  display: flex;
  flex-direction: column;
}

.subscribe-line {
    display:flex;
    height: 48px;
}

.subscribe-line-input {
    flex: 1; 
  box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 16px;

width: 312px;
height: 48px;

background: var(--color-white);
border: 0.5px solid var(--color-neutral-400);
border-radius: 4px 0px 0px 4px;
}

.subscribe-line-input input {
  outline: none;
  border: none;
}

.footer-bottom {
  background-color: var(--color-neutral-300);
  padding: 15px 109px;
  font-size: 13px;
  color: var(--color-neutral-500);
  display: flex;
  align-items: center;
  justify-content:space-between;
}

.footer-info{
  display: flex;
  gap: 8px; 
  justify-content: center;
  align-items:center;
}
</style>