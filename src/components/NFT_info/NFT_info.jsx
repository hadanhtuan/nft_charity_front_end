import React from "react";

import { Card, Box, Typography } from "@mui/material";



function toBase64(arr) {
  //arr = new Uint8Array(arr) if it's an ArrayBuffer
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
}

export default function MyNFTInfo({ image, name, description, price }) {
  console.log(image);
  return (
    <Card>
      <Box sx={{ display: `flex`, padding: `10px` }}>
        <Box flex={1} sx={{ display: `flex`, alignItems: 'center'}}>
          <img
            src={`data:image/png;base64,${toBase64(image.buffer.data)}`}
            alt=""
            width={230}
            height={300}
            style={{borderRadius:'5px'}}
          />
        </Box>
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{ padding: `10px` }}
          height={300}
        >
          <Box display="flex">
            <Box flex={1}>
              <Typography variant="title2" sx={{ fontWeight: `700` }}>
                Name
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography variant="title2">{name}</Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Box flex={1} sx={{marginTop: '15px'}}>
              <Typography variant="title2" sx={{ fontWeight: `700` }}>
                Description
              </Typography>
            </Box>
            <Box flex={1} sx={{height: '250px', overflow: "scroll", marginTop: '15px'}}>
              <Typography variant="title2">{description}</Typography>
            </Box>
          </Box>
          {/* <Box display="flex">
            <Box flex={1}>
              <Typography variant="title2" sx={{ fontWeight: `700` }}>
                Price
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography variant="title2">{price}</Typography>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Card>
  );
}
