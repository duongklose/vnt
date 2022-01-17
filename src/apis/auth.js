import Api from './index'

export default {
    login(data){
        return Api().post('users/login', data)
    },
    addAdmin(){
        return Api().post('users/addAdmin')
    },
    checkLoggedIn(access_token){
        return Api().get('users/checkLoggedIn', {headers: {token: access_token}})
    }
};