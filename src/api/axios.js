import axios from 'axios'
import storage from 'good-storage'


const baseUrl = 'https://office.rondaful.com';

const validStatus = (res, cb) => {
    if(res.status === 200) {
        //请求的是图片
        if(/image\/png/.test(res.headers['content-type'])) {
            return res
        } else {
            if(res.data.message === '登录成功') {
                storage.session.set('USER_TOKEN', res.data.token)
            }
            return res.data
        }
    } else if(res.status === 400) {
        return res.data
    }
};


const fetch = (url, method = 'get', { data, headers = {} } = {}, cb) => {
    let token = storage.session.get('USER_TOKEN');
    let reqHeaders = {
        'Authorization': token,
        ...headers
    };
    let options = {
        method,
        url: `${baseUrl}${url}`,
        headers: reqHeaders
    };
    if(method === 'get') {
      options.params = {
          ...data, test: ''
      }
    } else {
        options.data = {
            ...data, test: ''
        }
    }
    return axios(options).then(res => {
        return validStatus(res, cb)
    }).catch(err => {
        return validStatus(err.response)
    })
};

export default fetch
