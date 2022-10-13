import { makeStyles } from "@mui/styles";
import { styled, alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  Search: {
    marginLeft: `auto`,
    backgroundColor: `rgba(255, 255, 255, 1)`,
    "&:hover": {
      backgroundColor: `rgba(255, 255, 255, 0.6)`,
    },
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
      width: "0px",
    },
  },
}));
