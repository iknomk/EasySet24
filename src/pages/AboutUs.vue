<script setup>
import HeaderElem from '../components/header.vue';
import FooterElem from '../components/footer.vue';
</script>

<template>
  <div class="page">
    <HeaderElem headerType="extended" />

    <main class="about-page">
      <!-- Welcome блок -->
      <section class="about-welcome">
        <p class="about-welcome-title">Welcome to EasySet24 !</p>
        <p class="about-welcome-text">
          We are a dynamic team of travel professionals dedicated to simplifying your travel
          experience by curating flight and accommodation services on a user-friendly platform.
          Committed to quality and assurance, EasySet24 strives to transform your journey into a
          fearless and enjoyable adventure. We appreciate your trust in us, and since the year
          2023, we've been committed to serving your travel needs. Feel free to reach out with any
          questions or requirements – we're here for you.
        </p>

        <p class="about-founders-title">EasySet24 Founded By</p>

        <div class="about-founders">
          <div class="about-founder-card">
            <div class="about-founder-header">
              <p class="about-founder-name">CEO : jessica Miller</p>
              <img src="@/assets/icons/linkedIn.svg" alt="" />
            </div>
            <p class="about-founder-text">
              Jessica is known for unwavering integrity and transparent leadership.
            </p>
            <p class="about-founder-text">
              Over 15 years in executive roles.
            </p>
          </div>

          <div class="about-founder-card">
            <div class="about-founder-header">
              <p class="about-founder-name">COO : Emily Davis</p>
              <img src="@/assets/icons/linkedIn.svg" alt="" />
            </div>
            <p class="about-founder-text">
              Emily is recognized for ethical business operations.
            </p>
            <p class="about-founder-text">
              Over 10 years extensive background in optimizing operational processes.
            </p>
          </div>

          <div class="about-founder-card">
            <div class="about-founder-header">
              <p class="about-founder-name">CMO : John Smith</p>
              <img src="@/assets/icons/linkedIn.svg" alt="" />
            </div>
            <p class="about-founder-text">
              He values honesty in advertising and respects customer privacy.
            </p>
            <p class="about-founder-text">
              Proven over 10 years of track record in developing and implementing ethical marketing
              strategies.
            </p>
          </div>

          <div class="about-founder-card">
            <div class="about-founder-header">
              <p class="about-founder-name">CFO : Olivia Wilson</p>
              <img src="@/assets/icons/linkedIn.svg" alt="" />
            </div>
            <p class="about-founder-text">
              Olivia is committed to financial transparency and compliance
            </p>
            <p class="about-founder-text">
              Over a decade of financial leadership.
            </p>
          </div>
        </div>
      </section>

      <!-- Vision / Goal / Mission / Careers -->
      <section class="about-blocks">
        <div class="about-box about-box--white about-box--tl">
          <p class="about-box-title">Vision</p>
          <p class="about-box-text">
            Our vision is to be a leading and trusted name in the travel industry, recognized for
            our commitment to simplifying travel and enhancing the overall experience for our
            customers. Since 2023, and into the future, we envision EasySet24 as the preferred
            choice for travellers.
          </p>
        </div>

        <div class="about-box about-box--gray about-box--tr">
          <p class="about-box-title">Our Goal</p>
          <p class="about-box-text">
            To streamline and simplify the travel experience for our customers by providing
            convenient access to curated flight and accommodation services through an easy-to-use
            platform. Our goal is to make travel hassle-free and enjoyable, ensuring that our
            customers can embark on their journeys with confidence and ease.
          </p>
        </div>

        <div class="about-box about-box--gray about-box--bl">
          <p class="about-box-title">Mission</p>
          <p class="about-box-text">
            EasySet24 is on a mission to be the go-to platform for travelers seeking quality and
            assurance in their travel arrangements. We are dedicated to offering user-friendly
            services that transform each journey into a fearless and enjoyable adventure. Our
            mission is to provide reliable and convenient travel solutions while building and
            maintaining the trust of our customers.
          </p>
        </div>

        <div class="about-box about-box--white about-box--br">
          <p class="about-careers-title">What Made Us successful ?</p>
          <p class="about-careers-text">
            Join us and be part of our dynamic team, where your skills and talents can thrive!
            <span class="about-careers-link">
              Read our employee stories ...!
            </span>
          </p>
          <p class="about-careers-number">254 +</p>
          <p class="about-careers-subtitle">Vacant Careers</p>

          <button class="about-careers-btn">Find more</button>
        </div>
      </section>

      <!-- Partners -->
      <section class="about-partners">
        <p class="about-partners-title">We Work With</p>
        <div class="about-partners-row">
          <img src="@/assets/icons/right-c.svg" alt="" />
          <img src="@/assets/icons/wave.svg" alt="" />
          <img src="@/assets/icons/travel.svg" alt="" />
          <img src="@/assets/icons/Around.svg" alt="" />
          <img src="@/assets/icons/cirkel.svg" alt="" />
          <img src="@/assets/icons/travelia.svg" alt="" />
          <img class="about-partners-arrow-right" src="@/assets/icons/right-c.svg" alt="" />
        </div>
      </section>
    </main>

    <FooterElem/>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* фон и отступы */
.about-page {
  width: 100%;
  background-color: var(--color-neutral-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 48px;
  padding-bottom: 60px;
  padding-inline: 108px;
}

/* Welcome блок */
.about-welcome {
  width: 1224px;
  height: 500px;
  background-color: var(--color-white);
  border: 1px solid var(--color-neutral-300);
  border-radius: 8px;
  padding-top: 32px;
  padding-inline: 16px;
}

.about-welcome-title {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 32px;
  color: var(--color-primary-500);
}

.about-welcome-text {
  margin-top: 30px;
  font-size: 20px;
}

.about-founders-title {
  margin-top: 46px;
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 24px;
}

/* Founders */
.about-founders {
  width: 100%;
  display: flex;
  gap: 48px;
  align-items: flex-start;
  justify-content: center;
}

.about-founder-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 260px;
  margin-top: 24px;
}

.about-founder-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.about-founder-name {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 16px;
}

.about-founder-text {
  font-size: 12px;
}

/* Vision / Goal / Mission / Careers */
.about-blocks {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.about-box {
  width: 600px;
  height: 360px;
  border: 2px solid var(--color-neutral-300);
  padding: 16px;
}

.about-box--white {
  background-color: var(--color-white);
}

.about-box--gray {
  background-color: var(--color-neutral-200);
}

.about-box--tl {
  border-radius: 8px 0 0 0;
}

.about-box--tr {
  border-radius: 0 8px 0 0;
}

.about-box--bl {
  border-radius: 0 0 0 8px;
}

.about-box--br {
  border-radius: 0 0 8px 0;
  padding-top: 24px;
  padding-left: 64px;
}

.about-box-title {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 32px;
  color: var(--color-primary-500);
}

.about-box-text {
  margin-top: 30px;
  width: 100%;
  font-size: 20px;
}

/* Careers box */
.about-careers-title {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 24px;
}

.about-careers-text {
  margin-top: 16px;
  width: 400px;
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 16px;
}

.about-careers-link {
  font-size: 14px;
  font-family: 'Poppins-Regular', sans-serif;
  color: var(--color-primary-500);
}

.about-careers-number {
  margin-top: 8px;
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 64px;
  color: var(--color-neutral-400);
}

.about-careers-subtitle {
  margin-top: -20px;
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 20px;
  color: var(--color-neutral-400);
}

.about-careers-btn {
  margin-top: 16px;
  height: 40px;
  width: 176px;
  border-radius: 4px;
  border: 1px solid var(--color-primary-500);
  background-color: var(--color-primary-500);
  color: var(--color-white);
  font-family: 'Poppins-Medium', sans-serif;
  cursor: pointer;
}

/* Partners */
.about-partners {
  width: 100%;
}

.about-partners-title {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 24px;
}

.about-partners-row {
  width: 100%;
  height: 123px;
  margin-top: 40px;
  display: flex;
  gap: 90px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-bottom: 4px solid var(--color-neutral-300);
}

.about-partners-arrow-right {
  transform: rotate(180deg);
}
</style>
