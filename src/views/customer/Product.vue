<template>
  <div class="container-md gx-0 gx-md-6 mb-md-30">
    <section class="banner position-relative">
      <h2 class="position-absolute end-0 top-0 mb-0 mt-15 mt-lg-20 me-15 me-lg-20">
        <img
          src="@/assets/image/desktop/lg-想吃甜點是不需要理由的.svg"
          width="89"
          height="328"
          class="banner-title"
          alt="想吃甜點是不需要理由的"
        />
      </h2>
    </section>
  </div>
  <div class="container-md">
    <div class="row">
      <div class="col-lg-4 mb-15 mb-lg-0 text-center gx-0 gx-md-10 fw-bold fs-12">
        <h4 class="py-9 bg-primary text-secondary-100 mb-0 fs-12">甜點類別</h4>
        <ul>
          <li>
            <router-link
              to="/product"
              class="d-block py-7 bg-secondary-100 border-start border-end border-bottom"
              >所有甜點（48）</router-link
            >
          </li>
          <li>
            <router-link
              to="/product"
              class="
                d-block
                py-7
                border-start border-end border-bottom border-secondary-100
                hover--normal hover-bg-secondary-100
              "
              >本日精選 （10）</router-link
            >
          </li>
          <li>
            <router-link
              to="/product"
              class="
                d-block
                py-7
                border-start border-end border-bottom border-secondary-100
                hover--normal hover-bg-secondary-100
              "
              >人氣推薦（26）</router-link
            >
          </li>
          <li>
            <router-link
              to="/product"
              class="
                d-block
                py-7
                border-start border-end border-bottom border-secondary-100
                hover--normal hover-bg-secondary-100
              "
              >新品上市（12）</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col-lg-8 mb-15">
        <ul class="row">
          <li
            class="col-md-6 mb-15 mb-md-10 gx-30 gx-md-10"
            v-for="product in productList"
            :key="product.id"
          >
            <ProductCard :product="product" />
          </li>
        </ul>
        <div class="row justify-content-center justify-content-md-end">
          <ul class="col-md-6 d-flex justify-content-center">
            <li class="hover-bg-primary hover-text-white">
              <a
                href="#"
                class="
                  material-icons-outlined
                  d-flex
                  align-items-center
                  px-8
                  fs-12
                  d-block
                  border border-end-0
                  h-100
                  hover--slow
                "
              >
                arrow_left
              </a>
            </li>
            <li class="bg-primary text-secondary-100">
              <a href="" class="py-7 px-12 fs-10 d-block border border-end-0 text-reset hover--slow"
                >1</a
              >
            </li>
            <li class="hover-bg-primary hover-text-white">
              <a href="#" class="py-7 px-12 fs-10 d-block border border-end-0 hover--slow">2</a>
            </li>
            <li class="hover-bg-primary hover-text-white">
              <a href="#" class="py-7 px-12 fs-10 d-block border border-end-0 hover--slow">3</a
              ><a href="#"></a>
            </li>
            <li class="hover-bg-primary hover-text-white">
              <a
                href="#"
                class="
                  material-icons-outlined
                  d-flex
                  align-items-center
                  px-8
                  fs-12
                  d-block
                  border
                  h-100
                  hover--slow
                "
              >
                arrow_right
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ProductCard from '@/components/ProductCard.vue';

const productList = [
  {
    title: '焦糖馬卡龍',
    imageUrl: 'https://bit.ly/2QiWeQW',
    id: Math.floor(Math.random() * 1000),
    price: 450,
    tag: '本日精選',
  },
  {
    title: '焦糖馬卡龍',
    imageUrl: 'https://bit.ly/2zBjQuq',
    id: Math.floor(Math.random() * 1000),
    price: 450,
    tag: '本日精選',
  },
  {
    title: '焦糖馬卡龍',
    imageUrl: 'https://bit.ly/2zKOP7w',
    id: Math.floor(Math.random() * 1000),
    price: 450,
    tag: '本日精選',
  },
  {
    title: '焦糖馬卡龍',
    imageUrl: 'https://bit.ly/2NcDVuB',
    id: Math.floor(Math.random() * 1000),
    price: 450,
    tag: '本日精選',
  },
  {
    title: '焦糖馬卡龍',
    imageUrl: 'https://bit.ly/2zBDAxX',
    id: Math.floor(Math.random() * 1000),
    price: 450,
    tag: '本日精選',
  },
  {
    title: '焦糖馬卡龍',
    imageUrl: 'https://bit.ly/2zL5jN7',
    id: Math.floor(Math.random() * 1000),
    price: 450,
    tag: '本日精選',
  },
];
</script>
<style scoped lang="scss">
.banner {
  background-image: url('https://bit.ly/2Qodh3Z');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 277px;
  @include media-breakpoint-up(lg) {
    height: 496px;
  }
}

.banner-title {
  width: 59px;
  height: 219px;
  @include media-breakpoint-up(lg) {
    width: 89px;
    height: 328px;
  }
}
</style>
