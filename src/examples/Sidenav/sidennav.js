import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

const SidenavRoot = styled(Drawer)(({ theme }) => ({
  width: "250px",
  flexShrink: 0,
  whiteSpace: "nowrap",
  backgroundColor: theme.palette.background.paper,
  overflowX: "hidden",
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default SidenavRoot;
