<template>
  <header class="navbar navbar-expand-md navbar-light bg-white py-7 positon-sticky sticky-top">
    <div class="container position-relative" >
      <h1
        class="
          position-absolute position-md-static
          mb-0
          start-50
          top-50
          translate-middle translate-middle-md-0
          d-flex
        "
      >
        <a class="navbar-brand align-middle mb-0" href="#">
          <picture>
            <source
              media="(min-width:992px)"
              srcset="@/assets/image/desktop/logo/logo-all-dark.svg"
            />
            <img src="@/assets/image/mobile/logotype-sm-dark.svg " class="logo" alt="logo" />
          </picture>
        </a>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="
          collapse
          navbar-collapse
          position-absolute position-md-static
          top-100
          start-0
          end-0
          px-3 px-md-0
          bg-white
          text-center
        "
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ms-auto  mb-0 fw-bold">
          <li class="nav-item px-md-6">
            <router-link to="/" class="nav-link text-primary
            px-3" aria-current="page">首頁</router-link>
          </li>
          <li class="nav-item px-md-6">
            <router-link to="/product" class="nav-link text-primary px-3">甜點</router-link>
          </li>
          <li class="nav-item px-md-6">
            <router-link to="/login" class="nav-link text-primary  px-3">登入</router-link>
          </li>
        </ul>
      </div>
      <router-link to="/cart" type="button" class="material-icons ms-20">shopping_cart</router-link>
    </div>
  </header>
</template>

<style scoped>
.logo {
  display: block;
  width: 150px;
  height: 18px;
}
.banner{
  background-image: url('https://bit.ly/2OhbMHr');
  height: 277px;

}

@media (min-width: 992px) {
  .logo {
    width: 220px;
    height: 40px;
  }
  .banner{
    height: 496px;
  }
}
</style>
