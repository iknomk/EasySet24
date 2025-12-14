<template>
  <div class="landing-page">
    <headerElem headerType="search" />

    <section class="hero">
      <!-- блок поверх background-image -->
      <div class="hero-card">
        

        <div style="" class="hero-card__text">
            <div style="display:flex; align-items: baseline; gap: 20px; margin:auto" class="row">
                <h4 class="hero-card__title">Our Hotel Is Currently Fully Booked ! </h4>
                <button class="hero-card__close">×</button>
            </div>

            <h6 class="hero-card__subtitle">We Apologize For The Inconvenience .</h6>
        </div>


        <div class="hero-card__text">
          <div class="sub-L">Thank You For Your Understanding!</div>
          <div class="body-XS">Checking Back With Us In A Few Days As Our Availability Can Change Quickly</div>
        </div>

        <div class="hero-card__text">
          <div class="sub-M"> Subscribe For Receiving Room Availability Notification</div>
          <div style="font-size: 12px; font-weight: 400"><p>During Your Time Expectations.</p> </div>
            <fillButton size="large" class="hero-card__btn">
                <span class="but-XL">
                Room Availability Notification
                </span>
            </fillButton>
        </div>


      </div>
    </section>

    <footer>
      <footerElem />
    </footer>
  </div>
</template>

<script setup>
import headerElem from "@/components/header.vue";
import footerElem from "@/components/footer.vue";
import fillButton from "@/components/UI/fillButton.vue";
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* секция с фоном */
.hero {
  position: relative;
  background-image: linear-gradient(0deg, #000000cc 0%, rgba(0, 0, 0, 0) 100%),
  url("@/assets/images/booked.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
    height: 721px;

}

/* “окно” поверх фона */
.hero-card {
  position: relative;
  width: 640px;
  height: 387px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  opacity: 1;
}

.hero-card__close {
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
}

.hero-card__title {
  margin-top: 24px;
  color: var(--color-error-light);
  font-weight: 700;
}

.hero-card__subtitle {
  font-weight: 600;
}

.hero-card__text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero-card__btn {
  align-self: center;
  padding: 8px 16px;
  cursor: pointer;
  width: 464px;
height: 48px;
gap: 16px;
border-radius: 4px;
}
</style>
