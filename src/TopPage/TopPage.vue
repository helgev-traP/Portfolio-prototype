<script setup lang="ts">
import { RouterLink } from 'vue-router'
const emit = defineEmits(['moveToContent'])
</script>

<template>
  <div :class="$style.container">
    <div :class="[$style.content]">
      <div :class="[$style.info]">
        <div :class="[$style.chiyuki]">千雪ふる</div>
        <div :class="[$style.nanado]">♫nanado</div>
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
@media (min-width: 720px) {
  @import './WideViewPort.scss';
}
@media (max-width: 719px) {
  @import './ThinViewPort.scss';
}
</style>
