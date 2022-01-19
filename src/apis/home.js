import Api from './index'

export default {
    addVehicle(newVehicle){
        return Api().post('addVehicle', newVehicle)
    },
    deleteVehicle(phone){
        return Api().delete('deleteVehicle?phone=' + phone)
    },
    getAllProvince(){
        return Api().get('/getAllProvince')
    },
    getStations(id_province){
        return Api().get('/getStations?id_province=' + id_province)
    },
    getAllVehicle(id_transportation){
        return Api().get('/getAllVehicle?id_transportation=' + id_transportation)
    },
    getAllVehicleType(){
        return Api().get('/getAllVehicleType')
    },
    getTransportationTrips(idTransportation){
        return Api().get('/getTransportationTrips?idTransportation='+ idTransportation)
    },
    getTransportationVehicles(idTransportation){
        return Api().get('/getTransportationVehicles?idTransportation='+ idTransportation)
    }
};