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
    async getUserAppointments(userId, isAdmin = false) {
        try {
            const response = await axios.get(`${API_URL}/appointments/user/${userId}?isAdmin=${isAdmin}`);
            return response.data;
        } catch (error) {
            console.error('Error getting user appointments:', error);
            throw error;
        }
    },

    async cancelAppointment(appointmentId, userId, isAdmin) {
        try {
            const response = await axios.patch(`${API_URL}/appointments/${appointmentId}/cancel`, {
                userId,
                isAdmin
            });
            return response.data;
        } catch (error) {
            console.error('Error canceling appointment:', error);
            throw error;
        }
    }, //cancelAppointment

    async finishAppointment(appointmentId, userId, isAdmin) {
        try {
            const response = await axios.patch(`${API_URL}/appointments/${appointmentId}/finish`, {
                userId,
                isAdmin
            });
            return response.data;

        } catch (error) {
            console.error('Erro ao concluir consulta:', error);
            throw error;
        }
    }, // finishAppointment
    async getConsultasConcluidas(userId, isAdmin) {
        try {
            const response = await axios.get(`${API_URL}/appointments/finished/user/${userId}?isAdmin=${isAdmin}`);
            return response.data;
        } catch (error) {
            console.error('Error getting finished appointments:', error);
            throw error;
        }

    }

} //export default