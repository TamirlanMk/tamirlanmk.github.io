<script>
import SlideTransition from '../../components/Transitions/SlideTransition.vue';
import HomeCards from './Partials/HomeCards.vue';

export default {
  name: 'HomeIndex',
  components: {
    HomeCards,
    SlideTransition,
  },
};
</script>

<template>
  <div class="xl:pt-42 container absolute bottom-0 left-0 right-0 top-0 flex flex-col pb-4 pt-[15vh] md:pt-[15vh] lg:pt-[25vh] 2xl:!pb-16">
    <div class="relative text-center">
      <slide-transition appear :delay="0.1" :group="true" :stagger="true" direction="top">
        <h1
          class="hero__title select-none space-x-6 text-[50px] leading-[1.4em] tracking-wide text-white sm:text-5xl md:text-7xl"
          data-cursor="true"
          data-index="1"
        >
          Мукашев Тамирлан
        </h1>

        <p class="mt-6 font-secondary font-normal uppercase text-white" data-index="2">WEB разработчик</p>
      </slide-transition>
    </div>

    <home-cards class="mt-auto" />
  </div>
</template>

<style scoped>
.bg-gradient {
  position: absolute;
  left: 50%;
  bottom: -50%;
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

.hero__title {
  text-shadow: -5px 5px 0px rgba(223, 223, 223, 0.3);
}

.ball-1 {
  animation: ease-in-out ball-1 25s infinite;
}

.ball-2 {
  animation: ease-in-out ball-2 20s infinite;
}

.ball-3 {
  animation: ease-in-out ball-3 15s infinite;
}

@keyframes ball-1 {
  0% {
    transform: translateY(0px) translate(0px);
  }
  60% {
    transform: translateY(-50px) translate(-20px);
  }
  100% {
    transform: translateY(0px) translate(0px);
  }
}

@keyframes ball-2 {
  0% {
    transform: translateY(0px) translate(0px);
  }
  60% {
    transform: translateY(-10px) translate(20px);
  }
  100% {
    transform: translateY(0px) translate(0px);
  }
}

@keyframes ball-3 {
  0% {
    transform: translateY(0px) translate(0px);
  }
  60% {
    transform: translateY(10px) translate(20px);
  }
  100% {
    transform: translateY(0px) translate(0px);
  }
}
</style>
