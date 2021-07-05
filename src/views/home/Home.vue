<template>
  <div id="home">
    <NavBar>
      <template v-slot:default>shop</template>
    </NavBar>
    <TabControl
      v-show="isTabFixed"
      :titles="['畅销', '新书', '精选']"
      @tabClick="tabClick"
    ></TabControl>
    <div class="wrapper">
      <div class="content">
        <div ref="banref">
          <HomeSwiper :banners="banners" > </HomeSwiper>
          <RecommendView :recommends="recommends"> </RecommendView>
        </div>

        <TabControl :titles="['畅销', '新书', '精选']" @tabClick="tabClick">
        </TabControl>
        <GoodsList :goods="showGoods"> </GoodsList>
      </div>
    </div>
    <BackTop v-show="isShowBackTop" @bTop="bTop"> </BackTop>
  </div>
</template>

 <script>
import NavBar from "components/common/navbar/NavBar";
import RecommendView from "./ChildComps/RecommendView.vue";
import { getHomeAllDate, getHomeGoods } from "network/home";
import { ref, reactive, onMounted, computed, watchEffect, nextTick } from "vue";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BScroll from "better-scroll";
import BackTop from "components/common/backtop/BackTop";
import HomeSwiper from "./ChildComps/HomeSwiper.vue";
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
    const banners = ref([]);

    let bs = reactive({});

    let currentType = ref("sales");

    let isTabFixed = ref(false);
    let isShowBackTop = ref(false);
    let banref = ref(null);
    const showGoods = computed(() => {
      return goods[currentType.value].list;
    });

    onMounted(() => {
      getHomeAllDate()
        .then((res) => {
          recommends.value = res.goods.data;
          banners.value = res.slides;
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

      // 创建 betterScroll 对象
      bs = new BScroll(document.querySelector(".wrapper"), {
        probeType: 3,
        click: true,
        pullUpLoad: true,
      });

      // 触发滚动事件
      // eslint-disable-next-line no-unused-vars
      bs.on("scroll", (position) => {
        isShowBackTop.value = isTabFixed.value =
          -position.y >= banref.value.offsetHeight ? true : false;
      });
      // 上拉加载数据，触发 pullingup
      bs.on("pullingUp", () => {
        const page = goods[currentType.value].page + 1;

        getHomeGoods(currentType.value, page).then((res) => {
          goods[currentType.value].list.push(...res.goods.data);
          goods[currentType.value].page += 1;
        });
        // 完成上拉，等数据请求完成，要将新数据展示出来
        bs.finishPullUp();
        // 重新计算高度
        bs.refresh();
      });
    });

    const tabClick = (index) => {
      temid.value = index;
      let types = ["sales", "new", "recommend"];
      currentType.value = types[index];
      nextTick(() => {
        // 重新计算高度
        bs && bs.refresh();
      });
    };

    // 监听任何一个变量有变化
    watchEffect(() => {
      nextTick(() => {
        // 重新计算高度
        bs && bs.refresh();
      });
    });
    const bTop = () => {
      console.log("123");
      bs.scrollTo(0, 0, 300);
    };

    return {
      recommends,
      tabClick,
      temid,
      goods,
      showGoods,
      isTabFixed,
      banref,
      isShowBackTop,
      bTop,
      banners,
    };
  },
  components: {
    NavBar,
    RecommendView,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
  },
};
</script> 
 <style scoped lang='less'>

#home {
  height: 100vh;
  position: relative;
  .wrapper {
    position: absolute;
    top: 45px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
</style>