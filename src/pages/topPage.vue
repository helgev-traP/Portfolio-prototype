<script setup lang="ts">
import { RouterLink } from 'vue-router'
const emit = defineEmits(['moveToContent'])
</script>

<template>
  <div :class="$style.container">
    <div :class="[$style.content]">
      <div :class="[$style.info]">
        <div :class="[$style.chiyuki]">千雪ふる</div>
        <div :class="[$style.nanado]">nanado</div>
        <div :class="[$style.god]">God is in the details</div>
        <div :class="[$style.about]">
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/about"
            >About</RouterLink
          >
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/blog"
            >Blog</RouterLink
          >
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/workshop"
            >WorkShop</RouterLink
          >
        </div>
        <div :class="[$style.works]">
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/programing"
            >Programing</RouterLink
          >
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/movie"
            >Movie</RouterLink
          >
          <RouterLink :class="$style.link" @click="emit('moveToContent')" to="/Music"
            >Music</RouterLink
          >
        </div>
        <div :class="[$style.sns]">
          <a href="https://youtube.com/@chiyuki_huru?feature=shared" :class="$style.youtubeIcon">
            <img
              :class="$style.icon"
              src="https://www.youtube.com/s/desktop/c0b97319/img/favicon_144x144.png"
            />
            chiyuki
          </a>
          <a href="https://youtube.com/@_nanado_?feature=shared" :class="$style.youtubeIcon">
            <img
              :class="$style.icon"
              src="https://www.youtube.com/s/desktop/c0b97319/img/favicon_144x144.png"
            />
            nanado
          </a>
          <img
            :class="[$style.icon, $style.X]"
            src="https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png"
          />

          <a href="https://misskey.io/@chiyuki" :class="$style.icon">
            <img
              src="https://s3.arkjp.net/misskey/webpublic-0c66b1ca-b8c0-4eaa-9827-47674f4a1580.png"
            />
          </a>
          <img
            :class="[$style.icon, $style.soundcloud]"
            src="https://a-v2.sndcdn.com/assets/images/sc-icons/favicon-2cadd14bdb.ico"
          />
        </div>
      </div>
      <div :class="[]">
        <iframe
          :class="$style.youtube"
          src="https://www.youtube-nocookie.com/embed/iT7nG-EKTR0?si=upBo2TbNek0GHp_i&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
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
  width: 177.8vh;
  height: min-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transform: scale(1);
}
.info {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3%;
  grid-template-rows: 30% 15% 8% 4fr 4fr 3fr;
  text-align: end;

  position: relative;
  left: -5vh;
}
.chiyuki {
  grid-column: 1;
  font-size: 12vh;
  font-weight: 500;
  position: relative;
  top: -4vh;
  left: 2.5vh;
}
.nanado {
  grid-column: 1;
  font-size: 6vh;

  position: relative;
  top: -5vh;
}
.god {
  grid-column: 1;
  font-size: 1vh;
  letter-spacing: 3vh;
  position: relative;
  top: -3vh;
  left: 2.1vh;
}
.about {
  grid-column: 1;
  grid-row: 4;
}
.works {
  grid-column: 1;
  grid-row: 5;
}
.about,
.works {
  display: flex;
  align-items: end;
  justify-content: end;
  border-right: 7px solid $color-text;

  position: relative;
  top: -2vh;
  left: -0.9vh;
}
.link {
  width: 25vh;
  font-size: 4vh;
  color: $color-text;
  text-decoration: none;
  text-align: center;

  position: inherit;
  top: -0.8vh;

  border-left: 1px solid;
}
.sns {
  grid-column: 1;
  grid-row: 6;

  display: flex;
  align-items: end;
  justify-content: end;

  position: relative;
  top: -1vh;
  left: -0.9vh;
}
.youtubeIcon{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.5vh;
}
.icon {
  margin-left: 5vh;
  height: 4vh;
}
.X,
.soundcloud {
  filter: blur(2px) grayscale(1);
}
.youtube {
  height: 50vh;
  width: 88.89vh;

  position: relative;
  left: -5vh;
}
</style>
