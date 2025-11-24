<script setup>
import { ref, computed } from "vue";
import headerElem from "@/components/header.vue";
import searchBar from "@/components/searchBar.vue";
import footerElem from "@/components/footer.vue";
import fillButton from "@/components/UI/fillButton.vue";
import SpecialOfferCard from "@/components/UI/specialOfferCard.vue";
import offerReviewCard from "@/components/UI/offerReviewCard.vue";

</script>

<template>
  <div class="landing-page">
    <headerElem headerType="extended" />

    <div class="content">
      <h4>Where is your Next Dream Place?</h4>
      <div class="sub-M">Find exclusive Genius rewards in every corner of the world!</div>
    </div>

    <searchBar class="searchBar" type="hotel-menu" />

    <footer><footerElem></footerElem></footer>
  </div>
</template>

<style scoped>
.landing-page {
  background-color: var(--color-neutral-100);
  display: flex;
  flex-direction: column;
  gap: 40px; 
}
.content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0px 108px;
}
</style>
