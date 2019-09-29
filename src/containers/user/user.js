import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Layout, Menu } from 'antd';
import RouteWithSubRoutes from '../../components/route-with-sub-route/route-with-sub-route';
import { NoMatch } from "../../AppRouter";
import './user.less';

const { Sider } = Layout;

export default class UserCenter extends Component {
    render() {
        const routesComponents = this.props.routes.map((route, key) => {
            return <RouteWithSubRoutes key={key} {...route} />
        });
        const path = this.props.location.pathname;
        const pathName = path.indexOf('orders') > -1 ? '/orders' : path;

        return (
            <Router>
                <Layout className="order-list-wrapper">
                    <Sider width={150}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[pathName]}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="/orders"><Link to="/user/orders">我的订单</Link></Menu.Item>
                            <Menu.Item key="/user/address"><Link to="/user/address">收货地址</Link></Menu.Item>
                            <Menu.Item key="/user/favorites"><Link to="/user/favorites">个人收藏</Link></Menu.Item>
                            <Menu.Item key="/user/password"><Link to="/user/password">忘记密码</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="user-layout">
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