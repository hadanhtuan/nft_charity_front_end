import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },

  logo: {
    flexGrow: "1",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "20px",
  },
}));
