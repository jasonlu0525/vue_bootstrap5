<template>
  <div class="container gx-0 gx-md-6">
    <div class="banner"></div>
  </div>

  <section class="container gx-0 gx-md-6 mt-md-n44 mb-15 mb-md-40">
    <div class="row justify-content-center gx-0">
      <div class="col-md-10 gx-0">
        <ul class="row gx-0 fs-5 fs-md-4">
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
              "
            >
              <span class="position-relative z-index-top fw-light">人氣推薦</span>
              <div class="bg-primary background-layer z-index-center h-100 opacity-75"></div>
              <div
                class="background-layer"
                :style="`background-image: url(${backgroundImages[1]}); background-position: center;
  background-size: cover;filter: blur(5px);`"
              ></div>
            </router-link>
          </li>
          <li class="col-4" :style="`background-image: url(${backgroundImages[2]}) `">
            <router-link
              to="/product"
              class="
                position-relative
                d-flex
                w-100
                justify-content-center
                flex-column
                writing-mode-vertical--rl
                text-white
                px-26 px-lg-60
                py-20 py-md-40
              "
            >
              <span class="position-relative z-index-top fw-light">新品上市</span>
              <div class="bg-primary background-layer z-index-center h-100 opacity-75"></div>
              <div
                class="background-layer"
                :style="`background-image: url(${backgroundImages[1]}); background-position: center;
  background-size: cover;filter: blur(5px);`"
              ></div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
<!-- <div class="my-md-n10"> -->
<div class="bg-secondary-100 ">

  <div class="container">
    <div class="row ">
      <div class="col-lg-6 position-md-relative">
        <div class="ratio aspect-ratios-2x1 aspect-ratios-md-1x1  position-md-absolute mt-md-n10">
          <img src="https://bit.ly/2xPn7Eq" height="460" alt="" />
        </div>
      </div>
      <div class="col-lg-6 py-15 py-md-35">
        <div class="d-flex">
          <div class="writing-mode-lg-vertical--rl col me-md-40 text-secondary-200">
            <p>
             青山依舊在，幾度夕陽紅。慣看秋月春<br />
              一壺濁酒喜相逢，浪花淘盡英雄。是非 <br />
              轉頭空，滾滾長江東逝水，白髮漁樵江<br />古今多少事，都付笑談中。
            </p>
            <p class=" ms-md-27 me-md-32  border-start border-secondary-100 ">
             是非成敗轉頭空，滾滾長江東逝水，白<br />樵江渚上，古今多少事，都付笑談中。
            </p>
          </div>
          <h2 class="d-none d-lg-block col mb-0">
            <img
              class=""
              src="@/assets/image/desktop\lg-為什麼選擇了做甜點.svg"
              alt="為什麼選擇了做甜點"
              height="307"
            />
          </h2>
        </div>
      </div>
    </div>
  </div>

<!-- </div> -->
 </div>

</template>

<script setup>
const backgroundImages = [
  'https://bit.ly/2R5tqwD',
  'https://bit.ly/2Dwoxd7',
  'https://bit.ly/2OUteif',
];
</script>

<style lang="scss" scopd>
.banner {
  background-image: url('https://bit.ly/2OhbMHr');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 277px;
}

@media (min-width: 992px) {
  .banner {
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
// .background-layer {
//   position: absolute;
//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     right: 0;
//     left: 0;
//     bottom: 0;
//   }
// }
</style>
