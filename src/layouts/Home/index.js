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
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer1 from "examples/Footer2";

// Mock data for categories and best sellers
const mockCategories = [
  {
    id: 1,
    title: "Fast Food & Beverages",
    description: "Delicious meals and refreshing drinks",
    route: "/food",
    images: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
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
    route: "/electronics",
    images: [
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=200",
      "https://images.unsplash.com/photo-1544866092-1677b00e868b?w=200",
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
    route: "/fashion",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
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
    route: "/academic",
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
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
    route: "/academic",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200",
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
    route: "/home-furniture",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200",
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
    route: "/food",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=200",
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
    route: "/fashion",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200",
    ],
    featured: false,
    itemCount: 156,
    rating: 4.7,
    color: "#F7DC6F",
  },
];

const mockBestSellers = [
  {
    id: 101,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 102,
    title: "The Housemaid",
    author: "Freida McFadden",
    image: "https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL.jpg",
  },
  {
    id: 103,
    title: "Just Friends",
    author: "Bailey Pratt",
    image: "https://images-na.ssl-images-amazon.com/images/I/81eA+eA4QbL.jpg",
  },
  {
    id: 104,
    title: "Let Them",
    author: "Mel Robbins",
    image: "https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL.jpg",
  },
];

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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
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
      default:
        return <ShoppingCart sx={{ fontSize: 40 }} />;
    }
  };

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        {/* Hero/Banner Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #f7b801 0%, #764ba2 100%)",
            color: "#22223b",
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
                  bgcolor: "#22223b",
                  color: "#f7b801",
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
                  borderColor: "#22223b",
                  color: "#22223b",
                  "&:hover": { borderColor: "#22223b", bgcolor: "rgba(34,34,59,0.1)" },
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
            <Box sx={{ py: 4, px: 2, bgcolor: "#f8f9fa" }}>
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

            {/* Featured Categories Grid */}
            <Box sx={{ py: 4, px: 2 }}>
              <Container maxWidth="lg">
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  textAlign="left"
                  fontWeight="bold"
                  sx={{ mb: 2 }}
                >
                  Featured Categories
                </Typography>
                <Grid container spacing={3}>
                  {featuredCategories.map((category) => (
                    <Grid item xs={12} sm={6} md={4} key={category.id}>
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
                            height: 160,
                            background: `linear-gradient(45deg, ${category.color}22, ${category.color}44)`,
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <Grid container spacing={1} sx={{ p: 2, height: "100%" }}>
                            {category.images.slice(0, 2).map((img, i) => (
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

            {/* All Categories Grid */}
            <Box sx={{ py: 4, px: 2, bgcolor: "#f8f9fa" }}>
              <Container maxWidth="lg">
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  textAlign="left"
                  fontWeight="bold"
                  sx={{ mb: 2 }}
                >
                  All Categories
                </Typography>
                <Grid container spacing={3}>
                  {regularCategories.map((category) => (
                    <Grid item xs={12} sm={6} md={3} key={category.id}>
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
                            height: 100,
                            background: `linear-gradient(45deg, ${category.color}22, ${category.color}44)`,
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <Grid container spacing={1} sx={{ p: 1.5, height: "100%" }}>
                            {category.images.slice(0, 2).map((img, i) => (
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

            {/* Best Sellers Grid */}
            <Box sx={{ py: 4, px: 2 }}>
              <Container maxWidth="lg">
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  textAlign="left"
                  fontWeight="bold"
                  sx={{ mb: 2 }}
                >
                  Best Sellers in Books
                </Typography>
                <Grid container spacing={3}>
                  {mockBestSellers.map((book) => (
                    <Grid item xs={12} sm={6} md={3} key={book.id}>
                      <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
                          <img
                            src={book.image}
                            alt={book.title}
                            style={{
                              width: "80px",
                              height: "120px",
                              objectFit: "cover",
                              borderRadius: 8,
                            }}
                          />
                        </Box>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>
                          {book.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {book.author}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>

            {/* Personalized Recommendations Section */}
            <Box sx={{ py: 6, px: 2, bgcolor: "#fffbe7" }}>
              <Container maxWidth="md" sx={{ textAlign: "center" }}>
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                  See personalized recommendations
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
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Button>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  New customer?{" "}
                  <Button variant="text" onClick={() => navigate("/register")}>
                    Start here.
                  </Button>
                </Typography>
              </Container>
            </Box>
          </>
        )}
      </DashboardLayout>
      <Footer1 />
    </>
  );
}

export default Home;
