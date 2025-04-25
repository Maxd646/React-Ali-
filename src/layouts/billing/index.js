// // // @mui material components
// // import Grid from "@mui/material/Grid";

// // // Material Dashboard 2 React components
// // import MDBox from "components/MDBox";

// // // Material Dashboard 2 React examples
// // import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// // import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// // import MasterCard from "examples/Cards/MasterCard";
// // import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// // // Billing page components
// // import PaymentMethod from "layouts/billing/components/PaymentMethod";
// // import Invoices from "layouts/billing/components/Invoices";
// // import Transactions from "layouts/billing/components/Transactions";

// // function Billing() {
// //   return (
// //     <DashboardLayout>
// //       <DashboardNavbar absolute isMini />
// //       <MDBox mt={8}>
// //         <MDBox mb={3}>
// //           <Grid container spacing={3}>
// //             <Grid item xs={12} lg={8}>
// //               <Grid container spacing={3}>
// //                 <Grid item xs={12} xl={6}>
// //                   <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
// //                 </Grid>
// //                 <Grid item xs={12} md={6} xl={3}>
// //                   <DefaultInfoCard
// //                     icon="account_balance"
// //                     title="salary"
// //                     description="Belong Interactive"
// //                     value="+$2000"
// //                   />
// //                 </Grid>
// //                 <Grid item xs={12} md={6} xl={3}>
// //                   <DefaultInfoCard
// //                     icon="paypal"
// //                     title="paypal"
// //                     description="Freelance Payment"
// //                     value="$455.00"
// //                   />
// //                 </Grid>
// //                 <Grid item xs={12}>
// //                   <PaymentMethod />
// //                 </Grid>
// //               </Grid>
// //             </Grid>
// //             <Grid item xs={12} lg={4}>
// //               <Invoices />
// //             </Grid>
// //           </Grid>
// //         </MDBox>
// //         <MDBox mb={3}>
// //           <Grid container spacing={3}>
// //             <Grid item xs={12} md={7}></Grid>
// //             <Grid item xs={12} md={5}>
// //               <Transactions />
// //             </Grid>
// //           </Grid>
// //         </MDBox>
// //       </MDBox>
// //     </DashboardLayout>
// //   );
// // }

// // export default Billing;
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
//     title: "Electronics",
//     route: "/tables",
//     images: [
//       team1,
//       team2,
//       team3,
//       team9,
//       "https://via.placeholder.com/100?text=E2",
//       team9,
//       "https://via.placeholder.com/100?text=E3",
//       team2,
//       "https://via.placeholder.com/100?text=E3",
//       team8,
//     ],
//   },
//   {
//     title: "Clothing",
//     route: "/billing",
//     images: [
//       team2,
//       team1,
//       team2,
//       team3,
//       "https://via.placeholder.com/100?text=C1",
//       team3,
//       "https://via.placeholder.com/100?text=C3",
//       team4,
//     ],
//   },
//   {
//     title: "Books",
//     route: "/rtl",
//     images: [
//       team2,
//       team1,
//       team2,
//       team3,
//       "https://via.placeholder.com/100?text=B1",
//       "https://via.placeholder.com/100?text=B2",
//       team1,
//     ],
//   },
//   {
//     title: "Furniture",
//     route: "/notifications",
//     images: [
//       team5,
//       team1,
//       team2,
//       team3,
//       "https://via.placeholder.com/100?text=F1",
//       team4,
//       team3,
//       "https://via.placeholder.com/100?text=F4",
//     ],
//   },
//   {
//     title: "Electronics",
//     route: "/profile",
//     images: [
//       team1,
//       team9,
//       team2,
//       team3,
//       "https://via.placeholder.com/100?text=E2",
//       "https://via.placeholder.com/100?text=E3",
//       team2,
//       team8,
//     ],
//   },
//   {
//     title: "Clothing",
//     route: "/profile",
//     images: [
//       team2,
//       team1,
//       team3,
//       team9,
//       "https://via.placeholder.com/100?text=C1",
//       team3,
//       "https://via.placeholder.com/100?text=C3",
//       team4,
//     ],
//   },
//   {
//     title: "Books",
//     route: "/profile",
//     images: [
//       team2,
//       team1,
//       team3,
//       team9,
//       "https://via.placeholder.com/100?text=B1",
//       "https://via.placeholder.com/100?text=B2",
//       team1,
//     ],
//   },
//   {
//     title: "Furniture",
//     route: "/profile",
//     images: [
//       team5,
//       team1,
//       team2,
//       team3,
//       "https://via.placeholder.com/100?text=F1",
//       team4,
//       "https://via.placeholder.com/100?text=F1",
//       team3,
//       "https://via.placeholder.com/100?text=F4",
//       team3,
//     ],
//   },

//   {
//     title: "Electronics",
//     route: "/profile",
//     images: [
//       team1,
//       team9,
//       team2,
//       team3,
//       "https://via.placeholder.com/100?text=E2",
//       "https://via.placeholder.com/100?text=E3",
//       team2,
//       team8,
//     ],
//   },
//   {
//     title: "Clothing",
//     route: "/profile",
//     images: [
//       team2,
//       team1,
//       team3,
//       team9,
//       "https://via.placeholder.com/100?text=C1",
//       team3,
//       "https://via.placeholder.com/100?text=C3",
//       team4,
//     ],
//   },
//   {
//     title: "Books",
//     route: "/profile",
//     images: [
//       team2,
//       team1,
//       team3,
//       team9,
//       "https://via.placeholder.com/100?text=B1",
//       "https://via.placeholder.com/100?text=B2",
//       team1,
//     ],
//   },
//   {
//     title: "Furniture",
//     route: "/profile",
//     images: [
//       team5,
//       team1,
//       team3,
//       team9,
//       "https://via.placeholder.com/100?text=F1",
//       team4,
//       team3,
//       "https://via.placeholder.com/100?text=F4",
//     ],
//   },
//   {
//     title: "Electronics",
//     route: "/profile",
//     images: [
//       team1,
//       team9,
//       team2,
//       team3,
//       "https://via.placeholder.com/100?text=E2",
//       "https://via.placeholder.com/100?text=E3",
//       team2,
//       team8,
//     ],
//   },
//   {
//     title: "Clothing",
//     route: "/profile",
//     images: [
//       team2,
//       team1,
//       team3,
//       team9,
//       "https://via.placeholder.com/100?text=C1",
//       team3,
//       "https://via.placeholder.com/100?text=C3",
//       team4,
//     ],
//   },
//   {
//     title: "Books",
//     route: "/profile",
//     images: [
//       team2,
//       team1,
//       team3,
//       team9,
//       "https://via.placeholder.com/100?text=B1",
//       "https://via.placeholder.com/100?text=B2",
//       team1,
//     ],
//   },
//   {
//     title: "Furniture",
//     route: "/profile",
//     images: [
//       team5,
//       team1,
//       team3,
//       team9,
//       "https://via.placeholder.com/100?text=F1",
//       team4,
//       team3,
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Dashboard() {
  const navigate = useNavigate();
  const [deviceItems, setDeviceItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/E_commerce/device/") // Update this URL if deployed
      .then((res) => {
        setDeviceItems(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch device items:", err);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3} px={2} sx={{ bgcolor: "#e0f7fa", minHeight: "100vh" }}>
        <Grid container spacing={4}>
          {deviceItems.map((item, index) => (
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
                  image={`http://localhost:8000${item.image}`} // Ensure MEDIA files are accessible
                  alt={item.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {item.description}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
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
