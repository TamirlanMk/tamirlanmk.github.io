<script>
import AppButton from '../AppButton/AppButton.vue';
import BestOffersCard from './BestOffersCard.vue';
import { offers as offersStore } from '../../store/projectsStore.js';
import { gsap } from 'gsap';

export default {
  name: 'BestOffers',

  components: {
    AppButton,
    BestOffersCard,
  },

  data() {
    return {
      bestOffers: { ...offersStore.bestOffers },
    };
  },
};
</script>

<template>
  <div class="!mt-28">
    <h2 class="text-xl text-white sm:text-2xl">Лучшие предложения</h2>

    <div class="mt-8 flex items-center justify-start gap-x-8">
      <transition-group appear @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
        <best-offers-card v-for="(offer, index) in bestOffers" :data-index="index" :key="offer.id" :offer="offer" />
      </transition-group>
    </div>
  </div>
</template>
