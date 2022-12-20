import { Tabs, Tab, Box, Button, Typography, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCamp } from '../../../apis';
import MyNFTInfo from '../../../components/NFT_info/NFT_info';
import MySearch from '../../../components/SearchBar/SearchBar';
import useDebounce from '../../../components/SearchBar/useDebounce';

function SearchBox() {
  const { searchInput } = useParams();

  const { nftList } = useSelector((state) => state.solidity);
  const { campaigns } = useSelector((state) => state.campaign); //lay campaigns tu store

  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setIsLoading(true);
    setValue(newValue);
  };

  useEffect(() => {
    console.log('some value change');
    console.log(searchInput);
    setIsLoading(true);
    if (value == 'one') {
      let nftResult = [];
      if (searchInput == '@all') {
        nftResult = nftList;
      } else {
        for (let i = 0; i < nftList.length; i++) {
          if (nftList[i].name.toLowerCase().includes(searchInput.toLowerCase())) {
            nftResult.push(nftList[i]);
          }
        }
      }
      setResult(nftResult);
    } else {
      console.log('update value for campaings');
      let camps = [];
      if (searchInput == '@all') {
        camps = campaigns;
      } else {
        for (let i = 0; i < campaigns.length; i++) {
          if (campaigns[i].title.toLowerCase().includes(searchInput.toLowerCase())) {
            camps.push(campaigns[i]);
          }
        }
      }
      console.log(camps);
      setResult(camps);
    }
    setIsLoading(false);
  }, [value, searchInput]);

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
      </Tabs>

      <Box className="nft_list">
        {isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <Typography variant="h5">Loading...</Typography>
            <CircularProgress />
          </Box>
        ) : (
          result.map((item, id) => {
            if (value == 'one') {
              if (item.serverOwn) {
                return (
                  <MyNFTInfo
                    key={id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.startPrice}
                  />
                );
              }
            } else {
              if (value == 'two' && campaigns) {
                console.log('Start return Campaign');
                console.log(result);
                return <MyNFTInfo key={id} id={item.id} image={item.img1_url} name={item.title} />;
              }
            }
          })
        )}
      </Box>
    </Box>
  );
}

export default SearchBox;
