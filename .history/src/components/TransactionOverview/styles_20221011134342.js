import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    height: `300px`,
    width: `calc(100% - 90px)`,
    backgroundColor: `red`,
  },
  card__header: {
    padding: `20px`,
    backgroundColor: `#f5f5f5`,
  },
  card__title: {
    margin: `0`,
    fontSize: `20px`,
    fontWeight: `bold`,
  },
  card__result: {
    margin: `0`,
    fontSize: `14px`,
    fontWeight: `bold`,
  },

  card__groupBtn: {
    display: `flex`,
    align
    backgroundColor: `#ccc`,
  },
}));
