<template>
  <div>
    <NavBar>
      <template v-slot:default>购物车</template>
    </NavBar>
  </div>
</template>

 <script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Shopcart",
  components: {
    NavBar,
  },
};
</script> 
 <style scoped>
</style>