import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@material-ui/core";
import Account from "../Account/Account";
import { Grid } from "@mui/material";
import useStyles from "./styles";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.65),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container className={classes.appbar}>
      <Grid item className={classes.leftContainer} md={4}>
        First part
      </Grid>
      <Grid item className={classes.centerContainer} align="center" md={4}>
        Second part
      </Grid>
      <Grid item className={classes.rightContainer} align="right" md={4}>
        Third part
      </Grid>
    </Grid>
    // <React.Fragment>
    //   <AppBar
    //     position="static"
    //     maxWidth={true}
    //     sx={{
    //       display: "flex",
    //       color: `#00261C`,
    //       backgroundColor: `transparent`,
    //       boxShadow: `none`,
    //       anchor: `top`,
    //     }}
    //   >
    //     <Toolbar sx={{ justifyContent: "space-between" }}>
    //       {/* this is 'logo' part */}
    //       <Typography variant="h6">Dashboard</Typography>

    //       {/* this is search bar */}
    //       <Search>
    //         <SearchIconWrapper>
    //           <SearchIcon />
    //         </SearchIconWrapper>
    //         <StyledInputBase
    //           placeholder="Search…"
    //           inputProps={{ "aria-label": "search" }}
    //         />
    //       </Search>

    //       {/* this is right part of the appbar */}
    //       <Box
    //         sx={{
    //           display: `flex`,
    //           justifyContent: "space-between",
    //           alignItems: `center`,
    //         }}
    //       >
    //         {/*this is the button connect wallet */}
    //         <Button>Connect Wallet</Button>

    //         {/* this is name of account */}
    //         <Typography variant="h8" sx={{ marginLeft: `15px` }}>
    //           Pham Quang Hoa
    //         </Typography>

    //         {/* this is avatar of account */}
    //         <Account />
    //       </Box>
    //     </Toolbar>
    //   </AppBar>
    // </React.Fragment>
  );
}
