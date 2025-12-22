<template>
  <div class="hotel-card">

    <!-- VIP tag -->
    <div v-if="vip" class="vip-ribbon">
      <img src="@/assets/images/hotelCard/OfferTag.svg" alt="Vip Gifts" />
    </div>

    <!-- Left: Image -->
    <div class="image-box">
      <img :src="hotel.image" alt="hotel image" />
      <div class="img-container-like">
        <img style="width: 21px; height: 20px; z-index: 10" src="@/assets/icons/like.svg" alt="like" class="like-icon" />
      </div>
      <div class="img-container-under">
        <div class="img-container-under-sun">
          <slot name="under-content">
            <img src="@/assets/icons/sun-one.svg" alt="sun" v-for="n in 4" :key="n" />
          </slot>
        </div>
        <div class="img-container-under-num but-S">{{ hotel.rating }}</div>
      </div>
    </div>

    <!-- Middle: Info -->
    <div style=" display:flex; padding: 16px" class="details-container">
    <div class="info">


      <div class="row-location">
        <h5 style="padding-bottom: 4px" class="title">{{ hotel.name }}</h5>
        <div class="row">
            <img src="@/assets/icons/local-two.svg" class="icon"></img>
            <span class="sub-S">{{ hotel.location }}</span>
        </div>

        <div class="row">
            <img src="@/assets/icons/cup-four.svg" class="icon"></img>
            <span class="sub-S">Breakfast Included</span>
        </div>

        <div class="row details">
            <div class="row small">
                <img src="@/assets/icons/people.svg" class="icon"></img>
                <span class="sub-S"> {{ hotel.adults }} Adult</span>
            </div>
            <div class="row small">
                <span class="sub-S"> {{ hotel.children }} Children</span>
            </div>
            <div class="row small">
                <img src="@/assets/icons/time.svg" class="icon"></img>
                <span class="sub-S">{{ hotel.nights }} Nights</span>
            </div>
        </div>
      </div>
      

      <div style="display:flex; flex-direction: column; gap: 4px" class="experience-rating">
        <div class="experience">
            <div style="padding-bottom: 4px" class="sub-S">{{ hotel.experience }}</div>
            <div class="room-type sub-S">{{ hotel.roomType }}</div>
        </div>

        <div class="rating">
            <span class="cap-L">{{ hotel.ratingText }}</span>
            <span class="reviews sub-S">, {{ hotel.reviews }} Reviews</span>
            <img src="@/assets/icons/hotel-icon.svg" class="icon"></img>
        </div>
      </div>

    </div>

    <!-- Right: Price -->
    <div class="price">
        <div style="display:flex; gap: 49px; margin-left:auto; align-items: baseline;" class="price-text">
            <div class="discount sub-M" v-if="hotel.discount">
                {{ hotel.discount }}% Off
            </div>

            <div class="price-value sub-M">
                ${{ hotel.price }}
            </div>
        </div>

      <div class="sub-S">Includes taxes and charges</div>

      <div class="benefits">
        <div class="row small green but-XS">
            <img src="@/assets/icons/leave.svg" ></img>
          Trip Sustainable Level, 5
        </div>
        <div class="row small red but-XS">
            <img src="@/assets/icons/attention.svg"></img>
            We Have {{ hotel.left }} Left at {{ hotel.discount }}% Off
        </div>
      </div>

      <div style="display:inline-flex; align-items: center; margin-top: 8px; margin-left: auto" class="btn-container">
        <button @click="goToPage" class="availability-btn cap-L">
            See Availability 
        </button>

        <img src="@/assets/icons/right-small.svg" class="icon"></img>
      </div>
      
    </div>
    </div>

  </div>
</template>


<script setup>
defineProps({
  hotel: {
    type: Object,
    required: true,
  },
  vip: {
    type: Boolean,
    default: false,
  },
});
import { useRouter } from "vue-router";

const router = useRouter()
const goToPage = () => {
  router.push('/hotel/booked')
}
</script>


<style scoped>
.icon {
  width: 16px;
  height: 16px;    
  filter: brightness(0) saturate(100%);
}

.hotel-card {
  width: 865px;
  height: 256px;
  border: 1px solid var(--color-neutral-300);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  gap: 8px;
  position: relative;
  background: var(--color-white);
}

.image-box {
  width: 200px;
  height: 240px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  overflow: hidden;
  position: relative;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 28px;
}


.row {
  display: flex;
  align-items: center;
  gap: 5px;
}


.details {
  display: flex;
  gap: 8px;
}

.room-type {
  opacity: 0.8;
}

.arrow {
  margin-left: 3px;
}

/* RIGHT PRICE COLUMN */
.price {
  width: 302px;
  padding: 6px;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-end;
  margin-left:auto;
}

.discount {
  color: var(--color-error-light);
}

.price-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-success);
}

.taxes {
  font-size: 12px;
  opacity: 0.7;
}

.benefits {
  margin-left: auto;
}

.green {
  color: var(--color-success);
}

.red {
  color: var(--color-error-light);
}

.availability-btn {
  color: var(--color-primary-500);
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.img-container-under {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    gap: 157px;

    position: absolute;
    height: 37px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    background: linear-gradient(22.59deg, #000000 50.29%, rgba(12, 12, 12, 0) 120.91%);
    opacity: 0.7;
    backdrop-filter: blur(45px);

}

.img-container-under-num {
    color: var(--color-white);
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 11px 9px;

    width: 20px;
    height: 20px;

    border: 1px solid var(--color-white);
    border-radius: 4px;
}

.row-location{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
}

.vip-ribbon {
  position: absolute;
  top: -13px;
  right: -25px; 
  z-index: 10; 
}

.vip-ribbon img {
  width: 148px;
  height: 150px;
  display: block;
}

.img-container-under-sun {
  display: flex;
  flex-direction: row;   
  align-items: center;  
  gap: 4px;       
  flex-wrap: nowrap;  
}

.like-icon {
    position: absolute;
    left: 2.5px;
    top: 4px;
    width: 20px;
}

.img-container-like {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 8px;
    top: 8px;
    opacity: 0.7;
    border-radius: 50px;
    background-color: var(--color-black);
}
</style>
