import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export default {
    async createAppointment(appointmentData) {
        try {
            const response = await axios.post(`${API_URL}/appointments`, appointmentData);
            return response.data;
        } catch (error) {
            console.error('Error creating appointment:', error);
            throw error;
        }
    },
    async getUserAppointments(userId) {
        try {
            const response = await axios.get(`${API_URL}/appointments/user/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error getting user`s appointmens', error);
            throw error;
        }
    },

    async cancelAppointment(appointmentId) {
        try {
            const response = await axios.patch(`${API_URL}/appointments/${appointmentId}/cancel`);
            return response.data;
        } catch (error) {
            console.error('Error canceling appointment:', error);
            throw error;
        }
    }
} //export default