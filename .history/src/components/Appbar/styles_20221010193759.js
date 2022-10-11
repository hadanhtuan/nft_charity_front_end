import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appbar: {
    position: "static",
    color: `#00261C`,
    boxShadow: `none`,
    height: `60px`,
  },

  leftContainer: {
    display: `flex`,
    alignItems: `center`,
  },
  centerContainer: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  },

  rightContainer: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `flex-end`,
    paddingRight: `20px`,
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
