import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Slider from '../components/landing-page/slider/Slider.vue';
import Booking from '../components/hotel/booking/Booking.vue';
import HotelMap from '../components/hotel/hotel-browser/hotel-map/HotelMap.vue';
import Login from '../components/profile/Login.vue';
import Profile from '../components/profile/Profile.vue';
import Tos from '../components/tos/Tos.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Slider},
  { path: '/results/:id', component: Booking},
  { path: '/results', component: HotelMap},
  { path: '/login', component: Login},
  { path: '/profile', component: Profile},
  { path: '/tos', component: Tos },
  { path: '/**', component: Slider},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
