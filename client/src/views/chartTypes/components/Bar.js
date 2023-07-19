import { Grid, Typography } from '@mui/material';
import Chart from '../../../ui-component/Chart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import chartData from 'data/chartMetadata/bar';

const BarChart = () => {

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

export default BarChart;
