<script setup>
import HeaderElem from '../components/header.vue';
import FooterElem from '../components/footer.vue';
</script>

<template>
  <HeaderElem headerType="error" />

  <div class="error-page">
    <div class="error-code">404</div>
    <div class="error-text">The page Was not Found, Sorry!</div>
    <a href="/" class="error-button">
      <img src="@/assets/icons/right-small.svg" alt="" />
      Return To Home Page
    </a>
  </div>

  <FooterElem footerType="" />
</template>

<style scoped>
.error-page {
  height: 450px;
  padding: 50px;
  background-image: url('@/assets/images/404page.jpg');
  background-repeat: no-repeat;
  background-position: 50% 76%;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.error-code {
  font-size: 100px;
  font-family: 'Poppins-Bold', sans-serif;
  color: rgba(189, 189, 189, 0.5); /* neutral300/50 */
}

.error-text {
  font-size: 24px;
  font-family: 'Poppins-Bold', sans-serif;
  color: #ffffff;
}

.error-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding-inline: 16px;
  border-radius: 4px;
  background-color: var(--color-primary-500);
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
}

.error-button:hover {
  text-decoration: none;
}
</style>
