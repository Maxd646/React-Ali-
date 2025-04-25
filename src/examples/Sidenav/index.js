import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

function Sidenav({ color, brand, brandName, routes }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidenav = () => setIsOpen(!isOpen);
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

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
            component="a"
            href="https://www.Ali fennix.com"
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            color={color}
            fullWidth
          >
            upgrade
          </MDButton>
        </MDBox>
      </SidenavRoot>
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
