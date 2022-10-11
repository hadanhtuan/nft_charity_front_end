import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: `calc(100% - 60px)`,
  },
  box: {
    padding: `10px 10px`,
  },
  box_title: {
    fontSize: `20px`,
    fontWeight: `bold`,
  },
}));
