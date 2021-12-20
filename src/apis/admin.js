import Api from './index'

export default {
    addAdmin(){
        return Api().post('users/addAdmin')
    },
    addTransportation(newTransportation){
        return Api().post('admin/addTransportation', newTransportation)
    },
    deleteTransportation(phone){
        return Api().delete('admin/deleteTransportation?phone=' + phone)
    },
    getNumofUser(){
        return Api().get('admin/getNumofUser')
    },
    getNumofTransportation(){
        return Api().get('admin/getNumofTransportation')
    },
    getTransportations(){
        return Api().get('admin/getAllTransportations')
    }
};