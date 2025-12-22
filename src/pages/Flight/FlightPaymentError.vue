<template>
<div class="landing-page">
    <headerElem headerType="default" />

    <section class="payment">
        <div class="payment-left">
            <div class="payment-left-up">
                <div class="payment-left-up-info">
                    <h4>Information You need to pay attention .</h4>
                    <div class="body-L">Passengers are divided according to age categories .</div>
                </div>
                <div class="body-S">Please Check Categories</div>
            </div>

            <div>
                <div class="before-purchase__top-bar">
                    <h5>One stop, 3h Between</h5>
                    <h5 class="before-purchase__duration ">
                        Flight Duration 9: 45h
                    </h5>
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
            </div>

            <div class="payment-left-bottom">
                <h4>Your Trip Summary</h4>
                <div class="body-S">Your flight take off from ARN Gate 23A , you Enter through C Entrance. </div>
                <div class="body-S">In FCO Airport in Rome You will stay 3h &45m then Exit through Gate D14 .</div>
                        <div class="body-S">Final Destination will be SABIHA Airport and You can Exit Through L Door .</div>
            </div>

            <div class="payment-left-footer">
                <div class="row">
                    <span class="but-XXL">Very Good</span>
                    <span class="reviews body-L">, 2.259 Reviews</span>
                    <img src="@/assets/icons/down.svg" class="icon"></img>
                </div>
                <div class="row body-L">
                    <img src="@/assets/icons/leave.svg" ></img>
                    Sustainability Level 
                    <img src="@/assets/icons/down.svg" class="icon"></img>
                </div>
            </div>
        </div>

        <div class="payment-right">
            <!-- Заголовок -->
            <h4>Payment Methods And Information</h4>

            <!-- Price Details -->
            <div class="price-details">
            <div class="sub-L">Price Details</div>

            <div class="price-details__row">
                <div class="price-details__item body-M">
                <span class="price-details__amount">$ 87</span>
                <span>2 Adults</span>
                </div>
                <div class="price-details__item body-M">
                <span class="price-details__amount">$ 24</span>
                <span>3 Children</span>
                </div>
                <div class="price-details__item body-M">
                <span class="price-details__amount">$ 12</span>
                <span>1 Infants</span>
                </div>
            </div>

            <div class="price-details__total-row">
                <span class="sub-L">Total (USD)</span>
                <span class="price-details__total body-XL">$ 157</span>
            </div>
            </div>

            <!-- Booking for work + Payment Method -->
            <div class="payment-header">
            <div class="payment-header__left">
                <input type="radio" name="booking" checked />
                <span class="sub-L">Booking For Work</span>
            </div>

            <div class="payment-header__right">
                <span class="sub-L">Payment Method</span>
                <div class="payment-header__method">
                <img src="@/assets/icons/Paypal.svg" alt="paypal">
                <img src="@/assets/icons/drop-down-list-gray.svg" alt="dropdown">
                </div>
            </div>
            </div>

            <!-- Inputs row 1 -->
            <div class="payment-form">
            <div class="payment-form__row">
                <div class="payment-form__field">
                <label class="body-XS">
                    First Name <span class="required">*</span>
                </label>
                <input style="width: 134px" type="text" value="Anna">
                </div>

                <div class="payment-form__field">
                <label class="body-XS">
                    Last Name <span class="required">*</span>
                </label>
                <input style="width: 134px" type="text" value="Carinna">
                </div>

                <div class="payment-form__field payment-form__field--phone">
                <label class="body-XS">
                    Phone Number <span class="required">*</span>
                </label>
                <div class="phone-input">
                    <div class="phone-input__prefix">
                    <img src="@/assets/icons/flags/sweden.svg" alt="flag">
                    </div>
                    <input type="text" value="764378888888">
                </div>
                </div>
            </div>

            <!-- Inputs row 2 -->
            <div class="payment-form__row">
                <div class="payment-form__field">
                <label style="color: var(--color-error-light)" class="body-XS">
                    Card Number
                </label>
                <div class="input-with-icon">
                  <input type="text" value="•••• •••• •••• ••••">
                  <img src="@/assets/icons/attention.svg" alt="card" class="input-icon">
                </div>

                </div>

                <div class="payment-form__field payment-form__field--small">
                <label class="body-XS">
                    CVC <span class="required">*</span>
                </label>
                <input type="text" value="***">
                </div>

                <div class="payment-form__field payment-form__field--small">
                <label class="body-XS">
                    EXP Date <span class="required">*</span>
                </label>
                <input type="text" value="**/**">
                </div>
            </div>
            </div>

            <!-- Cancellation Policy -->
            <div class="cancellation">
            <h4>Cancellation Policy</h4>
            <p class="body-M cancellation__text">
                Get A Full Refund If You Cancel By Jun 23 (PDT) .&nbsp;
                <span class="cancellation__link">Read More ...</span>
            </p>
            </div>

            <!-- Bottom buttons -->
            <div class="payment-buttons">
            <button class="payment-buttons__primary">
                Confirm And Pay
            </button>

            <button class="payment-buttons__secondary">
                Save If You Like It
                <img src="@/assets/icons/like-blue.svg" alt="heart">
            </button>
            </div>
        </div>
    </section>

<footer><footerElem variant="noApp" />
</footer>
</div>
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
.landing-page {
    background-color: var(--color-neutral-100);
    display: flex;
    flex-direction: column;
    gap: 48px;
}
.payment {
    display: flex;
    width: 1224px;
    height: 737px;
    gap: 130px;
    background-color: var(--color-white);
    margin: 0 auto;
    padding: 48px 32px;
}
.payment-left {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.payment-left-up-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.payment-left-up {
    display: flex;
    flex-direction: column;
}

/* middle */
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

.row {
  display: flex;
  align-items: center;
  gap: 5px;
}

.payment-left-footer {
    display: flex;
  align-items: center;
  gap: 32px;
}

/* 
right */
.payment-right {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 515px;
height: 641px;
}

/* заголовок */
.payment-section h4 {
  margin: 0;
}

/* Price Details */
.price-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid var(--color-neutral-200);
  padding-bottom: 16px;
}

.price-details__row {
  display: flex;
  gap: 32px;
}

.price-details__item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price-details__amount {
  color: var(--color-success);
  font-weight: 600;
}

.price-details__total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-details__total {
  color: var(--color-success);
  font-weight: 600;
}

/* Booking For Work + Payment Method */
.payment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.payment-header__left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.payment-header__icon-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--color-neutral-300);
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-header__right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.payment-header__method {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--color-neutral-300);
  border-radius: 4px;
  padding: 8px 12px;
}

/* Form */
.payment-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.payment-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

.payment-form__field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.payment-form__field--phone {
  grid-column: 3 / 4;
}

.payment-form__field--small {
  max-width: 140px;
}

.payment-form__field label {
  color: var(--color-neutral-500);
}

.required {
  color: var(--color-error-light);
}

.payment-form input {
  height: 44px;
  border-radius: 4px;
  border: 1px solid var(--color-neutral-300);
  padding: 0 12px;
  font-family: "Poppins-Regular", sans-serif;
  font-size: 14px;
}

/* phone input */
.phone-input {
  display: flex;
  align-items: center;
}

.phone-input__prefix {
  height: 44px;
  padding: 0 10px;
  border: 1px solid var(--color-neutral-300);
  border-radius: 4px 0 0 4px;
  border-right: none;
  display: flex;
  align-items: center;
  background-color: var(--color-neutral-100);
}

.phone-input input {
  border-radius: 0 4px 4px 0;
  border-left: none;
}

/* Cancellation */
.cancellation h4 {
  margin: 0 0 4px 0;
}

.cancellation__text {
  margin: 0;
  color: var(--color-neutral-500);
}

.cancellation__link {
  color: var(--color-primary-500);
}

/* Buttons */
.payment-buttons {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

.payment-buttons__primary {
  flex: 1;
  height: 48px;
  border-radius: 4px;
  border: none;
  background-color: var(--color-primary-500);
  color: var(--color-white);
  font-family: "Poppins-Medium", sans-serif;
  font-size: 14px;
  cursor: pointer;
}

.payment-buttons__secondary {
  flex: 1;
  height: 48px;
  border-radius: 4px;
  border: 1px solid var(--color-primary-500);
  background-color: var(--color-white);
  color: var(--color-primary-500);
  font-family: "Poppins-Medium", sans-serif;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.icon {
    filter: brightness(0) saturate(100%);
}

.input-with-icon {
  position: relative;
  display: inline-block;
}

.input-with-icon input {
  padding-right: 40px;        /* место под иконку */
  height: 44px;
  border: 1px solid var(--color-neutral-300);
  border-radius: 4px;
}

.input-icon {
  position: absolute;
  right: 10px;                /* отступ от правого края */
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  pointer-events: none;       /* чтобы клики шли по инпуту */
}

</style>