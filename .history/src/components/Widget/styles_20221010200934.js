import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  widget: {
    display: "inline-flex",
    width: `275px`,
    height: `178px`,
    borderRadius: `30px`,
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
