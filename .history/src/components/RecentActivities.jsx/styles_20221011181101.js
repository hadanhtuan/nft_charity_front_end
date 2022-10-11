import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: `calc(100% - 60px)`,
  },
  box: {
    height: "100%",
    width: "100%",
    padding: `0px 10px`,
    display: "flex",
    flexDirection: "column",
    
  },
  box_title: {
    fontSize: `20px`,
    fontWeight: `bold`,
  },
  box_list: {
    display: `flex`,
  },
  list: {},
  listItem: {
    display: `flex`,
    height: `fit-content`,
    padding: `0`,
    margin: `0`,
  },
}));
