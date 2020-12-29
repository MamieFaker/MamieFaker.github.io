<template>
  <div class="goodslist">
    <span
      ><h3><i class="heart icon"></i>——猜你喜欢——</h3></span
    >
    <table>
      <tr v-for="tr in 10" :key="tr">
        <td v-for="td in 5" :key="td">
          <Goodshow :id="tr*5-5+td"/>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import Goodshow from '../components/Goodshow'
export default {
  name: 'Goodslist',
  components: {
    Goodshow
  }
}
</script>
<style scoped>
.goodslist {
  margin-top: 20px;
  margin-left: 10%;
  width: 80%;
  text-align: center;
}
.goods {
  width: 23%;
  height: 43%;
  float: right;
  border: 1px solid rgb(233, 233, 233);
  /* background: red; */
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 20px;
}
table{
  width: 960px;
  height: 900px;
  background: rgb(255, 255, 255);
}
td{
  position: relative;
  width: 96px;
  height: 230px;
}
td:hover{
  border: 2px solid #ff0036;
}
</style>
