<script>
import SlideTransition from '../../components/Transitions/SlideTransition.vue';

export default {
  name: 'Contacts',
  components: { SlideTransition },
};
</script>

<template>
  <div class="container">
    <router-link
      to="/"
      class="mt-10 inline-flex cursor-pointer flex-row items-center text-sm text-white text-opacity-70 transition-colors hover:text-opacity-100"
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
    <h2 class="mt-10 text-[48px] font-bold leading-[1.4em] text-white">Контакты</h2>
    <div class="mt-8 grid grid-cols-1 gap-6">
      <div class="flex flex-col justify-start gap-4 sm:flex-row sm:gap-20 sm:pr-10">
        <slide-transition appear :delay="0.2" :group="true" :stagger="true" direction="top">
          <div>
            <h3 class="fill-white text-2xl font-medium text-white" data-index="1">Связаться со мной</h3>
            <ul class="list !mt-5 space-y-4 font-secondary text-base text-white" data-index="1">
              <li class="flex items-center gap-x-2">
                <img src="../../assets/images/icons/telegram.svg" class="h-5 w-5" aria-hidden="false" alt />
                <a href="https://t.me/tamirlanmk" target="_blank" class="font-secondary text-[15px] text-white" data-cursor="true">
                  @tamirlanmk
                </a>
              </li>
              <li class="flex items-center gap-x-2">
                <img src="../../assets/images/icons/github.svg" class="h-5 w-5" aria-hidden="false" alt />
                <a href="https://github.com/TamirlanMk" target="_blank" class="font-secondary text-[15px] text-white" data-cursor="true">
                  TamirlanMk
                </a>
              </li>
              <li><a href="tel:7(705)114-50-94">7 (705) 114-50-94</a></li>
              <li><a href="mailto:tamirlanmk@mail.ru">tamirlanmk@mail.ru</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-medium text-white" data-index="3">Местонахождение:</h3>
            <ul class="list !mt-5 space-y-4 font-secondary text-base text-white" data-index="3">
              <li>Казахстан, г.Костанай</li>
            </ul>
          </div>
        </slide-transition>
      </div>
    </div>
  </div>
</template>
