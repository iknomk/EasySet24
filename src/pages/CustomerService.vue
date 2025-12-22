<script setup>
import HeaderElem from '../components/header.vue';
import FooterElem from '../components/footer.vue';
</script>

<template>
  <div class="page">
    <HeaderElem headerType="extended" />

    <main class="support-page">
      <!-- Блок Customer Service -->
      <section class="support-top">
        <div class="support-top-left">
          <p class="support-title">Customer Service</p>
          <p class="support-subtitle">
            How can we help? We're available 24 hours a day.
          </p>

          <div class="support-cards">
            <div class="support-card">
              <img
                class="support-card-icon"
                src="@/assets/icons/phone-telephone.svg"
                alt=""
              />
              <div>
                <p class="support-card-title">Call us</p>
                <p class="support-card-text">
                  For anything urgent, you can call us 24/7 at a local or
                  international phone number.
                </p>
              </div>
            </div>

            <div class="support-card">
              <img
                class="support-card-icon"
                src="@/assets/icons/comments.svg"
                alt=""
              />
              <div>
                <p class="support-card-title">Send us a message</p>
                <p class="support-card-text">
                  Contact our agents about your booking, and we'll reply as
                  soon as possible.
                </p>
              </div>
            </div>

            <div class="support-card">
              <img
                class="support-card-icon"
                src="@/assets/icons/city.svg"
                alt=""
              />
              <div>
                <p class="support-card-title">Contact the property</p>
                <p class="support-card-text">
                  For details about your stay, they usually know best.
                </p>
              </div>
            </div>
          </div>

          <button class="support-help-btn">
            Go To The Help Center
          </button>
        </div>

        <!-- Our Help Center -->
        <div class="support-middle">
          <p class="support-title">Our Help Center</p>
          <div class="help-center-box">
            <div>
              <p class="help-center-title">
                Tailor-made Customer Service
              </p>
              <p class="help-center-text">
                Tell us what's happening and we'll guide you through what to do
                next.
              </p>
            </div>

            <div>
              <p class="help-center-title">Contact us anytime</p>
              <p class="help-center-text">
                Send us a message or pick up the phone – our agents are always
                available
              </p>
            </div>

            <div>
              <p class="help-center-title">
                All the important things in one place
              </p>
              <p class="help-center-text">
                Call or message the property, and see all the essential
                information about your stay.
              </p>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="support-faq">
          <p class="support-title">Frequently asked questions</p>

          <div class="faq-box">
            <div class="faq-row">
              <p class="faq-question">
                Can I cancel my booking?
              </p>
              <img src="@/assets/icons/arrow-down-gray.svg" alt="" />
            </div>

            <div class="faq-row">
              <p class="faq-question">
                If I need to cancel my booking, will I pay a fee?
              </p>
              <img src="@/assets/icons/arrow-down-gray.svg" alt="" />
            </div>

            <div class="faq-row">
              <p class="faq-question">
                Who's going to charge my credit card and when?
              </p>
              <img src="@/assets/icons/arrow-down-gray.svg" alt="" />
            </div>

            <div class="faq-row">
              <p class="faq-question">
                Can I make changes to my booking (i.e. change dates)?
              </p>
              <img src="@/assets/icons/arrow-down-gray.svg" alt="" />
            </div>

            <div class="faq-row faq-row--open">
              <div class="faq-row-top">
                <p class="faq-question faq-question--muted">
                  I can't find my confirmation email. What should I do?
                </p>
                <img
                  class="faq-arrow-open"
                  src="@/assets/icons/arrow-down-gray.svg"
                  alt=""
                />
              </div>
              <p class="faq-answer">
                If you have a free cancellation booking, you won't pay a
                cancellation fee. If your booking is no longer free to cancel
                or is non-refundable, you may incur a cancellation fee. Any
                cancellation fees are determined by the property. You will pay
                any additional costs to the property.
              </p>
            </div>

            <div class="faq-row">
              <p class="faq-question">
                Can I make a reservation without a credit card?
              </p>
              <img src="@/assets/icons/arrow-down-gray.svg" alt="" />
            </div>

            <div class="faq-row">
              <p class="faq-question">
                Why was I charged?
              </p>
              <img src="@/assets/icons/arrow-down-gray.svg" alt="" />
            </div>

            <div class="faq-row">
              <p class="faq-question">
                How do I find out if properties allow pets?
              </p>
              <img src="@/assets/icons/arrow-down-gray.svg" alt="" />
            </div>
          </div>
        </div>
    </section>
    </main>

    <FooterElem footerType="extended" />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* фон страницы */
.support-page {
  width: 100%;
  background-color: var(--color-neutral-100);
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-top: 48px;
  padding-bottom: 60px;
  padding-inline: 108px;
}

/* общие заголовки */
.support-title {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 24px;
}

.support-subtitle {
  margin-top: 4px;
  font-size: 14px;
}

/* верхний блок */
.support-top {
  padding: 16px;
}

.support-top-left {
  max-width: 1224px;
}

/* три карточки */
.support-cards {
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-top: 16px;
}

.support-card {
  width: 391px;
  height: 143px;
  padding-inline: 16px;
  background-color: var(--color-white);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.support-card-icon {
  width: 52px;
  height: 52px;
  padding: 10px;
}

.support-card-title {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 14px;
}

.support-card-text {
  margin-top: 12px;
  font-family: 'Poppins-Medium', sans-serif;
  font-size: 12px;
}

/* кнопка */
.support-help-btn {
  margin-top: 24px;
  margin-bottom: 8px;
  height: 40px;
  width: 189px;
  font-family: 'Poppins-Medium', sans-serif;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid var(--color-primary-500);
  background-color: var(--color-primary-500);
  color: var(--color-white);
  cursor: pointer;
}

/* Our Help Center */
.support-middle {
  margin-top: 0;
}

.help-center-box {
  background-color: var(--color-white);
  border-radius: 8px;
  margin-top: 24px;
  width: 1224px;
  height: 253px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.help-center-title {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 20px;
}

.help-center-text {
  margin-top: 10px;
  font-size: 14px;
}

/* FAQ */
.support-faq {
  margin-top: 0;
}

.faq-box {
  background-color: var(--color-white);
  border-radius: 8px;
  margin-top: 24px;
  width: 1224px;
  display: flex;
  flex-direction: column;
}

.faq-row {
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-neutral-300);
}

.faq-row--open {
  flex-direction: column;
  gap: 24px;
}

.faq-row-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.faq-question {
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 16px;
}

.faq-question--muted {
  color: var(--color-neutral-500);
}

.faq-arrow-open {
  transform: rotate(180deg);
}

.faq-answer {
  font-size: 12px;
  margin: 16px;
}

</style>
