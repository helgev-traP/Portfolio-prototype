<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopPage from './TopPage/TopPage.vue'
import PageHeader from './UI/PageHeader.vue'
import ContentField from './UI/ContentField.vue'
import { ref } from 'vue'
import router from './router';

const isTopPage = ref(true)

if (location.pathname !== '/') {
  isTopPage.value = false
}

const moveToTop = () => {
  isTopPage.value = true
  setTimeout(() => {
    if (isTopPage.value == true) { router.push('/') }
  }, 1500)
}

const moveToContent = () => {
  isTopPage.value = false
}
</script>

<template>
  <div :class="$style.container">
    <page-header @move-to-top="moveToTop()" @move-to-content="moveToContent()"
      :class="[$style.header, isTopPage ? $style.headerHidden : $style.headerShow]" />
    <top-page @move-to-content="moveToContent()"
      :class="[$style.topPage, isTopPage ? $style.topPageShow : $style.topPageHidden]" />
    <div :class="[$style.content, isTopPage ? $style.contentHidden : $style.contentShow]">
      <ContentField>
        <RouterView @move-to-top="moveToTop()" />
      </ContentField>
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
</style>
