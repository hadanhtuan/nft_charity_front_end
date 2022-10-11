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
  drawer__header: {},
  drawer__logo: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    margin: `22px 14px 24px 15px`,
  },
  drawer__bottom: {},
}));
