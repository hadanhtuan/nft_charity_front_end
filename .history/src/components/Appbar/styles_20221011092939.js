import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appbar: {
    position: "static",
    color: `#00261C`,
    boxShadow: `none`,
    height: `60px`,
    padding: `0 40px`,
  },

  leftContainer: {
    display: `flex`,
    alignItems: `center`,
  },
  centerContainer: {
    display: `flex`,
    alignItems: `center`,
  },

  rightContainer: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `flex-end`,
  },

  account: {
    display: `flex`,
    alignItems: `center`,
  },
  btn: {
    textTransform: `lowercase`,
    color: `red`,
  },
  accountName: {
    paddingLeft: "10px",
  },
}));
