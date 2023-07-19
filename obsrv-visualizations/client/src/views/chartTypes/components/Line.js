import { Grid, Typography } from '@mui/material';
import Chart from '../../../ui-component/Chart';
import { gridSpacing } from 'store/constant';
import chartData from 'data/chartMetadata/line';
import MainCard from 'ui-component/cards/MainCard';

const LineChart = () => {
  return (
    <>
      <MainCard>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Chart {...chartData} />
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default LineChart;
