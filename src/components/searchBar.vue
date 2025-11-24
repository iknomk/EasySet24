<template>
  <!-- FLIGHT -->
  <div v-if="type === 'flight'" class="flight-search-wrapper">
    <div class="search-labels">
      <div class="but-L search-item-label">From - To</div>
      <div class="but-L search-item-label">Trip</div>
      <div class="but-L search-item-label">Passengers - Flight Class</div>
      <div class="but-L search-item-label">Departure - Return</div>
    </div>
    <div
      class="search-bar flight"
    >
      <div class="search-item menu">
        <img src="@/assets/icons/hotel.svg" alt="place" class="search-icon" />
        <div class="sub-M">Gutenberg - Istanbul</div>
      </div>

      <div class="search-item menu-vip">
        <div class="sub-M">Two Way</div>
        <img src="@/assets/icons/drop-down-list.svg" alt="drop-down-list" />
      </div>
      
      <div class="search-item menu-vip">
        <div class="passengers-room-condition">
          <img src="@/assets/icons/people.svg" alt="people" class="search-icon" />
          <div class="sub-M">2 Adults - 3 Children</div>
        </div>
        <div class="passengers-room-condition">
          <div class="sub-M">Economy</div>
          <img src="@/assets/icons/drop-down-list.svg" alt="drop-down-list" />
        </div>
      </div>

      <div class="search-item menu">
        <img src="@/assets/icons/calendar.svg" alt="calendar" class="search-icon" />
        <div class="sub-M">18 Dec 2023 - 23 Dec 2023</div>
      </div>
      <button class="search-btn-XXL but-XXL" >Search</button>
    </div>
  </div>

  <!-- HOTEL MENU BAR -->
  <div v-else-if="type === 'hotel-menu'" class="hotel-menu-wrapper">
    <div class="search-labels">
      <div class="but-L search-item-label">Place</div>
      <div class="but-L search-item-label">VIP</div>
      <div class="but-L search-item-label">Passengers - Room Condition</div>
      <div class="but-L search-item-label">Check-in - Check Out</div>
    </div>
    <div
      class="search-bar hotel-menu"
    >
      <div class="search-item menu">
        <img src="@/assets/icons/hotel.svg" alt="place" class="search-icon" />
        <div class="sub-M">Gutenberg - Istanbul</div>
      </div>

      <div class="search-item menu-vip">
        <div class="sub-M">Long Lasting</div>
        <img src="@/assets/icons/drop-down-list.svg" alt="drop-down-list" />
      </div>

      <div class="search-item menu-vip">
        <div class="passengers-room-condition">
          <img src="@/assets/icons/people.svg" alt="people" class="search-icon" />
          <div class="sub-M">2 Adults - 3 Children</div>
        </div>
        <div class="passengers-room-condition">
          <div class="sub-M">Two Rooms</div>
          <img src="@/assets/icons/drop-down-list.svg" alt="drop-down-list" />
        </div>
      </div>

      <div class="search-item menu">
        <img src="@/assets/icons/calendar.svg" alt="calendar" class="search-icon" />
        <div class="sub-M">18 Dec 2023 - 23 Dec 2023</div>
      </div>

      <button class="search-btn-XXL but-XXL" @click="handleHotelSearch">Search</button>
    </div>
  </div>

  <!-- HOTEL (оригинальный) -->
  <div
    v-else
    class="search-bar hotel"
    :class="state"
    @mouseover="handleHover(true)"
    @mouseleave="handleHover(false)"
    @click="handleClick()"
  >
    <div class="search-item place">
      <img src="@/assets/icons/hotel.svg" alt="icon" class="search-icon" />
      <div class="body-XS">Where Are You Going To?</div>
    </div>

    <div class="search-item">
      <img src="@/assets/icons/calendar.svg" alt="calendar" class="search-icon" />
      <div class="body-XS">Check In Date</div>
      <div class="body-XS">Check Out Date</div>
    </div>

    <div class="search-item">
      <img src="@/assets/icons/people-plus-one.svg" alt="people" class="search-icon" />
      <div class="body-XS">Adults 2</div>
      <div class="body-XS">Children 3</div>
      <div class="body-XS">Room</div>
      <img src="@/assets/icons/down.svg" alt="dropdown" class="dropdown-icon" />
    </div>

    <button class="search-btn but-XXL">Search</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  type: {
    type: String,
    default: 'hotel',
    validator: (v) => ['hotel', 'flight', 'hotel-menu'].includes(v)
  }
})

const type = computed(() => props.type)
const state = ref('normal')

const handleHotelSearch = () => {
  if (type.value === 'hotel-menu') {
    router.push('/hotel/search')
  }
}

const handleHover = (hovering) => {
  if (type.value !== 'hotel') return
  if (state.value !== 'selected') {
    state.value = hovering ? 'hover' : 'normal'
  }
}

const handleClick = () => {
  if (type.value !== 'hotel') return
  state.value = state.value === 'selected' ? 'normal' : 'selected'
}
</script>

<style scoped>
/* Обертки для flight и hotel-menu */
.flight-search-wrapper,
.hotel-menu-wrapper {
  width: 100%;
  max-width: 1224px;
  margin: 0 auto;
  position: relative;
}

/* Контейнер для заголовков */
.search-labels {
  display: grid;
  grid-template-columns: 0.78fr 0.62fr 1.3fr 1.4fr;
  width: 100%;
  margin-bottom: 4px;
  margin-left: 8px;
}

.search-item-label {
  flex: 1;
  color: var(--color-neutral-600);
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;
}

.search-labels .search-item-label:last-of-type {
  margin-right: 186px; 
}

.search-bar.hotel,
.search-bar.flight,
.search-bar.hotel-menu {
  width: 100%;
  max-width: 1224px;
  margin: 0 auto;
}

.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--color-neutral-400);
  background-color: var(--color-white);
  cursor: pointer;
  overflow: hidden;
}

/* --- состояния --- */
.search-bar.hotel.hover {
  background-color: var(--color-neutral-200);
  border-color: var(--color-neutral-300);
}

.search-bar.hotel.selected {
  background-color: var(--color-white);
  border-color: var(--color-primary-600);
}

.search-item {
  flex: 1; 
  box-sizing: border-box;
  height: 56px;
  display: flex;
  flex-direction: row;
  padding: 20px 16px;
  gap: 32px;
  align-items: center;
  border-right: 1px solid var(--color-neutral-400);
}

.search-item:last-of-type {
  border-right: none;
}

/* Стили для иконок поиска */
.search-icon {
  transition: filter 0.3s ease;
}

/* Изменение цвета иконок при hover на весь search-bar */
.search-bar.hotel.hover .search-icon {
  filter: invert(48%) sepia(40%) saturate(957%) hue-rotate(161deg) brightness(92%) contrast(91%);
}

.body-XS {
  border: none;
  outline: none;
  background: transparent;
  color: var(--color-black);
  transition: color 0.3s ease;
  padding: 0;
  margin: 0;
}

.search-item input::placeholder {
  color: var(--color-black);
  transition: color 0.3s ease;
}

.search-bar.hotel.hover .body-XS {
  color: var(--color-neutral-500);
}

/* --- кнопка --- */
.search-btn {
  flex: 0 0 130px;
  height: 56px;
  border-radius: 0 4px 4px 0;
  background-color: var(--color-primary-500);
  color: var(--color-white);
  border: none;
  cursor: pointer;
}

.search-btn-XXL {
  border-radius: 0px 3px 3px 0px;
  background-color: var(--color-primary-500);
  color: var(--color-white);
  border: none;
  padding: 10px;
  gap: 10px;
  width: 186px;
  height: 56px;
}

.search-btn:hover {
  background-color: var(--color-primary-400);
}

.search-btn:active {
  background-color: var(--color-primary-600);
}

/* --- hotel-menu vip --- */
.menu {
  gap: 8px;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  white-space: nowrap;
}

.passengers-room-condition {
  gap: 8px;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
}

.menu-vip {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 32px;
  white-space: nowrap;
}
</style>