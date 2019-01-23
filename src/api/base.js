const baseUrl = 'https://office.rondaful.com';

export const getAuthCode = () => {
    return fetch(`${baseUrl}/login/code`, {
        mode: 'cors'
    })
};
