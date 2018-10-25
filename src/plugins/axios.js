"use strict";

import Vue from 'vue';
import axios from "axios";
let config = {
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 60 * 1000, // Timeout
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: false, // Check cross-site Access-Control
    ransformRequest: [function (data) {
        // 做任何你想要的数据转换

        return data;
    }],
    transformResponse: [function (data) {
        // 预留后期过滤
        // return typeof data === "string"&&data !=="" ? JSON.parse(data) : null;
        return data
    }],
    validateStatus: function (status) {
        return status >= 200 && status <= 500; // default
    },
};

const _axios = axios.create(config);
_axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
// axios请求拦截处理
_axios.interceptors.response.use(
    response => {
        switch (response.status) {
            case 401:
            case 402:
            case 403:
                break;
            case 404:
                break;
            case 500:
                break
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

Plugin.install = function (Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
        $base_axios: {
            get() {
                config.baseURL = process.env.VUE_APP_BASE_URL
                const base_axios = axios.create(config)
                return base_axios
            }
        }
    });
};
Vue.use(Plugin)

export default _axios;