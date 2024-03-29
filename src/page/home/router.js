/**
 * Created by 王冬 on 2021/5/24.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import Vue from 'vue';
import Router from 'vue-router';

import Install from './component/demo/install';
import DemoBase from './component/demo/base';
import DemoStatus from './component/demo/status';
import DemoOften from './component/demo/often';
import FastCreate from './component/demo/fast_create';

import FormitemCommon from './component/formitem_common';
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
import MulLinkage from './component/mul_linkage';
import Textarea from './component/text_area';
import NormalNumber from './component/normal_number';


import Github from './component/others/github';
import Connection from './component/others/connection';
import AutoTest from './component/others/auto_test';
import CodeMaker from './component/others/code_maker';
import ElementStart from './component/others/element_start';

import Empty from './component/empty';

Vue.use(Router);


const routes = [
    {path: '/Install', component: Install,},


    {path: '/demo/Base', component: DemoBase,},
    {path: '/demo/Status', component: DemoStatus,},
    {path: '/demo/Often', component: DemoOften,},
    {path: '/demo/FastCreate', component: FastCreate,},


    {path: '/formItem/FormitemCommon', component: FormitemCommon,},
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
    {path: '/formItem/MulLinkage', component: MulLinkage,},
    {path: '/formItem/Textarea', component: Textarea,},
    {path: '/formItem/NormalNumber', component: NormalNumber,},


    {path: '/others/Github', component: Github,},
    {path: '/others/AutoTest', component: AutoTest,},
    {path: '/others/CodeMaker', component: CodeMaker,},
    {path: '/others/ElementStart', component: ElementStart,},
    {path: '/others/connection', component: Connection,},
    {
        path: '/',
        redirect: '/demo/base'
    },
    {
        path: '*',
        component: Empty
    },
];

const router = new Router({
    routes,
    // mode: 'history',
});

export default router;
