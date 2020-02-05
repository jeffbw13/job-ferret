import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [resource, setResource] = useState('posts');
  const [searchText, setSearchText] = useState("abcd");

  var onCompanySearch = (e) => {
    e.preventDefault();
    alert('onCompanySearch');
  };

  var CompanySearchForm = () => (
    <form onSubmit={onCompanySearch}>
      <label>Search for company:<br />
      <input type="text" size="50" name="searchText" value={searchText} onChange={e => setSearchText(e.target.value)} />&nbsp;
      </label>
      <button onClick={()=>{onCompanySearch}}>Search</button>
    </form>
    // <button id="find-table-button" className="find-table-button" onClick={this.submitReservation}>
    //   Find a Table
    // </button>
  );

  return (
    <div>
      <div>
      <form onSubmit={onCompanySearch}>
      <label>Search for company:<br />
      <input type="text" size="50" name="searchText" value={searchText} onChange={e => setSearchText(e.target.value)} />&nbsp;
      </label>
      <button onClick={()=>{onCompanySearch}}>Search</button>
    </form>
        {/* <button onClick={()=>{setResource('posts')}}>
          Posts
        </button>
        <button onClick={()=>{setResource('toDos')}}>
          ToDos
        </button> */}
      </div>
      {searchText}
      {resource}
    </div>
  );
};

export default App;