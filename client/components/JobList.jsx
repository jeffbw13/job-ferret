import React from 'react';
import JobListEntry from './JobListEntry.jsx';

var JobList = ({jobs, handleJobListEntryClick}) => (
  <div className="job-list">
      <h3>Job List</h3>

    {jobs.map(job =>
      <JobListEntry job={job} />
    )}
  </div>
);

export default JobList;