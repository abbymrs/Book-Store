import React from 'react'
import { Table, Button } from 'antd';

import './cart-list.less';
import Quantity from '../quantity/quantity';

export default function CartList(props) {
	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		getCheckboxProps: record => ({
			disabled: record.name === 'Disabled User', // Column configuration not to be checked
			name: record.name,
		}),
	};
	const copiedBooks = JSON.parse(JSON.stringify(props.books));
	const dataSource = copiedBooks.map(book => {
		book.goodSection = {
			url: book.imgUrl,
			title: book.title,
			author: book.author,
			id: book.id
		};
		book.quantitySection = {
			orderQuantity: book.quantity,
			stocks: Math.floor(Math.random() * (10 - 1) + 1)
		};
		const price = +book.price.slice(1);
		book.totalPrice = book.price.slice(0, 1) + price * book.quantity;
		book.key = book.id;
		return book;
	});
	const columns = [
		{
			title: '商品',
			dataIndex: 'goodSection',
			render: goodSection => (
				<div className="align-vertical goods-section"
					onClick={props.onViewBookDetail.bind(this, goodSection.id)}
				>
					<img src={goodSection.url} alt={goodSection.title} />
					<div className="goods-desc">
						<div className="goods-desc-title">{goodSection.title}</div>
						<div>{goodSection.author}</div>
					</div>
				</div>
			),
		},
		{
			title: '单价',
			dataIndex: 'price',
		},
		{
			title: '数量',
			dataIndex: 'quantitySection',
			render: quantitySection => (
				<div className="goods-quantity-cell">
					<Quantity value={quantitySection.orderQuantity} onIncrease={props.onIncrease} onDecrease={props.onDecrease} />
					{quantitySection.stocks <= 10 &&
						<div className="red stocks">仅剩{quantitySection.stocks}件</div>}
				</div>
			)
		},
		{
			title: '小计',
			dataIndex: 'totalPrice',
		},
		{
			title: '操作',
			dataIndex: '',
			render: () => (
				<div className="operations">
					<div>删除</div>
					<div>移到我的关注</div>
				</div>
			)
		}
	];
	return (
		<div className="cart-list">
			<div className="red all-goods">
				<span>全部商品</span>
				<span className="goods-number">{props.books.length}</span>
			</div>
			<Table pagination={false} rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
			<div className="order-actions align-end-x">
				<span className="total-quantity-wrapper">已选择<span className="red total-quantity">{2}</span>商品</span>
				<div className="total-price-wrapper">
					<span>总价</span>
					<span className="total-price red">${10.98}</span>
				</div>
				<Button className="add-to-cart" type="danger" onClick={props.onCheckout}>去结算</Button>
			</div>
		</div>
	);
}