<script>
import { gsap } from 'gsap';
import AppTransition from './AppTransition.vue';

export default {
  name: 'SlideTransition',
  components: { AppTransition },

  props: {
    delay: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0.5,
    },
    group: {
      type: Boolean,
      default: false,
    },
    stagger: {
      type: Boolean,
      default: false,
    },
    percent: {
      type: Number,
      default: 100,
    },
    direction: {
      type: String,
      default: 'left', // support: left, right, top, bottom
    },
  },

  computed: {
    isAxisY() {
      return this.direction === 'top' || this.direction === 'bottom';
    },

    isAxisX() {
      return this.direction === 'left' || this.direction === 'right';
    },

    delayStyle() {
      return `transition-delay: ${this.delay}s`;
    },

    defaultTransformValue() {
      if (this.direction === 'left' || this.direction === 'top') {
        return `-${this.percent}`;
      }

      return this.percent;
    },

    defaultTransformStyle() {
      if (this.isAxisX) {
        return `translateX(${this.defaultTransformValue}%)`;
      }

      if (this.isAxisY) {
        return `translateY(${this.defaultTransformValue}%)`;
      }
    },
  },

  methods: {
    getDelayValue(el) {
      if (this.group && this.stagger && el.dataset.index) {
        return el.dataset.index * this.delay;
      }

      return this.delay;
    },

    onBeforeEnter(element) {
      element.style.opacity = 0;
      element.style.transform = this.defaultTransformStyle;
    },
    onEnter(element, done) {
      if (this.isAxisX) {
        gsap.to(element, {
          opacity: 1,
          translateX: 0,
          delay: this.getDelayValue(element),
          duration: this.duration,
          onComplete: done,
        });
      }

      if (this.isAxisY) {
        gsap.to(element, {
          opacity: 1,
          translateY: 0,
          delay: this.getDelayValue(element),
          duration: this.duration,
          onComplete: done,
        });
      }
    },
    onLeave(element, done) {
      if (this.isAxisX) {
        gsap.to(element, {
          opacity: 0,
          translateX: -this.percent,
          onComplete: done,
        });
      }

      if (this.isAxisY) {
        gsap.to(element, {
          opacity: 0,
          translateY: -this.percent,
          onComplete: done,
        });
      }
    },
  },
};
</script>

<template>
  <app-transition :group="group" @beforeEnter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
    <slot :style="delayStyle" />
  </app-transition>
</template>
