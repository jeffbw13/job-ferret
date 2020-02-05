import React from 'react';
import moment from 'moment';

var JobListEntry = ({job, handleJobListEntryClick}) => (
  <div className="job-list-entry">
    Description: <span class="bold">{job.description}</span>&nbsp;
    Date: {moment(review.updated_at).format("MMM Do YYYY h.mm a")}<br />
    {review.review}
    <hr />
  </div>
);

export default ReviewListEntry;