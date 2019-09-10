export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

function addList(action, book) {
    let copiedArr = [...action.favoriteBooks];
    copiedArr.push(book);
    return copiedArr;
}
function removeList(action, book) {
    let copiedArr = [...action.favoriteBooks];
    let index = -1;
    copiedArr.forEach((item, idx) => {
        if (item.id === book.id) {
            index = idx;
            return;
        }
    });
    if (index !== -1) {
        copiedArr.splice(index, 1);
        return copiedArr;
    }
    return [...copiedArr];
}
function addFavorite(books, favoriteBook) {
    return {
        type: ADD_FAVORITE,
        favoriteBooks: addList(books, favoriteBook)
    }
}
function removeFavorite(books, favoriteBook) {
    return {
        type: REMOVE_FAVORITE,
        favoriteBooks: removeList(books, favoriteBook)
    }
}

export function addFavoriteBook(favoriteBooks, favoriteBook) {
    return dispatch => {
        dispatch(addFavorite(favoriteBooks, favoriteBook));
    }
}
export function removeFavoriteBook(favoriteBooks, favoriteBook) {
    return dispatch => {
        dispatch(removeFavorite(favoriteBooks, favoriteBook));
    }
}