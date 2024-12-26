// Header.tsx
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import logoLight from "../assets/logo-light.png";
import Orck from "../assets/flagOrc.png";
import Ua from "../assets/flagUa.png";
import Uk from "../assets/flagUk.png";
import { MAIN_COLORS } from "../root/color";

const Header: React.FC = () => {
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState<null | HTMLElement>(null);
  const [language, setLanguage] = React.useState("English");

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    handleLanguageMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        backgroundColor: MAIN_COLORS.headerBG,
        color: MAIN_COLORS.clrWhite,
        paddingLeft:"100px",
        paddingRight:"100px"
      }}
    >
      <Toolbar>
        {/* Логотип */}
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={logoLight}
            alt="Logo"
            style={{ height: "40px" }}
          />
        </Box>

        {/* Навигация */}
        <Box sx={{ display: "flex", alignItems: "center", marginRight: "450px", gap: "35px" }}>
          <Button color="inherit">Search</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Pages</Button>
        </Box>

        {/* Меню выбора языка */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            color="inherit"
            onClick={handleLanguageMenuOpen}
            sx={{ textTransform: "none", width: "100px" }}
          >
            <img
              src={
                language === "Русский"
                  ? Orck
                  : language === "Українська"
                  ? Ua
                  : Uk
              }
              alt={`${language} flag`}
              style={{ height: "20px", marginRight: "8px" }}
            />
            {language}
          </Button>
          <Menu
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={handleLanguageMenuClose}
          >
            <MenuItem onClick={() => handleLanguageChange("Русский")}>
              <img
                src={Orck}
                alt="Русский"
                style={{ height: "20px", marginRight: "8px" }}
              />
              Русский
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("Українська")}>  
              <img
                src={Ua}
                alt="Українська"
                style={{ height: "20px", marginRight: "8px" }}
              />
              Українська
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("English")}>  
              <img
                src={Uk}
                alt="English"
                style={{ height: "20px", marginRight: "8px" }}
              />
              English
            </MenuItem>
          </Menu>

          {/* Кнопка входа */}
          <Button color="inherit">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

