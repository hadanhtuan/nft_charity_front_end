import * as React from "react";
import { Box } from "@mui/material";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import useS
export default function SearchBar() {
  return (
    <Box className={classes.Search}>
      <Box className={classes.SearchIconWrapper}>
        <SearchIcon />
      </Box>
      <InputBase className={classes.StyledInputBase}></InputBase>
    </Box>
  );
}
