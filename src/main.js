import Vue from 'vue'
import App from './App.vue'

import found from './Views/found.vue'
import newMusic from './Views/newMusic.vue'
import newMv from './Views/newMv.vue'
import musicPlay from './Views/musicPlay.vue'
import mvPlay from './Views/mvPlay.vue'

// axios导入并挂载到Vue原型
import axios from 'axios';
Vue.prototype.$axios = axios

Vue.config.productionTip = false

// 导入注册路由，传入路由规则
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({

    routes: [
        { path: '/', redirect: '/found' },
        { path: '/found', component: found },
        { path: '/newMusic', component: newMusic },
        { path: '/newMv', component: newMv },
        { path: '/musicPlay', component: musicPlay },
        { path: '/mvPlay', component: mvPlay },
    ]
});
import './styles/index.css'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')