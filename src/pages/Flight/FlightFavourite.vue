<script setup>
import headerElem from "@/components/header.vue";
import footerElem from "@/components/footer.vue";
import FlightResultCard from "@/components/UI/flightCard.vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDetails = () => {
  router.push('/flight/purchase')
}
const favouriteFlights = [
  {
    id: 1,
    variant: 'favorite',
    airlineName: 'Lufthansa',
    airlineLogo: new URL('@/assets/images/flightsSearch/LufthansaLogo.png', import.meta.url).href,
    airlineImg: new URL('@/assets/images/flightsSearch/flightCard3.jpg', import.meta.url).href,
    from: 'Stockholm',
    to: 'Istanbul',
    cost: '$75',
    fromAirportName: 'SAW Istanbul Sabiha',
    stopAirportName: 'FCO Rome Fiumicino',
    finalArrivalAirportName: 'SAW Istanbul Sabiha',
  },
  {
    id: 2,
    variant: 'favorite',
    airlineName: 'Delta Airlines',
    airlineLogo: new URL('@/assets/images/flightsSearch/Airline.png', import.meta.url).href,
    airlineImg: new URL('@/assets/images/flightsSearch/flightCard2.jpg', import.meta.url).href,
    from: 'Stockholm',
    to: 'Istanbul',
    cost: '$75',
    fromAirportName: 'SAW Istanbul Sabiha',
    stopAirportName: 'FCO Rome Fiumicino',
    finalArrivalAirportName: 'SAW Istanbul Sabiha',
  },
  {
    id: 3,
    variant: 'favorite',
    airlineName: 'British Airways',
    airlineLogo: new URL('@/assets/images/flightsSearch/LufthansaLogo.png', import.meta.url).href,
    airlineImg: new URL('@/assets/images/flightsSearch/flightCard1.jpg', import.meta.url).href,
    from: 'Stockholm',
    to: 'Istanbul',
    cost: '$75',
    fromAirportName: 'SAW Istanbul Sabiha',
    stopAirportName: 'FCO Rome Fiumicino',
    finalArrivalAirportName: 'SAW Istanbul Sabiha',
  }
]
</script>

<template>
  <div class="landing-page">
    <headerElem headerType="extended" selectedItem="Flight"/> />

    <div class="content">
      <h4 style="padding-bottom:24px">Flight Favorite</h4>

      <div class="favourites-grid">
        <FlightResultCard
            v-for="flight in favouriteFlights"
            :key="flight.id"
            v-bind="flight"
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
