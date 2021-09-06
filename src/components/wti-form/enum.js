/**
 * Created by 王冬 on 2021/6/11.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 * 枚举字典
 */

const FormItemTypeText = {
    NormalSelect: '普通下拉框',
    DynamicSelect: '字典下拉框',
    Input: '文本输入框',
    DateInput: '日期选择框',
    HourMinuteInput: '小时分钟输入框',
    DateRangeInput: '选择日期范围',
    NumberInput: '数字输入框',
    AutoCompleteOption: '输入搜索下拉框',
    Radio: '单选框',
    MoneyInput: '金额输入框',
    RateInput: '利率输入框',
};

const TypeList = [
    {
        // 文本输入框
        label: FormItemTypeText.Input,
        value: 'input',
    },
    {
        // 金额输入框
        label: FormItemTypeText.MoneyInput,
        value: 'money-input',
    },
    {
        // 利率输入框
        label: FormItemTypeText.RateInput,
        value: 'rate-input',
    },
    {
        // 普通下拉框
        label: FormItemTypeText.NormalSelect,
        value: 'normal-select',
    },
    {
        // 字典下拉框
        label: FormItemTypeText.DynamicSelect,
        value: 'dynamic-select',
    },
    {
        // 日期输入框（年月日）
        label: FormItemTypeText.DateInput,
        value: 'date-input',
    },
    {
        // 时间输入框（时分）（注：只能选时分，但实际值是时分秒）
        label: FormItemTypeText.HourMinuteInput,
        value: 'hour-minute-input',
    },
    {
        // 范围日期输入框（从 某年某月某日 ~ 某年某月某日）
        label: FormItemTypeText.DateRangeInput,
        value: 'date-range-input',
    },
    {
        // 输入搜索下拉框
        label: FormItemTypeText.AutoCompleteOption,
        value: 'auto-complete-input',
    },
    {
        // 数字输入框
        label: FormItemTypeText.NumberInput,
        value: 'number-input',
    },
    {
        // 普通单选框
        label: FormItemTypeText.Radio,
        value: 'radio',
    },
];

const GetTypeText = type => {
    let text = '';
    TypeList.forEach(item => {
        if (item.value === type) {
            text = item.label;
        }
    });
    return text;
};

export {
    FormItemTypeText,
    TypeList,
    GetTypeText,
};
