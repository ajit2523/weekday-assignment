import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Collapse,
  CardMedia,
} from "@mui/material";
import "./JobCard.css";
import ApplyButton from "./ApplyButton";
import ReferralButton from "./ReferralButton";
import Stack from "@mui/material/Stack";

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ display: "flex", flexDirection: "column", maxWidth: 300, m: 2, fontFamily:'Poppins', textAlign:'left'}}
    >
      <div style={{ display: "flex", alignItems: "center", padding: "1rem" }}>
        <CardMedia
          className="logo"
          component="img"
          height="40"
          image={job.logoUrl}
          alt={job.companyName}
        />
        <div style={{ marginLeft: "1rem", textAlign: "left" }}>
          <Typography variant="subtitle1" sx={{color:'#898989'}}>{job.companyName}</Typography>
          <Typography variant="h6">
            {job.jobRole
              .split(" ")
              .map((word) =>
                word.length <= 3
                  ? word.toUpperCase()
                  : word.charAt(0).toUpperCase() + word.slice(1)
              )
              .join(" ")}
          </Typography>
          <Typography variant="subtitle2" color="text.primary" sx={{fontWeight:'bold'}}>
            Location: {job.location}
          </Typography>
        </div>
      </div>
      <CardContent sx={{alignItems:'left'}}>
        
        <Typography variant="body2" color="text.secondary">
          Estimated Salary: ₹{job.minJdSalary} - ₹{job.maxJdSalary} LPA
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {expanded ? job.jobDetailsFromCompany : job.jobDetailsFromCompany.slice(0, 150)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Minimum Experience: {job.minExp} years
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="column" spacing={2}>
        <ApplyButton jdLink={job.jdLink} />
        <ReferralButton jdLink={job.jdLink} />
        </Stack>
        {/* {job.jobDetailsFromCompany.length > 150 && (
          <Button size="small" onClick={handleExpandClick}>
            {expanded ? "Read less" : "Read more"}
          </Button>
        )} */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{job.jobDetailsFromCompany}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default JobCard;
