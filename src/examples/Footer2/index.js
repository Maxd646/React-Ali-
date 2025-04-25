import PropTypes from "prop-types";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

function Footer({ company }) {
  const year = new Date().getFullYear();

  const linkGroups = [
    {
      title: "Get to Know Us",
      links: [
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Investor Relations", href: "#" },
        { label: "Devices", href: "#" },
        { label: "Science", href: "#" },
      ],
    },
    {
      title: "Make Money with Us",
      links: [
        { label: "Sell products", href: "#" },
        { label: "Sell apps", href: "#" },
        { label: "Become an Affiliate", href: "#" },
        { label: "Advertise Your Products", href: "#" },
        { label: "Self-Publish", href: "#" },
        { label: "Host a Hub", href: "#" },
      ],
    },
    {
      title: "Payment Products",
      links: [
        { label: "Business Card", href: "#" },
        { label: "Shop with Points", href: "#" },
        { label: "Reload Your Balance", href: "#" },
        { label: "Currency Converter", href: "#" },
      ],
    },
    {
      title: "Let Us Help You",
      links: [
        { label: "Your Account", href: "/Register" },
        { label: "Shipping Rates & Policies", href: "/order" },
        { label: "Returns & Replacements", href: "/login" },
        { label: "Manage Content and Devices", href: "/login" },
        { label: "Help", href: "/feedback" },
      ],
    },
  ];

  return (
    <Box
      className="footer a"
      component="footer"
      sx={{
        background: "white", // or use a gradient: "linear-gradient(to top, #ffffff, #f9f9f9)"
        py: 6,
        color: "black", // change base color for text inside
      }}
    >
      <Box maxWidth="lg" mx="auto" px={2}>
        {/* Top Section: Links */}
        <Grid container spacing={4} justifyContent="center">
          {linkGroups.map((group, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "white" }}>
                {group.title}
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                {group.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    underline="hover"
                    color="inherit"
                    sx={{
                      color: "white",
                      fontSize: "0.9rem",
                      "&:hover": { color: "#febd69" },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Divider */}
        <Box mt={5} borderTop="1px solid rgba(255,255,255,0.2)" />

        {/* Country + Language Section */}
        <Box mt={3} textAlign="center">
          <motion.div whileHover={{ scale: 1.05 }} style={{ display: "inline-block" }}>
            <img
              src="data:image/png;base64,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"
              alt="Logo"
              width="100"
            />
          </motion.div>

          <Box
            mt={2}
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap={2}
            sx={{ fontSize: "0.875rem", color: "white" }}
          >
            <Link href="#" color="inherit" sx={{ color: "white", "&:hover": { color: "#febd69" } }}>
              English
            </Link>
            <Link href="#" color="inherit" sx={{ color: "white", "&:hover": { color: "#febd69" } }}>
              United States
            </Link>
            <Link href="#" color="inherit" sx={{ color: "white", "&:hover": { color: "#febd69" } }}>
              $ - USD
            </Link>
          </Box>
        </Box>

        {/* Services (Bottom Row) */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          flexWrap="wrap"
          gap={2}
          mt={4}
        >
          {[
            "Ali መ Fennix Music",
            "Ali መ Fennix Ads",
            "Ali መ Fennix Business",
            "AFS",
            "IMDb",
            "Audible",
            "Prime Video",
          ].map((service, idx) => (
            <Link
              key={idx}
              href="#"
              color="inherit"
              sx={{
                color: "white",
                fontSize: "0.8rem",
                "&:hover": { color: "#febd69" },
              }}
            >
              {service}
            </Link>
          ))}
        </Box>

        {/* Copyright */}
        <Box textAlign="center" mt={4} fontSize="0.8rem" sx={{ color: "rgba(255,255,255,0.7)" }}>
          <Typography>
            © {year} {company.name} - All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

Footer.defaultProps = {
  company: { name: "Ali መ Finnix", href: "https://www.Aliመfennix.com" },
};

Footer.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  }),
};

export default Footer;
