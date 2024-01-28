<script setup lang="ts">
</script>

<template>
  <div :class="$style.cliper">
    <div :class="$style.contentField">
      <slot></slot>
    </div>
  </div>
  <!--
    将来スクリプトでスクロールを実装するときのために残す
    <div :class="$style.scrollbar"></div>
  -->
</template>

<style lang="scss" module>
.cliper {
  width: 80vw;
  height: calc(90vh - $header-height);

  position: relative;
  top: calc($header-height / 2);

  border-radius: 20px;
  overflow: hidden;
}

.contentField {
  height: 100%;
  width: 100%;

  padding: 40px 30px 40px 40px;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  border: 1px solid $color-glass-modal-edge;
  border-radius: 20px;
  background-color: $color-glass-modal;
  backdrop-filter: blur(20px);
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.419);
}

.contentField::-webkit-scrollbar {
  width: 10px;
  background: transparent;
}

.contentField::-webkit-scrollbar-thumb {
  background: $color-glass-modal-scrollbar;
  border-radius: 5px;
}

/*
//将来スクリプトでスクロールを実装するときのために残す
.scrollbar {
  
  // position
  position: fixed;
  top: calc(5vh + $header-height + 18px);
  right: calc(10vw + 5px);

  // desgin
  height: 100px;
  width: 10px;
  background-color: $color-glass-modal-scrollbar;
  border-radius: 10px;
}
*/
</style>