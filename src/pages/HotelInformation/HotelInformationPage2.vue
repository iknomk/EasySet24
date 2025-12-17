<template>
  <div class="landing-page">
    <headerElem headerType="search" />

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
                name="paymentType"
                value="part"
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
            <p class="block-title sub-M">Payment Methods</p>
            <div class="payment-methods__row">
              <div class="payment-methods__item">
                <span class="label-XS">Payment Method</span>
                <select class="field-input body-XS">
                  <option>•••• 1234</option>
                </select>
              </div>
              <div class="payment-methods__item">
                <span class="label-XS">Booking For Work</span>
                <select class="field-input body-XS">
                  <option>No</option>
                </select>
              </div>
            </div>
          </div>
        
      </section>

      <!-- RIGHT COLUMN -->
      <section class="payment-page__right">
        <section class="guest-info">
          <h5 class="page-title">Enter Your Information</h5>
          <p class="page-subtitle body-XS">
            Make Sure The Information That You Have Already Written In Yay
            Profile Is Correct.
          </p>

          <div class="form-row">
            <span class="field__label label-XS">Full Name</span>
            <div class="field__group field__group--3">
              <input
                type="text"
                class="field-input body-XS"
                placeholder="First name *"
              />
              <input
                type="text"
                class="field-input body-XS"
                placeholder="Middle name"
              />
              <input
                type="text"
                class="field-input body-XS"
                placeholder="Last name *"
              />
            </div>
          </div>

          <div class="form-row form-row--2">
            <div class="field">
              <span class="field__label label-XS">Email Address</span>
              <input
                type="email"
                class="field-input body-XS"
                placeholder="Email"
              />
            </div>
            <div class="field">
              <span class="field__label label-XS">Phone Number</span>
              <input
                type="tel"
                class="field-input body-XS"
                placeholder="764378888888"
              />
            </div>
          </div>

          <div class="form-row form-row--2">
            <div class="field">
              <span class="field__label label-XS">If You Need Assistance</span>
              <select class="field-input body-XS">
                <option>Not Provided</option>
              </select>
            </div>
            <div class="field">
              <span class="field__label label-XS">Region / Country</span>
              <select class="field-input body-XS">
                <option>Country *</option>
              </select>
            </div>
          </div>
        </section>

        <section class="add-stay">
          <h6 class="section-title">Add To Your Stay</h6>

          <label class="checkbox-line">
            <input type="checkbox" />
            <div class="checkbox-line__content">
              <span class="checkbox-line__title sub-S">
                I Will Need A Flight For My Trip
              </span>
              <span class="checkbox-line__subtitle body-XXS">
                20% Special Offer If You Book A Flight
              </span>
            </div>
          </label>

          <p class="text body-XXS">
            Flexible Flight Options From Stockholm To Turkiye From SLX
            766/Round Trip. Finish Booking This Stay To Get Flight
            Recommendations That Match Your Selected Dates.
          </p>

          <label class="checkbox-line">
            <input type="checkbox" />
            <div class="checkbox-line__content">
              <span class="checkbox-line__title sub-S">
                Want To Book A Taxi Or Shuttle Ride In Advance?
              </span>
              <span class="checkbox-line__subtitle body-XXS">
                10% Special Offer If You Rent A Taxi
              </span>
            </div>
          </label>

          <p class="text body-XXS">
            Avoid Surprises. Get From The Airport To Your Accommodation Without
            A Hitch. We Will Add Taxi Options To Your Booking Confirmation.
          </p>
        </section>

        <section class="special-requests">
          <h6 class="section-title">Special Requests</h6>
          <p class="text body-XXS">
            Special Requests Can Not Be Guaranteed. But The Property Will Do Its
            Best To Meet Your Needs.
          </p>
          <p class="text body-XXS">
            You Can Always Make A Special Request After Your Booking Is
            Complete!
          </p>

          <div class="field">
            <span class="field__label label-XS">Optional</span>
            <textarea rows="4" class="field-input body-XS" />
          </div>

          <label class="checkbox-line">
            <input type="checkbox" />
            <span class="checkbox-line__title sub-S">
              I Would Like Rooms Close To Each Other
            </span>
          </label>
        </section>

        <section class="arrival-time">
          <h6 class="section-title">Your Arrival Time</h6>
          <ul class="arrival-time__info body-XXS">
            <li>Your Rooms Will Be Ready For Check‑in Between 15:00 And 23:00</li>
            <li>24-Hour Front Desk. Help Wherever You Need It!</li>
          </ul>

          <p class="block-title sub-M">
            Add Your Estimated Arrival Time (Optional)
          </p>

          <div class="form-row">
            <div class="field">
              <span class="field__label label-XS">Please Select</span>
              <select class="field-input body-XS">
                <option>Time</option>
              </select>
            </div>
          </div>
        </section>

        <section class="card-info">
          <h6 class="section-title">Bank Card Information</h6>

          <div class="form-row form-row--2">
            <div class="field">
              <span class="field__label label-XS">Full Name On The Card</span>
              <input
                type="text"
                class="field-input body-XS"
                value="Anna Carinna"
              />
            </div>
            <div class="field">
              <span class="field__label label-XS">Card Number</span>
              <input
                type="text"
                class="field-input body-XS"
                placeholder="•••• •••• •••• ••••"
              />
            </div>
          </div>

          <div class="form-row form-row--3">
            <div class="field">
              <span class="field__label label-XS">EXP Date</span>
              <input
                type="text"
                class="field-input body-XS"
                placeholder="MM / YY"
              />
            </div>
            <div class="field">
              <span class="field__label label-XS">CVC</span>
              <input
                type="text"
                class="field-input body-XS"
                placeholder="•••"
              />
            </div>
          </div>

          <div class="card-info__actions">
            <fillButton size="small" class="btn btn--secondary">
              <span class="but-M">Save In Shortcut</span>
            </fillButton>
            <fillButton size="small" class="btn btn--primary">
              <span class="but-M">Payment</span>
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
.payment-info, .payment-methods {
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

.block-title {
  color: var(--color-green);
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
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

.payment-methods__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* RIGHT */
.payment-page__right {
  width: 642px;
  min-height: 2025px;
  background: var(--color-white);
  border-radius: var(--border-radius);
  border: 1px solid var(--color-neutral-200);
  padding: 20px 24px 28px;
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
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.field-input {
  border-radius: 4px;
  border: 1px solid var(--color-neutral-300);
  padding: 8px 10px;
  color: var(--color-green);
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
  margin-top: 16px;
  display: flex;
  gap: 16px;
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
