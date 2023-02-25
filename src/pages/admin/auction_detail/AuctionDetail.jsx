import {
  Box,
  Button,
  Card,
  Collapse,
  Divider,
  IconButton,
  TextField,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  CircularProgress,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAuctionById } from '../../../actions/auction';
import { toBase64, toWei, fromWei } from '../../../utils';

import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import SubjectIcon from '@mui/icons-material/Subject';
import SegmentIcon from '@mui/icons-material/Segment';
// import header icon
import ShareIcon from '@mui/icons-material/Share';
import CropFreeIcon from '@mui/icons-material/CropFree';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ExpandLess, ExpandMore, QueryBuilder, TimelineRounded } from '@mui/icons-material';
import ListIcon from '@mui/icons-material/List';
import Countdown from '../../../components/Countdown/Countdown';
import { GetUSDExchangeRate, GetETHExchangeRate } from '../../../apis/ETH_price';
import * as api from '../../../apis';
import AlertLoading from '../../../components/AlertLoading'

// both page
const AuctionDetailStyle = styled(Box)`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  gap: 20px;
  .leftBox {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .rightBox {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

// about left box
const StyledImgSlider = styled(Card)`
  width: 100%;
  height: 450px;
  border-radius: 16px !important;
  display: flex;

  .imgContainer {
    align-self: flex-end;
    width: 100%;
    height: 450px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;

      :hover {
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

const ImgSlider = ({ items }) => {
  return (
    <>
      <Carousel
        className="theCarousel"
        autoPlay
        interval={4000}
        animation="fade"
        duration={1000}
        swipe={true}
        indicators
        cycleNavigation={true}
        sx={{
          '.css-1m9128y': {
            display: 'none',
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

const Item = (props) => {
  return (
    <StyledImgSlider className="cardItem">
      <Box className="imgContainer">
        <img className="CardImg" src={props.item.img} alt={props.item.name} />
      </Box>
    </StyledImgSlider>
  );
};

// card Description
const StyledCardDescription = styled(Card)`
  width: 100%;
  border-radius: 16px !important;
  display: flex;
  padding: 40px 20px;

  .divider {
    margin: 16px 0;
  }

  .cardContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      display: flex;
      align-items: center;
    }

    .content {
      width: 100%;
      text-align: justify;
      height: fit-content;
    }
  }
`;

const CardDescription = ({ campDesc, nftDesc, nftName }) => {
  return (
    <StyledCardDescription>
      <Box className="cardContainer">
        <Box className="title">
          <SubjectIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Campagin Description
          </Typography>
        </Box>

        <Divider className="divider" />
        <Typography className="content" variant="body1">
          {campDesc}
        </Typography>
        <Divider className="divider" />

        <Box className="title">
          <SegmentIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            NFT Description
          </Typography>
        </Box>
        <Divider className="divider" />
        <Typography className="content" variant="body1">
          {nftDesc}
        </Typography>
      </Box>
    </StyledCardDescription>
  );
};

// about right box

const StyledHeader = styled(Box)`
  width: 100%;
  height: 50px;
  display: flex;

  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Tooltip title="Share">
        <IconButton>
          <ShareIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Zoom">
        <IconButton>
          <CropFreeIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="More">
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Tooltip>
    </StyledHeader>
  );
};

// the header title

const StyledHeaderTitle = styled(Box)`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .title {
    font-weight: 700;
  }
  .campaign_name {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const HeaderTitle = ({ title }) => {
  return (
    <StyledHeaderTitle>
      <Typography className="title" variant="h4">
        #02545
      </Typography>
      <Typography className="campaign_name" variant="h4">
        {title}
      </Typography>
    </StyledHeaderTitle>
  );
};

// campaign info

const StyledCampaignInfo = styled(Card)`
  margin-top: 80px;
  padding: 20px;

  .divider {
    margin: 16px 0;
  }

  .infoContainer {
    width: 100%;
    height: 100%;

    .info_date {
      font-weight: 700;
    }
    .info_time {
      display: flex;
      gap: 50px;

      .real_time {
        font-weight: 700;
        font-size: 2rem;
      }
    }

    .info_price {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 100px;
      .price--left {
        .price_title {
          font-weight: bold;
        }

        .price {
          margin-top: 10px;
          display: flex;
          gap: 12px;
          align-items: flex-end;

          .price--eth {
            font-weight: 700;
            font-size: 2rem;
          }
          .price--usd {
            font-size: 1.5rem;
            color: #a3a3a3;
          }
        }
      }

      .price--right {
        flex: 1;
        align-items: center;
        font-weight: bold;
        .inputBid {
          width: 100%;
          height: 60px;
          & .MuiInputBase-root {
            height: 100%;
            font-size: 1.2rem;
          }
        }
      }
    }

    .bid_button {
      font-weight: 700;
      margin-top: 20px;
      line-height: 3rem;
      font-size: 1.5rem;
      color: black;

      background: ${(props) => (!props.isStarted ? '#dddddd' : 'linear-gradient(90deg, #ff5f6d 0%, #ffc371 100%)')}
      &:hover {
        background: linear-gradient(90deg, #ff5f6d 0%, #ffc371 30%);
        color: lightgreen;
      }
    }
  }
`;

const CampaignInfo = ({
  endAuc,
  marketplaceContract,
  nft_id,
  highestBid,
  highestBidder,
  startPrice,
  date,
  dateDisplay,
  timeout,
  isStarted,
  isEnded
}) => {
  const [price, setPrice] = useState(0);
  const [ethPrice, setEthPrice] = useState('');
  const [usdExRate, setUsdExRate] = useState();

  useEffect(() => {
    GetUSDExchangeRate().then((res) => {
      setUsdExRate(parseFloat(res));
    });
    handlePriceETH(highestBid);
  }, []);

  const handlePriceETH = (eth) => {
    let itemPrice = parseFloat(eth);
    setEthPrice(itemPrice);
  };

  // const endAuc = async () => {
  //   if (date > endAt && nft.isStarted == true) {
  //     // window.location.reload();
  //     if (nft.isStarted == true) {
  //       console.log(1);
  //       await (await marketplaceContract.endAuction(nft.id)).wait();
  //     }
  //   }
  // };

  return (
    <StyledCampaignInfo className="campaign_info" isStarted={isStarted}>
      <Box className="infoContainer">
        <Typography className="info_date" variant="h6">
          Sale ends {dateDisplay} {'    '}
          <Typography color="pink" variant="body1">
            {timeout && 'Time Out'}
          </Typography>
        </Typography>
        <Box className="info_time">
          {!timeout && isStarted ? (
            <Countdown date={date} />
          ) : (
            <Typography color="pink" variant="h6">
              Auction Ended
            </Typography>
          )}
        </Box>
        <Divider className="divider" />
        <Box className="info_price">
          <Box className="price--left">
            <Typography className="price_title" variant="h5">
              Highest bid
            </Typography>
            <Box className="price">
              <Typography className="price--eth" variant="h4">
                {highestBid ? highestBid : startPrice} ETH
              </Typography>
              <Typography className="price--usd" variant="h6">
                {(ethPrice * usdExRate).toFixed(2)} USD
              </Typography>
            </Box>
          </Box>
          <Box className="price--right">
            <Typography className="price_title" variant="h5">
              Highest bidder
            </Typography>
            <Typography className="price_title" variant="h5">
              {`${highestBidder.slice(0, 5) + '...' + highestBidder.slice(38, 42)}`}
            </Typography>
          </Box>
        </Box>
        <Button
          className="bid_button"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={endAuc}
          disabled={isEnded}
        >
          End Auction
        </Button>
      </Box>
    </StyledCampaignInfo>
  );
};

// bid history

const StyledBidHistory = styled(Card)`
  padding: 20px;
`;

const BidHistory = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledBidHistory>
      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <TimelineRounded />
          </ListItemIcon>
          <ListItemText
            sx={{
              fontSize: '1.5rem',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
            primary="Bid History"
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
            sx={{
              minHeight: 300,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <QueryBuilder />
            <Typography variant="body1">No events have been recorded yet</Typography>
            <Typography variant="body1">Check back later to see the latest bids</Typography>
          </Box>
        </Collapse>
      </List>
    </StyledBidHistory>
  );
};

// other

const StyledOther = styled(Card)`
  padding: 20px;
`;

const Other = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledOther>
      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText
            sx={{
              fontSize: '1.5rem',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
            primary="Other"
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
            sx={{
              minHeight: 300,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam temporibus tempora soluta debitis
              voluptates explicabo. Quaerat, minima numquam quia quas dolorem deleniti, quod porro eum perspiciatis
              voluptates tempora. Reprehenderit!
            </Typography>
          </Box>
        </Collapse>
      </List>
    </StyledOther>
  );
};

const AuctionDetail = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [isEnded, setIsEnded] = useState(false)
  const { currAuction } = useSelector((state) => state.auction);
  const { nftList, marketplaceContract, isLoading } = useSelector((state) => state.solidity);
  
  const { nft_id } = useParams();

  const nft = nftList.filter((nft) => nft.id == nft_id)[0];
  console.log(nft)
  let items = [];
  let date;
  let dateDisplay;
  let timeout = false;
  if (currAuction && nft) {
    currAuction.nft = nft;
    items.push({ name: 'img1', img: currAuction.img1_url });
    items.push({
      name: 'nft image',
      img: `data:image/png;base64,${toBase64(currAuction.nft.image.buffer.data)}`,
    }); //2022-12-08 15:00:00
    const endAt = new Date(nft.endAt*1000)
    let tempDate = endAt.getDate() < 10 ? '0'+endAt.getDate() : endAt.getDate();
    let tempHour = endAt.getHours() < 10 ? '0'+endAt.getHours() : endAt.getHours();
    let tempMin = endAt.getMinutes() < 10 ? '0'+endAt.getMinutes() : endAt.getMinutes();

    date=endAt.getFullYear()+'-'+Number(endAt.getMonth()+1)+'-'+tempDate+' '+tempHour+':'+tempMin+':00'

    dateDisplay=endAt.getDate()+ '/'+ Number(endAt.getMonth()+1)+ '/'+ endAt.getFullYear()+ ', ' + tempHour+':'+tempMin
    if(endAt < Date.now()) timeout = true;
  }

  const endAuc = async () => {
    setLoading(true)
    setText('Step 1/1')
    if (nft.isStarted == true) {
      setIsEnded(true)
      await (await marketplaceContract.endAuction(nft.id)).wait();
    }
    await api.doneAuction(currAuction.nft_id);
  
    setLoading(false)
    // window.location.reload();
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctionById(nft_id));
  }, [nft_id]);

  return (
    <>
      {!currAuction || !nft ? (
        <CircularProgress />
      ) : (
        <>
        {loading && <AlertLoading text={text} />}
          <AuctionDetailStyle>
            <Box className="leftBox">
              {/* slider */}
              <ImgSlider items={items} />

              {/* description */}
              <CardDescription
                campDesc={currAuction?.description}
                nftDesc={currAuction?.nft.description}
                nftName={currAuction.nft.name}
              />
            </Box>
            <Box className="rightBox">
              <Header />

              <HeaderTitle title={currAuction.title} />
              <CampaignInfo
                endAuc={endAuc}
                marketplaceContract={marketplaceContract}
                nft_id={nft_id}
                highestBid={currAuction.nft.highestBid}
                highestBidder={currAuction.nft.highestBidder}
                startPrice={currAuction.nft.startPrice}
                date={date}
                dateDisplay={dateDisplay}
                timeout={timeout}
                isStarted={nft.isStarted}
                setLoading={setLoading}
                setText ={setText }
                isEnded={isEnded}
              />
              <BidHistory />
              <Other />
            </Box>
          </AuctionDetailStyle>
        </>
      )}
    </>
  );
};

export default AuctionDetail;
