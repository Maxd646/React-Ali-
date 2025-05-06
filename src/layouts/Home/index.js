import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import team1 from "assets/images/cpp1.jpg";
import team2 from "assets/images/cpp2.jpg";
import team3 from "assets/images/cpp3.jpg";
import team4 from "assets/images/cpp4.jpg";
import team5 from "assets/images/cpp5.jpg";
import team9 from "assets/images/team-1.jpg";
import Footer1 from "examples/Footer2";

const productCategories = [
  {
    title: "Fast food",
    route: "/Academics materials",
    images: [team5, team1, team2, team3],
  },
  {
    title: "Electronics",
    route: "/electronics",
    images: [team1, team9, team2, team3],
  },
  {
    title: "Clothing",
    route: "/clothing",
    images: [team2, team1, team3, team4],
  },
  {
    title: "Acadamics Material",
    route: "/books",
    images: [team2, team1, team3, team9],
  },
  {
    title: "Hygiene Material",
    route: "/notifications",
    images: [team5, team1, team2, team3],
  },
  {
    title: "Finshied website",
    route: "/electronics",
    images: [team1, team9, team2, team3],
  },
  {
    title: "Clothes",
    route: "/clothing",
    images: [team2, team1, team3, team4],
  },
  {
    title: "Drinks",
    route: "/books",
    images: [team2, team1, team3, team9],
  },
  {
    title: "Scholarship Material",
    route: "/notifications",
    images: [team5, team1, team2, team3],
  },
  {
    title: "News",
    route: "/electronics",
    images: [team1, team9, team2, team3],
  },
  {
    title: "Clothing",
    route: "/clothing",
    images: [team2, team1, team3, team4],
  },
  {
    title: "Books",
    route: "/books",
    images: [team2, team1, team3, team9],
  },
  {
    title: "Furniture",
    route: "/notifications",
    images: [team5, team1, team2, team3],
  },
  {
    title: "Electronics",
    route: "/electronics",
    images: [team1, team9, team2, team3],
  },
  {
    title: "Clothing",
    route: "/clothing",
    images: [team2, team1, team3, team4],
  },
  {
    title: "Books",
    route: "/books",
    images: [team2, team1, team3, team9],
  },
  {
    title: "Furniture",
    route: "/notifications",
    images: [team5, team1, team2, team3],
  },
  {
    title: "Keys",
    route: "/electronics",
    images: [team1, team9, team2, team3],
  },
  {
    title: "visson board",
    route: "/clothing",
    images: [team2, team1, team3, team4],
  },
  {
    title: "Entertainment",
    route: "/books",
    images: [team2, team1, team3, team9],
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox py={3} px={2} sx={{ bgcolor: "#e0f7fa", minHeight: "100vh" }}>
          <Grid container spacing={3}>
            {productCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    borderRadius: 2,
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.02)" },
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(category.route)}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                      {category.title}
                    </Typography>
                    <Grid container spacing={1}>
                      {category.images.slice(0, 4).map((img, i) => (
                        <Grid item xs={6} key={i}>
                          <img
                            src={img}
                            alt={`${category.title} ${i}`}
                            style={{
                              width: "100%",
                              height: "120px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                            onClick={() => navigate(category.route)}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </MDBox>
      </DashboardLayout>
      <Footer1 />
    </>
  );
}

export default Home;
