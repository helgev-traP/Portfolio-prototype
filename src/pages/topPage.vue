<script setup lang="ts">
import { RouterLink} from 'vue-router'
const emit = defineEmits(['moveToContent'])
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.topPageContents">
      <div>ここはトップページのコンテンツ</div>
      <RouterLink :class="$style.routerLink" @click="emit('moveToContent')" to="/test"
        >テスト1ヘ</RouterLink
      >
      <RouterLink :class="$style.routerLink" @click="emit('moveToContent')" to="/other"
        >テスト2ヘ</RouterLink
      >
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
.routerLink {
  border: none;
  border-radius: 1rem;
  background-color: $color-background;
  padding: 1rem;
  margin: 1rem;
  text-decoration: none;
  color: $color-text;
  box-shadow:
    inset 5px 5px 10px rgba(0, 0, 0, 0.1),
    inset -5px -5px 10px rgba(255, 255, 255, 0.5);
  cursor: pointer;
}
</style>
