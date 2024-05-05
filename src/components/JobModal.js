import React from "react";
import { Modal, Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const JobModal = ({ job, open, handleClose }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: isSmallScreen ? "90%" : "500px",
          margin: "50px auto", // Center horizontally and add top/bottom margin
          outline: "none",
        }}
      >
        <Typography variant="h5" mb={2}>
          {job.companyName}
        </Typography>
        <Typography variant="body1">{job.jobDetailsFromCompany}</Typography>
      </Box>
    </Modal>
  );
};

export default JobModal;
