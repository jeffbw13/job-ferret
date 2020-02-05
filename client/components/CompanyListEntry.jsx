import React from 'react';
import moment from 'moment';

var CompanyListEntry = ({company, onCompanySelectClick}) => (
  <div className="company-list-entry"
                  onClick={() => {onCompanySelectClick(company._id)}}>
    Laundromat: {laundromat.laundromat_id}&nbsp;
                {laundromat.name}&nbsp;
                {laundromat.address},&nbsp;
                {laundromat.city},&nbsp;
                {laundromat.state}&nbsp;
                {laundromat.zip}&nbsp;

  </div>
);

export default CompanyListEntry;
