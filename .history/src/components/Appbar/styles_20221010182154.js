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
    justifyContent: `space-around`,
  },
}));
