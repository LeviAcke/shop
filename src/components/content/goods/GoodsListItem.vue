<template>
  <div class="goods-item">
    <img :src="product.cover_url" alt="" />
    <div class="goods-info">
      <p>{{product.title}}</p>
      <span class="price"><small>{{product.price}}</small></span>
      <span class="collect">{{product.collects_count}}</span>
    </div>
  </div>
</template>

 <script>
export default {
  name: "GoodsListItem",

  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script> 
 <style scoped lang='less'>
.goods-item {
  width: 46%;
  padding-bottom: 40px;
  position: relative;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    overflow: hidden;
    p {
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: red;
      margin-right: 20px;
    }
    .collect {
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      top: 2px;
      width: 14px;
      height: 14px;
      background: url("~assets/images/collect.png");
      background-size: 14px;
    }
  }
}
</style>