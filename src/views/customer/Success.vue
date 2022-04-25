<template>
  <div class="container-md banner mb-md-30">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-md-4">
        <div class="d-flex justify-content-center">
          <section class="">
            <div class="position-relative">
              <ul class="d-flex justify-content-between mb-15 text-primary z-index-center">
                <li><span class="material-icons"> check_circle </span></li>
                <li class="line"><span class="material-icons"> check_circle </span></li>
                <li><span class="material-icons"> check_circle </span></li>
              </ul>
            </div>
            <h1 class="mb-26">
              <img
                src="@/assets/image/desktop/lg-付款成功.svg"
                width="189"
                height="45"
                alt="付款成功"
              />
            </h1>
          </section>
        </div>

        <router-link
          to="/product"
          class="btn btn-accent text-primary w-100 fw-bold fs-12 d-none d-md-block"
          >繼續逛逛</router-link
        >
      </div>
    </div>
  </div>
  <router-link to="/product" class="btn btn-accent text-primary w-100 fw-bold fs-12 d-md-none"
    >繼續逛逛</router-link
  >
</template>

<style lang="scss" scoped>
.banner {
  background-image: url('https://bit.ly/2P7GhNd');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 518px;
  @include media-breakpoint-up(lg) {
    height: 460px;
  }
}

.line {
  position: relative;
  &::before,
  &::after {
    top: 50%;
    position: absolute;
    width: 66px;
    content: '';
    border-bottom: 1px solid $primary;
  }
  &::before {
    margin-right: -4px;
    right: 24px;
  }
  &::after {
    margin-left: -4px;
    left: 24px;
  }
}
</style>
