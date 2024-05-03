import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import { Grid } from '@mui/material';

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
    <Grid container spacing={3}>
      {jobs.map((job) => (
        <Grid item key={job.jdUid} xs={12} sm={6} md={4}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;
