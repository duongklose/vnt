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
    endTrip(idTrip){
        return Api().post('/endTrip?idTrip='+ idTrip)
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
    getTransportation(idTransportation){
        return Api().get('/getTransportation?idTransportation='+ idTransportation)
    },
    getTransportationVehicles(idTransportation){
        return Api().get('/getTransportationVehicles?idTransportation='+ idTransportation)
    },
    getTripByID(idTrip){
        return Api().get('/getTripByID?idTrip='+ idTrip)
    },
    getTrips(idTransportation){
        return Api().get('/getTrips?idTransportation='+ idTransportation)
    },
    mergeTrip(list_merge_trip){
        console.log(list_merge_trip)
        return Api().post('/mergeTrip', {list: JSON.stringify(list_merge_trip)})
        // var test = {id: 1}
        // console.log("test", test)
        // return Api().post('/mergeTrip', test)
    },

    returnComment(comment){
        return Api().post('/returnComment', comment)
    },
    startTrip(idTrip){
        return Api().post('/startTrip?idTrip='+ idTrip)
    },
    stopTrip(idTrip, notification){
        return Api().post('/stopTrip?idTrip='+ idTrip, notification)
    },
    uploadFile(data){
        console.log(data)
        // return Api().post('/uploadFile', data)
    },
};