<template>
  <div class="container gx-0 gx-md-3">
    <div class="banner"></div>
  </div>

  <section class="container gx-0 gx-md-3 mt-lg-n22">
    <div class="row justify-content-center gx-0">
      <div class="col-md-10 gx-0">
        <ul class="row gx-0 fs-5 fs-md-4">
          <li
            class="col-4 bg-accent gx-0 writing-mode-vertical--rl"
            :style="`background-image: url(${backgroundImages[0]}) `"
          >
            <router-link
              to="/product"
              class="
                d-flex
                w-100
                justify-content-center
                flex-column
                bg-accent
                px-13 px-lg-30
                py-10 py-md-14
              "
            >
              <span>本日精選</span>
            </router-link>
          </li>
          <!-- https://bit.ly/2R5tqwD -->
          <li
            class="col-4 border-end border-white writing-mode-vertical--rl"
            :style="`background-image: url(${backgroundImages[1]}) `"
          >
            <router-link
              to="/product"
              class="
                d-flex
                w-100
                justify-content-center
                flex-column
                bg-primary
                text-white text-center
                px-13 px-lg-30
                py-10 py-md-14
              "
            >
              <!-- https://bit.ly/2Dwoxd7 -->
              <span>人氣推薦</span>
            </router-link>
          </li>
          <li class="col-4" :style="`background-image: url(${backgroundImages[2]}) `">
            <router-link
              to="/product"
              class="
                d-flex
                w-100
                justify-content-center
                flex-column
                writing-mode-vertical--rl
                bg-primary
                text-white
                px-13 px-lg-30
                py-10 py-md-14
              "
            >
              <!-- https://bit.ly/2OUteif -->
              <span>新品上市</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const backgroundImages = [
  'https://bit.ly/2R5tqwD',
  ' https://bit.ly/2Dwoxd7',
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
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
}
</style>
