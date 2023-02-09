import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/DriverContext";

const Navbar = () => {
  const { driver, client, setDriver, setClient } = useGlobalContext();
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
              {driver && (
                <>
                  <Tab label={driver?.name} />
                  <Tab
                    to="/"
                    onClick={() => setDriver("")}
                    label="Logout"
                    LinkComponent={Link}
                  />
                </>
              )}
              {client && (
                <>
                  <Tab label={client?.name} />
                  <Tab
                    to="/"
                    onClick={() => setClient("")}
                    label="Logout"
                    LinkComponent={Link}
                  />
                </>
              )}
              {!client && !driver && (
                <>
                  <Tab to="/client" label="Client" LinkComponent={Link} />

                  <Tab to="/driver" label="Driver" LinkComponent={Link} />
                </>
              )}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
