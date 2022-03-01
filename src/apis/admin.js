import Api from './index'

export default {
    addAccountTransportation(newAccountTransportation){
        return Api().post('admin/addAccountTransportation', newAccountTransportation)
    },
    addAdmin(){
        return Api().post('users/addAdmin')
    },
    addTransportation(newTransportation){
        return Api().post('admin/addTransportation', newTransportation)
    },
    blockUser(phone){
        return Api().patch('admin/blockUser?phone=' + phone)
    },
    deleteTransportation(phone){
        return Api().delete('admin/deleteTransportation?phone=' + phone)
    },
    deleteUser(phone){
        return Api().delete('admin/deleteUser?phone=' + phone)
    },
    getNumofUser(){
        return Api().get('admin/getNumofUser')
    },
    getNumofTransportation(){
        return Api().get('admin/getNumofTransportation')
    },
    getTransportations(){
        return Api().get('admin/getAllTransportations')
    },
    getUsers(){
        return Api().get('admin/getAllUsers')
    },
    unblockUser(phone){
        return Api().patch('admin/unblockUser?phone=' + phone)
    },
};