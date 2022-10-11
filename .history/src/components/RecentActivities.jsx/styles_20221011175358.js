import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: `calc(100% - 60px)`,
  },
  box: {
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    padding: `10px 10px`,
  },
  box_title: {
    fontSize: `20px`,
    fontWeight: `bold`,
  },
  box_list: {
    height: `100%`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
  },
  list: {
    backgroundColor: "blue",
    paddingTop: `5px`,
  },
  
}));
