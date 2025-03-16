import axios from 'axios';

// const API_URL = 'http://localhost:3000/api';
const API_URL = 'https://herbaltherapy.onrender.com/api';

export default {
    async login(credentials) {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, credentials);
            return response.data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }
};