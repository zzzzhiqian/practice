<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item ,index) in goods" :key="index" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item ,index) in goods" :key="index" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li  v-for="(food ,index) in item.foods" :key="index" class="food-item border-1px">
              <div class="icon">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                <span class="count">月售{{food.sellCount}}份</span>
                <span>好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="now">￥{{food.price}}</span>
                <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  </div>
</template>
<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import shopcart from '@/components/shopcart/shopcart'
const ERR_OK = 0
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      goods: []
    }
  },
  async created () {
    // this.$axios.get('/api/goods').then(res => {
    //   console.log(res)
    // })
    try {
      const res = await this.$axios.get('/api/goods')
      if (res.errno === ERR_OK) {
        this.goods = res.data
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    } catch (error) {
      console.log('c')
    }
  },
  methods: {
    _initScroll () {
      this.menuScroll = new Bscroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new Bscroll(this.$refs.foodsWrapper, {
        click: true
      })
    }
  },
  components: {
    shopcart
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/scss/mixin";
  .goods{
    display: flex;
    position: absolute;
    top: 192px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    .menu-wrapper{
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      list-style: none;
      .menu-item{
        display: table;
        height: 54px;
        width: 56px;
        padding: 0 12px;
        line-height: 14px;
        &.current{
          position: relative;
          z-index: 10;
          margin-top: -1px;
          background: #fff;
          font-weight: 700;
          .text{
            @include border-none();
          }
        }
        .icon{
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease{
            @include bg-image('decrease_3');
          }
          &.discount{
            @include bg-image('discount_3');
          }
          &.guarantee{
            @include bg-image('guarantee_3');
          }
          &.invoice{
            @include bg-image('invoice_3');
          }
          &.special{
            @include bg-image('special_3');
          }
        }
        .text{
          display: table-cell;
          width: 56px;
          vertical-align: middle;
          @include border-1px(rgba(7, 17, 27, 0.1));
          font-size: 12px;
        }
      }
    }
    .foods-wrapper{
      flex: 1;
      .title{
        padding-left: 14px;
        height: 26px;;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background: #f3f5f7;
      }
      .food-item{
          display: flex;
          margin: 18px;
          padding-bottom: 18px;
          @include border-1px(rgba(7, 17, 27, 0.1));
          &:last-child{
            @include border-none();
            margin-bottom: 0;
          }
          .icon{
            flex: 0 0 57px;
            margin-right: 10px
          }
          .content{
            flex: 1;
            .name{
              margin: 2px 0 8px 0;
              height: 14px;
              line-height: 14px;
              font-size: 14px;
              color: rgb(7, 17, 27);
            }
            .desc, .extra{
              line-height: 10px;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
            .desc{
              line-height: 12px;
              margin-bottom: 8px;
            }
            .extra{
              .count{
                margin-right: 12px;
              }
            }
            .price{
              font-weight: 700;
              line-height: 24px;
              .now{
                margin-right: 8px;
                font-size: 14px;
                color: rgb(240, 20, 20);
              }
              .old{
                text-decoration: line-through;
                font-size: 10px;
                color: rgb(147, 153, 159);
              }
            }
            .cartcontrol-wrapper{
              position: absolute;
              right: 0;
              bottom: 12px;
            }
          }
      }
    }
  }
</style>
