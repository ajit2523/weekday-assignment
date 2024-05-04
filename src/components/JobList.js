import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import { Grid, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import InfiniteScroll from 'react-infinite-scroll-component';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  const fetchJobs = async () => {
    const body = JSON.stringify({
      limit: 10,
      offset: offset
    });

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body
    };

    try {
      const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions);
      const data = await response.json();
      setJobs([...jobs, ...data.jdList]);
      if (data.jdList.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [offset]);

  const loadMore = () => {
    setOffset(offset + 10);
  };

  return (
    <InfiniteScroll
      dataLength={jobs.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more jobs to load</p>}
    >
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item key={job.jdUid} xs={12} sm={6} md={4}>
            <Box display="flex" justifyContent="center" height="100%"> {/* Center content */}
              <JobCard job={job} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default JobList;
