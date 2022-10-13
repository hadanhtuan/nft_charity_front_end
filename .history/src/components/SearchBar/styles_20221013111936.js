import { makeStyles } from "@mui/styles";
import { styled, alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  Search: {
    width: "100%",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
  },
}));
