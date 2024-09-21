<script>
export default {
  emits: ['open'],
  props: {
    index: {
      type: Number,
      required: true,
    },
    activeIndex: {
      type: Number,
      default: false,
    },
  },
  computed: {
    active() {
      return this.index === this.activeIndex;
    },
  },
};
</script>

<template>
  <a
    @click.prevent="$emit('open', index)"
    :class="{
      'text-opacity-100': active,
      'text-opacity-50 hover:text-opacity-100': !active,
    }"
    class="mb-3 text-[10px] text-white transition sm:text-sm"
    data-cursor="true"
  >
    <slot />
  </a>
</template>
