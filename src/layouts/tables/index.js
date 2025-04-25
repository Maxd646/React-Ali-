// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
// import MDBox from "components/MDBox";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// // Example images imported (make sure you have them)
// import team1 from "assets/images/cpp1.jpg";
// import team2 from "assets/images/cpp2.jpg";
// import team3 from "assets/images/cpp3.jpg";
// import team4 from "assets/images/cpp4.jpg";
// import team5 from "assets/images/cpp5.jpg";
// import team6 from "assets/images/team-1.jpg";
// import team7 from "assets/images/team-2.jpg";
// import team8 from "assets/images/team-3.jpg";
// import team9 from "assets/images/team-1.jpg";

// const productCategories = [
//   {
//     title: "Furniture",
//     route: "/notifications",
//     images: [
//       team5,
//       "https://via.placeholder.com/100?text=F1",
//       "https://via.placeholder.com/100?text=F4",
//     ],
//   },
//   {
//     title: "Electronics",
//     route: "/profile",
//     images: [
//       team1,
//       "https://via.placeholder.com/100?text=E2",
//       "https://via.placeholder.com/100?text=E3",
//     ],
//   },
//   {
//     title: "Clothing",
//     route: "/profile",
//     images: [
//       team2,
//       "https://via.placeholder.com/100?text=C1",
//       "https://via.placeholder.com/100?text=C3",
//     ],
//   },
//   {
//     title: "Books",
//     route: "/profile",
//     images: [
//       team2,
//       "https://via.placeholder.com/100?text=B1",
//       "https://via.placeholder.com/100?text=B2",
//     ],
//   },
//   {
//     title: "Furniture",
//     route: "/profile",
//     images: [
//       team4,
//       "https://via.placeholder.com/100?text=F1",
//       "https://via.placeholder.com/100?text=F1",
//       "https://via.placeholder.com/100?text=F4",
//     ],
//   },

//   {
//     title: "Electronics",
//     route: "/profile",
//     images: [
//       team1,
//       "https://via.placeholder.com/100?text=E2",
//       "https://via.placeholder.com/100?text=E3",
//     ],
//   },
//   {
//     title: "Clothing",
//     route: "/profile",
//     images: [
//       team2,
//       "https://via.placeholder.com/100?text=C1",
//       "https://via.placeholder.com/100?text=C3",
//     ],
//   },
//   {
//     title: "Books",
//     route: "/profile",
//     images: [
//       team2,
//       "https://via.placeholder.com/100?text=B1",
//       "https://via.placeholder.com/100?text=B2",
//     ],
//   },
//   {
//     title: "Furniture",
//     route: "/profile",
//     images: [
//       team5,
//       "https://via.placeholder.com/100?text=F1",
//       "https://via.placeholder.com/100?text=F4",
//     ],
//   },
//   {
//     title: "Electronics",
//     route: "/profile",
//     images: [
//       team1,
//       "https://via.placeholder.com/100?text=E2",
//       "https://via.placeholder.com/100?text=E3",
//     ],
//   },
//   {
//     title: "Clothing",
//     route: "/profile",
//     images: [
//       team2,
//       "https://via.placeholder.com/100?text=C1",
//       "https://via.placeholder.com/100?text=C3",
//     ],
//   },
//   {
//     title: "Books",
//     route: "/profile",
//     images: [
//       team2,
//       "https://via.placeholder.com/100?text=B1",
//       "https://via.placeholder.com/100?text=B2",
//     ],
//   },
//   {
//     title: "Furniture",
//     route: "/profile",
//     images: [
//       team5,
//       "https://via.placeholder.com/100?text=F1",
//       "https://via.placeholder.com/100?text=F4",
//     ],
//   },
// ];

// function Dashboard() {
//   const navigate = useNavigate();

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox py={3} px={2} sx={{ bgcolor: "#e0f7fa", minHeight: "100vh" }}>
//         <Grid container spacing={4}>
//           {productCategories.map((category, index) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//               <Card
//                 sx={{
//                   cursor: "pointer",
//                   borderRadius: 2,
//                   transition: "transform 0.3s ease",
//                   "&:hover": { transform: "scale(1.03)" },
//                 }}
//                 onClick={() => navigate(category.route)}
//               >
//                 {/* Main big image */}
//                 <CardMedia
//                   component="img"
//                   height="160"
//                   image={category.images[0]}
//                   alt={category.title}
//                   sx={{ objectFit: "cover" }}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold" mb={1}>
//                     {category.title}
//                   </Typography>
//                   {/* 3 small images */}
//                   <Grid container spacing={1}>
//                     {category.images.slice(1, 4).map((img, i) => (
//                       <Grid item xs={4} key={i}>
//                         <img
//                           src={img}
//                           alt={`${category.title} ${i}`}
//                           style={{
//                             width: "100%",
//                             height: "70px",
//                             borderRadius: "8px",
//                             objectFit: "cover",
//                           }}
//                         />
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </MDBox>
//     </DashboardLayout>
//   );
// }

// export default Dashboard;
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
