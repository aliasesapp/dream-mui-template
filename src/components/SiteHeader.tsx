"use client";

import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { LogoIcon } from "./Icons";
import Typography from "@mui/material/Typography";
import { ThemeToggle } from "@/components/ThemeToggle";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { LinkedIn, X } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  backdropFilter: "blur(24px)",
  borderBottom: "1px solid",
  borderRadius: "0px",
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: "none",
}));

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 1,
      }}
    >
      <StyledToolbar variant="dense" disableGutters>
        <Container maxWidth="xl">
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              p: 1,
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                gap: 1,
                flexGrow: 1,
              }}
            >
              <Box sx={{ width: 140 }}>
                <LogoIcon />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: 0.75 }}
                // hide on mobile
                display={{ xs: "none", md: "block" }}
              >
                from Aliases
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <IconButton
                size="small"
                component={NextLink}
                href={siteConfig.links.linkedin}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                size="small"
                component={NextLink}
                href={siteConfig.links.twitter}
              >
                <X />
              </IconButton>
              <ThemeToggle />
            </Box>
            <Box sx={{ display: "none" }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>
                  <Divider sx={{ my: 3 }} />
                  <MenuItem>Features</MenuItem>
                  <MenuItem>Testimonials</MenuItem>
                  <MenuItem>Highlights</MenuItem>
                  <MenuItem>Pricing</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                  <MenuItem>Blog</MenuItem>
                  <MenuItem>
                    <Button color="primary" variant="contained" fullWidth>
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button color="primary" variant="outlined" fullWidth>
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Box>
        </Container>
      </StyledToolbar>
    </AppBar>
  );
}
