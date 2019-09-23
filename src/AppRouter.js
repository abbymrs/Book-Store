import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Layout } from 'antd';

import Home from './containers/home/home';
import Login from './containers/login/login';
import Register from './containers/register/register';
import BookDetail from './containers/book-detail/book-detail';
import UserCenter from './containers/user/user';
import Cart from "./containers/cart/cart";
import OrderDetail from './containers/order-detail/order-detail';
import DoneOrder from './containers/done-order/done-order';
import Orders from './containers/orders/orders';
import SearchInput from './components/search/search';
import RouteWithSubRoutes from './components/route-with-sub-route/route-with-sub-route';

import logo from './logo.svg';
import './App.less';

const { Header, Footer, Content } = Layout;
const routes = [
    { path: '/', component: Home, exact: true },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/books/:id', component: BookDetail },
    {
        path: '/user',
        component: UserCenter,
        routes: [
            { path: '/user/address', component: Test },
            { path: '/user/address/:name', component: Test },
            { path: '/user/orders', component: Orders },
            { path: '/user/orders/:id', component: OrderDetail },
            { path: '/user/orders/getOrderInfo', component: Test },
            { path: '/user/orders/done', component: DoneOrder },
            { path: '/user/favorites', component: Test },
            { path: '/user/password', component: Test },
            { path: '/user/cart', component: Cart }
        ]
    }
];

// const routeComponents = routes.map(({ path, component }, key) => (
//     <Route exact path={path} component={component} key={key} />
// ));
const routeComponents = routes.map((route, key) => (
    <RouteWithSubRoutes key={key} {...route} />
));
function NoMatch({ location }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}
function Test() {
    return <div>test</div>;
}

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
            </Router>
        );
    }
}
export default AppRouter;