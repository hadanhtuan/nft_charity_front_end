import { Tabs, Tab, Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MySearch from '../../../components/SearchBar/SearchBar';
import useDebounce from '../../../components/SearchBar/useDebounce';

function SearchBox() {
  const { inputText } = useParams();
  const [seachData, setSearchData] = useState('');

  const nftList = useSelector((state) => state.solidity.nftList);

  useEffect(() => {
    setSearchData(inputText);
  }, [inputText]);

  const [value, setValue] = useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5">Search NFT</Typography>
      <Box>
        <Box>
          <MySearch />
        </Box>
      </Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="NFTs " />
        <Tab value="two" label="Campaigns" />
        <Tab value="three" label="Auctions" />
      </Tabs>

      <Box className="resultBox">
        <Typography>Li'sli</Typography>
      </Box>
    </Box>
  );
}

export default SearchBox;
