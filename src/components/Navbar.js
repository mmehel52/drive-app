import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/DriverContext";

const Navbar = () => {
  const { driver } = useGlobalContext();
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h3">Driver App</Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Tabs
              onChange={(e, val) => setValue(val)}
              value={value}
              textColor="inherit"
            >
              <Tab to="/client" label="Client" LinkComponent={Link} />
              {!driver && (
                <Tab to="/driver" label="Driver" LinkComponent={Link} />
              )}
              {driver && <Tab label={driver?.name} />}

              {driver && <Tab to="/" label="Logout" LinkComponent={Link} />}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
