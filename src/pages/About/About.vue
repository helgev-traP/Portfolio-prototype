<script setup lang="ts">
import Title from '@/components/PageTitle.vue'
</script>

<template>
  <div :class="$style.container">
    <Title>About</Title>
    <div :class="$style.profileCard">
      <img src="./img/コッホ曲線.png" style="width: 200px;" />
      <div :class="$style.text">
        <div :class="$style.chiyuki">
          千雪ふる
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  width: 100%;
  height: fit-content;
  border: 1px white solid;
}

.profileCard {
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: right;

  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    border: 1px white solid;
  }
  .chiyuki{
    font-size: 5rem;
    font-weight:500;
  }
}
</style>