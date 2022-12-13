import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import useDebounce from './useDebounce';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.12),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  height: '45px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
  border: '1px solid #E5E5E5',
  borderRadius: '12px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    fontSize: '1rem',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        // width: "30ch",
      },
    },
  },
}));

export default function MySearch() {
  const [valueInput, setValueInput] = useState('');

  const history = useHistory();

  const debounced = useDebounce(valueInput, 800);

  const handleOnChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setInputValue(searchValue);
    }
  };

  useEffect(() => {
    history.push(`/admin/search/${debounced}`);
  }, [debounced]);
  return (
    <Search className="theSearch" onChange={handleOnChange}>
      <SearchIconWrapper className="searchIcon">
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase className="searchInput" placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </Search>
  );
}
