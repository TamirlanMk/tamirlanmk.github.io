<script>
import SlideTransition from '../../components/Transitions/SlideTransition.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import AppButton from '../../components/AppButton/AppButton.vue';
import 'swiper/css';
import { projectsStore } from '../../store/projectsStore.js';

export default {
  name: 'RoomsIndex',
  components: {
    AppButton,
    Swiper,
    SwiperSlide,
    SlideTransition,
  },
  setup() {
    const projects = [...projectsStore.projects];

    return {
      projects,
    };
  },
  sliderBreakpoints: {
    576: { slidesPerView: 1 },
    756: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  },
};
</script>

<template>
  <div class="container">
    <router-link
      to="/"
      class="mt-10 inline-flex flex-row items-center text-sm text-white text-opacity-70 transition-colors hover:text-opacity-100"
      data-cursor="true"
    >
      Назад
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="1.2rem" height="1.2rem" viewBox="0 0 48 48">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
          <path d="m13 8l-7 6l7 7" />
          <path d="M6 14h22.994c6.883 0 12.728 5.62 12.996 12.5c.284 7.27-5.723 13.5-12.996 13.5H11.998" />
        </g>
      </svg>
    </router-link>
    <h2 class="mt-10 text-[48px] font-bold leading-[1.4em] text-white">Портфолио</h2>
    <div class="mt-8">
      <swiper class="ps-10" :centered="true" :space-between="50" :breakpoints="$options.sliderBreakpoints">
        <swiper-slide v-for="project in projects" class="max-w-full">
          <div class="rounded-3xl bg-white bg-opacity-35 p-5 backdrop-blur-md transition duration-300 hover:bg-opacity-50">
            <div class="flex items-center justify-center overflow-hidden rounded-[8px]">
              <img :src="project.thumbnail" class="block aspect-video w-full object-cover" alt="Card image" />
            </div>
            <div class="space-x-1 space-y-2">
              <p v-for="tag in project.tags" class="mt-5 inline-block rounded-lg bg-primary px-3 py-2 text-xs text-white">{{ tag }}</p>
            </div>
            <h3 v-if="!project?.url" class="mt-3 text-xl text-white">{{ project.name }}</h3>
            <a v-else :href="project?.url" target="_blank" class="mt-3 inline-block text-xl text-white" data-cursor="true">
              {{ project.name }}
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  overflow: visible;
}

.swiper-slide {
  scale: 90%;
  opacity: 40%;
  transition:
    opacity 0.5s ease,
    scale 0.5s ease;
}

.swiper-slide.swiper-slide-active,
.swiper-slide.swiper-slide-next,
.swiper-slide.swiper-slide-next + .swiper-slide {
  scale: 100%;
  opacity: 100%;
}
</style>
