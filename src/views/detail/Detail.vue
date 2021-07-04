<template>
  <div>
    <NavBar>
      <template v-slot:default>商品详情</template>
    </NavBar>
    <h1>{{ id }}</h1>
  </div>
</template>

 <script>
import NavBar from "components/common/navbar/NavBar";
import { useRoute } from "vue-router";
import { ref } from "vue";
export default {
  name: "Detail",
  setup() {
    const route = useRoute();
    let id = ref(0);
    id.value = route.query.id;
    return {
      id,
    };
  },
  components: {
    NavBar,
  },
};
</script> 
 <style scoped lang='less'>
h1{
  color: #333;
  margin-top: 45px;
}
</style>