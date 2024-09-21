<script>
import SlideTransition from '../Transitions/SlideTransition.vue';

export default {
  components: { SlideTransition },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <button class="z-100 relative h-8 w-8">
    <span
      class="absolute left-0 top-2 h-1 w-full rounded bg-white transition"
      :class="{
        'top-4 rotate-45': active,
      }"
    />
    <slide-transition :percent="60" direction="left">
      <span v-if="!active" class="absolute left-1 top-1/2 h-1 w-full -translate-x-1/2 rounded bg-white bg-opacity-65" />
    </slide-transition>
    <span
      class="absolute bottom-1 left-0 h-1 w-full rounded bg-white transition"
      :class="{
        'top-4 -rotate-45': active,
      }"
    />
  </button>
</template>
