import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmptyCart from "../../components/empty-cart/empty-cart";
import CartList from '../../components/cart-list/cart-list';

@connect(
    state => state
)
class Cart extends Component {
    state = {
        books: [
            {
                imgUrl: '/images/book1.png',
                price: '$49.32',
                title: '前端架构设计',
                briefDesc: '少年引领科技,科技引领未来',
                author: 'Michael Smith',
                publisher: '人民邮电出版社',
                id: 'b49f2cc4-b349-42f2-98bf-aa6f4cc25ae8',
                isFavarite: false,
                quantity: 1
            },
            {
                imgUrl: '/images/book1.png',
                price: '$49.32',
                title: '前端架构设计',
                briefDesc: '少年引领科技,科技引领未来',
                author: 'Michael Smith',
                publisher: '人民邮电出版社',
                id: 'b49f2cc4-b349-42f2-98bf-aa6f4cc25afs',
                isFavarite: false,
                quantity: 3
            }
        ]
    }
    onIncrease = () => {

    }
    onDecrease = () => {

    }
    onViewBookDetail = (id) => {
        this.props.history.push('/books/' + id);
    }
    onCheckout = () => {
        this.props.history.push('/orders/getOrderInfo');
    }
    render() {
        const props = {
            onIncrease: this.onIncrease,
            onDecrease: this.onDecrease,
            onViewBookDetail: this.onViewBookDetail,
            onCheckout: this.onCheckout
        };
        return (
            <div>
                {this.state.books.length === 0 && <EmptyCart />}
                {this.state.books.length > 0 && <CartList books={this.state.books} {...props} />}
            </div>
        );
    }
}
export default Cart;