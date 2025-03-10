import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        user: null,
        token: localStorage.getItem("token") || "",
        isAuthenticated: false
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        currentUser: state => state.user
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.isAuthenticated = !!user;
        },
        SET_TOKEN(state, token) {
            state.token = token;
            if (token) {
                localStorage.setItem("token", token);
            } else {
                localStorage.removeItem("token");
            }
        },
        LOGOUT(state) {
            state.user = "",
                state.token = "";
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        }
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post('http://localhost:3000/api/auth/login', credentials);
                const { token, user } = response.data;

                commit("SET_USER", response.data.user);
                commit("SET_TOKEN", response.data.token);

                return true;
            } catch (error) {
                console.error("Error logging in:", error);
                throw error;
            }
        },
        logout({ commit }) {
            commit('LOGOUT');
        }
    },
    modules: {},
});