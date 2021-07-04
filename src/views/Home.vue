<template>
  <div class="home">
    {{ banner }}
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { getHomeAllDate } from "network/home";
export default {
  name: "Home",
  setup() {
    const banner = ref([]);

    onMounted(() => {
      getHomeAllDate()
        .then((res) => {
          banner.value = res.slides;
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return {
      banner,
    };
  },
};
</script>
