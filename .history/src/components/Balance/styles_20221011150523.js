import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: `275px`,
    padding: `20px`,
  },
  header: {
    height: `40px`,
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
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
  body: {
    marginTop: `10px`,
  },
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
    fontSize: `14px`,
  },
  bodyValue: {
    margin: `0`,
    fontSize: `20px`,
    fontWeight: `bold`,
    color: `#5A55D2`,
  },
  img: {
    display: `flex`,
    alignContent: `flex-end`,
  },
  cardbackground: {
    width: `%`,
  },
}));
