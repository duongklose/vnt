<template>
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <h1 class="mt-50">Đăng nhập</h1>
        <br>
        <br>
        <form>
          <div class="form-group">
            <input type="text" class="form-control" id="username" placeholder="Tên đăng nhập"/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="pass" placeholder="Mật khẩu"/>
          </div>
          <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </form>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
export default {};

</script>

<style>
.mt-50{
    margin-top: 50px;
}
</style>