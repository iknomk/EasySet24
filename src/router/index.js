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
import HotelInformationPage2 from "@/pages/HotelInformation/HotelInformationPage2.vue";
import HotelReservationPage from "@/pages/HotelReservationPage.vue";
import FlightSearch from "@/pages/Flight/FlightSearch.vue";
import FlightSearchResult from "@/pages/Flight/FlightSearchResult.vue";
import FlightFavourite from "@/pages/Flight/FlightFavourite.vue";
import FlightPurchase from "@/pages/Flight/FlightPurchase.vue";
import FlightDetails from "@/pages/Flight/FlightDetails.vue";
import { compile } from "vue";
import FlightPayment from "../pages/Flight/FlightPayment.vue";
import FlightPaymentError from "@/pages/Flight/FlightPaymentError.vue";
import FlightTicket from "@/pages/Flight/FlightTicket.vue";
import CustomerService from "@/pages/CustomerService.vue";
import AboutUs from "@/pages/AboutUs.vue";
import CustomerProfile from "@/pages/CustomerProfile.vue";

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
  { path: "/information", component: HotelInformationPage1},
  { path: "/booking", component: HotelInformationPage2},
  { path: "/reservation", component: HotelReservationPage},
  { path: "/flight/search", component: FlightSearch},
  { path: "/flight/result", component: FlightSearchResult},
  { path: "/flight/favourites", component: FlightFavourite},
  { path: "/flight/purchase", component: FlightPurchase},
  { path: "/flight/details", component: FlightDetails},
  { path: "/flight/payment", component: FlightPayment},
  { path: "/flight/payment-error", component: FlightPaymentError},
  { path: "/flight/ticket", component: FlightTicket},
  { path: "/contact", component: CustomerService},
  { path: "/about-us", component: AboutUs},
  { path: "/customer/profile", component: CustomerProfile}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
