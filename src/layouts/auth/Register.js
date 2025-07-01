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
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
  Apple,
  Twitter,
  PersonAdd,
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
  CheckCircle,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./validationSchema";
import logo from "../../assets/images/logo-ct.png";
import bgSignIn from "../../assets/images/bg-sign-in-basic.jpeg";
import aboutImg from "../../assets/images/about-img.png";

const steps = ["Personal Info", "Account Details", "Verification"];

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [currentStep, setCurrentStep] = useState(0);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(registerSchema) });

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
      {[...Array(25)].map((_, i) => (
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
            y: [0, -40, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </Box>
  );

  const onSubmit = async (data) => {
    if (!agreeToTerms) {
      setSnackbar({
        open: true,
        message: "Please agree to the terms and conditions",
        severity: "error",
      });
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSnackbar({
        open: true,
        message: "Account created successfully! Welcome to our platform!",
        severity: "success",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 3000);
  };

  const handleSocialRegister = (provider) => {
    setSnackbar({
      open: true,
      message: `${provider} registration coming soon!`,
      severity: "info",
    });
  };

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setCurrentStep(1);
        setTimeout(() => {
          setCurrentStep(2);
        }, 1500);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `url(${bgSignIn}) center/cover no-repeat, linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: 4,
      }}
    >
      <FloatingParticles />

      <Container maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <img src={logo} alt="Logo" style={{ height: 56, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))" }} />
        </Box>

        <Box sx={{ display: { md: "flex", xs: "block" }, alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ flex: 1, display: { md: "block", xs: "none" }, pr: 4 }}>
            <img src={aboutImg} alt="Join us" style={{ width: "100%", maxWidth: 320, borderRadius: 24, boxShadow: "0 8px 32px rgba(118,75,162,0.12)" }} />
          </Box>
          <Box sx={{ flex: 1 }}>
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
                    to="/login"
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

              {/* Main Register Card */}
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
                    <Box sx={{ mb: 2 }}>
                      <PersonAdd sx={{ fontSize: "3rem" }} />
                    </Box>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
                      Create Account
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
                      Join our amazing community today
                    </Typography>

                    {/* Stepper */}
                    <Stepper activeStep={currentStep} sx={{ color: "white" }}>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel sx={{ color: "white" }}>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
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
                          {/* Name Field */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            <TextField
                              fullWidth
                              label="Full Name"
                              variant="outlined"
                              {...register("name")}
                              error={!!errors.name}
                              helperText={errors.name?.message}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Person sx={{ color: "primary.main" }} />
                                  </InputAdornment>
                                ),
                              }}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 2,
                                  transition: 'box-shadow 0.3s',
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main',
                                    boxShadow: '0 0 0 2px #764ba233',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                },
                              }}
                            />
                          </motion.div>

                          {/* Email Field */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
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
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 2,
                                  transition: 'box-shadow 0.3s',
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main',
                                    boxShadow: '0 0 0 2px #764ba233',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                },
                              }}
                            />
                          </motion.div>

                          {/* Password Field */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
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
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 2,
                                  transition: 'box-shadow 0.3s',
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main',
                                    boxShadow: '0 0 0 2px #764ba233',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                },
                              }}
                            />
                          </motion.div>

                          {/* Confirm Password Field */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            <TextField
                              fullWidth
                              label="Confirm Password"
                              variant="outlined"
                              type={showConfirmPassword ? "text" : "password"}
                              error={!!errors.confirmPassword}
                              helperText={errors.confirmPassword?.message}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Lock sx={{ color: "primary.main" }} />
                                  </InputAdornment>
                                ),
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                      edge="end"
                                    >
                                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 2,
                                  transition: 'box-shadow 0.3s',
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main',
                                    boxShadow: '0 0 0 2px #764ba233',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                },
                              }}
                            />
                          </motion.div>

                          {/* Terms and Conditions */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={agreeToTerms}
                                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                                  color="primary"
                                />
                              }
                              label={
                                <Typography variant="body2">
                                  I agree to the{" "}
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{
                                      color: "primary.main",
                                      cursor: "pointer",
                                      "&:hover": {
                                        textDecoration: "underline",
                                      },
                                    }}
                                  >
                                    Terms and Conditions
                                  </Typography>{" "}
                                  and{" "}
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{
                                      color: "primary.main",
                                      cursor: "pointer",
                                      "&:hover": {
                                        textDecoration: "underline",
                                      },
                                    }}
                                  >
                                    Privacy Policy
                                  </Typography>
                                </Typography>
                              }
                            />
                          </motion.div>

                          {/* Register Button */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
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
                              {loading ? "Creating Account..." : "Create Account"}
                            </Button>
                          </motion.div>

                          {/* Divider */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                          >
                            <Divider sx={{ my: 2 }}>
                              <Typography variant="body2" color="text.secondary">
                                OR
                              </Typography>
                            </Divider>
                          </motion.div>

                          {/* Social Register Buttons */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                          >
                            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                              <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<Google />}
                                onClick={() => handleSocialRegister("Google")}
                                sx={{
                                  borderColor: '#DB4437',
                                  color: '#fff',
                                  background: 'linear-gradient(90deg, #DB4437 60%, #fff0 100%)',
                                  fontWeight: 'bold',
                                  '&:hover': {
                                    borderColor: '#C1351D',
                                    background: 'linear-gradient(90deg, #C1351D 60%, #fff0 100%)',
                                    color: '#fff',
                                  },
                                }}
                              >
                                Google
                              </Button>
                              <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<Facebook />}
                                onClick={() => handleSocialRegister("Facebook")}
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

                          {/* Login Link */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                          >
                            <Box sx={{ textAlign: "center", mt: 2 }}>
                              <Typography variant="body2" color="text.secondary">
                                Already have an account?{" "}
                                <Typography
                                  component={Link}
                                  to="/login"
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
                                  Sign in here
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
                            <PersonAdd sx={{ fontSize: "4rem", color: "primary.main" }} />
                          </motion.div>
                          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                            Creating Your Account
                          </Typography>
                          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                            Please wait while we set up your account...
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
                transition={{ duration: 0.8, delay: 1.0 }}
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
                    <Typography variant="body2">Secure Registration</Typography>
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
                    <CheckCircle sx={{ fontSize: "1.2rem" }} />
                    <Typography variant="body2">Instant Access</Typography>
                  </Paper>
                </Box>
              </motion.div>
            </motion.div>
          </Box>
        </Box>

        {/* Testimonial Section */}
        <Box sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center", mt: 6 }}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 3, bgcolor: "rgba(255,255,255,0.7)", maxWidth: 340, textAlign: "center", boxShadow: "0 2px 16px rgba(118,75,162,0.10)" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              “Joining was the best decision I made for my career!”
            </Typography>
            <Typography variant="body2" color="text.secondary">
              — Satisfied Member
            </Typography>
          </Paper>
        </Box>
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

export default Register;
