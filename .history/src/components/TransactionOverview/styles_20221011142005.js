import { makeStyles } from "@mui/styles";
import styled from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  card: {
    height: `2px`,
    width: `calc(100% - 80px)`,
    backgroundColor: `red`,
  },
  card__header: {
    padding: `10px`,
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
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: `0px 10px`,
  },

  chart: {
    height: `100%`,
  },
}));
