import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessages = () => import('../components/HomeMessages')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1. 通过Vue.use()安装Vue插件
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'messages',
        component: HomeMessages
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
    // beforeEnter: (to, from, next) => {
    //   console.log('beforeEnter,路由独享守卫--关于页面')
    //   next()
    // }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }
]

// 2. 创建路由对象
const router = new Router({
  mode: 'history',
  // 3. 配置路由和组件之间的映射关系
  routes,
  // 为活跃的链接添加属性
  linkActiveClass: 'active'
})

// 设置 “全局” 前置守卫
router.beforeEach((to, from, next) => {
  // 从from到to
  document.title = to.matched[0].meta.title
  // console.log('+++++')
  // // 做登录功能的时候，可以做一个判断，成功登录则进入主页，否则进入登录界面 next('/login')
  // // next(false)
  next()
})

// 在 2.5.0 + 你可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
// router.beforeResolve((to, from, next) => {
//   console.log('全局解析守卫')
//   next()
// })

// 全局后置钩子：你也可以注册全局后置钩子，跳转之后执行，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身
// router.afterEach((to, from) => {
//   console.log('-----')
// })

// 将router对象导出至Vue实例
export default router
