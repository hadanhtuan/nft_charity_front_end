import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { Icon } from "@material-ui/core";
import img1 from "../../assets/bitcoin.svg";
import img2 from "../../assets/data_transfer.svg";
import img3 from "../../assets/Up.svg";
import CssBaseline from "@material-ui/core";

export default function BasicCard() {
  return (
    <Card
      sx={{
        display: "inline-flex",
        width: `275px`,
        height: `178px`,
        borderRadius: `16px`,
        padding: `24px`,
        gap: `16px`,
        justifyContent: `space-between`,
      }}
    >
      {/* this is the infomation frame */}
      <div
        className="card_infomation"
        styles={{
          width: `94px`,
          height: `136px`,
          display: `flex`,
          flexDirection: `row`,
          margin: `0`,
          padding: `0`,
        }}
      >
        {/* start logo */}
        <CardContent
          sx={{ padding: `0`, margin: `0`, height: `40px`, width: `100%` }}
        >
          <img
            src={img1}
            alt="anh_bit_coin"
            style={{ padding: `0`, margin: `0` }}
          />
        </CardContent>
        {/* end logo */}

        {/* start infomation */}
        {/* start BNB to USD */}
        <CardContent
          sx={{ display: "inline-flex", padding: `16px 0px 8px 0px` }}
        >
          <Typography sx={{ fontSize: `16px` }}>BNB</Typography>
          <img src={img2} alt="data_transfer" style={{ margin: `0 4px` }} />
          <Typography sx={{ fontSize: `16px` }}>USD</Typography>
        </CardContent>
        {/* end BNB to USD */}

        {/* start clgt deo biet */}
        <CardContent sx={{ padding: `0` }}>
          <Typography sx={{ fontSize: `24px` }}>9784.79</Typography>
        </CardContent>
        {/* end clgt deo biet */}

        {/* start growth */}
        <CardContent
          sx={{ display: "inline-flex", padding: `16px 0px 21px 0px` }}
        >
          <img src={img3} alt="data_up" style={{ margin: `0 4px` }} />
        </CardContent>
        {/* end growth */}
        {/* end infomation */}
      </div>
    </Card>
  );
}
