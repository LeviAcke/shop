<template>
  <div>
    <NavBar>
      <template v-slot:default>shop</template>
    </NavBar>
  </div>
</template>

 <script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script> 
 <style scoped>
</style>