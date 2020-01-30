<template>
  <tab-bar>
    <tab-item path="/home" activeColor="green">
      <img slot="tab-item-img" src="~assets/img/tabbar/home.svg" alt="首页" />
      <img slot="tab-item-img-active" src="~assets/img/tabbar/home-fill.svg" alt="首页" />
      <div slot="tab-item-text">首页</div>
    </tab-item>
    <tab-item path="/category" activeColor="green">
      <img slot="tab-item-img" src="~assets/img/tabbar/all.svg" alt="分类" />
      <img slot="tab-item-img-active" src="~assets/img/tabbar/all-fill.svg" alt="分类" />
      <div slot="tab-item-text">分类</div>
    </tab-item>
    <tab-item path="/cart" activeColor="green">
      <img slot="tab-item-img" src="~assets/img/tabbar/cart-Empty.svg" alt="购物车" />
      <img slot="tab-item-img-active" src="~assets/img/tabbar/cart-Empty-fill.svg" alt="购物车" />
      <div slot="tab-item-text">购物车</div>
    </tab-item>
    <tab-item path="/profile" activeColor="green">
      <img slot="tab-item-img" src="~assets/img/tabbar/account.svg" alt="账户" />
      <img slot="tab-item-img-active" src="~assets/img/tabbar/account-fill.svg" alt="账户" />
      <div slot="tab-item-text">账户</div>
    </tab-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/TabBar/TabBar'
import TabItem from 'components/TabBar/TabItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabItem
  }
}
</script>

<style>
</style>
