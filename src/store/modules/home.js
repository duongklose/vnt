import HomeServices from '../../apis/home'

const state = {
    failed: "",
    vehicles: [],
    vehicle_type: []
}

const getters = {
    vehicles: state => state.vehicles,
    failed: state => state.failed,
    vehicle_type: state => state.vehicle_type
}

const actions = {
    async addVehicle({commit}, newVehicle) {
        try {
            const response = await HomeServices.addVehicle(newVehicle)
            console.log('response ' , response)
            if(response.status == 200){
                commit("SET_FAILED", response.data.error.message)
            }else{
                commit("ADD_VEHICLE", newVehicle)
                commit("SET_FAILED", '')
            }
        } catch (error) {
            console.log(error.response)
        }
    },
    async deleteVehicles({commit}, phone){
        try {
            const response = await HomeServices.deleteVehicle(phone)
            console.log(response)
            commit("DELETE_VEHICLE", phone)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getAllVehicleType({commit}) {
        try {
            const response = await HomeServices.getAllVehicleType()
            commit("SET_ALL_VEHICLE_TYPE", response.data.vehicle_type)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getTransportationVehicles({commit}, idTransportation) {
        try {
            const response = await HomeServices.getTransportationVehicles(idTransportation)
            console.log('response ' , response.data.vehicles)
            commit("SET_VEHICLES", response.data.vehicles)
        } catch (error) {
            console.log(error.response)
        }
    },
}

const mutations = {
    ADD_VEHICLE(state, vehicle){
        state.vehicles.push(vehicle)
    },
    DELETE_VEHICLE(state, phone){
        state.vehicles = state.vehicles.filter(vehicle => vehicle.phone !== phone)
    },
    SET_FAILED(state, message){
        state.failed = message
    },
    SET_ALL_VEHICLE_TYPE(state, types){
        for(var i=0; i<types.length ; i++){
            state.vehicle_type.push(types[i])
            console.log('res ', state.vehicle_type)
        }
    },
    SET_VEHICLES(state, data){
        state.vehicles = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}