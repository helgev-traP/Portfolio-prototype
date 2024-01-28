<script setup lang="ts">
import { RouterLink } from 'vue-router'
const emit = defineEmits(['moveToContent'])
</script>

<template>
  <div :class="$style.container">
    <RouterLink @click="emit('moveToContent')" to="/about"> go about </RouterLink>
  </div>
</template>

<style lang="scss" module>
.container{
  width: 100%;
  height: 100%;
}
</style>
