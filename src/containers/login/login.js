import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Icon, Input, Button } from 'antd';

import { login } from '../../stores/actions/login.action';
import './login.less';

@connect(
	state => state.user,
	{ login }
)
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			hasError: false
		};
		this.inputRef = React.createRef();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		this.inputRef.current.focus();
	}

	handleSubmit(e) {
		e.preventDefault();
		const { username, password } = this.state;
		this.props.login({ username, password })
			.then(_ => {
				if (this.props.isLogin) {
					this.props.history.push('/');
				} else {
					this.setState({ hasError: true });
				}
			}, err => {
				this.setState({ hasError: true });
			})
	}
	handleChange(e) {
		const target = e.target;
		const key = target.name;
		this.setState({
			[key]: target.value
		});
		this.setState({ hasError: false });
	}
	render() {
		const { username, password, hasError } = this.state;
		const errorClass = (() => {
			if (hasError) return 'error';
			return '';
		})();
		return (
			<div className="login-wrapper">
				<h2>请登录</h2>
				<form className="login-form" onSubmit={this.handleSubmit}>
					<div className="ant-row form-group">
						<Input
							name="username"
							onChange={this.handleChange}
							placeholder="Enter your username"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							ref={this.inputRef}
						/>
					</div>
					<div className="ant-row form-group">
						<Input.Password
							name="password"
							onChange={this.handleChange}
							placeholder="Enter your password"
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						/>
						{hasError &&
							<div className={errorClass}>
								{this.props.errorMessage}
							</div>
						}
					</div>
					<div className="ant-row form-group">
						<Button htmlType="submit" type="primary" disabled={!username || !password}>登录</Button>
						<Link to="/register/">
							<span className="to-register red">
								<Icon type="double-right" />注册
							</span>
						</Link>
					</div>
				</form>
			</div>
		);
	}
}
export default Login;