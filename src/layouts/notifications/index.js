import React, { useState } from "react";
import { Box, Typography, IconButton, Link, Stack } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import cpp1 from "assets/images/cpp1.jpg";
import cpp2 from "assets/images/cpp2.jpg";
import cpp3 from "assets/images/cpp3.jpg";
import cpp4 from "assets/images/cpp4.jpg";
import Footer2 from "examples/Footer2";

const featuredCompanies = [
  {
    name: "Brie Freshman",
    image: cpp1,
    link: "https://www.frontier.com/",
    Users: 8900000,
  },
  {
    name: "Brie Intrance",
    image: cpp2,
    link: "https://plan-international.org/",
    Users: 10000000,
  },
  {
    name: "Brie Scholarship",
    image: cpp3,
    link: "https://www.care.org/",
    Users: 594589,
  },
  {
    name: "Brie News",
    image: cpp4,
    link: "https://maccfa.com/",
    Users: 69900,
  },
];

export default function FeaturedCompaniesCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = featuredCompanies.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : featuredCompanies.length - 3));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 3 < featuredCompanies.length ? prev + 1 : 0));
  };

  return (
    <>
      <Box sx={{ background: "linear-gradient(to bottom, white, white)", py: 6 }}>
        <Typography variant="h4" align="center" color="white" gutterBottom>
          Featured Companies
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center" mt={4} gap={3}>
          <IconButton
            onClick={handlePrev}
            sx={{
              color: "#43a047",
              backgroundColor: "#fff",
              "&:hover": { backgroundColor: "#eee" },
            }}
          >
            <ArrowBackIos />
          </IconButton>

          {visibleCards.map((company, index) => (
            <Link
              key={index}
              href={company.link}
              target="_blank"
              underline="none"
              sx={{
                backgroundColor: "#f1faff",
                width: 300,
                height: 400,
                borderRadius: 5,
                boxShadow: 4,
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={company.image}
                alt={company.name}
                sx={{
                  maxWidth: "100%",
                  maxHeight: 150,
                  objectFit: "contain",
                  mb: 2,
                }}
              />
              <Typography variant="h6" color="text.primary" fontWeight="bold">
                {company.name}
              </Typography>
              <Typography variant="subtitle1" mt={1} color="text.secondary">
                Users:{" "}
                <Box component="span" sx={{ color: "green", fontWeight: "bold" }}>
                  {company.Users}
                </Box>
              </Typography>
            </Link>
          ))}

          <IconButton
            onClick={handleNext}
            sx={{
              color: "#43a047",
              backgroundColor: "#fff",
              "&:hover": { backgroundColor: "#eee" },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>

        {/* Navigation dots */}
        <Stack direction="row" justifyContent="center" mt={3} spacing={1}>
          {Array.from({ length: featuredCompanies.length - 2 }, (_, i) => (
            <Box
              key={i}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: i === startIndex ? "#fff" : "#90caf9",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </Stack>
      </Box>
      {/* Footer at the bottom */}
      <Footer2 />
    </>
  );
}
