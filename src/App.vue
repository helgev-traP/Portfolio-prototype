<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopPage from './pages/topPage.vue'
import ContentPageTest from './pages/contentPageTest.vue'
import PageHeader from './UI/PageHeader.vue'
import { ref } from 'vue';

const isTopPage = ref(true)

</script>

<template>
  <div :class="$style.container">
    <page-header :class="$style.header" />
    <top-page :class="$style.topPage"/>
    <div :class="$style.content" id="test">
      <content-page-test />
    </div>
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
.topPage{
  transition: all 0.3s;
}
.content {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(1.33);
  transition: all 0.6s;

  display: flex;
  align-items: center;
  justify-content: center;
  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
  }
}
</style>
