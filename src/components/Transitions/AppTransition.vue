<script>
export default {
    name: "AppTransition",

    props: {
        group: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <transition v-if="!group">
        <slot/>
    </transition>

    <transition-group v-else>
        <slot/>
    </transition-group>
</template>