const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        dataHora: {
            type: Date,
            required: true
        },
        local: {
            type: String,
            required: true
        },
        especialidade: {
            type: String,
            required: true
        },
        duracao: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['agendada', 'concluida', 'cancelada'],
            default: 'agendada'
        }
    }, {
        timestamps: true
    }) // appointmentSchemaa

module.exports = mongoose.model('Appointment', appointmentSchema);