<template>
 <div class="transfer">
    <div class="leftContainer" solt="transfer">
      <input type="text" value="" v-model="pick" >
      <ul>
        <li>sdjgklsdfgj</li>
       <li v-for="(unselect, index) in unselects" :key="index" @click="listDelete(unselect)">{{unselect.name}}</li>
    </ul>
     <!-- <ul>
       <li v-for="(unselect, index) in allUnselect" :key="index" @click="listDelete(unselect)">{{unselect.name}}</li>
    </ul> -->
    </div>
    <div class="rightContainer" solt="transfer">
      <input type="text" v-model="pick1">
      <ul>
       <li v-for="(select, index) in Selects" :key="index" @click="listDelete(select)">{{select.name}}</li>
    </ul>
    </div>
 </div>
</template>
<script type="text/ecmascript-6">
export default{
  props: {
    unselected_animal: {},
    selected_animal: {}
  },
  data () {
    return {
      pick: '',
      pick1: '',
      unselected_animals: [],
      selected_animals: [],
      unselects: [],
      selects: []
    }
  },
  created: function () {
    this.unselected_animals = JSON.parse(JSON.stringify(this.unselected_animal))
    this.selected_animals = JSON.parse(JSON.stringify(this.selected_animal))
    this.unselects = JSON.parse(JSON.stringify(this.unselected_animal))
    this.selects = JSON.parse(JSON.stringify(this.selected_animal))
  },
  methods: {
    listChose: function (unselect) {
      this.selected_animals.push(unselect)
      this.selects.push(unselect)
      let unselectedIndex = this.unselected_animals.findIndex(ele => unselect.id === ele.id)
      this.unselected_animals.splice(unselectedIndex, 1)
      let unselectIndex = this.unselects.findIndex(ele => unselect.id === ele.id)
      this.unselects.splice(unselectIndex, 1)
    },
    listDelete (select) {
      this.unselected_animals.push(select)
      this.unselects.push(select)
      let selectedIndex = this.selected_animals.findIndex(ele => select.id === ele.id)
      this.selected_animals.splice(selectedIndex, 1)
      let selectIndex = this.selects.findIndex(ele => select.id === ele.id)
      this.selects.splice(selectIndex, 1)
    }
    // numSearch () {
    //   // this.unselected_animals = this.unselects.filter((ele) => {
    //   //   return !!ele.name.match(this.pick)
    //   // })
    //   this.unselects = this.unselected_animals.filter((ele) => {
    //     return !!ele.name.match(this.pick)
    //   })
    //   // console.log(this.arr + 'b')
    //   // }
    // },
    // numSearch1 () {
    //   this.selects = this.selected_animals.filter((ele) => {
    //     return !!ele.name.match(this.pick1)
    //   })
    //   // console.log(this.arr + 'b')
    //   // }
    // }
  },
  // watch: {
  //   pick (newData, oldData) {
  //     // console.log(e1)
  //     // console.log(e2)
  //     this.unselects = this.selected_animals.filter(ele => {
  //       return !!ele.name.match(newData)
  //     })
  //   }
  // },
  computed: {
    allUnselect () {
      return this.unselected_animals.filter(ele => {
        // console.log(ele)
        return !!ele.name.match(this.pick)
      })
    },
    allSelect () {
      return this.selected_animals.filter(ele => {
        return !!ele.name.match(this.pick1)
      })
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
.transfer{
  width:250px;
  height:100%;
  overflow:hidden;
  .leftContainer{
    float: left;
    input{
      padding: 10px;
      width: 80px;
      height: 10px;
      border-radius: 5px;
    }
    ul{
      padding: 10px;
      width: 80px;
      height: 200px;
      overflow-x: hidden;
      overflow-y: auto;
      border: 1px solid gray;
      border-radius: 5px;
      li{
        cursor: pointer;
      }
    }
  }
  .rightContainer{
    float: right;
    input{
      padding: 10px;
      width: 80px;
      height: 10px;
      border-radius: 5px;
    }
    ul{
      padding: 10px;
      width: 80px;
      height: 200px;
      overflow-x: hidden;
      overflow-y: auto;
      border: 1px solid gray;
      border-radius: 5px;
      li{
        cursor: pointer;
      }
    }
  }
  .clear{
    clear: both;
  }
}
</style>
