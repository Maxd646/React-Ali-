import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validationSchema";
import { Typography, TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // You can call your login API here
  };

  return (
    <PageLayout>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Log In
        </Button>
        <Typography variant="body2" textAlign="center">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </Typography>
      </Box>
    </PageLayout>
  );
};

export default Login;
