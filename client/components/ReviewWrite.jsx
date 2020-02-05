import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ReviewWrite extends React.Component {
  constructor(props) {
    super(props);
    this.userId = props.userId;
    this.userName = props.userName;
    this.laundromat = props.laundromat;
    this.state = {
      stars: [],
      review: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillReceiveProps({laundromat, userName}) {
    this.laundromat = laundromat;
    this.userName = userName;
  }

  onFormSubmit() {
    let review = {
      laundromat_id: this.laundromat.laundromat_id,
      user_id: this.userId,
      user_name: this.userName,
      stars: this.state.stars,
      review: this.state.review
    };
    this.props.onAddReview(review);
    //  add review to restaurant's reviews array
    //  this.reviews.push(review);  // probably not
    /*
    //  add review to api
    axios.post('/review', review)
    .then((response) => {

    }, (error) => {

    });  */
  }

  render() {
    return (
      <div>
        <h3>Write a review of {this.laundromat.name}</h3>
        <form onSubmit={this.onFormSubmit}>
          {/* should be TEXTBOX */}
          <input type="text" size="70" onChange={e => this.setState({review: e.target.value})} />&nbsp;
          <button type="button" onClick={this.onFormSubmit}>Save Review</button>
        </form>
      </div>
    )
  }
}
export default ReviewWrite;