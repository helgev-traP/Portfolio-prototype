<script setup lang="ts">
const emit = defineEmits(['moveToContent','moveToTop'])
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.logo" @click="emit('moveToTop')">ロゴとなまえ</div>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/about">About</RouterLink>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/blog">Blog</RouterLink>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/workshop">WorkShop</RouterLink>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/programing">Programing</RouterLink>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/movie">Movie</RouterLink>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/music">Music</RouterLink>
  </div>
</template>

<style lang="scss" module>
.header {
  height: $header-height;
  width: 100vw;
  border-bottom: 1px solid;
  border-bottom-color: $color-secondary;
  background-color: $color-header;

  display: grid;
  grid-template-columns: 20% 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
}
.logo {
  height: 30px;
  width: 180px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;

  border: 1px solid white;
}
.link {
  font-size: 20px;
  color: $color-text;
  text-decoration: none;
  text-align: center;

}
</style>
