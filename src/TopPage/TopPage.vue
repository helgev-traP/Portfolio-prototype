<script setup lang="ts">
import { RouterLink } from 'vue-router'
const emit = defineEmits(['moveToContent'])
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.mid">
      <div :class="$style.left">
        <h1>Helgev</h1>
        Tokyo Tech
        <br />
        A Creator. / An Engineering Student.
        <br />
        <div :class="$style.outerLinks">
          <a :class="[$style.outerLink, $style.github]" href="https://github.com/helgev-traP"> GitHub </a>
          <a :class="[$style.outerLink, $style.trap]" href="https://trap.jp/author/helgev/"> traP Blog </a>
          <a :class="[$style.outerLink, $style.repository]" href="https://github.com/helgev-traP/Portfolio-prototype"> this site's repository
          </a>
        </div>
      </div>
      <div :class="$style.right">
        ❗❗This portfolio is under construction.(工事中です)
        <div :class="$style.links">
          <RouterLink :class="[$style.tile, $style.about]" @click="emit('moveToContent')" to="/about"> About
          </RouterLink>
          <RouterLink :class="[$style.tile, $style.blog]" @click="emit('moveToContent')" to="/blog"> Blog</RouterLink>
          <RouterLink :class="[$style.tile, $style.workshop]" @click="emit('moveToContent')" to="/workshop"> Workshop
          </RouterLink>
        </div>
        <div :class="$style.links">
          <RouterLink :class="[$style.tile, $style.programming]" @click="emit('moveToContent')" to="/programming">
            Programming </RouterLink>
          <RouterLink :class="[$style.tile, $style.movie]" @click="emit('moveToContent')" to="/movie"> Movie
          </RouterLink>
          <RouterLink :class="[$style.tile, $style.music]" @click="emit('moveToContent')" to="/music"> Music
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
h1 {
  font-size: 3rem;
  font-family: "Yu Gothic", "YuGothic", "游ゴシック", "Meiryo", "メイリオ", sans-serif;
}

.container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.mid {
  height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.left {
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-width: 850px) {
  .mid {
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 500px;
    padding-bottom: 20px;
    margin-bottom: 16px;
    border-bottom: #ffffff 1px solid;
  }
}

.outerLinks {
  margin-top: 11px;
  display: flex;
  justify-content: left;
  align-items: center;
}

.outerLink {
  margin-right: 10px;
  padding: 1px 10px;
  border: 1px solid #5e5e5e;
  border-radius: 5px;
  text-decoration: none;
  color: #ffffff;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.1s;
  }
}

.github {
  background-color: #494949;
}

.trap {
  background-color: #005bac;
} 

.repository {
  background-color: #992e63;
}

.right {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tile {
  margin: 10px 10px 0px;
  padding: 10px;
  border: 1px solid #5e5e5e;
  border-radius: 5px;
  text-decoration: none;
  color: #ffffff;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s;
  }
}

.about {
  background-color: #838383;
}

.blog {
  background-color: #595959;
}

.workshop {
  background-color: #6d6d6d;
}

.programming {
  background-color: #424242;
}

.movie {
  background-color: #6e6e6e;
}

.music {
  background-color: #464646;
}
</style>
