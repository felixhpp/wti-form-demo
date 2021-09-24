/**
 * Created by 王冬 on 2021/9/18.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 * 测试数据生成器
 */
const DATAENUM = {
    // 合法标准随机数据
    StandardData: 0,
    // 合法边界数据
    BorderData: 1,
    // 非法超限数据
    OutLimitData: 2,
};

/* 测试数据生成类
*   1. 入参是 formItem（即单个表单元素的值）
*   2. 生成的数据分为多种：
*       2.1 【自定义数据】，用户对某字段，传入自定义数据生成函数时，优先采用这个；
*       2.2 【合法标准随机数据】；
*       2.3 【合法边界数据】（比如长度最大或者最小）；
*       2.4 【非法超限数据】（过长或者过短）（并且该 key 未被添加到 this.exceptOutLimitKeys 里）
*       具体生成哪个，根据配置决定；
*   3. 超限数据的话，需要当前 key 在超限范围列表里的时候，才会生成（否则生成【合法标准随机数据】
* */
class TestValueCreator {

    // 数据类型，枚举
    DataType = DATAENUM.StandardData;

    setDataType (type) {
        if (type === 'standard') {
            this.DataType = DATAENUM.StandardData;
        } else if (type === 'border') {
            this.DataType = DATAENUM.BorderData;
        } else if (type === 'outlimit') {
            this.DataType = DATAENUM.OutLimitData;
        }
    }

    // 不参与超限数据的 key 的集合（即超限模式下，这里的使用默认数据）
    exceptOutLimitKeys = [];

    // 自定义校验函数
    // 字段是 key，值是函数，入参是：(this.DataType)
    customizeFn = {};

    // 生成测试数据（目前不支持生成子表单的数据）
    makeValue (fields) {
        const obj = {};
        fields.forEach(blockFields => {
            if (!(blockFields.children instanceof Array)) {
                return;
            }
            blockFields.children.forEach(fieldItem => {
                // 根据字段生成
                if (fieldItem.type === 'input') {
                    obj[fieldItem.key] = this.makeInputValue(fieldItem);
                }
            });
        });
        return obj;
    }

    // 生成文本输入看的
    makeInputValue (formItem) {
        // 此时无需判断 type，因为 type 必然是符合的（调用时判断）
        // 需要获取的是 label，以及解析 rules 的规则
        const {key, label, rules} = formItem;
        let max, min, required;
        // 有表单规则属性，并且至少有一个属性
        if (rules && rules.length > 0) {
            rules.forEach(rule => {
                if (rule.required) {
                    required = true;
                } else {
                    if (rule.max) {
                        max = rule.max;
                    }
                    if (rule.min) {
                        min = rule.min;
                    }
                }
            });
        }
        if (this.customizeFn[key]) {
            if (typeof this.customizeFn[key] === 'function') {
                return this.customizeFn[key](this.DataType);
            } else {
                return console.error(`字段：${key}，描述：${label}，其传入自定义校验配置，但配置不是函数，请检查`);
            }
        }
        // 限制条件明确了，现在开始根据 DataType 决定数据生成
        else if (this.DataType === DATAENUM.OutLimitData && this.exceptOutLimitKeys.indexOf(key) === -1) {
            // 超限数据
            // 1. 如果有 max，取超过 max 的数据
            let s = `${label}`;
            if (max) {
                // 如果长度不够，自动在后面补够长度
                s = s.padEnd(max + 1, 'Test');
            } else if (min) {
                // 2. 如果有 min，则取 min-1 的长度
                // 再补够长度，再截取到长度-1
                s = s.padEnd(min, 'Test').slice(0, min - 1);
            } else if (required) {
                // 如果是必填，则设置该值为空
                s = '';
            } else {
                // 什么规则都没的话，那么说明这个无法生成符合 DataType 的数据
                console.error(`字段：${key}，描述：${label}，无法生成符合超限数据，请检查 fields 的配置。默认使用 label 作为数据`);
            }
            return s;
        } else if (this.DataType === DATAENUM.BorderData) {
            // 极限数据
            let s = `${label}`;
            if (max) {
                // 有 max 则取最大 max
                s = s.padEnd(max + 1, 'Test').slice(0, max);
            } else if (min) {
                // 否则，如果有 min，则取最小 min
                s = s.padEnd(min, 'Test').slice(0, min);
            } else if (required) {
                // 此时无长度限制，那么判断：如果是必填，则默认设置该值为 label（确保有值）
                s = `${label}`;
            } else {
                // 其他情况，设置该值为空（非必填，所以理论上可以设置为空，即空字符串为极限值）
                s = '';
            }
            return s;
        } else {
            let len;
            // 默认随机数据
            if (max && min) {
                len = Math.floor(((max + 1 - min) * Math.random())) + min;
            } else if (max) {
                len = Math.floor(((max + 1) * Math.random()));
            } else if (min) {
                // 如果只有最小限制的话，最大长度也不能太大，因此最大长度默认设置为 20，最小长度为 min
                len = Math.floor((20 + 1 - min) * Math.random());
            } else {
                // 其他时候，长度随机为 0~20
                len = Math.floor((21 * Math.random()));
            }
            let s = `${label}`;
            s = s.padEnd(len, 'Test').slice(0, len);
            return s;
        }
    }
}


export default TestValueCreator;
