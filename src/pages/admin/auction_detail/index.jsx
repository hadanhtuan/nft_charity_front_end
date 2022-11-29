import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect, useRef, useMemo } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { bgcolor } from "@mui/system";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAuctionById } from "../../../actions/auction";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toBase64, toWei, fromWei } from "../../../utils";
import DateCountdown from "react-date-countdown-timer";
import "./styles.scss";
const Auction_detail = () => {
  const [price, setPrice] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  const { nft_id } = useParams();
  const { currAuction } = useSelector((state) => state.auction);

  const { nftList, marketplaceContract, isLoading } = useSelector(
    (state) => state.solidity
  );

  const nft = nftList.filter((nft) => nft.id == nft_id)[0];

  let endAt;
  if (nft) {
    endAt = new Date(nft.endAt * 1000);
  }
  console.log(nft);

  const colors = [currAuction?.img1_url, currAuction?.img2_url];
  const delay = 7000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const date = new Date(Date.now());

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const endAuc = async () => {
    if (date > endAt && nft.isStarted == true) {
      // window.location.reload();
      if (nft.isStarted == true) {
        console.log(1);
        await (await marketplaceContract.endAuction(nft.id)).wait();
      }
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctionById(nft_id));
  }, [nft_id]);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleOffer = (e) => {
    setIsDisplay(!isDisplay);
  };

  const bid = async (e) => {
    if (isDisplay) {
      // if (price < nft.startPrice) {
      //   alert("price less than current price");
      //   return;
      // }
      await (
        await marketplaceContract.bid(nft_id, { value: toWei(price) })
      ).wait();
    }
  };

  if (!currAuction) return null;

  return (
    <Box className="page">
      {/* <MyAppBar type="Auction" /> */}
      <Box className="page_content">
        <Box sx={{ padding: "16px 50px", height: "100%" }}>
          <Box
            className="slideshow"
            sx={{
              display: "flex",
              flexDirection: "column",
              zIndex: 1,
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <Box
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {colors.map((img, index) => (
                <img className="slide" key={index} src={img} />
              ))}
            </Box>

            <Box className="slideshowDots">
              {colors.map((_, idx) => (
                <Box
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              zIndex: 2,
              justifyContent: "space-between",
              flex: 1,
              position: "relative",
            }}
          >
            {nft && (
              <Box
                sx={{
                  position: "absolute",
                  top: "-85px",
                  flex: 1,
                  left: "70px",
                  maxWidth: "20%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 20,
                }}
              >
                <img
                  src={`data:image/png;base64,${toBase64(
                    nft?.image?.buffer?.data
                  )}`}
                  style={{
                    maxWidth: "100%",
                    height: "300px",
                    borderRadius: "13px",
                  }}
                  alt=""
                />
                <Typography align="center">{nft?.name}</Typography>
                <Button onClick={endAuc} variant="contained">
                  End Auction
                </Button>
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                marginTop: "15px",
                marginLeft: "350px",
                flex: 2,
                padding: "0px 30px",
                flexDirection: "column",
              }}
            >
              <Typography variant="h3" gutterBottom>
                {currAuction.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Remaining Time
              </Typography>
              {endAt && (
                <DateCountdown
                  dateTo={endAt}
                  callback={() => {
                    alert("Time out");
                  }}
                />
              )}
              <Box sx={{ display: "flex", gap: 100, margin: "30px" }}>
                <TextField
                  id="standard-basic"
                  label="Highest Bid"
                  value={`${nft?.highestBid} ETH`}
                />
                <TextField
                  id="standard-basic"
                  label="Highest Bidder"
                  noWrap
                  value={`${nft?.highestBidder} `}
                />
              </Box>

              <Typography align="justify" paragraph>
                {currAuction.desc}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Auction_detail;
