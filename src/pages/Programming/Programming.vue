<script setup lang="ts">
import Page from '@/UI/ContentPage.vue'
</script>

<template>
  <div :class="$style.container">
    <Page title="Programming"></Page>
  </div>
</template>

<style lang="scss" module>
.container {
  width: 100%;
  height: fit-content;
}
</style>