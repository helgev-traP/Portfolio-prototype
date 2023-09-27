<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopPage from './pages/topPage.vue'
import ContentPageTest from './pages/contentPageTest.vue'
import OtherPage from './pages/otherPage.vue'
import PageHeader from './UI/PageHeader.vue'
import { ref } from 'vue'

const isTopPage = ref(true)

const moveToTop = () => {}

const moveToContent = (s) => {
  location = s
  isTopPage.value = false
  alert('flag!')
  alert(isTopPage.value)
}
</script>

<template>
  <div :class="$style.container">
    <page-header :class="$style.header" />
    <top-page
      @move-to-content="
        (n) => {
          moveToContent(n)
        }
      "
      :class="$style.topPage"
    />
    <div :class="isTopPage === true ? $style.contentHidden : $style.content">
      <RouterView />
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
}
.topPage {
  transition: all 0.3s;
}
.content {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
  transition: all 0.6s;

  display: flex;
  align-items: center;
  justify-content: center;
}
.contentHidden {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(1.33);
  transition: all 0.6s;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
