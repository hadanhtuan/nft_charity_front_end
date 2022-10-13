import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  widget: {
    display: "flex",
  },
  widget_left: {
    flex: `1`,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
  },
  widget_icon: {
    width: "%",
  },
}));
