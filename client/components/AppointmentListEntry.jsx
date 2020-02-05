import React from 'react';
import moment from 'moment';

var AppointmentListEntry = ({appointment, onLaundromatSelectClick}) => (
  <div className="appointment-list-entry"
                  onClick={() => {onLaundromatSelectClick(appointment.laundromat_id)}}>

    Laundromat: {appointment.laundromat_id}&nbsp;
    Scheduled for: {moment(appointment.appointment_time).format("MMM Do YYYY h.mm a")}

  </div>
);

export default AppointmentListEntry;
