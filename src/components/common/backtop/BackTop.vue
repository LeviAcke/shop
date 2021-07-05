<template>
  <div class="back-top" @click="backTop"></div>
</template>

 <script>
export default {
  name: "BackTop",
  setup(props, { emit }) {
    return {
      backTop: () => {
        emit("bTop");
      },
    };
  },
};
</script> 
 <style lang='less' scoped>
.back-top {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 80px;
  right: 20px;
  box-shadow: 3px 3px 3px #333;
  border-radius: 50%;
  background: url("~assets/images/up(1).png") no-repeat center center;
  cursor: pointer;
}
</style>