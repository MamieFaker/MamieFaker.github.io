<template>
  <div class="tip">
    <div class="tip-left">
      <span>喵，欢迎来到天猫&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
      <router-link to="/login"> 请登录&nbsp; &nbsp; &nbsp; </router-link>
      <router-link to="/Register">免费注册</router-link>
    </div>
    <div class="tip-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          我的淘宝<i class="el-icon-arrow-down el-icon--right">   |</i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>已买到的宝贝</el-dropdown-item>
          <el-dropdown-item>已卖出的宝贝</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <router-link to='/ShoppingCar'><i class="shopping cart icon"></i>购物车 | </router-link>
      <span> <i class="mobile icon"></i>手机版 |</span>
      <span><i class="qrcode icon"></i>淘宝网 |</span>
    </div>
  </div>
</template>

<script>
export default { name: 'Tip'
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: rgb(99, 99, 99);
}
.el-icon-arrow-down {
  font-size: 12px;
}
.tip {
  margin-top: -20px;
  width: 100%;
  height: 30px;
  background: rgb(233, 233, 233);
  /* background: gray; */
}

.tip-left {
  width: 30%;
  height: 100%;
  margin-left: 5%;
  color: grey;
  /* background: red; */
  float: left;
}
.tip-right {
  width: 50%;
  height: 100%;
  margin-right: 5%;
  color: grey;
  /* background: red; */
  text-align: center;
  float: right;
}
</style>
