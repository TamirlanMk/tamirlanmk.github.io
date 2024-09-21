<script setup>
import AppTabs from '../../../components/Tabs/AppTabs.vue';
import TabContent from '../../../components/Tabs/TabContent.vue';
import SlideTransition from '../../../components/Transitions/SlideTransition.vue';
import TabLink from '../../../components/Tabs/TabLink.vue';
import SkillCard from '../../../components/Skills/SkillCard.vue';
</script>

<template>
  <div class="flex min-h-32 flex-col-reverse items-end justify-center gap-x-8 gap-y-4 sm:flex-row">
    <slide-transition appear :delay="0.1" :group="true" :stagger="true" direction="bottom">
      <skill-card class="w-full flex-col sm:w-2/3">
        <app-tabs class="pl-5 text-[11px] sm:pl-9 sm:text-[13px]" :defaultTab="1">
          <template v-slot:links="{ handler, activeIndex }">
            <tab-link :index="1" :activeIndex="activeIndex" @open="handler">Образование</tab-link>
            <tab-link :index="2" :activeIndex="activeIndex" @open="handler">Опыт работы</tab-link>
          </template>
          <template v-slot:tabs="{ activeIndex }">
            <slide-transition mode="out-in" direction="bottom">
              <tab-content v-if="activeIndex === 1" :index="1">
                <ul class="space-y-1 font-secondary text-white">
                  <li class="flex-center flex opacity-65">
                    КПВК, Вычислительная техника и программное обеспечение, техник-программист (2022)
                  </li>
                  <li class="flex-center flex opacity-65">
                    КРУ им. А. Байтурсынова, Информационные технологии и робототехника, бакалавриат (2024)
                  </li>
                  <li class="flex-center relative flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute -left-9 -top-1 mr-3 animate-pulse text-gray-500"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m5 7l5 5l-5 5m8 0h6" />
                    </svg>
                    КРУ им. А. Байтурсынова, Информационные системы, магистратура, 1 курс (сейчас)
                  </li>
                </ul>
              </tab-content>
              <tab-content v-if="activeIndex === 2" :index="2">
                <ul class="space-y-1 font-secondary text-white">
                  <li>
                    <h4 class="flex-center relative flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute -left-9 -top-1 mr-3 animate-pulse text-gray-500"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                      >
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m5 7l5 5l-5 5m8 0h6" />
                      </svg>
                      Фриланс
                    </h4>

                    <p class="block text-gray-400 !text-opacity-100">
                      Верстка лендингов, многостраничных сайтов. Разработка веб приложений на Laravel, WordPress.
                    </p>
                  </li>
                </ul>
              </tab-content>
            </slide-transition>
          </template>
        </app-tabs>
      </skill-card>
      <skill-card class="w-full flex-col items-center sm:w-auto sm:items-start">
        <div class="grid grid-cols-4 grid-rows-1 items-center justify-center gap-2 sm:grid-cols-2 sm:grid-rows-2">
          <div class="h-10 w-10 rounded-md bg-dark p-2 transition duration-1000 hover:scale-[120%]" data-cursor="true">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
              class="h-full w-full max-w-full"
              alt="Laravel"
            />
          </div>
          <div class="h-10 w-10 rounded-md bg-dark p-2 transition duration-1000 hover:scale-[120%]" data-cursor="true">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
              class="h-full w-full max-w-full"
              alt="HTML5"
            />
          </div>
          <div class="h-10 w-10 rounded-md bg-dark p-2 transition duration-1000 hover:scale-[120%]" data-cursor="true">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
              class="h-full w-full max-w-full"
              alt="JavaScript"
            />
          </div>
          <slide-transition appear :delay="0.4" direction="left">
            <router-link
              to="/portfolio"
              class="flex h-10 w-10 flex-row items-center justify-center rounded-md bg-dark p-2 text-[#ff9] hover:scale-[120%]"
              data-cursor="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 15 15">
                <path
                  fill="currentColor"
                  d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                  class="h-full w-full max-w-full"
                />
              </svg>
            </router-link>
          </slide-transition>
        </div>
      </skill-card>
    </slide-transition>
  </div>
</template>
