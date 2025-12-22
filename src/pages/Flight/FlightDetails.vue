<template>
    <headerElem headerType="extended" selectedItem="Flight"/> />
    <div class="content">

  <div class="before-purchase">
    <!-- Верхний бар -->
    <div class="before-purchase__top-bar">
      <h5>One stop, 3h Between</h5>
      <h5 class="before-purchase__duration ">
        Flight Duration 9: 45h
      </h5>
      <button class="before-purchase__close">
        <button class="hero-card__close"><img src="@/assets/icons/close-white.svg"></button>
      </button>
    </div>

    <!-- Картинка -->
    <div class="before-purchase__image-wrapper">
      <img
        src="@/assets/images/flightsSearch/plane-in-clouds.jpg"
        alt="Plane in clouds"
      >
      <div class="before-purchase__overlay-row body-S">
        <div class="before-purchase__flight-line">
          First Flight No From Stockholm <span class="but-XXL">C650</span>
        </div>
        <div class="before-purchase__airline">
          <img src="@/assets/images/flightsSearch/DeltaLogo.svg" alt="Delta">
          <span>Delta Airlines</span>
        </div>
      </div>
      <div class="before-purchase__overlay-row body-S">
        <div class="before-purchase__flight-line">
          Second Flight No From Rome <span class="but-XXL">JSG113</span>
        </div>
        <div class="before-purchase__airline">
          <img src="@/assets/images/flightsSearch/TurkishAilinesLogo.png" alt="Turkish">
          <span>Turkish Airways</span>
        </div>
      </div>
    </div>

    <!-- Центральный блок ARN / FCO / SABIHA -->
    <div class="route-center">
    <!-- левая часть ARN -->
    <div class="route-center__side route-center__side--left">
      <h3>SABIHA</h3>
      <div class="sub-M">Istanbul</div>
      <div class="body-XS">CET (01:00)</div>

      <div class="route-center__gate-left">
        <span class="body-XS">Gate</span>
        <span class="sub-L">21F</span>
      </div>
    </div>

    <!-- центральный FCO -->
    <div class="route-center__middle">
      <div class="route-center__fco-wrapper">
        <div class="route-center__fco-outer">
          <h3 class="route-center__fco-inner">
            <span>FCO</span>
          </h3>
        </div>
      </div>

      <div class="route-center__time-row body-S">
        <span>CET (18:00)</span>
        <h5>Rome</h5>
        <span>CET (20:00)</span>
      </div>
    </div>

    <!-- правая часть SABIHA -->
    <div class="route-center__side route-center__side--right">
      <h3>ARN</h3>
      <div class="sub-M">Stockholm</div>
      <div class="body-XS">CET (20:30)</div>

      <div class="route-center__gate-right">
        <span class="body-XS">Gate</span>
        <span class="sub-L">15B</span>
      </div>
    </div>

    <!-- нижняя линия с самолётом -->
    <div class="route-center__bottom-line">
      <div class="route-center__line-left"></div>
      <img src="@/assets/images/flightsSearch/airplane.svg" alt="plane" class="route-center__plane">
      <div class="route-center__line-right"></div>
    </div>
  </div>

    <!-- Таблички с гейтами / текстом -->
    <div class="before-purchase__info-grid">
      <div style="background-color: var(--color-white); border: 1px solid var(--color-neutral-300)" class="before-purchase__info-card">
        <h6 >ARN – Entrance C–<br> Gate 23A</h6>
        <div class="sub-M">+467313</div>
      </div>
      <div  class="before-purchase__info-card">
        <h6 >SABIHA – Exit L</h6>
        <div class="sub-M">+903348</div>
      </div>
      <div style="background-color: var(--color-white); border: 1px solid var(--color-neutral-300)"  class="before-purchase__info-card">
        <h6 >FCO – Gate D14</h6>
        <div class="sub-M">+391245</div>
      </div>
      <div class="before-purchase__info-card">
        <h6 >One Stop, 3h<br> Between</h6>
        <div class="sub-M">It Is Not Possible To<br> Exit The Airport</div>
      </div>
    </div>

    <!-- Иконки: города, багаж, pets -->
    <div class="before-purchase__icons-row">
      <div class="before-purchase__icon-block">
        <img  src="@/assets/icons/amenities/snowflake.svg" alt="loc">
        <span style="color: var(--color-primary-500)" class="body-XS">7 – Stockholm</span>
      </div>
      <div class="before-purchase__icon-block">
        <img  src="@/assets/icons/amenities/light-rain.svg" alt="loc">
        <span style="color: var(--color-primary-500)" class="body-XS">2 – Rome</span>
      </div>
      <div class="before-purchase__icon-block">
        <img src="@/assets/icons/amenities/heavy-wind.svg" alt="loc">
        <span style="color: var(--color-primary-500)" class="body-XS">10 – Istanbul</span>
      </div>

      <div class="before-purchase__icon-block">
        <img src="@/assets/icons/amenities/luggage.svg" alt="bag">
        <span class="body-XS">15 Kg</span>
      </div>
      <div class="before-purchase__icon-block">
        <img src="@/assets/icons/amenities/luggage.svg" alt="bag">
        <span class="body-XS">15 Kg</span>
      </div>

      <div class="before-purchase__icon-block">
        <img src="@/assets/icons/amenities/cat.svg" alt="pet">
        <span class="body-XS">Pet Allowed</span>
      </div>
      <div class="before-purchase__icon-block">
        <img src="@/assets/icons/amenities/cat.svg" alt="pet">
        <span class="body-XS">Pet Allowed</span>
      </div>
    </div>

    <!-- Стоимость и платёжные методы -->
    <div class="before-purchase__bottom">
      <div class="before-purchase__price-block">
        <h3 class="before-purchase__price ">$ 120</h3>
        <div class="body-XS">Taxes Included</div>
      </div>

      <div>
      <div class="before-purchase__cards">
        <img src="@/assets/images/visa.png" alt="Visa" />
        <img src="@/assets/images/amex.png" alt="AmEx" />
        <img src="@/assets/images/mastercard.png" alt="MasterCard" />
        <img src="@/assets/images/paypal.png" alt="PayPal" />
      </div>

      <div style="text-align: right" class="before-purchase__secure body-M">
        Transactions Are Encrypted By EsaySet24
      </div>
    </div>
    </div>

    <!-- Нижний бар + кнопка -->
    <div class="before-purchase__footer">
      <div class="before-purchase__footer-buttons">
        <button class="before-purchase__footer-btn">
          <img src="@/assets/icons/cub.svg" alt="3d">
          <h6 style="color: var(--color-white)">3d View</h6>
        </button>
        <button class="before-purchase__footer-btn">
          <img src="@/assets/icons/share.svg" alt="share">
          <h6 style="color: var(--color-white)">Share</h6>
        </button>
        <button class="before-purchase__footer-btn">
          <img src="@/assets/icons/helpcenter.svg" alt="help">
          <h6 style="color: var(--color-white)">Help</h6>
        </button>
      </div>

      <fillButton
        type="purchaseFlight"
        size="large"
        class="before-purchase__purchase-btn"
        @click="goToDetails"
      >
        Purchase The Flight
      </fillButton>
    </div>
  </div>
  </div>
<footer><footerElem></footerElem></footer>

</template>

<script setup>
import headerElem from "@/components/header.vue";
import footerElem from "@/components/footer.vue";
import fillButton from '@/components/UI/fillButton.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDetails = () => {
  router.push('/flight/payment')
}
</script>

<style scoped>

.content {
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-size: cover;
  background-repeat: no-repeat;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('@/assets/images/flightsSearch/baseMap.png') center/cover;

}
.before-purchase {
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  width: 658px;
border-radius: 8px;
border: 4px solid rgba(217, 217, 217, 0.5);

}

.hero-card__close {
  background: none;
  border: none;

}

.hero-card__close img {
  width: 23px;
  height: 24px;
}
/* top bar */
.before-purchase__top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-primary-500);
  color: var(--color-white);
  padding: 20px 16px;
}

.before-purchase__duration {
  margin-left: auto;
  margin-right: 16px;
}

.before-purchase__close {
  border: none;
  background: transparent;
  cursor: pointer;
}

/* image */
.before-purchase__image-wrapper {
  position: relative;
  height: 260px;
  overflow: hidden;
}

.before-purchase__image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.before-purchase__overlay-row {
  position: absolute;
  left: 16px;
  right: 16px;
  padding: 8px 12px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  color: var(--color-white);
border-top: 1px solid rgba(239, 239, 239, 0.2)
}

.before-purchase__overlay-row:nth-of-type(1) {
  bottom: 48px;
}

.before-purchase__overlay-row:nth-of-type(2) {
  bottom: 8px;
}

.before-purchase__airline {
  display: flex;
  align-items: center;
  gap: 8px;
}

.before-purchase__airline img{
  width: 31px;
  height: 31px;
}

/* middle section */
.route-center {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  background: linear-gradient(
  90deg,
  #ffffff 0%,
  #ffffff 50%,
  #e6e6e6 50%,
  #e6e6e6 100%
);

  padding: 24px 24px 32px 24px;
    margin-bottom: 16px;

}

/* левый / правый блоки */
.route-center__side {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.route-center__side h3 {
  margin: 0;
  color: var(--color-primary-500);
}

.route-center__gate-left,
.route-center__gate-right {
  align-items: baseline;
  gap: 4px;
  margin-top: 16px;
}

.route-center__gate-left span:last-child,
.route-center__gate-right span:last-child {
  font-weight: 700;
}

/* центр */
.route-center__middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.route-center__fco-wrapper {
  display: flex;
  justify-content: center;
}

.route-center__fco-outer {
  width: 104px;
  height: 104px;
  border-radius: 50%;
  border: 2px dashed var(--color-neutral-400);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
}

.route-center__fco-inner {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background-color: var(--color-neutral-200);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-500);
  font-weight: 700;
  font-size: 20px;
}

.route-center__time-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.route-center__time-row h5 {
  margin: 0;
}

/* нижняя линия */
.route-center__bottom-line {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8px;
  display: flex;
  align-items: center;
}

.route-center__line-left,
.route-center__line-right {
  flex: 1;
  height: 4px;
}

.route-center__line-left {
  background-color: var(--color-neutral-300);
}

.route-center__line-right {
  background-color: var(--color-primary-500);
}

.route-center__plane {
  width: 32px;
  height: 32px;
  transform: rotate(180deg);
}

/* info grid */
.before-purchase__info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 0 16px 16px 16px;
}

.before-purchase__info-card {
  background-color: var(--color-neutral-300);
  padding: 6px 9px;
  display: flex;
  justify-content: space-between;
  color:  var(--color-neutral-500);
}

.before-purchase__info-card--text {
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
}

/* icons row */
.before-purchase__icons-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  padding: 8px 16px 16px 16px;
}

.before-purchase__icon-block {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* bottom price & payment */
.before-purchase__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid var(--color-neutral-200);
}

.before-purchase__price-block {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.before-purchase__price {
  color: var(--color-success);
}

.before-purchase__cards {
  display: flex;
  align-items: center;
  gap: 8px;
}

.before-purchase__cards img {
  height: 50px;
}

.route-center__side--right, .route-center__gate-right {
  text-align: right;
  margin-right: 0;
}
/* footer bar */
.before-purchase__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: var(--color-neutral-500);
}

.before-purchase__footer-buttons {
  display: flex;
  gap: 40px;
}

.before-purchase__footer-btn {
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.before-purchase__purchase-btn {
  width: 260px;
}
</style>
