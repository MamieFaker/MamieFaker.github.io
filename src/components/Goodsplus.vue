<template>
  <div class="view">
    <div class="back">
      <router-link to="/">
        <img src="../assets/logo.png" width="100%" height="100%" />
      </router-link>
    </div>
    <div class="bigpc">
      <img :src="getimg1()" width="100%" height="100%" />
    </div>
    <div class="smallpic1">
      <img :src="getimg1()" width="100%" height="100%" />
      <div class="second1">
        <img :src="getimg1()" width="100%" height="100%" />
      </div>
    </div>
    <div class="smallpic2">
      <img :src="getimg2()" width="100%" height="100%" />
      <div class="second2">
        <img :src="getimg2()" width="100%" height="100%" />
      </div>
    </div>
    <div class="smallpic3">
      <img :src="getimg3()" width="100%" height="100%" />
      <div class="second3">
        <img :src="getimg3()" width="100%" height="100%" />
      </div>
    </div>
    <div class="smallpic4">
      <img :src="getimg4()" width="100%" height="100%" />
      <div class="second4">
        <img :src="getimg4()" width="100%" height="100%" />
      </div>
    </div>
    <div class="name">
      <h3>{{ getname() }}</h3>
    </div>
    <div class="infor">
      <img src="../assets/goodsshow.png" width="100%" height="100%" />
    </div>
    <div class="pirce">
      <h1>价格&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;￥ {{ getpirce() }}</h1>
    </div>
    <div>
      <span class="nub">
        <el-input-number v-model="num" @change="handleChange" :min="0" :max="10" label="描述文字">
        </el-input-number>
        </span>
    </div>
    <div class="add">
      <el-button><i class="shopping cart icon"></i>加入购物车</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 1
    }
  },
  created () {
    this.id = this.$route.query.name
  },
  methods: {
    getname () {
      return this.$store.state.goods[this.id].title
    },
    getpirce () {
      return this.$store.state.goods[this.id].pirce
    },
    getimg1 () {
      return this.$store.state.goods[this.id].pc1
    },
    getimg2 () {
      return this.$store.state.goods[this.id].pc2
    },
    getimg3 () {
      return this.$store.state.goods[this.id].pc3
    },
    getimg4 () {
      return this.$store.state.goods[this.id].pc4
    },
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
<style scoped>
.nub {
  position: absolute;
  left: 460px;
  top:400px;

}

h3 {
  color: black;
}
.infor {
  position: absolute;
  top: 60px;
  left: 440px;
  width: 590px;
  height: 160px;
  background: black;
}
.view {
  position: relative;
  top: 0px;
  margin: 0 auto;
  width: 960px;
  height: 400px;
  /* background: #ff0036; */
}
.back {
  position: absolute;
  width: 190px;
  height: 30px;
  margin-top: -50px;
}
.bigpc {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 418px;
  height: 418px;
  /* border: 1px solid #ff0036; */
  z-index: -1;
}
.smallpic1 {
  position: absolute;
  left: 10px;
  top: 450px;
  height: 90px;
  width: 90px;
  background: white;
}
.smallpic2 {
  position: absolute;
  left: 110px;
  top: 450px;
  height: 90px;
  width: 90px;
  background: white;
}
.smallpic3 {
  position: absolute;
  left: 210px;
  top: 450px;
  height: 90px;
  width: 90px;
  background: white;
}
.smallpic4 {
  position: absolute;
  left: 310px;
  top: 450px;
  height: 90px;
  width: 90px;
  background: white;
}
.smallpic1:hover {
  border: 2px solid #ff0036;
}
.smallpic2:hover {
  border: 2px solid #ff0036;
}
.smallpic3:hover {
  border: 2px solid #ff0036;
}
.smallpic4:hover {
  border: 2px solid #ff0036;
}
.name {
  position: absolute;
  top: 0px;
  left: 418px;
  width: 600px;
  height: 30px;
  /* background: black; */
}
.pirce {
  position: absolute;
  top: 250px;
  left: 460px;
  width: 500px;
  height: 30px;
  text-align: left;
  color: #ff0036;
  background: #f8f8f8;
}
.add {
  position: absolute;
  top: 500px;
  left: 500px;
  width: 500px;
  height: 50px;
}
.el-button {
  background: #ff0036;
  color: white;
}
.second1 {
  display: none;
  position: absolute;
  top: -450px;
  left: -10px;
  width: 418px;
  height: 418px;
  background: white;
}
.second2 {
  display: none;
  position: absolute;
  top: -450px;
  left: -110px;
  width: 418px;
  height: 418px;
  background: white;
}
.second3 {
  display: none;
  position: absolute;
  top: -450px;
  left: -210px;
  width: 418px;
  height: 418px;
  background: white;
}
.second4 {
  display: none;
  position: absolute;
  top: -450px;
  left: -310px;
  width: 418px;
  height: 418px;
  background: white;
}
.smallpic1:hover .second1 {
  display: block;
}
.smallpic2:hover .second2 {
  display: block;
}
.smallpic3:hover .second3 {
  display: block;
}
.smallpic4:hover .second4 {
  display: block;
}
</style>
