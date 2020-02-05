import React from 'react';
import AppointmentListEntry from './AppointmentListEntry.jsx';

var AppointmentList = ({appointments, onLaundromatSelectClick}) => (
  <div className="appointment-list">
      <h3>Your currently scheduled laundry experiences:</h3>

    {appointments.map(appointment =>
      <AppointmentListEntry
        appointment={appointment}
        onLaundromatSelectClick={onLaundromatSelectClick}/>
    )}
  </div>
);

export default AppointmentList;
