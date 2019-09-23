import React from 'react';
import './order.less';

export default function Order(props) {
    function viewBookDetail(book, e) {
        e.preventDefault();
        props.history.push('/books/' + book.id);
    }
    function applyPostSaleService(e) {
        e.preventDefault();
    }
    const { orders } = props;
    return (
        <div className="order-list-wrapper font-sm">
            <ul className="order-list-content">
                {orders.map(order => (
                    <li className="order-list-item" key={order.number}>
                        <div className="order-list-item-header align-vertical">
                            <div className="col1 order-date">{order.date}</div>
                            <div className="col2">
                                <span>订单编号：</span>
                                <span>{order.number}</span>
                            </div>
                            <div className="col3">
                                <span>收货人：</span>
                                <span>{order.consignee}</span>
                            </div>
                            <div className="col4">
                                <span>订单金额：</span>
                                <span>{order.price}</span>
                            </div>
                        </div>
                        <ul className="order-list-sub">
                            {order.books.map((book, idx) => (
                                <li className="align-vertical order-item" key={book.id}>
                                    <div className="col1 order-img align-vertical">
                                        <img src={book.img} alt="" />
                                        <a href="/" onClick={viewBookDetail.bind(this, book)}>{book.title}</a>
                                    </div>
                                    <div className="col2">x{book.quantity}</div>
                                    <div className="col3">
                                        <a href="/" onClick={applyPostSaleService}>申请售后</a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="col4 view-order-detail">
                            <a href="/" onClick={props.action.bind(this, order)}>{props.actionText}</a>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    );
}