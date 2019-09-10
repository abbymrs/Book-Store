import React from 'react';
import BookItem from '../book-item/book-item';
import './books.less';

export default function Books({ books, history, addFavorite }) {
    function goToDetailPage(id) {
        history.push('/books/' + id);
    }
    const book = books.map(book => <BookItem key={book.id} book={book} addFavorite={addFavorite} onClick={() => goToDetailPage(book.id)} />);
    return (
        <ul className="books-list">
            {book}
        </ul >
    );
}