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
  LinkedIn,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validationSchema";
import logo from "../../assets/images/logo-ct.png";
import bgSignIn from "../../assets/images/bg-sign-in-basic.jpeg";
import aboutImg from "../../assets/images/about-img.png";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";

const teamMembersLeft = [
  {
    img: team1,
    name: 'Jane Smith',
    title: 'CEO',
    desc: 'Visionary leader with 15+ years in tech innovation.'
  },
  {
    img: team2,
    name: 'John Doe',
    title: 'Director',
    desc: 'Expert in operations and business growth.'
  }
];
const teamMembersRight = [
  {
    img: team3,
    name: 'Emily Chen',
    title: 'CTO',
    desc: 'Architect of scalable, secure platforms.'
  },
  {
    img: team4,
    name: 'Carlos Ruiz',
    title: 'COO',
    desc: 'Driving efficiency and excellence every day.'
  }
];

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
        background: `url(${bgSignIn}) center/cover no-repeat, linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: 4,
      }}
    >
      {/* Left team member cards for desktop */}
      <Box sx={{ display: { md: "flex", xs: "none" }, flexDirection: "column", alignItems: "center", justifyContent: "center", mr: 4, gap: 4 }}>
        {teamMembersLeft.map((member, idx) => (
          <Box key={idx} sx={{
            width: 200,
            bgcolor: 'rgba(255,255,255,0.92)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(118,75,162,0.13)',
            overflow: 'hidden',
            mb: 2,
            textAlign: 'center',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            transition: 'transform 0.3s, box-shadow 0.3s',
            border: '3px solid',
            borderImage: 'linear-gradient(120deg, #764ba2, #667eea, #43cea2, #185a9d) 1',
            animation: 'gradientBorder 3s linear infinite',
            '&:hover': {
              transform: 'scale(1.06) translateY(-6px)',
              boxShadow: '0 16px 48px #764ba277',
              borderImage: 'linear-gradient(120deg, #43cea2, #764ba2, #667eea, #185a9d) 1',
            },
            '@keyframes gradientBorder': {
              '0%': { borderImage: 'linear-gradient(120deg, #764ba2, #667eea, #43cea2, #185a9d) 1' },
              '100%': { borderImage: 'linear-gradient(420deg, #764ba2, #667eea, #43cea2, #185a9d) 1' },
            },
          }} component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 + idx * 0.2 }}>
            <img src={member.img} alt={member.name} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12, marginBottom: 12, boxShadow: '0 2px 16px #764ba233' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{member.name}</Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>{member.title}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>{member.desc}</Typography>
            <IconButton href="#" target="_blank" rel="noopener" sx={{ color: '#0A66C2', bgcolor: 'rgba(10,102,194,0.08)', mt: 1, '&:hover': { bgcolor: 'rgba(10,102,194,0.18)' } }}>
              <LinkedIn />
            </IconButton>
          </Box>
        ))}
      </Box>
      <FloatingParticles />

      <Container maxWidth="sm">
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <img src={logo} alt="Logo" style={{ height: 56, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))" }} />
        </Box>

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

                      {/* Contact Us Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        <Box sx={{ textAlign: 'center', mt: 3 }}>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{
                              background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
                              fontWeight: 'bold',
                              borderRadius: 2,
                              px: 4,
                              boxShadow: '0 2px 12px #43cea244',
                              '&:hover': { background: 'linear-gradient(90deg, #185a9d 0%, #43cea2 100%)' },
                            }}
                            href="#contact"
                          >
                            Contact Us
                          </Button>
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

      {/* Main content and illustration */}
      <Box sx={{ display: { md: "flex", xs: "block" }, alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ flex: 1, display: { md: "block", xs: "none" }, pr: 4 }}>
          <img src={aboutImg} alt="Welcome" style={{ width: "100%", maxWidth: 320, borderRadius: 24, boxShadow: "0 8px 32px rgba(118,75,162,0.12)" }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          {/* Main Login Card and rest of the form here */}
          {/* ...existing Paper and form code... */}
        </Box>
      </Box>

      {/* Right team member cards for desktop */}
      <Box sx={{ display: { md: "flex", xs: "none" }, flexDirection: "column", alignItems: "center", justifyContent: "center", ml: 4, gap: 4 }}>
        {teamMembersRight.map((member, idx) => (
          <Box key={idx} sx={{
            width: 200,
            bgcolor: 'rgba(255,255,255,0.92)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(118,75,162,0.13)',
            overflow: 'hidden',
            mb: 2,
            textAlign: 'center',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            transition: 'transform 0.3s, box-shadow 0.3s',
            border: '3px solid',
            borderImage: 'linear-gradient(120deg, #764ba2, #667eea, #43cea2, #185a9d) 1',
            animation: 'gradientBorder 3s linear infinite',
            '&:hover': {
              transform: 'scale(1.06) translateY(-6px)',
              boxShadow: '0 16px 48px #764ba277',
              borderImage: 'linear-gradient(120deg, #43cea2, #764ba2, #667eea, #185a9d) 1',
            },
            '@keyframes gradientBorder': {
              '0%': { borderImage: 'linear-gradient(120deg, #764ba2, #667eea, #43cea2, #185a9d) 1' },
              '100%': { borderImage: 'linear-gradient(420deg, #764ba2, #667eea, #43cea2, #185a9d) 1' },
            },
          }} component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 + idx * 0.2 }}>
            <img src={member.img} alt={member.name} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12, marginBottom: 12, boxShadow: '0 2px 16px #764ba233' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{member.name}</Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>{member.title}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>{member.desc}</Typography>
            <IconButton href="#" target="_blank" rel="noopener" sx={{ color: '#0A66C2', bgcolor: 'rgba(10,102,194,0.08)', mt: 1, '&:hover': { bgcolor: 'rgba(10,102,194,0.18)' } }}>
              <LinkedIn />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Add a testimonial/brand section for desktop */}
      <Box sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center", mt: 6 }}>
        <Paper elevation={0} sx={{ p: 3, borderRadius: 3, bgcolor: "rgba(255,255,255,0.7)", maxWidth: 340, textAlign: "center", boxShadow: "0 2px 16px rgba(118,75,162,0.10)" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            &quot;This platform made my workflow 10x faster!&quot;
          </Typography>
          <Typography variant="body2" color="text.secondary">
            — Happy User
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            sx={{ mt: 2, borderRadius: 2, fontWeight: 'bold', borderWidth: 2, px: 3, borderColor: 'primary.main', '&:hover': { background: 'primary.main', color: 'white' } }}
            href="#learn-more"
          >
            Learn More
          </Button>
        </Paper>
      </Box>

      {/* Meet the Team Button */}
      <Box sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center', mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            background: 'linear-gradient(90deg, #764ba2 0%, #43cea2 100%)',
            fontWeight: 'bold',
            borderRadius: 2,
            px: 5,
            boxShadow: '0 2px 12px #764ba244',
            '&:hover': { background: 'linear-gradient(90deg, #43cea2 0%, #764ba2 100%)' },
          }}
          href="#team"
        >
          Meet the Team
        </Button>
      </Box>

      {/* Floating 'Help' action button */}
      <Box sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 2000 }}>
        <Button
          variant="contained"
          color="info"
          size="large"
          sx={{
            borderRadius: '50%',
            minWidth: 64,
            minHeight: 64,
            boxShadow: '0 4px 24px #185a9d44',
            background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
            '&:hover': { background: 'linear-gradient(135deg, #185a9d 0%, #43cea2 100%)' },
            fontSize: 28,
            p: 0,
          }}
          href="#help"
        >
          ?
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
