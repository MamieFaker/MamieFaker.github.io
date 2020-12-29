<template>
    <div class="top">
      <div class="logo">
        <img src="../assets/dt.gif" width="100%" height="100%" />
      </div>
      <div class="top2" >
        <input type="text" placeholder="搜索 天猫 商品/品牌/店铺"/>
        <el-button >搜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;索</el-button>
      </div>
    </div>
</template>

<script>
export default {name: 'Top'
}
</script>

<style scoped>
.el-button{
  margin-left:-4px ;
  border: #FF0036;
  background: #ff0036;
  color: white;
  border-radius: 0px;
}
.el-button:hover{
  background: #ff0036;
  color: white;
}
.el-button:visited{
  background: #ff0036;
  color: white;
}
.el-button:focus{
  background: #ff0036;
  color: white;
}
.logo {
  width: 290px;
  height: 130px;
  float: left;
  margin-left: 75px;
  margin-bottom: 0PX;
}
input{
  margin-top: 70px;
  margin-left: -80px;
  width: 500px;
  height: 38px;
  border: 2px solid #FF0036;
  background: white;
}
.top{
  width: 100%;
  height: 180px;
  border-bottom: 2px solid red;
  /* border: 1px solid black; */
}
.top2 {
  align-content: 0 auto;
  margin-top: 60px;
  margin-bottom: 30px;
}
</style>
