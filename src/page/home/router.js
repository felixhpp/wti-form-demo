/**
 * Created by 王冬 on 2021/5/24.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import Vue from 'vue';
import Router from 'vue-router';

import Base from './component/demo_base';
import FormItemInput from './component/input';
import FormItemNormalSelect from './component/normal_select';
import FormItemRadio from './component/radio';
import FormItemMoneyInput from './component/money_input';

Vue.use(Router);

const routes = [
    {
        path: '/demo/base',
        component: Base,
    },
    {
        path: '/formItem/input',
        component: FormItemInput,
    },
    {
        path: '/formItem/normal_select',
        component: FormItemNormalSelect,
    },
    {
        path: '/formItem/radio',
        component: FormItemRadio,
    },
    {
        path: '/formItem/money_input',
        component: FormItemMoneyInput,
    },
    {
        path: '*',
        redirect: '/demo/base',
    },
];

const router = new Router({
    routes,
    // mode: 'history',
});

export default router;
