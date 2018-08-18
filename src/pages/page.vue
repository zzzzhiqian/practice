<template>
<div>
<v-button @btnClick="change"  :bgTheme="'primary'" :btnSize="'btn-large'" :isLoading="isLoading">
  错误
</v-button>
<v-pop :popWidth="500" :isShow.sync="isShow" @confirmClick="confirmClick"  @cancelClcik="cancelClcik">
    <h2 class="title" slot="title">title</h2>
    <div class="desc" slot="desc">
      <v-transfer :unselected_animal="unselected_animal" :selected_animal="selected_animal"></v-transfer>
    </div>
</v-pop>
<!-- <v-transfer :animalList="animalList"></v-transfer> -->
</div>
</template>
<script type="text/ecmascript-6">
import vButton from '../components/button/button'
import vPop from '../components/pop/pop'
import vTransfer from '../components/transfer/transfer'
export default{
  components: {
    vButton,
    vPop,
    vTransfer
  },
  data () {
    return {
      clickedHideLoading: 0,
      isLoading: true,
      isShow: false,
      unselected_animal: [],
      selected_animal: [],
      select: '小老虎',
      add: '',
      danger: '大老虎'
    }
  },
  methods: {
    async change (isLoading) {
      // this.isLoading = false
      try {
        // this.isLoading = true
        const res = await this.$axios.get('http://localhost:3000/animal/list')
        if (res.result) {
          this.unselected_animal = res.data.unselected_animal
          this.selected_animal = res.data.selected_animal
          // console.log(res.data)
        } else {
          console.log(res.error_msg)
        }
      } catch (e) {
        // console.log(e.message)
        // console.log(e.data['error_msg'])
        // console.log(e.statusText)
        console.log(e.message || e.data['error_msg'] || e.statusText)
      }
      this.isShow = true
    },
    confirmClick () {
    },
    cancelClcik () {
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
