import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: `275px`,
    padding: `20px`,
  },
  header: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `flex-start`,
  },
  title: {
    margin: `0`,
    fontSize: `20px`,
    fontWeight: `bold`,
  },
  addBtn: {
    padding: `0`,
    margin: `0`,
  },
  body: {},
  bodyUnit: {
    display: `flex`,
    justifyContent: `flex-start`,
    alignItems: `center`,
  },
  dollar: {
    color: `#5A55D2`,
    fontSize: `20px`,
  },
  dollar_title: {
    margin: `0`,
  },
}));
