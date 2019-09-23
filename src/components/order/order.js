import React, { Component } from 'react';
import './order.less';

export default function Order(props) {
    function viewBookDetail(e) {
        e.preventDefault();
    }
    const { orders } = props;
    return (
        <div className="order-list-wrapper font-sm">
            <ul className="order-list-content">
                {orders.map(order => (
                    <li className="order-list-item" key={order.number}>
                        <div className="order-list-item-header align-vertical">
                            <div className="col1">{order.date}</div>
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
                        <ul>
                            {order.books.map(book => (
                                <li className="align-vertical order-item" key={book.id}>
                                    <div className="col1 order-img align-vertical">
                                        <img src={book.img} alt="" />
                                        <a href="#" onClick={viewBookDetail}>{book.title}</a>
                                    </div>
                                    <div className="col2">x{book.quantity}</div>
                                    <div className="col3">
                                        <a href="#" onClick={viewBookDetail}>申请售后</a>
                                    </div>
                                    <div className="col4">
                                        <a href="#" onClick={viewBookDetail}>查看详情</a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}

            </ul>
        </div>
    );
}