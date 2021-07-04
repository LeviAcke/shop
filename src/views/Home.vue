<template>
  <div class="home">
    <img :src="imgSrc" alt="" />
    <img src="~assets/images/2.jpg" alt="" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      imgSrc: require("assets/images/1.jpg"),
      imgSrc2: require("assets/images/2.jpg"),
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
