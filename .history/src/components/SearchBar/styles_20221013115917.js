import { makeStyles } from "@mui/styles";
import { styled, alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  Search: {
    width: "20%",
    backgroundColor: `rgba(255, 255, 255, 1)`,

    "&:hover": {
      width: "30%",
      backgroundColor: `rgba(255, 255, 255, 0.55)`,
    },
    transition: `ease-in-out 0.4s`,
   
  },
  SearchIconWrapper: {
    padding: `0 2px`,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
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
