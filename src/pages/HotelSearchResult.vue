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

    <div class="card-sorting">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136442.6688908414!2d11.729036324753594!3d57.70088500274492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464f8e67966c073f%3A0x4019078290e7c40!2z0JPRkdGC0LXQsdC-0YDQsywg0KjQstC10YbQuNGP!5e0!3m2!1sru!2sru!4v1764831474041!5m2!1sru!2sru" width="260" height="197" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="sorting">
        <button>Sort By <span style="font-size: 12px; font-weight: 400;">: Our top Picks For Families</span><img src="@/assets/icons/sortingIcon.svg" alt="" class="icon"></button>
        <div class="sorting-main-text">
          <h5>Gothenburg</h5>
          <div class="sub-XS">120 Properties Found</div>
        </div>
        <div class="body-S">Travel professionals dedicated to simplifying your travel experience by curating flight and accommodation services on a user-friendly platform. Committed to quality and assurance.<span style="font-size: 12px";> Find More Here ...</span></div>
      </div>
    </div>

    <div class="hotel-search">
      <div class="filter-bar">
        <div class="filter-bar-up">
          <h4>Filter By</h4>
          <div class="filter-bar-up-budget">
            <div class="sub-M">Your Budget for per night</div>
            
          </div>
        </div>
      </div>
      <div class="hotel-saerch-cards"></div>
    </div>
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
  padding: 0px 108px;
}

.card-sorting {
  padding: 0px 108px;
  display: flex;
  gap: 24px;


}

.sorting {
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  max-width: 647px;
  color: var(--color-neutral-500);
  width: 640px;
}

.body-S span, h4, .sub-M {
  color: var(--color-primary-500);
}

.sorting button {
  font-size: 16px;
  font-weight: 700;
  width: 269px;
  height: 40px;

  background-color: var(--color-white);

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 5px;
border: 1px solid var(--color-neutral-300);
border-radius: 4px;
color: var(--color-neutral-500);
}

.hotel-search {
  display: flex;
}
</style>
