import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  widget: {
    display: "flex",
  },
  widget_left: {
    flex: `1`,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
  },
  widget_icon: {
    width: "40px",
    flex: `1`,
  },
}));
