import HomeServices from '../../apis/home'

const state = {
    failed: "",
    trip: {},
    trips: [],
    done_trips: [],
    vehicles: [],
    vehicle_type: [],
    provinces: [],
    start_stations: [],
    end_stations: [],
    reviews: [],
    transportation: {},
    list_merge_trip: [],
}

const getters = {
    failed: state => state.failed,
    trip: state => state.trip,
    trips: state => state.trips,
    done_trips: state => state.done_trips,
    vehicles: state => state.vehicles,
    vehicle_type: state => state.vehicle_type,
    provinces: state => state.provinces,
    start_stations: state => state.start_stations,
    end_stations: state => state.end_stations,
    reviews: state => state.reviews,
    transportation: state => state.transportation,
    list_merge_trip: state => state.list_merge_trip,
}

const actions = {
    async addTrip({ commit }, newTrip) {
        try {
            const response = await HomeServices.addTrip(newTrip)
            console.log('response ', response)
            if (response.status == 200) {
                commit("SET_FAILED", response.data.error.message)
            } else {
                commit("ADD_TRIP", newTrip)
            }
        } catch (error) {
            console.log(error.response)
        }
    },
    async addVehicle({ commit }, newVehicle) {
        try {
            const response = await HomeServices.addVehicle(newVehicle)
            console.log('response ', response)
            if (response.status == 200) {
                commit("SET_FAILED", response.data.error.message)
            } else {
                commit("ADD_VEHICLE", newVehicle)
                commit("SET_FAILED", '')
            }
        } catch (error) {
            console.log(error.response)
        }
    },
    async deleteTransportationComment({ commit }, id) {
        try {
            await HomeServices.deleteTransportationComment(id);
            commit("UPDATE_REVIEW_DELETE", id)
        } catch (error) {
            console.log(error.response);
        }
    },
    async deleteVehicles({ commit }, phone) {
        try {
            const response = await HomeServices.deleteVehicle(phone)
            console.log(response)
            commit("DELETE_VEHICLE", phone)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getAllProvince({ commit }) {
        try {
            const response = await HomeServices.getAllProvince()
            console.log("provinces", response.data)
            commit("SET_ALL_PROVINCE", response.data.provinces)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getAllVehicle({ commit }, id_transportation) {
        try {
            const response = await HomeServices.getAllVehicle(id_transportation)
            commit("SET_ALL_VEHICLE", response.data.vehicles)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getAllVehicleType({ commit }) {
        try {
            const response = await HomeServices.getAllVehicleType()
            commit("SET_ALL_VEHICLE_TYPE", response.data.vehicle_type)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getDoneTrips({ commit }, idTransportation) {
        try {
            const response = await HomeServices.getDoneTrips(idTransportation)
            console.log('response ', response.data.trips)
            commit("SET_DONE_TRIPS", response.data.trips)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getEndStations({ commit }, id_province) {
        try {
            const response = await HomeServices.getStations(id_province)
            commit("SET_END_STATIONS", response.data.stations)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getStartStations({ commit }, id_province) {
        try {
            const response = await HomeServices.getStations(id_province)
            console.log("stations", response)
            commit("SET_START_STATIONS", response.data.stations)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getReviews({ commit }, id_transportation) {
        try {
            const response = await HomeServices.getReviews(id_transportation)
            console.log("ress", response)
            commit("SET_REVIEWS", response.data.reviews)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getTripByID({ commit }, idTrip) {
        try {
            const response = await HomeServices.getTripByID(idTrip)
            console.log('response ', response.data.trip)
            commit("SET_TRIP", response.data.trip)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getTrips({ commit }, idTransportation) {
        try {
            const response = await HomeServices.getTrips(idTransportation)
            console.log('response ', response.data.trips)
            commit("SET_TRIPS", response.data.trips)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getTransportationVehicles({ commit }, idTransportation) {
        try {
            const response = await HomeServices.getTransportationVehicles(idTransportation)
            commit("SET_VEHICLES", response.data.vehicles)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getTransportation({ commit }, id_transportation) {
        try {
            const response = await HomeServices.getTransportation(id_transportation)
            commit("SET_TRANSPORTATION", response.data.transportation)
        } catch (error) {
            console.log(error.response)
        }
    },
    async mergeTrip() {
        try {
            var myJSON = JSON.stringify(state.list_merge_trip);
            const response = await HomeServices.mergeTrip(myJSON)
            console.log("res", response)
        } catch (error) {
            console.log(error.response)
        }
    },
    async returnComment({ commit }, comment) {
        if (comment.comment == "") {
            return;
        }
        try {
            const response = await HomeServices.returnComment(comment);
            commit("UPDATE_REVIEW", comment)
            console.log(response);
        } catch (error) {
            console.log(error.response);
        }
    },
    async stopTrip({ commit }, idTrip) {
        try {
            var notification = {
                "id_user_from": JSON.parse(localStorage.getItem('user')).id_transportation,
                "title": "Hoãn chuyến",
                "content": "Nhà xe đã hoãn chuyến đi này. Để biết thêm thông tin chi tiết vui lòng liên hệ tới số điện thoại chính của nhà xe."
            }
            const response = await HomeServices.stopTrip(idTrip, notification)
            console.log(response)
            commit("STOP_TRIP", idTrip)
        } catch (error) {
            console.log(error.response)
        }
    },
}

const mutations = {
    ADD_TRIP(state, trip) {
        state.trips.push(trip)
    },
    ADD_MERGE_TRIP(state, id){
        state.list_merge_trip.push(id)
    },
    ADD_VEHICLE(state, vehicle) {
        state.vehicles.push(vehicle)
    },
    CLEAR_LIST_MERGE_TRIP(){
        state.list_merge_trip.length = 0
    },
    DELETE_VEHICLE(state, phone) {
        state.vehicles = state.vehicles.filter(vehicle => vehicle.phone !== phone)
    },
    REMOVE_MERGE_TRIP(state, id){
        for( var i = 0; i < state.list_merge_trip.length; i++){ 
            if ( state.list_merge_trip[i] === id) { 
                state.list_merge_trip.splice(i, 1)
                break
            }
        }
        console.log("list", state.list_merge_trip)
    },
    SET_FAILED(state, message) {
        state.failed = message
    },
    SET_ALL_PROVINCE(state, provinces) {
        for (var i = 0; i < provinces.length; i++) {
            state.provinces.push(provinces[i])
        }
    },
    SET_ALL_VEHICLE(state, vehicles) {
        for (var i = 0; i < vehicles.length; i++) {
            state.vehicles.push(vehicles[i])
        }
    },
    SET_ALL_VEHICLE_TYPE(state, types) {
        for (var i = 0; i < types.length; i++) {
            state.vehicle_type.push(types[i])
        }
    },
    SET_DONE_TRIPS(state, data) {
        //xu ly dinh dang ngay thang
        for (var i = 0; i < data.length; i++) {
            var time = data[i].start_time.split(/[-T:.]/)
            data[i].start_time = time[3] + ":" + time[4] + " " + time[2] + "/" + time[1] + "/" + time[0];
            time = data[i].end_time.split(/[-T:.]/)
            data[i].end_time = time[3] + ":" + time[4] + " " + time[2] + "/" + time[1] + "/" + time[0];
        }
        state.done_trips = data
    },

    SET_END_STATIONS(state, stations) {
        state.end_stations.length = 0
        for (var i = 0; i < stations.length; i++) {
            state.end_stations.push(stations[i])
        }
        console.log("end station", state.end_stations)
    },

    SET_START_STATIONS(state, stations) {
        state.start_stations.length = 0
        for (var i = 0; i < stations.length; i++) {
            state.start_stations.push(stations[i])
        }
    },

    SET_REVIEWS(state, reviews) {
        state.reviews.length = 0
        for (var i = 0; i < reviews.length; i++) {
            state.reviews.push(reviews[i])
        }
    },

    UPDATE_REVIEW(state, comment) {
        for (var i = 0; i < state.reviews.length; i++) {
            if (state.reviews[i].id == comment.id) {
                state.reviews[i].return_comment = comment.comment
                break
            }
        }
    },

    UPDATE_REVIEW_DELETE(state, id) {
        for (var i = 0; i < state.reviews.length; i++) {
            if (state.reviews[i].id == id) {
                state.reviews[i].return_comment = ''
                break
            }
        }
    },

    SET_TRANSPORTATION(state, data) {
        state.transportation = data[0]
        console.log("transportation", state.transportation)
    },
    SET_TRIP(state, data) {
        //xu ly dinh dang ngay thang
        for (var i = 0; i < data.length; i++) {
            var time = data[i].start_time.split(/[-T:.]/)
            data[i].start_time = time[3] + ":" + time[4] + " " + time[2] + "/" + time[1] + "/" + time[0];
            time = data[i].end_time.split(/[-T:.]/)
            data[i].end_time = time[3] + ":" + time[4] + " " + time[2] + "/" + time[1] + "/" + time[0];
        }
        state.trip = data[0]
        console.log("trip", state.trip)
    },
    SET_TRIPS(state, data) {
        //xu ly dinh dang ngay thang
        for (var i = 0; i < data.length; i++) {
            var time = data[i].start_time.split(/[-T:.]/)
            data[i].start_time = time[3] + ":" + time[4] + " " + time[2] + "/" + time[1] + "/" + time[0];
            time = data[i].end_time.split(/[-T:.]/)
            data[i].end_time = time[3] + ":" + time[4] + " " + time[2] + "/" + time[1] + "/" + time[0];
        }
        state.trips = data
    },
    SET_VEHICLES(state, data) {
        state.vehicles = data
    },
    STOP_TRIP(state, id) {
        state.trips = state.trips.filter(trip => trip.id !== id)
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}