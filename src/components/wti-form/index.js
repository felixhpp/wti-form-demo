/**
 * Created by 王冬 on 2021/9/1.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */

import WtiForm from './index.vue';

WtiForm.install = (Vue, props = {}) => {
    // props 配置
    const propsOption = {
        // 数据字典的配置
        dynamicSelectOption: {
            type: Object,
            default: () => ({
                // 这是字典接口的 url
                dictUrl: '/wkbbackend/queryByCategoryCodeList',
                // 异步请求时，请求内容是一个对象或一个数组。
                // 如果是对象，那么包含一个 key 和一个数组。
                // 如果是数组，那么只有这个数组。
                // 数组是所有字典 FormItem 的 parentCode 的集合
                queryKey: 'categoryCodeList', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
                parentCode: 'categoryCode', // 这是返回结果的 parentCode。意思是，同一个 parentCode 归属于同一个下拉框选项
                value: 'bdictCode', // 这是下拉框选项的值
                label: 'bdictDesc' // 这是下拉框选项的 label
            })
        }
    };
    // 基于组件的 props 属性，将默认配置和自定义配置 mixin 到一起
    const obj = Object.assign(WtiForm.props, propsOption, props);
    // 再用 mixin 后的 props，替换原 props
    return Vue.component(WtiForm.name, Object.assign(WtiForm, {
        props: obj,
    }));
}; // 给组件配置install方法

export default WtiForm;
