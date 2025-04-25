import React from "react";
import { Box, Paper } from "@mui/material";
import PropTypes from "prop-types";

const PageLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        padding: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 420,
          padding: 4,
          borderRadius: 3,
          border: "1px solid #d0d0d0",
          backgroundColor: "#fff",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
