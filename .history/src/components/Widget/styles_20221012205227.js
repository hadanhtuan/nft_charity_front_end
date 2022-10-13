import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  widget: {
    display: "flex",
    gap: `16px`,
    backgroundColor: "white",
    borderRadius: "10px",
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
