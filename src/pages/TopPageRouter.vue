<template>
  <div :class="$style.content">
    Page is loading?
  </div>
</template>


<style lang="scss" module>
.content {
  width: calc(100% - 50vw);
  height: calc(100% - 50vh);
  padding: 50px;
  border: 1px solid $color-secondary;
  border-radius: 25px;
  background-color: white;
}
</style>