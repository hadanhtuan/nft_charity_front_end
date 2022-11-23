import React from "react";
import { Card, Box, Typography, TextField, CardContent } from "@mui/material";
import "./styles.scss";

function toBase64(arr) {
  //arr = new Uint8Array(arr) if it's an ArrayBuffer
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
}

export default function MyNFTInfo({ image, name, description, price }) {
  console.log(image);
  return (
    <Box className="MyNFTInfo">
      <Box className="MyNFTInfo__container">
        <Box className="MyNFTInfo__headerImg">
          <img
            src={`data:image/png;base64,${toBase64(image.buffer.data)}`}
            alt="NFT_Image"
            style={{ borderRadius: "5px" }}
          />
        </Box>
        <CardContent className="MyNFTInfo__content">
          <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
            nft_id
          </Typography>
          <Typography
            variant="body1"
            sx={{ textTransform: "uppercase" }}
            gutterBottom
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            sx={{ textTransform: "uppercase" }}
            fontWeight="700"
          >
            0.434 eth
          </Typography>

          {/* <Typography align="justify" variant="body2">
            {description}
          </Typography> */}
        </CardContent>
      </Box>
    </Box>
  );
}
