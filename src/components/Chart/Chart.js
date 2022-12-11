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
import { ADDRESS_WALLET, getHistoryTrans } from '../../apis/getHistoryTrans';
import { fromWei } from '../../utils';
import { Button } from '@mui/material';

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

  const classes = useStyles();

  const fetchHistoryData = async () => {
    const data = await getHistoryTrans();
    console.log(data);
    setFlag(true);
    const result = data.data.result;
    console.log(result);
    let categoryTime = [];
    result.forEach((trans) => {
      if (
        trans.timeStamp > Date.now() / 1000 - days * 60 * 60 * 24 &&
        trans.to.toLowerCase() == ADDRESS_WALLET.toLowerCase()
      ) {
        categoryTime.push(trans);
      }
    });
    setHistoryData(categoryTime);
  };

  useEffect(() => {
    fetchHistoryData();
  }, [days]);

  console.log(historyData);

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
                labels: historyData.map((trans) => {
                  let date = new Date(trans.timeStamp * 1000);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historyData.map((trans) => fromWei(trans.value)),
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
