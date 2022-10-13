import { makeStyles } from "@mui/styles";
import { styled, alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  Search: {
    width: "100%",
    backgroundColor: `rgba(255, 255, 255, 1)`,
    "&:hover": {
      backgroundColor: `rgba(255, 255, 255, 0.55)`,
    },
  },
}));
