<template>
  <div class="card border-0 rounded-0 text-primary">
    <div class="positon-relative btnwrap hover--slow">
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
          stretched-link
        "
        >本日精選</strong
      >
      <span
        class="
          material-icons
          md1
          position-absolute
          top-0
          end-0
          mt-8
          me-10
          hover--normal hover-text-danger
        "
      >
      </span>
    </div>
    <div
      class="
        card-body
        d-flex
        align-items-center
        fs-10
        p-0
        border-start border-end border-secondary-100
      "
    >
      <h3
        class="card-title fw-light mb-0 fs-10 py-8 px-16 border-end border-secondary-100"
        v-text="product.title"
      ></h3>
      <h4 class="card-text fw-bold fs-10 flex-grow-1 text-center">NT$ 450</h4>
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
          fs-12
          py-6
          border-2
          hover--fast hover-bg-primary hover-text-white
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

<style scoped>
/* 處理  material-icons favotite  hover 後從  Outlined 樣式變成 fill 樣式  */
.material-icons.md1::before {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  content: 'favorite_border';
  cursor: pointer;
}

.btnwrap{
   cursor: pointer;
}
.btnwrap:hover .material-icons.md1::before {
  font-family: 'Material Icons';
  content: 'favorite';
}
</style>
