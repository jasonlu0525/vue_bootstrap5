<script></script>
<template>
  <div class="container py-lg-30">
    <div class="row justify-content-center">
      <div class="col-lg-5">
        <div class="bg-primary">
          <form>
            <div class="pt-15 pt-lg-20 px-15">
              <h2 class="mb-15 mb-md-20 text-center text-white fs-18 fw-bold">會員登入</h2>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="電子信箱/手機號碼"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Email address</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="請輸入使用者密碼"
                />
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="rememberMe" />
                <label class="form-check-label text-secondary-100" for="rememberMe"> 記住我 </label>
              </div>
            </div>
            <button class="btn btn-accent text-center w-100 fs-12">登入帳號</button>
          </form>
        </div>
      </div>
      <div class="col-lg-5"></div>
    </div>
  </div>
</template>
<style></style>
