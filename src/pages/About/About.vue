<script setup lang="ts">
import Page from '@/UI/ContentPage.vue'
</script>

<template>
  <Page title="About">
    <div :class="$style.container">
      <div :class="$style.profileCard">
        <img src="./img/コッホ曲線.png" style="width: 200px;" />
        <div :class="$style.text">
          <div :class="$style.chiyuki">
            Helgev
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" module>
.container {
  width: 100%;
  height: fit-content;
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
  }

  .chiyuki {
    font-size: 3rem;
    font-weight: 500;
  }
}
</style>