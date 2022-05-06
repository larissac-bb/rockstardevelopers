import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#e6e6e6" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <span style={{ color: "black" }}>Shopping</span>
            <span style={{ color: "#fe4702" }}>Experience</span>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            style={{ color: "black" }}
            aria-label="cart"
          >
            <ShoppingCartRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// orange: #fe4702
