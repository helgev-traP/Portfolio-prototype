<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.topPageContents">ここはトップページのコンテンツ</div>
  </div>
</template>

<style lang="scss" module>
.container {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
.topPageContents {
  padding: 100px;
  border-radius: 50px;

  box-shadow:
    5px 5px 10px rgba(0, 0, 0, 0.1),
    -5px -5px 10px rgba(255,255,255,0.5);
}
</style>
