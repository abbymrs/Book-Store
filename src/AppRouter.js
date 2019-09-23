import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Layout, Avatar, Dropdown } from 'antd';

import Home from './containers/home/home';
import Login from './containers/login/login';
import Register from './containers/register/register';
import BookDetail from './containers/book-detail/book-detail';
import UserCenter from './containers/user-center/user-center';
import Cart from "./containers/cart/cart";
import OrderDetail from './containers/order-detail/order-detail';
import DoneOrder from './containers/done-order/done-order';
import Orders from './containers/orders/orders';

import logo from './logo.svg';
import SearchInput from './components/search/search';
import DropdownMenu from './components/drop-down-menu/drop-down-menu';
import './App.less';

const { Header, Footer, Content } = Layout;
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/books/:id', component: BookDetail },
    { path: '/address/:name', component: UserCenter },
    { path: '/orders/getOrderInfo', component: OrderDetail },
    { path: '/orders/done', component: DoneOrder },
];
const dropdownMenus = [
    { path: '/center', component: UserCenter },
    { path: '/address', component: UserCenter },
    { path: '/orders', component: Orders },
    { path: '/orders/nopayments', component: UserCenter },
    { path: '/orders/ontheway', component: UserCenter },
    { path: '/favorites', component: UserCenter },
    { path: '/password', component: UserCenter },
    { path: '/cart', component: Cart }
];
const routeComponents = routes.concat(dropdownMenus).map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
));
const dropdownDisplayNames = [
    '个人中心',
    '收货地址',
    '全部订单',
    '待付款',
    '待收货',
    '个人收藏',
    '忘记密码'
];

@connect(
    state => state
)
class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    onSearch() {
        console.log('search');
    }
    signOut() {
        console.log('sign out');
    }
    render() {
        const user = this.props.user;
        const DropdownList = () => <DropdownMenu routes={dropdownMenus} displayNames={dropdownDisplayNames} signOut={this.signOut} />;
        return (
            <Router>
                <Layout className="container">
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="align-between header-content">
                            <div className="logo">
                                <Link to="/"><img src={logo} alt="logo" /></Link>
                            </div>
                            <div className="search-wrapper">
                                <SearchInput onSearch={this.onSearch} />
                            </div>
                            <div className="login-out-action center">
                                {!user.isLogin && <Link to="/login/"><span className="sign-in">Sign in</span></Link>}
                                {user.isLogin &&
                                    <div className="center">
                                        <span className="user-name">{user.username}</span>
                                        <Dropdown overlay={DropdownList}>
                                            <Avatar icon="user" />
                                        </Dropdown>

                                    </div>}
                            </div>
                        </div>
                    </Header>
                    <Content className="route-content">
                        <Switch>
                            {routeComponents}
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Router>
        );
    }
}
export default AppRouter;