import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: `275px`,
  },
  header: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: `0px`,
  },
  title: {
    margin: `0`,
    fontSize: `20px`,
    fontWeight: `bold`,
    align: `center`,
  },
  addBtn: {
    padding: `0`,
    margin: `0`,
  },
}));
