<template>
  <div class="landing-page">
    <headerElem headerType="extended" selectedItem="Hotel"/>

    <main class="payment-page">
      <!-- LEFT COLUMN -->
      <section class="payment-page__left">
          <article class="hotel-block">
            <div class="hotel-card">
              <div class="hotel-card__image">
                <img src="@/assets/images/hotelInformation/hotel1.jpg"> 
                <img src="@/assets/images/hotelInformation/hotel2.jpg">  
                <img src="@/assets/images/hotelInformation/hotel3.jpg">  
                <img src="@/assets/images/hotelInformation/hotel4.jpg">   
              </div>
            </div>

            <section class="location-info">
              <div class="hotel-card__info">
                <h4 class="hotel-card__title">First Hotel G</h4>
                <p class="hotel-card__subtitle body-XS">
                  Modern Hotel at Gothenburg Central Station
                </p>
                <div class="hotel-card__rating-row">
                  <button class="hotel-card__reviews body-XS">
                    More Than 4,325 Review
                    <span class="hotel-card__arrow">                <img src="@/assets/icons/down-dark-small.svg"></span>
                  </button>

                  <span class="hotel-card__score but-S">9,2</span>
                </div>

                <div class="hotel-card__rating-line">
                  <div class="hotel-card__rating-fill" />
                </div>
              </div>

              <div>
                <div class="section-title sub-L">Location Information</div>

                <ul class="location-info__list sub-S">
                  <li>0 m to City Centre</li>
                  <li>24 km to Landvetter Airport</li>
                  <li>2.5 km to Liseberg Amusement Park</li>
                  <li>0 m to Gothenburg Central Station</li>
                </ul>
              </div>
              

              <ul class="location-info__amenities body-S">
                <div class="row"><img src="@/assets/icons/amenities/tea-drink.svg"> <li>Breakfast Included</li></div>
                <div class="row"><img src="@/assets/icons/amenities/wifi.svg"> <li>Free Wi-Fi</li></div>
                <div class="row"><img src="@/assets/icons/amenities/parking.svg"> <li>Free Parking</li></div>
                <div class="row"><img src="@/assets/icons/amenities/cat.svg"> <li>Pets Are Welcome</li></div>
                <div class="row"><img src="@/assets/icons/amenities/clothes-crew-neck.svg"> <li>Free Laundry Service</li></div>
                <div class="row"><img src="@/assets/icons/amenities/icon-x.svg"> <li>No Smoking</li></div>
                <div class="row"><img src="@/assets/icons/amenities/play-basketball.svg"> <li>Free Entrance Exercise Centre</li></div>
              </ul>
            </section>
          </article>

        
        
        <!-- Booking details -->
        <section class="booking-details">

          <div style="padding: 8px" class="booking-details__hotel">
            <h5 class="section-title">Your Booking Details</h5>
            <div class="booking-details__dates">
              <div class="booking-details__date">
                <h6 class=" booking-details__label">Check - In</h6>
                <span class="booking-details__value but-M">
                  2 August 2023
                </span>
              </div>
              <div class="booking-details__date">
                <h6 class="booking-details__label">Check - Out</h6>
                <span class="booking-details__value but-M">
                  6 August 2023
                </span>
              </div>
            </div>
          </div>

          <div style="padding:0 36px">
            <ul class="booking-details__list sub-M">
              <li>You Will Stay 4 Nights</li>
              <li>You Selected 2 Rooms For :</li>
              <li>2 Adults</li>
              <li>3 Children (12, 7 And 5 Years Old)</li>
              <li>0 Infant</li>
            </ul>
          </div>
          </section>

          <div class="booking-details__room">
            <h5 class="room-title ">
              The Room : <span class="room-title--bold body-XL">Superior Twin Room</span>
            </h5>

            <div class="row">
              <img src="@/assets/icons/Input.svg"></img>
              <h6 class="room-subtitle ">Guest Number  </h6>
              <span class="body-XL">2 Adult</span>
              
            </div>

            <div class="row">
              <img src="@/assets/icons/hotel-please-clean.svg"></img>
              <div class="sub-M">Cleanliness rooms Rate</div>
              <span class="hotel-card__score but-S">8,9</span>
            </div>

            <div class="room-tags">
              <div class="tag row">
                <img src="@/assets/icons/hotel-dark.svg"></img>
                <span class="but-XL">18 M²</span>
              </div>
              <div class="tag row">
                <img src="@/assets/icons/local-two-dark.svg"></img>
                <span class="but-XL">City Center</span>
              </div>
              <div class="tag row">
                <img src="@/assets/icons/tree.svg"></img>
                <span class="but-XL">Next To Forest</span>
              </div>
              <div class="tag row">
                <img src="@/assets/icons/shower-head.svg"></img>
                <span class="but-XL">En‑Suite Bath Room</span>
              </div>
              <div class="tag row">
                <img src="@/assets/icons/tv-one.svg"></img>
                <span class="but-XL">Flat‑Screen TV</span>
              </div>
            </div>
          </div>


        <!-- Payment information -->
        <section class="payment-info">
          <h3 class="section-title">Payment Information</h3>

          <div class="price-summary">
            <div>
              <h4 class="block-title">Your Price Summary</h4>
              <div class="divider" />
            </div>

            <div>
              <div class="price-row">
                <span class="sub-L">Original Price</span>
                <h6 class="price-row__value">$960 <span style="color: var(--color-neutral-500);">4 Nights</span></h6>
              
            </div><div class="divider" />
            </div>

            <div>
              <div class="price-row">
                <span class="sub-M">EasySet24 Loyalty Discount 4 %</span>
                <span class="price-row__value price-row__value--discount sub-M">
                  $100 Discount
                </span>
              </div>
              <div class="divider" />
            </div>

            <div class="price-row price-row--total body-XS">
              <span class="sub-L">Total Amount For Payment</span>
              <h4 class="price-total">$860</h4>
            </div>
          </div>

          <div class="cancel-policy">
            <h4 class="block-title">Cancellation Policy</h4>
            <div class="row">
              <img src="@/assets/icons/check-black.svg">
              <h6>Free Cancellation</h6>
            </div>
            
            <p class="text sub-M">
              Cancel / Rebook No Later Than 24 Hours Before,
              Otherwise You Pay 80% Of The Cost.
            </p>
          </div>

          <div class="pay-part">
            <div style="justify-content:space-between"  class="row">
              <h4 class="block-title">Pay Part Now, Part Later</h4>
              <input
                type="radio"
                name="work"
                value="booking"
                class="radio__input"
                checked
              />
            </div>

            <p class="text sub-M">
              Pay $ 200 Now, And The Rest ($660) Will Be Automatically Charged
              To The Same Payment Method On August 27, 2023. No Extra Fees.
            </p>
          </div>
        </section>
          <div class="payment-methods">
            <h4 class="block-title">Payment Methods</h4>
            <div class="payment-methods__row">
              <div class="payment-methods__item">
                <span class="but-XXL">Payment<br> Method</span>
                <div class="field-input ">
                  <img src="@/assets/icons/paypal.svg" alt="paypal">
                  <img src="@/assets/icons/drop-down-list.svg" alt="drop-down-list">
                </div>
              </div>
              <div class="payment-methods__item">
                <span class="but-XXL">Booking For Work</span>
                  <input
                    type="radio"
                    name="paymentType"
                    value="part"
                    class="radio__input"
                    checked
                  />
              </div>
            </div>
          </div>
        
      </section>

      <!-- RIGHT COLUMN -->
      <section class="payment-page__right">
      <div class="booking-section">
        <!-- Header с профилем -->
        <div class="section-header">
          <div class="profile-info">
            <img src="@/assets/images/profile-photo.svg" alt="Anna Carinna" class="avatar">
            <div class="user-details">
              <h6 class="h5">Anna Carinna</h6>
              <p class="body-XS">Easygest24@Gmail.Com</p>
            </div>
          </div>
          <button class="check-history-btn">
            <span>Check Your Booking History</span>
            <img src="@/assets/icons/right-blue.svg" alt="arrow">
          </button>
        </div>

        <!-- Who Are You Booking For -->
        <div class="booking-choice">
          <h6 >Who Are You Booking For?</h6>
          
          <div class="radio-group">
            <label class="radio-label">
              <input 
                type="radio" 
                name="booking-type" 
                value="main-guest"
                v-model="bookingType"
                class="radio__input"
              >
              <span class="body-XXS">I Am The Main Guest</span>
            </label>

            <label class="radio-label">
              <input 
                type="radio" 
                name="booking-type" 
                value="someone-else"
                v-model="bookingType"
                class="radio__input"
              >
              <span class="body-XXS">Booking Is For Someone Else</span>
            </label>
          </div>
        </div>

        <!-- Enter Your Information -->
        <div class="information-section">
          <div class="section-title">
            <h4 class="h5">Enter Your Information</h4>
            <button class="edit-profile-btn">
              <img src="@/assets/icons/pencil.svg" alt="edit">
              <span>Edit Profile</span>
            </button>
          </div>
          
          <p class="body-XS">Make Sure The Information That You Have Already Written In Yoy Profile Is Correct.</p>
        </div>
      </div>

      
        <section class="guest-info">

          <div class="form-row">
            <h6 class="field__label ">Full Name</h6>
            <div class="field__group field__group--3">
              <input
                type="text"
                class="field-group-row sub-S"
                placeholder="First name *"
              />
              <input
                type="text"
                class="field-group-row sub-S"
                placeholder="Middle name"
              />
              <input
                type="text"
                class="field-group-row sub-S"
                placeholder="Last name *"
              />
            </div>
          </div>

          <div class="row">
            <div class="field">
              <span class="field__label but-M">Email Address</span>
              <input
               style="width:364px; height:48px"
                type="email"
                class="field-input body-XS"
                placeholder="Email"
              />
            </div>
            <div class="field">
              <span class="field__label but-M">Phone Number</span>
              <input
                type="tel"
                class="field-group-row sub-S"
                placeholder="764378888888"
              />
            </div>
          </div>

          <div class="form-row form-row--2">
            <div class="field">
              <h6 class="field__label ">If You Need Assistance</h6>
              <span class="sub-S">Choose An Option Based On Physical Disability Accordingly.</span>
              
            </div>
            <div class="row">
              <div class="field">
                <span class="field__label but-M">Region / Country</span>
                <select class="field-group-row sub-S">
                  <option>Country *</option>
                </select>
              </div>
              <div class="field">
                <span class="field__label but-M">Choose An Option</span>
                <select class="field-group-row sub-S">
                  <option>Not Provided</option>
                  <img src="@/assets/icons/down-gray.svg">
                </select>
              </div>
            </div>
          </div>
            
        </section>

        <div class="stay-section">
          <h4 >Add To Your Stay</h4>

          <!-- Flight Option -->
          <div class="option-card">
            <div class="checkbox-wrapper">
              <input 
                type="checkbox" 
                id="flight-checkbox"
                v-model="selectedServices.flight"
                class="checkbox__input"
              >
              <label for="flight-checkbox" class="checkbox-label">
                <span class="option-title body-M">I Will Need A Flight For My Trip</span>
              </label>
            </div>

            <div class="option-content">
              <div class="offer-badge">
                <img src="@/assets/icons/flight-airflow.svg" alt="offer" class="offer-icon">
                <span class="offer-text body-S">20% Special Offer If You Book A Flight</span>
              </div>

              <p class="description body-S">
                Flexible Flight Options From Stockholm To Turkiye From SLK 766/Round Trip. Finnish Booking
              </p>
              <p class="description body-S">
                This Stay To Get Flight Recommendations That Match Your Selected Dates.
              </p>
            </div>
          </div>

          <!-- Taxi Option -->
          <div class="option-card">
            <div class="checkbox-wrapper">
              <input 
                type="checkbox" 
                id="taxi-checkbox"
                v-model="selectedServices.taxi"
                class="checkbox__input"
              >
              <label for="taxi-checkbox" class="checkbox-label">
                <span class="option-title body-M">Want To Book A Taxi Or Shuttle Ride In Advance?</span>
              </label>
            </div>

            <div class="option-content">
              <div class="offer-badge">
                <img src="@/assets/icons/taxi.svg" alt="offer" class="offer-icon">
                <span class="offer-text body-S">10% Special Offer If You Rent A Taxi</span>
              </div>

              <p class="description body-S">
                Avoid Surprises _ Get From The Airport To Your Accommodation Without A Hitch.
              </p>
              <p class="description body-S">
                We Will Add Taxi Options To Your Booking Confirmation.
              </p>
            </div>
          </div>

          <!-- Special Requests Section -->
          <div class="requests-section">
            <h5 class="h5">Special Requests</h5>

            <p class="info-text body-S">
              Special Requests Can Not Be Guaranteed _ But The Property Will Do Its Best To Meet Your Needs.
            </p>
            <p class="info-text body-S">
              You Can Always Make A Special Request After Your Booking Is Completed!
            </p>

            <div class="textarea-wrapper">
              <label for="special-requests" class="label-text label-S">(Optional)</label>
              <textarea 
                id="special-requests"
                v-model="specialRequests"
                placeholder=""
                class="textarea"
              ></textarea>
              <img src="@/assets/icons/pencil.svg" alt="edit" class="edit-icon">
            </div>

            <div class="checkbox-wrapper mt-16">
              <input 
                type="checkbox" 
                id="rooms-close-checkbox"
                v-model="selectedServices.roomsClose"
                class="checkbox__input"
              >
              <label for="rooms-close-checkbox" class="checkbox-label">
                <span class="option-title body-M">I Would Like Rooms Close To Each Other</span>
              </label>
            </div>
          </div>

          <!-- Your Arrival Time Section -->
          <div class="arrival-section">
            <h5 class="h5">Your Arrival Time</h5>

            <div class="info-item">
              <img src="@/assets/icons/check-one.svg" alt="check" class="info-icon">
              <p class="info-text body-S">Your Rooms Will Be Ready For Check_in Between 15:00 And 23:00</p>
            </div>

            <div class="info-item">
              <img src="@/assets/icons/history.svg" alt="clock" class="info-icon">
              <p class="info-text body-S">24-Huor Front Desk _Help Wherever You Need It!</p>
            </div>

            <div class="arrival-input-section">
              <label class="label-text label-S">Add Your Estimated Arrival Time <span class="optional">(Optional)</span></label>
              <select v-model="arrivalTime" class="select-input body-S">
                <option value="">Please Select</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
              </select>
              <p class="timezone-text body-XS">Time for CET time zone</p>
            </div>
          </div>
        </div>

        <section class="card-info">
          <h4 class="section-title">Bank Card Information</h4>

          <div class="row">
            <div class="field">
              <span class="field__label but-M">Full Name On The Card</span>
              <input
                style="height:48px"
                type="text"
                class="field-group-row body-XS"
                value="Anna Carinna"
              />
            </div>
            <div class="field">
              <span class="field__label but-M">Card Number</span>
              <input
                style="height:48px"
                type="text"
                class="field-group-row body-XS"
                placeholder="•••• •••• •••• ••••"
              />
            </div>
            <div class="field">
              <span class="field__label but-M">EXP Date</span>
              <input
                type="text"
                class="field-input body-XS"
                placeholder="MM / YY"
              />
            </div>
            <div class="field">
              <span class="field__label but-M">CVC</span>
              <input
                type="text"
                class="field-input body-XS"
                placeholder="•••"
              />
            </div>
          </div>


          <div class="card-info__actions">
            <AuthButton size="large" >
              <div style="justify-content:center" class="row">
                <span class="but-M">Save In Shortcut</span>
                <img src="@/assets/icons/like-blue.svg">
              </div>
              
            </AuthButton>
            <fillButton  size="large" class="btn btn--primary">
              <a href="/reservation" class="but-M">Payment</a>
            </fillButton>
          </div>
        </section>
      </section>
    </main>

    <footer>
      <footerElem />
    </footer>
  </div>
</template>

<script setup>
import headerElem from "@/components/header.vue";
import footerElem from "@/components/footer.vue";
import fillButton from "@/components/UI/fillButton.vue";

import { ref } from 'vue'
import AuthButton from '@/components/UI/signButton.vue'
import router from "@/router";

const bookingType = ref('main-guest')

import { useRouter } from 'vue-router';


const selectedServices = ref({
  flight: false,
  taxi: false,
  roomsClose: false
})

const specialRequests = ref('')
const arrivalTime = ref('')
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-neutral-100);
}

.payment-page {
  flex: 1;
  display: grid;
  grid-template-columns: 519px 642px;
  column-gap: 62px;
  padding: 24px 108px 56px;
}

/* LEFT */
.payment-page__left {
  width: 519px;
  min-height: 2026px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  color: var(--color-green);
}

/* Hotel block */
.hotel-block {
  background: var(--color-white);
  border-radius: var(--border-radius);
  border: 1px solid var(--color-neutral-200);
  display:flex;
  padding: 16px;
}


.hotel-card__image {
  display: flex;
  flex-direction:column;
  width: 156px;
height: 544px;
gap: 16px;
padding: 8px;
}

.hotel-card__image img {
  width: 140px;
height: 120px;
border-radius: 4px;
}


.hotel-card__title {
  color: var(--color-green);
}

.hotel-card__subtitle {
  color: var(--color-neutral-500);
  margin-bottom: 16px;
}

.hotel-card__link {
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid var(--color-neutral-300);
  background: var(--color-white);
  color: var(--color-primary-500);
}

.hotel-card__rating-row {
  display: flex;
  align-items: center;
  gap: 29px;
  margin-top: 8px;
}

/* кнопка с текстом */
.hotel-card__reviews {
  border: none;
  background: transparent;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--color-green);
  font-size: 12px;
}

/* квадрат с оценкой */
.hotel-card__score {
  border: 1px solid var(--color-primary-500);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
height: 15px;

border-radius: 4px;
padding-top: 11px;
padding-right: 9px;
padding-bottom: 11px;
padding-left: 9px;
border-width: 1px;
color: var(--color-primary-500);
}

.hotel-card__rating-line {
  width: 221.2px;             
  height: 4px;
  border-radius: 999px;
  background: var(--color-neutral-400);
  overflow: hidden;
  margin-top: 5px;
}

.hotel-card__rating-fill {
  width: 80%;                 
  height: 100%;
  background: var(--color-primary-500);
}

.location-info {
  display:flex;
  flex-direction: column;
  gap: 24px;
  padding:16px;
}

.location-info__amenities, .booking-details__room{
  display:flex;
  flex-direction: column;
  gap:16px;
  list-style: none;
}

.booking-details {
  display:flex;
  flex-direction: column;
  gap:16px;
}

.booking-details, .booking-details__room,
.payment-info, .payment-methods, .booking-section, .guest-info, .stay-section, .card-info {
  background: var(--color-white);
  border-radius: var(--border-radius);
  padding: 16px ;
}

.location-info__list {
  margin-top: 8px;
  padding-left: 18px;
  color: var(--color-neutral-500);
}

.booking-details__dates {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
gap: 10px;
padding-top: 16px;
padding-right: 8px;
padding-bottom: 16px;
padding-left: 8px;

}

.booking-details__date {
  width: 215.5px;
height: 66px;
opacity: 1;
gap: 10px;
border-radius: 4px;
padding: 8px;
border-left-width: 1px;
border-left: 1px solid rgba(7, 104, 159, 1)
}

.booking-details__value {
  color: var(--color-green);
}

.booking-details__room {
  margin-top: 10px;
}

.room-title--bold {
  font-family: "Poppins-SemiBold";
}

.room-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
  margin-top: 8px;
}

.tag {
  font-size: 15px;
  border-radius: 4px;
  border: 1px solid var(--color-success);
  background: var(--color-success-light);
border-radius: 4px;
padding: 8px;
border-width: 1px;
}

/* Payment info */
.price-summary {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.divider {
  height: 1px;
  background: var(--color-neutral-200);
  margin: 6px 0;
}

.price-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.price-row__value--discount {
  color: var(--color-error-light);
}

.price-row--total {
  padding: 0px 16px 16px;
  border-bottom: 1px solid var(--color-neutral-500);
}

.price-total {
  color: var(--color-success);
}

.text {
  margin-top: 4px;
  color: var(--color-neutral-500);
}

/* Payment methods */
.payment-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.payment-methods__row {
  margin-top: 16px;
  display: flex;
  gap: 16px;
justify-content: space-between;
align-items: center;

}

.payment-methods__item {
  display: flex;
  flex-direction: row;
  gap: 8px;

}

.payment-methods__item img {
  width: 16px;
  height: 16px;
}

.radio__input {
  width: 24px;
height: 24px;
accent-color: var(--color-primary-500);
}

/* RIGHT */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-left: 16px;
  padding-right: 16px;
}

.profile-info {
  display: flex;
  gap: 16px;
  align-items: center;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-details h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-black);
}

.user-details p {
  margin: 0;
  color: var(--color-neutral-500);
}

.check-history-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 2px solid var(--color-primary-500);
  border-radius: var(--border-radius);
  padding: 10px 16px;
  color: var(--color-primary-500);
  font-family: "Poppins-Medium", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.check-history-btn:hover {
  background-color: var(--color-neutral-100);
}

.check-history-btn img {
  width: 16px;
  height: 16px;
}

/* Booking Choice Section */
.booking-choice {
  display: flex;
  flex-direction:row;
  padding: 16px;
  gap: 16px;
}

.booking-choice h4 {
  margin: 0 0 20px 0;
  color: var(--color-black);
}

.radio-group {
  display: flex;
  gap: 16px;
  align-items: center;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
}

.radio__input {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.radio-text {
  font-family: "Poppins-Regular", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-neutral-500);
}

.radio__input:checked + .radio-text {
  color: var(--color-primary-500);
  font-weight: 500;
}

.field-group-row {
  display: flex;
  flex-direction:row;
  width: 180px;
height: 40px;
gap: 8px;
border-radius: 2px;
border-width: 1px;
padding-top: 2px;
padding-right: 8px;
padding-bottom: 2px;
padding-left: 8px;
border: 1px solid var(--color-neutral-400);
}
/* Information Section */
.information-section {
  margin-bottom: 20px;
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-title h4 {
  margin: 0;
  color: var(--color-black);
}

.edit-profile-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: var(--color-primary-500);
  font-family: "Poppins-Medium", sans-serif;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
}

.edit-profile-btn:hover {
  color: var(--color-primary-600);
}

.edit-profile-btn img {
  width: 16px;
  height: 16px;
}

.form-fields {
  margin-bottom: 24px;
  /* Здесь будут поля формы */
}

.action-buttons {
  display: flex;
  justify-content: flex-start;
  gap: 16px;
}

.payment-page__right {
  width: 642px;
  min-height: 2025px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.page-title {
  color: var(--color-green);
}

.page-subtitle {
  margin-top: 4px;
  color: var(--color-neutral-500);
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.form-row--2 {
  flex-direction: row;
}

.form-row--3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.field {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.field__label {
  color: var(--color-green);
}

.field__group--3 {
  display: flex;
  flex-direction:row;
  gap: 8px;
}

.field-input {
  display:flex;
  border: 1px solid var(--color-neutral-300);
  width: 94px;
height: 48px;
gap: 18px;
border-radius: 2px;
border-width: 1px;
padding-top: 6px;
padding-right: 8px;
padding-bottom: 2px;
padding-left: 8px;
align-items: center;
justify-content:space-between;
}

.stay-section {
  width: 642px;
  padding: 16px 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.stay-section h4 {
  margin: 0;
  color: var(--color-black);
}

/* Option Cards */
.option-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.checkbox__input {
  width: 20px;
  height: 20px;
  min-width: 20px;
  cursor: pointer;
  margin-top: 2px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.option-title {
  color: var(--color-black);
  font-weight: 500;
}

.option-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 32px;
}

.offer-badge {
  display: flex;
  align-items: center;
  gap: 8px;
}

.offer-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.offer-text {
  color: var(--color-black);
  font-weight: 500;
}

.description {
  color: var(--color-neutral-500);
  margin: 0;
  line-height: 1.5;
}

/* Special Requests Section */
.requests-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.requests-section h5 {
  margin: 0;
  color: var(--color-black);
}

.info-text {
  margin: 0;
  color: var(--color-neutral-500);
  line-height: 1.5;
}

.textarea-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label-text {
  color: var(--color-neutral-500);
}

.textarea {
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--border-radius);
  font-family: "Poppins-Regular", sans-serif;
  font-size: 14px;
  color: var(--color-neutral-500);
  resize: vertical;
  transition: border-color 0.3s ease;
}

.textarea:focus {
  outline: none;
  border-color: var(--color-primary-500);
}

.textarea::placeholder {
  color: var(--color-neutral-400);
}

.edit-icon {
  position: absolute;
  left: 12px;
  bottom: 12px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.edit-icon:hover {
  opacity: 1;
}

.mt-16 {
  margin-top: 16px;
}

/* Arrival Section */
.arrival-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.arrival-section h5 {
  margin: 0;
  color: var(--color-black);
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.info-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.arrival-input-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.arrival-input-section .label-text {
  color: var(--color-black);
  font-weight: 500;
}

.optional {
  color: var(--color-neutral-400);
  font-weight: 400;
}

.select-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--border-radius);
  background-color: var(--color-white);
  font-family: "Poppins-Regular", sans-serif;
  font-size: 14px;
  color: var(--color-neutral-500);
  cursor: pointer;
  transition: border-color 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23565656' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 32px;
}

.select-input:focus {
  outline: none;
  border-color: var(--color-primary-500);
}

.select-input:hover {
  border-color: var(--color-neutral-400);
}

.timezone-text {
  margin: 0;
  color: var(--color-neutral-400);
}
/* Checkbox lines */
.checkbox-line {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 8px;
  color: var(--color-green);
}

.checkbox-line__subtitle {
  color: var(--color-neutral-500);
}

/* Arrival time */
.arrival-time__info {
  margin-top: 6px;
  padding-left: 18px;
  color: var(--color-neutral-500);
}

/* Card info */
.card-info__actions {
  margin-top: 50px;
  display: flex;
  gap: 40px;
}

.btn {
  min-width: 180px;
}

.btn--primary {
  background: var(--color-primary-500);
  color: var(--color-white);
}

.btn--secondary {
  background: var(--color-neutral-100);
  color: var(--color-green);
}

.row {
  display:flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}
</style>
