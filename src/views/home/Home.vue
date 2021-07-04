<template>
  <div>
    <NavBar>
      <template v-slot:default>shop</template>
    </NavBar>
    <div class="banner">
      <img src="~assets/images/1.jpg" alt="" />
    </div>
    <RecommendView :recommends="recommends"> </RecommendView>
    <TabControl :titles="['畅销', '新书', '精选']" @tabClick="tabClick">
    </TabControl>
    <GoodsList :goods="showGoods"> </GoodsList>
  </div>
</template>

 <script>
import NavBar from "components/common/navbar/NavBar";
import RecommendView from "./ChildComps/RecommendView.vue";
import { getHomeAllDate, getHomeGoods } from "network/home";
import { ref, reactive, onMounted, computed } from "vue";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
export default {
  name: "Home",
  setup() {
    const recommends = ref([]);
    let temid = ref(0);

    // 商品列表数据模型
    const goods = reactive({
      sales: { page: 0, list: [] },
      new: { page: 0, list: [] },
      recommend: { page: 0, list: [] },
    });

    let currentType = ref("sales");

    const showGoods = computed(() => {
      return goods[currentType.value].list;
    });

    onMounted(() => {
      getHomeAllDate()
        .then((res) => {
          recommends.value = res.goods.data;
        })
        .catch(() => {});

      getHomeGoods("sales")
        .then((res) => {
          goods.sales.list = res.goods.data;
        })
        .catch(() => {});

      getHomeGoods("recommend")
        .then((res) => {
          goods.recommend.list = res.goods.data;
        })
        .catch(() => {});

      getHomeGoods("new")
        .then((res) => {
          goods.new.list = res.goods.data;
        })
        .catch(() => {});
    });

    const tabClick = (index) => {
      temid.value = index;
      let types = ["sales", "new", "recommend"];
      currentType.value = types[index];
    };
    return {
      recommends,
      tabClick,
      temid,
      goods,
      showGoods,
    };
  },
  components: {
    NavBar,
    RecommendView,
    TabControl,
    GoodsList,
  },
};
</script> 
 <style scoped lang='less'>
.banner img {
  width: 100%;
  height: auto;
  margin-top: 45px;
}
p {
  text-align: center;
}
</style>