<template>
  <footer>
    <div class="bg-primary py-15 px-10 px-md-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row justify-content-between">
              <section
                class="
                  col-md-6
                  d-flex
                  justify-content-center justify-content-md-start
                  align-items-center
                  mb-15 mb-md-0
                "
              >
                <img
                  src="@/assets/image/desktop/logo/logo-light.svg"
                  width="40"
                  height="40"
                  alt=""
                />
                <h2 class="mb-0 fs-4 text-secondary-100 ms-10">訂閱你我的甜蜜郵件</h2>
              </section>
              <div class="col-md-5">
                <div class="input-group flex-nowrap position-relative">
                  <span
                    class="
                      material-icons
                      position-absolute
                      top-0
                      start-0
                      z-index-top
                      py-8
                      px-10
                      bg-secondary-100
                    "
                  >
                    email
                  </span>
                  <input
                    type="mail"
                    class="form-control py-8 border-0 ps-32 m-0 bg-secondary-100"
                    placeholder="請輸入電子郵件"
                    aria-label="email "
                    aria-describedby="please fill in email"
                  />
                  <button
                    type="button"
                    class="
                      material-icons-outlined
                      input-group-text
                      bg-accent
                      fs-4
                      d-flex
                      px-10
                      border-0
                    "
                  >
                    arrow_forward
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-secondary-100 py-15 px-10 px-md-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="d-flex justify-content-between flex-column">
                <h5 class="mb-20">
                  <router-link to="/" rel="noopener noreferrer">
                    <img
                      width="171"
                      height="27"
                      src="@/assets/image/desktop/logo/logotype-lg-dark.svg"
                      alt=""
                    />
                  </router-link>
                </h5>

                <address>
                  <ul>
                    <li>
                      <a href="tel+07-1234-5678" rel="noopener noreferrer">07-1234-5678</a>
                    </li>
                    <li>
                      <a href="mailto:sweetaste@email.com" rel="noopener noreferrer"
                        >sweetaste@email.com</a
                      >
                    </li>

                    <li
                      class="mb-18 mb-md-15 border-bottom border-secondary-100 border-bottom-md-0
                      text-primary"
                    >
                      800 高雄市新興區幸福路 520 號
                    </li>
                    <li class="mb-12 mb-md-0">
                      <a href="#"
                        ><img
                          src="@/assets/image/desktop/icon/ic-facebook.svg"
                          width="32"
                          height="32"
                          alt="" /></a
                      ><a href="#" class="ms-4"
                        ><img
                          src="@/assets/image/desktop/icon/ic-line@.svg"
                          width="32"
                          height="32"
                          alt=""
                      /></a>
                    </li>
                  </ul>
                </address>
              </div>
              <div>
                <img
                  src="@/assets/image/desktop/sm-今天是個吃甜點的好日子.svg"
                  class="d-none d-md-block ms-md-auto mb-23"
                  height="219"
                  alt="今天是個吃甜點的好日子"
                />
                <h6 class="mb-0 text-primary">© 2018 Sweetaste* All Rights Reserved</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
