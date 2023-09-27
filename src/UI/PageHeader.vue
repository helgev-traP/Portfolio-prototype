<script setup lang="ts">
const emit = defineEmits(['moveToTop'])
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.logo" @click="emit('moveToTop')">ロゴとなまえ</div>
    <RouterLink @click="emit('moveToContent')" to="/test">テスト1ヘ</RouterLink>
    <RouterLink @click="emit('moveToContent')" to="/other">テスト2へ</RouterLink>
  </div>
</template>

<style lang="scss" module>
.header {
  height: $header-height;
  border-bottom: 2px solid;
  border-bottom-color: $color-secondary;
  background-color: white;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
}
.logo {
  padding-left: 30px;
  height: 1rem;
  width: 100px;
  cursor: pointer;
}
</style>
