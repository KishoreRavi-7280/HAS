import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/appointments" component={AppointmentList} />
          <Route path="/book-appointment" component={AppointmentForm} />
          <Route path="/" exact component={AppointmentList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
