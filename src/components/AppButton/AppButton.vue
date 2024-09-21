<script>
export default {
  name: 'AppButton',

  props: {
    size: {
      type: String,
      default: 'sm', // sm/md
    },
    variant: {
      type: String,
      default: 'primary', // primary/white
    },
    as: {
      type: String,
      default: 'button',
    },
  },

  computed: {
    computedClasses() {
      return {
        'py-2 px-4 sm:py-3 sm:px-5 text-[13px] rounded-lg font-normal': this.size === 'sm',
        'py-3 px-5 sm:py-4 sm:px-6 text-[18px] rounded-lg font-normal': this.size === 'md',
        'bg-white text-dark hover:bg-primary-dark hover:text-white': this.variant === 'white',
        'bg-primary text-white hover:bg-primary-dark hover:text-white': this.variant === 'primary',
      };
    },
  },
};
</script>

<template>
  <component :is="as" :class="computedClasses" class="inline-block leading-[1.4em] transition-colors duration-200" data-cursor="true">
    <slot />
  </component>
</template>
