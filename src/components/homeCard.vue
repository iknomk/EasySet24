<template>
  <div class="home-card">
    <div class="img-container">
      <img :src="card.imageUrl" :alt="card.name" class="img-container-img" />
      <div class="img-container-like">
        <img src="@/assets/icons/like.svg" alt="like" class="like-icon" />
      </div>
      <div class="img-container-under">
        <div class="img-container-under-sun">
          <slot name="under-content">
            <img src="@/assets/icons/sun-one.svg" alt="sun" v-for="n in 4" :key="n" />
          </slot>
        </div>
        <div class="img-container-under-num but-S">{{ card.rating }}</div>
      </div>
    </div>

    <div class="title">
      <h5>{{ card.name }}</h5>
      <div v-if="card.subtitle" class="sub-L">{{ card.subtitle }}</div>
    </div>

    <div class="cap-S">{{ card.date }}</div>
    <div class="body-XXS">{{ card.description }}</div>
  </div>
</template>

<script>
export default {
    name: 'HomeCard',
    props: {
      card: {
          type: Object,
          required: true
      }
    }
}
</script>

<style scoped>
.home-card {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 8px 24px;
    gap: 15px;

    width: 288px;
    height:min-content;
    background: var(--color-white);
    border: 1px solid var(--color-neutral-300);
    border-radius: 8px;
}

.img-container {
    position:relative;
    width: 272px;
    height: 203px;
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

.sub-L {
    color: var(--color-neutral-400);
}

.title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    margin:0;
    gap: 2px;
}

.img-container-under-sun {
    display: flex;
    justify-content: center; /* Выравнивание по центру */
    align-items: center; /* Выравнивание по вертикали */
}

.title h5 {
    margin: 0;
    padding: 0;
    line-height: 1;
}

.img-container-img {
    width: 272px;
    height: 203px;
    border-radius: 4px 4px 0px 0px;
}
</style>