<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopPage from './pages/topPage.vue'
import PageHeader from './UI/PageHeader.vue'
import { ref } from 'vue'

const isTopPage = ref(true)

if (location.pathname !== '/') {
  isTopPage.value = false
}

const moveToTop = () => {
  isTopPage.value = true
}

const moveToContent = () => {
  isTopPage.value = false
}
</script>

<template>
  <div :class="$style.container">
    <page-header
      @move-to-top="moveToTop()"
      @move-to-content="moveToContent()"
      :class="[$style.header, isTopPage ? $style.headerHidden : $style.headerShow]"
    />
    <top-page
      @move-to-content="moveToContent()"
      :class="[$style.topPage, isTopPage ? $style.topPageShow : $style.topPageHidden]"
    />
    <div :class="[$style.content, isTopPage ? $style.contentHidden : $style.contentShow]">
      <RouterView @move-to-top="moveToTop()" />
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
  z-index: 200;
  transition: $transition-time;
  transition-timing-function: $transition-header-ease;
}
.headerHidden {
  top: -$header-height;
}
.headerShow {
  top: 0;
}
.topPage {
  transition: $transition-time;
  transition-timing-function: $transition-content-ease;
}
.topPageShow {
  transform: scale(1);
}
.topPageHidden {
  transform: scale(0.75);
}
.content {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: $transition-time;
  transition-timing-function: $transition-content-ease;
}
.contentShow {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}
.contentHidden {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(1.5);
}
</style>
