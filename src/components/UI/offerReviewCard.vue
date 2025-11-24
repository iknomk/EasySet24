<script setup>
const props = defineProps({
  cards: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
    <div class="cards-wrapper">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="testimonial-card"
        >

        <div class="avatar-wrapper">
          <img class="avatar" :src="card.avatar" alt="avatar" />
        </div>

        <div class="card-content">
          <div class="flag-name">
            <img class="flag" :src="card.flag" />
            <span class="but-XL">{{ card.name }}</span>
          </div>

          <p class="sub-S">{{ card.text }}</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
.cards-wrapper {
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 150px; 

}

/* карточка */
.testimonial-card {
  position: relative;
  padding-top: 45px; /* пространство под аватар */
  color: white;
display: flex;
flex-direction: column;
align-items: center;
padding: 60px 32px 32px;
gap: 10px;

width: 252px;
height: 216px;


background: linear-gradient(360deg, rgba(0, 0, 0, 0.5) 20.14%, rgba(0, 0, 0, 0) 92.13%), rgba(0, 0, 0, 0.2);
border-radius: 8px;

}

/* обёртка для правильного позиционирования */
.avatar-wrapper {
  position: absolute;
  top: -75px; /* половина высоты аватара (110px / 2) */
  left: 50%;
  transform: translateX(-50%);
}

.avatar {
    width: 120px;
    height: 117.86px;
    border-radius: 300px;
  object-fit: cover;
}

/* контент */
.card-content {
  text-align: left;
}

.flag-name {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  margin-bottom: 10px;
}

.flag {
  width: 23px;
  height: 15px;
  border-radius: 2px;
}
</style>
