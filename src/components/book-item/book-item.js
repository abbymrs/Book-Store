import React from 'react';
import { Icon } from 'antd';

export default function BookItem({ book, onClick, addFavorite }) {
	const filledColor = (() => {
		return book.isFavarite ? 'red' : '';
	})();
	return (
		<li className="book-item">
			<div className="image-wrapper" onClick={onClick}><img src={book.imgUrl} alt="img" /></div>
			<h2 className="price red">{book.price}</h2>
			<div className="book-detail-section">
				<div className="book-title" onClick={onClick}>
					<span className="title red">{book.title}</span>
					<span className="brief-desc">{book.briefDesc}</span>
				</div>
				<div className="gray-color">{book.publisher}</div>
				<div className="actions align-vertical">
					<span className="add-favorite" onClick={() => addFavorite(book)}><Icon type="heart" fill={filledColor} />关注</span>
					<i className="separator"></i>
					<span className="add-to-cart red"><Icon type="shopping-cart" />加入购物车</span>
				</div>
				<div className="hover-show">{book.author}</div>
			</div>
		</li>
	);
}