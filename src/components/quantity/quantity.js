import React from 'react';
import { Icon, Input } from 'antd';

export default function Quantity(props) {
    return (
        <span className="quantity-wrapper">
            <Icon type="minus" className="decrease center" onClick={props.onDecrease} />
            <Input value={props.value} className="quantity-num" />
            <Icon type="plus" className="increase center" onClick={props.onIncrease} />
        </span>
    );
}