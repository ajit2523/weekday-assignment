import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions, Collapse, CardMedia } from '@mui/material';

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardMedia
        component="img"
        height="140"
        image={job.logoUrl}
        alt={job.companyName}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {job.companyName}
        </Typography>
        <Typography variant="h6" component="div">
          {job.jobRole
            .split(' ')
            .map(word =>
              word.length <= 3 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join(' ')
          }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {job.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.minExp && job.maxExp ? `Experience Required: ${job.minExp} - ${job.maxExp} years` : 'Experience not specified'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {expanded ? job.jobDetailsFromCompany : job.jobDetailsFromCompany.slice(0, 150)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={job.jdLink} target="_blank">
          Apply
        </Button>
        {job.jobDetailsFromCompany.length > 150 && (
          <Button size="small" onClick={handleExpandClick}>
            {expanded ? 'Read less' : 'Read more'}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default JobCard;
