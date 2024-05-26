<script setup lang="ts">
import Page from '@/UI/ContentPage.vue'
</script>

<template>
  <div :class="$style.container">
    <Page title="Blog">
      blank
    </Page>
  </div>
</template>

<style lang="scss" module>
.container {
  width: 100%;
  height: fit-content;
}
.box{
  width: 500px;
  height: 5000px;
  padding: 100px;
  border: 2px white solid;
  border-radius: 50px;
}
</style>