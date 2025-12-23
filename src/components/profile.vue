<script setup>
import chatCard from '@/assets/images/ChatBox.png';
import { ref, computed } from 'vue';

const props = defineProps({
    profileType: {
        type: String,
        default: 'basic',
        validator: (value) => ['basic', 'preferences', 'payment', 'help', 'settings'].includes(value)
    },
})

const title = computed(() => {
    const titles = {
        basic: 'Basic information',
        preferences: 'Preferences',
        payment: 'Payment',
        help: 'Help',
        settings: 'Settings'
    };
    return titles[props.profileType] || titles.basic;
});

const description = computed(() => {
    const descriptions = {
        basic: 'Make sure this information matches your travel ID, like your passport or license.',
        preferences: 'Change your language, currency, and accessibility requirements.',
        payment: 'Securely add or remove payment methods to make it easier when you book.',
        help: 'Have questions or feedback for us? We`re listening.',
        settings: 'Keep your account safe with a secure password and by signing out of devices you`re not actively using.'
    };
    return descriptions[props.profileType] || descriptions.basic;
});

const basicType = ref('default')

const toggleValue = (currentValue) => {
    basicType.value = currentValue;
};

const isChat = ref(false)
const toggleChat = () => {
    isChat.value = !isChat.value;
};

</script>

<template>
    <div class="profile-container">
        <div class="header">
            <div class="header-content">
                <p v-if="basicType !== 'warning'" class="title">{{ title }}</p>
                <p v-if="profileType === 'settings'" class="subtitle">Sign-in and security</p>
                <p v-if="basicType !== 'warning'" class="description">{{ description }}</p>
            </div>
            <button 
                @click="toggleValue('full')" 
                v-if="(profileType === 'basic' && basicType === 'default') || profileType === 'payment'" 
                class="edit-button"
            >
                Edit
            </button>
        </div>
        
        <!-- Basic Information - Default View -->
        <div v-if="profileType === 'basic' && basicType === 'default'" class="basic-info-default">
            <div class="info-grid">
                <div class="info-column">
                    <div class="info-item">
                        <p class="info-label">Full Name</p>
                        <p class="info-value">Anna Carolina</p>
                    </div>
                    <div class="info-item">
                        <p class="info-label">Disability</p>
                        <p class="info-value">None</p>
                    </div>
                </div>
                <div class="info-column">
                    <div class="info-item">
                        <p class="info-label">Date of birth</p>
                        <p class="info-value">Not provided</p>
                    </div>
                    <div class="info-item">
                        <p class="info-label">Accessibility needs</p>
                        <p class="info-value">Not provided</p>
                    </div>
                </div>
                <div class="info-column">
                    <div class="info-item">
                        <p class="info-label">Bio</p>
                        <p class="info-value">Not provided</p>
                    </div>
                    <div class="info-item">
                        <p class="info-label">Gender</p>
                        <p class="info-value">Not provided</p>
                    </div>
                </div>
            </div>
            
            <div class="contact-section">
                <div class="contact-header">
                    <p class="title">Contact</p>
                    <p class="description">Receive account activity alerts and trip updates by sharing this information.</p>
                </div>
                <p class="edit-button">Edit</p>
            </div>
            
            <div class="contact-grid">
                <div class="contact-column">
                    <div class="info-item">
                        <p class="info-label">Mobile number</p>
                        <p class="info-value">Not provided</p>
                    </div>
                    <p class="info-label">Emergency contact</p>
                </div>
                <div class="contact-column">
                    <div class="info-item">
                        <p class="info-label">Email</p>
                        <p class="info-value">Annacarolina@gmail.com</p>
                    </div>
                    <div class="info-item">
                        <p class="info-label">Address</p>
                        <p class="info-value">Not provided</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Basic Information - Full Edit View -->
        <div v-if="profileType === 'basic' && basicType === 'full'" class="basic-edit-form">
            <div class="form-section">
                <div class="form-group">
                    <p class="form-label">Full name</p>
                    <div class="name-fields">
                        <div class="input-field">
                            <p class="placeholder">First name <span class="required">*</span></p>
                        </div>
                        <div class="input-field">
                            <p class="placeholder">Middle name</p>
                        </div>
                        <div class="input-field">
                            <p class="placeholder">Last name <span class="required">*</span></p>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <p class="form-label">About you</p>
                    <div class="textarea-field">
                        <p class="placeholder">Bio <br>You can share your travel style, hobbies, interests, and more.</p>
                    </div>
                </div>

                <div class="form-group">
                    <p class="form-label">Date of birth</p>
                    <div class="date-fields">
                        <div class="date-input">
                            <p class="placeholder">Month<br>MM</p>
                        </div>
                        <div class="date-input">
                            <p class="placeholder">Day<br>DD</p>
                        </div>
                        <div class="date-input">
                            <p class="placeholder">Year<br>YYYY</p>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <p class="form-label">Gender</p>
                    <div class="radio-group">
                        <div class="radio-item">
                            <p class="radio-label">Female</p>
                            <label class="radio-container">
                                <input type="radio" class="radio-input" name="gender">
                                <div class="radio-custom"></div>
                            </label>
                        </div>
                        <div class="radio-item">
                            <p class="radio-label">Male</p>
                            <label class="radio-container">
                                <input type="radio" class="radio-input" name="gender">
                                <div class="radio-custom"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <p class="form-label">Accessibility needs</p>
                    <p class="form-help">Help us build features that make travel accessible for all by sharing this information.</p>
                    <div class="select-field">
                        <p class="select-placeholder">Choose an option<br><span class="select-value">Not provided</span></p>
                        <img src="@/assets/icons/down-gray.svg" alt="">
                    </div>
                </div>

                <button @click="toggleValue('warning')" class="save-button">Save</button>
            </div>
        </div>
        
        <!-- Warning View -->
        <div v-if="profileType === 'basic' && basicType === 'warning'" class="warning-view">
            <div class="warning-header">
                <img src="@/assets/icons/caution.svg" alt="">
                <p class="warning-title">Provide Mandatory Information</p>
            </div>
            
            <div class="warning-fields">
                <div class="warning-field">
                    <p class="field-label">First Name <span class="required" :class="{ 'white': isError}">*</span></p>
                    <div class="field-input">
                        <p class="field-value">Anna</p>
                    </div>
                </div>
                <div class="warning-field">
                    <p class="field-label">Last Name <span class="required" :class="{ 'white': isError}">*</span></p>
                    <div class="field-input">
                        <p class="field-value">Carinna</p>
                    </div>
                </div>
                <div class="warning-field">
                    <p class="field-label">Phone Number <span class="required" :class="{ 'white': isError}">*</span></p>
                    <div class="field-input with-flag">
                        <img class="flag" src="@/assets/icons/flags/sweden.svg" alt="">
                        <p class="field-value">220202222</p>
                    </div>
                </div>
            </div>
            
            <div class="verification-section">
                <div class="verification-info">
                    <p class="verification-title">Pay Attention</p>
                    <p class="verification-text">Insert the code that was sent to your Phone Number.</p>
                </div>
                <div class="verification-field">
                    <p class="field-label">Insert The Code <span class="required" :class="{ 'white': isError}">*</span></p>
                    <div class="field-input">
                        <p class="field-value">.........................</p>
                    </div>
                </div>
            </div>
            
            <div class="verification-action">
                <a href="/tracking" class="verification-button">Save</a>
            </div>
        </div>
        
        <!-- Preferences View -->
        <div v-if="profileType === 'preferences'" class="preferences-view">
            <div class="preference-item">
                <p class="preference-label">Currency</p>
                <div class="preference-select">
                    <div class="select-content">
                        <img src="@/assets/icons/dollar-blue.svg" alt="">
                        <p class="select-text">U.S Dollar</p>
                    </div>
                    <img src="@/assets/icons/sort-blue.svg" alt="">
                </div>
                <p class="edit-button">Edit</p>
            </div>
            
            <div class="preference-item">
                <p class="preference-label">Language</p>
                <div class="language-display">
                    <div class="flag-container">
                        <img src="@/assets/images/England.png" alt="en">
                    </div>
                    <p class="language-text">United kingdom English</p>
                </div>
                <p class="edit-button">Edit</p>
            </div>
            
            <div class="preference-item">
                <p class="preference-label">Accessibility requirements</p>
                <p class="preference-description">Filter out properties that don't meet your needs</p>
                <p class="edit-button">Edit</p>
            </div>
        </div>
        
        <!-- Payment View -->
        <div v-if="profileType === 'payment'" class="payment-view">
            <div class="payment-section">
                <p class="section-title">Payment Methods</p>
                <div class="payment-methods">
                    <div class="payment-method">
                        <img src="@/assets/images/visa.png" alt="visa">
                    </div>
                    <div class="payment-method">
                        <img src="@/assets/images/amex.png" alt="amex">
                    </div>
                    <div class="payment-method">
                        <img src="@/assets/images/mastercard.png" alt="mastercard">
                    </div>
                    <div class="payment-method">
                        <img src="@/assets/images/paypal.png" alt="international">
                    </div>
                </div>
                
                <div class="payment-form">
                    <div class="form-row">
                        <p class="form-label">Name On The Card<span class="required">*</span></p>
                        <div class="card-input"></div>
                    </div>
                    
                    <div class="form-row">
                        <p class="form-label">Card number<span class="required">*</span></p>
                        <div class="card-input"></div>
                    </div>
                    
                    <div class="form-row">
                        <p class="form-label">Exp date<span class="required">*</span></p>
                        <div class="exp-input">
                            <p class="placeholder">MM/YY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Help View -->
        <div v-if="profileType === 'help'" class="help-view">
            <div class="help-options">
                <button @click="toggleChat()" class="help-option chat-option">
                    <div class="option-content">
                        <img src="@/assets/icons/wechat.svg" alt="">
                        <p class="option-text">Chat</p>
                    </div>
                    <img class="arrow-icon" src="@/assets/icons/right-blue.svg" alt="">
                </button>
                
                <div class="help-option">
                    <div class="option-content">
                        <img src="@/assets/icons/help-black.svg" alt="">
                        <p class="option-text">Visit the help center</p>
                    </div>
                    <img class="dropdown-icon" src="@/assets/icons/down-dark-small.svg" alt="">
                </div>
                
                <div class="help-option">
                    <div class="option-content">
                        <img src="@/assets/icons/phone-telephone.svg" alt="">
                        <p class="option-text">Call Easyset</p>
                    </div>
                    <img class="dropdown-icon" src="@/assets/icons/down-dark-small.svg" alt="">
                </div>
                
                <div class="help-option">
                    <p class="option-text">Share your feedback</p>
                    <img class="dropdown-icon" src="@/assets/icons/down-dark-small.svg" alt="">
                </div>
            </div>
            
            <div v-if="isChat" class="chat-container">
                <chatCard />
            </div>
        </div>
        
        <!-- Settings View -->
        <div v-if="profileType === 'settings'" class="settings-view">
            <div class="settings-options">
                <div class="settings-option">
                    <p class="option-text">Email</p>
                    <img class="dropdown-icon" src="@/assets/icons/down-dark-small.svg" alt="">
                </div>
                <div class="settings-option">
                    <p class="option-text">Change Password</p>
                    <img class="dropdown-icon" src="@/assets/icons/down-dark-small.svg" alt="">
                </div>
                <div class="settings-option">
                    <p class="option-text">Connected device</p>
                    <img class="dropdown-icon" src="@/assets/icons/down-dark-small.svg" alt="">
                </div>
            </div>
            
            <p class="section-title">Account management</p>
            <p class="section-description">Control other options to manage your data, like deleting your account.</p>
            
            <div class="settings-option">
                <p class="option-text">Data Control</p>
                <img class="dropdown-icon" src="@/assets/icons/down-dark-small.svg" alt="">
            </div>
            
            <button class="delete-button">Delete account</button>
        </div>
    </div>
</template>

<style scoped>
.profile-container {
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 4px;
    position: relative;
}

/* Header Styles */
.header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 728px;
}

.header-content {
    flex: 1;
}

.title {
    font-size: 24px;
    font-weight: 700;
    font-family: var(--font-pBold);
    margin-bottom: 8px;
}

.subtitle {
    font-size: 20px;
    font-weight: 700;
    font-family: var(--font-pBold);
}

.description {
    font-size: 14px;
    color: #666;
}

.edit-button {
    font-size: 16px;
    font-weight: 500;
    font-family: var(--font-pMed);
    color: var(--primary-500);
    background: none;
    border: none;
    cursor: pointer;
}

/* Basic Info Default Styles */
.basic-info-default {
    margin-top: 16px;
}

.info-grid {
    display: flex;
    gap: 107px;
    margin-top: 16px;
}

.info-column,
.contact-column {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.info-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.info-label {
    font-weight: 700;
    font-family: var(--font-pBold);
    font-size: 14px;
}

.info-value {
    font-weight: 500;
    font-family: var(--font-pMed);
    font-size: 14px;
    color: var(--neutral-500);
}

.contact-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 24px;
    width: 727px;
}

.contact-header {
    flex: 1;
}

.contact-grid {
    display: flex;
    gap: 324px;
    margin-top: 16px;
}

/* Basic Edit Form Styles */
.basic-edit-form {
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin-top: 48px;
}

.form-section {
    display: flex;
    flex-direction: column;
    gap: 48px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-label {
    font-size: 14px;
    font-weight: 700;
    font-family: var(--font-pBold);
}

.form-help {
    font-size: 12px;
    margin-top: 4px;
    color: #666;
}

.name-fields {
    display: flex;
    flex-direction: column;
    width: 383px;
    gap: 8px;
    margin-top: 16px;
}

.input-field,
.textarea-field,
.select-field,
.date-input {
    border: 1px solid var(--neutral-400);
    border-radius: 2px;
    padding: 8px;
    display: flex;
    align-items: center;
}

.input-field {
    height: 40px;
}

.textarea-field {
    height: 56px;
    width: 383px;
}

.select-field {
    height: 56px;
    width: 383px;
    justify-content: space-between;
    margin-top: 16px;
}

.date-fields {
    display: flex;
    width: 383px;
    justify-content: space-between;
    margin-top: 16px;
}

.date-input {
    width: 117px;
    height: 40px;
}

.placeholder {
    font-size: 12px;
    color: var(--neutral-500);
}

.select-value {
    font-size: 14px;
}

.required {
    color: var(--state-error-light);
}

.white {
    color: white;
}

/* Radio Button Styles */
.radio-group {
    display: flex;
    flex-direction: column;
    width: 105px;
    gap: 8px;
    margin-top: 16px;
}

.radio-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.radio-label {
    font-size: 12px;
}

.radio-container {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}

.radio-input {
    display: none;
}

.radio-custom {
    width: 20px;
    height: 20px;
    background-color: var(--neutral-100);
    border: 1px solid var(--neutral-400);
    border-radius: 50%;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.radio-input:checked + .radio-custom {
    border-color: var(--primary-500);
    background-color: var(--primary-500);
}

.radio-input:checked + .radio-custom::after {
    content: '';
    width: 16px;
    height: 16px;
    border: 2px solid white;
    border-radius: 50%;
}

.save-button {
    width: 384px;
    height: 40px;
    font-family: var(--font-pMed);
    background-color: var(--primary-500);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.save-button:hover {
    opacity: 0.9;
}

/* Warning View Styles */
.warning-view {
    margin-top: 16px;
}

.warning-header {
    display: flex;
    align-items: center;
    gap: 24px;
}

.warning-title {
    font-size: 24px;
    font-weight: 700;
    font-family: var(--font-pBold);
    margin-bottom: 8px;
}

.warning-fields {
    display: flex;
    gap: 24px;
    margin-top: 24px;
}

.warning-field {
    display: flex;
    flex-direction: column;
}

.field-label {
    font-size: 14px;
    font-weight: 500;
    font-family: var(--font-pMed);
    margin-bottom: 4px;
}

.field-input {
    border: 1px solid var(--neutral-400);
    border-radius: 2px;
    padding: 8px;
    height: 48px;
    display: flex;
    align-items: center;
}

.field-input.with-flag {
    gap: 8px;
}

.flag {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    object-fit: cover;
    object-position: left;
}

.field-value {
    font-size: 12px;
    color: var(--neutral-500);
}

.verification-section {
    width: 436px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 24px;
}

.verification-info {
    width: 252px;
    color: var(--primary-600);
}

.verification-title {
    font-size: 14px;
}

.verification-text {
    font-size: 12px;
}

.verification-action {
    width: 469px;
    display: flex;
    justify-content: center;
}

.verification-button {
    height: 48px;
    width: 230px;
    margin-top: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-500);
    color: white;
    border-radius: 4px;
    text-decoration: none;
    font-family: var(--font-pMed);
}

.verification-button:hover {
    text-decoration: none;
    opacity: 0.9;
}

/* Preferences View Styles */
.preferences-view {
    margin-top: 32px;
}

.preference-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 728px;
    margin-top: 32px;
}

.preference-label {
    font-size: 16px;
    font-weight: 700;
    font-family: var(--font-pBold);
}

.preference-description {
    font-size: 14px;
    font-weight: 500;
    font-family: var(--font-pMed);
}

.preference-select {
    width: 244px;
    height: 40px;
    border: 1px solid var(--neutral-400);
    border-radius: 2px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.select-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.select-text {
    font-size: 12px;
    color: var(--primary-500);
}

.language-display {
    display: flex;
    align-items: center;
    gap: 1px;
}

.flag-container {
    height: 40px;
    width: 40px;
    background-color: var(--neutral-100);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flag-container img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
}

.language-text {
    font-size: 14px;
    font-weight: 500;
    font-family: var(--font-pMed);
}

/* Payment View Styles */
.payment-view {
    margin-top: 32px;
}

.payment-section {
    margin-top: 32px;
}

.section-title {
    font-size: 16px;
    font-weight: 700;
    font-family: var(--font-pBold);
}

.payment-methods {
    padding: 8px 0;
    display: flex;
    gap: 16px;
    margin-top: 8px;
}

.payment-method {
    height: 24px;
    width: 72px;
    padding: 0 16px;
    background-color: var(--neutral-100);
    border: 1px solid var(--neutral-300);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.payment-method img {
    height: 20px;
}

.payment-form {
    margin-top: 24px;
}

.form-row {
    margin-top: 24px;
}

.card-input {
    width: 337px;
    height: 40px;
    border: 1px solid var(--neutral-300);
    border-radius: 2px;
    margin-top: 4px;
}

.exp-input {
    width: 138px;
    height: 40px;
    border: 1px solid var(--neutral-300);
    border-radius: 2px;
    margin-top: 4px;
    padding: 8px;
    display: flex;
    align-items: center;
}

/* Help View Styles */
.help-view {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 32px;
}

.help-options {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 310px;
}

.help-option {
    height: 48px;
    border: 1px solid var(--neutral-300);
    border-radius: 4px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: none;
    cursor: pointer;
}

.chat-option {
    border-color: var(--neutral-300);
}

.option-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.option-text {
    font-size: 16px;
    color: inherit;
}

.chat-option .option-text {
    color: var(--primary-500);
}

.arrow-icon {
    width: 20px;
    height: 20px;
}

.dropdown-icon {
    width: 20px;
    height: 20px;
    transform: rotate(-90deg);
}

.chat-container {
    margin-left: 16px;
}

/* Settings View Styles */
.settings-view {
    margin-top: 32px;
}

.settings-options {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 310px;
}

.settings-option {
    height: 48px;
    border: 1px solid var(--neutral-300);
    border-radius: 4px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.section-description {
    font-size: 14px;
    color: #666;
    margin-top: 4px;
}

.delete-button {
    width: 310px;
    height: 48px;
    margin-top: 16px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    color: var(--primary-500);
    font-size: 14px;
    font-weight: 700;
    font-family: var(--font-pBold);
    border: 1px solid var(--neutral-300);
    border-radius: 4px;
    cursor: pointer;
}

.delete-button:hover {
    background-color: var(--neutral-50);
}

/* Common Button Styles */
.btn {
    cursor: pointer;
    transition: opacity 0.2s;
}

.btn:hover {
    opacity: 0.9;
}
</style>