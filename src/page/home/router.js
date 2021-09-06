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
import Input from './component/input';
import NormalSelect from './component/normal_select';
import Radio from './component/radio';
import MoneyInput from './component/money_input';
import AutoCompleteInput from './component/auto_complete_input';
import DateInput from './component/date_input';
import DateRangeInput from './component/date_range_input';
import DynamicSelect from './component/dynamic_select';
import HourMinuteInput from './component/hour_minute_input';
import NumberInput from './component/number_input';
import RateInput from './component/rate_input';


import Connection from './component/connection';

Vue.use(Router);


const routes = [
    {
        path: '/demo/base',
        component: Base,
    },
    {
        path: '/others/connection',
        component: Connection,
    },
    {path: '/formItem/Input', component: Input,},
    {path: '/formItem/NormalSelect', component: NormalSelect,},
    {path: '/formItem/Radio', component: Radio,},
    {path: '/formItem/MoneyInput', component: MoneyInput,},
    {path: '/formItem/AutoCompleteInput', component: AutoCompleteInput,},
    {path: '/formItem/DateInput', component: DateInput,},
    {path: '/formItem/DateRangeInput', component: DateRangeInput,},
    {path: '/formItem/DynamicSelect', component: DynamicSelect,},
    {path: '/formItem/HourMinuteInput', component: HourMinuteInput,},
    {path: '/formItem/NumberInput', component: NumberInput,},
    {path: '/formItem/RateInput', component: RateInput,},
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
