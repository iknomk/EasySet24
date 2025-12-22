<template>
<div class="landing-page">
    <headerElem headerType="default" />

    <section class="ticket">
        <div class="text">
            <h4>Digital Ticket </h4>
            <div class="but-XXL">It Is Not Necessary To print Your Ticket </div>
        </div>
        
        <section class="ticket-card">
                    <!-- Левая часть -->
                    <div class="ticket-left">
                        <!-- Шапка -->
                        <div class="ticket-header-row">
                        <div class="ticket-header-cell flight-cell">
                            <div class="header-icon">
                            <img src="@/assets/icons/ticket1.svg" alt="" />
                            </div>
                            <p>Flight</p>
                        </div>

                        <div class="ticket-header-cell from-cell">
                            <div class="header-icon">
                            <img src="@/assets/icons/ticket2.svg" alt="" />
                            </div>
                            <p>From</p>
                        </div>

                        <div class="ticket-header-cell to-cell">
                            <div class="header-icon">
                            <img src="@/assets/icons/ticket3.svg" alt="" />
                            </div>
                            <p>To</p>
                        </div>

                        <div class="ticket-header-cell duration-cell">
                            <p>Duration</p>
                        </div>
                        </div>

                        <!-- Верхний сегмент -->
                        <div class="ticket-row">
                        <div class="ticket-cell airline-cell">
                            <img
                            class="airline-logo"
                            src="@/assets/images/flightsSearch/LufthansaLogo.png"
                            alt=""
                            />
                            <div>
                            <p class="cell-title">Tk 29</p>
                            <p class="cell-link">Economy Class</p>
                            </div>
                        </div>

                        <div class="ticket-cell from-main">
                            <div>
                            <p class="time-primary">12:00 PM</p>
                            <p class="date-success">Thursday , April 6</p>
                            </div>
                            <div>
                            <p class="cell-title">Stockholm(Sweden)</p>
                            <p class="cell-muted">
                                Stockholm arlanda airport (ARN)
                            </p>
                            </div>
                        </div>

                        <div class="ticket-cell to-main">
                            <div>
                            <p class="time-primary">15:45 PM</p>
                            <p class="date-success">Thursday , April 6</p>
                            </div>
                            <div>
                            <p class="cell-title">Rome (Italy)</p>
                            <p class="cell-muted">
                                Rome Fiumicino Airport (FCO)
                            </p>
                            </div>
                        </div>

                        <div class="ticket-cell duration-main">
                            <p class="duration-text">3:45h</p>
                        </div>
                        </div>

                        <!-- One stop -->
                        <div class="ticket-row ticket-onestop-row">
                        <div class="onestop-left">
                            <div class="onestop-icon">
                            <img src="@/assets/icons/double-down.svg" alt="" />
                            </div>
                            <p class="cell-title">One Stop</p>
                        </div>

                        <div class="onestop-middle">
                            <p class="onestop-text">
                            Layovers &amp; connecting flights for Rome, Italy
                            </p>
                            <p class="onestop-link">
                            Italy Fiumicino airport , See More...
                            </p>
                        </div>

                        <div class="onestop-right">
                            <p class="duration-text">4h 45m</p>
                        </div>
                        </div>

                        <!-- Нижний сегмент -->
                        <div class="ticket-row">
                        <div class="ticket-cell airline-cell">
                            <img
                            class="airline-logo"
                            src="@/assets/images/flightsSearch/BritishAirways.png"
                            alt=""
                            />
                            <div>
                            <p class="cell-title">Tk 29</p>
                            <p class="cell-link">Economy Class</p>
                            </div>
                        </div>

                        <div class="ticket-cell from-main">
                            <div>
                            <p class="time-primary">21:45 PM</p>
                            <p class="date-success">Thursday , April 6</p>
                            </div>
                            <div class="from-bottom-city">
                            <div class="onestop-icon small">
                                <img src="@/assets/icons/double-down.svg" alt="" />
                            </div>
                            <div>
                                <p class="cell-title">Rome (Italy)</p>
                                <p class="cell-muted">
                                Rome Fiumicino Airport (FCO)
                                </p>
                            </div>
                            </div>
                        </div>

                        <div class="ticket-cell to-main">
                            <div>
                            <p class="time-primary">23:45 PM</p>
                            <p class="date-success">Thursday , April 6</p>
                            </div>
                            <div>
                            <p class="cell-title">Stanbul (Turkiye)</p>
                            <p class="cell-muted">Sabha (SAW)</p>
                            </div>
                        </div>

                        <div class="ticket-cell duration-main">
                            <p class="duration-text">2 Hours</p>
                        </div>
                        </div>
                    </div>

                    <!-- Вертикальный разделитель -->
                    <hr class="ticket-divider" />

                    <!-- Правая часть с баркодом -->
                    <div class="ticket-right">
                        <div class="barcode-header">
                        <p>Bar Code</p>
                        </div>
                        <div class="barcode-body">
                        <img src="@/assets/icons/QR-Code.svg" alt="" />
                        <img style="transform: rotate(90deg); width: 230px" src="@/assets/images/barcode.png" alt="" />
                        </div>
                    </div>
                </section>

        <div class="text">
            <h4>Terms and Conditions</h4>
            <div class="pay-text">
                <div class="but-XXL">Payments</div>
                <div class="body-M"> · If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes. </div>
                <div class="body-M"> · If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.</div>
                <div class="body-M"> · Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.</div>
            </div>

            
        </div>
    </section>

<footer><footerElem variant="noApp" />
</footer>
</div>
</template>

<script setup>
import headerElem from "@/components/header.vue";
import footerElem from "@/components/footer.vue";
import fillButton from '@/components/UI/fillButton.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDetails = () => {
  router.push('/flight/payment')
}
</script>

<style scoped>
.landing-page {
    background-color: var(--color-neutral-100);
    display: flex;
    flex-direction: column;
    gap: 48px;
}
.ticket {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 1224px;
    height: 1046px;
    background-color: var(--color-white);
    margin: 0 auto;
    padding:  32px;
}

.text {

display: flex;
flex-direction: column;
gap: 8px;
}

/* flight ticket */
.ticket-page {
  width: 100%;
  background-color: var(--color-neutral-100);
  padding-top: 48px;
  padding-bottom: 65px;
  display: flex;
  justify-content: center;
}

/* белый контейнер */
.ticket-wrapper {
  width: 1224px;
  height: 1046px;
  background-color: var(--color-white);
  padding-top: 32px;
  padding-inline: 32px;
}

/* заголовок */
.ticket-heading {
  display: flex;
  flex-direction: column;
}

.ticket-title {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 24px;
}

.ticket-subtitle {
  margin-top: 8px;
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 16px;
}

/* карточка билета */
.ticket-card {
  width: 1127px;
  height: 446px;
  border-radius: 8px;
  border: 1px solid var(--color-neutral-300);
  padding: 16px;
  display: flex;
  justify-content: space-between;
}

/* левая часть */
.ticket-left {
  display: flex;
  flex-direction: column;
  width: 924px;
}

/* шапка таблицы */
.ticket-header-row {
  display: flex;
  height: 48px;
}

.ticket-header-cell {
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--color-neutral-400);
  border-left: 1px solid var(--color-neutral-100);
  border-right: 1px solid var(--color-neutral-100);
  padding-inline: 16px;
}

.flight-cell {
  width: 240px;
  border-left-color: var(--color-neutral-300);
  border-top-left-radius: 8px;
}

.from-cell {
  width: 300px;
}

.to-cell {
  width: 260px;
}

.duration-cell {
  width: 125px;
  border-right-color: var(--color-neutral-300);
}

.ticket-header-cell p {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 20px;
  color: var(--color-white);
}

.header-icon {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background-color: var(--color-white);
  border: 1px solid var(--color-primary-500);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* строки содержимого */
.ticket-row {
  display: flex;
  height: 155px;
}

.ticket-row.ticket-onestop-row {
  height: 56px;
}

/* базовый cell */
.ticket-cell {
  border: 1px solid var(--color-neutral-300);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
}

.airline-cell {
  width: 240px;
  align-items: flex-start;
}

.from-main {
  width: 300px;
}

.to-main {
  width: 260px;
}

.duration-main {
  width: 125px;
  justify-content: center;
  align-items: center;
}

/* контент */
.airline-logo {
  height: 60px;
}

.cell-title {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 16px;
}

.cell-link {
  margin-top: 4px;
  font-size: 14px;
  color: var(--color-primary-500);
}

.cell-muted {
  margin-top: 4px;
  font-size: 14px;
  color: var(--color-neutral-500);
}

.time-primary {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 16px;
  color: var(--color-primary-500);
}

.date-success {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 16px;
  color: var(--color-success);
}

/* one stop */
.ticket-onestop-row .onestop-left {
  width: 240px;
  padding-inline: 24px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.onestop-icon {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: var(--color-white);
  border: 2px solid var(--color-primary-500);
  display: flex;
  align-items: center;
  justify-content: center;
}

.onestop-icon.small {
  width: 40px;
  height: 40px;
}

.ticket-onestop-row .onestop-middle {
  width: 560px;
  padding-inline: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

.onestop-text {
  font-size: 16px;
}

.onestop-link {
  font-size: 12px;
  color: var(--color-primary-500);
}

.ticket-onestop-row .onestop-right {
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.duration-text {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 20px;
}

/* нижний from блок с кружком */
.from-bottom-city {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* вертикальный разделитель */
.ticket-divider {
  height: 100%;
  border: 1px dashed rgba(0, 0, 0, 0.8);
}

/* правая часть с баркодом */
.ticket-right {
  display: flex;
  flex-direction: column;
  width: 123px;
}

.barcode-header {
  height: 48px;
  border-radius: 0 8px 0 0;
  background-color: var(--color-neutral-400);
  border: 1px solid var(--color-neutral-300);
  display: flex;
  align-items: center;
  justify-content: center;
}

.barcode-header p {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 20px;
  color: var(--color-white);
}

.barcode-body {
  height: 366px;
  border: 1px solid var(--color-neutral-300);
  display: flex;
  flex-direction: column;
  gap: 140px;
  align-items: center;
  justify-content: start;
  padding: 20px;
}

/* terms */
.terms {
  margin-top: 40px;
}

.terms-title {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 24px;
}

.terms-subtitle {
  margin-top: 8px;
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 16px;
}

.terms-list {
  margin-top: 16px;
  margin-left: 24px;
  list-style-type: disc;
  font-size: 16px;
}

.terms-list li + li {
  margin-top: 16px;
}

.pay-text {
display: flex;
flex-direction: column;
gap: 16px;
}
</style>