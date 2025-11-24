<script setup>
import AuthButton from '@/components/UI/signButton.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const props = defineProps({
  headerType: {
    type: String,
    default: 'default',
    validator: (value) => ['extended', 'error', 'auth', 'default', 'search'].includes(value)
  }
})

const handleSignIn = () => {
  router.push('/login')
}

const handleRegister = () => {
  router.push('/register')
}

const activeMenuItem = ref('Trip')

const handleMenuClick = (menuItem) => {
    activeMenuItem.value = menuItem
  const routes = {
    'Trip': '/',
    '%Deals': '/deals',
    'Hotel': '/hotel',
    'Flight': '/flight',
    'Apartment': '/apartment',
    'Camper': '/camper'
  }

   if (routes[menuItem]) {
    router.push(routes[menuItem])
  }
}
</script>

<template>
    <div class="header" :class="{ 'search-header': headerType === 'search' }">
        <div class="header-main" :class="{ 'auth': headerType === 'auth', 'search': headerType === 'search' , 'extended': headerType === 'extended' }">
            <div class="header-main-part">
                <div class="main-part-logo">
                    <div class="logo-icon">
                        <img src="@/assets/images/Logo.png" alt="logo">
                    </div>
                </div>
                

                <div v-if="headerType === 'search'" class="header-icons-left">
                    <button class="header-icon-button">
                        <img src="../assets/images/England.png" alt="en">
                    </button>
                    <button class="header-icon-button">
                        <img src="../assets/images/aid.png" alt="?">
                    </button>
                </div>
                
                <p v-if="headerType === 'error'" class="header-text">The page Was not Found, Sorry!</p>
                
                <div v-if="headerType === 'search'" class="header-search-wide">
                    <input class="header-search-input-wide" type="text" placeholder="Search">
                    <button class="header-search-btn-wide">
                        <div class="search-btn-img s"></div>
                    </button>
                </div>
                
                <div v-if="headerType === 'extended'" class="header-search">
                    <input class="header-search-input" type="text">
                    <button class="header-search-btn">
                        <div class="search-btn-img"></div>
                    </button>
                </div>
            </div>
            <div class="account-settings">
                <div v-if="headerType === 'search'" class="auth-buttons">
                    <div class="auth-buttons">
                        <AuthButton 
                        type="signin" 
                        @click="handleSignIn"
                        class="auth-btn"
                        />
                        <AuthButton 
                        type="register" 
                        @click="handleRegister"
                        class="auth-btn"
                        />
                    </div>
                </div>
                
                <button v-if="headerType !== 'search'" class="account-settings-button">
                    <img src="../assets/images/England.png" alt="en">
                </button>
                <button v-if="headerType === 'extended'" class="account-settings-button">
                    <img src="../assets/images/dollar.svg" alt="$">
                </button>
                <button v-if="headerType !== 'search'" class="account-settings-button">
                    <img src="../assets/images/aid.png" alt="?">
                </button>
                <button v-if="headerType === 'extended'" class="account-settings-button">
                    <img src="../assets/images/heart.svg" alt="♥">
                </button>
                <button v-if="headerType === 'extended'" class="account-settings-button">
                    <img src="../assets/images/phone.svg" alt="phone-call">
                </button>
                <img v-if="headerType !== 'auth' && headerType !== 'search'" class ="account-foto" src="../assets/images/profile-photo.svg" alt="profile-photo">
                <div v-if="headerType !== 'auth' && headerType !== 'search'" class="account-profile-name">
                    <p class="title">Your Account</p>
                    <p class="full-name">Anna Carinna</p>
                </div>
            </div>
        </div>
        <div v-if="headerType !== 'error'" class="header-menu">
            <p 
                class="header-menu-item"
                :class="{ 'select': activeMenuItem === 'Trip' }"
                @click="handleMenuClick('Trip')"
            >Trip</p>
            <p 
                class="header-menu-item"
                :class="{ 'select': activeMenuItem === '%Deals' }"
                @click="handleMenuClick('%Deals')"
            >%Deals</p>
            <p 
                class="header-menu-item"
                :class="{ 'select': activeMenuItem === 'Hotel' }"
                @click="handleMenuClick('Hotel')"
            >Hotel</p>
            <p 
                class="header-menu-item"
                :class="{ 'select': activeMenuItem === 'Flight' }"
                @click="handleMenuClick('Flight')"
            >Flight</p>
            <p 
                class="header-menu-item"
                :class="{ 'select': activeMenuItem === 'Apartment' }"
                @click="handleMenuClick('Apartment')"
            >Apartment</p>
            <p 
                class="header-menu-item"
                :class="{ 'select': activeMenuItem === 'Camper' }"
                @click="handleMenuClick('Camper')"
            >Camper</p>
        </div>
    
    </div>
    <!-- <hr class="header-stroke"> -->
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
        height:200px;
        justify-content:flex-start;
        gap: 30px;
    }

    .header-main.extended {
    position: relative;
    }

    .header-search {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    }

    .header-main {
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1% 0;
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
    
    .header-main-part {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    
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
        font-family: "Poppins-SemiBold";
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
    
    .auth-buttons {
        display: flex;
        gap: 8px;
        align-items: center;
    }
    
    .search-header-logo {
        text-align: center;
        padding: 20px 0;
        background-color: var(--color-neutral-100);
    }
    
    .main-logo {
        font-size: 32px;
        font-family: 'Poppins-Bold';
        color: var(--color-primary-500);
        margin: 0;
    }
    
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
    }
    
    .header-menu-item:hover {
        border: 1px solid var(--color-primary-500);
        color: var(--color-neutral-300);
        cursor: pointer;
        transition: .4s;
    }
    
    .header-menu-item.select {
        background-color: var(--color-primary-500);
        border: 1px solid var(--color-primary-500);
        color: var(--color-white);
        font-family: 'Poppins-Bold';
    }
    
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
        color: var(--color-primary-500)
    }
    
    .header-text {
        font-size: 24px;
        font-family: 'Poppins-Bold';
        color: var(--color-neutral-500)
    }

    .header-search {
        position: relative;
    }
    
    .header-search-input {
        width: 600px;
        height: 40px;
        background: var(--color-neutral-white);
        border: 1px solid #a6a6a6;
        border-radius: 4px;
        padding: 0 55px 0 16px;
        font-size: 12px;
        box-sizing: border-box;
    }
    
    .header-search-input:hover {
        background: var(--color-neutral-300);
        transition: .3s;
    }
    
    .header-search-input:focus {
        border: 1px solid var(--color-primary-500);
        background: var(--color-neutral-white);
        transition: .3s;
    }
    
    .header-search-input:focus ~ .header-search-btn .search-btn-img {
        background-image: url('../assets/icons/search_blue.svg');
        transition: .5s;
    }   
    
    .header-search-btn {
        position: absolute;
        right: 0;
        height: 100%;
        width: 55px;
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

    .s{
        background-image: url('../assets/images/search-gray.svg');
    }
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
    }
    
    .account-profile-name:hover {
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

    .header-stroke {
        height: 1px;
        width: 100%;
        background-color: #a6a6a6;
        border: none;
        margin: 0;
    }
</style>