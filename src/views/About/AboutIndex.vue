<script>
import SlideTransition from '../../components/Transitions/SlideTransition.vue';

export default {
  name: 'AttractionsIndex',
  components: { SlideTransition },
};
</script>

<template>
  <div class="container">
    <router-link
      to="/"
      class="mt-10 inline-flex flex-row items-center text-sm text-white text-opacity-70 transition-colors hover:text-opacity-100"
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
    <h2 class="mt-10 text-[48px] font-bold leading-[1.4em] text-white">Обо мне</h2>
    <div class="mt-8 grid grid-cols-1 items-start gap-6 pb-5 sm:grid-cols-2">
      <div class="space-y-6 sm:pr-10">
        <slide-transition appear :delay="0.2" :group="true" :stagger="true" direction="top">
          <p class="font-secondary text-sm text-white" data-index="1">
            Меня зовут <strong>Тамирлан</strong>, я начинающий веб разработчик. Специализируюсь на верстке, и разработке сайтов на Laravel и
            WordPress.
          </p>
          <p class="font-secondary text-sm text-white" data-index="1">
            Я всегда открыт для новых знаний и активно совершенствую свои навыки в области веб-разработки. Сейчас я изучаю JavaScript и Vue
            3, чтобы расширить свои знания.
          </p>

          <h3 class="text-2xl font-medium text-white" data-index="2">Образование</h3>
          <p class="!mt-5 font-secondary text-sm text-white" data-index="2">
            На данный момент я учусь на магистратуре, в КГУ им. Ахмета Байтурсынова. На первом курсе, на кафедре Информационных систем.
          </p>

          <ul class="list !mt-5 space-y-4 font-secondary text-sm text-white" data-index="2">
            <li>КПВК, Вычислительная техника и программное обеспечение, техник-программист (2022)</li>
            <li>КРУ им. А. Байтурсынова, Информационные технологии и робототехника, бакалавриат (2024)</li>
          </ul>

          <h3 class="text-2xl font-medium text-white" data-index="3">Опыт работы</h3>

          <ul class="list !mt-5 space-y-4 font-secondary text-sm text-white" data-index="3">
            <li>Разработал дипломный проект на Laravel 9 + Bootstrap + AdminLTE3</li>
            <li>В 2023 году проходил практику в CleverCRM, во время которой было выполнено 7 версток</li>
            <li>
              Разработал парсер для обработки заказов с Kaspi, который автоматически выгружает данные в Google Sheets с использованием
              Laravel.
            </li>
            <li>
              Разработка полнофункциональной платформы для онлайн-курсов. Реализованы функции создания курсов, модулей и уроков, а также
              управление группами пользователей. Автоматизировано добавление пользователей в группы и генерация документов.
            </li>
          </ul>
        </slide-transition>
      </div>
      <div class="flex items-start justify-end">
        <slide-transition appear :delay="0.4" :group="true" :stagger="true" direction="right" :percent="40">
          <img
            class="mx-auto max-w-full self-end shadow shadow-[#ffd452] sm:max-w-[70%]"
            src="../../assets/images/photo-3.jpg"
            data-index="1"
            alt
          />
        </slide-transition>
      </div>
    </div>
  </div>
</template>
