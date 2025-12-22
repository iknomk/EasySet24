

<template>
<div class="landing-page">
    <headerElem headerType="extended" selectedItem="Flight"/> />

    <div class="content blue">
      <h4>Where is your Next Dream Place?</h4>
      <div class="sub-M">Find exclusive Genius rewards in every corner of the world!</div>
    </div>

    <searchBar class="searchBar" type="flight" />

    <div class="image-text-container">
      <img
          src="@/assets/images/flight-search-banner.jpg"
          alt="Family on the beach"
      />
      <div class="gradient-overlay"></div>
      <div class="text-overlay">
          <h1>Make your travel whishlist, we'll do the rest</h1>
          <div class="sub-L">Special offers to suit your plan</div>
      </div>
    </div>

    <div class="content">
      <div class="row">
        <div class="column">
          <h3>Let's Travel together</h3>
          <div class="body-XL">Discover the latest offers and news and start planning your next trip with us.</div>
        </div>
        <AuthButton class="btn-see" size="medium" @click="goToBooking" >
            <div >
              <span class="but-XL">See All</span>
            </div>
        </AuthButton>
      </div>
    </div>

    <div class="offers-section">
      <div class="offers-map">
        <SpecialOfferCard 
          v-for="(card, index) in specialOffers"
          :key="index"
          size="small"
          :card="card"
          :class="`offer-position-${card.id}`"
        />
      </div>
    </div>

    <div class="content"> 
      <div class="column">
        <div>
          <h3>Fall Into Travel</h3>
          <div class="sub-L blue">Review Affordable EasySet 24 Trip Packages</div>
        </div>
        <div class="row">
          <div class="body-M">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got<br> the travel tools to get you to your destination.</div>
          <AuthButton class="btn-see" size="medium" @click="goToBooking">
              <div >
                <span class="but-XL">See All</span>
              </div>
          </AuthButton>
        </div>
      </div>
    </div>

    <div class="backpacking-section">
      <!-- Левая текстовая часть -->
      <div class="backpacking-left">
        <div class="row">
          <div class="price-badge">
            <div class="cap-L">From</div>
            <div class="body-XL">$700</div>
          </div>

          <h3 style="margin-right: 30px" >Backpacking South Of Asia ...</h3>
        </div>
        

        <div class="body-XL backpacking-text">
          Traveling Is A Unique Experience As It's The Best Way To Unplug From The Pushes And Pulls Of Daily Life.
        </div>
        <div class="body-XL backpacking-text">
          Relaxing Through An Organized Trip , Helps Us To Forget About Our Problems, Frustrations, And Fears At Home.
        </div>
        <div class="body-XL backpacking-text">
          During Our Journey, We Experience Life In Different Ways. We Explore New Places, Cultures, Cuisines, Traditions, And Ways Of Living.
        </div>

        <AuthButton class="backpacking-button" size="medium" @click="goToBooking">
          <span class="but-XL">Book Flight</span>
        </AuthButton>
      </div>

      <!-- Правая часть с картинками -->
      <div class="backpacking-right">
        <div class="backpacking-top-row">
          <img
            src="@/assets/images/flightsSearch/Rectangle1.png"
            alt="Backpacking image 1"
            class="backpacking-image"
          />
          <img
            src="@/assets/images/flightsSearch/Rectangle2.png"
            alt="Backpacking image 2"
            class="backpacking-image"
          />
        </div>
        <div class="backpacking-bottom-row">
          <img
            src="@/assets/images/flightsSearch/Rectangle3.png"
            alt="Backpacking image 3"
            class="backpacking-image"
          />
          <img
            src="@/assets/images/flightsSearch/Rectangle4.png"
            alt="Backpacking image 4"
            class="backpacking-image"
          />
        </div>
      </div>
    </div>

    <footer>
      <footerElem />
    </footer>
</div>
</template>

<script setup>
import headerElem from "@/components/header.vue";
import footerElem from "@/components/footer.vue";
import searchBar from "@/components/searchBar.vue";
import SpecialOfferCard from "@/components/UI/specialOfferCard.vue";
import AuthButton from '@/components/UI/signButton.vue';
import fillButton from "@/components/UI/fillButton.vue";
import { useRouter } from 'vue-router'

const router = useRouter()
import { ref } from 'vue'

const specialOffers = ref([
  { 
    id: 1, 
    imageUrl:  new URL('@/assets/images/washington.png', import.meta.url).href, 
    location: "Washington", 
    date: "Wed 25 Jan-Fri 27 Jan",
     position: { top: '20%', left: '30%' }
  },
  { 
    id: 2, 
    imageUrl:  new URL('@/assets/images/columbia.jpg', import.meta.url).href,
    location: "Columbia", 
    date: "Sat 13 Jan-Thu 15 Jan",
    position: { top: '40%', left: '30%' }
  },
  { 
    id: 3, 
    imageUrl:  new URL('@/assets/images/china.jpg', import.meta.url).href,  
    location: "China", 
    date: "Fri 30 Dec-Tue 4 Jan",
     position: { top: '10%', left: '60%' }
  },
  { 
    id: 4, 
    imageUrl:  new URL('@/assets/images/berlin.jpg', import.meta.url).href,
    location: "Berlin", 
    date: "Wed 25 Jan-Fri 27 Jan",
    position: { top: '60%', left: '60%' }
  },
  { 
    id: 5, 
    imageUrl:  new URL('@/assets/images/philippines.jpg', import.meta.url).href,
    location: "Philippines", 
    date: "Sun 28 Apr-Tue 5 Maj",
    position: { top: '40%', left: '80%' }
  }
]);


const goToBooking = () => {
  router.push('/flight/result')
}
</script>

<style scoped>
    .landing-page {
  display: flex;
  flex-direction: column;
  background-color: var(--color-neutral-100);
  gap: 40px;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 0px 108px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.blue {
  color: var(--color-primary-500);
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
  width: 1440px;
  height: 420px;
  object-fit: cover;
  object-position: center 8%;

}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 16.96%, rgba(40, 40, 40, 0) 58.04%);
  pointer-events: none;
  z-index: 1;
}

.text-overlay {
  position: absolute;
  width: 506px;
  left: 135px;
  top: 120px;
  color: var(--color-neutral-200);
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
}

.offers-map {
  position: relative;
  background-image:
   linear-gradient(2.09deg, rgba(0, 0, 0, 0.5) 77.91%, rgba(0, 0, 0, 0) 98.19%),
   url("@/assets/images/world-map.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 1440px;
  height: 488px;
  background-size:cover;
border-radius: 0px 0px 8px 8px;

}

.offers-map .special-offer-card {
  position: absolute;
}

.offer-position-1 {
left: 156px;
top: 23px;
}

.offer-position-2 {
top: 163px;
left: 299px;
}

.offer-position-3 {
top: 22px;
left: 549px;

}

.offer-position-4 {
top: 249px;
left: 604px;
}

.offer-position-5 {
top: 133px;
left: 924px;
}

.map-background {
  width: 100%;
  opacity: 0.2;
}

.row {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.btn-see {
  width: 184px;
height: 48px;
gap: 16px;
border-radius: 4px;
border-width: 1px;
padding-top: 8px;
padding-right: 16px;
padding-bottom: 8px;
padding-left: 16px;
justify-content: center;
}

.backpacking-section {
  display: flex;
  flex-direction: row;
  padding: 40px 108px 0 108px;
  gap: 40px;
  background-color: var(--color-neutral-100);
}

/* Левая колонка */
.backpacking-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Бейдж "From $700" */
.price-badge {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
width: 68px;
height: 60px;
border-radius: 4px;
padding: 4px;

  background-color: var(--color-primary-500);
  color: var(--color-white);
  border-radius: 0 0 4px 4px;
  text-align: center;
  gap: 4px;
}

.price-badge .body-S {
  margin: 0;
}

.price-badge .h5 {
  margin: 0;
}

/* Заголовок */
.backpacking-left h3 {
  margin: 0;
  color: var(--color-black);
}

/* Текст */
.backpacking-text {
  color: var(--color-black);
  line-height: 1.6;
}

/* Кнопка */
.backpacking-button {
  width: 600px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Правая колонка с картинками */
.backpacking-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.backpacking-top-row,
.backpacking-bottom-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.backpacking-image {
  width: 290px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}
</style>