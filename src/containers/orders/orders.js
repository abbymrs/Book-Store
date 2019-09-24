import React, { Component } from 'react';
import { Layout, Tabs } from 'antd';
import './orders.less';

import Order from '../../components/order/order';

const { TabPane } = Tabs;
const { Content } = Layout;

export default class Orders extends Component {

	state = {
		selectedTab: '1',
		orders: [
			{
				date: '2019-09-20 16:53:39',
				number: '103391355382',
				consignee: 'abby',
				price: '$119.10',
				books: [
					{
						img: '/images/book1.png',
						title: '李施德林 (Listerine) 漱口水 冰蓝劲爽口味3+2套装 (500mL*3瓶+100mL*2瓶) (新老随',
						quantity: 1,
						id: 'f5abbf3e-f891-4375-bd85-fc697c2c89c7'
					},
					{
						img: '/images/book1.png',
						title: '李施德林 (Listerine) 漱口水 冰蓝劲爽口味3+2套装 (500mL*3瓶+100mL*2瓶) (新老随',
						quantity: 2,
						id: 'f5abbf3e-f891-4375-bd85-fc697c2c89c8'
					},
					{
						img: '/images/book1.png',
						title: '李施德林 (Listerine) 漱口水 冰蓝劲爽口味3+2套装 (500mL*3瓶+100mL*2瓶) (新老随',
						quantity: 1,
						id: 'f5abbf3e-f891-4375-be85-fc697c2c89c7'
					}
				]
			},
			{
				date: '2019-09-20 16:53:39',
				number: '103391355380',
				consignee: 'abby',
				price: '$119.10',
				books: [
					{
						img: '/images/book1.png',
						title: '李施德林 (Listerine) 漱口水 冰蓝劲爽口味3+2套装 (500mL*3瓶+100mL*2瓶) (新老随',
						quantity: 1,
						id: 'f5abbf3e-f891-4375-bd85-fc697c2c89c7'
					},
					{
						img: '/images/book1.png',
						title: '李施德林 (Listerine) 漱口水 冰蓝劲爽口味3+2套装 (500mL*3瓶+100mL*2瓶) (新老随',
						quantity: 2,
						id: 'f5abbf3e-f891-4375-bd85-fc697c2c89c8'
					},
					{
						img: '/images/book1.png',
						title: '李施德林 (Listerine) 漱口水 冰蓝劲爽口味3+2套装 (500mL*3瓶+100mL*2瓶) (新老随',
						quantity: 1,
						id: 'f5abbf3e-f891-4375-be85-fc697c2c89c7'
					}
				]
			}
		]
	}
	callback = (key) => {
		this.setState({
			selectedTab: key
		});
	}
	viewOrderDetail = (order, e) => {
		e.preventDefault();
		this.props.history.push('/orders/' + order.number);
	}
	render() {
		const { props } = this;
		const orderListprops = {
			action: this.viewOrderDetail,
			actionText: '查看详情'
		};
		const waitPaymentProps = {
			action: this.viewOrderDetail,
			actionText: '去付款'
		};
		const waitDeliveryProps = {
			action: this.viewOrderDetail,
			actionText: '确认收货'
		};
		return (
			<div className="order-list-wrapper">
				<div className="order-list-header">我的订单</div>
				<Content
					style={{
						background: '#fff',
						padding: 24,
						margin: 0,
						minHeight: 280,
					}}
				>
					<Tabs defaultActiveKey="1" onChange={this.callback}>
						<TabPane tab="全部订单" key="1">
							<Order orders={this.state.orders} {...Object.assign(orderListprops, props)} />
						</TabPane>
						<TabPane tab="待付款" key="2">
							<Order orders={this.state.orders} {...Object.assign(waitPaymentProps, props)} />
						</TabPane>
						<TabPane tab="待收货" key="3">
							<Order orders={this.state.orders} {...Object.assign(waitDeliveryProps, props)} />
						</TabPane>
					</Tabs>
				</Content>
			</div>
		);
	}
}