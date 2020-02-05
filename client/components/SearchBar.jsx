import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { searchField: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.searchField);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Search for the laundromat of your fantasies:</label><br />
          <input type="text" size="50" onChange={e => this.setState({searchField: e.target.value})} />&nbsp;
          <button type="button" onClick={this.onFormSubmit}>Search</button>
        </form>
      </div>
    )
  };
}
export default SearchBar;
