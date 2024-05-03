import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const body = JSON.stringify({
        "limit": 10,
        "offset": 0
      });

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };

      try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const data = await response.json();
        setJobs(data.jdList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {jobs.map((job) => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </div>
  );
};

export default JobList;
