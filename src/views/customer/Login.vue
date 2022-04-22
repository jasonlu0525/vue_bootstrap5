<script></script>
<template>
  <div class="container pb-sm-14 py-lg-30">
    <div class="row justify-content-center gx-lg-0 align-items-center">
      <div class="col-md-10 col-lg-5 gx-0">
        <div class="bg-primary">
          <Form v-slot="{ errors }" @submit="login">
            <div class="pt-15 pt-lg-20 px-15 pb-15 pb-lg-12">
              <h2 class="mb-15 mb-md-20 text-center text-white fs-18 fw-bold lh-1">會員登入</h2>
              <ul class="d-flex bg-secondary-100 d-lg-none p-15 mx-n15 mb-15 text-center">
                <li class="col bg-white py-10 hover--normal hover-bg-secondary-100">
                  <a href="#">
                    <img
                      class="object-fit-contain"
                      src="@/assets/image/desktop/icon/ic-facebook-logotype.svg"
                      alt="facebook_logo"
                      width="73"
                      height="24"
                  /></a>
                </li>
                <li
                  class="
                    col
                    bg-white
                    py-10
                    hover--normal hover-bg-secondary-100
                    border-start border-end
                  "
                >
                  <a href="#">
                    <img
                      class="object-fit-contain"
                      src="@/assets/image/desktop/icon/ic-google.svg"
                      alt="google_logo"
                      width="73"
                      height="24"
                  /></a>
                </li>
                <li class="col bg-white py-10 hover--normal hover-bg-secondary-100">
                  <a href="#">
                    <img
                      class="object-fit-contain"
                      src="@/assets/image/desktop/icon/ic-yahoo.svg"
                      alt="yahoo_logo"
                      width="73"
                      height="24"
                  /></a>
                </li>
              </ul>

              <div class="mb-8">
                <div class="position-relative">
                  <Field
                    v-model="loginFormData.account"
                    type="email"
                    class="form-control border-0 bg-secondary-100 text-primary-200 ps-32"
                    id="email"
                    placeholder="電子信箱/手機號碼"
                    name="email"
                    rules="email|required"
                    :class="{ 'is-invalid': errors['email'] }"
                  />
                  <label
                    for="email"
                    class="
                      material-icons
                      text-primary
                      position-absolute
                      top-50
                      start-0
                      translate-middle-y
                      ps-10
                    "
                  >
                    person
                  </label>
                </div>
                <span :class="{ 'text-white': errors['email'] }"> {{ errors['email'] }} </span>
              </div>
              <div class="mb-8 position-relative">
                <Field
                  v-model="loginFormData.password"
                  type="password"
                  class="form-control border-0 bg-secondary-100 text-primary-200 ps-32"
                  id="password"
                  placeholder="請輸入使用者密碼"
                  name="password"
                  rules="required"
                  :class="{ 'is-invalid': errors['password'] }"
                />
                <span :class="{ 'text-white': errors['password'] }">
                  {{ errors['password'] }}
                </span>
                <label
                  for="password"
                  class="
                    material-icons
                    text-primary
                    position-absolute
                    top-50
                    start-0
                    translate-middle-y
                    ps-10
                  "
                >
                  vpn_key
                </label>
              </div>
              <div class="form-check">
                <input
                  v-model="loginFormData.rememberMe"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberMe"
                  :true-value="1"
                  :false-value="0"
                />
                <label class="form-check-label text-secondary-100" for="rememberMe"> 記住我 </label>
              </div>
            </div>
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
      </div>
      <section class="col-lg-5 d-none d-lg-block px-15 py-20 bg-secondary-100 text-center">
        <h3 class="text-secondary-200 mb-17 fs-12 lh-base">—— 連結社群帳號 ——</h3>
        <ul class="">
          <li class="py-14 mb-8 position-relative">
            <a
              href="#"
              class="
                position-absolute
                start-0
                end-0
                top-0
                bottom-0
                bg-white
                hover--normal hover-bg-secondary-100
              "
            >
              <img
                class="
                  object-fit-contain
                  position-absolute
                  top-50
                  start-50
                  translate-middle
                  hover-no-hover
                "
                src="@/assets/image/desktop/icon/ic-facebook-logotype.svg"
                alt="facebook_logo"
                width="108"
                height="21"
            /></a>
          </li>
          <li class="mb-8 position-relative py-14">
            <a
              href="#"
              class="
                position-absolute
                start-0
                end-0
                top-0
                bottom-0
                bg-white
                hover--normal hover-bg-secondary-100
              "
            >
              <img
                class="
                  object-fit-contain
                  position-absolute
                  top-50
                  start-50
                  translate-middle
                  hover-no-hover
                "
                src="@/assets/image/desktop/icon/ic-google.svg"
                alt="google_logo"
                width="94"
                height="31"
            /></a>
          </li>
          <li class="py-14 position-relative">
            <a
              href="#"
              class="
                position-absolute
                start-0
                end-0
                top-0
                bottom-0
                bg-white
                hover--normal hover-bg-secondary-100
              "
            >
              <img
                class="
                  object-fit-contain
                  position-absolute
                  top-50
                  start-50
                  translate-middle
                  hover-no-hover
                "
                src="@/assets/image/desktop/icon/ic-yahoo.svg"
                alt="yahoo_logo"
                width="97"
                height="22"
            /></a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const $router = useRouter();

const loginFormData = ref({
  account: '',
  password: '',
  rememberMe: false,
});
onMounted(() => {
  const storageLoginData = JSON.parse(localStorage.getItem('login'));
  if (storageLoginData) {
    loginFormData.value = storageLoginData;
  }
});

const login = () => {
  $router.push('/');
  const { rememberMe } = loginFormData.value;
  if (rememberMe) {
    localStorage.setItem('login', JSON.stringify(loginFormData.value));
  } else {
    localStorage.removeItem('login');
  }
};
</script>
