import React, { useState, useEffect } from "react";
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
  CircularProgress,
  Fade,
  Alert,
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
  People,
  Speed,
  Verified,
} from "@mui/icons-material";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer1 from "examples/Footer2";

// Mock data for categories
const mockCategories = [
  {
    id: 1,
    title: "Fast Food & Beverages",
    description: "Delicious meals and refreshing drinks",
    route: "/billing",
    images: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=200",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=200",
      "https://images.unsplash.com/photo-1544866092-1677b00e868b?w=200",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=200",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=200",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=200",
    ],
    featured: false,
    itemCount: 156,
    rating: 4.7,
    color: "#F7DC6F",
  },
];

// Mock statistics data
const mockStatistics = [
  { icon: "ShoppingCart", label: "Total Products", value: "2,500+", color: "#FF6B6B" },
  { icon: "LocalShipping", label: "Fast Delivery", value: "24h", color: "#4ECDC4" },
  { icon: "Security", label: "Secure Payment", value: "100%", color: "#45B7D1" },
  { icon: "Support", label: "24/7 Support", value: "Always", color: "#96CEB4" },
];

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [favorites, setFavorites] = useState(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (categoryId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(categoryId)) {
      newFavorites.delete(categoryId);
    } else {
      newFavorites.add(categoryId);
    }
    setFavorites(newFavorites);
  };

  const featuredCategories = mockCategories.filter((cat) => cat.featured);
  const regularCategories = mockCategories.filter((cat) => !cat.featured);

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "ShoppingCart":
        return <ShoppingCart sx={{ fontSize: 40 }} />;
      case "LocalShipping":
        return <LocalShipping sx={{ fontSize: 40 }} />;
      case "Security":
        return <Security sx={{ fontSize: 40 }} />;
      case "Support":
        return <Support sx={{ fontSize: 40 }} />;
      case "TrendingUp":
        return <TrendingUp sx={{ fontSize: 40 }} />;
      case "People":
        return <People sx={{ fontSize: 40 }} />;
      case "Speed":
        return <Speed sx={{ fontSize: 40 }} />;
      case "Verified":
        return <Verified sx={{ fontSize: 40 }} />;
      default:
        return <ShoppingCart sx={{ fontSize: 40 }} />;
    }
  };

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

        {/* Loading State */}
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 10 }}>
            <CircularProgress color="primary" size={60} />
          </Box>
        ) : (
          <>
            {/* Statistics Section */}
            <Fade in={!loading} timeout={800}>
              <Box sx={{ py: 6, px: 2, bgcolor: "#f8f9fa" }}>
                <Container maxWidth="lg">
                  <Grid container spacing={3}>
                    {mockStatistics.map((stat, index) => (
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
                          <Box sx={{ color: stat.color, mb: 2 }}>{renderIcon(stat.icon)}</Box>
                          <Typography
                            variant="h4"
                            component="div"
                            fontWeight="bold"
                            color="primary"
                          >
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
            </Fade>

            {/* Featured Categories */}
            <Fade in={!loading} timeout={1000}>
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
                              <Typography
                                variant="h6"
                                component="h3"
                                fontWeight="bold"
                                sx={{ flex: 1 }}
                              >
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
            </Fade>

            {/* All Categories */}
            <Fade in={!loading} timeout={1200}>
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
                                sx={{
                                  bgcolor: category.color,
                                  color: "white",
                                  fontSize: "0.75rem",
                                }}
                              />
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </Box>
            </Fade>

            {/* Modern Call to Action - Structured and Attractive */}
            <Fade in={!loading} timeout={1400}>
              <Box
                sx={{
                  py: 10,
                  px: 2,
                  bgcolor: "#22223b",
                  color: "#fff",
                  borderTopLeftRadius: 48,
                  borderTopRightRadius: 48,
                  mt: -4,
                  boxShadow: "0 -8px 32px 0 rgba(34,34,59,0.15)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Container
                  maxWidth="md"
                  sx={{
                    textAlign: "center",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
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
                      bgcolor: "#f7b801",
                      color: "#22223b",
                      "&:hover": { bgcolor: "#ffe066" },
                      px: 6,
                      py: 2,
                      fontSize: "1.1rem",
                      boxShadow: "0 4px 24px 0 rgba(247,184,1,0.15)",
                    }}
                    onClick={() => navigate("/billing")}
                  >
                    Explore All Products
                  </Button>
                </Container>
                {/* Decorative floating shapes for modern look */}
                <Box sx={{ position: "absolute", left: -80, top: -80, zIndex: 1 }}>
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      bgcolor: "#f7b801",
                      opacity: 0.15,
                      borderRadius: "50%",
                      filter: "blur(8px)",
                    }}
                  />
                </Box>
                <Box sx={{ position: "absolute", right: -60, bottom: -60, zIndex: 1 }}>
                  <Box
                    sx={{
                      width: 160,
                      height: 160,
                      bgcolor: "#667eea",
                      opacity: 0.12,
                      borderRadius: "50%",
                      filter: "blur(8px)",
                    }}
                  />
                </Box>
              </Box>
            </Fade>
          </>
        )}
      </DashboardLayout>
      <Footer1 />
    </>
  );
}

export default Home;
