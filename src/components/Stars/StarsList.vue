<script>
import {gsap} from "gsap";
import SlideTransition from "../Transitions/SlideTransition.vue";

export default {
    name: "StarsList",
    components: {SlideTransition},

    props: {
        count: {
            type: Number,
            required: true
        }
    },

    methods: {
        onBeforeEnter(element) {
            element.style.opacity = 0;
            element.style.transform = 'translateX(100%)'
        },
        onEnter(element, done) {
            gsap.to(element, {
                opacity: 1,
                translateX: 0,
                delay: element.dataset.index / 7,
                onComplete: done,
            });
        },
        onLeave(element, done) {
            gsap.to(element, {
                opacity: 0,
                onComplete: done,
            });
        },
    }
}
</script>

<template>
    <div class="flex gap-x-5 flex-row">
        <slide-transition appear :group="true" :stagger="true" :delay="0.1" direction="top">
            <img v-for="index in count"
                 :key="index"
                 :data-index="index"
                 src="../../assets/images/icons/star.png"
                 aria-hidden="true" alt>
        </slide-transition>
    </div>
</template>
