import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

function Sidenav({ color, brand, brandName, routes }) {
  const [isOpen, setIsOpen] = useState(false);
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const toggleSidenav = () => setIsOpen(!isOpen);
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  // Subscription plans
  const plans = {
    basic: {
      name: "Basic",
      price: 9.99,
      period: "month",
      features: [
        "Basic marketplace access",
        "Standard customer support",
        "Basic analytics",
        "Up to 100 products"
      ],
      popular: false
    },
    pro: {
      name: "Professional",
      price: 29.99,
      period: "month",
      features: [
        "Advanced marketplace features",
        "Priority customer support",
        "Advanced analytics & insights",
        "Unlimited products",
        "Custom branding",
        "API access"
      ],
      popular: true
    },
    enterprise: {
      name: "Enterprise",
      price: 99.99,
      period: "month",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "White-label solution",
        "Advanced security features",
        "24/7 phone support"
      ],
      popular: false
    }
  };

  const handleUpgrade = () => {
    setUpgradeOpen(true);
  };

  const handleCloseUpgrade = () => {
    setUpgradeOpen(false);
  };

  const handlePayment = async () => {
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setUpgradeOpen(false);
      
      // Reset form
      setSelectedPlan("basic");
      setPaymentMethod("card");
    }, 2000);
  };

  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, href, route }) => {
    if (type === "collapse") {
      return href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink key={key} to={route}>
          <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
        </NavLink>
      );
    } else if (type === "title") {
      return (
        <MDTypography
          key={key}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </MDTypography>
      );
    } else if (type === "divider") {
      return <Divider key={key} />;
    }

    return null;
  });

  return (
    <>
      {/* Hamburger Button */}
      <MDBox
        sx={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          zIndex: 1400,
        }}
      >
        <Icon sx={{ cursor: "pointer", color: "white", fontSize: "2rem" }} onClick={toggleSidenav}>
          menu
        </Icon>
      </MDBox>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <MDBox
          onClick={toggleSidenav}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1399,
          }}
        />
      )}

      {/* Sidebar drawer */}
      <SidenavRoot
        variant="permanent"
        sx={{
          transform: isOpen ? "translateX(0)" : "translateX(-300px)",
          transition: "transform 0.3s ease-in-out",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 1401,
          width: "250px",
        }}
      >
        <MDBox pt={3} pb={1} px={4} textAlign="center">
          <MDBox display="flex" alignItems="center" justifyContent="space-between">
            <MDBox component={NavLink} to="/" display="flex" alignItems="center">
              {brand && <MDBox component="img" src={brand} alt="Brand" width="2rem" />}
              <MDBox sx={(theme) => sidenavLogoLabel(theme, {})}>
                <MDTypography component="h6" variant="button" fontWeight="medium">
                  {brandName}
                </MDTypography>
              </MDBox>
            </MDBox>
            <Icon onClick={toggleSidenav} sx={{ cursor: "pointer", ml: 2, fontSize: "1.5rem" }}>
              close
            </Icon>
          </MDBox>
        </MDBox>

        <Divider />
        <List>{renderRoutes}</List>

        <MDBox p={2} mt="auto">
          <MDButton
            onClick={handleUpgrade}
            variant="gradient"
            color={color}
            fullWidth
            startIcon={<Icon>star</Icon>}
          >
            Upgrade Now
          </MDButton>
        </MDBox>
      </SidenavRoot>

      {/* Upgrade Modal */}
      <Dialog
        open={upgradeOpen}
        onClose={handleCloseUpgrade}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
            backdropFilter: "blur(20px)",
          }
        }}
      >
        <DialogTitle sx={{ textAlign: "center", pb: 1 }}>
          <MDTypography variant="h4" fontWeight="bold" color="primary">
            🚀 Upgrade Your Experience
          </MDTypography>
          <MDTypography variant="body2" color="text.secondary">
            Choose the perfect plan for your business
          </MDTypography>
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={3}>
            {/* Plan Selection */}
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">
                  <MDTypography variant="h6" fontWeight="bold" mb={2}>
                    Select Your Plan
                  </MDTypography>
                </FormLabel>
                <RadioGroup
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  sx={{ display: "flex", flexDirection: "row", gap: 2 }}
                >
                  {Object.entries(plans).map(([key, plan]) => (
                    <Card
                      key={key}
                      sx={{
                        flex: 1,
                        cursor: "pointer",
                        border: selectedPlan === key ? "2px solid #1976d2" : "1px solid #e0e0e0",
                        transition: "all 0.3s ease",
                        "&:hover": { transform: "translateY(-4px)", boxShadow: 4 },
                        position: "relative",
                      }}
                      onClick={() => setSelectedPlan(key)}
                    >
                      {plan.popular && (
                        <Chip
                          label="Most Popular"
                          color="primary"
                          size="small"
                          sx={{
                            position: "absolute",
                            top: -10,
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 1,
                          }}
                        />
                      )}
                      <CardContent sx={{ pt: plan.popular ? 3 : 2 }}>
                        <MDTypography variant="h5" fontWeight="bold" textAlign="center">
                          {plan.name}
                        </MDTypography>
                        <MDTypography variant="h4" fontWeight="bold" textAlign="center" color="primary">
                          ${plan.price}
                          <MDTypography component="span" variant="body2" color="text.secondary">
                            /{plan.period}
                          </MDTypography>
                        </MDTypography>
                        <Box sx={{ mt: 2 }}>
                          {plan.features.map((feature, index) => (
                            <MDTypography key={index} variant="body2" sx={{ mb: 1, display: "flex", alignItems: "center" }}>
                              <Icon sx={{ fontSize: 16, mr: 1, color: "success.main" }}>check</Icon>
                              {feature}
                            </MDTypography>
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                        <Radio value={key} />
                      </CardActions>
                    </Card>
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Payment Method */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Payment Method</InputLabel>
                <Select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  label="Payment Method"
                >
                  <MenuItem value="card">Credit/Debit Card</MenuItem>
                  <MenuItem value="paypal">PayPal</MenuItem>
                  <MenuItem value="bank">Bank Transfer</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Payment Details */}
            {paymentMethod === "card" && (
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Card Number"
                      placeholder="1234 5678 9012 3456"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Expiry Date"
                      placeholder="MM/YY"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      placeholder="123"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}

            {/* Summary */}
            <Grid item xs={12}>
              <Card sx={{ background: "rgba(25, 118, 210, 0.1)" }}>
                <CardContent>
                  <MDTypography variant="h6" fontWeight="bold" mb={2}>
                    Order Summary
                  </MDTypography>
                  <MDBox display="flex" justifyContent="space-between" mb={1}>
                    <MDTypography variant="body2">{plans[selectedPlan].name} Plan</MDTypography>
                    <MDTypography variant="body2">${plans[selectedPlan].price}/{plans[selectedPlan].period}</MDTypography>
                  </MDBox>
                  <MDBox display="flex" justifyContent="space-between" mb={1}>
                    <MDTypography variant="body2">Tax</MDTypography>
                    <MDTypography variant="body2">${(plans[selectedPlan].price * 0.1).toFixed(2)}</MDTypography>
                  </MDBox>
                  <Divider sx={{ my: 1 }} />
                  <MDBox display="flex" justifyContent="space-between">
                    <MDTypography variant="h6" fontWeight="bold">Total</MDTypography>
                    <MDTypography variant="h6" fontWeight="bold" color="primary">
                      ${(plans[selectedPlan].price * 1.1).toFixed(2)}/{plans[selectedPlan].period}
                    </MDTypography>
                  </MDBox>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 0 }}>
          <MDButton onClick={handleCloseUpgrade} variant="outlined">
            Cancel
          </MDButton>
          <MDButton
            onClick={handlePayment}
            variant="contained"
            color="primary"
            loading={loading}
            disabled={loading}
            startIcon={loading ? <Icon>hourglass_empty</Icon> : <Icon>payment</Icon>}
          >
            {loading ? "Processing..." : `Upgrade to ${plans[selectedPlan].name}`}
          </MDButton>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          🎉 Successfully upgraded to {plans[selectedPlan].name} plan! Welcome to the premium experience!
        </Alert>
      </Snackbar>
    </>
  );
}

Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
