<template>
  <div class="View">
    <div>
      <router-link :to="{ path: '/Goodsplus', query: { name: id } }"
        ><img :src="getimg()"
      /></router-link>
    </div>
    <div class="name">
      <span>{{ getname() }}</span>
    </div>
    <div class="price">
      <span>￥{{ getprice() }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  methods: {
    getimg () {
      return this.$store.state.goods[this.id].pc1
    },
    getprice () {
      return this.$store.state.goods[this.id].pirce
    },
    getname () {
      return this.$store.state.goods[this.id].title
    }
  }
}
</script>

<style scoped>
img {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 0px;
  left: 20px;
}
.name {
  position: absolute;
  left: 20px;
  top: 150px;
  width: 150px;
  height: 20px;
  /* background: red; */
  font-size: 5px;
}
.price {
  position: absolute;
  left: 20px;
  top: 200px;
  width: 150px;
  height: 20px;
  color: #ff0036;
  /* background: blue; */
}
span {
  width: 150px;
  height: 20px;
}
</style>
