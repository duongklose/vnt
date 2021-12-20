import Api from './index'

export default {
    addAdmin(){
        return Api().post('users/addAdmin')
    },
    getNumofUser(){
        return Api().get('admin/getNumofUser')
    },
    getNumofTransportation(){
        return Api().get('admin/getNumofTransportation')
    }
};