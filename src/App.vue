<template>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
  <div id="nav">
    <router-link class="tab-bar-item" to="/">
      <div class="icon"><i class="iconfont icon-shouye1-copy"></i></div>
      <div>首页</div>
    </router-link>
    <router-link class="tab-bar-item" to="/category">
      <div class="icon">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
      </div>
      <div>分类</div>
    </router-link>
    <router-link class="tab-bar-item" to="/shopcart">
      <div class="icon">
        <van-badge :content="30" max="9">
          <i class="iconfont icon-gouwuche"></i>
        </van-badge>
      </div>
      <div>购物车</div>
    </router-link>
    <router-link class="tab-bar-item" to="/profile">
      <div class="icon"><i class="iconfont icon-wode"></i></div>
      <div>我的</div>
    </router-link>
  </div>
</template>

<style lang="less">
@import url("assets/css/base.css");
@import url("assets/css/iconfont.css");

#nav {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -5px 10px rgba(100, 100, 100, 0.2);

  a {
    color: var(--color-text);
    &.router-link-exact-active {
      color: var(--color-high-text);
    }
  }
  background-color: #f6f6f6;
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    height: 50px;
    .icon {
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-top: 8px;
      vertical-align: middle;
    }
  }
}
</style>
