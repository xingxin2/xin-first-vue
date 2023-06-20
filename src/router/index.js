import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    //首页
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/Home.vue')
    },
    //分类页
    {
        path: '/category',
        name: 'category',
        component: () =>
            import ('../views/Category.vue')
    },
    //购物车
    {
        path: '/cart',
        name: 'cart',
        component: () =>
            import ('../views/Cart.vue')
    },
    //我的
    {
        path: '/my',
        name: 'my',
        component: () =>
            import ('../views/My.vue')
    },
    //详情页
    {
        path: '/detail',
        name: 'detail',
        component: () =>
            import ('../views/Detail.vue'),
        meta: {
            isHide: true
        }
    },
    //分类页详情页
    {
        path: '/categoryList',
        name: 'categoryList',
        component: () =>
            import ('../views/CategoryList.vue'),
        meta: {
            isHide: true
        }
    },
    //搜索页
    {
        path: '/search',
        name: 'search',
        component: () =>
            import ('../views/Search.vue'),

        meta: {
            isHide: true
        }
    },
    // 搜索跳转
    {
        path: '/searchResult',
        name: 'searchResult',
        component: () =>
            import ('../views/SearchResult.vue'),

        meta: {
            isHide: true
        }
    },
    // 登录页 {
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue'),
        meta: {
            isHide: true
        }
    },
    // 设置页
    {
        path: '/setting',
        name: 'setting',
        component: () =>
            import ('../views/Setting.vue'),
        meta: {
            isHide: true
        }
    },
    // 支付页
    {
        path: '/pay',
        name: 'pay',
        component: () =>
            import ('../views/Pay.vue'),
        meta: {
            isHide: true
        }
    },
    // 收藏页
    {
        path: '/collect',
        name: 'collect',
        component: () =>
            import ('../views/Collect.vue'),
        meta: {
            isHide: true
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 当需要进入购物车或我的界面需要先跳转到登录界面
router.beforeEach(function(to, from, next) {
    // to代表的目前需要跳转的路由
    // from代表从哪个页面跳转过来
    if (to.name == "cart" || to.name == "my" || to.name == "pay" || to.name == "collect") {
        // 如果本地存在token且token那么不需要再次跳转登录页，如果不存在并且token错误，那么就需要跳到登录页
        if (!localStorage.getItem("token")) {
            next({

                path: "/login"
            })
        }
    } else {
        next()
    }
    next()
})

export default router