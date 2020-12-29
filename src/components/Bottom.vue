<template>
    <div class="bottom">
      <div class="Bgpic">
        <img src="../assets/pic01.png" width="100%" height="100%" />
      </div>
      <div class="Lpic">
        <img src="../assets/pic011.jpg" width="100%" height="100%" />
      </div>
      <div class="Lpic">
        <img src="../assets/pic012.jpg" width="100%" height="100%" />
      </div>
      <div class="Lpic">
        <img src="../assets/pic013.jpg" width="100%" height="100%" />
      </div>
      <div class="Lpic">
        <img src="../assets/pic014.jpg" width="100%" height="100%" />
      </div>
      <div class="Lpic">
        <img src="../assets/pic015.jpg" width="100%" height="100%" />
      </div>
      <div class="Lpic">
        <img src="../assets/pic016.jpg" width="100%" height="100%" />
      </div>
    </div>
</template>
<script>
export default {name: 'Bottom'
}
</script>
<style scoped>
.bottom {
  margin-top: 20px;
  width: 80%;
  margin-left: 10%;
  height: 400px;
}
.Bgpic {
  width: 30%;
  height: 100%;
  float: left;
  background: yellow;
}
.Lpic {
  width: 20%;
  height: 46%;
  float: right;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid rgb(233, 233, 233);
  margin-top: 10px;
  margin-bottom: 10px;
  background: green;
}
</style>
