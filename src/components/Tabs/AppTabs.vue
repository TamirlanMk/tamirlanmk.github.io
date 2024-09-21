<script>
import SlideTransition from '../Transitions/SlideTransition.vue';

export default {
  components: { SlideTransition },
  emits: ['click'],
  props: {
    defaultTab: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: this.defaultTab,
    };
  },
  methods: {
    handler(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<template>
  <div>
    <div class="flex flex-row items-center justify-start gap-x-2 sm:gap-x-5">
      <slot name="links" :handler="handler" :activeIndex="activeIndex" />
    </div>
    <div class="h-20 overflow-y-scroll sm:h-auto sm:overflow-hidden">
      <slot name="tabs" :activeIndex="activeIndex" />
    </div>
  </div>
</template>
