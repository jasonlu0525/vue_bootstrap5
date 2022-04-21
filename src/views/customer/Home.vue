<template>
  <div class="container-md gx-0 gx-md-6">
    <div class="banner"></div>
  </div>

  <div class="container-md gx-0 gx-md-6 mt-md-n44 mb-15 mb-md-40">
    <div class="row justify-content-center gx-0">
      <div class="col-md-10 gx-0">
        <ul class="row gx-0 fs-10 fs-md-12">
          <li class="col-4 gx-0 writing-mode-vertical--rl">
            <router-link
              to="/product"
              class="
                position-relative
                d-flex
                w-100
                justify-content-center
                flex-column
                px-26 px-lg-60
                py-20 py-md-40
              "
            >
              <span class="position-relative z-index-top fw-bold">本日精選</span>
              <div class="bg-accent background-layer z-index-center h-100 opacity-75"></div>
              <div
                class="background-layer"
                :style="`background-image: url(${backgroundImages[0]}); background-position: center;
  background-size: cover;filter: blur(5px);`"
              ></div>
            </router-link>
          </li>

          <li class="col-4 border-end border-white writing-mode-vertical--rl">
            <router-link
              to="/product"
              class="
                position-relative
                d-flex
                w-100
                justify-content-center
                flex-column
                text-white text-center
                px-26 px-lg-60
                py-20 py-md-40
                hover-bg-accent hover-text-primary
              "
            >
              <span class="position-relative z-index-top fw-light hover--slow hover-no-cover"
                >人氣推薦</span
              >
              <div
                class="
                  bg-primary
                  background-layer
                  z-index-center
                  h-100
                  opacity-75
                  hover--slow hover-bg-accent hover-text-primary
                "
              ></div>
              <div
                class="background-layer"
                :style="`background-image: url(${backgroundImages[1]}); background-position: center;
  background-size: cover;filter: blur(5px);`"
              ></div>
            </router-link>
          </li>
          <li class="col-4 writing-mode-vertical--rl">
            <router-link
              to="/product"
              class="
                position-relative
                d-flex
                w-100
                justify-content-center
                flex-column
                text-white
                px-26 px-lg-60
                py-20 py-md-40
                hover-bg-accent hover-text-primary
              "
            >
              <span class="position-relative z-index-top fw-light hover--slow hover-no-cover"
                >新品上市</span
              >
              <div
                class="bg-primary background-layer z-index-center h-100 opacity-75 hover--slow"
              ></div>
              <div
                class="background-layer"
                :style="`background-image: url(${backgroundImages[2]}); background-position: center;
  background-size: cover;filter: blur(5px);`"
              ></div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <section class="mb-15 mb-md-52 border-bottom">
    <h2 class="d-md-none text-center mb-15">
      <img
        src="@/assets/image/mobile/sm-橫式-為什麼選擇了做甜點.svg"
        width="192"
        height="60"
        alt="為什麼選擇了做甜點"
      />
    </h2>
    <div class="bg-secondary-100">
      <div class="container gx-0 gx-md-5">
        <div class="row justify-content-center align-items-center gx-0 gx-md-10">
          <div class="col-sm-10 col-md-6 position-md-relative my-md-n10 pt-sm-15 pt-md-0">
            <div
              class="
                ratio
                aspect-ratios-2x1 aspect-ratios-md-1x1
                introduction-image
                w-md-100 w-lg-auto
              "
            >
              <img src="https://bit.ly/2xPn7Eq" height="460" alt="" />
            </div>
          </div>
          <div class="col-sm-10 col-md-6">
            <div class="d-flex p-15 px-sm-0 py-md-0">
              <div
                class="
                  writing-mode-md-vertical--rl
                  col
                  me-md-10 me-lg-40
                  text-secondary-200
                  lh-lg
                  ms-md-0 ms-lg-17
                "
              >
                <p class="mb-15 mb-md-0">
                  青山依舊在，幾度夕陽紅。慣看秋月春風。<br class="d-none d-md-block" />
                  一壺濁酒喜相逢，浪花淘盡英雄。是非成敗<br class="d-none d-md-block" />
                  轉頭空，滾滾長江東逝水，白髮漁樵江渚<br
                    class="d-none d-md-block"
                  />上，古今多少事，都付笑談中。
                </p>
                <p class="me-md-16 me-lg-32 border-start border-secondary-100">
                  是非成敗轉頭空，青山依舊在，幾度夕陽<br
                    class="d-none d-md-block"
                  />紅。白髮漁樵江渚上，古今多少事，都付笑談中。
                </p>
              </div>
              <h2 class="d-none d-md-block col mb-0 mt-md-n27">
                <img
                  class=""
                  src="@/assets/image/desktop/lg-為什麼選擇了做甜點.svg"
                  alt="為什麼選擇了做甜點"
                  height="307"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mb-15 mb-md-47 border-bottom">
    <h2 class="d-md-none text-center mb-15">
      <img
        src="@/assets/image/mobile/sm-橫式-為什麼一定要吃甜點.svg"
        width="192"
        height="60"
        alt="為什麼選擇了做甜點"
      />
    </h2>
    <div class="bg-secondary-100">
      <div class="container gx-0 gx-md-5">
        <div
          class="row justify-content-center align-items-center gx-0 gx-md-10 flex-md-row-reverse"
        >
          <div
            class="
              col-sm-10 col-md-6
              position-md-relative
              my-md-n10
              pt-sm-15 pt-md-0
              flex-lg-row-reverse
            "
          >
            <div
              class="
                ratio
                aspect-ratios-2x1 aspect-ratios-md-1x1
                introduction-image
                w-md-100 w-lg-auto
              "
            >
              <img src="https://bit.ly/2zzAQS4" height="460" alt="" />
            </div>
          </div>
          <div class="col-sm-10 col-md-6">
            <div class="d-flex p-15 px-sm-0 py-md-0">
              <div
                class="writing-mode-md-vertical--rl col me-md-10 me-lg-40 text-secondary-200 lh-lg"
              >
                <p class="mb-15 mb-md-0">
                  青山依舊在，幾度夕陽紅。慣看秋月春風。<br class="d-none d-md-block" />
                  一壺濁酒喜相逢，浪花淘盡英雄。是非成敗<br class="d-none d-md-block" />
                  轉頭空，滾滾長江東逝水，白髮漁樵江渚<br
                    class="d-none d-md-block"
                  />上，古今多少事，都付笑談中。
                </p>
                <p class="me-md-16 me-lg-32">
                  是非成敗轉頭空，青山依舊在，幾度夕陽<br
                    class="d-none d-md-block"
                  />紅。白髮漁樵江渚上，古今多少事，都付笑談中。
                </p>
              </div>
              <h2 class="d-none d-md-block col mb-0 mt-md-n27 me-lg-11">
                <img
                  class=""
                  src="@/assets/image/desktop/lg-為什麼一定要吃甜點.svg"
                  alt="為什麼選擇了做甜點"
                  height="303"
                  width="89"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container">
    <h2 class="text-center mb-15 mb-md-40">
      <picture>
        <source
          media="(min-width:768px)"
          srcset="@/assets/image/desktop/lg-想吃甜點是不需要理由的.svg"
          width="89"
          height="328"
          class="mb-40"
          alt="想吃甜點是不需要理由的"
        />
        <img
          src="@/assets/image/mobile/sm-橫式-想吃甜點是不需要理由的.svg"
          width="226"
          height="60"
          class="object-fit-contain"
          alt="想吃甜點是不需要理由的"
        />
      </picture>
      <img />
    </h2>
    <ul class="row">
      <li
        class="col-md-6 col-lg-4 gx-30 gx-md-10 mb-15 mb-lg-30"
        v-for="product in productList"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';

const backgroundImages = [
  'https://bit.ly/2R5tqwD',
  'https://bit.ly/2Dwoxd7',
  'https://bit.ly/2OUteif',
];

const productList = [
  {
    title: '焦糖馬卡龍',
    imageUrl: 'https://bit.ly/2zBjQuq',
    id: Math.floor(Math.random() * 1000),
    price: 'NT$ 450',
    tag: '本日精選',
  },
  {
    title: '焦糖馬卡龍',
    imageUrl: 'https://bit.ly/2zBDAxX',
    id: Math.floor(Math.random() * 1000),
    price: 'NT$ 450',
    tag: '本日精選',
  },
  {
    title: '焦糖馬卡龍',
    imageUrl: 'https://bit.ly/2QbVsVR',
    id: Math.floor(Math.random() * 1000),
    price: 'NT$ 450',
    tag: '本日精選',
  },
];
</script>

<style lang="scss" scoped>
.banner {
  background-image: url('https://bit.ly/2OhbMHr');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 277px;
  @include media-breakpoint-up(lg) {
    height: 496px;
  }
}

.background-layer {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.8;
}

.introduction-image {
  height: 250px;
  @include media-breakpoint-up(md) {
    width: 460px;
    height: 460px;
  }
}
</style>
