import HomeServices from '../../apis/home'

const state = {
    failed: "",
    trips: [],
    vehicles: [],
    vehicle_type: [],
    provinces: [],
    start_stations: [],
    end_stations: []
}

const getters = {
    failed: state => state.failed,
    trips: state => state.trips,
    vehicles: state => state.vehicles,
    vehicle_type: state => state.vehicle_type,
    provinces: state => state.provinces,
    start_stations: state => state.start_stations,
    end_stations: state => state.end_stations
}

const actions = {
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
    async getTransportationTrips({ commit }, idTransportation) {
        try {
            const response = await HomeServices.getTransportationTrips(idTransportation)
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
}

const mutations = {
    ADD_VEHICLE(state, vehicle) {
        state.vehicles.push(vehicle)
    },
    DELETE_VEHICLE(state, phone) {
        state.vehicles = state.vehicles.filter(vehicle => vehicle.phone !== phone)
    },
    SET_FAILED(state, message) {
        state.failed = message
    },
    SET_ALL_PROVINCE(state, provinces) {
        for (var i = 0; i < provinces.length; i++) {
            state.provinces.push(provinces[i])
        }
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}