import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  drawer: {
    height: "100vh",
    backgroundColor: "#FFFFFF",
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
  },
  top: {
    backgroundColor: "red",
  },
  header: {
    height: "100px",
    backgroundColor: "#ccc",
  },
  logo: {},
}));
