<template>
  <div class="hotel-card">
    <!-- Left: Image -->
    <div class="image-box">
      <img :src="hotel.image" alt="hotel image" />
      <div class="img-container-like">
        <img
          style="width: 21px; height: 20px; z-index: 10"
          src="@/assets/icons/like.svg"
          alt="like"
          class="like-icon"
        />
      </div>
      <div class="img-container-under">
        <div class="img-container-under-sun">
          <slot name="under-content">
            <img
              src="@/assets/icons/sun-one.svg"
              alt="sun"
              v-for="n in 4"
              :key="n"
            />
          </slot>
        </div>
        <div class="row">
          <div class="img-container-under-num but-S">
            {{ hotel.rating }}
          </div>
          <img src="@/assets/icons/good-hand.svg" alt="good hand" />
        </div>
      </div>
    </div>

    <!-- Right: Info -->
    <div class="details-container" style="display: flex">
      <div class="info">
        <div class="info-up">
          <h6 style="padding-bottom: 6px" class="title">
            {{ hotel.name }}
          </h6>
          <div class="row">
            <img src="@/assets/icons/local-two.svg" class="icon" />
            <span class="sub-S">{{ hotel.location }}</span>
          </div>
        </div>

        <div class="info-center" style="display:flex; flex-direction:column; gap: 6px">
          <div class="row">
            <img src="@/assets/icons/dollar-hotel-card.svg" alt="dollar" />
            <h6>{{ hotel.price }}</h6>
            <div class="sub-XS red">{{ hotel.discount }}% Off</div>
          </div>

          <div class="sub-S">Includes Taxes And Charges</div>

          <div class="benefits">
            <div class="row small green but-XS" style="padding-bottom: 8px">
              <img src="@/assets/icons/leave.svg" />
              <div class="sub-S">
                Trip Sustainable Level, 5
              </div>
            </div>
            <div class="row small red but-XS">
              <img src="@/assets/icons/attention.svg" />
              <div class="sub-S">
                We Have {{ hotel.left }} Left at {{ hotel.discount }}% Off
              </div>
            </div>
          </div>
        </div>

        <div class="info-down">
          <div
            class="btn-container"
            style="display:inline-flex; align-items: center; margin-left: auto"
          >
            <button class="availability-btn cap-L">
              <h6>See Availability</h6>
            </button>

            <img src="@/assets/icons/right-small.svg" class="icon" />
          </div>
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
});
</script>

<style scoped>
.icon {
  width: 16px;
  height: 16px;
  filter: brightness(0) saturate(100%);
}

.hotel-card {
  width: 392px;
  height: 248px;
  gap: 25px;
  border: 1px solid var(--color-neutral-300);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  position: relative;
  background: var(--color-white);
}

.image-box {
  width: 176px;
  height: 232px;
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
  gap: 24px;
  padding: 10px 0;
}

.row {
  display: flex;
  align-items: center;
  gap: 5px;
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
  gap: 48px;
  position: absolute;
  height: 37px;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    22.59deg,
    #000000 50.29%,
    rgba(12, 12, 12, 0) 120.91%
  );
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
