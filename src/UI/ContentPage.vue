<script setup lang="ts">

interface props {
  title: String
}

defineProps<props>()

</script>

<template>
  <div :class="$style.container">
    <div :class="$style.title">
      {{ title }}
    </div>
    <div :class="$style.bar"></div>
    <div :class="$style.pageContent">
      <slot>blank</slot>
    </div>
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
  font-size: 3rem;
  margin-bottom: 10px;
}

.bar {
  width: 80%;
  border-bottom: 3px $color-glass-modal-scrollbar solid;
  border-radius: 3px;
  margin-bottom: 30px;
}

.pageContent{
  width: calc(100% - 120px);
}
</style>