const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.post('/', appointmentController.createAppointment);
router.get('/user/:userId', appointmentController.getUserAppointments);
router.patch('/:id/cancel', appointmentController.cancelAppointment);
router.patch('/:id/finish', appointmentController.finishAppointment);
router.get('/finished/user/:userId', appointmentController.finishedAppointments);
module.exports = router;