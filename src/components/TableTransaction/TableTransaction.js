import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from '@material-ui/core';
import { fromWei } from '../../utils';
import { ADDRESS_WALLET } from '../../apis/getHistoryTrans';
import { useSelector } from 'react-redux';
import { Pagination } from '@mui/material';

export default function TableTransaction() {
  const [historyTrans, setHistoryTrans] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const trans = useSelector((state) => state.transHistory.historyTrans);
  const useStyles = makeStyles({
    row: {
      backgroundColor: '#16171a',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#131111',
      },
    },
    pagination: {
      '& .MuiPaginationItem-root': {
        color: 'gold',
      },
    },
  });

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  useEffect(() => {
    if (trans) {
      setLoading(false);
      setHistoryTrans(trans);
    }
  }, []);

  const handleData = () => {
    let categoryTime = [];
    if (historyTrans) {
      trans.forEach((tran) => {
        if (tran.to.toLowerCase() == ADDRESS_WALLET.toLowerCase()) {
          categoryTime.push(tran);
        }
      });
    }
    return categoryTime;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: 'center' }}>
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: 'gold' }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: '#EEBC1D' }}>
                <TableRow>
                  {['STT', 'From', 'To', 'Amount', 'Type'].map((head) => (
                    <TableCell
                      style={{
                        color: 'black',
                        fontWeight: '700',
                      }}
                      key={head}
                      align={head === 'STT' ? '' : 'right'}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleData()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row, index) => {
                    return (
                      <TableRow onClick={() => console.log(row.id)} className={classes.row} key={row.name}>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: 'flex',
                            gap: 15,
                          }}
                        >
                          <span
                            style={{
                              textTransform: 'uppercase',
                              fontWeight: 500,
                            }}
                          >
                            {index + 1}
                          </span>
                        </TableCell>
                        <TableCell align="right">
                          <span
                            style={{
                              color: 'blue',
                              fontWeight: 500,
                            }}
                          >
                            {row.from.slice(0, 5) + '...' + row.from.slice(38, 42)}
                          </span>
                        </TableCell>
                        <TableCell align="right">
                          <span
                            style={{
                              color: 'blue',
                              fontWeight: 500,
                            }}
                          >
                            {row.to.slice(0, 5) + '...' + row.to.slice(38, 42)}
                          </span>
                        </TableCell>
                        <TableCell align="right">
                          <span
                            style={{
                              color: 'white',
                              fontWeight: 500,
                            }}
                          >
                            {fromWei(row.value)} ETH
                          </span>
                        </TableCell>
                        <TableCell align="right">
                          <span
                            style={{
                              color: 'white',
                              fontWeight: 500,
                            }}
                          >
                            {row.value != 0 ? 'Coin' : 'NFT'}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* Comes from @mui/material */}
        <Pagination
          count={(handleData()?.length / 10).toFixed(0)}
          style={{
            padding: 16,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
