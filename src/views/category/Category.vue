<template>
  <div>
    <NavBar>
      <template v-slot:default>商品分类</template>
    </NavBar>
  </div>
</template>

 <script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Category",
  components: {
    NavBar,
  },
};
</script> 
 <style scoped>
</style>