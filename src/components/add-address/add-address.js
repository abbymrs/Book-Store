import React, { Component } from 'react';
import {
    Form,
    Input,
    Cascader,
    Select,
    Button,
    Icon
} from 'antd';
import './add-address.less';

const { Option } = Select;

const residences = [
    {
        value: 'guangdong',
        label: '广东省',
        children: [
            {
                value: 'shenzhen',
                label: '深圳市',
                children: [
                    {
                        value: 'baoan',
                        label: '宝安区',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

class AddAddressForm extends Component {
    inputRef = React.createRef();
    componentDidMount = () => {
        this.inputRef.focus();
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            this.props.onConfirm(err, values);
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                sm: { span: 4 },
            },
            wrapperCol: {
                sm: { span: 18 },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        return (
            <div className="add-address-wrapper">
                <Form className="add-address white-bg" {...formItemLayout} onSubmit={this.handleSubmit}>
                    <h3 className="add-address-title">添加收货地址</h3>
                    <Form.Item label="收货人">
                        {getFieldDecorator('consignee', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入收货人姓名!',
                                },
                            ],
                        })(<Input id="consignee" ref={node => this.inputRef = node} />)}
                    </Form.Item>
                    <Form.Item label="所在地区">
                        {getFieldDecorator('residence', {
                            initialValue: ['guangdong', 'shenzhen', 'baoan'],
                            rules: [
                                { type: 'array', required: true, message: '请选择你所在的区!' },
                            ],
                        })(<Cascader options={residences} />)}
                    </Form.Item>
                    <Form.Item label="详细地址">
                        {getFieldDecorator('address', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入收货人详细地址!',
                                },
                            ],
                        })(<Input id="address" />)}
                    </Form.Item>
                    <Form.Item label="手机号码">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: '请输入你的手机号!' }],
                        })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item label="固定电话">
                        <Input id="telephone" placeholder="请输入你的固定电话" addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item label="电子邮件">
                        <Input placeholder="请输你入电子邮件" />
                    </Form.Item>
                    <Form.Item className="submit-btn" label="submit">
                        <Button type="primary" htmlType="submit">
                            保存收货地址
                     </Button>
                    </Form.Item>
                    <Icon type="close-circle" className="close-icon" onClick={this.props.onClose} />
                </Form>
                <div className="mask"></div>
            </div>

        );
    }
}

AddAddressForm = Form.create({ name: 'addAddress' })(AddAddressForm);

export default AddAddressForm;