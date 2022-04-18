<template>
  <div class="card border-0 rounded-0 text-primary">
    <div class="positon-relative">
      <img :src="product.imageUrl" class="card-img-top" height="315" :alt="product.title" />
      <strong
        class="
          text-white
          p-5
          writing-mode-vertical--rl
          letter-spacing-4
          fw-bold
          bg-primary
          position-absolute
          top-0
          start-0
          ms-10
        "
        >本日精選</strong
      >
    </div>
    <div
      class="
        card-body
        d-flex
        align-items-center
        fs-5
        p-0
        border-start border-end border-secondary-100
      "
    >
      <h3
        class="card-title fw-light mb-0 fs-5 py-8 px-16 border-end border-secondary-100"
        v-text="product.title"
      ></h3>
      <p class="card-text fw-bold fs-5 flex-grow-1 text-center">NT$ 450</p>
    </div>
    <footer class="">
      <button
        type="button"
        class="
          btn
          bg-secondary-100
          text-center text-reset
          d-block
          w-100
          fw-bold
          fs-4
          py-6
          border-2
          hover--fast hover-bg-primary hover-text-white
          rounded-0
        "
      >
        加入購物車
      </button>
    </footer>
  </div>
</template>

<script setup>
// product
import { defineProps, toRefs } from 'vue';

const productData = defineProps({
  product: Object,
});

const { product } = toRefs(productData);
</script>
