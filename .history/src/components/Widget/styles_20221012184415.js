import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  widget: {
    display: "flex",
    width: `100%`,
    height: `100`,
    padding: `24px`,
    gap: `16px`,
    justifyContent: `space-between`,
    backgroundColor: "white",
    borderRadius: "8px",
  },
  cardInfomation: {
    backgroundColor: `red`,
    width: `94px`,
    height: `136px`,
    display: `flex`,
    flexDirection: `row`,
  },
}));
