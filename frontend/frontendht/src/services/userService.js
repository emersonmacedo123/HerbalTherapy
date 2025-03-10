import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export default {
    async getAllUsers() {
        try {
            const response = await axios.get(`${API_URL}/users`);
            return response.data;
        } catch (error) {
            console.error('Error getting users:', error);
            throw error;
        }
    },

    async createUser(userData) {
        try {
            const response = await axios.post(`${API_URL}/users`, userData);
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },

    async updateUser(userData) {
        try {
            const response = await axios.put(`${API_URL}/users/${userData.id}`, userData);
            return response.data;
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    },

    async deleteUser(userId) {
        try {
            const response = await axios.delete(`${API_URL}/users/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
};