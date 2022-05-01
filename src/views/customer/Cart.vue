<template>
  <div class="container-lg pt-lg-15 pb-md-15 pb-lg-20">
    <div class="row gx-lg-10 justify-content-center">
      <section class="col-md-10 col-lg-8 gx-0 gx-md-10">
        <table class="table align-middle">
          <thead>
            <tr class="">
              <th scope="col" colspan="5" class="p-0 border-bottom-0">
                <h2
                  class="
                    mb-0 mb-md-6
                    py-8
                    bg-secondary
                    text-primary
                    bg-secondary-100
                    text-center
                    fw-bold
                  "
                >
                  您的購物車
                </h2>
              </th>
            </tr>
          </thead>
          <tbody class="mx-15 mx-md-0 border-top-0 text-nowrap">
            <template v-for="(cartItems, index) in cartList" :key="cartItems.id">
              <tr
                is="vue:CartList"
                :cartItems="cartItems"
                :lastItem="index + 1 === cartList.length ? true : false"
              ></tr>
            </template>
          </tbody>
        </table>
      </section>
      <div class="col-md-8 col-lg-4 gx-0 gx-md-10 text-primary text-md-secondary-100">
        <div class="position-sticky sticky-top top-55">
          <section class="px-md-10 py-md-8 bg-md-primary mx-15 mx-md-0 mb-8 mb-md-0">
            <h4
              class="
                fs-12
                py-8
                pt-md-0
                border-bottom-md border-md-white
                text-center
                fw-bold
                bg-secondary-100 bg-md-transparent
                text-primary text-md-white
              "
            >
              訂單摘要
            </h4>
            <p class="d-flex justify-content-between align-items-center fw-light mb-4">
              <span>小計</span><span>NT$ 2,700</span>
            </p>
            <p class="d-flex justify-content-between align-items-center fw-light mb-8">
              <span>運費</span><span>NT$ 300</span>
            </p>
            <p class="d-flex justify-content-between align-items-center fw-bold fs-10">
              <span>總計</span><span>NT$ 3,000</span>
            </p>
          </section>
          <router-link
            to="/checkout/delivery"
            class="btn btn-accent text-center text-primary fw-bold w-100 fs-12"
            >結帳</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-unused-vars
import CartList from '@/components/CartList.vue';

const cartList = [
  {
    qty: 2,
    id: Math.floor(Math.random() * 1000),
    totalPrice: 900,

    product: {
      title: '焦糖馬卡龍',
      imageUrl: 'https://bit.ly/2QiWeQW',
      id: Math.floor(Math.random() * 1000),
      price: 450,
      tag: '本日精選',
    },
  },
  {
    qty: 2,
    id: Math.floor(Math.random() * 1000),
    totalPrice: 900,

    product: {
      title: '焦糖馬卡龍',
      imageUrl: 'https://bit.ly/2zBjQuq',
      id: Math.floor(Math.random() * 1000),
      price: 450,
      tag: '本日精選',
    },
  },
  {
    qty: 2,
    id: Math.floor(Math.random() * 1000),
    totalPrice: 900,

    product: {
      title: '焦糖馬卡龍',
      imageUrl: 'https://bit.ly/2zKOP7w',
      id: Math.floor(Math.random() * 1000),
      price: 450,
      tag: '本日精選',
    },
  },
  {
    qty: 2,
    id: Math.floor(Math.random() * 1000),
    totalPrice: 900,

    product: {
      title: '焦糖馬卡龍',
      imageUrl: 'https://bit.ly/2zL5jN7',
      id: Math.floor(Math.random() * 1000),
      price: 450,
      tag: '本日精選',
    },
  },
  {
    qty: 2,
    id: Math.floor(Math.random() * 1000),
    totalPrice: 900,

    product: {
      title: '焦糖馬卡龍',
      imageUrl: 'https://bit.ly/2zBDAxX',
      id: Math.floor(Math.random() * 1000),
      price: 450,
      tag: '本日精選',
    },
  },
  {
    qty: 2,
    id: Math.floor(Math.random() * 1000),
    totalPrice: 900,

    product: {
      title: '焦糖馬卡龍',
      imageUrl: 'https://bit.ly/2NcDVuB',
      id: Math.floor(Math.random() * 1000),
      price: 450,
      tag: '本日精選',
    },
  },
];
</script>

<style>
.top-55{
  top: 110px;
}
</style>
