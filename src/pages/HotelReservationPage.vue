<template>
  <div class="landing-page">
    <headerElem headerType="extended" selectedItem="Hotel"/>

    <div class="landing-page">
        <div class="reservation-section">
            <!-- Header -->
            <div class="header-block">
            <div class="title-group">
                <h4 class="h4">Your Hotel Reservation</h4>
                <h2 class="h2">Confirmed</h2>
            </div>
            <p class="subtitle body-M">
                Contact EasySet24 If You Need To Change In Basic Information With <span class="booking-number">1385</span> Booking Number.
            </p>
            </div>

            <!-- Booking Details Card -->
            <div class="booking-card">
            <!-- Card Header with Image -->
            <div class="card-header">
                <div class="text-overlay">
                <h5 class="h5">Booking No. 1385 Details</h5>
                <p class="sub-M">Check Your Information Here !</p>
                </div>
                <div class="card-overlay"></div>
                <img src="@/assets/images/reservation-bg.jpg" alt="Hotel Beach" class="card-image">
                <!-- Hotel Roles Info -->
                <div class="hotel-roles">
                    <h5  >Hotel Roles</h5>
                    <div class="roles-info">
                    <p class="body-S">Check-In At 14 :00 Every Day</p>
                    <p class="body-S">Check-Out At 12 :00 , Every Day</p>
                    <p class="policy-text body-S">Secure By EasySet24 Policy-2024</p>
                    </div>
                </div>
                
            </div>

            

            <!-- Details Table -->
            <div class="table-wrapper">
                <table class="details-table">
                <thead>
                    <tr>
                    <th>Stays</th>
                    <th>
                        <img src="@/assets/icons/check-in-calender.svg" alt="check-in">
                        Check-In
                    </th>
                    <th>
                        <img src="@/assets/icons/check-out-calender.svg" alt="check-out">
                        Check-ut
                    </th>
                    <th>Quantity</th>
                    <th>Room Type</th>
                    <th>Bed Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>5 Nights</td>
                    <td>25 Jan 2024</td>
                    <td>30 Jan 2024</td>
                    <td>2 Rooms</td>
                    <td>Double</td>
                    <td>Two Twin</td>
                    </tr>
                </tbody>
                </table>
            </div>

            <!-- Additional Info -->
            <div class="additional-info">
                <p class="info-item body-M">
                <span class="label">Adults 2 ,Children 3 ,Infant 0</span>
                </p>
                <p class="info-item body-M">
                <span class="label">Additional Services Quantity</span>
                <span class="value">None</span>
                </p>
                <p class="info-item body-M">
                <span class="label">Meal Plan</span>
                <span class="value">Allergic</span>
                </p>
            </div>
            </div>

            <!-- Cancelation Policy Section -->
            <div class="policy-section">
            <h4 class="h4">Cancelation Policy</h4>
            <p class="policy-label body-M">Pay Attention</p>
            <p class="policy-text body-M">
                This Booking Represents The Conclusive Step In The Hotel Reservation Process. It Is Considered Final And May Only Be Canceled By The Hotel In The Event Of Unforeseen Circumstances Or Natural Disasters.
            </p>
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
import fillButton from "@/components/UI/fillButton.vue";

import { ref } from 'vue'

const bookingData = ref({
  bookingNumber: '1385',
  stays: '5 Nights',
  checkIn: '25 Jan 2024',
  checkOut: '30 Jan 2024',
  quantity: '2 Rooms',
  roomType: 'Double',
  bedType: 'Two Twin',
  guests: 'Adults 2 ,Children 3 ,Infant 0',
  additionalServices: 'None',
  mealPlan: 'Allergic'
})
</script>

<style scoped>
    .landing-page {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: var(--color-neutral-100);
}
.reservation-section {
    background-color:var(--color-white);
  width: 1224px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 8px;
}

/* Header Block */
.header-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title-group {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.header-block .h4 {
  margin: 0;
  color: var(--color-black);
}

.header-block .h2 {
  margin: 0;
  color: var(--color-primary-500);
}

.subtitle {
  margin: 0;
  color: var(--color-neutral-500);
}

.booking-number {
  font-weight: 700;
  color: var(--color-black);
}

/* Booking Card */
.booking-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.card-header {
  position: relative;
  height: 280px;
  display: flex;
  justify-content:space-between;
  overflow: hidden;
  flex-direction:column;
}

.card-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.text-overlay {
  position: relative;
  z-index: 3;
  padding: 24px;
  width: 100%;
}


.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(356.12deg, rgba(0, 0, 0, 0.8) 19.91%, rgba(0, 0, 0, 0) 74.56%);
  pointer-events: none;
  z-index: 2;
}
/* Hotel Roles */
.hotel-roles {
    position:relative;
    z-index: 2;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  color: var(--color-white);
}

.hotel-roles h6 {
  margin: 0;
  color: var(--color-white);
}

.roles-info {
  display: flex;
  align-items: center;
  gap: 24px;
}

.roles-info p {
  margin: 0;
  color: var(--color-white);
}

.policy-text {
  color: var(--color-white);
  opacity: 0.9;
  font-size: 12px;
}

/* Table */
.table-wrapper {
  overflow-x: auto;
  padding: 0 16px;
}

.details-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
}

.details-table thead {
  background-color: var(--color-neutral-400);
}

.details-table th {
  padding: 12px 8px;
  text-align: left;
  font-family: "Poppins-SemiBold", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: var(--color-white);
  border-right: 1px solid var(--color-neutral-400);
}

.details-table th:last-child {
  border-right: none;
}

.details-table th img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
}

.details-table td {
  padding: 12px 8px;
  text-align: left;
  border-right: 1px solid var(--color-neutral-200);
  border-bottom: 1px solid var(--color-neutral-200);
  font-family: "Poppins-Regular", sans-serif;
  font-size: 14px;
  color: var(--color-black);
}

.details-table td:last-child {
  border-right: none;
}

.details-table tbody tr:last-child td {
  border-bottom: none;
}

/* Additional Info */
.additional-info {
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid var(--color-neutral-200);
}

.info-item {
  margin: 0;
  color: var(--color-black);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  font-weight: 500;
}

.value {
  color: var(--color-neutral-500);
}

/* Cancelation Policy */
.policy-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.policy-section h4 {
  margin: 0;
  color: var(--color-black);
}

.policy-label {
  margin: 0;
  color: var(--color-black);
  font-weight: 500;
}

.policy-section .policy-text {
  margin: 0;
  color: var(--color-neutral-500);
  line-height: 1.6;
}
</style>