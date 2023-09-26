<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopPage from './pages/topPage.vue'
import PageHeader from './UI/PageHeader.vue'
</script>

<template>
  <div :class="$style.container">
    <page-header :class="$style.header" />
    <top-page />
  </div>
</template>

<style lang="scss" module>
.container {
  width: 100%;
  height: 100%;
}
.header {
  position: fixed;
  width: 100%;
}
</style>
