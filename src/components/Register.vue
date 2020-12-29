<template>
  <div class="register">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" width="100%" height="100%" />
      </router-link>
    </div>
    <div class="number">
      <div class="tip">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号:</div>
      <el-input v-model="num" placeholder="手机号/邮箱"></el-input>
    </div>
    <div class="name">
      <div class="tip">会&nbsp;&nbsp;员&nbsp;&nbsp;名:</div>
      <el-input
        v-model="Name"
        placeholder="会员名一旦设置成功，无法修改"
      ></el-input>
    </div>
    <div class="loginPass">
      <div class="tip">登录密码:</div>
      <el-input v-model="pass" placeholder="设置你的登陆密码"></el-input>
    </div>
    <div class="passwordTrue">
      <div class="tip">密码确认:</div>
      <el-input v-model="Tpass" placeholder="请再次输入你的密码"></el-input>
    </div>
    <div class="submit">
      <router-link to="/login"><el-button>提交</el-button></router-link>
    </div>
    <router-link to="login"><h5>请登录</h5></router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: '',
      Name: '',
      pass: '',
      Tpass: ''
    }
  }
}
</script>
<style scoped>
.logo {
  position: absolute;
  width: 190px;
  height: 30px;
  top: 20px;
  left: 60px;
  background: black;
}
h5 {
  position: absolute;
  top:530px;
  left: 580px;
  width: 100px;
  height: 100px;
  color: rgb(153, 153, 153);
}
h5:hover {
  color: #ff0036;
}
.register {
  position: relative;
  margin: 0 auto;
  margin-top: -70px;
  width: 1000px;
  height: 700px;
}
.number {
  position: absolute;
  width: 400px;
  height: 50px;
  left: 300px;
  top: 100px;
}
.name {
  position: absolute;
  width: 400px;
  height: 50px;
  left: 300px;
  top: 167px;
}
.loginPass {
  position: absolute;
  width: 400px;
  height: 50px;
  left: 300px;
  top: 234px;
}
.passwordTrue {
  position: absolute;
  width: 400px;
  height: 50px;
  left: 300px;
  top: 300px;
}
.submit {
  position: absolute;
  width: 400px;
  height: 50px;
  left: 200px;
  top: 500px;
}
.tip {
  position: absolute;
  top: 00px;
  left: -200px;
  width: 200px;
  height: 50px;
  padding: 10px;
  font-size: 20px;
}
.el-button {
  width: 200px;
  background: #ff0036;
  font-size: 20px;
  color: white;
}
</style>
