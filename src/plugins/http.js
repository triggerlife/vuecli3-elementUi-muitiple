import axios from './axios'
import dz from '@/assets/js/common'
// import Vue from 'vue'
const ERROR = -1
const SUCCESS = 0
export default {
    /**
     * post请求
     * @param  {String}   url        请求地址 必传
     * @param  {Object}   data       请求参数 必传
     * @param  {Function} callback   请求成功code=0回调函数 必传
     * @param  {Function} cbCodeFail 请求成功code=-1回调函数 非必传
     * @param  {Function} cbNetFial  请求失败回调函数 非必传
     */
    post (url, data, callback, cbCodeFail, cbNetFial) {
        axios({
            method: 'post',
            url: url,
            responseType: 'json',
            data: data
        }).then((response) => {
            if (response.data.code === SUCCESS) {
                callback(response.data.content)
            } else if (response.data.code === ERROR) {
                dz.showMessage('error',response.data.msg)
                if (cbCodeFail) {
                    cbCodeFail(response.data)
                }
            }
        }).catch((err) => {
            // 单独处理网络异常
            if (cbNetFial) {
                cbNetFial(err)
            }
        })
    },
    /**
     * basePost请求
     * @param  {String}   url        请求地址 必传
     * @param  {Object}   data       请求参数 必传
     * @param  {Function} callback   请求成功code=0回调函数 必传
     * @param  {Function} cbCodeFail 请求成功code=-1回调函数 非必传
     * @param  {Function} cbNetFial  请求失败回调函数 非必传
     */
    basePost (url, data, callback, cbCodeFail, cbNetFial) {
        axios({
            method: 'post',
            url:  process.env.VUE_APP_BASE_URL + url,
            responseType: 'json',
            data: data
        }).then((response) => {
            if (response.data.code === SUCCESS) {
                callback(response.data.content)
            } else if (response.data.code === ERROR) {
                dz.showMessage('error',response.data.msg)
                if (cbCodeFail) {
                    cbCodeFail(response.data)
                }
            }
        }).catch((err) => {
            // 单独处理网络异常
            if (cbNetFial) {
                cbNetFial(err)
            }
        })
    },
}