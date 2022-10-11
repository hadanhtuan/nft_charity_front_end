import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: `calc(100% - 60px)`,
  },
  box: {
    width: "100%",
    backgroundColor: "red",
    padding: `10px 10px`,
  },
  box_title: {
    fontSize: `20px`,
    fontWeight: `bold`,
  },
  box_list: {
    
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
  },
  list: {
    width: "100%",
    backgroundColor: "blue",
  },
}));
