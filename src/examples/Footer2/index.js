import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn,
  Payment,
  LocalShipping,
  Security,
  Support,
} from "@mui/icons-material";

const Footer2 = () => {
  const footerSections = [
    {
      title: "Shop by Category",
      links: [
        { name: "Electronics", href: "/billing" },
        { name: "Fashion", href: "/profile" },
        { name: "Food & Beverages", href: "/billing" },
        { name: "Books & Academic", href: "/notifications" },
        { name: "Health & Beauty", href: "/notifications" },
        { name: "Home & Furniture", href: "/rtl" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "Shipping Info", href: "#" },
        { name: "Returns & Exchanges", href: "#" },
        { name: "Size Guide", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Track Order", href: "#" },
      ],
    },
    {
      title: "About Ali Fennix",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
  ];

  const features = [
    {
      icon: <LocalShipping sx={{ fontSize: 32 }} />,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: <Security sx={{ fontSize: 32 }} />,
      title: "Secure Payment",
      description: "100% secure checkout",
    },
    {
      icon: <Support sx={{ fontSize: 32 }} />,
      title: "24/7 Support",
      description: "Dedicated support",
    },
    {
      icon: <Payment sx={{ fontSize: 32 }} />,
      title: "Easy Returns",
      description: "30 day return policy",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#1a1a2e",
        color: "white",
        pt: 6,
        pb: 3,
      }}
    >
      {/* Features Section */}
      <Box sx={{ bgcolor: "#16213e", py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 2,
                  }}
                >
                  <Box sx={{ color: "#f7b801", mb: 1 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 0.5, fontWeight: "bold" }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

      {/* Main Footer Content */}
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#f7b801" }}>
              Ali Fennix
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.8, lineHeight: 1.6 }}>
              Your one-stop destination for all your shopping needs. We offer quality products, fast
              delivery, and exceptional customer service.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Email sx={{ fontSize: 18, mr: 1, color: "#f7b801" }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  support@alifennix.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Phone sx={{ fontSize: 18, mr: 1, color: "#f7b801" }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOn sx={{ fontSize: 18, mr: 1, color: "#f7b801" }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  123 Shopping Street, E-Commerce City
                </Typography>
              </Box>
            </Box>

            {/* Social Links */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontSize: "1rem" }}>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {[
                  { icon: <Facebook />, href: "#" },
                  { icon: <Twitter />, href: "#" },
                  { icon: <Instagram />, href: "#" },
                  { icon: <LinkedIn />, href: "#" },
                  { icon: <YouTube />, href: "#" },
                ].map((social, index) => (
                  <IconButton
              key={index}
                    sx={{
                      color: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                      "&:hover": { bgcolor: "#f7b801", color: "#1a1a2e" },
                    }}
                    component={Link}
                    href={social.href}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                {section.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      textDecoration: "none",
                      "&:hover": { color: "#f7b801" },
                      fontSize: "0.875rem",
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © 2024 Ali Fennix. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="#"
              sx={{
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "#f7b801" },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              sx={{
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "#f7b801" },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "#f7b801" },
              }}
            >
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer2;
