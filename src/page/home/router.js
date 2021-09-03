/**
 * Created by 王冬 on 2021/5/24.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import Vue from 'vue';
import Router from 'vue-router';

import Base from './component/base';
// import EditTemplate from './children/edit_template';

Vue.use(Router);

const routes = [
    {
        path: '/compoenent/base',
        component: Base,
    },
    // {
    //     path: '/edit',
    //     component: EditTemplate,
    // },
    {
        path: '*',
        redirect: 'compoenent/base',
    },
];

const router = new Router({
    routes,
    mode: 'history',
});

export default router;
