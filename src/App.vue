<template>
  <div class="app">
    <!-- <v-header :seller="seller"></v-header> -->
    <div class="tab border-1px">
      <div class="tab-item" >
        <router-link :to="{path:'/goods'}">商品</router-link>
      </div>
      <div class="tab-item" >
        <router-link :to="{path:'/ratings'}">评论</router-link>
      </div>
      <div class="tab-item" >
        <router-link to="seller">商家</router-link>
      </div>
    </div>
    <router-view  :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import vHeader from '@/components/header/header'
const ERR_OK = 0
export default {
  name: 'App',
  data () {
    return {
      seller: {}
      // state:['success','fail'],
      // msg: ['操作失败', '保存失败', '定义失败','']
    }
  },
  async created () {
    // this.$axios.get('/api/seller').then(res => {
    //   if (res.errno === ERR_OK) {
    //     this.seller = res.data
    //   }
    // })
    try {
      const res = await this.$axios('api/seller')
      if (res.errno === ERR_OK) {
        // fail = res.errorMsg
        // fail = '操作失败'
        this.seller = res.data
        this.$alertMsg('success', '操作成功')
      } else {
        this.$alertMsg('fail', '操作失败')
      }
    } catch (err) {
      console.log('c')
    }
  },
  components: {
    vHeader
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  // @import在样式中引入东西需加分号，在js中可以不加
  // @import "./common/scss/mixin.scss";
  @import "./common/scss/index.scss";
  .app{
    .tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .tab-item {
        flex: 1;
        text-align: center;
        & > a{
          display: block;
          font-size: 14px;
          color: rgb(77, 85, 93);
          &.active {
            color: rgb(240, 20, 20);
          }
        }
      }
    }
  }
</style>
