import React from 'react';
import BookItem from '../book-item/book-item';
import './books.less';

export default function Books({ books, history, actionHandler, actionText }) {
    function goToDetailPage(id) {
        history.push('/books/' + id);
    }
    const book = books.map(book => <BookItem actionText={actionText} key={book.id} book={book} actionHandler={actionHandler} onClick={() => goToDetailPage(book.id)} />);
    return (
        <ul className="books-list">
            {book}
        </ul >
    );
}