<template>
  <div class="login">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" width="100%" height="100%" />
      </router-link>
    </div>
    <div class="loginInput">
        <h3>密码登录</h3>
      <div class="Input">
        <el-input placeholder="会员名/邮箱/手机号" v-model="input" size="100px">
          <template slot="prepend"><i class="el-icon-user-solid"></i></template>
        </el-input>
      </div>
      <div class="Password">
        <el-input placeholder="请输入密码" v-model="password" show-password>
          <template slot="prepend" ><i class="el-icon-lock"></i></template>
        </el-input>
      </div>
      <div class="loginbt">
        <router-link to="/"><el-button type="primary">登       录</el-button></router-link>
      </div>
      <div class="register">
          <router-link to='Register'><h5>免费注册</h5></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      password: ''
    }
  }
}
</script>

<style scoped>
.login {
  position: relative;
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  background-image: url("../assets/loginbg.jpg");
}
h3{
    position: absolute;
    left:30px;
    top:50px;
}
.logo {
  position: absolute;
  width: 190px;
  height: 30px;
  margin-top: -50px;
}
.loginInput {
  position: absolute;
  width: 350px;
  height: 404px;
  right: 100px;
  top: 50px;
  background: white;
}
.Input {
  position: absolute;
  top: 100px;
  left: 25px;
  width: 300px;
  height: 42;
}
.Password {
  position: absolute;
  top: 160px;
  left: 25px;
  width: 300px;
  height: 42;
}
.loginbt{
position: absolute;
  top: 240px;
  left: 25px;
  width: 300px;
  height: 42;
}
.el-input :hover{
border:1px solid #ff0036;
}
.el-button{
    background:#ff0036;
    width: 300px;
    height: 42px;
    border: 0px;
}
.register{
    position:absolute;
    top:300px;
    right: 10px;
    width: 100px;
    color: rgb(177, 177, 177);
}
</style>
