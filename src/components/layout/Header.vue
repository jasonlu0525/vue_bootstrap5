<template>
  <header class="navbar navbar-expand-md navbar-light bg-white py-15 positon-sticky sticky-top">
    <div class="container-md position-relative">
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
              media="(min-width:768px)"
              srcset="@/assets/image/desktop/logo/logo-all-dark.svg"
            />
            <img
              src="@/assets/image/mobile/logo/logotype-sm-dark.svg"
              class="logo"
              alt="sweet taste"
            />
          </picture>
        </a>
      </h1>
      <button
        class="navbar-toggler border-0"
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
          bg-white
          text-center
        "
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ms-auto mb-0 fw-bold">
          <li class="nav-item px-md-12">
            <router-link
              to="/"
              class="
                nav-link
                text-primary
                px-6
                py-14 py-md-0
                hover-text-decoration-primary-border-1
                hover--normal
                hover-bg-primary
                hover-text-white
                hover-md-no-hover
              "
              aria-current="page"
              >首頁</router-link
            >
          </li>
          <li class="nav-item px-md-6">
            <router-link
              to="/product"
              class="
                nav-link
                text-primary
                px-6
                py-14 py-md-0
                hover-text-decoration-primary-border-1
                hover--normal
                hover-bg-primary
                hover-text-white
                hover-md-no-hover
              "
              >甜點</router-link
            >
          </li>
          <li class="nav-item px-md-6">
            <router-link
              to="/login"
              class="
                nav-link
                text-primary
                px-6
                py-14 py-md-0
                hover-text-decoration-primary-border-1
                hover--normal
                hover-bg-primary
                hover-text-white
                hover-md-no-hover
              "
              >登入</router-link
            >
          </li>
        </ul>
      </div>
      <router-link to="/cart" type="button" class="material-icons ms-40">shopping_cart</router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  display: block;
  width: 114px;
  height: 18px;

  @include media-breakpoint-up(lg) {
    width: 219px;
    height: 40px;
  }
}
.banner {
  background-image: url('https://bit.ly/2OhbMHr');
  height: 277px;
  @include media-breakpoint-up(lg) {
    height: 496px;
  }
}
</style>
