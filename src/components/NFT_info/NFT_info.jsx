import React from 'react';
import { Card, Box, Typography, TextField, CardContent } from '@mui/material';
import './styles.scss';

function toBase64(arr) {
  //arr = new Uint8Array(arr) if it's an ArrayBuffer
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''));
}

export default function MyNFTInfo({ id, image, name, description, price }) {

  return (
    <Card className="MyNFTInfo">
      <Box className="MyNFTInfo__headerImg">
        <img
          src={typeof image == 'string' ? image : `data:image/png;base64,${toBase64(image.buffer.data)}`}
          alt="NFT_Image"
        />
      </Box>
      <CardContent className="MyNFTInfo__content">
        <Typography className="NFTContent_ID" variant="body1">
          #{id || 'unknown'}
        </Typography>
        <Typography className="NFTContent_NAME" variant="h6" gutterBottom noWrap>
          {name}
        </Typography>
        <Typography className="NFTContent_PRICE" variant="h5"></Typography>

        {/* <Typography align="justify" variant="body2">
            {description}
          </Typography> */}
      </CardContent>
    </Card>
  );
}
