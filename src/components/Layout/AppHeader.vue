<script>
import AppButton from '../AppButton/AppButton.vue';
import AppMenu from '../Menu/AppMenu.vue';

export default {
  components: {
    AppMenu,
    AppButton,
  },

  data() {
    return {
      show: false,
    };
  },

  mounted() {
    this.show = true;
  },
};
</script>

<template>
  <transition
    enter-active-class="transition duration-300"
    :delay="1000"
    enter-from-class="transform -translate-y-10 opacity-0 scale-90"
    enter-to-class="transform translate-y-0 opacity-100 scale-100"
  >
    <header v-if="show" id="header" class="header pb-3 pt-5 sm:pb-6 sm:pt-6">
      <div class="container mx-auto flex items-center justify-between">
        <div class="w-40">
          <router-link to="/" class="flex items-center gap-x-6 text-xl uppercase text-white"> Портфолио </router-link>
        </div>

        <app-menu />

        <div class="hidden w-20 items-center justify-end gap-x-10 md:flex lg:w-40">
          <div class="flex items-center gap-x-4">
            <a href="https://t.me/tamirlanmk" target="_blank" class="group text-white" data-cursor="true">
              <span class="sr-only">Telegram</span>
              <svg
                class="scale-75 transition duration-500 group-hover:scale-100"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5534 5.45576L3.91335 14.5718C2.30001 15.2198 2.30935 16.1198 3.61735 16.5211L9.68668 18.4144L23.7293 9.55443C24.3933 9.15043 25 9.36776 24.5013 9.81043L13.124 20.0784H13.1213L13.124 20.0798L12.7053 26.3358C13.3187 26.3358 13.5893 26.0544 13.9333 25.7224L16.8813 22.8558L23.0133 27.3851C24.144 28.0078 24.956 27.6878 25.2373 26.3384L29.2627 7.36776C29.6747 5.71576 28.632 4.96776 27.5534 5.45576Z"
                />
              </svg>
            </a>
            <a href="https://github.com/TamirlanMk" target="_blank" class="group text-white" data-cursor="true">
              <span class="sr-only">GitHub</span>
              <svg
                class="scale-75 transition duration-500 group-hover:scale-100"
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  </transition>
</template>

<style scoped>
.header {
  border-bottom: 1px solid rgba(245, 245, 245, 0.06);
}
</style>
