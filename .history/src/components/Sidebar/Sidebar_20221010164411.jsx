import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CampaignIcon from "@mui/icons-material/Campaign";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from "../../assets/litecoin.svg";
import useStyles from "./styles";

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  return (
    <Box className={classes.drawer}>
      {/* reset css */}
      <CssBaseline />
      {/*logo va  option  */}
      <Box className="drawer--top">
        {/* start phan header */}
        <Box className="drawer__header">
          <Box className="drawer__logo">
            <img src={logo} />
            <Typography>This is logo</Typography>
          </Box>
        </Box>
        {/* end phan header */}
        <Divider />

        {/* start phan option */}
        <List>
          {
            <React.Fragment>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FormatListBulletedIcon />
                  </ListItemIcon>
                  <ListItemText primary="List NFT" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CampaignIcon />
                  </ListItemIcon>
                  <ListItemText primary="Campaign" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create Auction" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          }
        </List>
        <Divider />
      </Box>
      {/* footer */}
      <Box className="drawer--botton">this is bottom</Box>
    </Box>
  );
}
