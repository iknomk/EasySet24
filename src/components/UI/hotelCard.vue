<template>
  <div class="hotel-card">

    <!-- VIP Ribbon -->
    <div v-if="vip" class="vip-ribbon">
      <span>VIP Gifts</span>
    </div>

    <!-- Left: Image -->
    <div class="image-box">
      <img :src="hotel.image" alt="hotel image" />
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
    <div class="info">
      <h3 class="title">{{ hotel.name }}</h3>

      <div class="row-location">
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
      

      <div class="experience-rating">
        <div class="experience">
            <div class="sub-S">{{ hotel.experience }}</div>
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
        <div class="price-text">
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

      <div class="btn-container">
        <button class="availability-btn cap-L">
            See Availability 
        </button>

        <img src="@/assets/icons/right-small.svg" class="icon"></img>
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
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  gap: 8px;
  position: relative;
  background: #fff;
}

/* VIP ribbon */
.vip-ribbon {
  position: absolute;
  top: 0;
  right: -5px;
  width: 120px;
  height: 40px;
  background: #0b5f9a;
  color: white;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
}

.image-box {
  width: 200px;
  height: 240px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rating-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: #000;
  color: #fff;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 12px;
}

/* INFO */
.info {
    display: flex;
    flex-direction: column;
  flex: 1;
  padding: 6px 10px;
  justify-content: space-between;
}

.title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 6px;
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

.rating {
  margin-top: 10px;
  font-size: 14px;
}

.rating-text {
  font-weight: 700;
}

.arrow {
  margin-left: 3px;
}

/* RIGHT PRICE COLUMN */
.price {
  width: 160px;
  padding: 6px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.discount {
  font-size: 15px;
  color: #e60000;
  font-weight: 600;
}

.price-value {
  font-size: 28px;
  font-weight: 800;
  color: #1a7c3f;
}

.taxes {
  font-size: 12px;
  opacity: 0.7;
}

.benefits {
  margin-top: 10px;
}

.green {
  color: green;
}

.red {
  color: red;
}

.availability-btn {
  margin-top: 8px;
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
</style>
