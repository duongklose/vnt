import Api from './index'

export default {
    login(data){
        return Api().post('user/login', data)
    },
    addAdmin(){
        return Api().post('user/addAdmin')
    },
    checkLoggedIn(access_token){
        return Api().get('user/checkLoggedIn', {headers: {token: access_token}})
    }
};