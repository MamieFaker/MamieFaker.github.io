<template>
  <div class="View">
    <Tip></Tip>

    <Top></Top>

    <Main></Main>

    <Daiyan></Daiyan>

    <Bottom></Bottom>
    <Guanggao></Guanggao>

    <Goodslist></Goodslist>

    <Final></Final>
  </div>
</template>
<script>
import Tip from '../components/Tip'
import Top from '../components/Top'
import Main from '../components/Main'
import Daiyan from '../components/Daiyan'
import Bottom from '../components/Bottom'
import Guanggao from '../components/Guanggao'
import Goodslist from '../components/Goodslist'
import Final from '../components/Final'

export default {
  created () {
    this.init()
  },
  components: { Tip, Top, Main, Daiyan, Bottom, Guanggao, Goodslist, Final },
  methods: {
    init () {
      this.$axios.get('static/data/goodslist.json').then((res) => {
        this.$store.commit('initgoods', res.data.good)
      })
    }
  }
}
</script>

<style scoped>
.View {
  width: 1200px;
  height: 1900px;
  margin: 0 auto;
  margin-top: -60px;
}
</style>
