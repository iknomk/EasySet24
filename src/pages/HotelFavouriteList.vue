<script setup>
import headerElem from "@/components/header.vue";
import footerElem from "@/components/footer.vue";
import HotelFavouriteCard from "@/components/hotelFavouriteCard.vue";

const hotels = [
  {
    id: 1,
    name: "Radisson Blu",
    image: new URL('@/assets/images/hotelCard/1.jpg', import.meta.url).href,
    location: "La Kalsa, Palermo",
    price: 125,
    discount: 12,
    left: 8,
    rating: "8.2"
  },
  {
    id: 2,
    name: "Radisson Blu",
    image: new URL('@/assets/images/hotelCard/2.jpg', import.meta.url).href,
    location: "La Kalsa, Palermo",
    price: 130,
    discount: 10,
    left: 5,
    rating: "8.2"
  },
  {
    id: 3,
    name: "Radisson Blu",
    image: new URL('@/assets/images/hotelCard/3.jpg', import.meta.url).href,
    location: "La Kalsa, Palermo",
    price: 145,
    discount: 8,
    left: 2,
    rating: "8.2"  },
  {
    id: 4,
    name: "Radisson Blu",
    image: new URL('@/assets/images/hotelCard/4.jpg', import.meta.url).href,
    location: "La Kalsa, Palermo",
    price: 150,
    discount: 4,
    left: 21,
    rating: "7,3"  },
  {
    id: 5,
    name: "Radisson Blu",
    image: new URL('@/assets/images/hotelCard/5.jpg', import.meta.url).href,
    location: "La Kalsa, Palermo",
    price: 218,
    discount: 30,
    left: 6,
    rating: "8.2"
    },
];
</script>

<template>
  <div class="landing-page">
    <headerElem headerType="extended" />

    <div class="content">
      <h4 style="padding-bottom:24px">Hotel Favourites</h4>

      <div class="favourites-grid">
        <HotelFavouriteCard
          v-for="h in hotels"
          :key="h.id"
          :hotel="h"
        />
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
  padding: 0px 108px;
}  

.favourites-grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: auto;
  gap: 46px 24px;
}
</style>
