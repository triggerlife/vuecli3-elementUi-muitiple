"use strict";
import cookie from 'vue-cookie';
const tokenName = process.env.VUE_APP_NAME+"_TOKEN";
const tokenValid = process.env.VUE_APP_TOKEN_VALID_SECOND;
const checkToken =  {
    refresh:()=>{
        if(checkToken.getToken()){
            //保活token 每x-1分钟换取一次token
            window.setInterval(()=> {
                // console.log("重启定时刷新token")
                window.axios.post(process.env.VUE_APP_BASE_URL+"/token/refresh-token",{},{
                    headers:{token:checkToken.getToken()}
                }).then(response=>{
                    if(response.status ==200){
                        let token = JSON.parse(response.data).content.token;
                        cookie.set(tokenName,token,{ expires: tokenValid+'m' });
                    }

                });
            },(tokenValid-1)*60*1000)
        }

    },
    globalRefresh:()=>{
        const token = checkToken.getToken();
        if(token){
                // console.log("重置token")
                //防止用户用自刷新时 重置token
                window.axios.post(process.env.VUE_APP_BASE_URL+"/token/refresh-token",{},{
                    headers:{token:token}
                }).then(response=>{
                    if(response.status ==200){
                        let token = JSON.parse(response.data).content.token;
                        checkToken.saveToken(token)
                    }
                });
            }
    },
    tokenName:tokenName,
    getToken:()=>{
        return cookie.get(tokenName)
    },
    saveToken:(token)=>{
        //登陆保存token 并启动刷新定时器
        cookie.set(tokenName,token,{ expires: tokenValid+'m' });
        checkToken.refresh();
    },
    removeToken:()=>{
        cookie.delete(tokenName)
    }
};

export default checkToken;
