<script setup>
import { ref } from 'vue';
import HeaderElem from '../components/header.vue';
import FooterElem from '../components/footer.vue';
import CustomerProfile from '../components/profile.vue';

// Импортируем все иконки
import UserBlue from '@/assets/icons/User-blue.svg';
import UserBlack from '@/assets/icons/user-black.svg';
import ListViewBlue from '@/assets/icons/list-view-blue.svg';
import ListView from '@/assets/icons/list-view.svg';
import WalletBlue from '@/assets/icons/wallet-blue.svg';
import Wallet from '@/assets/icons/wallet.svg';
import HelpBlue from '@/assets/icons/help-blue.svg';
import HelpBlack from '@/assets/icons/help-black.svg';
import SettingBlue from '@/assets/icons/setting-two-blue.svg';
import Setting from '@/assets/icons/setting-two.svg';
import RightBlue from '@/assets/icons/right-blue.svg';
import DownDark from '@/assets/icons/down-dark-small.svg';

const currentProfileType = ref('basic');

const changeProfileType = (type) => {
    currentProfileType.value = type;
};

const reloadPage = () => {
    window.location.reload();
};
</script>

<template>
    <div class="page-container">
        <HeaderElem />
        <div class="content-wrapper">
            <div class="sidebar">
                <div class="user-info">
                    <p class="user-greeting">Hi, Anna</p>
                    <p class="user-email">Annacarinna@gmail.com</p>
                </div>
                
                <div class="sidebar-content">
                    <p class="sidebar-description">Manage your profile, rewards, and preferences for all our brands in one place.</p>
                    
                    <div class="nav-buttons">
                        <button 
                            @click="reloadPage(); changeProfileType('basic')" 
                            class="nav-button"
                            :class="{ 'active': currentProfileType === 'basic' }"
                        >
                            <div class="button-content">
                                <img 
                                    :src="currentProfileType === 'basic' ? UserBlue : UserBlack" 
                                    alt="Profile"
                                    class="button-icon"
                                >
                                <p class="button-text" :class="{ 'active': currentProfileType === 'basic' }">Profile</p>
                            </div>
                            <img 
                                :class="currentProfileType === 'basic' ? 'arrow-right' : 'arrow-down'" 
                                :src="currentProfileType === 'basic' ? RightBlue : DownDark" 
                                alt=""
                            >
                        </button>
                        
                        <button 
                            @click="changeProfileType('preferences')" 
                            class="nav-button"
                            :class="{ 'active': currentProfileType === 'preferences' }"
                        >
                            <div class="button-content">
                                <img 
                                    :src="currentProfileType === 'preferences' ? ListViewBlue : ListView" 
                                    alt="Preferences"
                                    class="button-icon"
                                >
                                <p class="button-text" :class="{ 'active': currentProfileType === 'preferences' }">Preferences</p>
                            </div>
                            <img 
                                :class="currentProfileType === 'preferences' ? 'arrow-right' : 'arrow-down'" 
                                :src="currentProfileType === 'preferences' ? RightBlue : DownDark" 
                                alt=""
                            >
                        </button>
                        
                        <button 
                            @click="changeProfileType('payment')" 
                            class="nav-button"
                            :class="{ 'active': currentProfileType === 'payment' }"
                        >
                            <div class="button-content">
                                <img 
                                    :src="currentProfileType === 'payment' ? WalletBlue : Wallet" 
                                    alt="Payment"
                                    class="button-icon"
                                >
                                <p class="button-text" :class="{ 'active': currentProfileType === 'payment' }">Payment</p>
                            </div>
                            <img 
                                :class="currentProfileType === 'payment' ? 'arrow-right' : 'arrow-down'" 
                                :src="currentProfileType === 'payment' ? RightBlue : DownDark" 
                                alt=""
                            >
                        </button>
                        
                        <button 
                            @click="changeProfileType('help')" 
                            class="nav-button"
                            :class="{ 'active': currentProfileType === 'help' }"
                        >
                            <div class="button-content">
                                <img 
                                    :src="currentProfileType === 'help' ? HelpBlue : HelpBlack" 
                                    alt="Help"
                                    class="button-icon"
                                >
                                <p class="button-text" :class="{ 'active': currentProfileType === 'help' }">Help</p>
                            </div>
                            <img 
                                :class="currentProfileType === 'help' ? 'arrow-right' : 'arrow-down'" 
                                :src="currentProfileType === 'help' ? RightBlue : DownDark" 
                                alt=""
                            >
                        </button>
                        
                        <button 
                            @click="changeProfileType('settings')" 
                            class="nav-button"
                            :class="{ 'active': currentProfileType === 'settings' }"
                        >
                            <div class="button-content">
                                <img 
                                    :src="currentProfileType === 'settings' ? SettingBlue : Setting" 
                                    alt="Settings"
                                    class="button-icon"
                                >
                                <p class="button-text" :class="{ 'active': currentProfileType === 'settings' }">Setting</p>
                            </div>
                            <img 
                                :class="currentProfileType === 'settings' ? 'arrow-right' : 'arrow-down'" 
                                :src="currentProfileType === 'settings' ? RightBlue : DownDark" 
                                alt=""
                            >
                        </button>
                        
                        <a href="/" class="signout-link">
                            <p class="signout-text">Sign Out</p>
                        </a>
                    </div>
                </div>
            </div>
            
            <CustomerProfile :profileType="currentProfileType" />
        </div>
        <FooterElem />
    </div>
</template>

<style scoped>
.page-container,
.content-wrapper,
.sidebar,
.user-info,
.user-greeting,
.user-email,
.sidebar-content,
.sidebar-description,
.nav-buttons,
.nav-button,
.button-content,
.button-text,
.signout-link,
.signout-text {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.page-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.content-wrapper {
    width: 100%;
    background-color: var(--neutral-100);
    display: flex;
    gap: 24px;
    padding: 48px 108px 60px;
    flex: 1;
}

/* Sidebar Styles */
.sidebar {
    width: 288px;
    height: 522px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.user-info {
    height: 72px;
    padding: 16px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.user-greeting {
    font-size: 14px;
    font-weight: 700;
    font-family: var(--font-pBold);
}

.user-email {
    font-size: 12px;
    color: #666;
}

.sidebar-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.sidebar-description {
    font-size: 12px;
    color: #333;
    line-height: 1.4;
}

/* Navigation Buttons */
.nav-buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.nav-button {
    height: 48px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.nav-button:hover {
    background-color: var(--neutral-50);
}

.nav-button.active {
    background-color: white;
}

.button-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.button-icon {
    width: 20px;
    height: 20px;
}

.button-text {
    font-size: 16px;
    color: #333;
    transition: color 0.2s ease;
}

.button-text.active {
    color: var(--primary-500);
}

/* Arrow Icons */
.arrow-right {
    width: 20px;
    height: 20px;
}

.arrow-down {
    width: 20px;
    height: 20px;
    transform: rotate(-90deg);
}

/* Sign Out Link */
.signout-link {
    height: 48px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    text-decoration: none;
    transition: all 0.2s ease;
}

.signout-link:hover {
    background-color: var(--neutral-50);
    text-decoration: none;
}

.signout-text {
    font-size: 14px;
    font-weight: 700;
    font-family: var(--font-pBold);
    color: var(--primary-500);
}

/* Responsive adjustments */
@media (max-width: 1200px) {
    .content-wrapper {
        padding: 48px 24px 60px;
        flex-direction: column;
        gap: 32px;
    }
    
    .sidebar {
        width: 100%;
        height: auto;
        gap: 24px;
    }
    
    .user-info {
        width: 100%;
    }
    
    .nav-buttons {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 12px;
    }
    
    .nav-button, .signout-link {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .content-wrapper {
        padding: 32px 16px 48px;
    }
    
    .nav-buttons {
        grid-template-columns: 1fr;
    }
}
</style>