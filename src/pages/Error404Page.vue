<script setup>
import headerElem from "@/components/header.vue";
import footerElem from "@/components/footer.vue";
import fillButton from "@/components/UI/fillButton.vue";
</script>

<template>
<div>
    <headerElem headerType="error" />

    <div class="banner">
        <div class="banner-content">
          <div class="banner-title">
            <p class="banner-title-text">404</p>
            <div class="header-text">The Page Was Not Found ,Sorry!</div>
          </div>
          <fillButton size="medium" class="but-XL">
              <span class="button-content">
                Return To Home Page
                <img src="@/assets/icons/right-small.svg" alt="" class="icon">
              </span>
            </fillButton> 
        </div>
    </div>
    <footer><footerElem></footerElem></footer>
</div> 
</template> 

<style scoped>
.banner {
  background-image: 
    linear-gradient(356.44deg, #2B1F18 8.32%, rgba(43, 31, 24, 0.361059) 25.87%, rgba(43, 31, 24, 0) 49.28%),
    linear-gradient(353.87deg, rgba(0, 0, 0, 0.7) 8.73%, rgba(0, 0, 0, 0.132615) 45.62%, rgba(0, 0, 0, 0) 118.81%),
    url('@/assets/images/banner-hotel.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1440px;
  height: 664px;
  display: flex;
  align-items:flex-end;
  justify-content: center; 
  margin: 0 auto;
}

.banner-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.banner-title {
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
width: 352px;
height: 104px;
margin: auto;
margin-bottom: 230px;
}

.banner-title-text {
  color: #D9D9D980;
  font-family: Poppins;
font-weight: 700;
font-style: Bold;
font-size: 100px;
line-height: 140%;
letter-spacing: 0px;

}

.banner-subtitle {
  font-family: "Poppins-Light";
  font-size: 64px;
  font-weight: 300;
  color: var(--color-white);
  text-align: center;
}
</style>