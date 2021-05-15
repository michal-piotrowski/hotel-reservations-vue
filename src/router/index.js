import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Slider from '../components/landing-page/slider/Slider.vue';
import Booking from '../components/hotel/booking/Booking.vue';
import HotelMap from '../components/hotel/hotel-browser/hotel-map/HotelMap.vue';
import Login from '../components/profile/Login.vue';
import Profile from '../components/profile/Profile.vue';
import Tos from '../components/tos/Tos.vue';

export const names = {
  ROOT: 'root',
  RESULTS_ID: 'results_id',
  RESULTS:'results',
  LOGIN:'login',
  PROFILE:'profile',
  TOS:'tos',
}

const routes = [
  { name: names.ROOT,  path: '/', component: Slider},
  { name: names.RESULTS_ID,  path: '/results/:id', component: Booking},
  { name: names.RESULTS,  path: '/results', component: HotelMap},
  { name: names.LOGIN,  path: '/login', component: Login},
  { name: names.PROFILE,  path: '/profile', component: Profile},
  { name: names.TOS,  path: '/tos', component: Tos },
  { path: '/**', component: Slider},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;


