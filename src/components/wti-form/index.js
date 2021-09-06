/**
 * Created by 王冬 on 2021/9/1.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */

import WtiForm from './index.vue';

WtiForm.install = (Vue, props = {}) => {
    // props 配置，主要是处理 父 key 的
    const propsOption = {
        dictKey: {
            type: Object,
            default: () => {
                return {
                    key: 'bdictCode',
                    label: 'bdictDesc',
                };
            },
        },
    };
    // 基于组件的 props 属性，将默认配置和自定义配置 mixin 到一起
    const obj = Object.assign(WtiForm.props, propsOption, props);
    // 再用 mixin 后的 props，替换原 props
    return Vue.component(WtiForm.name, Object.assign(WtiForm, {
        props: obj,
    }));
}; // 给组件配置install方法

export default WtiForm;
