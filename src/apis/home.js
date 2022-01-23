import Api from './index'

export default {
    addTrip(newTrip){
        console.log("newtrip", newTrip)
        return Api().post('addTrip', newTrip)
    },
    addVehicle(newVehicle){
        return Api().post('addVehicle', newVehicle)
    },
    deleteTransportationComment(id){
        return Api().post('deleteTransportationComment?id=' + id)
    },
    deleteVehicle(phone){
        return Api().delete('deleteVehicle?phone=' + phone)
    },
    getAllProvince(){
        return Api().get('/getAllProvince')
    },
    getAllVehicle(id_transportation){
        return Api().get('/getAllVehicle?id_transportation=' + id_transportation)
    },
    getAllVehicleType(){
        return Api().get('/getAllVehicleType')
    },
    getDoneTrips(idTransportation){
        return Api().get('/getDoneTrips?idTransportation='+ idTransportation)
    },
    getStations(id_province){
        return Api().get('/getStations?id_province=' + id_province)
    },
    getReviews(idTransportation){
        return Api().get('/getReviews?idTransportation=' + idTransportation)
    },
    getTripByID(idTrip){
        return Api().get('/getTripByID?idTrip='+ idTrip)
    },
    getTrips(idTransportation){
        return Api().get('/getTrips?idTransportation='+ idTransportation)
    },
    getTransportationVehicles(idTransportation){
        return Api().get('/getTransportationVehicles?idTransportation='+ idTransportation)
    },
    getTransportation(idTransportation){
        return Api().get('/getTransportation?idTransportation='+ idTransportation)
    },
    returnComment(comment){
        return Api().post('/returnComment', comment)
    },
    stopTrip(idTrip, notification){
        return Api().post('/stopTrip?idTrip='+ idTrip, notification)
    },
    uploadFile(data){
        console.log(data)
        // return Api().post('/uploadFile', data)
    },
};