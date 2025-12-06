<script setup>
import { ref, computed } from "vue";
import headerElem from "@/components/header.vue";
import searchBar from "@/components/searchBar.vue";
import footerElem from "@/components/footer.vue";
import fillButton from "@/components/UI/fillButton.vue";
import SpecialOfferCard from "@/components/UI/specialOfferCard.vue";
import offerReviewCard from "@/components/UI/offerReviewCard.vue";

import HotelCard from "@/components/UI/hotelCard.vue";

const hotels = [
  {
    id: 1,
    name: "Radisson Blu",
    image: "https://picsum.photos/300/200?random=1",
    location: "Located In Downtown, 500m Distance to Shore",
    adults: 1,
    children: 2,
    nights: 4,
    experience: "Experience Unique Opportunity",
    roomType: "Standard rooms",
    ratingText: "Very Good",
    reviews: 2259,
    price: 125,
    discount: 12,
    left: 8,
    rating: "8.2",
    vip: true,
  },
  {
    id: 2,
    name: "Radisson Blu",
    image: "https://picsum.photos/300/200?random=2",
    location: "Located In Downtown, 500m Distance to Shore",
    adults: 1,
    children: 2,
    nights: 4,
    experience: "Experience Unique Opportunity",
    roomType: "Standard rooms",
    ratingText: "Very Good",
    reviews: 2259,
    price: 125,
    discount: 12,
    left: 8,
    rating: "8.2",
    vip: false,   // ❗ без ленточки
  },
];
</script>

<template>
  <div class="landing-page">
    <headerElem headerType="extended" />

    <div class="content">
      <h4>Where is your Next Dream Place?</h4>
      <div class="sub-M">Find exclusive Genius rewards in every corner of the world!</div>
    </div>

    <searchBar class="searchBar" type="hotel-menu" />

    <HotelCard
    v-for="h in hotels"
    :key="h.id"
    :hotel="h"
    :vip="h.vip"
  />
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
</style>
