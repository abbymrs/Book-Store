import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Table, Button } from 'antd';
import './order-detail.less';

const columns = [
    {
        title: '商品编号',
        dataIndex: 'number'
    },
    {
        title: '商品名称',
        className: 'book-title',
        dataIndex: 'titleSection',
        render: titleSection => <Link to={`/books/${titleSection.id}`}>{titleSection.title}</Link>
    },
    {
        title: '价格',
        dataIndex: 'price',
        className: 'red'
    },
    {
        title: '数量',
        dataIndex: 'quantity',
    },
    {
        title: '操作',
        className: 'add-to-cart',
        render: () => <Link to="/cart"><Button type="primary" ghost>加入购物车</Button></Link>
    },
];

const data = [
    {
        key: '1',
        number: '123456',
        title: '前端架构设计 [美]迈卡·高保特(Micah Godbolt)',
        price: '$69.20',
        quantity: 1,
        id: '87f7608e-5385-4608-937f-ae3ad4466c1a'
    },
    {
        key: '2',
        number: '123457',
        title: '前端架构设计 [美]迈卡·高保特(Micah Godbolt)',
        price: '$69.20',
        quantity: 2,
        id: '10c5894d-6ca3-4bb6-9f84-a9789c483f95'
    },
    {
        key: '3',
        number: '123458',
        title: '前端架构设计 [美]迈卡·高保特(Micah Godbolt)',
        price: '$69.20',
        quantity: 1,
        id: 'be915518-3446-40e1-bb78-d9c8b68efd46'
    }
];
const books = data.map(item => {
    item.titleSection = {};
    item.titleSection.title = item.title;
    item.titleSection.id = item.id;
    return item;
});

export default class OrderDetail extends Component {
    state = {
        orderDetail: {
            books: books,
            orderNumber: 103391355382,
            paymentMethod: '在线支付',
            deliveryWay: '普通配送',
            orderTime: '2019-09-20 16:53:39',
            paymentTime: '2019-09-20 16:54:38',
            consignee: 'abby',
            deliveryAddress: '广东深圳市宝安区豪城馨庭居小区兴华阁一单元A栋202',
            phone: '130****5720',
            email: '',
            price: '119.10元'
        }
    }
    render() {
        const { orderDetail } = this.state;
        return (
            <div className="order-detail-wrapper">
                <div className="goods-list white-bg">
                    <h3 className="font-sm">商品列表</h3>
                    <Table
                        columns={columns}
                        dataSource={orderDetail.books}
                        pagination={false}
                        bordered
                    />
                </div>
                <div className="goods-info white-bg font-sm">
                    <h3 className="font-sm">订单信息</h3>
                    <ul className="align-vertical-col">
                        <li className="dl">
                            <span className="dt">订单编号</span>
                            <span className="dd">{orderDetail.orderNumber}</span>
                        </li>
                        <li className="dl">
                            <span className="dt">支付方式</span>
                            <span className="dd">{orderDetail.paymentMethod}</span>
                        </li>
                        <li className="dl">
                            <span className="dt">配送方式</span>
                            <span className="dd">{orderDetail.deliveryWay}</span>
                        </li>
                        <li className="dl">
                            <span className="dt">下单时间</span>
                            <span className="dd">{orderDetail.orderTime}</span>
                        </li>
                        <li className="dl">
                            <span className="dt">支付时间</span>
                            <span className="dd">{orderDetail.paymentTime}</span>
                        </li>
                    </ul>
                </div>
                <div className="goods-info white-bg font-sm">
                    <h3 className="font-sm">收货人信息</h3>
                    <ul className="align-vertical-col">
                        <li className="dl">
                            <span className="dt">收货人姓名</span>
                            <span className="dd">{orderDetail.consignee}</span>
                        </li>
                        <li className="dl">
                            <span className="dt">地址</span>
                            <span className="dd">{orderDetail.deliveryAddress}</span>
                        </li>
                        <li className="dl">
                            <span className="dt">固定电话</span>
                            <span className="dd">{orderDetail.phone}</span>
                        </li>
                        <li className="dl">
                            <span className="dt">电子邮件</span>
                            <span className="dd">{orderDetail.email}</span>
                        </li>
                    </ul>
                </div>
                <div className="goods-info white-bg font-sm">
                    <h3 className="font-sm">结算信息</h3>
                    <ul className="align-vertical-col">
                        <li className="dl">
                            <span className="dt">商品金额</span>
                            <span className="dd">{orderDetail.price}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}