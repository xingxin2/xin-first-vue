import { Toast } from 'vant'
import { createStore } from 'vuex'

export default createStore({
    state: {
        // 定义购物车列表
        cartList: [],
        collectList: [],
    },
    getters: {},
    mutations: {
        // 添加加入购物车的方法
        vuexAddCart(a, b) {
            var flag = true
            this.state.cartList.forEach(function(item) {
                if (item.store_name == b.store_name) {
                    flag = false
                    Toast('购物车已存在该商品，请勿重复添加');
                }
            })
            if (flag == true) {
                Toast('购物车已添加购物车');
                this.state.cartList.push(b)

            }
        },
        // 添加收藏的方法
        vuexAddCollect(c, b) {
            var flag = true
            this.state.collectList.forEach(function(item) {
                if (item.store_name == b.store_name) {
                    flag = false
                    Toast('该商品已收藏，请勿重复收藏');
                }
            })
            if (flag == true) {
                Toast('已收藏');
                this.state.collectList.push(b)

            }
        }
    },
    actions: {},
    modules: {}
})