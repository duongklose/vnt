import AuthServices from "../../apis/auth"

const state = {
    auth: {
        isAuthenticated: false,
        isAdmin: false
    }
}

const getters = {
    isAuthenticated: state => state.auth.isAuthenticated,
    isAdmin: state => state.auth.isAdmin
}

const actions = {
    async login({ commit }, user) {
        try {
            const data = {
                username: user.username,
                password: user.password
            }
            const response = await AuthServices.login(data)
            console.log('response ', response)
            if(response.status == 200){
                if(response.data.user.role == 0){
                    commit("ADMIN_LOGIN_SUCCESS")
                }
                else if(response.data.user.role == 1){
                    commit("TRANSPORTATION_LOGIN_SUCCESS")
                } 
            }
        } catch (error) {
            console.log(error.response)
        }
    },
    logout({ commit }) {
        commit("LOGOUT")
    }
}

const mutations = {
    TRANSPORTATION_LOGIN_SUCCESS(state) {
        state.auth.isAuthenticated = true
        state.auth.isAdmin = false
    },
    ADMIN_LOGIN_SUCCESS(state) {
        state.auth.isAuthenticated = true
        state.auth.isAdmin = true
    },
    LOGOUT(state){
        state.auth.isAuthenticated = false
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}