import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

// @mui icons
import CelebrationIcon from "@mui/icons-material/Celebration";
import PaletteIcon from "@mui/icons-material/Palette";
import SettingsIcon from "@mui/icons-material/Settings";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AnimationIcon from "@mui/icons-material/Animation";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import SpeedIcon from "@mui/icons-material/Speed";
import ContrastIcon from "@mui/icons-material/Contrast";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import BrushIcon from "@mui/icons-material/Brush";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SaveIcon from "@mui/icons-material/Save";
import RefreshIcon from "@mui/icons-material/Refresh";
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setWhiteSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
} from "context";

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`configurator-tabpanel-${index}`}
      aria-labelledby={`configurator-tab-${index}`}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

function Configurator() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    openConfigurator,
    fixedNavbar,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [disabled, setDisabled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  // Advanced customization states
  const [fontSize, setFontSize] = useState(16);
  const [cardRadius, setCardRadius] = useState(12);
  const [showConfetti, setShowConfetti] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [colorScheme, setColorScheme] = useState("default");
  const [layoutStyle, setLayoutStyle] = useState("modern");
  const [accessibilityMode, setAccessibilityMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showAnimations, setShowAnimations] = useState(true);
  const [glassmorphism, setGlassmorphism] = useState(true);
  const [gradientIntensity, setGradientIntensity] = useState(50);
  const [shadowIntensity, setShadowIntensity] = useState(20);
  const [spacing, setSpacing] = useState(16);
  const [fontFamily, setFontFamily] = useState("Inter");

  // Color schemes
  const colorSchemes = {
    default: { primary: "#1976d2", secondary: "#dc004e" },
    ocean: { primary: "#006064", secondary: "#00acc1" },
    sunset: { primary: "#ff6f00", secondary: "#ff8f00" },
    forest: { primary: "#2e7d32", secondary: "#4caf50" },
    royal: { primary: "#512da8", secondary: "#7b1fa2" },
    coral: { primary: "#d32f2f", secondary: "#f44336" },
  };

  useEffect(() => {
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }
    window.addEventListener("resize", handleDisabled);
    handleDisabled();
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => {
    setTransparentSidenav(dispatch, true);
    setWhiteSidenav(dispatch, false);
  };
  const handleWhiteSidenav = () => {
    setWhiteSidenav(dispatch, true);
    setTransparentSidenav(dispatch, false);
  };
  const handleDarkSidenav = () => {
    setWhiteSidenav(dispatch, false);
    setTransparentSidenav(dispatch, false);
  };
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
  const handleDarkMode = () => setDarkMode(dispatch, !darkMode);

  const handleSaveTheme = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
    
    const themeData = {
      fontSize,
      cardRadius,
      animationSpeed,
      showAnimations,
      glassmorphism,
      gradientIntensity,
      shadowIntensity,
    };
    
    try {
      localStorage.setItem("aliFennixTheme", JSON.stringify(themeData));
      console.log("Theme saved successfully!");
    } catch (error) {
      console.warn("Could not save theme to localStorage:", error);
      // Fallback: Show success message even if localStorage fails
      alert("Theme settings applied! (Note: Settings will reset on page refresh)");
    }
  };

  const handleResetTheme = () => {
    setFontSize(16);
    setCardRadius(12);
    setAnimationSpeed(1);
    setShowAnimations(true);
    setGlassmorphism(true);
    setGradientIntensity(50);
    setShadowIntensity(20);
    
    try {
      localStorage.removeItem("aliFennixTheme");
      console.log("Theme reset successfully!");
    } catch (error) {
      console.warn("Could not clear localStorage:", error);
    }
  };

  const handleExportTheme = () => {
    const themeData = {
      fontSize,
      cardRadius,
      animationSpeed,
      showAnimations,
      glassmorphism,
      gradientIntensity,
      shadowIntensity,
    };
    
    try {
      const dataStr = JSON.stringify(themeData, null, 2);
      const dataBlob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "ali-fennix-theme.json";
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error exporting theme:", error);
      alert("Could not export theme. Please try again.");
    }
  };

  const handleImportTheme = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const themeData = JSON.parse(e.target.result);
          Object.keys(themeData).forEach(key => {
            if (typeof themeData[key] !== 'undefined') {
              const setter = eval(`set${key.charAt(0).toUpperCase() + key.slice(1)}`);
              setter(themeData[key]);
            }
          });
          console.log("Theme imported successfully!");
        } catch (error) {
          console.error("Error importing theme:", error);
          alert("Invalid theme file. Please check the file format.");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Drawer
      variant="temporary"
      open={openConfigurator}
      onClose={handleCloseConfigurator}
      anchor="right"
      sx={{
        zIndex: 1302,
        "& .MuiDrawer-paper": {
          width: 400,
          background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        },
      }}
    >
      {showConfetti && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 999,
            pointerEvents: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CelebrationIcon
            sx={{
              fontSize: 80,
              color: "warning.main",
              animation: "bounce 0.6s ease-in-out infinite alternate",
            }}
          />
        </Box>
      )}

      <MDBox
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          p: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -50,
            right: -50,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            animation: "pulse 2s infinite",
          }}
        />
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
        <MDBox>
            <MDTypography variant="h5" color="white" fontWeight="bold">
              <AutoAwesomeIcon sx={{ mr: 1, verticalAlign: "middle" }} />
              Theme Studio
            </MDTypography>
            <MDTypography variant="body2" color="rgba(255,255,255,0.8)">
              Customize your experience
          </MDTypography>
          </MDBox>
          <IconButton
            onClick={handleCloseConfigurator}
            sx={{ color: "white", "&:hover": { background: "rgba(255,255,255,0.1)" } }}
          >
            <Icon>close</Icon>
          </IconButton>
        </MDBox>
        </MDBox>

      <MDBox sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTab-root": {
              minWidth: "auto",
              px: 2,
              py: 1.5,
            },
          }}
        >
          <Tab
            icon={<PaletteIcon />}
            label="Colors"
            iconPosition="start"
            sx={{ fontSize: "0.75rem" }}
          />
          <Tab
            icon={<SettingsIcon />}
            label="Layout"
            iconPosition="start"
            sx={{ fontSize: "0.75rem" }}
          />
          <Tab
            icon={<AnimationIcon />}
            label="Effects"
            iconPosition="start"
            sx={{ fontSize: "0.75rem" }}
          />
          <Tab
            icon={<AccessibilityIcon />}
            label="Accessibility"
            iconPosition="start"
            sx={{ fontSize: "0.75rem" }}
          />
        </Tabs>
      </MDBox>

      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <TabPanel value={activeTab} index={0}>
        <MDBox>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <MDTypography variant="h6" display="flex" alignItems="center">
                  <BrushIcon sx={{ mr: 1 }} />
                  Color Schemes
                </MDTypography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {Object.entries(colorSchemes).map(([name, colors]) => (
                    <Grid item xs={6} key={name}>
                      <Paper
                        sx={{
                          p: 2,
                          cursor: "pointer",
                          border: colorScheme === name ? "2px solid #1976d2" : "1px solid #e0e0e0",
                          transition: "all 0.3s ease",
                          "&:hover": { transform: "translateY(-2px)", boxShadow: 3 },
                        }}
                        onClick={() => setColorScheme(name)}
                      >
                        <MDTypography variant="button" textTransform="capitalize" gutterBottom>
                          {name}
                        </MDTypography>
                        <Box display="flex" gap={1}>
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              background: colors.primary,
                            }}
                          />
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              background: colors.secondary,
                            }}
                          />
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <MDTypography variant="h6" display="flex" alignItems="center">
                  <ContrastIcon sx={{ mr: 1 }} />
                  Sidenav Colors
                </MDTypography>
              </AccordionSummary>
              <AccordionDetails>
                <MDBox display="flex" gap={1} flexWrap="wrap">
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                      sx={{
                        width: 32,
                        height: 32,
                        border: sidenavColor === color ? "2px solid #1976d2" : "1px solid #e0e0e0",
                        background: `linear-gradient(45deg, ${color}.main, ${color}.light)`,
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </MDBox>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <MDTypography variant="h6" display="flex" alignItems="center">
                  <ViewInArIcon sx={{ mr: 1 }} />
                  Theme Mode
                </MDTypography>
              </AccordionSummary>
              <AccordionDetails>
                <MDBox display="flex" justifyContent="space-between" alignItems="center">
                  <MDTypography variant="body2">Dark Mode</MDTypography>
                  <Switch checked={darkMode} onChange={handleDarkMode} />
                </MDBox>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                  <MDTypography variant="body2">High Contrast</MDTypography>
                  <Switch checked={highContrast} onChange={setHighContrast} />
                </MDBox>
              </AccordionDetails>
            </Accordion>
          </MDBox>
        </TabPanel>

        <TabPanel value={activeTab} index={1}>
          <MDBox>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <MDTypography variant="h6" display="flex" alignItems="center">
                  <FontDownloadIcon sx={{ mr: 1 }} />
                  Typography
                </MDTypography>
              </AccordionSummary>
              <AccordionDetails>
                <MDBox mb={3}>
                  <MDTypography variant="body2" gutterBottom>
                    Font Size: {fontSize}px
                  </MDTypography>
                  <Slider
                    value={fontSize}
                    min={12}
                    max={24}
                    step={1}
                    onChange={(_, v) => setFontSize(v)}
                    valueLabelDisplay="auto"
                  />
                </MDBox>
                <MDBox mb={3}>
                  <FormControl fullWidth>
                    <InputLabel>Font Family</InputLabel>
                    <Select
                      value={fontFamily}
                      onChange={(e) => setFontFamily(e.target.value)}
                      label="Font Family"
                    >
                      <MenuItem value="Inter">Inter</MenuItem>
                      <MenuItem value="Roboto">Roboto</MenuItem>
                      <MenuItem value="Open Sans">Open Sans</MenuItem>
                      <MenuItem value="Poppins">Poppins</MenuItem>
                      <MenuItem value="Montserrat">Montserrat</MenuItem>
                    </Select>
                  </FormControl>
                </MDBox>
                <MDBox>
                  <MDTypography variant="body2" gutterBottom>
                    Spacing: {spacing}px
                  </MDTypography>
                  <Slider
                    value={spacing}
                    min={8}
                    max={32}
                    step={4}
                    onChange={(_, v) => setSpacing(v)}
                    valueLabelDisplay="auto"
                  />
                </MDBox>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <MDTypography variant="h6" display="flex" alignItems="center">
                  <ViewInArIcon sx={{ mr: 1 }} />
                  Components
                </MDTypography>
              </AccordionSummary>
              <AccordionDetails>
                <MDBox mb={3}>
                  <MDTypography variant="body2" gutterBottom>
                    Card Radius: {cardRadius}px
                  </MDTypography>
                  <Slider
                    value={cardRadius}
                    min={0}
                    max={32}
                    step={2}
                    onChange={(_, v) => setCardRadius(v)}
                    valueLabelDisplay="auto"
                  />
                </MDBox>
                <MDBox display="flex" justifyContent="space-between" alignItems="center">
                  <MDTypography variant="body2">Fixed Navbar</MDTypography>
                  <Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
                </MDBox>
              </AccordionDetails>
            </Accordion>
          </MDBox>
        </TabPanel>

        <TabPanel value={activeTab} index={2}>
          <MDBox>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <MDTypography variant="h6" display="flex" alignItems="center">
                  <AnimationIcon sx={{ mr: 1 }} />
                  Animations
                </MDTypography>
              </AccordionSummary>
              <AccordionDetails>
                <MDBox mb={3}>
                  <MDTypography variant="body2" gutterBottom>
                    Animation Speed: {animationSpeed}x
                  </MDTypography>
                  <Slider
                    value={animationSpeed}
                    min={0.5}
                    max={2}
                    step={0.1}
                    onChange={(_, v) => setAnimationSpeed(v)}
                    valueLabelDisplay="auto"
                  />
                </MDBox>
                <MDBox display="flex" justifyContent="space-between" alignItems="center">
                  <MDTypography variant="body2">Show Animations</MDTypography>
                  <Switch checked={showAnimations} onChange={setShowAnimations} />
                </MDBox>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                  <MDTypography variant="body2">Reduced Motion</MDTypography>
                  <Switch checked={reducedMotion} onChange={setReducedMotion} />
                </MDBox>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <MDTypography variant="h6" display="flex" alignItems="center">
                  <BrushIcon sx={{ mr: 1 }} />
                  Visual Effects
                </MDTypography>
              </AccordionSummary>
              <AccordionDetails>
                <MDBox display="flex" justifyContent="space-between" alignItems="center">
                  <MDTypography variant="body2">Glassmorphism</MDTypography>
                  <Switch checked={glassmorphism} onChange={setGlassmorphism} />
                </MDBox>
                <MDBox mb={3}>
                  <MDTypography variant="body2" gutterBottom>
                    Gradient Intensity: {gradientIntensity}%
                  </MDTypography>
                  <Slider
                    value={gradientIntensity}
                    min={0}
                    max={100}
                    step={5}
                    onChange={(_, v) => setGradientIntensity(v)}
                    valueLabelDisplay="auto"
                  />
                </MDBox>
                <MDBox>
                  <MDTypography variant="body2" gutterBottom>
                    Shadow Intensity: {shadowIntensity}%
                  </MDTypography>
                  <Slider
                    value={shadowIntensity}
                    min={0}
                    max={100}
                    step={5}
                    onChange={(_, v) => setShadowIntensity(v)}
                    valueLabelDisplay="auto"
                  />
                </MDBox>
              </AccordionDetails>
            </Accordion>
        </MDBox>
        </TabPanel>

        <TabPanel value={activeTab} index={3}>
          <MDBox>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <MDTypography variant="h6" display="flex" alignItems="center">
                  <AccessibilityIcon sx={{ mr: 1 }} />
                  Accessibility Features
                </MDTypography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={accessibilityMode}
                        onChange={(e) => setAccessibilityMode(e.target.checked)}
                      />
                    }
                    label="Enhanced Accessibility Mode"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={highContrast}
                        onChange={(e) => setHighContrast(e.target.checked)}
                      />
                    }
                    label="High Contrast Mode"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={reducedMotion}
                        onChange={(e) => setReducedMotion(e.target.checked)}
                      />
                    }
                    label="Reduced Motion"
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <MDTypography variant="h6" display="flex" alignItems="center">
                  <SpeedIcon sx={{ mr: 1 }} />
                  Performance
          </MDTypography>
              </AccordionSummary>
              <AccordionDetails>
                <MDBox>
                  <Chip
                    label="Theme Optimized"
                    color="success"
                    icon={<SpeedIcon />}
                    sx={{ mr: 1, mb: 1 }}
                  />
                  <Chip
                    label="Accessibility Ready"
                    color="info"
                    icon={<AccessibilityIcon />}
                    sx={{ mr: 1, mb: 1 }}
                  />
                  <Chip
                    label="Mobile Responsive"
                    color="warning"
                    icon={<ViewInArIcon />}
                    sx={{ mb: 1 }}
                  />
                </MDBox>
              </AccordionDetails>
            </Accordion>
          </MDBox>
        </TabPanel>
      </Box>

          <MDBox
            sx={{
          p: 3,
          borderTop: "1px solid rgba(0,0,0,0.1)",
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MDButton
              variant="outlined"
              color="secondary"
              startIcon={<RefreshIcon />}
              onClick={handleResetTheme}
              fullWidth
            >
              Reset
            </MDButton>
          </Grid>
          <Grid item xs={6}>
            <MDButton
              variant="contained"
              color="warning"
              startIcon={<SaveIcon />}
              onClick={handleSaveTheme}
              fullWidth
            >
              Save
            </MDButton>
          </Grid>
          <Grid item xs={6}>
          <MDButton
            variant="outlined"
              color="info"
              startIcon={<DownloadIcon />}
              onClick={handleExportTheme}
            fullWidth
          >
              Export
          </MDButton>
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="import-theme">
              <MDButton
                variant="outlined"
                color="success"
                startIcon={<UploadIcon />}
                component="span"
                fullWidth
              >
                Import
              </MDButton>
            </label>
            <input
              id="import-theme"
              type="file"
              accept=".json"
              onChange={handleImportTheme}
              style={{ display: "none" }}
            />
          </Grid>
        </Grid>
      </MDBox>
    </Drawer>
  );
}

export default Configurator;