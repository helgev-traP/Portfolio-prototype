<template>
  <div :class="$style.header">
    <div>へっだーとかの中身</div>
    <RouterLink to="#content/test">テスト1ヘ</RouterLink>
    <RouterLink to="#content/other">テスト2へ</RouterLink>
  </div>
</template>

<style lang="scss" module>
.header {
  padding: 1rem;
  border-bottom: 2px solid;
  border-bottom-color: $color-secondary;
  background-color: white;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
