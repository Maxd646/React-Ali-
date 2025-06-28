import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Container,
  Button,
  Chip,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ShoppingCart,
  LocalShipping,
  Security,
  Support,
  TrendingUp,
  Star,
  Search,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
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

// Organized product categories with better data structure
const productCategories = [
  {
    id: 1,
    title: "Fast Food & Beverages",
    description: "Delicious meals and refreshing drinks",
    route: "/billing",
    images: [team5, team1, team2, team3],
    featured: true,
    itemCount: 150,
    rating: 4.8,
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Electronics & Gadgets",
    description: "Latest tech and smart devices",
    route: "/billing",
    images: [team1, team9, team2, team3],
    featured: true,
    itemCount: 89,
    rating: 4.6,
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Fashion & Clothing",
    description: "Trendy apparel and accessories",
    route: "/profile",
    images: [team2, team1, team3, team4],
    featured: true,
    itemCount: 234,
    rating: 4.7,
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "Academic Materials",
    description: "Books, stationery, and study resources",
    route: "/notifications",
    images: [team2, team1, team3, team9],
    featured: false,
    itemCount: 67,
    rating: 4.5,
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Health & Hygiene",
    description: "Personal care and wellness products",
    route: "/notifications",
    images: [team5, team1, team2, team3],
    featured: false,
    itemCount: 123,
    rating: 4.9,
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "Home & Furniture",
    description: "Furniture and home decor items",
    route: "/rtl",
    images: [team1, team9, team2, team3],
    featured: false,
    itemCount: 78,
    rating: 4.4,
    color: "#DDA0DD",
  },
  {
    id: 7,
    title: "Sports & Fitness",
    description: "Equipment and activewear",
    route: "/tables",
    images: [team2, team1, team3, team4],
    featured: false,
    itemCount: 92,
    rating: 4.6,
    color: "#98D8C8",
  },
  {
    id: 8,
    title: "Beauty & Cosmetics",
    description: "Makeup and skincare products",
    route: "/profile",
    images: [team2, team1, team3, team9],
    featured: false,
    itemCount: 156,
    rating: 4.7,
    color: "#F7DC6F",
  },
];

// Statistics data
const statistics = [
  { icon: <ShoppingCart />, label: "Total Products", value: "2,500+", color: "#FF6B6B" },
  { icon: <LocalShipping />, label: "Fast Delivery", value: "24h", color: "#4ECDC4" },
  { icon: <Security />, label: "Secure Payment", value: "100%", color: "#45B7D1" },
  { icon: <Support />, label: "24/7 Support", value: "Always", color: "#96CEB4" },
];

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (categoryId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(categoryId)) {
      newFavorites.delete(categoryId);
    } else {
      newFavorites.add(categoryId);
    }
    setFavorites(newFavorites);
  };

  const featuredCategories = productCategories.filter((cat) => cat.featured);
  const regularCategories = productCategories.filter((cat) => !cat.featured);

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />

        {/* Hero Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            py: 8,
            px: 2,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
              Welcome to Ali Fennix
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom sx={{ opacity: 0.9, mb: 4 }}>
              Your One-Stop Shop for Everything You Need
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white",
                  color: "#667eea",
                  "&:hover": { bgcolor: "#f5f5f5" },
                  px: 4,
                  py: 1.5,
                }}
                onClick={() => navigate("/billing")}
              >
                Start Shopping
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
                  px: 4,
                  py: 1.5,
                }}
              >
                Learn More
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Statistics Section */}
        <Box sx={{ py: 6, px: 2, bgcolor: "#f8f9fa" }}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {statistics.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Card
                    sx={{
                      textAlign: "center",
                      p: 3,
                      height: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "translateY(-5px)" },
                    }}
                  >
                    <Box sx={{ color: stat.color, mb: 2 }}>
                      {React.cloneElement(stat.icon, { sx: { fontSize: 40 } })}
                    </Box>
                    <Typography variant="h4" component="div" fontWeight="bold" color="primary">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Featured Categories */}
        <Box sx={{ py: 6, px: 2 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              textAlign="center"
              fontWeight="bold"
            >
              Featured Categories
            </Typography>
            <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
              Discover our most popular product categories
            </Typography>

            <Grid container spacing={4}>
              {featuredCategories.map((category) => (
                <Grid item xs={12} md={4} key={category.id}>
                  <Card
                    sx={{
                      height: "100%",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: theme.shadows[8],
                      },
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onClick={() => navigate(category.route)}
                  >
                    <Box
                      sx={{
                        height: 200,
                        background: `linear-gradient(45deg, ${category.color}22, ${category.color}44)`,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Grid container spacing={1} sx={{ p: 2, height: "100%" }}>
                        {category.images.slice(0, 4).map((img, i) => (
                          <Grid item xs={6} key={i}>
                            <img
                              src={img}
                              alt={`${category.title} ${i}`}
                              style={{
                                width: "100%",
                                height: "80px",
                                objectFit: "cover",
                                borderRadius: "8px",
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                      <IconButton
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          bgcolor: "rgba(255,255,255,0.9)",
                          "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(category.id);
                        }}
                      >
                        {favorites.has(category.id) ? (
                          <Favorite color="error" />
                        ) : (
                          <FavoriteBorder />
                        )}
                      </IconButton>
                    </Box>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 1,
                        }}
                      >
                        <Typography variant="h6" component="h3" fontWeight="bold" sx={{ flex: 1 }}>
                          {category.title}
                        </Typography>
                        <Chip
                          label={`${category.itemCount} items`}
                          size="small"
                          sx={{ bgcolor: category.color, color: "white" }}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {category.description}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Star sx={{ color: "#FFD700", fontSize: 16 }} />
                        <Typography variant="body2" fontWeight="bold">
                          {category.rating}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ({category.itemCount} reviews)
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* All Categories */}
        <Box sx={{ py: 6, px: 2, bgcolor: "#f8f9fa" }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              textAlign="center"
              fontWeight="bold"
            >
              All Categories
            </Typography>
            <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
              Explore our complete product catalog
            </Typography>

            <Grid container spacing={3}>
              {regularCategories.map((category) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
                  <Card
                    sx={{
                      height: "100%",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: theme.shadows[6],
                      },
                      position: "relative",
                    }}
                    onClick={() => navigate(category.route)}
                  >
                    <Box
                      sx={{
                        height: 120,
                        background: `linear-gradient(45deg, ${category.color}22, ${category.color}44)`,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Grid container spacing={1} sx={{ p: 1.5, height: "100%" }}>
                        {category.images.slice(0, 4).map((img, i) => (
                          <Grid item xs={6} key={i}>
                            <img
                              src={img}
                              alt={`${category.title} ${i}`}
                              style={{
                                width: "100%",
                                height: "50px",
                                objectFit: "cover",
                                borderRadius: "6px",
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                      <IconButton
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 4,
                          right: 4,
                          bgcolor: "rgba(255,255,255,0.9)",
                          "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(category.id);
                        }}
                      >
                        {favorites.has(category.id) ? (
                          <Favorite color="error" fontSize="small" />
                        ) : (
                          <FavoriteBorder fontSize="small" />
                        )}
                      </IconButton>
                    </Box>
                    <CardContent sx={{ p: 2 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        fontWeight="bold"
                        sx={{ mb: 1, fontSize: "1rem" }}
                      >
                        {category.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1, fontSize: "0.875rem" }}
                      >
                        {category.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <Star sx={{ color: "#FFD700", fontSize: 14 }} />
                          <Typography variant="body2" fontWeight="bold" fontSize="0.875rem">
                            {category.rating}
                          </Typography>
                        </Box>
                        <Chip
                          label={`${category.itemCount}`}
                          size="small"
                          sx={{ bgcolor: category.color, color: "white", fontSize: "0.75rem" }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Call to Action */}
        <Box sx={{ py: 8, px: 2, bgcolor: "primary.main", color: "white" }}>
          <Container maxWidth="lg" sx={{ textAlign: "center" }}>
            <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
              Ready to Start Shopping?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join thousands of satisfied customers and discover amazing products
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                "&:hover": { bgcolor: "#f5f5f5" },
                px: 6,
                py: 2,
                fontSize: "1.1rem",
              }}
              onClick={() => navigate("/billing")}
            >
              Explore All Products
            </Button>
          </Container>
        </Box>
      </DashboardLayout>
      <Footer1 />
    </>
  );
}

export default Home;
