<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const emit = defineEmits(['moveToContent'])
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.topPageContents">
      <div>ここはトップページのコンテンツ</div>
      <button @click="emit('moveToContent', '/test')">テスト1ヘ</button>
      <button @click="emit('moveToContent', '/other')">テスト2ヘ</button>
    </div>
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
    -5px -5px 10px rgba(255, 255, 255, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  border: none;
  border-radius: 1rem;
  background-color: $color-background;
  padding: 1rem;
  margin: 1rem;
  box-shadow:
    inset 5px 5px 10px rgba(0, 0, 0, 0.1),
    inset -5px -5px 10px rgba(255, 255, 255, 0.5);
  cursor: pointer;
}
</style>
