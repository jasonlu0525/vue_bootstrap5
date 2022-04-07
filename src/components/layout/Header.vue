<template>
  <header class="navbar navbar-expand-md navbar-light bg-white p-0">

    <div class="container position-relative" style="padding:30px;margin">
      <h1
      class="position-absolute position-md-static mb-0 start-50 top-50 translate-middle
      translate-middle-md-0 d-flex"
    >
      <a class="navbar-brand align-middle mb-0" href="#"
        ><img src="@/assets/image/mobile/logotype-sm-dark.svg " class="logo" alt="logo"
      /></a>
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
        class="collapse navbar-collapse position-absolute position-md-static top-100 start-0
        end-0 px-3 px-md-0 bg-white text-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto  mb-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-primary" aria-current="page">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product" class="nav-link text-primary">甜點</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link text-primary">登入</router-link>
          </li>
        </ul>
      </div>
      <router-link to="/cart" type="button" class="material-icons">shopping_cart</router-link>
    </div>
  </header>
</template>

<style scoped>
.logo {
  display: block;
  width: 150px;
  height: 18px;
}
</style>
