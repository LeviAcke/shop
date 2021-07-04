import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
const Shopcart = () => import('views/shopcart/Shopcart')
const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta: {
      title: 'shop-首页'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'shop-首页'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: 'shop-分类'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'shop-个人中心'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: 'shop-详情'
    }
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: Shopcart,
    meta: {
      title: 'shop-购物车'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // 如果没有登陆，在这里到 login
  next();
  document.title = to.meta.title
})



export default router
