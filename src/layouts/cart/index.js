import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Chip,
  Divider,
  TextField,
  Grid,
  Paper,
  Badge,
  Alert,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ShoppingCart,
  Delete,
  Add,
  Remove,
  Favorite,
  FavoriteBorder,
  LocalShipping,
  Security,
  Support,
  Payment,
  CreditCard,
  AccountBalance,
  Phone,
  Android,
  Star,
  Discount,
  CheckCircle,
  Close,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Sample cart data
const sampleCartItems = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199.99,
    originalPrice: 1299.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "Electronics",
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    isFavorite: true,
    discount: 8,
    shipping: "Free",
    delivery: "2-3 days",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 999.99,
    originalPrice: 1099.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    category: "Electronics",
    rating: 4.9,
    reviews: 892,
    inStock: true,
    isFavorite: false,
    discount: 9,
    shipping: "Free",
    delivery: "1-2 days",
  },
  {
    id: 3,
    name: "Samsung 4K Smart TV",
    price: 799.99,
    originalPrice: 899.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
    category: "Electronics",
    rating: 4.7,
    reviews: 567,
    inStock: true,
    isFavorite: true,
    discount: 11,
    shipping: "Free",
    delivery: "3-5 days",
  },
];

const paymentMethods = [
  { id: "credit", name: "Credit Card", icon: <CreditCard />, color: "#2196F3" },
  { id: "paypal", name: "PayPal", icon: <AccountBalance />, color: "#1976D2" },
  { id: "apple", name: "Apple Pay", icon: <Phone />, color: "#000000" },
  { id: "google", name: "Google Pay", icon: <Android />, color: "#4285F4" },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(sampleCartItems);
  const [selectedPayment, setSelectedPayment] = useState("credit");
  const [promoCode, setPromoCode] = useState("");
  const [showPromoDialog, setShowPromoDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice - item.price) * item.quantity,
    0
  );
  const shipping = cartItems.some((item) => item.shipping === "Free") ? 0 : 29.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    setSnackbar({
      open: true,
      message: "Item removed from cart",
      severity: "info",
    });
  };

  const handleToggleFavorite = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, isFavorite: !item.isFavorite } : item))
    );
  };

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPaymentDialog(true);
    }, 1500);
  };

  const handlePaymentComplete = () => {
    setShowPaymentDialog(false);
    setSnackbar({
      open: true,
      message: "Payment successful! Your order has been placed.",
      severity: "success",
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const FloatingParticles = () => (
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
      {[...Array(15)].map((_, i) => (
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

  return (
    <DashboardLayout>
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
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
          <FloatingParticles />
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <ShoppingCart sx={{ fontSize: "3rem" }} />
                <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
                  Shopping Cart
                </Typography>
              </Box>
              <Typography variant="h5" sx={{ opacity: 0.9, mb: 4 }}>
                Review your items and complete your purchase
              </Typography>

              {/* Cart Stats */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Paper
                    sx={{
                      p: 2,
                      bgcolor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: 3,
                      minWidth: 120,
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {cartItems.length}
                    </Typography>
                    <Typography variant="body2">Items</Typography>
                  </Paper>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Paper
                    sx={{
                      p: 2,
                      bgcolor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: 3,
                      minWidth: 120,
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      ${total.toFixed(2)}
                    </Typography>
                    <Typography variant="body2">Total</Typography>
                  </Paper>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Paper
                    sx={{
                      p: 2,
                      bgcolor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: 3,
                      minWidth: 120,
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </Typography>
                    <Typography variant="body2">Quantity</Typography>
                  </Paper>
                </motion.div>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {/* Cart Items */}
            <Grid item xs={12} lg={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
                  Cart Items ({cartItems.length})
                </Typography>

                <AnimatePresence>
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          mb: 3,
                          borderRadius: 3,
                          overflow: "hidden",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 0 }}>
                          <Grid container>
                            {/* Product Image */}
                            <Grid item xs={12} sm={4} md={3}>
                              <Box sx={{ position: "relative", height: 200 }}>
                                <CardMedia
                                  component="img"
                                  height="200"
                                  image={item.image}
                                  alt={item.name}
                                  sx={{ objectFit: "cover" }}
                                />
                                <Box
                                  sx={{
                                    position: "absolute",
                                    top: 10,
                                    left: 10,
                                    display: "flex",
                                    gap: 1,
                                  }}
                                >
                                  {item.discount > 0 && (
                                    <Chip
                                      label={`${item.discount}% OFF`}
                                      size="small"
                                      sx={{
                                        bgcolor: "#FF6B6B",
                                        color: "white",
                                        fontWeight: "bold",
                                      }}
                                    />
                                  )}
                                  {item.isFavorite && (
                                    <Chip
                                      label="Favorite"
                                      size="small"
                                      icon={<Favorite sx={{ fontSize: "1rem" }} />}
                                      sx={{
                                        bgcolor: "#FFD700",
                                        color: "white",
                                        fontWeight: "bold",
                                      }}
                                    />
                                  )}
                                </Box>
                              </Box>
                            </Grid>

                            {/* Product Details */}
                            <Grid item xs={12} sm={8} md={9}>
                              <Box sx={{ p: 3 }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    mb: 2,
                                  }}
                                >
                                  <Box sx={{ flex: 1 }}>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                      {item.name}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                      sx={{ mb: 1 }}
                                    >
                                      {item.category}
                                    </Typography>

                                    {/* Rating */}
                                    <Box
                                      sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                                    >
                                      <Box sx={{ display: "flex", alignItems: "center" }}>
                                        {[...Array(5)].map((_, i) => (
                                          <Star
                                            key={i}
                                            sx={{
                                              color:
                                                i < Math.floor(item.rating) ? "#FFD700" : "#ddd",
                                              fontSize: "1rem",
                                            }}
                                          />
                                        ))}
                                      </Box>
                                      <Typography variant="body2" color="text.secondary">
                                        {item.rating} ({item.reviews} reviews)
                                      </Typography>
                                    </Box>

                                    {/* Price */}
                                    <Box
                                      sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                                    >
                                      <Typography
                                        variant="h5"
                                        sx={{ fontWeight: "bold", color: "primary.main" }}
                                      >
                                        ${item.price}
                                      </Typography>
                                      {item.originalPrice > item.price && (
                                        <Typography
                                          variant="h6"
                                          sx={{
                                            textDecoration: "line-through",
                                            color: "text.secondary",
                                          }}
                                        >
                                          ${item.originalPrice}
                                        </Typography>
                                      )}
                                    </Box>

                                    {/* Shipping Info */}
                                    <Box
                                      sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                                    >
                                      <Chip
                                        label={item.shipping}
                                        size="small"
                                        icon={<LocalShipping sx={{ fontSize: "1rem" }} />}
                                        color="success"
                                        variant="outlined"
                                      />
                                      <Typography variant="body2" color="text.secondary">
                                        Delivery: {item.delivery}
                                      </Typography>
                                    </Box>
                                  </Box>

                                  {/* Actions */}
                                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                    <IconButton
                                      onClick={() => handleToggleFavorite(item.id)}
                                      sx={{
                                        color: item.isFavorite ? "#FF6B6B" : "text.secondary",
                                        "&:hover": { color: "#FF6B6B" },
                                      }}
                                    >
                                      {item.isFavorite ? <Favorite /> : <FavoriteBorder />}
                                    </IconButton>

                                    <IconButton
                                      onClick={() => handleRemoveItem(item.id)}
                                      sx={{
                                        color: "error.main",
                                        "&:hover": { bgcolor: "error.light" },
                                      }}
                                    >
                                      <Delete />
                                    </IconButton>
                                  </Box>
                                </Box>

                                {/* Quantity Controls */}
                                <Box sx={{ px: 3, pb: 3 }}>
                                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Typography variant="body1" sx={{ fontWeight: "600" }}>
                                      Quantity:
                                    </Typography>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        border: "1px solid #ddd",
                                        borderRadius: 2,
                                      }}
                                    >
                                      <IconButton
                                        onClick={() =>
                                          handleQuantityChange(item.id, item.quantity - 1)
                                        }
                                        disabled={item.quantity <= 1}
                                        size="small"
                                      >
                                        <Remove />
                                      </IconButton>
                                      <Typography sx={{ px: 2, minWidth: 40, textAlign: "center" }}>
                                        {item.quantity}
                                      </Typography>
                                      <IconButton
                                        onClick={() =>
                                          handleQuantityChange(item.id, item.quantity + 1)
                                        }
                                        size="small"
                                      >
                                        <Add />
                                      </IconButton>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                      ${(item.price * item.quantity).toFixed(2)}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Empty Cart */}
                {cartItems.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card
                      sx={{
                        textAlign: "center",
                        py: 8,
                        borderRadius: 3,
                        bgcolor: "rgba(255,255,255,0.8)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <ShoppingCart sx={{ fontSize: "4rem", color: "text.secondary", mb: 2 }} />
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                        Your cart is empty
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Start shopping to add items to your cart
                      </Typography>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate("/")}
                        sx={{
                          background: "linear-gradient(45deg, #667eea, #764ba2)",
                          "&:hover": {
                            background: "linear-gradient(45deg, #5a6fd8, #6a4190)",
                          },
                        }}
                      >
                        Continue Shopping
                      </Button>
                    </Card>
                  </motion.div>
                )}
              </motion.div>
            </Grid>

            {/* Order Summary */}
            <Grid item xs={12} lg={4}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    position: "sticky",
                    top: 20,
                  }}
                >
                  <Box
                    sx={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      p: 3,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      Order Summary
                    </Typography>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    {/* Summary Items */}
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Typography>Subtotal ({cartItems.length} items)</Typography>
                        <Typography>${subtotal.toFixed(2)}</Typography>
                      </Box>

                      {discount > 0 && (
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                          <Typography color="success.main">Discount</Typography>
                          <Typography color="success.main">-${discount.toFixed(2)}</Typography>
                        </Box>
                      )}

                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Typography>Shipping</Typography>
                        <Typography>
                          {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                        <Typography>Tax</Typography>
                        <Typography>${tax.toFixed(2)}</Typography>
                      </Box>

                      <Divider sx={{ my: 2 }} />

                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          Total
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main" }}>
                          ${total.toFixed(2)}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Promo Code */}
                    <Box sx={{ mb: 3 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<Discount />}
                        onClick={() => setShowPromoDialog(true)}
                        sx={{
                          borderColor: "primary.main",
                          color: "primary.main",
                          "&:hover": {
                            borderColor: "primary.dark",
                            bgcolor: "primary.light",
                            color: "white",
                          },
                        }}
                      >
                        Add Promo Code
                      </Button>
                    </Box>

                    {/* Checkout Button */}
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      onClick={handleCheckout}
                      disabled={cartItems.length === 0 || loading}
                      sx={{
                        background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                        py: 1.5,
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        "&:hover": {
                          background: "linear-gradient(45deg, #FF5252, #26A69A)",
                        },
                        "&:disabled": {
                          background: "#ccc",
                        },
                      }}
                    >
                      {loading ? "Processing..." : `Proceed to Checkout - $${total.toFixed(2)}`}
                    </Button>

                    {/* Security Badges */}
                    <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
                      <Security sx={{ color: "success.main" }} />
                      <LocalShipping sx={{ color: "primary.main" }} />
                      <Support sx={{ color: "info.main" }} />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Promo Code Dialog */}
        <Dialog
          open={showPromoDialog}
          onClose={() => setShowPromoDialog(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
            },
          }}
        >
          <DialogTitle sx={{ textAlign: "center", pb: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Add Promo Code
            </Typography>
          </DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              sx={{ mt: 2 }}
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Available codes: SAVE10, WELCOME20, FREESHIP
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setShowPromoDialog(false)}>Cancel</Button>
            <Button
              variant="contained"
              onClick={() => {
                setShowPromoDialog(false);
                setSnackbar({
                  open: true,
                  message: "Promo code applied successfully!",
                  severity: "success",
                });
              }}
            >
              Apply Code
            </Button>
          </DialogActions>
        </Dialog>

        {/* Payment Dialog */}
        <Dialog
          open={showPaymentDialog}
          onClose={() => setShowPaymentDialog(false)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
            },
          }}
        >
          <DialogTitle sx={{ textAlign: "center", pb: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Complete Payment
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Payment Method
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {paymentMethods.map((method) => (
                    <Card
                      key={method.id}
                      sx={{
                        p: 2,
                        cursor: "pointer",
                        border: selectedPayment === method.id ? "2px solid" : "1px solid",
                        borderColor: selectedPayment === method.id ? "primary.main" : "#ddd",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "primary.main",
                          transform: "translateY(-2px)",
                        },
                      }}
                      onClick={() => setSelectedPayment(method.id)}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ color: method.color }}>{method.icon}</Box>
                        <Typography>{method.name}</Typography>
                      </Box>
                    </Card>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Order Summary
                </Typography>
                <Box sx={{ bgcolor: "rgba(0,0,0,0.05)", p: 2, borderRadius: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography>Subtotal</Typography>
                    <Typography>${subtotal.toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography>Shipping</Typography>
                    <Typography>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography>Tax</Typography>
                    <Typography>${tax.toFixed(2)}</Typography>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Total
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      ${total.toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setShowPaymentDialog(false)}>Cancel</Button>
            <Button
              variant="contained"
              onClick={handlePaymentComplete}
              sx={{
                background: "linear-gradient(45deg, #4CAF50, #45B7D1)",
                "&:hover": {
                  background: "linear-gradient(45deg, #388E3C, #3A9BC0)",
                },
              }}
            >
              Complete Payment
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </DashboardLayout>
  );
};

export default CartPage;
