import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  widget: {
    display: "flex",
    width: `275px`,
    height: `178px`,
    padding: `24px`,
    gap: `16px`,
    justifyContent: `space-between`,
    backgroundColor: "white",
    borderRadius: "10p",
  },
  cardInfomation: {
    backgroundColor: `red`,
    width: `94px`,
    height: `136px`,
    display: `flex`,
    flexDirection: `row`,
  },
}));
