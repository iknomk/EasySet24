<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthButton from '@/components/UI/signButton.vue'

const router = useRouter()

const handleSignIn = () => {
  router.push('/login')
}

const handleRegister = () => {
  router.push('/register')
}
const goToPage =() => {
  router.push('/')
}

defineProps({
  headerType: {
    type: String,
    default: 'default',
    validator: (value) => ['extended', 'default', 'error', 'auth', 'search'].includes(value)
  },
  selectedItem: {
    type: String,
    validator: (value) => ['Trip', 'Deals', 'Hotel', 'Flight', 'Apartment', 'Camper'].includes(value)
  }
})
</script>

<template>
  <div
  class="header"
  :class="{
    'search-header': headerType === 'search',
  'header--default-border': ['default', 'auth'].includes(headerType)

  }"
>
  <div
    class="header-main"
    :class="{
      auth: headerType === 'auth',
      search: headerType === 'search',
      extended: headerType === 'extended'
    }"
  >
      <!-- Левая часть: логотип + поиск -->
      <div class="header-main-part">
        <!-- Логотип -->
        <div class="main-part-logo">
          <div @click="goToPage" class="logo-icon">
            <img src="@/assets/images/Logo.png" alt="logo" />
          </div>
        </div>

        <!-- Иконки слева (только в search) -->
        <div v-if="headerType === 'search'" class="header-icons-left">
          <button class="header-icon-button">
            <img src="../assets/images/England.png" alt="en" />
          </button>
          <button class="header-icon-button">
            <img src="../assets/images/aid.png" alt="help" />
          </button>
        </div>

        <!-- Текст ошибки -->
        <p v-if="headerType === 'error'" class="header-text">
          The page Was not Found, Sorry!
        </p>

        <!-- Поиск (широкий, для search) -->
        <div v-if="headerType === 'search'" class="header-search-wide">
          <input
            class="header-search-input-wide"
            type="text"
            placeholder="Search"
          />
          <button class="header-search-btn-wide">
            <div class="search-btn-img s" />
          </button>
        </div>

        <!-- Поиск (центрированный, для extended) -->
        <div v-if="headerType === 'extended'" class="header-search">
          <input class="header-search-input" type="text" />
          <button class="header-search-btn">
            <div class="search-btn-img" />
          </button>
        </div>
      </div>

      <!-- Правая часть: аккаунт / кнопки -->
      <div class="account-settings">
        <!-- Кнопки входа/регистрации (только search) -->
        <div v-if="headerType === 'search'" class="auth-buttons">
          <AuthButton
            type="signin"
            class="auth-btn"
            @click="handleSignIn"
          />
          <AuthButton
            type="register"
            class="auth-btn"
            @click="handleRegister"
          />
        </div>

        <!-- Общие иконки (не search) -->
        <button
          v-if="headerType !== 'search'"
          class="account-settings-button"
        >
          <img src="../assets/images/England.png" alt="en" />
        </button>

        <button
          v-if="headerType === 'extended'"
          class="account-settings-button"
        >
          <img src="../assets/images/dollar.svg" alt="$" />
        </button>

        <button
          v-if="headerType !== 'search'"
          class="account-settings-button"
        >
          <img src="../assets/images/aid.png" alt="help" />
        </button>

        <button
          v-if="headerType === 'extended'"
          class="account-settings-button"
        >
          <img src="../assets/images/heart.svg" alt="favorites" />
        </button>

        <button
          v-if="headerType === 'extended'"
          class="account-settings-button"
        >
          <img src="../assets/images/phone.svg" alt="phone-call" />
        </button>

        <!-- Профиль (если не auth и не search) -->
        <template v-if="headerType !== 'auth' && headerType !== 'search'">
          <img
            class="account-foto"
            src="../assets/images/profile-photo.svg"
            alt="profile-photo"
          />
          <div class="account-profile-name">
            <p class="title">Your Account</p>
            <p class="full-name">Anna Carinna</p>
          </div>
        </template>
      </div>
    </div>

    <!-- Нижнее меню (кроме error) -->
    <div v-if="headerType !== 'error'  && headerType !== 'default' && headerType !== 'auth'" class="header-menu">
      <a
          href="/"
          class="header-menu-item"
          :class="{ select: selectedItem === 'Trip' }"
        >Trip</a>
        <a
          href="/error"
          class="header-menu-item"
          :class="{ select: selectedItem === 'Deals' }"
        >%Deals</a>
        <a
          href="/hotel"
          class="header-menu-item"
          :class="{ select: selectedItem === 'Hotel' }"
        >Hotel</a>
        <a
          href="/flight/search"
          class="header-menu-item"
          :class="{ select: selectedItem === 'Flight' }"
        >Flight</a>
        <a
          href="/error"
          class="header-menu-item"
          :class="{ select: selectedItem === 'Apartment' }"
        >Apartment</a>
        <a
          href="/error"
          class="header-menu-item"
          :class="{ select: selectedItem === 'Camper' }"
        >Camper</a>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: var(--color-neutral-100);
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header.search-header {
  height: 202px;
  justify-content: flex-start;
  gap: 30px;
}

/* Основной блок сверху */

.header-main {
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  width: 85%;
  margin: 0 auto;
}

.header-main.auth {
  height: auto;
}

.header-main.search {
  height: 60px;
  padding: 10px 0;
}

.header-main.extended {
  position: relative;
}

.header-main-part {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* Логотип */

.main-part-logo {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.main-part-logo:hover {
  cursor: pointer;
}

.logo-icon {
  display: flex;
  justify-content: center;
}

.logo-icon img {
  width: 80px;
  height: auto;
}

.main-part-logo p {
  font-size: 16px;
  font-family: 'Poppins-Bold';
  color: var(--color-primary-500);
}

/* Левый блок иконок для search */

.header-icons-left {
  display: flex;
  gap: 8px;
  align-items: center;
}

.header-icon-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

/* Поиск (широкий) */

.header-search-wide {
  position: relative;
  flex: 1;
  max-width: 600px;
  margin: 0 auto;
}

.header-search-input-wide {
  width: 605px;
  height: 32px;
  background: var(--color-neutral-white);
  border: 1px solid var(--color-neutral-300);
  border-radius: 4px;
  padding: 0 10px 0 16px;
  font-size: 12px;
  box-sizing: border-box;
  font-family: 'Poppins-SemiBold';
  letter-spacing: 1px;
}

.header-search-btn-wide {
  position: absolute;
  right: 10px;
  top: 0;
  height: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Поиск (extended) */

.header-search {
  position: relative;
}

.header-search-input {
  width: 600px;
  height: 40px;
  background: var(--color-neutral-white);
  border: 1px solid var(--color-neutral-300);
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 12px;
  box-sizing: border-box;
}

.header-search-input:hover {
  background: var(--color-neutral-300);
  transition: 0.3s;
}

.header-search-input:focus {
  border: 1px solid var(--color-primary-500);
  background: var(--color-neutral-white);
  transition: 0.3s;
}

.header-search-input:focus ~ .header-search-btn .search-btn-img {
  background-image: url('../assets/icons/search_blue.svg');
  transition: 0.5s;
}

.header-search-btn {
  position: absolute;
  right: 8px;
  height: 100%;
  width: px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.search-btn-img {
  width: 16px;
  height: 16px;
  background-image: url('../assets/images/search.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

/* серая иконка для широкого поиска */
.s {
  background-image: url('../assets/images/search-gray.svg');
}

/* Правый блок аккаунта */

.account-settings {
  display: flex;
  align-items: center;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.account-settings-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

.account-settings-button img {
  width: 80%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
}

.account-foto {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.account-profile-name {
  text-align: center;
  cursor: pointer;
}

.account-profile-name .title {
  font-size: 14px;
  font-family: 'Poppins-ExtraBold';
  color: var(--color-primary-600);
  margin-bottom: -4px;
}

.account-profile-name .full-name {
  font-size: 12px;
  color: var(--color-primary-500);
  margin-top: -4px;
}

/* Нижнее меню */

.header-menu {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.header-menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 40px;
  background-color: var(--color-neutral-white);
  border: 1px solid var(--color-neutral-400);
  border-radius: 30px;
  color: var(--color-neutral-400);
  font-size: 16px;
  font-family: 'Poppins-Medium';
  cursor: pointer;
  transition: 0.4s;
  text-decoration:none;
}

.header-menu-item:hover {
  border: 1px solid var(--color-primary-500);
  color: var(--color-neutral-300);
}

.header-menu-item.select {
  background-color: var(--color-primary-500);
  border: 1px solid var(--color-primary-500);
  color: var(--color-white);
  font-family: 'Poppins-Bold';
}

/* Дополнительная линия, если вдруг понадобится */
.header-stroke {
  height: 1px;
  width: 100%;
  background-color: #a6a6a6;
  border: none;
  margin: 0;
}
.header--default-border {
  border-bottom: 1px solid var(--color-neutral-300);
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 8px;          /* расстояние между кнопками */
  margin-left: 16px; /* отступ от иконок справа, подбери по макету */
}
</style>