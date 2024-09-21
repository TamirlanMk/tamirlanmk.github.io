<script>
import SlideTransition from '../Transitions/SlideTransition.vue';

export default {
  components: { SlideTransition },
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <slot />
  </div>
</template>
