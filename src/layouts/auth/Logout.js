import React from "react";
import { Typography, Box } from "@mui/material";

export default function Logout() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "50vh" }}>
      <Typography variant="h5">You have been logged out successfully!</Typography>
    </Box>
  );
}
