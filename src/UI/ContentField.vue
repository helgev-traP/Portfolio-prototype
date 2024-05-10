<script setup lang="ts">
</script>

<template>
  <div :class="$style.cliper">
    <div :class="$style.contentField">
      <div :class="$style.moveScrollbar">
        <slot></slot>
      </div>
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
  padding: 0px 15px;

  border: 1px solid $color-glass-modal-edge;
  border-radius: 20px;
  background-color: $color-glass-modal;
  backdrop-filter: blur(20px);
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.419);
}
.moveScrollbar {
  height: 100%;
  width: 100%;
  padding: 10px 10px 40px 20px;

  overflow-y: scroll;
  -ms-overflow-style: none;
  // scrollbar-width: none;
}

.moveScrollbar::-webkit-scrollbar {
  width: 10px;
  background: transparent;
}

.moveScrollbar::-webkit-scrollbar-thumb {
  height: 5%;
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