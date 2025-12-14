<template>
  <div class="landing-page">
    <headerElem headerType="search" />
    <div class="content">
      <section class="gallery">
        <div class="gallery__left">
          <img src="@/assets/images/hotelInformation/gallery1.jpg" alt="" />
        </div>
        <div class="gallery__right">
          <div class="gallery__row up">
            <img src="@/assets/images/hotelInformation/gallery2.jpg" alt="" />
            <img src="@/assets/images/hotelInformation/gallery3.jpg" alt="" />
          </div>
          <div class="gallery__row down">
            <img src="@/assets/images/hotelInformation/gallery4.jpg" alt="" />
            <div class="gallery__more">
              <img class="gallery__more_img" src="@/assets/images/hotelInformation/gallery5.jpg" alt="" />
              <div class="gallery-btn">
                 
                  <img style="width: 24px; height: 24px" src="@/assets/images/hotelInformation/picture-album.svg">
                  <h5>See More Photos</h5>
                  <img style="width: 24px; height: 24px" src="@/assets/icons/right-small.svg">
              </div>
            </div>
          </div>
        </div>
      </section>
    <section class="details">
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="tabs__btn"
          :class="{ 'tabs__btn--active': activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div class="details__content">
        <div class="details__col">
          <p class="details__text">
            This Stylish And Roomy Family Home Is Nestled In Stockholm's Kista District, Just 14 Km Away From The Royal Swedish Opera, Museum Of Medieval Stockholm, And Stureplan. Offering The Convenience Of Free Private Parking, It's Also A Short 9 Km Drive From Friends Arena And 14 Km From Sergels Torg Square.
          </p>
          <p class="details__text">
            Explore Nearby Attractions Like The Army Museum, Just 15 Km Away, And The Royal Palace, Situated 15 Km From This Charming Home. For Convenience, Bromma Stockholm Airport Is The Closest Airport, Located Just 8 Km Away From This Stylish And Spacious Family Retreat.
          </p>

          <h5 class="details__subtitle">Amenities</h5>
          <div class="amenities">
            <div class="box">
              <span class="amenities__item body-M"><img src="@\assets\icons\amenities\wifi.svg"> Free Wifi</span>
              <span class="amenities__item body-M"><img src="@\assets\icons\amenities\chopsticks-fork.svg"> Restaurant</span>
              <span class="amenities__item body-M"><img src="@\assets\icons\amenities\tub.svg">Bathroom</span>
              <span class="amenities__item body-M"><img src="@\assets\icons\amenities\heavy-wind.svg">Air Conditioning</span>
            </div>
            <div class="box">
              <span class="amenities__item body-M"><img src="@\assets\icons\amenities\car.svg">Parking Available</span>
              <span class="amenities__item body-M"> <img src="@\assets\icons\amenities\dumbbell.svg">Fitness Center</span>
              <span class="amenities__item body-M"><img src="@\assets\icons\amenities\single-bed.svg">Room Service</span>
              <span class="amenities__item body-M"><img src="@\assets\icons\amenities\tea-drink.svg">Tea/Coffee Machine</span>
            </div>
            
          </div>
        </div>

        <div class="details__col details__col--right">

          <p class="details__text">
            Your stay at our hotel includes a complimentary breakfast to kickstart your day, and our rooms offer a cosy and comfortable retreat. Select rooms feature a relaxing bath tub for added luxury.           </p>
          <p class="details__text">
            Our dedicated staff is at your service, ensuring a seamless and enjoyable experience throughout your stay. In addition to the inviting accommodations, indulge in extra leisure activities such as our fitness centre or pool. We've thoughtfully curated every aspect to make your stay special, promising a combination of comfort, convenience, and delightful extras.          </p>
          <span class="details__info">
            <h6>2 Adults ,3 Children ,4 Nights</h6><span class="sub-M"> | Two Rooms ,Double Bed</span>
          </span>
          <div class="details__info sub-M">
              <img src="@/assets/icons/amenities/pin.svg">
              <span class="sub-M">Lärkvägen 22, Stockholm, Sweden</span>
          </div>

          <div class="details__price">
            <div class="details__price-row">
              <h4 style="color: var(--color-success)" class="details__price">$240</h4>
              <h5 class="details__price-note">Per night</h5>
            </div>

            <div class="details__actions">
              <button class="details__like"><img src="@/assets/icons/amenities/like.svg"></button>
                <fillButton size="small" style="width: 200px;height:48px" class="hero-card__btn">
                    <span class="but-XL">
                    Book Now
                    </span>
                </fillButton>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <section class="faq">
      <h4 class="faq__title">The Most Frequented Questions Asked By Travellers</h4>
      <div style="background-color: var(--color-white); margin-top:16px" class="faq-body">
        <div
          v-for="(item, i) in faqItems"
          :key="i"
          class="faq-item"
        >
          <button class="faq-item__header" @click="toggleFaq(i)">
            <span class="sub-L">{{ item.q }}</span>
            <span class="faq-item__icon">
              <img
                v-if="activeFaq === i"
                src="@/assets/icons/up-black.svg"
                alt="open"
              />
              <img
                v-else
                src="@/assets/icons/down-gray.svg"
                alt="close"
              />
            </span>
          </button>
          <div
            class="faq-item__body "
            v-show="activeFaq === i"
          >
            <span class="sub-M">{{ item.a }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="comments">
      <img src="@/assets/icons/left-blue.svg" class="review-icon review-icon--left" alt="" />
      <div class="review-cards">
        <offerReviewCard :cards="testimonials" :show-read-more="true" />
      </div>
      <img src="@/assets/icons/right-blue.svg" class="review-icon review-icon--right" alt="" />
    </div>


    <section class="review-rates">
      <h4 class="review-rates__title">Review Rates:</h4>

      <div class="review-rates__row">
        <div
          v-for="item in rates"
          :key="item.label"
          class="rate-item"
        >
          <div class="rate-item__header">
            <span class="rate-item__label body-L">{{ item.label }}</span>
            <h6 class="rate-item__value">{{ item.value }}</h6>
          </div>

          <div class="rate-item__bar">
            <div
              class="rate-item__bar-fill"
              :style="{ width: (item.value / 10) * 100 + '%' }"
            />
          </div>
        </div>
      </div>
    </section>

    </div>

    <footer>
      <footerElem />
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import headerElem from "@/components/header.vue";
import footerElem from "@/components/footer.vue";
import fillButton from "@/components/UI/fillButton.vue";
import offerReviewCard from "@/components/UI/offerReviewCard.vue";

const faqItems = [
  {
    q: "How And When Do I Pay?",
    a: "Since This Option Is A Non-Refundable Reservation And There Is No Cancellation Opportunity, Payment Is Usually Processed At The Time Of Booking Or Shortly Thereafter.",
  },
  { q: "Is There Anti-Allergic Meal?", a: "Answer text here." },
  { q: "Does The Hotel Have A Pool?", a: "Answer text here." },
  { q: "Any Identification Documents Is Necessary", a: "Answer text here." },
  { q: "What Are The Check-In And Check-Out Times?", a: "Answer text here." },
  { q: "Why Was I Charged?", a: "Answer text here." },
  { q: "Is There A Spa?", a: "Answer text here." },
];

const activeFaq = ref(0);
const tabs = ["Place Details", "Info & Prices", "Rooms & Beds", "Place Rules"];
const activeTab = ref(tabs[0]);

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? -1 : index;
};

const testimonials = [
  {
    avatar: new URL('@/assets/images/hotelInformation/avatar1.jpg', import.meta.url).href,
    flag: new URL('@/assets/icons/flags/german.svg', import.meta.url).href,
    name: "Sofia",
    text: "Our time at this hotel was marked by contemporary elegance and thoughtful amenities ."
  },
  {
    avatar: new URL('@/assets/images/hotelInformation/avatar2.jpg', import.meta.url).href,
    flag: new URL('@/assets/icons/flags/sweden.svg', import.meta.url).href,
    name: "Sebastian",
    text: "The rooms were great, and the services were awesome. Everything made our stay super enjoyable."
  },
  {
    avatar: new URL('@/assets/images/hotelInformation/avatar3.jpg', import.meta.url).href,
    flag: new URL('@/assets/icons/flags/canada.svg', import.meta.url).href,
    name: "Maria",
    text: "Weekends here are pure bliss with their carefully crafted packages, and the extended stay discounts make relaxation even more enticing.",
  },
  {
    avatar: new URL('@/assets/images/hotelInformation/avatar4.jpg', import.meta.url).href,
    flag: new URL('@/assets/icons/flags/usa.svg', import.meta.url).href,
    name: "Lena",
    text: "Accessing EasySet24 extraordinary special offers makes always our journey even more unforgettable."
  },
  {
    avatar: new URL('@/assets/images/hotelInformation/avatar5.jpg', import.meta.url).href,
    flag: new URL('@/assets/icons/flags/netherlands.svg', import.meta.url).href,
    name: "Martin",
    text: "Weekends here are pure bliss with their carefully crafted packages, and the extended stay discounts make relaxation even more enticing.",
  }
];

const rates = [
  { label: 'Staff Politeness', value: 8.6 },
  { label: 'VIP Options', value: 8 },
  { label: 'Free Wi‑Fi Speed', value: 7.5 },
  { label: 'Cleanliness', value: 6 },
  { label: 'Access To City Center', value: 9 }
];
</script>

<style scoped>
    .landing-page {
  background-color: var(--color-neutral-100);
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0px 108px;
}

.gallery {
  display: flex;
  gap: 16px;
}

.gallery__left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery__left {
  width: 601px;
height: 558px;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;

  flex: 2;
}

.gallery__right {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.gallery__row {
  display: flex;
  gap: 16px;
  overflow: hidden;  
}

.gallery__more {
  position: relative;
  width: 100%;
}

.gallery__row.up img,
.gallery__row.down > img,
.gallery__more_img {
  flex: 1 0 50%;          /* по половине ширины */
  height: 100%;           /* по высоте ряда */
  object-fit: cover;
}

.gallery-btn {
  display: flex;
  gap:4px;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 16px;
  bottom: 16px;
  border: none;
  background: transparent;
  color: var(--color-white);
}

.gallery__row.up img {
    height: 247px;
    width: 100%;

}

.gallery__row.down img {
    height: 294px;
    width: 100%;

}

/* Tabs + details */
.details {
  margin-top: 48px;
}

.tabs {
  display: flex;
}

.tabs__btn {
  flex: 1;
  padding: 16px;
  padding-bottom: 8px;
  border: none;
  background: transparent;
font-weight: 700;
font-size: 16px;
  cursor: pointer;
    color: var(--color-primary-500);
}

.tabs__btn--active {
  padding:16px 8px;
font-weight: 700;
font-size: 24px;
background-color: var(--color-white);
}

.details__content {
  display: flex;
  gap: 40px;
  background-color: var(--color-white);
  width: 1224px;
height: 484px;
gap: 24px;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
padding-top: 40px;
padding-right: 16px;
padding-bottom: 24px;
padding-left: 16px;

}

.details__col {
  flex: 1;
}

.details__text {
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 40px;
}

.details__subtitle {
  margin: 24px 0 12px;
}

.amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 136px;
}

.details__info {
  display: flex;
  flex-direction:row;
  margin-bottom: 8px;
  gap: 8px;
}

.details__price-row {
  margin:30px 0px 5px;
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-left:auto;
}

.details__price {
  display: flex;
  flex-direction: column;
  float: right;

}

.details__price-note {
  font-size: 16px;
}

.details__actions {
  display: flex;
  float: right;
  gap: 12px;
  align-items:center;
}

.details__like {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid rgba(88, 157, 197, 1);
  background: transparent;
  cursor: pointer;
}

.details__book {
  flex: 1;
  padding: 12px 0;
  border-radius: 4px;
  border: none;
  background: #0067c8;
  color: #fff;
  cursor: pointer;
}
.amenities__item {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
  color: var(--color-neutral-500)
}

/* FAQ */

.faq-item {
  border-bottom: 2px solid var(--color-neutral-300);
  padding: 24px;
}

.faq-item__header {
  width: 100%;
  border: none;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
}

.faq-item__body {
  margin-top: 15px;
}

.comments {
  width: 1225px;
  height: 254px;
  display: flex;
  align-items: center;      
  justify-content: center;    
  position: relative;
}

.review-cards {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  flex: 1;                  
  justify-content: center;
}

.review-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;            
  object-fit: contain;
}

.cards-wrapper {
  margin-top: 80px;
  gap: 10px;
}

:deep(.offerReviewCard),
:deep(.testimonial-card) {
  background: var(--color-white);
  color: var(--color-black);
  width: 220px;
  height: 160px;
  gap: 4px;
  border-radius: 8px;
  padding: 32px 16px 16px 16px;
}

:deep(.offerReviewCard),
:deep(.avatar-wrapper) {
  top: -95px;
}

.review-rates {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.review-rates__title {
  font-weight: 700;
  font-size: 20px;
}

.review-rates__row {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.rate-item {
  flex: 1;
  min-width: 0;
}

.rate-item__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
  font-size: 14px;
}

.rate-item__label, .rate-item__value {
  color: var(--color-neutral-500);
}

.rate-item__bar {
  position: relative;
  height: 6px;
  border-radius: 999px;
  background: var(--color-neutral-400);
  overflow: hidden;
}

.rate-item__bar-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 999px;
  background: var(--color-primary-500);
}
</style>
