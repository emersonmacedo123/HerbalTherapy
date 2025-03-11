import { createStore } from "vuex";
import authService from "@/services/authService";

export default createStore({
    state: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
        isAuthenticated: false,
        isAdmin: false
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.isAuthenticated = !!user;
            state.isAdmin = user ? user.isAdmin : false;
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.removeItem('user');
            }
        },
        SET_TOKEN(state, token) {
            state.token = token;
            if (token) {
                localStorage.setItem('token', token);
            } else {
                localStorage.removeItem('token');
            }
        }
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const { user, token } = await authService.login(credentials);
                commit('SET_USER', user);
                commit('SET_TOKEN', token);
                return true;
            } catch (error) {
                console.error('Login error:', error);
                return false;
            }
        },
        logout({ commit }) {
            commit('SET_USER', null);
            commit('SET_TOKEN', null);
        }
    },
    getters: {
        isAuthenticated: state => !!state.token,
        currentUser: state => state.user,
        isAdmin: state => state.user ? state.user.isAdmin : false
    }
});