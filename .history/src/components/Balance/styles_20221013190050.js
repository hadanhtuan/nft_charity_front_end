import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    padding: `20px`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
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
    fontSize: `24px`,
    fontWeight: `bold`,
    color: `#5A55D2`,
  },
  img: {
    display: `flex`,
    alignContent: `flex-end`,
    justifyContent: `flex-start`,
  },
  cardbackground: {
    width: `50%`,
  },
}));
