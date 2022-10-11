import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appbar: {
    position: "static",
    color: `#00261C`,
    backgroundColor: `red`,
    boxShadow: `none`,
    height: `60px`,
  },

  leftContainer: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
    paddingLeft: `20px`,
  },
  centerContainer: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  },

  rightContainer: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
  },
  connect: {
    fontSize: `14px`,
  },
  account: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
  },
}));
