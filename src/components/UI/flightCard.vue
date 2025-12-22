<template>
  <div class="flight-card" :class="`flight-card--${variant}`">
    <!-- Левая картинка -->
    <div class="flight-card__image-wrapper" :class="{'flight-card__image-wrapper--favorite': variant === 'favorite'}">
        <img
            :src="airlineImg"
            alt="Flight Picture"
            class="flight-card__image"
            :class="{'flight-card__image--favorite': variant === 'favorite'}"
        />
      <div class="flight-card__airline-name h6">
        {{ airlineName }}
      </div>
      <div class="flight-card__rating body-XS">
        8.2
      </div>
      <div class="flight-card__logo">
        <img :src="airlineLogo" alt="Airline logo" />
      </div>
    </div>

    <!-- Правая часть -->
    <div class="flight-card__content">
    <template v-if="variant === 'search'">
      <div class="flight-card__top-row">
        <div class="flight-card__fromto-block">
          <div class="label-S flight-card__from-label">From</div>
          <div class="body-M flight-card__from-value">
            {{ from }}
          </div>
        </div>

        <div class="flight-card__duration-block">
          <div class="flight-card__duration-divider"></div>
          <div class="flight-card__duration-icon">
            <img src="@/assets/icons/taxi.svg" alt="plane" />
          </div>
          <div class="flight-card__duration-text body-M">
            {{ tripDuration }}
          </div>
        </div>

        <div class="flight-card__fromto-block flight-card__to-block">
          <div class="label-S flight-card__to-label">To</div>
          <div class="body-M flight-card__to-value">
            {{ to }}
          </div>
        </div>
      </div>

      <!-- Время вылета / стыковки / прилёта -->
      <div class="flight-card__time-row">
        <div class="flight-card__time-block">
          <div class="flight-card__time-main body-M">
            12:00 <span class="body-XS">PM</span>
          </div>
          <div class="flight-card__time-sub body-XS">Departure</div>
        </div>

        <div class="flight-card__time-block">
          <div class="flight-card__time-main body-M">
            {{ stopArrivalTime }} <span class="body-XS">PM</span>
            &nbsp;&nbsp;{{ stopDepartureTime }} <span class="body-XS">PM</span>
          </div>
          <div class="flight-card__time-sub sub-S">
            {{ stepPropertiesAndDuration }}
          </div>
        </div>

        <div class="flight-card__time-block flight-card__time-block--right">
          <div class="flight-card__time-main body-M">
            10:00 <span class="body-XS">AM</span>
          </div>
          <div class="flight-card__time-sub body-XS flight-card__time-link">
            Landing
          </div>
        </div>
      </div>

      <!-- Аэропорты -->
      <div class="flight-card__airports-row">
        <div class="flight-card__airport">
          <div class="flight-card__airport-icon">
            <img src="@/assets/images/flightsSearch/baggage-delay.svg" alt="airport" />
          </div>
          <div class="body-S">
            {{ fromAirportName }}
          </div>
        </div>

        <div class="flight-card__airport">
          <div class="flight-card__airport-icon">
            <img src="@/assets/images/flightsSearch/rotation.svg" alt="airport" />
          </div>
          <div class="body-S">
            {{ stopAirportName }}
          </div>
        </div>

        <div class="flight-card__airport">
          <div class="flight-card__airport-icon">
            <img src="@/assets/images/flightsSearch/baggage-delay.svg" alt="airport" />
          </div>
          <div class="body-S">
            {{ finalArrivalAirportName }}
          </div>
        </div>
      </div>

      <!-- Нижняя строка: цена, места, CO2, кнопка -->
      <div class="flight-card__bottom-row">
        <div class="flight-card__price body-XL">
          {{ cost }}
        </div>

        <div
          v-if="vacantSeatsNumberVisible"
          class="flight-card__badge flight-card__badge--seats body-S"
        >
          {{ vacantSeatsNumber }}
        </div>

        <div
          v-if="carbonDioxideVisible"
          class="flight-card__badge flight-card__badge--co2 body-S"
        >
          {{ carbonDioxide }}
        </div>

        <AuthButton
          class="flight-card__button"
          size="medium"
          type="signin"
          @click="$emit('view-detail')"
        >
          <span class="but-XL">View Detail</span>
        </AuthButton>
      </div>
    
    </template>

    <template v-else-if="variant === 'favorite'">
        <div class="favorite-card">
          <div class="favorite-card__fromto">
            <div class="row">
              <h6>From</h6>
              <h6 class="blue">{{ from }}</h6>
            </div>
            <div class="row">
              <h6>To</h6>
              <h6 class="blue">{{ to }}</h6>
            </div>
          </div>

          <h6 class="favorite-card__price">
            {{ cost }}
          </h6>

          <div class="favorite-card__airports">
            <div class="favorite-card__airport sub-S">
              <img src="@/assets/images/flightsSearch/baggage-delay.svg" alt="airport" />
              {{ finalArrivalAirportName }}
            </div>
            <div class="favorite-card__airport sub-S">
              <img src="@/assets/images/flightsSearch/rotation.svg" alt="airport" />
              {{ stopAirportName }}
            </div>
            <div class="favorite-card__airport sub-S">
              <img src="@/assets/images/flightsSearch/baggage-delay.svg" alt="airport" />
              {{ finalArrivalAirportName }}
            </div>
          </div>

          <div class="info-down">
            <div
                class="btn-container"
                style="display:inline-flex; align-items: center; margin-left: auto; margin-top: 20px"
            >
                <button class="availability-btn cap-L" @click="goToInformation">
                <h6>See Availability</h6>
                </button>

                <img src="@/assets/icons/right-blue.svg" class="icon" />
            </div>
        </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import AuthButton from '@/components/UI/signButton.vue'
import { useRouter } from "vue-router";
const router = useRouter()
import { defineProps } from 'vue'

const goToInformation = () => {
  router.push({ path: '/flight/purchase' }); 
};
const props = defineProps({
  airlineName: {
    type: String,
    default: 'Turkish Airlines'
  },
  airlineLogo: {
    type: String,
    default: ''
  },
  airlineImg: {
    type: String,
    default: ''
  },
  from: {
    type: String,
    default: 'Stockholm'
  },
  to: {
    type: String,
    default: 'Istanbul'
  },
  tripDuration: {
    type: String,
    default: 'Trip Duration : 9h ,45m'
  },
  stepPropertiesAndDuration: {
    type: String,
    default: 'One Stop, 3h Between'
  },
  stopArrivalTime: {
    type: String,
    default: '18:00'
  },
  stopDepartureTime: {
    type: String,
    default: '20:00'
  },
  fromAirportName: {
    type: String,
    default: 'ARN Stockholm'
  },
  stopAirportName: {
    type: String,
    default: 'FCO Rome Fiumicino'
  },
  finalArrivalAirportName: {
    type: String,
    default: 'SAW Istanbul Sabiha'
  },
  cost: {
    type: String,
    default: '$75'
  },
  vacantSeatsNumber: {
    type: String,
    default: '25 Vacant Seats'
  },
  vacantSeatsNumberVisible: {
    type: Boolean,
    default: true
  },
  carbonDioxide: {
    type: String,
    default: '31% less carbon dioxide'
  },
  carbonDioxideVisible: {
    type: Boolean,
    default: true
  },
  variant: {
    type: String,
    default: 'search', 
  }
})
</script>

<style scoped>
.flight-card {
  display: flex;
  width: 898px;
  height: 304px;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-white);
  box-shadow: 0 0 0 1px var(--color-neutral-200);
border-width: 1px;
border-radius: 8px;
padding: 8px;

}

/* Левая часть */
.flight-card__image-wrapper {
  position: relative;
  width: 260px;
  height: 100%;
  overflow: hidden;
}

.flight-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.flight-card__logo {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 60px;
  height: 60px;
  border-radius: 999px;
  overflow: hidden;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
}

.flight-card__logo img {
  width: 60px;
  height: 60x;
}

.flight-card__airline-name {
  position: absolute;
  left: 12px;
  bottom: 12px;
  color: var(--color-white);
}

.flight-card__rating {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 4px 6px;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--color-white);
  border-radius: 4px;
}

/* Правая часть */
.flight-card__content {
  flex: 1;
  padding: 16px 1px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* From / Duration / To */
.flight-card__top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flight-card__fromto-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.flight-card__from-label,
.flight-card__to-label {
  background-color: var(--color-neutral-200);
  padding: 4px 8px;
  border-radius: 4px;
  color: var(--color-neutral-500);
}

.flight-card__from-value,
.flight-card__to-value {
  color: var(--color-black);
  font-weight: 600;
}

.flight-card__duration-block {
  display: flex;
  align-items: center;
  gap: 8px;
}

.flight-card__duration-divider {
  width: 120px;
  height: 1px;
  border-top: 1px dashed var(--color-neutral-300);
}

.flight-card__duration-icon img {
  width: 20px;
  height: 20px;
}

.flight-card__duration-text {
  white-space: nowrap;
  color: var(--color-neutral-500);
}

/* Time row */
.flight-card__time-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.flight-card__time-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.flight-card__time-block--right {
  align-items: flex-end;
}

.flight-card__time-main {
  color: var(--color-black);
}

.flight-card__time-main .body-XS {
  color: var(--color-neutral-400);
}

.flight-card__time-sub {
  color: var(--color-neutral-500);
}

.flight-card__time-link {
  color: var(--color-primary-500);
}

/* Airports row */
.flight-card__airports-row {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.flight-card__airport {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-neutral-100);
  border-radius: 4px;
  padding: 6px 10px;
  flex: 1;
}

.flight-card__airport-icon img {
  width: 18px;
  height: 18px;
}

/* Bottom row */
.flight-card__bottom-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
}

.flight-card__price {
  color: var(--color-success);
  font-weight: 600;
}

.flight-card__badge {
  padding: 6px 10px;
  border-radius: 4px;
  background-color: var(--color-success-light);
}

.flight-card__badge--seats {
  color: var(--color-success);
}

.flight-card__badge--co2 {
  color: var(--color-neutral-500);
  background-color: var(--color-neutral-100);
}

.flight-card__button {
  margin-left: auto;
  width: 160px;
}

/* favorite */
.flight-card--favorite {
  width: 392px;
  height: 248px;
}

.favorite-card__fromto {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.favorite-card__price {
  margin-top: 8px;
}

.favorite-card__airports {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
}

.favorite-card__airport {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-neutral-500);
}

.favorite-card__airport img {
  width: 16px;
  height: 16px;
}

.favorite-card__link {
  margin-top: 8px;
  align-self: flex-start;
  background: transparent;
  border: none;
  color: var(--color-primary-500);
  cursor: pointer;
}
.flight-card__image-wrapper--favorite {
  width: 201px;  
  height: 232px;
}

.row {
    display:FLEX;
    flex-direction: row;
    gap: 4px;
}

.blue {
    color: var(--color-primary-500);
}

.availability-btn {
  color: var(--color-primary-500);
  cursor: pointer;
  border: none;
  background-color: transparent;
}

</style>
