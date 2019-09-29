import React, { Component } from 'react';
import { Button } from "antd";
import './address.less';
import AddAddressForm from '../../components/add-address/add-address';

export default class Address extends Component {
    state = {
        address: [
            {
                consignee: 'abby',
                isDefaultAddress: true,
                district: '广东深圳市宝安区',
                address: '豪城馨庭居小区兴华阁一单元A栋202',
                phone: '130****5720',
                telephone: '',
                email: '',
                id: 'd678f23e-a8d-4b73-a688-aca699b416d4',
            },
            {
                consignee: 'jane',
                isDefaultAddress: false,
                district: '广东深圳市宝安区',
                address: '豪城馨庭居小区兴华阁一单元A栋202',
                phone: '130****5720',
                telephone: '',
                email: '',
                id: 'd678f23e-a8d-4b73-a688-aca699b716d4',
            },
            {
                consignee: 'john',
                isDefaultAddress: false,
                district: '广东深圳市宝安区',
                address: '豪城馨庭居小区兴华阁一单元A栋202',
                phone: '130****5720',
                telephone: '',
                email: '',
                id: 'd678f23e-a8d-4h73-a688-aca699b416d4',
            }
        ],
        isAdding: false
    }
    addAddress = () => {
        this.setState({
            isAdding: true
        });
    }
    onSubmit = () => {
        console.log('submit');
    }
    onClose = () => {
        this.setState({
            isAdding: false
        });
    }
    render() {
        const { isAdding } = this.state;
        return (
            <div className="address-list-wrapper white-bg">
                <div className="add-address align-vertical">
                    <Button type="primary" ghost onClick={this.addAddress}>新增地址</Button>
                </div>
                <ul className="address-list">
                    {this.state.address.map(add => (
                        <li key={add.id} className="address-list-item font-sm">
                            <div className="address-item-header align-vertical">
                                <h3 className="consignee">{add.consignee}</h3>
                                {add.isDefaultAddress &&
                                    <span className="default-address">默认地址</span>
                                }
                            </div>
                            <div className="address-item-content">
                                <div className="address-sub-item dl">
                                    <span className="dt">收货人:</span>
                                    <span className="dd">{add.consignee}</span>
                                </div>
                                <div className="address-sub-item dl">
                                    <span className="dt">所在地区:</span>
                                    <span className="dd">{add.district}</span>
                                </div>
                                <div className="address-sub-item dl">
                                    <span className="dt">地址:</span>
                                    <span className="dd">{add.address}</span>
                                </div>
                                <div className="address-sub-item dl">
                                    <span className="dt">手机:</span>
                                    <span className="dd">{add.phone}</span>
                                </div>
                                <div className="address-sub-item dl">
                                    <span className="dt">固定电话:</span>
                                    <span className="dd">{add.telephone}</span>
                                </div>
                                <div className="address-sub-item dl">
                                    <span className="dt">电子邮箱:</span>
                                    <span className="dd">{add.email}</span>
                                </div>
                            </div>
                            <div className="actions align-end-x">
                                {!add.isDefaultAddress &&
                                    <span className="set-default-address">设为默认</span>
                                }
                                <span className="address-edit">编辑</span>
                            </div>
                            <span className="address-delete"></span>
                        </li>
                    ))}
                </ul>
                {isAdding &&
                    <AddAddressForm onClose={this.onClose} />
                }
            </div>
        );
    }
}
