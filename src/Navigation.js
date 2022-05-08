import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Badge, Popover } from "@mui/material";
import { Delete } from "@mui/icons-material";
import "./Navigation.css";
import { useState, useEffect } from "react";

export default function Navigation(props) {
  const { cartContent } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [badgeNumber, setBadgeNumber] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    let counter = 0;
    cartContent?.forEach((element) => {
      counter += element.amount;
    });
    setBadgeNumber(counter);
  }, [cartContent]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
            onClick={(e) => cartContent?.length > 0 && handleClick(e)}
          >
            <Badge badgeContent={badgeNumber} color="warning">
              <ShoppingCartRoundedIcon />
            </Badge>
          </IconButton>

          {cartContent?.length > 0 && (
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              PaperProps={{
                style: {
                  maxHeight: 300,
                  width: "40ch",
                },
              }}
            >
              {cartContent?.map((cartItem) => (
                <Typography
                  sx={{ p: 2 }}
                  className="cartItem"
                  key={cartItem?.id}
                >
                  <h4 className="amount">{cartItem?.amount}x</h4>
                  {cartItem?.title?.length > 30
                    ? cartItem?.title?.substring(0, 30) + `...`
                    : cartItem?.title}
                  <IconButton
                    size="large"
                    edge="start"
                    style={{ color: "black" }}
                    aria-label="delete"
                  >
                    <Delete />
                  </IconButton>
                </Typography>
              ))}
            </Popover>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// orange: #fe4702
