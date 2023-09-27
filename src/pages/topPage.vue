<script setup lang="ts">
import { RouterLink } from 'vue-router'
const emit = defineEmits(['moveToContent'])
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.info">
        info
      </div>
      <div >
        youtube?
      </div>
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
.content {
  // for develop
  border: 1px solid;

  width: 80%;
  height: 70%;//あとでmin-contentにする
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.info {
  width: 100%;
  

}
</style>
