<script setup>
import { ref, computed } from "vue";
import headerElem from "@/components/header.vue";
import searchBar from "@/components/searchBar.vue";
import footerElem from "@/components/footer.vue";
import HomeCard from "@/components/homeCard.vue";
import fillButton from "@/components/UI/fillButton.vue";
import SpecialOfferCard from "@/components/UI/specialOfferCard.vue";

import imgHotelBanner from "@/assets/images/banner-hotel.jpg";
import imgBeach from "@/assets/images/beach1.jpg";
import imgCoast from "@/assets/images/flower1.jpg";
import imgVan from "@/assets/images/sea1.jpg";
import imgBoat from "@/assets/images/rest1.jpg";
import imgEiffel from "@/assets/images/paris.jpg";
import imgDesert from "@/assets/images/sand1.jpg";
import imgBelgium from "@/assets/images/belgium.png";
import imgAmsCard from "@/assets/images/amsterdamCard.png";
import imgNewJer from  "@/assets/images/new-jersey.png";
import imgNep from "@/assets/images/nepal.png";
import imgGoth from "@/assets/images/gothenburg.png"

import imgFlight from "@/assets/images/flight.jpg";
import imgLocation from "@/assets/images/location.jpg";
import imgHotel from "@/assets/images/hotel.jpg";
import imgPackage from "@/assets/images/package.jpg";
import imgSeasonal from "@/assets/images/seasonal.jpg";
import imgCamps from "@/assets/images/camps.jpg";
import imgBackpacking from "@/assets/images/backpacking.jpg";
import imgHostels from "@/assets/images/hostels.jpg";
import { onBeforeRouteLeave } from "vue-router";

//specialOffers
import imgLoyalty from "@/assets/images/loyalty.jpg";
import imgEarlyBooking from "@/assets/images/earlyBooking.jpg";
import imgLastDeals from "@/assets/images/last-minute.jpg";
import imgFamily from "@/assets/images/family.jpg";
import imgBirthday from "@/assets/images/birthday.jpg";
import imgReferral from "@/assets/images/referralPrograms.jpg"

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

const review = ref([
  { id: 1, name: 'Flight', rating: '8,2', imageUrl: imgFlight},
  { id: 2, name: 'Location', rating: '8,2', imageUrl: imgLocation},
  { id: 3, name: 'Hotel', rating: '8,2', imageUrl: imgHotel},
  { id: 4, name: 'Package', rating: '8,2', imageUrl: imgPackage},
  { id: 5, name: 'Seasonal', rating: '8,2', imageUrl: imgSeasonal},
  { id: 6, name: 'Camps', rating: '8,2', imageUrl: imgCamps},
  { id: 7, name: 'Backpacking', rating: '8,2', imageUrl: imgBackpacking},
  { id: 8, name: 'Hostels', rating: '8,2', imageUrl: imgHostels}
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
</script>

<template>
  <div class="landing-page">
    <headerElem headerType="extended" />

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
            <fillButton size="medium" class="but-XL">
              <span class="button-content">
                Explore More 
                <img src="@/assets/icons/right-small.svg" alt="" class="icon">
              </span>
            </fillButton> 
          </div>
          <div class="banner-subtitle">Exclusive Hotel Search!</div>
          <div class="offers-tabs">
            <button class="tab active">Special Offers</button>
            <button class="tab">Last Search</button>
            <button class="tab">Trending Destinations</button>
            <button class="tab">Highest Reviewed</button>
          </div>
        </div>
      </div>

      <div class="offers-section">
        <div class="offers-map">
          <SpecialOfferCard 
            v-for="(offer, index) in specialOffers"
            :key="index"
            size="medium"
            :card="offer"
            :class="`offer-position-${offer.id}`"
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
            <button class="discover-btn">Deals Discover →</button>
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
            <button class="discover-btn">Deals Discover →</button>
          </div>
        </div>
      </div>

      <h3>Make a Comprasion </h3>
      <div class="row-comprasion">
        <img src="@/assets/images/hello.jpg" alt="hello smile">
        <img src="@/assets/images/beachComprasion.jpg" alt="beach">
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
  left: calc(50% - 1440px/2);
  top: 441px;
  display: flex;
  align-items:flex-end;
 justify-content: center; 
  padding: 2rem;
  margin: 0 auto;
}

.banner-content {
  display: flex;
  flex-direction: column;
  gap: 80px;
}
.banner-title {
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
width: 352px;
height: 104px;
margin: auto;

}

.banner-title-text {
  color: var(--color-black);
}

.banner-subtitle {
  font-family: "Poppins-Light";
  font-size: 64px;
  color: var(--color-white);
  margin-bottom: 2rem;
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
  justify-content: center;
  gap: 1rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 0.5rem 1rem;
}

.tab {
  background: none;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  color: #333;
  transition: all 0.3s;
}

.tab.active {
  background-color: #007bff;
  color: #fff;
  border-radius: 6px;
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
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.discover-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.row-comprasion {
  display:flex;
  justify-content: space-between;
}
.row-comprasion img {
  width: 573px;
  height:400px;
}
</style>
