<script setup>
import { ref, computed } from "vue";
import headerElem from "@/components/header.vue";
import searchBar from "@/components/searchBar.vue";
import footerElem from "@/components/footer.vue";
import HomeCard from "@/components/homeCard.vue";

// Все импорты картинок...
import imgBeach from "@/assets/images/beach1.jpg";
import imgCoast from "@/assets/images/flower1.jpg";
import imgVan from "@/assets/images/sea1.jpg";
import imgBoat from "@/assets/images/rest1.jpg";
import imgEiffel from "@/assets/images/paris.jpg";
import imgDesert from "@/assets/images/sand1.jpg";
import imgBar from "@/assets/images/barcelona.jpg";
import imgParis from "@/assets/images/parisImg.jpg";
import imgMad from "@/assets/images/madrid.jpg";
import imgRom from "@/assets/images/rom.jpg";
import imgMil from "@/assets/images/milan.jpg";
import imgIst from "@/assets/images/istanbul.jpg";
import imgDub from "@/assets/images/dubai.jpg";
import imgAms from "@/assets/images/amsterdam.jpg";
import imgNew from "@/assets/images/new-york.jpg";
import imgMar from "@/assets/images/marollca.jpg";
import imgTen from "@/assets/images/teneriffa.jpg";

import imgFlight from "@/assets/images/flight.jpg";
import imgLocation from "@/assets/images/location.jpg";
import imgHotel from "@/assets/images/hotel.jpg";
import imgPackage from "@/assets/images/package.jpg";
import imgSeasonal from "@/assets/images/seasonal.jpg";
import imgCamps from "@/assets/images/camps.jpg";
import imgBackpacking from "@/assets/images/backpacking.jpg";
import imgHostels from "@/assets/images/hostels.jpg";


const selectedFilter = ref("all");

const offers = [
  { id: 1, type: "hotels", image: imgBeach, size: "medium" },
  { id: 2, type: "flights", image: imgCoast, size: "small" },
  { id: 3, type: "multi", image: imgVan, size: "medium" },
  { id: 4, type: "flights", image: imgBoat, size: "large" },
  { id: 5, type: "hotels", image: imgEiffel, size: "small" },
  { id: 6, type: "multi", image: imgDesert, size: "small" },
];

const cards = ref([
  { id: 1, name: 'Berlin', subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgBeach},
  { id: 2, name: 'Paris', subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgParis},
  { id: 3, name: 'Madrid', subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgMad},
  { id: 4, name: 'Barcelona', subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgBar},
  { id: 5, name: 'Rom', subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgRom},
  { id: 6, name: 'Milan',subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgMil},
  { id: 7, name: 'Istanbul', subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgIst},
  { id: 8, name: 'Dubai', subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgDub},
  { id: 9, name: 'Amesterdam',subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgAms},
  { id: 10, name: 'New York', subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgNew},
  { id: 11, name: 'Marollca', subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgMar},
  { id: 12, name: 'Teneriffa', subtitle: 'SIDE', rating: '8,2', date: 'Wed 25 Jan-Fri 27 Jan', description: 'A Tour Of The City And Its Surroundings Led By A Professional Guide ...', imageUrl: imgTen},
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
    <headerElem headerType="search" />

    <div class="image-text-container">
      <img
        src="@/assets/images/Landing_Page_Banner.png"
        alt="Family on the beach"
      />
      <h1 class="text-overlay">Discover Your Trip Worldwide!</h1>
    </div>

    <searchBar class="searchBar" type="hotel" />

    <div class="content">
      <h3>Special Offers</h3>

      <div class="radio-btn">
        <label class="radio-option">
          <input type="radio" value="all" v-model="selectedFilter" />
          <span class="body-M">All</span>
        </label>

        <label class="radio-option">
          <input type="radio" value="hotels" v-model="selectedFilter" />
          <span class="body-M">Hotels</span>
        </label>

        <label class="radio-option">
          <input type="radio" value="flights" v-model="selectedFilter" />
          <span class="body-M">Flights</span>
        </label>

        <label class="radio-option">
          <input type="radio" value="multi" v-model="selectedFilter" />
          <span class="body-M">Multi</span>
        </label>
      </div>

      <!-- сетка карточек -->
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
      <div class="explore">
        <h3>Explore Stays In Trending Destinations</h3>
        <div class="sub-L">Find Hot Stays!</div>
        <div class="explore-card-list">
          <HomeCard v-for="item in cards" :key="item.id" :card="item" />
        </div>
      </div>
      <div>
        <h3>Compare The Highest Reviewed Past Offers</h3>
        <div class="sub-M">Browse By Type</div>
        <div class="explore-card-list">
          <HomeCard
            v-for="item in review"
            :key="item.id"
            :card="item"
          >
            <template #under-content>
              <h6 class="custom-under-text">123</h6>
            </template>
          </HomeCard>
        </div>
      </div>
    </div>
    <div class="inspiration">
      <div class="inspiration-text">
        <div class="inspiration-text-right">
          <h2>Get Inspirations For Your Next Trip</h2>
          <h5>Read About Wonderful Adventure We Love Most</h5>
        </div>
        <div class="inspiration-text-left">
          <h1>Difficult Roads Lead To Beautiful Destination.</h1>
          <div class="inspiration-text-left-under">
            <div class="body-L">Read More</div>
            <img src="@/assets/icons/down-one.svg" alt="down-one">
          </div>
        </div>
      </div>
    </div>
    <footer><footerElem></footerElem></footer>
  </div>
</template>

<style scoped>
.landing-page {
  background-color: var(--color-neutral-100);
}
.content {
  padding: 70px 109px;
}

.image-text-container {
  position: relative;
  display: block;
  margin: -8px 0 0 0 !important;
  padding: 0;
  line-height: 0;
  font-size: 0;
}

.image-text-container img {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
}

.text-overlay {
  position: absolute;
  width: 506px;
  left: 135px;
  top: 172px;
  color: var(--color-neutral-200);
  text-transform: capitalize;
}

.searchBar {
  display: flex;
  flex-direction: row;
  position: absolute;
  left: calc(50% - 1190px / 2);
  top: 565px;
}

input {
  margin: 0.4rem;
  width: 24px;
  height: 24px;
  box-sizing: content-box;
}

.radio-btn {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
}

.offers-layout {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 30px;
}

.row {
  display: flex;
  gap: 8px;
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

/* Разные ширины карточек */
.large {
  flex: 2;
}

.medium {
  flex: 1.3;
}

.small {
  flex: 1;
}

.explore {
  padding: 60px 0px;
}

.explore-card-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 24px; 
  padding-top: 16px;
}

::v-deep(.custom-under-text) {
  padding-left: 10px;
  color: white;
  position: relative;
}

.inspiration {
  position: relative;
  background: url('@/assets/images/road.jpg') no-repeat 50% 20%;
  width: 1440px;
  height: 511px;
  background-size:cover;
}

.inspiration-text-right {
  position:absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  width: 783px;
  height: 105px;
  left: 80px;
  top: 80px;
  color: var(--color-white);
}

.inspiration-text-left-under {
  display: flex;
}

.inspiration-text-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  position: absolute;
  width: 533px;
  height: 169px;
  left: 834px;
  top: 262px;
  color: var(--color-white);
}
</style>
