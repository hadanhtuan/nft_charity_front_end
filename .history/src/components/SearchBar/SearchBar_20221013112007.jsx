import * as React from "react";
import { Box } from "@mui/material";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./styles";
import { ThemeConsumer } from "styled-components";
export default function SearchBar() {
  const classes = useStyles<ThemeConsumer>();
  return (
    <Box className={classes.Search}>
      <Box className={classes.SearchIconWrapper}>
        <SearchIcon />
      </Box>
      <InputBase className={classes.StyledInputBase}></InputBase>
    </Box>
  );
}
