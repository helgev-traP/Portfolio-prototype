<script setup lang="ts">
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.title">
      <slot>blank</slot>
    </div>
    <div :class="$style.bar"></div>
  </div>
</template>

<style lang="scss" module>
.container {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  width: 100%;
  font-weight: bold;
  font-size: 4rem;

}

.bar {
  width: 80%;
  border-bottom: 5px $color-glass-modal-scrollbar solid;
  border-radius: 5px;
  margin-bottom: 30px;
}
</style>