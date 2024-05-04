import React from "react";
import { Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import person1Image from "../images/p1.jpg";
import person2Image from "../images/p2.jpg";

const ReferralButton = ({ jdLink }) => {
  return (
    <Button
      href={jdLink}
      variant="contained"
      fullWidth
      sx={{ backgroundColor: "#4943da", fontFamily:"Poppins", fontSize:'12px', alignItems:'center', justifyContent:'center'}}
    >
      <Stack direction="row" spacing={1}>
        <Avatar alt="person1" src={person1Image} sx={{filter: 'blur(5px)', width: 24, height: 24, margin:1}} />
        <Avatar alt="person2" src={person2Image} sx={{filter: 'blur(5px)', width: 24, height: 24, margin:1}} />
      </Stack>
      <Typography sx={{ color: "#fff", fontSize:'13px', margin:1, mt:1, ml:2 }}>Unlock refferal asks</Typography>
      
    </Button>
  );
};

export default ReferralButton;
