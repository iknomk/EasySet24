<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import headerElem from "@/components/header.vue";
import searchBar from "@/components/searchBar.vue";
import footerElem from "@/components/footer.vue";
import fillButton from "@/components/UI/fillButton.vue";
import favouriteButton from "@/components/UI/signButton.vue";
import HotelCard from "@/components/UI/hotelCard.vue";

const router = useRouter()

const goToFafourites = () => {
  router.push('/favourites')
}
const hotels = [
  {
    id: 1,
    name: "Radisson Blu",
    image: new URL('@/assets/images/hotelCard/1.jpg', import.meta.url).href,
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
    vip: false,
  },
  {
    id: 2,
    name: "Radisson Blu",
    image: new URL('@/assets/images/hotelCard/2.jpg', import.meta.url).href,
    location: "Located In Downtown, 700m Distance to See",
    adults: 1,
    children: 3,
    nights: 4,
    experience: "Traditional Room Design",
    roomType: "Historical Café And Bar",
    ratingText: "Excellent",
    reviews: 2230,
    price: 130,
    discount: 10,
    left: 5,
    rating: "8.2",
    vip: true,  
  },
  {
    id: 3,
    name: "Radisson Blu",
    image: new URL('@/assets/images/hotelCard/3.jpg', import.meta.url).href,
    location: "Located In Downtown, 700m Distance to See",
    adults: 1,
    children: 2,
    nights: 4,
    experience: "Experience Unique Opportunity ",
    roomType: "Classic Room Design With Cultural Foods",
    ratingText: "Very Good",
    reviews: 2100,
    price: 145,
    discount: 8,
    left: 2,
    rating: "8.2",
    vip: false,  
  },
  {
    id: 4,
    name: "Radisson Blu",
    image: new URL('@/assets/images/hotelCard/4.jpg', import.meta.url).href,
    location: "Located In Downtown, 500m Distance to Shore",
    adults: 1,
    children: 2,
    nights: 4,
    experience: "Sunny Moments With Family Facilities",
    roomType: "See View Balconies",
    ratingText: "Good",
    reviews: 1258,
    price: 150,
    discount: 4,
    left: 21,
    rating: "7,3",
    vip: true,  
  },
  {
    id: 5,
    name: "Radisson Blu",
    image: new URL('@/assets/images/hotelCard/5.jpg', import.meta.url).href,
    location: "Located In Downtown, 500m Distance to See",
    adults: 1,
    children: 2,
    nights: 4,
    experience: "Modern Soundings ",
    roomType: "Special Leisure Activities",
    ratingText: "Very Good",
    reviews: 2259,
    price: 218,
    discount: 30,
    left: 6,
    rating: "8.2",
    vip: false,  
  },
];
</script>

<template>
  <div class="landing-page">
    <headerElem headerType="extended" selectedItem="Hotel" />

    <div class="content">
      <h4>Where is your Next Dream Place?</h4>
      <div class="sub-M">Find exclusive Genius rewards in every corner of the world!</div>
    </div>

    <searchBar class="searchBar" type="hotel-menu" />

    <div class="card-sorting">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136442.6688908414!2d11.729036324753594!3d57.70088500274492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464f8e67966c073f%3A0x4019078290e7c40!2z0JPRkdGC0LXQsdC-0YDQsywg0KjQstC10YbQuNGP!5e0!3m2!1sru!2sru!4v1764831474041!5m2!1sru!2sru" width="260" height="197" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="sorting">
        <button>Sort By <span style="font-size: 12px; font-weight: 400">: Our top Picks For Families</span><img src="@/assets/icons/sortingIcon.svg" alt="" class="icon"></button>
        <div class="sorting-main-text">
          <h5>Gothenburg</h5>
          <div class="sub-XS">120 Properties Found</div>
        </div>
        <div class="body-S">Travel professionals dedicated to simplifying your travel experience by curating flight and accommodation services on a user-friendly platform. Committed to quality and assurance.<span style="font-size: 12px; color: var(--color-primary-500)"> Find More Here ...</span></div>
      </div>
    </div>

    <div class="hotel-search">
      <div class="filter-bar">
        <div class="filter-bar-up">
          <h4 style="padding-bottom: 16px">Filter By</h4>
          <div class="filter-bar-up-budget">
            <div class="sub-M">Your Budget for per night</div>
            <img src="@/assets/images/PriceRangeSlider.png" alt="slider">
            <div class="filter-bar-up-btn">
              <button class="body-XS">Min Price <img src="@/assets/icons/filter-dollar.svg" alt="dollar"> </button>
              <button class="body-XS">Max Price <img src="@/assets/icons/filter-dollar.svg" alt="dollar"> </button>
            </div>
          </div>
        </div>
        <div class="check">
          <div style="padding-bottom: 8px" class="sub-L">Popular Filters</div>
          <div style="display: flex; flex-direction: column; gap: 4px" class="filter-check">
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Breakfast included</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">All-inclusive</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" checked/>
              <div style="color: var(--color-neutral-500)" class="body-XS">Free Cancellation</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Pool</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Pet Friendly</div>
            </div>
            <div style="display: flex;align-items: center; gap: 4px; font-size: 10px; color: var(--color-primary-500)" class="body-XS">Show More <img style="width: 12px; height: 12px" src="@/assets/icons/down.svg" alt="down"></div>
          </div>
        </div>

        <div class="check">
          <div style="padding-bottom: 8px" class="sub-L">Room Facilities</div>
          <div style="display: flex; flex-direction: column; gap: 4px" class="filter-check">
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Own Bathroom</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Kitchen</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" checked />
              <div style="color: var(--color-neutral-500)" class="body-XS">See View</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Baby Bed</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Bathtub</div>
            </div>
            <div style="display: flex;align-items: center; gap: 4px; font-size: 10px; color: var(--color-primary-500)" class="body-XS">Show More <img style="width: 12px; height: 12px" src="@/assets/icons/down.svg" alt="down"></div>
          </div>
        </div>

        <div class="check">
          <div style="padding-bottom: 8px" class="sub-L">Gusts Rating</div>
          <div style="display: flex; flex-direction: column; gap: 4px" class="filter-check">
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="rating" value="all" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">All</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="rating" value="outstanding" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Outstanding 9+</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="rating" value="very good" class="checkbox-input" checked />
              <div style="color: var(--color-neutral-500)" class="body-XS">Very Good 8+</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="rating" value="good" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Good 7+</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="rating" value="excellent" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Excellent</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="rating" value="poor" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Poor</div>
            </div>
            <div style="display: flex;align-items: center; gap: 4px; font-size: 10px; color: var(--color-primary-500)" class="body-XS">Show More <img style="width: 12px; height: 12px" src="@/assets/icons/down.svg" alt="down"></div>
          </div>
        </div>

        <div class="check">
          <div style="padding-bottom: 8px" class="sub-L">Bed Type</div>
          <div style="display: flex; flex-direction: column; gap: 4px" class="filter-check">
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="bed"  class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Two Single Beds</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="bed"  class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">King Beds</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="bed" class="checkbox-input" checked />
              <div style="color: var(--color-neutral-500)" class="body-XS">Baby Cots</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="bed" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Double Bed</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="bed"  class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Single Beds</div>
            </div>
            <div style="display: flex;align-items: center; gap: 4px; font-size: 10px; color: var(--color-primary-500)" class="body-XS">Show More <img style="width: 12px; height: 12px" src="@/assets/icons/down.svg" alt="down"></div>
          </div>
        </div>

        <div class="check">
          <div style="padding-bottom: 8px" class="sub-L">Leisure Activities</div>
          <div style="display: flex; flex-direction: column; gap: 4px" class="filter-check">
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Sauna</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Fitness Centre</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" checked />
              <div style="color: var(--color-neutral-500)" class="body-XS">Bar</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Steam Bath</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Yoga</div>
            </div>
            <div style="display: flex;align-items: center; gap: 4px; font-size: 10px; color: var(--color-primary-500)" class="body-XS">Show More <img style="width: 12px; height: 12px" src="@/assets/icons/down.svg" alt="down"></div>
          </div>
        </div>

        <div class="check">
          <div style="padding-bottom: 8px" class="sub-L">Travel Sustainability</div>
          <div style="display: flex; flex-direction: column; gap: 4px" class="filter-check">
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="sustainability"  class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Level 2 And Above 1</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="sustainability"  class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Level And Above 2</div>
            </div>
            <div style="display: flex;align-items: center; gap: 4px; font-size: 10px; color: var(--color-primary-500)" class="body-XS">Show More <img style="width: 12px; height: 12px" src="@/assets/icons/down.svg" alt="down"></div>
          </div>
        </div>

        <div class="check">
          <div style="padding-bottom: 8px" class="sub-L">Accommodation Classification</div>
          <div style="display: flex; flex-direction: column; gap: 4px" class="filter-check">
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="classification"  class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">5 Stars</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="classification"  class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">4 Stars</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="classification" class="checkbox-input" checked />
              <div style="color: var(--color-neutral-500)" class="body-XS">3 Stars</div>
            </div>
            <div style="display: flex;align-items: center; gap: 4px; font-size: 10px; color: var(--color-primary-500)" class="body-XS">Show More <img style="width: 12px; height: 12px" src="@/assets/icons/down.svg" alt="down"></div>
          </div>
        </div>

        <div class="check">
          <div style="padding-bottom: 8px" class="sub-L">Distance from the centre</div>
          <div style="display: flex; flex-direction: column; gap: 4px" class="filter-check">
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="distance"  class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Less Than 1 Km</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="distance"  class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Less Than 5 Km</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="radio" name="distance" class="checkbox-input" checked />
              <div style="color: var(--color-neutral-500)" class="body-XS">Less Than 15 Km</div>
            </div>
            <div style="display: flex;align-items: center; gap: 4px; font-size: 10px; color: var(--color-primary-500)" class="body-XS">Show More <img style="width: 12px; height: 12px" src="@/assets/icons/down.svg" alt="down"></div>
          </div>
        </div>
      </div>
      <div class="hotel-saerch-cards">
        <HotelCard
          v-for="h in hotels"
          :key="h.id"
          :hotel="h"
          :vip="h.vip"
        />
        <div style="display:flex; gap: 284px" class="hotel-buttons">
          <favouriteButton
          type="listFavouritePlaces" 
          @click="goToFafourites"
          size="large"
          class="auth-btn">
          
          <span class="auth-btn_content">
            <span>List Your Favourite Places</span>
            <img
              src="@/assets/icons/like-blue.svg"
              alt="like"
              class="auth-button_icon"
            />
          </span>
          </favouriteButton>
          <fillButton
          type="moreSearchResults" 
          @click=""
          size="large"
          >
          <span class="auth-btn_content">
            <span>See More Search Results</span>
            <img
              src="@/assets/icons/right-small.svg"
              alt="like"
              class="auth-button_icon"
            />
          </span>
          </fillButton>
      </div>
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

.card-sorting {
  padding: 0px 108px;
  display: flex;
  gap: 24px;
}

.sorting {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 647px;
  color: var(--color-neutral-500);
  width: 640px;
}

.content {
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
  display:flex;
  padding: 0px 108px;
  justify-content: space-between;
}

.hotel-saerch-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.filter-bar{
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;

/* width: 226px;
height: 1143px; */

}
.filter-bar-up-btn {
  display: flex;
  justify-content: space-between;
}
.filter-bar-up-btn button {
display: flex;
flex-direction: row;
padding: 8px 14px;
gap: 2px;
width: 106px;
max-width: 152px;
height: 34px;

border: 1px solid var(--color-neutral-400);
border-radius: 4px;
color: var(--color-neutral-400);
}

.auth-btn_content {
  display: flex;
  align-items: center;  
  gap: 8px;            
}

.auth-button_icon {
  width: 16px;
  height: 16px;
}

</style>