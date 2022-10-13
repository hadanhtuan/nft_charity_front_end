import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  widget: {
    display: "flex",
    width: `275px`,
    height: `150px`,
    padding: `24px`,
    gap: `16px`,
    justifyContent: `space-between`,
    backgroundColor: "white",
    borderRadius: "px",
  },
  cardInfomation: {
    backgroundColor: `red`,
    width: `94px`,
    height: `136px`,
    display: `flex`,
    flexDirection: `row`,
  },
  card_content: {
    padding: `0`,
    margin: `0`,
    height: `40px`,
    width: `100%`,
  },
}));
