<template>
  <tr
    class="border-secondary-100 d-flex flex-wrap d-md-table-row px-15 px-md-0"
    :class="{ 'isLastItem ':  lastItem }"
  >
    <th scope="row" class="pt-15 pb-4 px-0 py-md-10 col-6 col-md-auto">
      <picture>
        <source
          :srcset="cartItems.product.imageUrl"
          media="(min-width:768px)"
          width="110"
          height="110"
        />
        <img
          :src="cartItems.product.imageUrl"
          :alt="cartItems.product.title"
          width="157"
          height="106"
        />
      </picture>
    </th>
    <td class="pt-15 pe-0 pb-4 ps-8 py-md-10 ps-md-0 col-6 col-md-auto ps-md-19">
      <h3 class="fs-10 fw-light lh-1">{{ cartItems.product.title }}</h3>
      <p class="mb-4 mb-md-0">NT$ {{ cartItems.product.price }}</p>
      <div class="d-flex align-items-center d-md-none">
        <button
          class="
            btn
            text-primary
            bg-transparent
            border-secondary-100
            px-9
            py-5
            hover--normal hover-bg-accent
          "
        >
          -</button
        ><span class="px-9 py-7 border-top border-bottom border-secondary-100 lh-1">{{
          cartItems.qty
        }}</span
        ><button
          class="
            btn
            text-primary
            bg-transparent
            border-secondary-100
            px-9
            py-5
            hover--normal hover-bg-accent
          "
          type="button"
        >
          +
        </button>
      </div>
    </td>
    <td class="d-md-none w-100 py-4 ps-md-19">
      <div class="d-flex align-items-center justify-content-end">
        <p class="mb-0 fs-10 fw-bold">NT${{ cartItems.totalPrice }}</p>
      </div>
    </td>
    <td class="py-10 px-0 d-none d-md-table-cell ps-md-19">
      <div class="d-flex align-items-center">
        <button
          class="
            btn
            text-primary
            bg-transparent
            border-secondary-100
            px-9
            py-5
            hover--normal hover-bg-accent
          "
        >
          -</button
        ><span class="px-9 py-7 border-top border-bottom border-secondary-100 lh-1">2</span
        ><button
          class="
            btn
            text-primary
            bg-transparent
            border-secondary-100
            px-9
            py-5
            hover--normal hover-bg-accent
          "
          type="button"
        >
          +
        </button>
      </div>
    </td>

    <td class="py-10 px-0 fs-10 d-none d-md-table-cell ps-md-19">NT$ {{ cartItems.totalPrice }}</td>
    <td class="py-10 pe-0 d-none d-md-table-cell ps-md-19">
      <button
        type="button"
        class="
          material-icons-outlined
          bg-transparent
          border-0
          hover--normal hover-text-accent
          p-0
          d-block
          ms-auto
        "
      >
        delete
      </button>
    </td>
  </tr>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const cartData = defineProps({
  cartItems: Object,
  lastItem: Boolean,
});

const { cartItems, lastItem } = toRefs(cartData);
</script>

<style lang="scss">
.isLastItem {
  & > th,
  td {
    border: none !important;
  }
}
</style>
