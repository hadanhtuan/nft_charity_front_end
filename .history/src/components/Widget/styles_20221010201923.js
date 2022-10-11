import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  widget: {
    display: "inline-flex",
    width: `275px`,
    height: `178px`,
    padding: `24px`,
    gap: `16px`,
    justifyContent: `space-between`,
    box-shadow: 1px 4px 5px 0px rgba(0,0,0,0.64);
-webkit-box-shadow: 1px 4px 5px 0px rgba(0,0,0,0.64);
-moz-box-shadow: 1px 4px 5px 0px rgba(0,0,0,0.64);
  },
  cardInfomation: {
    backgroundColor: `red`,
    width: `94px`,
    height: `136px`,
    display: `flex`,
    flexDirection: `row`,
  },
}));
