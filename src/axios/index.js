import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function(err, response) {
                console.log(response);
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options) {
        let baseApi = 'https://easy-mock.com/mock/5b94e432dd236325f85bf85d/example/';
        return new Promise((resolve, reject) => {
            axios({
                    url: options.url,
                    method: 'get',
                    baseURL: baseApi,
                    timeout: 5000,
                    params: (options.data && options.data.params) || ''
                }).then((response) => {
                    if (response.status == '200') {
                        let res = response.data;
                        if (res.code == '0') {
                            resolve(res);
                        } else {
                            Modal.info({
                                title: "提示",
                                content: res.msg
                            })
                        }
                    } else {
                        reject(response.data);
                    }
                })
                .catch(e => {
                    reject(e);
                    Modal.info({
                        title: "提示",
                        content: JSON.stringify(e)
                    })
                })
        });
    }
}