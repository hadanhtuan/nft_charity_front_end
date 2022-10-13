import { makeStyles } from "@mui/styles";
import { styled, alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  Search: {
    width: "100%",
    backgroundColor: `rgba(255, 255, 255, 1)`,
    "&:hover": {
      backgroundColor: `rgba(255, 255, 255, 0.55)`,
    },
    marginLeft: 0,
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
    "& .MuiInputBase-input": {
      padding: `8px 8px 8px 0`,
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + )`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  },
}));
