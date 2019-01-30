import fetch from './axios'

export const getAuthCode = () => {
    return fetch('/login/code','get', { options: { responseType: 'blob' } })
};

export const login = (data) => {
    return fetch('/login', 'post', {data})
};
export const getWareHouse = () => {
    return fetch('/warehouse/local')
};
export const getUserInfo = () => {
    return fetch('/login/info')
};
