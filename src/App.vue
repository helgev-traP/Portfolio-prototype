<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopPage from './pages/TopPage.vue'
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
      <div :class="$style.contentPage">
        <RouterView @move-to-top="moveToTop()" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  width: 100vw;
  height: 100vh;
  transform: scale(1);
}
//Header
.header {
  position: fixed;
  z-index: 200;
  transition: $transition-time;
  transition-timing-function: $transition-header-ease;
}
.headerHidden {
  opacity: 0;
  top: -$header-height;
}
.headerShow {
  opacity: 1;
  top: 0;
}
//TopPage
.topPage {
  transition: $transition-time;
  transition-timing-function: $transition-content-ease;
}
.topPageShow {
  transform: scale(1);
  filter: brightness(1);
}
.topPageHidden {
  transform: scale(0.75);
  filter: brightness(2);
}
//Content
.content {
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
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
  backdrop-filter: blur(20px);
}
.contentHidden {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(1.5);
  backdrop-filter: blur(0px);
}
.contentPage {
  width: 80vw;
  height: calc(90vh - $header-height);

  position: relative;
  top: calc($header-height / 2);

  padding: 40px;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  border: 1px solid $color-glass-modal-edge;
  border-radius: 25px;

  background-color: $color-glass-modal;
  backdrop-filter: blur(20px);
}
.contentPage::-webkit-scrollbar {
  display: none;
}
</style>
