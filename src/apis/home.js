import Api from './index'

export default {
    addVehicle(newVehicle){
        return Api().post('addVehicle', newVehicle)
    },
    deleteVehicle(phone){
        return Api().delete('deleteVehicle?phone=' + phone)
    },
    getAllVehicleType(){
        return Api().get('/getAllVehicleType')
    },
    getTransportationVehicles(idTransportation){
        return Api().get('/getTransportationVehicles?idTransportation='+ idTransportation)
    }
};