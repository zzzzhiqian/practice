<template>
  <div class="pop-container" v-if="isShow" @click.self="isPopShow">
    <div class="pop" :style="`width:${popWidth}px;`">
      <slot name="title"></slot>
      <slot name="desc"></slot>
      <div class="btn-container">
        <v-button @btnClick="confirmClick" :bgTheme="'primary'" :btnSize="'btn-large'" :isLoading="isLoading">确定</v-button>
        <v-button @btnClick="cancelClcik" :btnSize="'btn-large'">取消</v-button>
      </div>
      <i class="close" @click="isPopShow"></i>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
import vButton from '../button/button'
export default {
  components: {
    vButton
  },
  props: {
    popWidth: {
      type: Number,
      default: 340
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      clickedHideLoading: 0,
      isLoading: true
      // isShows: this.isShow
    }
  },
  methods: {
    confirmClick () {
      this.$emit('confirmClick')
    },
    cancelClcik () {
      this.$emit('cancelClcik')
    },
    isPopShow () {
      this.$emit('update:isShow', false)
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .pop-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background: rgba(20,30,50,.3);
    .pop{
      position: relative;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      padding: 30px 30px 100px;
      border: 1px solid grey;
      border-radius: 5px;
      text-align: center;
      background: #fff;
      color:#000;
      .desc{
        min-height: 200px;
        margin: 0 auto;
      }
      .btn-container{
        // box-sizing:border-box;
        position: absolute;
        bottom: 20px;
        left: 0;
        width: calc(100% - 20px);
        border-top: 1px solid red;
        padding:10px;
      }
      .close{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 20px;
        height: 20px;
        background: silver;
        &:before{
          content: '';
          width: 20px;
          height: 2px;
          background: red;
          transform: rotate(45deg);
          position: absolute;
          top: 9px;
          left: 0px;
        }
        &:after{
          content: '';
          width: 20px;
          height: 2px;
          background: red;
          transform: rotate(-45deg);
          position: absolute;
          top: 9px;
          left: 0px;
        }
      }
    }
  }
</style>
