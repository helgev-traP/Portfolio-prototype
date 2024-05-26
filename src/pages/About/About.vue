<script setup lang="ts">
import Page from '@/UI/ContentPage.vue'
import Heading from '@/UI/Heading.vue'
</script>

<template>
  <Page title="About">
    <div :class="$style.container">
      <div :class="$style.profileCard">
        <img src="./img/コッホ曲線.png" style="height: 100%; border-radius: 50px;" />
        <div :class="$style.text">
          <div :class="$style.helgev">
            Helgev
          </div>
          <div>へるげふ</div>
          <div>東京工業大学 | B3</div>
          <div>デジタル創作同好会traP | Sound | Graphic | Programming | etc...</div>
          <div>AtCoder: 610(茶)</div>
          <div :class="$style.sns">
            <a :class="[$style.link, $style.github]" href="https://github.com/helgev-traP">GitHub</a>
            <a :class="[$style.link, $style.atcoder]" href="https://atcoder.jp/users/helgev">AtCoder</a>
            <a :class="[$style.link, $style.twitter]" href="https://github.com/helgev-traP">X | Twitter</a>
            <a :class="[$style.link, $style.trap]" href="https://trap.jp/author/helgev/">traP Blog</a>
          </div>
        </div>
      </div>
      <Heading heading="About Me">
        プログラミングと音楽をやっています。
        <br/>
        ・電子工作やプログラミング、モノづくりなどしています。設計と名の付くものが得意です。
        <br/>
        ・作曲をしています。音楽と映像の有機的融合について、音楽の側から模索しています。
        <br/>
        <br/>
        ちなみにアイコンはコッホ曲線です。なんと手書きです。
      </Heading>
      <Heading heading="This Portfolio">
        Vueで制作中です。ここのAboutだけ半分出来ています。
      </Heading>
      <Heading heading="Skills">
        C++ | Rust | Python | Vue | Blender | Cakewalk
      </Heading>
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
  height: 15rem;
  display: flex;
  flex-direction: row;
  text-align: right;

  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }

  .helgev {
    font-size: 3rem;
    font-weight: 500;
  }

  .sns {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    .link {
      box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5);
      transition: 0.3s;

      &:hover {
        box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.5);
        transition: 0.3s;
      }
    }

    .github {
      padding: 5px 20px;
      border-radius: 20px;
      background-color: black;
    }

    .atcoder {
      padding: 5px 20px;
      border-radius: 20px;
      background-color: #884f3a;
    }

    .twitter {
      padding: 5px 20px;
      border-radius: 20px;
      background-color: #1D9BF0;
    }

    .trap {
      padding: 5px 20px;
      border-radius: 20px;
      background-color: #005bac;
    }
  }
}
</style>