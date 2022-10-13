import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  widget: {
    display: "flex",
    padding: theme.spacing(2),
  },
  widget_left: {
    flex: `1`,
    backgroundColor: "red",
  },
  widget_icon: {
    width: "40px",
  },
}));
