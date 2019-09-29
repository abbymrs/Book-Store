import React, { Component } from 'react';
import { Steps, Icon, Button } from "antd";

import './order-confirm.less';

const { Step } = Steps;
const addressList = [
    {
        consignee: 'abby',
        address: '广西 桂林市 兴安县 兴安镇 桂林市兴安县湘水乐园6栋3单元201',
        phone: '13048825720',
        isDefaultAddress: true,
        id: '8bc36a69-87ab-4148-92ee-6fdfcf4a7eb0'
    },
    {
        consignee: 'jane',
        address: '广东省深圳市宝安区新安街道办中商花园B2栋901',
        phone: '13048825720',
        isDefaultAddress: false,
        id: 'f899912f-13c2-4fa3-8b77-4f4d380cbd43'
    },
];
class OrderConfirmation extends Component {

    state = {
        selectedAdd: addressList[0],
        addressLists: addressList,
        isShowMore: false
    }
    onSelectAddress = (address) => {
        this.setState({
            selectedAdd: address,
            isShowMore: false
        });
    }
    setDefaultAdd = (address, e) => {
        e.stopPropagation();
        const adds = this.state.addressLists.map(add => {
            if (add.id === address.id) {
                add.isDefaultAddress = true;
            } else {
                add.isDefaultAddress = false;
            }
            return add;
        });
        this.setState(() => ({
            addressLists: adds
        }));
    }
    showMore = () => {
        this.setState(state => ({
            isShowMore: !state.isShowMore
        }));
    }
    submitOrder = () => {
        this.props.history.push('/orders/done');
    }
    render() {
        const { isShowMore, selectedAdd } = this.state;
        return (
            <div className="order-confirmation-wrapper">
                <div className="align-between order-confirmation-top">
                    <h2>结算页</h2>
                    <Steps current={1} labelPlacement="vertical" className="order-process-bar">
                        <Step disabled status="finish" description="我的购物车" />
                        <Step disabled status="process" description="填写核对订单信息" />
                        <Step disabled status="wait" description="成功提交订单" />
                    </Steps>
                </div>
                <div className="order-confirmation-content-wrapper">
                    <div className="order-confirmation-title">填写并核对订单信息</div>
                    <div className="order-confirmation-content">
                        <div className="consignee-info-wrapper">
                            <h3>收货人信息</h3>
                            <ul className="address-list">
                                {this.state.addressLists.map(item => (
                                    <li key={item.id}
                                        style={(selectedAdd.id === item.id || isShowMore) ? { display: 'block' } : { display: 'none' }}
                                        className="list-item clearfix"
                                    >
                                        <div className="consignee-detail-wrapper align-vertical fl">
                                            <div
                                                onClick={this.onSelectAddress.bind(this, item)}
                                                className={'consignee-name ' + (this.state.selectedAdd.id === item.id ? 'selected' : '')}>{item.consignee}</div>
                                            <div className="address-detail">
                                                <span className="consignee">{item.consignee}</span>
                                                <span className="address">{item.address}</span>
                                                <span>{item.phone.replace(/(\d{3})(\d)+(\d{4})/ig, '$1****$3')}</span>
                                                {item.isDefaultAddress && <span className="default-add">默认地址</span>}
                                            </div>
                                        </div>
                                        <div className="operation fr">
                                            {!item.isDefaultAddress &&
                                                <a href="javascrip:;" className="set-default-address" onClick={this.setDefaultAdd.bind(this, item)}>设置为默认地址</a>}
                                            <a href="javascrip:;" className="edit-address">编辑</a>
                                            {this.state.selectedAdd.id !== item.id &&
                                                <a href="javascrip:;" className="delete-address">删除</a>}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="more-address align-vertical"
                                onClick={this.showMore}>
                                <span>更多地址</span>
                                <Icon type="double-right" className={isShowMore ? 'more-address-icon-up' : 'more-address-icon-down'} />
                            </div>
                        </div>
                        <div className="payment-wrapper">
                            <h3>支付方式</h3>
                            <span className="payment-method selected">在线支付</span>
                        </div>
                    </div>
                </div>
                <div className="order-summary-price font-sm clearfix">
                    <div className="order-price dl">
                        <span className="dt">
                            <span className="red">1</span>
                            件商品，总商品金额:
                        </span>
                        <span className="dd">$49.80</span>
                    </div>
                    <div className="shipping-charge dl">
                        <span className="dt">运费:</span>
                        <span className="dd">$6.00</span>
                    </div>
                </div>
                <div className="order-summary-detail font-sm">
                    <div className="order-total-price dl">
                        <span className="dt">应付总额:</span>
                        <span className="red dd total">$55.80</span>
                    </div>
                    <div className="align-end-x">
                        <div className="delivery-address">
                            <span>寄送至:</span>
                            <span className="">广东 深圳市 宝安区 豪城馨庭居小区兴华阁一单元A栋202</span>
                        </div>
                        <div className="consignee-detail">
                            <span>收货人:</span>
                            <span className="consignee">
                                <span>abby</span>
                                <span>130****5720</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="align-end-x submit-order">
                    <Button type="danger" size="large" onClick={this.submitOrder}>提交订单</Button>
                </div>
            </div>
        );
    }
}

export default OrderConfirmation;