import { combineReducers } from 'redux';
import {
    LOGIN_SUCESS,
    LOGIN_FAIL
} from '../actions/login.action';
import {
    ADD_FAVORITE,
    REMOVE_FAVORITE
} from "../actions/add-favorite.action";

const initialState = {
    isLogin: false,
    redirectUrl: '',
    msg: '',
    username: ''
};

function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCESS:
            return Object.assign({}, state, {
                isLogin: true,
                ...action.data
            });

        case LOGIN_FAIL:
            return Object.assign({}, state, { isLogin: false, ...action });

        default:
            return state;
    }
}
function favoriteBooks(state = { favoriteBooks: [] }, { type, favoriteBooks }) {
    switch (type) {
        case ADD_FAVORITE:
            return Object.assign({}, state, { favoriteBooks });

        case REMOVE_FAVORITE:
            return Object.assign({}, state, { favoriteBooks });
        default:
            return state;
    }
}

const rootReducer = combineReducers({ user, favoriteBooks });
export default rootReducer;