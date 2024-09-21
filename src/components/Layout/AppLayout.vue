<script>
import AppHeader from './AppHeader.vue';
import { gsap } from 'gsap';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import FadeTransition from '../Transitions/FadeTransition.vue';
import AppCursor from '../Cursor/AppCursor.vue';

export default {
  components: {
    AppCursor,
    FadeTransition,
    AppHeader,
  },

  setup() {
    const router = useRouter();
    const currentRouteName = computed(() => router.currentRoute.value.name);
    return { currentRouteName };
  },

  computed: {
    overflow() {
      const currentRoute = this.$route.name ?? '';
      const routes = ['home', 'portfolio', 'contacts'];

      return routes.some((route) => route === currentRoute);
    },
  },

  methods: {
    onBeforeEnter(el) {
      el.style.opacity = '0%';
      el.style.transform = 'translateY(-100%)';
    },

    onEnter(el, done) {
      const tl = gsap.timeline();

      tl.to(el, {
        translateY: 0,
      }).to(
        el,
        {
          autoAlpha: 1,
          delay: 0.3,
          onComplete: done,
        },
        '<',
      );
    },

    onLeave(el, done) {
      gsap.to(el, {
        autoAlpha: 0,
        translateY: 100,
        onComplete: done,
      });
    },
  },
};
</script>

<template>
  <div
    id="site"
    ref="siteContainer"
    class="site-container overflow-x-hidden will-change-transform"
    :class="{
      '!overflow-y-hidden': overflow,
      'overflow-y-scroll': !overflow,
    }"
  >
    <div class="site-content relative flex flex-col">
      <app-header class="z-[11] h-auto" />

      <main class="main absolute bottom-0 left-0 right-0 top-14 z-10 pb-10 sm:top-20">
        <router-view v-slot="{ Component }">
          <transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" mode="out-in">
            <component :is="Component" class="h-full" />
          </transition>
        </router-view>
      </main>
    </div>

    <div class="bg-gradient animate-pulse"></div>

    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>

  <app-cursor class="hidden motion-reduce:hidden md:block" />
</template>

<style>
#site {
  --bg: #0e0e0e;
  position: relative;
  background: var(--bg);
  background-attachment: fixed;
  background-position: center;
  -webkit-background-size: cover;
  background-size: cover;
  transition: background 0.2s ease;
}

.bg-gradient {
  position: absolute;
  left: 50%;
  top: 100%;
  border-radius: 50vw;
  z-index: -1;
  filter: blur(140px);
  width: 500px;
  aspect-ratio: 1/1;
  animation-duration: 10s;
  background: #544a7d; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ffd452, #544a7d); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ffd452, #544a7d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  transform: translateX(-50%) translateY(-50%);
}

.site-content {
  min-height: 100svh;
}

.main {
  min-height: calc(100svh - 162px);
}

.lines {
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.lines .line {
  width: 1px;
  height: 100%;
  background: rgba(245, 245, 245, 0.03);
}

@media (prefers-reduced-motion: no-preference) {
  @media (min-width: 728px) {
    a,
    #site,
    button {
      cursor: none;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  a,
  #site,
  button {
    cursor: default;
  }
}
</style>
