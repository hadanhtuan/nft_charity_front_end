import { makeStyles } from "@mui/styles";
import back from "../../assets/back.svg";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    backgroundColor: "#EFF3FD",
    backgroundImage: `url(${back})`,
  },
  page: {
    display: `flex`,
    flexDirection: `column`,
    flexGrow: `1`,
  },
  widgets: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
  },
  transAndBal: {
    marginTop: `20px`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
  },
  recentAct: {
    marginTop: `20px`,
  },
}));
