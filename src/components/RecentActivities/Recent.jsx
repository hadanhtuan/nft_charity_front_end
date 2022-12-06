import * as React from "react";

import {
  Card,
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
// import image icon
import bitcoinSVG from "../../assets/bitcoin.svg";
import ethereumSVG from "../../assets/ethereum.svg";
import litecoinSVG from "../../assets/litecoin.svg";
import "./styles.scss";
// const RowItem = (props) => {
//   const { type } = props;
//   const data = {
//     img: "",
//     title: "",
//     time: "",
//     moneyChange: "",
//     status: "",
//   };
//   switch (type) {
//     case "Bitcoin":
//       data.img = bitcoinSVG;
//       data.title = "Bitcoin";
//       data.time = "12:00 12/12/2021";
//       data.moneyChange = "+ 0.00000001 BTC";
//       data.status = "Success";
//       break;
//     case "Litecoin":
//       data.img = litecoinSVG;
//       data.title = "Litecoin";
//       data.time = "12:00 12/12/2021";
//       data.moneyChange = "+ 0.00000001 LTC";
//       data.status = "Success";
//       break;
//     case "Ethereum":
//       data.img = ethereumSVG;
//       data.title = "Ethereum";
//       data.time = "12:00 12/12/2021";
//       data.moneyChange = "+ 0.00000001 ETH";
//       data.status = "Success";
//       break;
//     default:
//       break;
//   }

//   return (
//     <Box className="row_item">
//       <Box className="row_item_left">
//         <img src={data.img} alt="icon" />
//         <Typography variant="h6" gutterBottom>
//           {data.title}
//         </Typography>

//         <Typography variant="h6" gutterBottom>
//           {data.time}
//         </Typography>

//         <Typography variant="h6" gutterBottom>
//           {data.moneyChange}
//         </Typography>

//         <Typography variant="h6" gutterBottom>
//           {data.status}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };
const data = (img, title, time, moneyChange, status) => {
  return {
    img,
    title,
    time,
    moneyChange,
    status,
  };
};
const rows = [
  data(
    bitcoinSVG,
    "Bitcoin",
    "12:00 12/12/2021",
    "+ 0.00000001 BTC",
    "Success"
  ),
  data(
    ethereumSVG,
    "Ethereum",
    "12:00 12/12/2021",
    "+ 0.00000001 ETH",
    "Success"
  ),
  data(
    litecoinSVG,
    "Litecoin",
    "12:00 12/12/2021",
    "+ 0.00000001 LTC",
    "Success"
  ),
];

export default function MyRecentAct() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: "16px !important" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Money Change</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.img} alt=""></img>
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.moneyChange}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
