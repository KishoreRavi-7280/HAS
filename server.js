const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hospital', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Appointment model
const Appointment = mongoose.model('Appointment', new mongoose.Schema({
  patientName: String,
  appointmentDate: String,
  doctorName: String,
}));

// API routes
app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(400).send('Error retrieving appointments.');
  }
});

app.post('/api/appointments', async (req, res) => {
  const { patientName, appointmentDate, doctorName } = req.body;
  const appointment = new Appointment({ patientName, appointmentDate, doctorName });
  try {
    await appointment.save();
    res.status(201).send('Appointment booked!');
  } catch (err) {
    res.status(400).send('Error booking appointment.');
  }
});

// Server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
