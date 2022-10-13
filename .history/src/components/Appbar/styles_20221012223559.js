import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  btn: {
    marginLeft: `auto`,
  },
  search:{
    position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  }
}));
