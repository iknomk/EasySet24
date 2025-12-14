import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import LoginError from "../pages/LoginPageError.vue";
import LandingPage from "@/pages/LandingPage.vue";
import LandingPageHotel from "@/pages/LandingPageHotel.vue"
import HotelSearchResult from "@/pages/HotelSearchResult.vue";
import Error404Page from "@/pages/Error404Page.vue";
import HotelFavouriteList from "@/pages/HotelFavouriteList.vue";
import FoolyBooked from "@/pages/FoolyBooked.vue";
import HotelInformationPage1 from "@/pages/HotelInformation/HotelInformationPage1.vue";
import { compile } from "vue";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/login-error", component: LoginError },
  { path: "/", component: LandingPage },
  { path: "/hotel", component: LandingPageHotel },
  { path: "/hotel/search", component: HotelSearchResult },
  { path: "/error", component: Error404Page },
  { path: "/favourites", component: HotelFavouriteList },
  { path: "/booked", component: FoolyBooked},
  {path: "/information", component: HotelInformationPage1}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
