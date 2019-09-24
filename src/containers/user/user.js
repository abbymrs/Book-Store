import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Layout, Menu } from 'antd';
import RouteWithSubRoutes from '../../components/route-with-sub-route/route-with-sub-route';
import { NoMatch } from "../../AppRouter";

const { Sider } = Layout;

export default class UserCenter extends Component {

    render() {
        const routesComponents = this.props.routes.map((route, key) => {
            return <RouteWithSubRoutes key={key} {...route} />
        });
        const path = this.props.location.pathname;
        return (
            <Router>
                <Layout className="order-list-wrapper">
                    <Sider width={150}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[path]}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="/user/orders"><Link to="/user/orders">我的订单</Link></Menu.Item>
                            <Menu.Item key="/user/address"><Link to="/user/address">收货地址</Link></Menu.Item>
                            <Menu.Item key="/user/favorites"><Link to="/user/favorites">个人收藏</Link></Menu.Item>
                            <Menu.Item key="/password"><Link to="/user/password">忘记密码</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Switch>
                            {routesComponents}
                            <Route component={NoMatch} />
                        </Switch>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}