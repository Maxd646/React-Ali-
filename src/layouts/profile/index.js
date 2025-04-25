import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";

// Inline ExpandableText component
const ExpandableText = ({ text, maxLength = 100 }) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > maxLength;
  const displayText = expanded ? text : text.slice(0, maxLength);

  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "none" : 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {displayText}
        {isLong && !expanded && "..."}
      </Typography>
      {isLong && (
        <Button
          size="small"
          onClick={() => setExpanded(!expanded)}
          sx={{ textTransform: "none", mt: 1, padding: 0 }}
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      )}
    </>
  );
};

// ✅ Add PropTypes validation
ExpandableText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

function Dashboard() {
  const navigate = useNavigate();
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/E_commerce/food/")
      .then((res) => {
        setFoodItems(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch food items:", err);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3} px={2} sx={{ bgcolor: "#e0f7fa", minHeight: "100vh" }}>
        <Grid container spacing={4}>
          {foodItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  cursor: "pointer",
                  borderRadius: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
                onClick={() => navigate("/profile")}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={`http://localhost:8000${item.image}`}
                  alt={item.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    {item.title}
                  </Typography>

                  <ExpandableText text={item.description} maxLength={100} />

                  <Typography variant="body1" color="text.primary" mt={1}>
                    ${item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
