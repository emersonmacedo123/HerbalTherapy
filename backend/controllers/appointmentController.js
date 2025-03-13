const Appointment = require('../models/Appointment');

exports.createAppointment = async(req, res) => {
        try {
            const appointment = new Appointment({
                ...req.body,
                userId: req.body.userId
            });
            await appointment.save();
            res.status(201).json(appointment);

        } catch (error) {
            res.status(400).json({ message: error.message });
        }

    } //create appointment
exports.getUserAppointments = async(req, res) => {
        try {
            const appointments = await Appointment.find({
                userId: req.params.userId, // Usando o ID do usuário da URL
                status: 'agendada'
            }).sort({ dataHora: 1 });

            res.json(appointments);
        } catch (error) {
            console.error('Error fetching appointments:', error);
            res.status(500).json({ message: error.message });
        }
    } //getUsersAppointments

exports.cancelAppointment = async(req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({ message: 'Consulta não encontrada' });
        }

        // Verifica se a consulta pertence ao usuário
        if (appointment.userId.toString() !== req.body.userId) {
            return res.status(403).json({ message: 'Não autorizado' });
        }

        appointment.status = 'cancelada';
        await appointment.save();

        res.json({ message: 'Consulta cancelada com sucesso' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};