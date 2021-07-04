<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
      @click="itemClick(index)"
      :class="{ active: index == currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

 <script>
import { ref } from "vue";
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup(props, { emit }) {
    let currentIndex = ref(0);

    const itemClick = (index) => {
      currentIndex.value = index;
      emit("tabClick", index);
    };

    return {
      currentIndex,
      itemClick,
    };
  },
};
</script> 
<style scoped lang='less'>
.tab-control {
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 14px;
  width: 100%;
  text-align: center;
  position: sticky;
  top: 43px;
  z-index: 6;
 background-color: #fff;
  .tab-control-item {
    flex: 1;
   
    span {
      padding: 5px;
    }
  }
  .active {
    color: var(--color-tint);
    span {
      border-bottom: 3px solid var(--color-tint);
    }
  }
}
</style>