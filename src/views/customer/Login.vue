<script></script>
<template>
  <div class="container pb-sm-14 py-lg-30">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-5 gx-0 gx-lg-10">
        <div class="bg-primary">
          <form>
            <div class="pt-15 pt-lg-20 px-15 pb-15 pb-lg-12">
              <h2 class="mb-15 mb-md-20 text-center text-white fs-18 fw-bold">會員登入</h2>
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

              <div class="mb-3 position-relative">
                <input
                  type="email"
                  class="form-control border-0 bg-secondary-100 text-primary-200 mb-8 ps-32"
                  id="email"
                  placeholder="電子信箱/手機號碼"
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
              <div class="mb-3 position-relative">
                <input
                  type="password"
                  class="form-control border-0 bg-secondary-100 text-primary-200 mb-8 ps-32"
                  id="password"
                  placeholder="請輸入使用者密碼"
                />
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
                <input class="form-check-input" type="checkbox" value="" id="rememberMe" />
                <label class="form-check-label text-secondary-100" for="rememberMe"> 記住我 </label>
              </div>
            </div>
            <button class="btn btn-accent text-center w-100 fs-12 fw-bold">登入帳號</button>
          </form>
        </div>
      </div>
      <section class="col-lg-5 d-none d-lg-block py-10 bg-secondary-100 my-10 text-center">
        <h3 class="text-secondary-200 mb-18">—— 連結社群帳號 ——</h3>
        <ul class="">
          <li class="bg-white py-10 hover--normal hover-bg-secondary-100 mb-8">
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
            class="bg-white py-10 hover--normal hover-bg-secondary-100 border-start border-end mb-8"
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
          <li class="bg-white py-10 hover--normal hover-bg-secondary-100 mb-8">
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
      </section>
    </div>
  </div>
</template>
<style></style>
