import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/cart/Cart')
const Profile = () =>
    import ('../views/profile/Profile')
const Detail = () =>
    import ('../views/detail/Detail')

// 在router配置文件index.js中写上
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
        return originalReplace.call(this, location).catch(err => err)
    }
    // 1.安装插件
Vue.use(VueRouter)

const routes = [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/category',
            component: Category
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/detail/:iid',
            component: Detail
        }
    ]
    // 2.创建router
const router = new VueRouter({
    routes,
    mode: 'history'
})

// 3.导出router
export default router