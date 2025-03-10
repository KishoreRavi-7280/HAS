import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await axios.get('http://localhost:5000/api/appointments');
      setAppointments(res.data);
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h1>Appointments List</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            {appointment.patientName} - {appointment.appointmentDate} - {appointment.doctorName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
