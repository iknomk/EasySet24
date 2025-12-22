<script setup>
import { ref, computed } from "vue";
import headerElem from "@/components/header.vue";
import searchBar from "@/components/searchBar.vue";
import footerElem from "@/components/footer.vue";
import fillButton from "@/components/UI/fillButton.vue";
import SpecialOfferCard from "@/components/UI/specialOfferCard.vue";
import offerReviewCard from "@/components/UI/offerReviewCard.vue";

import imgBelgium from "@/assets/images/belgium.png";
import imgAmsCard from "@/assets/images/amsterdamCard.png";
import imgNewJer from  "@/assets/images/new-jersey.png";
import imgNep from "@/assets/images/nepal.png";
import imgGoth from "@/assets/images/gothenburg.png"

import { onBeforeRouteLeave } from "vue-router";
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPage = () => {
  router.push('/hotel/search')
}
//specialOffers
import imgLoyalty from "@/assets/images/loyalty.jpg";
import imgEarlyBooking from "@/assets/images/earlyBooking.jpg";
import imgLastDeals from "@/assets/images/last-minute.jpg";
import imgFamily from "@/assets/images/family.jpg";
import imgBirthday from "@/assets/images/birthday.jpg";
import imgReferral from "@/assets/images/referralPrograms.jpg"

//offerReviewCards 
import imgTeacher from "@/assets/images/teacher.png";

const selectedFilter = ref("all");

const offers = [
  { id: 1, type: "hotels", image: imgLoyalty, size: "small" },
  { id: 2, type: "flights", image: imgEarlyBooking, size: "medium" },
  { id: 3, type: "multi", image: imgLastDeals, size: "small" },
  { id: 4, type: "flights", image: imgFamily, size: "small" },
  { id: 5, type: "hotels", image: imgBirthday, size: "medium" },
  { id: 6, type: "multi", image: imgReferral, size: "small" },
];

const specialOffers = ref([
  { 
    id: 1, 
    imageUrl: imgBelgium,  
    location: "Belgium", 
    date: "Bruxelles Gare du Midi",
     position: { top: '20%', left: '30%' }
  },
  { 
    id: 2, 
    imageUrl: imgAmsCard, 
    location: "Amsterdam", 
    date: "Bunk",
    position: { top: '20%', left: '10%' }
  },
  { 
    id: 3, 
    imageUrl: imgNewJer,  
    location: "New Jersey", 
    date: "Windsor",
     position: { top: '20%', left: '30%' }
  },
  { 
    id: 4, 
    imageUrl: imgNep, 
    location: "Nepal", 
    date: "Hyatt Regency K",
    position: { top: '50%', left: '60%' }
  },
  { 
    id: 5, 
    imageUrl: imgGoth, 
    location: "Gothenburg", 
    date: "First Hotel G",
    position: { top: '50%', left: '60%' }
  }
]);

const filteredOffers = computed(() => {
  return selectedFilter.value === "all" 
    ? offers 
    : offers.filter((o) => o.type === selectedFilter.value);
});

const chunkedOffers = computed(() => {
  const chunks = [];
  for (let i = 0; i < filteredOffers.value.length; i += 3) {
    chunks.push(filteredOffers.value.slice(i, i + 3));
  }
  return chunks;
});

const testimonials = [
  {
    avatar: imgTeacher,
    flag: new URL('@/assets/icons/flags/france.svg', import.meta.url).href,
    name: "Teacher Tereco",
    text: "Returning to this hotel is always a delight – their loyalty program showers us with exclusive discounts and amazing perks!",
  },
  {
    avatar: new URL('@/assets/images/beyu68.png', import.meta.url).href,
    flag: new URL('@/assets/icons/flags/norway.svg', import.meta.url).href,
    name: "BEYU68£",
    text: "Accessing EasySet24 extraordinary special offers makes always our journey even more unforgettable."
  },
  {
    avatar: new URL('@/assets/images/elina13ay.png', import.meta.url).href,
    flag: new URL('@/assets/icons/flags/canada.svg', import.meta.url).href,
    name: "Elina13ay",
    text: "Weekends here are pure bliss with their carefully crafted packages, and the extended stay discounts make relaxation even more enticing.",
  }
];
</script>

<template>
  <div class="landing-page">
    <headerElem headerType="extended" selectedItem="Hotel"/>

    <div class="content">
      <h4>Where is your Next Dream Place?</h4>
      <div class="sub-M">Find exclusive Genius rewards in every corner of the world!</div>
    </div>

    <searchBar class="searchBar" type="hotel-menu" />

    <div>
      <div class="banner">
        <div class="banner-content">
          <div class="banner-title">
            <h2 class="banner-title-text">Why Choose Us?</h2>
            <fillButton @click="goToPage" size="medium" class="but-XL">
              <span class="button-content">
                Explore More 
                <img src="@/assets/icons/right-small.svg" alt="" class="icon">
              </span>
            </fillButton> 
          </div>
          <div class="banner-subtitle">Exclusive Hotel Search!</div>
          <div class="offers-tabs">
            <h4 class="tab active">Special Offers</h4>
            <h6 class="tab ">Last Search</h6>
            <h6 class="tab">Trending Destinations</h6>
            <h6 class="tab">Highest Reviewed</h6>
            <h6 class="tab">Highest Reviewed</h6>
          </div>
        </div>
      </div>

      <div class="offers-section">
        <div class="offers-map">
          <SpecialOfferCard 
            v-for="(card, index) in specialOffers"
            :key="index"
            size="medium"
            :card="card"
            :class="`offer-position-${card.id}`"
          />
        </div>
      </div>
    </div>

    <div class="content">
      <h3>Special Offers</h3>
      <div class="offers-layout">
        <div class="row">
          <div
            v-for="offer in filteredOffers.slice(0, 3)"
            :key="offer.id"
            class="offer-card"
            :class="offer.size"
          >
            <img :src="offer.image" alt="offer image" />
            <button class="discover-btn">Loyalty Discounts →</button>
          </div>
        </div>

        <div class="row">
          <div
            v-for="offer in filteredOffers.slice(3, 6)"
            :key="offer.id"
            class="offer-card"
            :class="offer.size"
          >
            <img :src="offer.image" alt="offer image" />
            <button class="discover-btn">Family Packages →</button>
          </div>
        </div>
      </div>

      <h3>Make a Comprasion </h3>
      <div class="comprasion">
        <div class="comprasion-container">
          <img src="@/assets/images/hello.jpg" class="comprasion-img"  alt="hello smile">
          <h6 class="comprasion-img-text">The past offers with the highest reviews outshine others, standing as a testament to their exceptional quality.</h6>
        </div>
        <div class="comprasion-container">
          <img src="@/assets/images/beachComprasion.jpg" class="comprasion-img" alt="beach">
          <h6 class="comprasion-img-text">Ring in the new year with iconic moments and unforgettable memories in New York City</h6>
        </div>
      </div>
    </div>

    <div class="review">
      <div class="review-cards">
        <offerReviewCard :cards="testimonials" />
      </div>
    </div>

    <div class="bottom-cards">
      <div class="bottom-card-container">
        <div class="bottom-card-img-wrapper">
          <img src="@/assets/images/bottom-card1.jpg" class="bottom-card-img" alt="hello smile">
        </div>
        <h4 class="bottom-card-text">Reserve Your hotel, Pursue Your Team</h4>
      </div>
      <div class="bottom-card-container">
        <div class="bottom-card-img-wrapper">
          <img src="@/assets/images/bottom-card2.jpg" class="bottom-card-img" alt="beach">
        </div>
        <h4 class="bottom-card-text">Subscribe Our Newsletter</h4>
      </div>
      <div class="bottom-card-container">
        <div class="bottom-card-img-wrapper">
          <img src="@/assets/images/bottom-card3.jpg" class="bottom-card-img" alt="hello smile">
        </div>
        <h4 class="bottom-card-text">Review Hotel Services Worldwide</h4>
      </div>
      <div class="bottom-card-container">
        <div class="bottom-card-img-wrapper">
          <img src="@/assets/images/bottom-card4.jpg" class="bottom-card-img" alt="beach">
        </div>
        <h4 class="bottom-card-text">Follow the Lates Tour News</h4>
      </div>
    </div>
    <footer><footerElem></footerElem></footer>
  </div>
</template>

<style scoped>
.landing-page {
  background-color: var(--color-neutral-100);
  display: flex;
  flex-direction: column;
  gap: 40px; 
}
.content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0px 108px;
}

.content h4, .sub-M{
  color: var(--color-primary-500)
}

.banner {
  background-image: 
    linear-gradient(356.44deg, #2B1F18 8.32%, rgba(43, 31, 24, 0.361059) 25.87%, rgba(43, 31, 24, 0) 49.28%),
    linear-gradient(353.87deg, rgba(0, 0, 0, 0.7) 8.73%, rgba(0, 0, 0, 0.132615) 45.62%, rgba(0, 0, 0, 0) 118.81%),
    url('@/assets/images/banner-hotel.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1440px;
  height: 664px;
  display: flex;
  align-items:flex-end;
  justify-content: center; 
  margin: 0 auto;
}

.banner-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.banner-title {
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
width: 352px;
height: 104px;
margin: auto;
margin-bottom: 230px;
}

.banner-title-text {
  color: var(--color-black);
}

.banner-subtitle {
  font-family: "Poppins-Light";
  font-size: 64px;
  font-weight: 300;
  color: var(--color-white);
  text-align: center;
}

.button-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.offers-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  
}

.offers-tabs {
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
padding: 0px;
gap: 3px;

width: 1224px;
height: 64px;
}

.tab {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;
gap: 10px;

margin: 0 auto;
width: 240px;
height: 48px;

background: var(--color-neutral-300);
border-radius: 4px 4px 0px 0px;
color: var(--color-primary-500);
}

.tab.active {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 10px;

margin: 0 auto;
width: 250px;
height: 64px;

background: var(--color-white);
border-radius: 4px 4px 0px 0px;

border: 1px solid var(--color-primary-500);
}

.offers-map {
  position: relative;
  background-image:
   linear-gradient(2.09deg, rgba(0, 0, 0, 0.5) 77.91%, rgba(0, 0, 0, 0) 98.19%),
   url("@/assets/images/world-map.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 1440px;
  height: 511px;
  background-size:cover;
  width: 90%;
width: 1224px;
height: 498px;
border-radius: 0px 0px 8px 8px;

}

.offers-map .special-offer-card {
  position: absolute;
}

.offer-position-1 {
  left: 216px;
  top: 59px;
}

.offer-position-2 {
  left: 859px;
  top: 78px;
}

.offer-position-3 {
  left: 33px;
  top: 311px;
}

.offer-position-4 {
  left: 439px;
  top: 245px;
}

.offer-position-5 {
  left: 762px;
  top: 338px;
}

.map-background {
  width: 100%;
  opacity: 0.2;
}

.offers-cards {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.offer-img {
  width: 100%;
  height: 130px;
  object-fit: cover;
}

.offer-info {
  padding: 1rem;
  text-align: center;
}

.offers-layout {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 30px;
}

.offer-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
}


.offer-card img {
  width: 100%;
  height: 278px;
  object-fit: cover;
  object-position: center;
}

.row {
  display: flex;
  gap: 8px;
}

.large {
  flex: 2;
}

.medium {
  flex: 1.6;
}

.small {
  flex: 1;
}

.discover-btn {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: var(--color-primary-500);
  color: var(--color-white);
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
}

.comprasion {
  display:flex;
  justify-content: space-between;
}

.comprasion-container, .bottom-card-container {
  position:relative;
  display: inline-block;
}

.comprasion-img {
  width: 600px;
  height:400px;
  border-radius: var(--border-radius);
}

.comprasion-img-text {
  position: absolute;
  bottom: 5%;
  left: 3%;
  width: 541px;
  height: 44px;
  color: var(--color-white);
}

.review {
  background-image: url('@/assets/images/beachBanner.jpg');
  width: 1441px;
  height: 609px;
  background-repeat: no-repeat;
  background-position: left center;
  background-size:105% auto;
}

.bottom-cards {
  padding:0 109px;
  display: grid;
  grid-template-columns: repeat(2, 600px);
  grid-template-rows: 346px 261px;
  gap: 24px;
}

.bottom-card-container {
  position: relative;
  display: flex;
  flex-direction: column;
}

.bottom-card-img-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
}

.bottom-card-img-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(354.63deg, rgba(0, 0, 0, 0.7) 18.3%, rgba(0, 0, 0, 0) 95.84%);
  pointer-events: none;
}

.bottom-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.bottom-card-text {
  position: absolute;
  bottom: 2%;
  left: 3%;
  width: 541px;
  height: 44px;
  color: var(--color-white);
  z-index: 2; 
}
</style>
