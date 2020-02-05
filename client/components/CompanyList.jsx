import React from 'react';
import CompanyListEntry from './CompanyListEntry.jsx';

var CompanyList = ({companies, onCompanySelectClick}) => (
  <div className="company-list">
    <h3>Click on a company to select:</h3>

    {companies.map(company =>
      <CompanyListEntry
        company={company}
        onCompanySelectClick={onCompanySelectClick}/>
    )}
    <hr />
  </div>
);

export default CompanyList;