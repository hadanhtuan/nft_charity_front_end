import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    height: `300px`,
    width: `calc(100% - 90px)`,
    backgroundColor: theme.palette.primary.main
  },
}));
