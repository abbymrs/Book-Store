import React from 'react'
import { Empty } from 'antd';
import './empty-cart.less';

export default function EmptyCart(props) {
	return (
		<div className="empty-cart center">
			<Empty
				image="/images/cart-red.png"
				imageStyle={{
					height: 60,
				}}
				description={
					<div>
						<div>购物车空空的哦~，去看看心仪的商品吧~</div>
						<a href="/">去购物>></a>
					</div>
				}
			>
			</Empty>
		</div>
	);
}