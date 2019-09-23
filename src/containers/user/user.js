import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import RouteWithSubRoutes from '../../components/route-with-sub-route/route-with-sub-route';

const { Sider } = Layout;

export default class UserCenter extends Component {
    onSelectTab = ({ item, key }) => {
        console.log('key', key);
    }
    render() {
        const routesComponents = this.props.routes.map((route, key) => {
            return <RouteWithSubRoutes key={key} {...route} />
        });
        return (
            <Router>
                <Layout className="order-list-wrapper">
                    <Sider width={150}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            onSelect={this.onSelectTab}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1"><Link to="/user/orders">我的订单</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/user/address">收货地址</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/user/favorites">个人收藏</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/user/password">忘记密码</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Switch>
                            {routesComponents}
                        </Switch>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}