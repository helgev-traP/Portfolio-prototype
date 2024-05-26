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
        <br/>
        A creator / A engineering student
        <br/>
        <div :class="$style.outerLinks">
          <a :class="$style.outerLink" href="https://github.com/helgev-traP"> GitHub </a>
          <a :class="$style.outerLink" href="https://trap.jp/author/helgev/"> traP Blog </a>
        </div>
      </div>
      <div :class="$style.right">
        ❗❗This portfolio is under construction.
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
  margin: 0px -4px -10px;
}

.container {
  width: 100%;
  height: 100%;
}

.mid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.left {
  height: 180px;
  width: 300px;
}

.outerLinks {
  margin-top: 13px;
  display: flex;
  justify-content:left;
  align-items: center;
}

.outerLink {
  margin-right: 10px;
  padding: 1px 10px;
  border: 1px solid #7f7f7f;
  border-radius: 5px;
  text-decoration: none;
  color: #ffffff;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s;
  }
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tile {
  margin: 10px;
  padding: 10px;
  border: 1px solid #7f7f7f;
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
