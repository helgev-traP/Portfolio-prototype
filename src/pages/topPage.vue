<script setup lang="ts">
import { RouterLink } from 'vue-router'
const emit = defineEmits(['moveToContent'])
</script>

<template>
  <div :class="$style.container">
    <div :class="[$style.content, $style.border]">
      <div :class="[$style.info, $style.border]">
        <div :class="[$style.chiyuki, $style.border]">千雪ふる</div>
        <div :class="[$style.nanado, $style.border]">nanado</div>
        <div :class="[$style.god, $style.border]">God is in the details</div>
        <div :class="[$style.about, $style.border]">
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/about">About</RouterLink>
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/blog">Blog</RouterLink>
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/workshop">WorkShop</RouterLink>
        </div>
        <div :class="[$style.works, $style.border]">
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/programing">Programing</RouterLink>
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/movie">Movie</RouterLink>
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/Music">Music</RouterLink>
        </div>
        <div :class="[$style.sns, $style.border]"></div>
      </div>
      <div>youtube?</div>
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
  width: calc(177.8vh + 10px);
  height: 50vh; //あとでmin-contentにする
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.info {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 10px;
  grid-template-rows: 30% 20% 25px 3fr 3fr 2fr;
  text-align: end;
}
.chiyuki {
  grid-column: 1;
  font-size: 15vh;
  position: relative;
  left: 20px;
}
.nanado {
  grid-column: 1;
  font-size: 8vh;
}
.god {
  grid-column: 1;
  font-size: 10px;
  letter-spacing: 1.7vw;
  position: relative;
  left: 18px;
}
.about {
  grid-column: 1;
  grid-row: 4;
}
.works {
  grid-column: 1;
  grid-row: 5;
}
.about, .works{
  display: flex;
  align-items: end;
  justify-content: end;
  border-right: 7px solid black;

  position: relative;
  left: -5px;
}
.sns {
  grid-column: 1;
  grid-row: 6;
}
//↓ for develop
.borde r {
  border: 1px solid;
}
.link {
  width: 25vh;
  font-size: 4vh;
  color: black;
  text-decoration: none;
  text-align: center;

  position: inherit;
  top: -8px;

  border-left: 1px solid;
}
</style>
