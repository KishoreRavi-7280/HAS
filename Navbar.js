
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/appointments">View Appointments</Link>
        </li>
        <li>
          <Link to="/book-appointment">Book Appointment</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
