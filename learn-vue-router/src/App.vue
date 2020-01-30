<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <br>
    <!-- router-link默认会被渲染成<a></a>标签，可以通过tag属性自定义 -->
    <!-- 默认使用history.pushState，可以通过replace属性使用history.replaceState -->
    <!-- <router-link to="/home" replace active-class="active">首页</router-link>
    <router-link to='/about' replace tag="button" active-class="active">关于</router-link>-->

    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 动态路由 -->
    <!-- <router-link :to="'/user/' + userId">用户</router-link>
    <router-link :to="profile">我的</router-link>
    <br> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- <button @click="homeClick">HHHome</button>
    <button @click="aboutClick">AAAbout</button> -->
    <!-- router-view起到占位的作用，决定内容的显示位置 -->
    <keep-alive exclude="Profile,User">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  // vue-router默认给所有组件添加了$router属性，所以可以省略定义属性
  // data () {
  //   return {
  //     $router: ''
  //   }
  // },
  data () {
    return {
      userId: 'zhangSan',
      profile: {
        path: '/profile',
        query: {
          name: 'LiSi',
          age: 18,
          height: 1.88
        }
      }
    }
  },
  methods: {
    // 增加回调函数 .catch(err => {err})  防止Vue-router 报NavigationDuplicated的错误
    homeClick () {
      // 通过代码的方式修改路由
      this.$router.push('/home').catch(err => err)
      // this.$router.replace('/home')
    },
    aboutClick () {
      this.$router.push('/about').catch(err => err)
      // this.$router.replace('/about')
    },
    userClick () {
      this.$router.push('/user/' + this.userId).catch(err => err)
    },
    profileClick () {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 26,
          height: 1.98
        }
      }).catch(err => err)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 活跃的标签变为红色 */
/* .router-link-active {
  color: #f00
} */

.active {
  color: #f00;
}
</style>
