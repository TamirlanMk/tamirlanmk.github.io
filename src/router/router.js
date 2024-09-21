import { createRouter, createWebHistory } from 'vue-router';

import HomeIndex from '../views/Home/HomeIndex.vue';
import RoomsIndex from '../views/Portfolio/PortfolioIndex.vue';
import ContactsIndex from '../views/Contacts/ContactsIndex.vue';
import AttractionsIndex from '../views/About/AboutIndex.vue';

const basePath = '/test';

const routes = [
  { name: 'home', path: `${basePath}/`, component: HomeIndex },
  { name: 'portfolio', path: `${basePath}/portfolio`, component: RoomsIndex },
  { path: `${basePath}/about-me`, component: AttractionsIndex },
  { name: 'contacts', path: `${basePath}/contacts`, component: ContactsIndex },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
