import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link, withRouter } from "react-router-dom";
import { Layout } from 'antd';

import Home from './containers/home/home';
import Login from './containers/login/login';
import Register from './containers/register/register';
import BookDetail from './containers/book-detail/book-detail';
import UserCenter from './containers/user/user';
import Cart from "./containers/cart/cart";
import OrderComfirmation from './containers/order-confirm/order-confirm';
import DoneOrder from './containers/done-order/done-order';
import Orders from './containers/orders/orders';
import SearchInput from './components/search/search';
import RouteWithSubRoutes from './components/route-with-sub-route/route-with-sub-route';
import OrderDetail from './containers/order-detail/order-detail';
import Favorites from './containers/favorites/favorites';
import Address from './containers/address/address';
import ForgotPassword from './containers/forgot-password/forgot-password';

import logo from './logo.svg';
import './App.less';

const { Header, Footer, Content } = Layout;
const routes = [
    { path: '/', component: Home, exact: true },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/books/:id', component: BookDetail },
    { path: '/cart', component: Cart },
    { path: '/orders/:id/confirmation', component: OrderComfirmation },
    {
        path: '/user',
        component: UserCenter,
        routes: [
            { path: '/user/address', component: Address, exact: true },
            { path: '/user/address/:name', component: Test },
            { path: '/user/orders', component: Orders, exact: true },
            { path: '/user/orders/:id/getOrderInfo', component: Test },
            { path: '/user/orders/:id', component: OrderDetail },
            { path: '/user/orders/done', component: DoneOrder },
            { path: '/user/favorites', component: Favorites },
            { path: '/user/password', component: ForgotPassword },
        ]
    }
];

const routeComponents = routes.map((route, key) => (
    <RouteWithSubRoutes key={key} {...route} />
));
export function NoMatch({ location }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}
function Test(props) {
    return <div>test {props.match.path}</div>;
}

@withRouter
@connect(
    state => state
)
class AppRouter extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.updateContentClass();
        }
    }
    onSearch = () => {
        console.log('search');
    }
    signOut = () => {
        console.log('sign out');
    }
    updateContentClass = () => {
        const pathname = this.props.location.pathname;
        const content = document.querySelector('.route-content');

        if (pathname.indexOf('user') > -1) {
            content.classList.add('no-padding');
        } else {
            content.classList.remove('no-padding');
        }
    }
    render() {
        const user = this.props.user;

        return (
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
                                    <Link to="/user/orders" className="user-name">{user.username}</Link>
                                </div>}
                        </div>
                    </div>
                </Header>
                <Content className="route-content">
                    <Switch>
                        {routeComponents}
                        <Route component={NoMatch} />
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        );
    }
}
export default AppRouter;