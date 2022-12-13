import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { CircularProgress, createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import useStyles from './styles';
import { fromWei } from '../../utils';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { ADDRESS_WALLET } from '../../apis/getHistoryTrans';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartDays = [
  {
    label: '24 Hours',
    value: 1,
    timeStamp: 86400,
  },
  {
    label: '30 Days',
    value: 30,
    timeStamp: 2592000,
  },
  {
    label: '3 Months',
    value: 90,
    timeStamp: 7776000,
  },
  {
    label: '1 Year',
    value: 365,
    timeStamp: 31104000,
  },
];

function Chart() {
  const [historyData, setHistoryData] = useState();
  const [days, setDays] = useState(30);
  const [flag, setFlag] = useState(false);
  const historyTrans = useSelector((state) => state.transHistory.historyTrans);
  console.log(historyTrans);

  const classes = useStyles();

  const fetchHistoryData = () => {
    let categoryTime = [];
    historyTrans.forEach((tran) => {
      if (
        tran.timeStamp > Date.now() / 1000 - days * 60 * 60 * 24 &&
        tran.to.toLowerCase() == ADDRESS_WALLET.toLowerCase()
      ) {
        categoryTime.push(tran);
      }
    });
    return categoryTime;
  };

  useEffect(() => {
    const data = fetchHistoryData();
    console.log(data);
    setHistoryData(data);
    setFlag(true);
  }, [days, historyTrans]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historyData | (flag === false) ? (
          <CircularProgress style={{ color: 'gold' }} size={200} thickness={1} />
        ) : (
          <>
            <Line
              data={{
                labels: historyData.map((tran) => {
                  let date = new Date(tran.timeStamp * 1000);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historyData.map((tran) => fromWei(tran.value)),
                    label: `Amount ( Past ${days} Days ) in ETH`,
                    borderColor: '#EEBC1D',
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: 'flex',
                marginTop: 20,
                justifyContent: 'space-around',
                width: '100%',
              }}
            >
              {chartDays.map((day) => (
                <Button
                  className={classes.selectbutton}
                  key={day.value}
                  onClick={() => {
                    if (day.value != days) {
                      setDays(day.value);
                      setFlag(false);
                    }
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </Button>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default Chart;
