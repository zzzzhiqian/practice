<template>
  <div class="btn" :class="[bgTheme,btnSize]" @click="isShow">
    <span v-if="isLoading"><slot></slot></span>
    <span v-else>....</span>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    bgTheme: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['default', 'primary', 'info', 'warning', 'danger'].indexOf(value) !== -1
      }
    },
    btnSize: {
      type: String,
      default: 'btn-middle',
      validator: function (value) {
        return ['btn-small', 'btn-middle', 'btn-large'].indexOf(value) !== -1
      }
    },
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    isShow () {
      this.$emit('btnClick')
    }
  }
}
/**
     * 订阅事件
     * @param {Function} commit store commit mutation hander
     * @param {Object} state store state
     * @param {String} dispatch store dispatch action hander
     * @param {String} bkSupplierAccount 开发商账号
     * @param {Object} bkBizId 业务id
     * @param {Object} params 参数
     */
</script>
<style lang="scss" rel="stylesheet/scss">
  .btn{
    display: inline-block;
    padding:5px 10px;
    color:black;
    &.default{
      background:grey;
    }
    &.primary{
      background:green;
    }
    &.info{
      background:yellow;
    }
    &.warning{
      background:red;
    }
    &.danger{
      background:blue;
    }
    &.btn-small{
      padding:3px 6px;
    }
     &.btn-middle{
      padding:5px 10px;
    }
     &.btn-large{
     padding:8px 15px;
    }
  }
</style>
