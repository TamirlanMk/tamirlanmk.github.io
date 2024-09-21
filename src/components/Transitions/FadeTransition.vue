<script>
import {gsap} from "gsap";
import AppTransition from "./AppTransition.vue";

export default {
    name: "FadeTransition",
    components: {AppTransition},

    props: {
        delay: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: 0.5
        },
        group: {
            type: Boolean,
            default: false
        },
        stagger: {
            type: Boolean,
            default: false
        },
        percent: {
            type: Number,
            default: 100
        }
    },

    computed: {
        delayStyle() {
            return `transition-delay: ${this.delay}s`
        },
    },

    methods: {
        getDelayValue(el) {
            if (this.group && this.stagger && el.dataset.index) {
                return (el.dataset.index) * this.delay
            }

            return this.delay;
        },

        onBeforeEnter(element) {
            element.style.opacity = 0;
        },
        onEnter(element, done) {
            gsap.to(element, {
                opacity: 1,
                delay: this.getDelayValue(element),
                duration: this.duration,
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
    <app-transition
        :group="group"
        @beforeEnter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
    >
        <slot :style="delayStyle"/>
    </app-transition>
</template>