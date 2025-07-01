// export default Header;
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Badge,
  Paper,
  Avatar,
  Chip,
  Button,
  Divider,
  Fade,
  Grow,
  Zoom,
  Slide,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Tooltip,
  Menu,
  ListItemButton,
} from "@mui/material";
import {
  Search,
  ShoppingCart,
  Menu as MenuIcon,
  Person,
  Favorite,
  Notifications,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Home,
  Phone,
  Laptop,
  Restaurant,
  School,
  Book,
  LocalShipping,
  Support,
  Security,
  TrendingUp,
  Star,
  FlashOn,
  Whatshot,
  NewReleases,
  Discount,
  Verified,
  Language,
  DarkMode,
  LightMode,
  AccountCircle,
  ExitToApp,
  Settings,
  Help,
  Info,
  Close,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import "./header.css";

// Enhanced categories with more details
const categories = {
  Electronics: {
    icon: <Phone />,
    color: "#2196F3",
    gradient: "linear-gradient(135deg, #2196F3, #21CBF3)",
    subcategories: ["Smartphones", "Laptops", "TVs", "Headphones", "Gaming", "Smart Home"],
    featured: ["iPhone 15 Pro", "MacBook Air", "Samsung TV"],
    images: [
      {
        name: "Smartphones",
        src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&h=150&fit=crop",
      },
      {
        name: "Laptops",
        src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150&h=150&fit=crop",
      },
    ],
  },
  Food: {
    icon: <Restaurant />,
    color: "#FF6B6B",
    gradient: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
    subcategories: ["Snacks", "Beverages", "Grains", "Spices", "Organic", "International"],
    featured: ["Organic Chips", "Fresh Juice", "Premium Coffee"],
    images: [
      {
        name: "Snacks",
        src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop",
      },
      {
        name: "Beverages",
        src: "https://images.unsplash.com/photo-1546173159-315724a31696?w=150&h=150&fit=crop",
      },
    ],
  },
  Clothing: {
    icon: <Person />,
    color: "#45B7D1",
    gradient: "linear-gradient(135deg, #45B7D1, #96CEB4)",
    subcategories: ["Men", "Women", "Kids", "Accessories", "Shoes", "Bags"],
    featured: ["Designer Jeans", "Summer Dresses", "Running Shoes"],
    images: [
      {
        name: "Fashion",
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop",
      },
      {
        name: "Shoes",
        src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=150&fit=crop",
      },
    ],
  },
  Books: {
    icon: <Book />,
    color: "#96CEB4",
    gradient: "linear-gradient(135deg, #96CEB4, #4ECDC4)",
    subcategories: [
      "Textbooks",
      "Fiction",
      "Non-Fiction",
      "Academic",
      "Stationery",
      "Study Guides",
    ],
    featured: ["Best Sellers", "Academic Books", "Study Materials"],
    images: [
      {
        name: "Books",
        src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=150&fit=crop",
      },
      {
        name: "Stationery",
        src: "https://images.unsplash.com/photo-1589187775328-882e91b3d810?w=150&h=150&fit=crop",
      },
    ],
  },
  Academic: {
    icon: <School />,
    color: "#FFEAA7",
    gradient: "linear-gradient(135deg, #FFEAA7, #DDA0DD)",
    subcategories: ["Lab Kits", "Study Guides", "Software", "Equipment", "Digital Resources"],
    featured: ["Science Kits", "Study Guides", "Software Licenses"],
    images: [
      {
        name: "Lab Kits",
        src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=150&h=150&fit=crop",
      },
      {
        name: "Study Materials",
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=150&h=150&fit=crop",
      },
    ],
  },
};

// Floating particles component
const FloatingParticles = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </Box>
  );
};

const Header = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [notifications, setNotifications] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [notificationsAnchor, setNotificationsAnchor] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scrollY, setScrollY] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUserMenuOpen = (event) => setUserMenuAnchor(event.currentTarget);
  const handleUserMenuClose = () => setUserMenuAnchor(null);
  const handleNotificationsOpen = (event) => setNotificationsAnchor(event.currentTarget);
  const handleNotificationsClose = () => setNotificationsAnchor(null);

  const isScrolled = scrollY > 50;

  return (
    <Box sx={{ position: "relative" }}>
      {/* Promotional Banner */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                background: "linear-gradient(90deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)",
                backgroundSize: "400% 400%",
                animation: "gradientShift 3s ease infinite",
                color: "white",
                py: 1,
                px: 2,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <FloatingParticles />
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <FlashOn sx={{ animation: "pulse 2s infinite" }} />
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  🎉 MEGA SALE: Up to 70% OFF + Free Shipping! Limited Time Only
                </Typography>
                <Chip
                  label="SHOP NOW"
                  size="small"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.2)",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                  }}
                />
                <IconButton
                  size="small"
                  onClick={() => setShowPromo(false)}
                  sx={{ color: "white", ml: "auto" }}
                >
                  <Close fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <AppBar
        position="sticky"
        sx={{
          background: isScrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          backdropFilter: "blur(20px)",
          boxShadow: isScrolled ? "0 8px 32px rgba(0,0,0,0.1)" : "none",
          transition: "all 0.3s ease",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.2)" : "none",
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            py: isScrolled ? 1 : 2,
            transition: "all 0.3s ease",
          }}
        >
          {/* Logo Section */}
          <Box display="flex" alignItems="center" gap={2}>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setMobileMenuOpen(true)}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
            </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #FF6B6B, #4ECDC4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                      A
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        background: "linear-gradient(135deg, #FF6B6B, #4ECDC4)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: { xs: "1.1rem", md: "1.5rem" },
                      }}
                    >
                  Ali መ Fennix
                </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "0.7rem",
                        fontWeight: "500",
                      }}
                    >
                      Premium Marketplace
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </motion.div>
          </Box>

          {/* Search Bar - Desktop */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
          <Box
            sx={{
                  position: "relative",
                  width: "40%",
                  maxWidth: 600,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
              display: "flex",
              alignItems: "center",
                    borderRadius: "25px",
                    background: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                      transform: "translateY(-2px)",
                    },
            }}
          >
            <Select
              defaultValue="All"
              variant="standard"
              disableUnderline
                    sx={{
                      fontSize: "0.875rem",
                      width: "100px",
                      mx: 1,
                      "& .MuiSelect-select": {
                        color: "#666",
                        fontWeight: "500",
                      },
                    }}
                  >
                    <MenuItem value="All">All Categories</MenuItem>
                    <MenuItem value="Electronics">Electronics</MenuItem>
                    <MenuItem value="Food">Food & Drinks</MenuItem>
                    <MenuItem value="Clothing">Fashion</MenuItem>
              <MenuItem value="Books">Books</MenuItem>
                    <MenuItem value="Academic">Academic</MenuItem>
            </Select>
                  <Divider orientation="vertical" flexItem />
                  <InputBase
                    placeholder="Search for products, brands, and more..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                      flex: 1,
                      px: 2,
                      py: 1.5,
                      fontSize: "0.9rem",
                      "& input": {
                        color: "#333",
                        "&::placeholder": {
                          color: "#999",
                          opacity: 1,
                        },
                      },
                    }}
                  />
                  <IconButton
                    sx={{
                      mx: 1,
                      bgcolor: "primary.main",
                      color: "white",
                      "&:hover": { bgcolor: "primary.dark" },
                    }}
                  >
              <Search />
            </IconButton>
                </Paper>
          </Box>
            </motion.div>
          )}

          {/* Right Section */}
          <Box display="flex" alignItems="center" gap={1}>
            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
                <IconButton
                  color="inherit"
                  onClick={() => setDarkMode(!darkMode)}
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  {darkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
              </Tooltip>
            </motion.div>

            {/* Notifications */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Tooltip title="Notifications">
                <IconButton color="inherit" onClick={handleNotificationsOpen}>
                  <Badge badgeContent={notifications} color="error">
                    <Notifications />
                  </Badge>
                </IconButton>
              </Tooltip>
            </motion.div>

            {/* Language Selector */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <LanguageSelector
                currentLanguage="en"
                onLanguageChange={(lang) => console.log("Language changed to:", lang)}
              />
            </motion.div>

            {/* Favorites */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Tooltip title="Favorites">
                <IconButton color="inherit" component={Link} to="/favorites">
                  <Badge badgeContent={7} color="error">
                    <Favorite />
                  </Badge>
                </IconButton>
              </Tooltip>
            </motion.div>

            {/* Shopping Cart */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Tooltip title="Shopping Cart">
                <IconButton
                  color="inherit"
                  component={Link}
                  to="/cart"
                  sx={{
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: "50%",
                      background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                    "&:hover::after": {
                      opacity: 0.1,
                    },
                  }}
                >
                  <Badge
                    badgeContent={cartCount}
                    color="error"
                    sx={{
                      "& .MuiBadge-badge": {
                        background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Tooltip>
            </motion.div>

            {/* User Menu */}
            {!isLoggedIn ? (
              <Box sx={{ display: "flex", gap: 1, ml: 1 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    component={Link}
                    to="/login"
                    sx={{
                      borderColor: "rgba(255,255,255,0.3)",
                      color: "white",
                      "&:hover": {
                        borderColor: "white",
                        bgcolor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                      Login
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="small"
                    component={Link}
                    to="/register"
                    sx={{
                      background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                      "&:hover": {
                        background: "linear-gradient(45deg, #FF5252, #26A69A)",
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </motion.div>
              </Box>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <IconButton
                  color="inherit"
                  onClick={handleUserMenuOpen}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "primary.main",
                      fontSize: "0.875rem",
                    }}
                  >
                    U
                  </Avatar>
                </IconButton>
              </motion.div>
            )}
          </Box>
        </Toolbar>

        {/* Category Navigation - Desktop */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
                py: 1,
                px: 2,
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {Object.entries(categories).map(([category, data]) => (
                <motion.div key={category} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <Typography
                    sx={{
                      cursor: "pointer",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "white",
                        transform: "translateY(-1px)",
                      },
                    }}
                    onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
                    {data.icon}
                    {category}
                    <KeyboardArrowDown
                      sx={{
                        fontSize: "1rem",
                        transition: "transform 0.3s ease",
                        transform: hoveredCategory === category ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
            </Typography>
                </motion.div>
          ))}
        </Box>
          </motion.div>
        )}
      </AppBar>

      {/* Mega Menu */}
      <AnimatePresence>
        {hoveredCategory && !isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
        <Paper
              elevation={8}
          onMouseEnter={() => setHoveredCategory(hoveredCategory)}
          onMouseLeave={() => setHoveredCategory(null)}
          sx={{
            position: "absolute",
                top: "100%",
            left: 0,
            width: "100%",
                zIndex: 1000,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "0 0 20px 20px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  background: categories[hoveredCategory].gradient,
                  py: 3,
            px: 4,
                  color: "white",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  {categories[hoveredCategory].icon}
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {hoveredCategory}
            </Typography>
                  <Chip
                    label="Explore"
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  />
          </Box>

                <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {/* Subcategories */}
                  <Box sx={{ flex: 1, minWidth: 200 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
                      Categories
                    </Typography>
                    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1 }}>
            {categories[hoveredCategory].subcategories.map((sub, idx) => (
                        <motion.div key={idx} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={`/${hoveredCategory.toLowerCase().replace(/\s/g, "")}/${sub
                  .toLowerCase()
                  .replace(/\s/g, "")}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <Typography
                              sx={{
                                py: 0.5,
                                px: 1,
                                borderRadius: 1,
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  bgcolor: "rgba(255,255,255,0.1)",
                                },
                              }}
              >
                {sub}
                            </Typography>
              </Link>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>

                  {/* Featured Products */}
                  <Box sx={{ flex: 1, minWidth: 200 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
                      Featured Products
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      {categories[hoveredCategory].featured.map((product, idx) => (
                        <motion.div key={idx} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              py: 0.5,
                              px: 1,
                              borderRadius: 1,
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                bgcolor: "rgba(255,255,255,0.1)",
                              },
                            }}
                          >
                            <Star sx={{ fontSize: "1rem", color: "#FFD700" }} />
                            <Typography variant="body2">{product}</Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
          </Box>

                  {/* Product Images */}
                  <Box sx={{ flex: 1, minWidth: 200 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
                      Popular Items
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
            {categories[hoveredCategory].images.map((img, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Box
                            sx={{
                              width: 80,
                              height: 80,
                              borderRadius: 2,
                              overflow: "hidden",
                              cursor: "pointer",
                              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                            }}
                          >
                <img
                  src={img.src}
                  alt={img.name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Box>
                          <Typography
                            variant="caption"
                            sx={{
                              display: "block",
                              textAlign: "center",
                              mt: 0.5,
                              fontWeight: "500",
                            }}
                          >
                            {img.name}
                          </Typography>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Menu
            </Typography>
            <IconButton color="inherit" onClick={() => setMobileMenuOpen(false)}>
              <Close />
            </IconButton>
          </Box>

          {/* Mobile Search */}
          <Box sx={{ mb: 3 }}>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "20px",
                bgcolor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <InputBase placeholder="Search..." sx={{ flex: 1, px: 2, py: 1, color: "white" }} />
              <IconButton sx={{ color: "white" }}>
                <Search />
              </IconButton>
        </Paper>
          </Box>

          {/* Mobile Categories */}
          <List>
            {Object.entries(categories).map(([category, data]) => (
              <ListItem key={category} sx={{ px: 0 }}>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  <ListItemIcon sx={{ color: "white", minWidth: 40 }}>{data.icon}</ListItemIcon>
                  <ListItemText primary={category} primaryTypographyProps={{ fontWeight: "600" }} />
                  <KeyboardArrowDown />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.2)" }} />

          {/* Mobile User Actions */}
          <List>
            <ListItem sx={{ px: 0 }}>
              <ListItemButton
                component={Link}
                to="/cart"
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Shopping Cart" />
                <Badge badgeContent={cartCount} color="error" />
              </ListItemButton>
            </ListItem>

            <ListItem sx={{ px: 0 }}>
              <ListItemButton
                component={Link}
                to="/favorites"
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                  <Favorite />
                </ListItemIcon>
                <ListItemText primary="Favorites" />
                <Badge badgeContent={7} color="error" />
              </ListItemButton>
            </ListItem>

            <ListItem sx={{ px: 0 }}>
              <ListItemButton
                component={Link}
                to="/orders"
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                  <LocalShipping />
                </ListItemIcon>
                <ListItemText primary="My Orders" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* User Menu */}
      <Menu
        anchorEl={userMenuAnchor}
        open={Boolean(userMenuAnchor)}
        onClose={handleUserMenuClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            borderRadius: 2,
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Welcome back!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currentTime.toLocaleTimeString()}
          </Typography>
        </Box>
        <List sx={{ py: 0 }}>
          <ListItem sx={{ px: 2 }}>
            <ListItemButton component={Link} to="/profile">
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ px: 2 }}>
            <ListItemButton component={Link} to="/settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ px: 2 }}>
            <ListItemButton component={Link} to="/help">
              <ListItemIcon>
                <Help />
              </ListItemIcon>
              <ListItemText primary="Help & Support" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List sx={{ py: 0 }}>
          <ListItem sx={{ px: 2 }}>
            <ListItemButton onClick={() => setIsLoggedIn(false)}>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Menu>

      {/* Notifications Menu */}
      <Menu
        anchorEl={notificationsAnchor}
        open={Boolean(notificationsAnchor)}
        onClose={handleNotificationsClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 300,
            maxHeight: 400,
            borderRadius: 2,
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Notifications
          </Typography>
        </Box>
        <List sx={{ py: 0 }}>
          {[
            {
              title: "Order Shipped",
              message: "Your order #12345 has been shipped",
              time: "2 min ago",
              icon: <LocalShipping color="success" />,
            },
            {
              title: "New Product",
              message: "Check out our latest electronics",
              time: "1 hour ago",
              icon: <NewReleases color="primary" />,
            },
            {
              title: "Special Offer",
              message: "50% off on selected items",
              time: "3 hours ago",
              icon: <Discount color="error" />,
            },
          ].map((notification, index) => (
            <ListItem key={index} sx={{ px: 2 }}>
              <ListItemButton>
                <ListItemIcon>{notification.icon}</ListItemIcon>
                <ListItemText
                  primary={notification.title}
                  secondary={
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {notification.message}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {notification.time}
                      </Typography>
                    </Box>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
};

export default Header;
