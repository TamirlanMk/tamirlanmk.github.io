<script>
import AppButton from "../AppButton/AppButton.vue";

export default {
    name: "BestOffersCard",

    components: {
        AppButton
    },

    props: {
        offer: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div
        class="grid grid-cols-2 items-center py-5 px-6 bg-white bg-opacity-35 hover:bg-opacity-50 transition duration-300 backdrop-blur-md rounded-2xl min-w-[340px]">
        <div class="overflow-hidden flex items-center justify-center rounded-xl mr-7">
            <img src="../../assets/images/apartment-card__image.png" alt="Card image">
        </div>
        <div class="space-y-3">
            <h3 class="text-white text-[16px]">
                {{ offer.name }}
            </h3>
            <p class="text-2xl text-white">
                <img src="../../assets/images/icons/rub.png" aria-hidden="true"
                     class="inline-block mr-2 mb-1" alt> {{ offer.price }}
            </p>
            <app-button as="a">
                Подробнее
            </app-button>
        </div>
    </div>
</template>