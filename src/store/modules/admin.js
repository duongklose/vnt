import AdminServices from '../../apis/admin'
// import HomeServices from '../../apis/home'

const state = {
    info:{
        numOfUser: 0,
        numOfTransportation: 0,
        ticketThisMonth: 0
    },
    users:[],
    transportations:[],
    isAddNew: false, 
    phoneIsRegited: false,
    usernameISRegisted: false,
    addAccountSuccess: false,
    idChosenTransportation: 0
}

const getters = {
    addAccountSuccess: state => state.addAccountSuccess,
    blocked: state => state.blocked,
    numOfUser: state => state.info.numOfUser,
    numOfTransportation: state => state.info.numOfTransportation,
    transportations: state => state.transportations,
    idChosenTransportation: state => state.idChosenTransportation,
    isAddNew: state => state.isAddNew,
    phoneIsRegited: state => state.phoneIsRegited,
    usernameISRegisted: state => state.usernameISRegisted,
    users: state => state.users
}

const actions = {
    async addAccountTransportation({commit}, newAccountTransportation){
        try {
            console.log('newAccountTransportation ', newAccountTransportation)
            const response = await AdminServices.addAccountTransportation(newAccountTransportation)
            console.log('response ' , response)
            if(response.status == 200){
                commit("USERNAME_IS_REGISTED")
            }else if(response.status == 201){
                commit("ADD_ACCOUNT_SUCCESS")
            }
        } catch (error) {
            console.log(error.response)
        }
    },
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
    async blockUser({commit}, phone){
        try {
            const response = await AdminServices.blockUser(phone)
            console.log(response)
            commit("DO_NOTHING")
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
    },
    async deleteUser({commit}, phone){
        try {
            const response = await AdminServices.deleteUser(phone)
            console.log(response)
            commit("DELETE_USERS", phone)
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
    async getUsers({commit}){
        try {
            const response = await AdminServices.getUsers()
            commit("SET_USERS", response.data.users)
        } catch (error) {
            console.log(error.response)
        }
    },
    async unblockUser({commit}, phone){
        try {
            const response = await AdminServices.unblockUser(phone)
            console.log(response)
            commit("DO_NOTHING")
        } catch (error) {
            console.log(error.response)
        }
    },

}

const mutations = {
    ADD_ACCOUNT_SUCCESS(state) {
        state.addAccountSuccess = true
        state.usernameISRegisted = false
    },
    ADD_TRANSPORTATION(state, transportation) {
        state.transportations.push(transportation)
    },
    DELETE_TRANSPORTATIONS(state, phone){
        state.transportations = state.transportations.filter(transportation => transportation.phone !== phone)
    },
    DELETE_USERS(state, phone){
        state.users = state.users.filter(user => user.phone !== phone)
    },
    DO_NOTHING(){
        
    },
    SET_ID_CHOSEN_TRANSPORTATION(state, id){
        state.idChosenTransportation = id
    },
    SET_NO_ERR(){
        state.usernameISRegisted = false
        state.addAccountSuccess = false
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
    SET_USERS(state, data){
        state.users = data
    },
    TOGGLE_ISADDNEW(state){
        state.isAddNew = !state.isAddNew
    },
    PHONE_IS_REGISTED(state){
        state.phoneIsRegited = true
    },
    PHONE_IS_NOT_REGISTED(state){
        state.phoneIsRegited = false
    },
    USERNAME_IS_REGISTED(state) {
        state.usernameISRegisted = true
        state.addAccountSuccess = false
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}