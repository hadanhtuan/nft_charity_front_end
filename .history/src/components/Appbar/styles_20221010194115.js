import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appbar: {
    position: "static",
    color: `#00261C`,
    boxShadow: `none`,
    height: `0px`,
  },

  leftContainer: {
    display: `flex`,
    alignItems: `center`,
    paddingLeft: `40px`,
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
    paddingRight: `45px`,
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
