import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  drawer: {
    height: "100vh",
    backgroundColor: "#FFFFFF",
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
    boxShadow: 4px 4px 40px rgba(0, 0, 0, 0.06);
  },
  drawer__top: {},
  drawer__header: {},
  drawer__logo: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    margin: `25px 0`,
  },

  logo__title: {
    fontSize: `1.5rem`,
    textTransform: `uppercase`,
  },
  drawer__bottom: {
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `flex-end`,
  },
  bottom__image: {
    width: `150px`,
    marginBottom: `30px`,
  },
}));
