import AdminServices from '../../apis/admin'

const state = {
    info:{
        numOfUser: 0,
        numOfTransportation: 0,
        ticketThisMonth: 0
    },
    transportations:[],
    isAddNew: false, 
    phoneIsRegited: false
}

const getters = {
    numOfUser: state => state.info.numOfUser,
    numOfTransportation: state => state.info.numOfTransportation,
    transportations: state => state.transportations,
    isAddNew: state => state.isAddNew,
    phoneIsRegited: state => state.phoneIsRegited
}

const actions = {
    async addTransportation({commit}, newTransportation){
        try {
            console.log('newTransportation ', newTransportation)
            const response = await AdminServices.addTransportation(newTransportation)
            console.log('response ' , response)
            if(response.status == 200){
                commit("PHONE_IS_REGISTED")
            }else{
                commit("ADD_TRANSPORTATION", newTransportation)
                commit("PHONE_IS_NOT_REGISTED")
            }
        } catch (error) {
            console.log(error.response)
        }
    },
    async getNumOfUser({commit}){
        try {
            const response = await AdminServices.getNumofUser()
            commit("SET_NUM_OF_USER", response.data.numofuser)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getNumOfTransportation({commit}){
        try {
            const response = await AdminServices.getNumofTransportation()
            commit("SET_NUM_OF_TRANSPORTATION", response.data.numOfTransportation)
        } catch (error) {
            console.log(error.response)
        }
    },
    async getTransportations({commit}){
        try {
            const response = await AdminServices.getTransportations()
            commit("SET_TRANSPORTATIONS", response.data.transportation)
        } catch (error) {
            console.log(error.response)
        }
    },
    async deleteTransportation({commit}, phone){
        try {
            const response = await AdminServices.deleteTransportation(phone)
            console.log(response)
            commit("DELETE_TRANSPORTATIONS", phone)
        } catch (error) {
            console.log(error.response)
        }
    }
}

const mutations = {
    ADD_TRANSPORTATION(state, transportation) {
        state.transportations.push(transportation)
    },
    DELETE_TRANSPORTATIONS(state, phone){
        state.transportations = state.transportations.filter(transportation => transportation.phone !== phone)
    },
    SET_NUM_OF_USER(state, numOfUser){
        state.info.numOfUser = numOfUser
    },
    SET_NUM_OF_TRANSPORTATION(state, num){
        state.info.numOfTransportation = num
    },
    SET_TRANSPORTATIONS(state, data){
        state.transportations = data
    },
    TOGGLE_ISADDNEW(state){
        state.isAddNew = !state.isAddNew
    },
    PHONE_IS_REGISTED(state){
        state.phoneIsRegited = true
    },
    PHONE_IS_NOT_REGISTED(state){
        state.phoneIsRegited = false
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}