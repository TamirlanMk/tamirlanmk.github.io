<script>
import MenuBurger from './MenuBurger.vue';
import { mainMenu } from '../../store/mainMenu.js';

export default {
  components: { MenuBurger },
  data() {
    return {
      active: false,
    };
  },
  setup() {
    return {
      menu: mainMenu,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.active = !this.active;
    },
  },
};
</script>

<template>
  <nav class="header__menu -mt-2 font-secondary">
    <div
      class="overlay absolute bottom-0 left-0 right-0 top-0 block md:hidden"
      @click="active ? toggleMobileMenu() : ''"
      v-if="active"
    ></div>
    <ul
      class="absolute bottom-0 right-0 top-0 flex w-full max-w-60 translate-x-full flex-col items-end gap-5 bg-dark p-8 pt-20 transition-transform md:relative md:max-w-none md:translate-x-0 md:flex-row md:items-center md:gap-5 md:bg-transparent md:p-0 md:pt-0 md:text-left lg:gap-10"
      :class="{
        '!translate-x-0': active,
      }"
    >
      <li v-for="link in menu">
        <router-link
          :to="link.url"
          class="menu__link text-xl text-white md:text-sm"
          data-cursor="true"
          @click="active ? toggleMobileMenu() : ''"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>

    <menu-burger class="block md:hidden" @click="toggleMobileMenu" :active="active" />
  </nav>
</template>

<style scoped>
.menu__link {
  position: relative;
}

.menu__link::after {
  content: '';
  position: absolute;
  background: #000;
  width: 0;
  height: calc(100% + 6px);
  top: -3px;
  left: -7px;
  z-index: -1;
  bottom: 0;

  -webkit-transform: translatez(0);
  -moz-transform: translatez(0);
  transform: translatez(0);

  transition-property: width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.menu__link:hover::after {
  width: calc(100% + 14px);
}

.router-link-active.menu__link::after {
  width: calc(100% + 14px);
}
</style>
