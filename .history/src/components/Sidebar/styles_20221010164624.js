import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  drawer: {
    height: "100vh",
    backgroundColor: "#FFFFFF",
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
  },
  drawer__top: {
    backgroundColor: "red",
  },
  drawer__header: {
    height: "100px",
    backgroundColor: "#ccc",
  },
  drawer__logo: {},
}));