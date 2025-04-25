// export default Header;
import React, { useState } from "react";
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
} from "@mui/material";
import { Search, ShoppingCart, Menu } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Link for navigation
import "./header.css";
import cpp1 from "assets/images/cpp1.jpg";
import cpp2 from "assets/images/cpp2.jpg";
import cpp3 from "assets/images/cpp3.jpg";
import cpp4 from "assets/images/cpp4.jpg";
import cpp5 from "assets/images/cpp5.jpg";

const categories = {
  Electronics: {
    subcategories: ["Laptops", "Mobile Phones", "TVs", "Headphones"],
    images: [
      { name: "Laptops", src: "https://via.placeholder.com/70?text=Laptop" },
      { name: "Mobiles", src: "https://via.placeholder.com/70?text=Mobile" },
    ],
  },
  Food: {
    subcategories: ["Snacks", "Beverages", "Grains", "Spices"],
    images: [
      { name: "Chips", src: "https://via.placeholder.com/70?text=Chips" },
      { name: "Juice", src: "https://via.placeholder.com/70?text=Juice" },
    ],
  },
  "Academic Materials": {
    subcategories: ["Textbooks", "Notebooks", "Lab Kits"],
    images: [
      { name: "Textbooks", src: "https://via.placeholder.com/70?text=Book" },
      { name: "Lab Kit", src: "https://via.placeholder.com/70?text=Lab" },
    ],
  },
  Courses: {
    subcategories: ["Programming", "Business", "Design", "Languages"],
    images: [
      { name: "Python", src: "https://via.placeholder.com/70?text=Python" },
      { name: "UI/UX", src: "https://via.placeholder.com/70?text=UIUX" },
    ],
  },
};

const Header = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated auth state

  return (
    <Box>
      <AppBar position="static" sx={{ background: "linear-gradient(135deg, #8642d9, #dae0e9)" }}>
        <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
          {/* Logo & Hamburger */}
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton edge="start" color="inherit">
              <Menu />
            </IconButton>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/Register" style={{ textDecoration: "none", color: "red" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                  Ali መ Fennix
                </Typography>
              </Link>
            </motion.div>
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              width: "40%",
              px: 1,
            }}
          >
            <Select
              defaultValue="All"
              variant="standard"
              disableUnderline
              sx={{ fontSize: "0.875rem", width: "80px" }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Books">Books</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
            </Select>
            <InputBase placeholder="Search..." fullWidth />
            <IconButton>
              <Search />
            </IconButton>
          </Box>

          {/* Auth & Cart */}
          <Box display="flex" alignItems="center" gap={3}>
            {!isLoggedIn ? (
              <>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                      Login
                    </Typography>
                  </Link>
                </motion.div>
                <Link to="/Register" style={{ textDecoration: "none", color: "blue" }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                    Create Account
                  </Typography>
                </Link>
              </>
            ) : (
              <Link to="/logout" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body2" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                  Logout
                </Typography>
              </Link>
            )}
            <Link to="/orders" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                Orders
              </Typography>
            </Link>
            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={0} color="error">
                <ShoppingCart />
              </Badge>
              <Typography variant="body2" sx={{ ml: 0.5 }}>
                Cart
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>

        {/* Mega Menu Category Links */}
        <Box sx={{ backgroundColor: "#f0f0f0", display: "flex", px: 2, py: 1, gap: 3 }}>
          {Object.keys(categories).map((cat) => (
            <Typography
              key={cat}
              sx={{ cursor: "pointer", fontWeight: "bold" }}
              onMouseEnter={() => setHoveredCategory(cat)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {cat}
            </Typography>
          ))}
        </Box>
      </AppBar>

      {/* Mega Menu */}
      {hoveredCategory && (
        <Paper
          elevation={3}
          onMouseEnter={() => setHoveredCategory(hoveredCategory)}
          onMouseLeave={() => setHoveredCategory(null)}
          sx={{
            position: "absolute",
            top: "90px",
            left: 0,
            width: "100%",
            display: "flex",
            px: 4,
            py: 2,
            backgroundColor: "#fff",
            zIndex: 10,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {/* Column 1: Main Category */}
          <Box flex={1}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {hoveredCategory}
            </Typography>
          </Box>

          {/* Column 2: Subcategories with links */}
          <Box flex={2} display="flex" flexDirection="column" gap={1}>
            {categories[hoveredCategory].subcategories.map((sub, idx) => (
              <Link
                key={idx}
                to={`/${hoveredCategory.toLowerCase().replace(/\s/g, "")}/${sub
                  .toLowerCase()
                  .replace(/\s/g, "")}`}
                style={{ textDecoration: "none", color: "#333", fontWeight: "500" }}
              >
                {sub}
              </Link>
            ))}
          </Box>

          {/* Column 3: Images */}
          <Box flex={2} display="flex" gap={2}>
            {categories[hoveredCategory].images.map((img, idx) => (
              <Box key={idx} textAlign="center">
                <img
                  src={img.src}
                  alt={img.name}
                  width={70}
                  height={70}
                  style={{ borderRadius: "8px" }}
                />
                <Typography variant="caption">{img.name}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Header;
