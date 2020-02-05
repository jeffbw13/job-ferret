import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ScheduleAppointment from './ScheduleAppointment.jsx';
import ReviewList from './ReviewList.jsx';
import ReviewWrite from './ReviewWrite.jsx';

class Laundromat extends React.Component {
  constructor(props) {
    super(props);
    this.userId = props.userId;
    this.laundromatId = props.laundromatId;
    this.userName = props.userName;
    this.state = {
      laundromat: {
        name: 'Third Street Lavanderia'
      },
      reviews: []
		};
    //  laundromat obj hopefully will be passed in via props
    //  until then we'll retrieve via axios
    //  get user info and existing appointments
    this.getLaundromat = this.getLaundromat.bind(this);
    this.onAddReview = this.onAddReview.bind(this);
    this.getLaundromat(this.laundromatId);
  }

  componentWillReceiveProps({laundromatId, userName}) {
    this.getLaundromat(laundromatId);
    this.userName = userName;
  }

  getLaundromat(laundromatId) {
    axios.get(`http://localhost:3000/laundromat/${laundromatId}`)
    .then(res => {
      if (res.data[0] !== undefined) {
        let laundromat = res.data[0];
        this.setState({laundromat});
      }
      //  now get laundromat's reviews!
      axios.get(`http://localhost:3000/review/byLaundromatId/${laundromatId}`)
      .then(res => {
        console.log(res.data);
        if (res.data !== undefined) {
          let reviews = res.data;
          this.setState({reviews});
        }
      });
    });
  }

  onAddReview(review) {
    let reviews = this.state.reviews;
    reviews.push(review);
    this.setState({reviews});
  }

  render() {
    return (
      <div>
        <hr />
        <h3>Laundromat: {this.state.laundromat.name}</h3>
        {this.state.laundromat.description}<br />
        {this.state.laundromat.address}<br />
        {this.state.laundromat.city}, {this.state.laundromat.state} {this.state.laundromat.zip}<br />
        Takes coins? {this.state.laundromat.takesCoins ? "Yes" : "No"}<br />
        Takes Webcard? {this.state.laundromat.takesWebCard ? "Yes" : "No"}<br />
        Has beer? {this.state.laundromat.hasBeer ? "Yes" : "No"}<br />
        <img style={{maxWidth: '500px'}} src={this.state.laundromat.photo1}/>
        <img style={{maxWidth: '500px'}} src={this.state.laundromat.photo2}/>
        {/* <Mapper /> */}
        <ScheduleAppointment userId={this.userId}
                             laundromatId={this.state.laundromat.laundromat_id}
                             onAddAppointment={this.props.onAddAppointment}/>
        <ReviewList reviews={this.state.reviews} />
        <ReviewWrite userId={this.userId}
                     userName={this.userName}
                     laundromat={this.state.laundromat}
                     onAddReview={this.onAddReview.bind(this)}/>
      </div>
    )
  }
}
export default Laundromat;