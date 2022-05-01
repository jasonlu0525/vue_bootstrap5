<template>
  <div class="bg-primary">
    <Form v-slot="{ errors }" @submit="$router.push('/checkout/payment')">
      <section class="pt-15 pt-lg-20 px-15 pb-15 pb-lg-12">
        <h2 class="mb-15 mb-md-20 text-white fs-18 fw-bold lh-1">運送</h2>

        <div class="mb-8 row gx-4">
          <div class="col">
            <label for="firstName" class="form-label text-white fs-10 fw-bold"> 姓氏 </label>
            <Field
              type="text"
              class="form-control border-0 bg-secondary-100 text-secondary-200"
              id="firstName"
              placeholder="王"
              name="姓氏"
              rules="required"
              :class="{ 'is-invalid': errors['姓氏'] }"
            />
            <ErrorMessage as="p" name="姓氏" :class="{ 'text-white mt-4': errors['姓氏'] }" />
          </div>
          <div class="col">
            <label for="firstName" class="form-label text-white fs-10 fw-bold"> 名字 </label>
            <Field
              type="text"
              class="form-control border-0 bg-secondary-100 text-secondary-200"
              id="secondName"
              placeholder="小明"
              name="名字"
              rules="required"
              :class="{ 'is-invalid': errors['名字'] }"
            />
            <ErrorMessage as="p" name="名字" :class="{ 'text-white mt-4': errors['名字'] }" />
          </div>
        </div>
        <div class="mb-8 row gx-4">
          <div class="col">
            <label for="phone" class="form-label text-white fs-10 fw-bold"> 電話 </label>
            <Field
              type="tel"
              class="form-control border-0 bg-secondary-100 text-secondary-200"
              id="phone"
              placeholder="王"
              name="電話"
              rules="required"
              :class="{ 'is-invalid': errors['電話'] }"
            />
            <ErrorMessage as="p" name="電話" :class="{ 'text-white mt-4': errors['電話'] }" />
          </div>
        </div>
        <div class="mb-4 row gx-4">
          <label for="address" class="form-label text-white fs-10 fw-bold"> 地址 </label>
          <div class="col">
            <Field
              as="select"
              class="form-select border-0 bg-secondary-100 text-secondary-200"
              id="address"
              placeholder="請選擇縣市"
              name="姓氏"
              rules="required"
              :class="{ 'is-invalid': errors['姓氏'] }"
            >
              <option value="" selected  disabled class="text-secondary-200">
                請選擇縣市
              </option>
              <option value="高雄市">高雄市</option>
            </Field>
            <ErrorMessage as="p" name="姓氏" :class="{ 'text-white mt-4': errors['姓氏'] }" />
          </div>
          <div class="col">
            <Field
              as="select"
              class="form-select border-0 bg-secondary-100 text-secondary-200"
              id="address"
              placeholder="請選擇行政區"
              name="行政區"
              rules="required"
              :class="{ 'is-invalid': errors['行政區'] }"
            >
              <option value="" selected  disabled class="text-secondary-200">
                請選擇行政區
              </option>
              <option value="新興區">新興區</option>
            </Field>
            <ErrorMessage as="p" name="行政區" :class="{ 'text-white mt-4': errors['行政區'] }" />
          </div>
        </div>
        <div class="mb-8 row gx-4">
          <div class="col">
            <Field
              type="text"
              class="form-control border-0 bg-secondary-100 text-secondary-200"
              placeholder="請施入地址"
              name="地址"
              rules="required"
              :class="{ 'is-invalid': errors['地址'] }"
            />
            <ErrorMessage as="p" name="地址" :class="{ 'text-white mt-4': errors['地址'] }" />
          </div>
        </div>
      </section>
      <button
        type="submit"
        class="
          btn btn-accent
          text-center
          w-100
          fs-12
          fw-bold
          hover--normal hover-text-accent hover-bg-primary
        "
      >
        登入帳號
      </button>
    </Form>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
import { useRouter } from 'vue-router';

const $router = useRouter();

// const deliveryFormData = ref({
//   lastName: '',
//   firstName: '',
//   phone: '',
//   address: {
//     county: '',
//     district: '',
//     road: '',
//   },
// });
</script>
