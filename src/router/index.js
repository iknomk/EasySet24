import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import LoginError from "../pages/LoginPageError.vue";
import LandingPage from "@/pages/LandingPage.vue";
import LandingPageHotel from "@/pages/LandingPageHotel.vue"


const routes = [
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/login-error", component: LoginError },
  { path: "/", component: LandingPage },
  { path: "/hotel", component: LandingPageHotel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
