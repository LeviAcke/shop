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

    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
    <h1>{{ temid }}</h1>
  </div>
</template>

 <script>
import NavBar from "components/common/navbar/NavBar";
import RecommendView from "./ChildComps/RecommendView.vue";
import { getHomeAllDate } from "network/home";
import { ref, reactive, onMounted } from "vue";
import TabControl from "components/content/tabcontrol/TabControl";
export default {
  name: "Home",
  setup() {
    const recommends = ref([]);
    // eslint-disable-next-line no-unused-vars
    const demo = reactive({});
    let temid = ref(0);

    onMounted(() => {
      getHomeAllDate()
        .then((res) => {
          recommends.value = res.goods.data;
        })
        .catch(() => {});
    });

    const tabClick = (index) => {
      temid.value = index;
    };
    return {
      recommends,
      tabClick,
      temid
    };
  },
  components: {
    NavBar,
    RecommendView,
    TabControl,
  },
};
</script> 
 <style scoped lang='less'>
.banner img {
  width: 100%;
  height: auto;
  margin-top: 45px;
}
</style>