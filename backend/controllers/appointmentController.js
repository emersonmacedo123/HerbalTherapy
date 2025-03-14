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
            const isAdmin = req.query.isAdmin === 'true';
            let query = { status: 'agendada' };

            // Se não for admin, filtra apenas as consultas do usuário
            if (!isAdmin) {
                query.userId = req.params.userId;
            }

            const appointments = await Appointment.find(query)
                .sort({ dataHora: 1 })
                .populate('userId', 'fullName email'); // Adiciona informações do usuário

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

            // Se for admin, permite cancelar qualquer consulta
            // Se não for admin, verifica se a consulta pertence ao usuário
            if (!req.body.isAdmin && appointment.userId.toString() !== req.body.userId) {
                return res.status(403).json({ message: 'Não autorizado' });
            }

            appointment.status = 'cancelada';
            await appointment.save();

            res.json({ message: 'Consulta cancelada com sucesso' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    exports.finishAppointment = async(req, res) => {
        try {
            const appointment = await Appointment.findById(req.params.id);

            if (!appointment) {
                return res.status(404).json({ message: 'Consulta não encontrada' });
            }

            // Se for admin, permite finalizar qualquer consulta
            // Se não for admin, verifica se a consulta pertence ao usuário
            if (!req.body.isAdmin && appointment.userId.toString() !== req.body.userId) {
                return res.status(403).json({ message: 'Não autorizado' });
            }

            appointment.status = 'concluida';
            await appointment.save();

            res.json({ message: 'Consulta concluida com sucesso' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }, // cancelAppointment;
    exports.finishedAppointments = async(req, res) => {
        try {
            const isAdmin = req.query.isAdmin === 'true';
            let query = { status: 'concluida' };

            // Se não for admin, filtra apenas as consultas do usuário
            if (!isAdmin) {
                query.userId = req.params.userId;
            }

            const appointments = await Appointment.find(query)
                .sort({ dataHora: -1 })
                .populate('userId', 'fullName email');

            res.json(appointments);
        } catch (error) {
            console.error('Error fetching completed appointments:', error);
            res.status(500).json({ message: error.message });
        }
    } // finishedAppointments