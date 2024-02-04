<script setup lang="ts">
const emit = defineEmits(['moveToContent', 'moveToTop'])
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.logo" @click="emit('moveToTop')">千雪ふる | nanado</div>
    <div :class="$style.divide"></div>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/about">About</RouterLink>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/blog">Blog</RouterLink>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/workshop">WorkShop</RouterLink>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/programming">Programming</RouterLink>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/movie">Movie</RouterLink>
    <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/music">Music</RouterLink>
  </div>
</template>

<style lang="scss" module>
.header {
  height: $header-height;
  width: 100vw;
  border-bottom: 1px solid;
  border-bottom-color: $color-glass-modal-edge;
  background-color: $color-glass-modal;
  backdrop-filter: blur(20px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5vw;
  padding-right: 10vw;
}

.logo {
  font-size: 20px;
  text-align: left;
  cursor: pointer;
}

.divide {
  height: 30px;
  border-right: 2px solid $color-glass-modal-edge;
}

.link {
  font-size: 20px;
  color: $color-text;
  text-decoration: none;
  text-align: right;
}
</style>
