import AuthServices from "../../apis/auth"

const state = {
    id_transportation: 0,
    auth: {
        isAuthenticated: false,
        isAdmin: false
    }
}

const getters = {
    isAuthenticated: state => state.auth.isAuthenticated,
    isAdmin: state => state.auth.isAdmin,
    id_transportation: state => state.id_transportation
}

const actions = {
    async login({ commit }, user) {
        try {
            const data = {
                username: user.username,
                password: user.password
            }
            const response = await AuthServices.login(data)
            if (response.status == 200 && response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('token', JSON.stringify(response.data.token));
                if (response.data.user.role == 0) {
                    commit("ADMIN_LOGIN_SUCCESS")
                }
                else if (response.data.user.role == 1) {
                    commit("SET_ID_TRANSPORTATION", response.data.user.id_transportation)
                    commit("TRANSPORTATION_LOGIN_SUCCESS")
                }
            }
        } catch (error) {
            console.log(error.response)
        }
    },
    async checkLoggedIn({ commit }) {
        try {
            const token = localStorage.getItem('token');
            console.log('token ', token)
            const response = await AuthServices.checkLoggedIn(token)
            console.log('response ', response)
            if (response.status == 200) {
                if (JSON.parse(localStorage.getItem('user')).role == 0) {
                    commit("ADMIN_LOGIN_SUCCESS")
                } else {
                    // commit("SET_ID_TRANSPORTATION", response.data.user.id_transportation)
                    commit("TRANSPORTATION_LOGIN_SUCCESS")
                }
            }
        } catch (error) {
            console.log(error)
        }
    },
    logout({ commit }) {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
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
    LOGOUT(state) {
        state.auth.isAuthenticated = false
    },
    SET_ID_TRANSPORTATION(state, id) {
        state.id_transportation = id
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}