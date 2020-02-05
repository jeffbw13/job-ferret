import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';

class ScheduleAppointment extends React.Component {
  constructor(props) {
    super(props);
    //  don't really need this stuff here AND in state but something not working
    //this.props = props;
    this.userId = props.userId;
    this.laundromatId = props.laundromatId;
    this.state = {
      userId: props.userId,
      laundromatId: props.laundromatId,
      bookDate: new Date(),
      time: this.createCurrentTime()
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createCurrentTime() {
    // set the nearest booking time to now
    let d = new Date();
    let hrs = d.getHours();
    let mins = d.getMinutes();
    if (mins > 30) {
      hrs++;
      var amins = '00';
    } else {
      amins = '30';
    }
    let ap = (hrs > 11) ? ' PM' : ' AM';
    hrs = (hrs > 12) ? hrs - 12 : hrs;
    let nxTm = hrs + ":" + amins + ap;
    return nxTm;
  }

  createTimeOptions() {
    var timeOptions = [];
    var amPm = 'AM';
    for (var i = 8; i < 24; i++) {
      if (i === 12) {
        amPm = 'PM';
      }
      var j = i;
      if (i > 12) {
        j = i - 12;
      }
      var time = j + ':00 ' + amPm;
      timeOptions.push(time);
      var time = j + ':30 ' + amPm;
      timeOptions.push(time);
    }
    return timeOptions;
  }

  handleDateChange(date) {
    this.setState({bookDate: date});
  }

  handleTimeChange(event) {
    this.setState({time: event.target.value});
  }

  handleSubmit() {
    //  two things: post to api and add to appointments in state
    //  question: will addint to appointments here also add to state in App?
    //  no, need callback to pass it up to app
    let appointment = {
      laundromat_id: this.props.laundromatId,
      user_id: this.userId,
      user_name: '???',
      appointment_time: this.state.bookDate,
      reminder: false,
      fulfilled: false,
    };
    //  plug time into bookDate
    var arr = this.state.time.split(':');
    var hours = parseInt(arr[0]);
    if (arr[1].substring(3, 5) === 'PM') {
      hours += 12;
    }
    appointment.appointment_time.setHours(hours);
    appointment.appointment_time.setMinutes(arr[1].substring(0,2));
    appointment.appointment_time.setSeconds(0);
    //console.log("appointment: ", appointment);
    this.props.onAddAppointment(appointment);

    // axios.post('http://localhost:3000/appointment', appointment)
    // .then((response) => {
    //   console.log('added appointment');
    //   this.props.onAddAppointment(appointment);

    // }, (error) => {
    //   console.log('error adding appointment', error);
    // });

  }

  render() {
    const to = this.createTimeOptions();
    return (
      <div>
        <h3>Schedule this laundry experience:</h3>
        <DatePicker
          selected={this.state.bookDate}
          onChange={this.handleDateChange}
          placeholderText="Today"
        />
        <select value={this.state.time} onChange={this.handleTimeChange}>
        <option>{this.state.time}</option>
          {
            to.map(time =>
            <option key={time} value={time}>{time}</option>
            )
          }
        </select>&nbsp;
        <button type="button" onClick={this.handleSubmit}>Add to schedule</button>
      </div>
    )
  }
}
export default ScheduleAppointment;