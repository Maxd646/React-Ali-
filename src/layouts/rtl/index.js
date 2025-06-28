import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Container,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  useTheme,
  Skeleton,
  Alert,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  Search,
  FilterList,
  Favorite,
  FavoriteBorder,
  ShoppingCart,
  Star,
  LocalShipping,
  Security,
  Support,
  TrendingUp,
  Book,
  School,
  AutoStories,
  MenuBook,
} from "@mui/icons-material";
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
          WebkitLineClamp: expanded ? "none" : 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          minHeight: "2.5rem",
        }}
      >
        {displayText}
        {isLong && !expanded && "..."}
      </Typography>
      {isLong && (
        <Button
          size="small"
          onClick={() => setExpanded(!expanded)}
          sx={{ textTransform: "none", mt: 1, padding: 0, color: "primary.main" }}
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      )}
    </>
  );
};

ExpandableText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

function Dashboard() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [bookItems, setBookItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterFormat, setFilterFormat] = useState("all");
  const [filterLevel, setFilterLevel] = useState("all");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/E_commerce/food/") // This should be books endpoint
      .then((res) => {
        setBookItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch book items:", err);
        setError("Failed to load books. Please try again later.");
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (itemId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId);
    } else {
      newFavorites.add(itemId);
    }
    setFavorites(newFavorites);
  };

  const filteredAndSortedItems = bookItems
    .filter(
      (item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseFloat(a.price) - parseFloat(b.price);
        case "price-high":
          return parseFloat(b.price) - parseFloat(a.price);
        case "name":
          return a.title?.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const statistics = [
    { icon: <Book />, label: "Total Books", value: `${bookItems.length}+`, color: "#96CEB4" },
    { icon: <School />, label: "Academic Books", value: "500+", color: "#4ECDC4" },
    { icon: <Security />, label: "Secure Payment", value: "100%", color: "#45B7D1" },
    { icon: <Support />, label: "Student Support", value: "24/7", color: "#FF6B6B" },
  ];

  const categories = [
    "All Categories",
    "Textbooks",
    "Reference",
    "Fiction",
    "Non-Fiction",
    "Academic",
    "Stationery",
    "Study Guides",
  ];

  const formats = ["All Formats", "Hardcover", "Paperback", "Digital", "Audiobook"];
  const levels = [
    "All Levels",
    "Elementary",
    "High School",
    "College",
    "University",
    "Professional",
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #96CEB4 0%, #4ECDC4 100%)",
          color: "white",
          py: 8,
          px: 2,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            Academic Materials & Books
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ opacity: 0.9, mb: 4 }}>
            Your gateway to knowledge and academic excellence
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "#96CEB4",
                "&:hover": { bgcolor: "#f5f5f5" },
                px: 4,
                py: 1.5,
              }}
            >
              Browse Books
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
              Study Resources
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

      {/* Search and Filters */}
      <Box sx={{ py: 4, px: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center" sx={{ mb: 4 }}>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                placeholder="Search for books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth sx={{ bgcolor: "white" }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={filterCategory}
                  label="Category"
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <MenuItem
                      key={category}
                      value={category === "All Categories" ? "all" : category}
                    >
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth sx={{ bgcolor: "white" }}>
                <InputLabel>Format</InputLabel>
                <Select
                  value={filterFormat}
                  label="Format"
                  onChange={(e) => setFilterFormat(e.target.value)}
                >
                  {formats.map((format) => (
                    <MenuItem key={format} value={format === "All Formats" ? "all" : format}>
                      {format}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth sx={{ bgcolor: "white" }}>
                <InputLabel>Level</InputLabel>
                <Select
                  value={filterLevel}
                  label="Level"
                  onChange={(e) => setFilterLevel(e.target.value)}
                >
                  {levels.map((level) => (
                    <MenuItem key={level} value={level === "All Levels" ? "all" : level}>
                      {level}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth sx={{ bgcolor: "white" }}>
                <InputLabel>Sort By</InputLabel>
                <Select value={sortBy} label="Sort By" onChange={(e) => setSortBy(e.target.value)}>
                  <MenuItem value="name">Name</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={1}>
              <Button variant="outlined" startIcon={<FilterList />} fullWidth sx={{ py: 1.5 }}>
                More
              </Button>
            </Grid>
          </Grid>

          {/* Results Count */}
          <Box
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}
          >
            <Typography variant="h6" color="text.secondary">
              {filteredAndSortedItems.length} books found
            </Typography>
            <Chip label={`${bookItems.length} total books`} color="primary" variant="outlined" />
          </Box>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {/* Books Grid */}
          <Grid container spacing={3}>
            {loading
              ? // Loading skeletons
                Array.from({ length: 8 }).map((_, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card sx={{ height: "100%" }}>
                      <Skeleton variant="rectangular" height={200} />
                      <CardContent>
                        <Skeleton variant="text" height={24} width="80%" />
                        <Skeleton variant="text" height={20} width="60%" />
                        <Skeleton variant="text" height={20} width="40%" />
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              : // Actual books
                filteredAndSortedItems.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                      onClick={() => navigate("/profile")}
                    >
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={`http://localhost:8000${item.image}`}
                          alt={item.title}
                          sx={{ objectFit: "cover" }}
                        />
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
                            toggleFavorite(item.id || index);
                          }}
                        >
                          {favorites.has(item.id || index) ? (
                            <Favorite color="error" />
                          ) : (
                            <FavoriteBorder />
                          )}
                        </IconButton>
                        <Chip
                          label="Book"
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 8,
                            left: 8,
                            bgcolor: "#96CEB4",
                            color: "white",
                          }}
                        />
                        <Chip
                          label="Bestseller"
                          size="small"
                          sx={{
                            position: "absolute",
                            bottom: 8,
                            left: 8,
                            bgcolor: "#FFD700",
                            color: "white",
                          }}
                        />
                      </Box>
                      <CardContent>
                        <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                          {item.title}
                        </Typography>

                        <ExpandableText text={item.description} maxLength={100} />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2,
                            mt: 2,
                          }}
                        >
                          <Typography variant="h5" color="primary" fontWeight="bold">
                            ${item.price}
                          </Typography>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                            <Star sx={{ color: "#FFD700", fontSize: 16 }} />
                            <Typography variant="body2" fontWeight="bold">
                              4.8
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2,
                          }}
                        >
                          <Chip
                            label="Paperback"
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: "0.75rem" }}
                          />
                          <Chip
                            label="In Stock"
                            size="small"
                            variant="outlined"
                            color="success"
                            sx={{ fontSize: "0.75rem" }}
                          />
                        </Box>

                        <Button
                          variant="contained"
                          fullWidth
                          startIcon={<ShoppingCart />}
                          sx={{
                            mt: 1,
                            bgcolor: "#96CEB4",
                            "&:hover": { bgcolor: "#7FB8A0" },
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            // Add to cart logic here
                          }}
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
          </Grid>

          {/* No Results */}
          {!loading && filteredAndSortedItems.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                No books found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your search terms or filters
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, px: 2, bgcolor: "#96CEB4", color: "white" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
            Knowledge is Power!
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Invest in your education with our comprehensive collection of books and study materials
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "#96CEB4",
              "&:hover": { bgcolor: "#f5f5f5" },
              px: 6,
              py: 2,
              fontSize: "1.1rem",
            }}
          >
            Explore Library
          </Button>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;
