<template>
  <div>
    <table border="1">
      <tr>
        <th v-for="(item, index) in thead" :key="index">{{item.name}}</th>
      </tr>
      <tr v-for="(item, index) in list" :key="index">
        <td v-for="(header, headerIndex) in thead" :key="headerIndex">{{item[header.id]}}</td>
      </tr>
    </table>
    <select name="" id="" v-model="selected">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
    <span v-for="(item ,index) in 15" :key="index" @click="whichPage(item)">第{{item}}页</span>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    thead: {
      type: Array
    },
    list: {
      type: Array
    }
  },
  data () {
    return {
      selected: []
    }
  },
  watch: {
    selected (newData, oldData) {
      this.$emit('update:pageNums', newData)
    }
  },
  methods: {
    whichPage (item) {
      this.$emit('whichPage', item)
    }
  }
  // async created () {
  //   const res = await this.$axios.get('http://localhost:3000/user')
  //   console.log(res)
  // }
}
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
