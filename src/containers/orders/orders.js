import React, { Component } from 'react';
import { Layout, Menu, Tabs } from 'antd';
import './orders.less';

import Order from '../../components/order/order';

const { TabPane } = Tabs;
const { Content, Sider } = Layout;

export default class Orders extends Component {

	state = {
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
		console.log(key);
	}
	render() {
		return (
			<Layout className="order-list-wrapper">
				<Sider width={150}>
					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						style={{ height: '100%', borderRight: 0 }}
					>
						<Menu.Item key="1">我的订单</Menu.Item>
						<Menu.Item key="2">收货地址</Menu.Item>
						<Menu.Item key="3">个人收藏</Menu.Item>
						<Menu.Item key="4">忘记密码</Menu.Item>

					</Menu>
				</Sider>
				<Layout style={{ padding: '0 24px 24px' }}>
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
								<Order orders={this.state.orders} />
							</TabPane>
							<TabPane tab="待付款" key="2">
								Content of Tab Pane 2
    						</TabPane>
							<TabPane tab="待收货" key="3">
								Content of Tab Pane 3
    						</TabPane>
						</Tabs>
					</Content>
				</Layout>
			</Layout>
		);
	}
}