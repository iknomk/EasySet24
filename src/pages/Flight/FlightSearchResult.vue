<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import headerElem from "@/components/header.vue";
import searchBar from "@/components/searchBar.vue";
import footerElem from "@/components/footer.vue";
import fillButton from "@/components/UI/fillButton.vue";
import favouriteButton from "@/components/UI/signButton.vue";
import FlightResultCard from '@/components/UI/flightCard.vue';

const goToInformation = () => {
  router.push({ path: '/flight/purchase' }); 
};
const goToFafourites = () => {
  router.push('/flight/favourites')
}
const flights = ref([
  {
    id: 1,
    airlineName: 'Turkish Airlines',
    airlineLogo: new URL('@/assets/images/flightsSearch/TurkishAilinesLogo.png', import.meta.url).href,
    airlineImg: new URL('@/assets/images/flightsSearch/flightCard1.jpg', import.meta.url).href,
    from: 'Stockholm',
    to: 'Istanbul',
    tripDuration: 'Trip Duration : 9h ,45m',
    stepPropertiesAndDuration: 'One Stop, 3h Between',
    stopArrivalTime: '18:00',
    stopDepartureTime: '20:00',
    fromAirportName: 'ARN Stockholm',
    stopAirportName: 'FCO Rome Fiumicino',
    finalArrivalAirportName: 'SAW Istanbul Sabiha',
    cost: '$75',
    vacantSeatsNumber: '25 Vacant Seats',
    vacantSeatsNumberVisible: true,
    carbonDioxide: '31% less carbon dioxide',
    carbonDioxideVisible: true
  },
  // ещё две карточки (можешь поменять данные)
  {
    id: 2,
    airlineName: 'Delta Airlines',
    airlineLogo: new URL('@/assets/images/flightsSearch/Airline.png', import.meta.url).href,
    airlineImg: new URL('@/assets/images/flightsSearch/flightCard2.jpg', import.meta.url).href,
    from: 'Stockholm',
    to: 'Istanbul',
    tripDuration: 'Trip Duration : 9h ,45m',
    stepPropertiesAndDuration: 'One Stop, 3h Between',
    stopArrivalTime: '18:00',
    stopDepartureTime: '20:00',
    fromAirportName: 'ARN Stockholm',
    stopAirportName: 'FCO Rome Fiumicino',
    finalArrivalAirportName: 'SAW Istanbul Sabiha',
    cost: '$75',
    vacantSeatsNumber: '25 Vacant Seats',
    vacantSeatsNumberVisible: true,
    carbonDioxide: '31% less carbon dioxide',
    carbonDioxideVisible: true
  },
  {
    id: 3,
    airlineName: 'Lufthansa',
    airlineLogo: new URL('@/assets/images/flightsSearch/LufthansaLogo.png', import.meta.url).href,
    airlineImg: new URL('@/assets/images/flightsSearch/flightCard3.jpg', import.meta.url).href,
    from: 'Stockholm',
    to: 'Istanbul',
    tripDuration: 'Trip Duration : 9h ,45m',
    stepPropertiesAndDuration: 'One Stop, 3h Between',
    stopArrivalTime: '18:00',
    stopDepartureTime: '20:00',
    fromAirportName: 'ARN Stockholm',
    stopAirportName: 'FCO Rome Fiumicino',
    finalArrivalAirportName: 'SAW Istanbul Sabiha',
    cost: '$75',
    vacantSeatsNumber: '25 Vacant Seats',
    vacantSeatsNumberVisible: true,
    carbonDioxide: '31% less carbon dioxide',
    carbonDioxideVisible: true
  }
])
</script>

<template>
  <div class="landing-page">
    <headerElem headerType="extended" selectedItem="Flight"/>

    <div class="content">
      <h4>Which exciting place is your next adventure taking you?</h4>
      <div class="sub-M">Discover exclusive Genius rewards wherever your journey takes you!</div>
    </div>

    <searchBar class="searchBar" type="flight" />

    
    <div class="hotel-search">
      <div class="filter-bar">
        <div class="filter-bar-up">
          <div class="filter-bar-up-budget">
            <div class="sub-S">Departure time</div>
            <img src="@/assets/images/PriceRangeSlider.png" alt="slider">
            <div class="filter-bar-up-btn">
              <button class="body-XS">From: 12:00<img src="@/assets/icons/take-off-one.svg" alt="plane"> </button>
              <button class="body-XS">Up To:16:45<img src="@/assets/icons/take-off-one.svg" alt="plane"> </button>
            </div>
          </div>
        </div>
         <div class="filter-bar-up">
          <div class="filter-bar-up-budget">
            <div class="sub-S">Trip Duration</div>
            <img src="@/assets/images/PriceRangeSlider2.png" alt="slider">
            <div class="filter-bar-up-btn">
              <button class="body-XS">From: 7th To 12th <img src="@/assets/icons/big-clock.svg" alt="clock"> </button>
              <button class="body-XS">One Stop<img src="@/assets/icons/drop-down-list-gray.svg" alt="list"> </button>
            </div>
          </div>
        </div>
        <div class="check">
          <div style="padding-bottom: 8px" class="sub-L">Airline</div>
          <div style="display: flex; flex-direction: column; gap: 4px" class="filter-check">
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Austrian Airlines</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Air France</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" checked/>
              <div style="color: var(--color-neutral-500)" class="body-XS">Lufthansa</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Brussels Airlines</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">ITA Airways</div>
            </div>
            <div style="display: flex;align-items: center; gap: 4px; font-size: 10px; color: var(--color-primary-500)" class="body-XS">SWITZERLAND <img style="width: 12px; height: 12px" src="@/assets/icons/down.svg" alt="down"></div>
          </div>
        </div>

        <div class="check">
          <div style="padding-bottom: 8px" class="sub-L">Passenger Rating</div>
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
          <div style="padding-bottom: 8px" class="sub-L">Popular Filters</div>
          <div style="display: flex; flex-direction: column; gap: 4px" class="filter-check">
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Drink Included</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Taxes Included</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" checked />
              <div style="color: var(--color-neutral-500)" class="body-XS">VIP</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Child Friendly</div>
            </div>
            <div style="display: flex; gap: 8px" class="filter-check-mark">
              <input type="checkbox" class="checkbox-input" />
              <div style="color: var(--color-neutral-500)" class="body-XS">Pet Friendly</div>
            </div>
            <div style="display: flex;align-items: center; gap: 4px; font-size: 10px; color: var(--color-primary-500)" class="body-XS">Show More <img style="width: 12px; height: 12px" src="@/assets/icons/down.svg" alt="down"></div>
          </div>
        </div>

        <div class="check">
          <div style="display: flex; flex-direction: column; gap: 16px" class="filter-check">
            <div style="display: flex; gap: 18px" class="filter-check-mark">
              <input type="checkbox" name="filter"  class="checkbox-input" style="width:24px; height: 24px" />
              <div style="color: var(--color-neutral-500)" class="cap-L">Filter With the Help Of AI .<span class="label-XS blue"> See the<br> results  here !</span></div>
            </div>
            <div style="display: flex; gap: 18px" class="filter-check-mark">
              <input type="checkbox" name="filter"  class="checkbox-input" style="width:24px; height: 24px" checked />
              <div style="color: var(--color-neutral-500)" class="cap-L">Filter Randomly.<span class="label-XS blue">See the results  here !</span></div>
            </div>
          </div>
        </div>

      </div>
      <div class="hotel-saerch-cards">
        <div class="flights-list">
        <FlightResultCard
            v-for="flight in flights"
            :key="flight.id"
            v-bind="flight"
            @view-detail="onViewDetail(flight)"
        />
        </div>
        
        <div style="display:flex; gap: 284px; margin-top: 40px" class="hotel-buttons">
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
          @click="goToInformation"
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

.flights-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.filter-bar{
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 48px;

}
.filter-bar-up-btn {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}
.filter-bar-up-btn button {
display: flex;
flex-direction: row;
padding: 8px 14px;
gap: 2px;
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

.blue {
color: var(--color-primary-500);
}
</style>