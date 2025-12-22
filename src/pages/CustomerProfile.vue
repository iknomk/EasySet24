<script setup>
import HeaderElem from '../components/header.vue';
import FooterElem from '../components/footer.vue';
</script>

<template>
  <div class="page">
    <HeaderElem />

    <main class="profile-page">
      <!-- Левая колонка меню -->
      <section class="profile-sidebar">
        <div class="profile-greeting">
          <p class="profile-greeting-name">Hi, Anna</p>
          <p class="profile-greeting-mail">Annacarinna@gmail.com</p>
        </div>

        <div class="profile-menu">
          <p class="profile-menu-description">
            Manage your profile, rewards, and preferences for all our brands
            in one place.
          </p>

          <div class="profile-menu-item">
            <div class="profile-menu-left">
              <img src="@/assets/icons/down-dark-small.svg" alt="" />
              <p class="profile-menu-text">Profile</p>
            </div>
            <img
              class="profile-menu-arrow-rotated"
              src="@/assets/icons/down-dark-small.svg"
              alt=""
            />
          </div>

          <div class="profile-menu-item">
            <div class="profile-menu-left">
              <img src="@/assets/icons/down-dark-small.svg" alt="" />
              <p class="profile-menu-text">Preferences</p>
            </div>
            <img
              class="profile-menu-arrow-rotated"
              src="@/assets/icons/down-dark-small.svg"
              alt=""
            />
          </div>

          <div class="profile-menu-item">
            <div class="profile-menu-left">
              <img src="@/assets/icons/down-dark-small.svg" alt="" />
              <p class="profile-menu-text">Payment</p>
            </div>
            <img
              class="profile-menu-arrow-rotated"
              src="@/assets/icons/down-dark-small.svg"
              alt=""
            />
          </div>

          <div class="profile-menu-item">
            <div class="profile-menu-left">
              <img src="@/assets/icons/down-dark-small.svg" alt="" />
              <p class="profile-menu-text">Help</p>
            </div>
            <img
              class="profile-menu-arrow-rotated"
              src="@/assets/icons/down-dark-small.svg"
              alt=""
            />
          </div>

          <div class="profile-menu-item">
            <div class="profile-menu-left">
              <img src="@/assets/icons/down-dark-small.svg" alt="" />
              <p class="profile-menu-text">Setting</p>
            </div>
            <img
              class="profile-menu-arrow-rotated"
              src="@/assets/icons/down-dark-small.svg"
              alt=""
            />
          </div>

          <div class="profile-menu-item profile-menu-item--signout">
            <p class="profile-signout-text">Sign Out</p>
          </div>
        </div>
      </section>
    </main>

    <FooterElem />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* фон и layout */
.profile-page {
  width: 100%;
  background-color: var(--color-neutral-100);
  display: flex;
  gap: 24px;
  padding-top: 48px;
  padding-bottom: 60px;
  padding-inline: 108px;
}

/* левая колонка */
.profile-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 288px;
  height: 522px;
}

/* Hi, Anna */
.profile-greeting {
  height: 72px;
  padding: 16px;
  background-color: var(--color-white);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile-greeting-name {
  font-size: 14px;
  font-family: 'Poppins-Bold', sans-serif;
}

.profile-greeting-mail {
  font-size: 12px;
}

/* меню */
.profile-menu {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.profile-menu-description {
  font-size: 12px;
}

.profile-menu-item {
  height: 48px;
  background-color: var(--color-white);
  border-radius: 4px;
  padding-inline: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-menu-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.profile-menu-text {
  font-size: 16px;
}

.profile-menu-arrow-rotated {
  transform: rotate(-90deg);
}

/* Sign out */
.profile-menu-item--signout {
  justify-content: flex-start;
}

.profile-signout-text {
  font-size: 14px;
  font-family: 'Poppins-Bold', sans-serif;
  color: var(--color-primary-500);
}
</style>
