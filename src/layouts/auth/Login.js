import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Divider,
  Alert,
  Snackbar,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom,
} from "@mui/material";
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
  Apple,
  Twitter,
  Login as LoginIcon,
  ArrowBack,
  Security,
  Verified,
  TrendingUp,
  FlashOn,
  Whatshot,
  NewReleases,
  Discount,
  LocalShipping,
  Support,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validationSchema";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [currentStep, setCurrentStep] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const watchedEmail = watch("email");
  const watchedPassword = watch("password");

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
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: "6px",
            height: "6px",
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </Box>
  );

  const onSubmit = async (data) => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSnackbar({
        open: true,
        message: "Login successful! Welcome back!",
        severity: "success",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    }, 2000);
  };

  const handleSocialLogin = (provider) => {
    setSnackbar({
      open: true,
      message: `${provider} login coming soon!`,
      severity: "info",
    });
  };

  const steps = [
    {
      title: "Welcome Back",
      subtitle: "Sign in to your account to continue",
      icon: <LoginIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Security Check",
      subtitle: "We're verifying your credentials",
      icon: <Security sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Success!",
      subtitle: "You're all set to go",
      icon: <Verified sx={{ fontSize: "3rem" }} />,
    },
  ];

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setCurrentStep(1);
        setTimeout(() => {
          setCurrentStep(2);
        }, 1000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: 4,
      }}
    >
      <FloatingParticles />

      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Box sx={{ mb: 4, display: "flex", justifyContent: "flex-start" }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                component={Link}
                to="/"
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.3)",
                  },
                }}
              >
                <ArrowBack />
              </IconButton>
            </motion.div>
          </Box>

          {/* Main Login Card */}
          <Paper
            elevation={24}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            {/* Header Section */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                p: 4,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box sx={{ mb: 2 }}>{steps[currentStep].icon}</Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
                  {steps[currentStep].title}
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  {steps[currentStep].subtitle}
                </Typography>
              </motion.div>
            </Box>

            {/* Form Section */}
            <Box sx={{ p: 4 }}>
              <AnimatePresence mode="wait">
                {!loading ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Box
                      component="form"
                      onSubmit={handleSubmit(onSubmit)}
                      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      {/* Email Field */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <TextField
                          fullWidth
                          label="Email Address"
                          variant="outlined"
                          type="email"
                          {...register("email")}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Email sx={{ color: "primary.main" }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                              "&:hover fieldset": {
                                borderColor: "primary.main",
                              },
                            },
                          }}
                        />
                      </motion.div>

                      {/* Password Field */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <TextField
                          fullWidth
                          label="Password"
                          variant="outlined"
                          type={showPassword ? "text" : "password"}
                          {...register("password")}
                          error={!!errors.password}
                          helperText={errors.password?.message}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Lock sx={{ color: "primary.main" }} />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() => setShowPassword(!showPassword)}
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                              "&:hover fieldset": {
                                borderColor: "primary.main",
                              },
                            },
                          }}
                        />
                      </motion.div>

                      {/* Forgot Password Link */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                          <Typography
                            component={Link}
                            to="/forgot-password"
                            variant="body2"
                            sx={{
                              color: "primary.main",
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                          >
                            Forgot your password?
                          </Typography>
                        </Box>
                      </motion.div>

                      {/* Login Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={loading}
                          sx={{
                            background: "linear-gradient(45deg, #667eea, #764ba2)",
                            py: 1.5,
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            borderRadius: 2,
                            "&:hover": {
                              background: "linear-gradient(45deg, #5a6fd8, #6a4190)",
                            },
                            "&:disabled": {
                              background: "#ccc",
                            },
                          }}
                        >
                          {loading ? "Signing In..." : "Sign In"}
                        </Button>
                      </motion.div>

                      {/* Divider */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <Divider sx={{ my: 2 }}>
                          <Typography variant="body2" color="text.secondary">
                            OR
                          </Typography>
                        </Divider>
                      </motion.div>

                      {/* Social Login Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                          <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<Google />}
                            onClick={() => handleSocialLogin("Google")}
                            sx={{
                              borderColor: "#DB4437",
                              color: "#DB4437",
                              "&:hover": {
                                borderColor: "#C1351D",
                                bgcolor: "rgba(219, 68, 55, 0.1)",
                              },
                            }}
                          >
                            Google
                          </Button>
                          <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<Facebook />}
                            onClick={() => handleSocialLogin("Facebook")}
                            sx={{
                              borderColor: "#4267B2",
                              color: "#4267B2",
                              "&:hover": {
                                borderColor: "#365899",
                                bgcolor: "rgba(66, 103, 178, 0.1)",
                              },
                            }}
                          >
                            Facebook
                          </Button>
                        </Box>
                      </motion.div>

                      {/* Sign Up Link */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <Box sx={{ textAlign: "center", mt: 2 }}>
                          <Typography variant="body2" color="text.secondary">
                            Don&apos;t have an account?{" "}
                            <Typography
                              component={Link}
                              to="/register"
                              variant="body2"
                              sx={{
                                color: "primary.main",
                                textDecoration: "none",
                                fontWeight: "bold",
                                "&:hover": {
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Sign up here
                            </Typography>
                          </Typography>
                        </Box>
                      </motion.div>
                    </Box>
                  </motion.div>
                ) : (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Box sx={{ textAlign: "center", py: 4 }}>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <LoginIcon sx={{ fontSize: "4rem", color: "primary.main" }} />
                      </motion.div>
                      <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                        {steps[currentStep].title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                        {steps[currentStep].subtitle}
                      </Typography>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Paper>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Box
              sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}
            >
              <Paper
                sx={{
                  p: 2,
                  bgcolor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                }}
              >
                <Security sx={{ fontSize: "1.2rem" }} />
                <Typography variant="body2">Secure Login</Typography>
              </Paper>

              <Paper
                sx={{
                  p: 2,
                  bgcolor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                }}
              >
                <Support sx={{ fontSize: "1.2rem" }} />
                <Typography variant="body2">24/7 Support</Typography>
              </Paper>

              <Paper
                sx={{
                  p: 2,
                  bgcolor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                }}
              >
                <LocalShipping sx={{ fontSize: "1.2rem" }} />
                <Typography variant="body2">Fast Delivery</Typography>
              </Paper>
            </Box>
          </motion.div>
        </motion.div>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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
  );
};

export default Login;
