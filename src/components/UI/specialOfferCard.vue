<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium'].includes(value),
  },
  card: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="special-offer-card" :class="`card--${size}`">
    <div class="image-container">
      <img :src="card.imageUrl" :alt="card.title" class="offer-image" />
    </div>

    <!-- Бейдж с SVG изображением -->
    <div class="special-offer-badge">
      <img src="@/assets/images/tag.svg" alt="Special Offer" />
    </div>

    <div class="content">
      <h6 class="location">{{ card.location }}</h6>
      <div class="body-XXS date">{{ card.date }}</div>
    </div>
  </div>
</template>

<style scoped>
.special-offer-card {
  background: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px;
  gap: 6px;

  border: 1px solid #E3E3E3;
  border-radius: 4px;
  position: relative; 

}

.card--small {
  width: 234px;
  height: 100px;
}

.card--small .image-container {
  width: 109px;
  height: 92px;
  flex-shrink: 0;
}

.card--small .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.card--medium {
  width: 273px;
  height: 140px;
}

.card--medium .image-container {
  width: 125px;
  height: 124px;
  flex-shrink: 0;
}

.card--medium .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 4px;
}

.image-container {
  overflow: hidden;
}

.offer-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.special-offer-badge {
  position: absolute;
  top: -6px;
  left: -8px; 
  z-index: 10; 

}

.special-offer-badge img {
  width: 55px; 
  height: 56px;
  display: block;
}

/* Контент */
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.location {
  color: var(--color-black);
}

.date {
  color: var(--color-black);
}
</style>