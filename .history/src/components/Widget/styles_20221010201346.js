import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  widget: {
    width: `275px`,
    height: `178px`,
    display: "inline-flex",
    borderRadius: `16px`,
    padding: `24px`,
    gap: `16px`,
    justifyContent: `space-between`,
    backgroundColor: `#cccc`,
  },
  cardInfomation: {
    backgroundColor: `red`,
    width: `94px`,
    height: `136px`,
    display: `flex`,
    flexDirection: `row`,
  },
}));
