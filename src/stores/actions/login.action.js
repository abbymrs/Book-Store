import http from 'axios';

export const LOGIN_SUCESS = 'LOGIN_SUCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
const loginUrl = 'http://localhost:8089/api/login';

function loginSuccess(data) {
    return {
        type: LOGIN_SUCESS,
        data
    }
}

function loginFailed(message) {
    return {
        type: LOGIN_FAIL,
        errorMessage: message
    }
}

export function login({ username, password }) {
    if (!username || !password) {
        return dispatch => Promise.reject(dispatch(loginFailed('Please input user name or password')));
    }
    return dispatch => {
        return http.post(loginUrl, { username, password })
            .then(res => {
                const data = res.data;
                if (data.status === 0) {
                    dispatch(loginFailed(data.msg));
                } else {
                    dispatch(loginSuccess(res.data));
                }
            }, err => {
                dispatch(loginFailed(err));
            })
    }
}