import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import './forgot-password.less';

class ForgotPassword extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				sm: { span: 7 },
			},
			wrapperCol: {
				sm: { span: 12 }
			},
		};
		return (
			<div className="forgot-password-form white-bg">
				<h2>重置密码</h2>
				<Form onSubmit={this.handleSubmit} {...formItemLayout} className="forgot-password-form">
					<Form.Item hasFeedback label="原密码">
						{getFieldDecorator('old-pwd', {
							rules: [{ required: true, message: '请输入你的原密码!' }],
						})(
							<Input
								id="old-pwd"
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="请输入你的原密码"
							/>
						)}
					</Form.Item>
					<Form.Item hasFeedback label="新密码">
						{getFieldDecorator('new-pwd', {
							rules: [{ required: true, message: '请输入你的新密码!' }],
						})(
							<Input
								id="new-pwd"
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="请输入你的新密码"
							/>
						)}
					</Form.Item>
					<Form.Item hasFeedback label="再次确认密码">
						{getFieldDecorator('confirm-pwd', {
							rules: [{ required: true, message: '请再次确认你的密码!' }],
						})(
							<Input
								id="confirm-pwd"
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="请再次确认你的密码"
							/>
						)}
					</Form.Item>
					<Form.Item className="submit-btn" label="confirm button">
						<Button type="primary" htmlType="submit" className="forgot-password-form-button">
							确定
          				</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}
const WrappedNormalForgotPasswordForm = Form.create({ name: 'normal_login' })(ForgotPassword);
export default WrappedNormalForgotPasswordForm;
