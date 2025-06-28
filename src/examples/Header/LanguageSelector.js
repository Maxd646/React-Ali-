import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Chip,
  Avatar,
  Divider,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Language, KeyboardArrowDown, Check, Translate } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const languages = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    direction: "ltr",
    isPopular: true,
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    direction: "ltr",
    isPopular: true,
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    direction: "ltr",
    isPopular: true,
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    direction: "ltr",
    isPopular: false,
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    direction: "ltr",
    isPopular: false,
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "🇵🇹",
    direction: "ltr",
    isPopular: false,
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
    direction: "ltr",
    isPopular: false,
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "🇨🇳",
    direction: "ltr",
    isPopular: true,
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    direction: "ltr",
    isPopular: false,
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "🇰🇷",
    direction: "ltr",
    isPopular: false,
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇸🇦",
    direction: "rtl",
    isPopular: false,
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳",
    direction: "ltr",
    isPopular: true,
  },
];

const LanguageSelector = ({ currentLanguage = "en", onLanguageChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearchTerm("");
  };

  const handleLanguageSelect = (languageCode) => {
    onLanguageChange(languageCode);
    handleClose();
  };

  const filteredLanguages = languages.filter(
    (lang) =>
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularLanguages = filteredLanguages.filter((lang) => lang.isPopular);
  const otherLanguages = filteredLanguages.filter((lang) => !lang.isPopular);

  return (
    <>
      <Tooltip title="Select Language">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <IconButton
            onClick={handleClick}
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.2)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
                {currentLang.flag}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "600",
                  color: "white",
                  display: { xs: "none", sm: "block" },
                }}
              >
                {currentLang.code.toUpperCase()}
              </Typography>
              <KeyboardArrowDown
                sx={{
                  color: "white",
                  transition: "transform 0.3s ease",
                  transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </Box>
          </IconButton>
        </motion.div>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 320,
            maxHeight: 500,
            borderRadius: 3,
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            overflow: "hidden",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* Header */}
        <Box
          sx={{
            p: 2,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 1 }}
          >
            <Translate />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Select Language
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Choose your preferred language
          </Typography>
        </Box>

        {/* Search */}
        <Box sx={{ p: 2, borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              p: 1,
              borderRadius: 2,
              bgcolor: "rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <Language sx={{ color: "text.secondary" }} />
            <input
              type="text"
              placeholder="Search languages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                flex: 1,
                fontSize: "0.9rem",
              }}
            />
          </Box>
        </Box>

        {/* Popular Languages */}
        {popularLanguages.length > 0 && (
          <Box sx={{ p: 1 }}>
            <Typography
              variant="subtitle2"
              sx={{
                px: 2,
                py: 1,
                color: "text.secondary",
                fontWeight: "600",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Popular Languages
            </Typography>
            {popularLanguages.map((language) => (
              <motion.div key={language.code} whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                <MenuItem
                  onClick={() => handleLanguageSelect(language.code)}
                  sx={{
                    borderRadius: 2,
                    m: 0.5,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(102, 126, 234, 0.1)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Box
                      sx={{
                        width: 32,
                        height: 24,
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        bgcolor: "rgba(0,0,0,0.05)",
                      }}
                    >
                      {language.flag}
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: "600" }}>
                          {language.name}
                        </Typography>
                        <Chip
                          label="Popular"
                          size="small"
                          sx={{
                            height: 16,
                            fontSize: "0.6rem",
                            bgcolor: "#4CAF50",
                            color: "white",
                          }}
                        />
                      </Box>
                    }
                    secondary={language.nativeName}
                    secondaryTypographyProps={{
                      sx: { fontSize: "0.8rem", color: "text.secondary" },
                    }}
                  />
                  {currentLanguage === language.code && (
                    <Check sx={{ color: "primary.main", ml: 1 }} />
                  )}
                </MenuItem>
              </motion.div>
            ))}
          </Box>
        )}

        {/* Other Languages */}
        {otherLanguages.length > 0 && (
          <>
            <Divider sx={{ mx: 2 }} />
            <Box sx={{ p: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  px: 2,
                  py: 1,
                  color: "text.secondary",
                  fontWeight: "600",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                All Languages
              </Typography>
              {otherLanguages.map((language) => (
                <motion.div key={language.code} whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                  <MenuItem
                    onClick={() => handleLanguageSelect(language.code)}
                    sx={{
                      borderRadius: 2,
                      m: 0.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "rgba(102, 126, 234, 0.1)",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 32,
                          height: 24,
                          borderRadius: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.2rem",
                          bgcolor: "rgba(0,0,0,0.05)",
                        }}
                      >
                        {language.flag}
                      </Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={language.name}
                      secondary={language.nativeName}
                      secondaryTypographyProps={{
                        sx: { fontSize: "0.8rem", color: "text.secondary" },
                      }}
                    />
                    {currentLanguage === language.code && (
                      <Check sx={{ color: "primary.main", ml: 1 }} />
                    )}
                  </MenuItem>
                </motion.div>
              ))}
            </Box>
          </>
        )}

        {/* No Results */}
        {filteredLanguages.length === 0 && (
          <Box sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              No languages found matching &quot;{searchTerm}&quot;
            </Typography>
          </Box>
        )}

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          You can search for a language by name, code, or country. For example: &quot;English&quot;,
          &quot;en&quot;, &quot;United States&quot;.
        </Typography>
      </Menu>
    </>
  );
};

LanguageSelector.propTypes = {
  currentLanguage: PropTypes.object.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default LanguageSelector;
