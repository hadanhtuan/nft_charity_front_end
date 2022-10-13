import { makeStyles } from "@mui/styles";
import { styled, alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  Search: {
    backgroundColor: `rgba(255, 255, 255, 1)`,

    
    transition: `ease-in-out 0.4s`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  SearchIconWrapper: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  StyledInputBase: {
    color: "inherit",
    "&.MuiInputBase-input": {
      padding: `8px 8px 8px 0`,
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + 32px)`,
      width: "100%",
      //   [theme.breakpoints.up("sm")]: {
      //     width: "30px",
      //     "&:focus": {
      //       width: "50px",
      //     },
      //   },
    },
  },
}));
