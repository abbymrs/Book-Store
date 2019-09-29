import React from 'react'
import { Icon } from 'antd';
import './done-order.less';

export default function DoneOrder(props) {
    function viewDetail(e) {
        e.preventDefault();
        props.history.push('/orders/');
    }
    return (
        <div className="done-order">
            <Icon type="check-circle" theme="filled" className="done-icon" />
            <h2 className="green-7">
                <div>购买成功</div>
                <div>我们尽快为您处理</div>
            </h2>
            <div className="font-sm order-detail">
                <span>订单编号：</span>
                <span>103391355382</span>
                <div className="view-order-detail">
                    <a href="/" className="font-sm" onClick={viewDetail}>查看订单详情</a>
                </div>
            </div>
            <div className="font-sm reminder">重要提示：京东平台及销售商不会以订单异常、系统升级为由，要求您点击任何链接进行退款。</div>
        </div>
    );
}