<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopPage from './pages/topPage.vue'
import PageHeader from './UI/PageHeader.vue'
</script>

<template>
  <div :class="$style.container">
    <header :class="$style.header">
      <page-header />
    </header>
    <top-page />
  </div>
</template>

<style lang="scss" module>
.container{
  display: grid;
  grid-template-rows: min-content 1fr;
  background-color: $color-background;

}
.header{
  grid-row: 1;
}
</style>
