<script setup lang="ts">

interface props {
    heading: String
}

defineProps<props>()

</script>

<template>
    <div :class="$style.heading">
        {{ heading }}
    </div>
    <slot></slot>
</template>

<style lang="scss" module>
.heading {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
}
</style>