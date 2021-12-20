import AdminServices from '../../apis/admin'

const state = {
    info:{
        numOfUser: 0,
        numOfTransportation: 0,
        ticketThisMonth: 0
    }
}

const getters = {
    numOfUser: state => state.info.numOfUser,
    numOfTransportation: state => state.info.numOfTransportation
}

const actions = {
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
    }
}

const mutations = {
    SET_NUM_OF_USER(state, numOfUser){
        state.info.numOfUser = numOfUser
    },
    SET_NUM_OF_TRANSPORTATION(state, num){
        state.info.numOfTransportation = num
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}