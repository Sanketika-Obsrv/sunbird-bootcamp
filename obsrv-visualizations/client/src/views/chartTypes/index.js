import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MainCard from 'ui-component/cards/MainCard';
import _ from 'lodash';
import BarChart from './components/Bar';
import LineChart from './components/Line';
import PieChart from './components/Pie';

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role="tabpanel" hidden={value !== index}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const ChartTypes = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const chartTypes = [
        {
            label: "Bar",
            component: <BarChart />
        },
        {
            label: "Line",
            component: <LineChart />
        },
        {
            label: "Pie",
            component: <PieChart />
        }
    ]

    const renderTab = (tab) => {
        const { label } = tab;
        return <Tab label={label} />
    }

    const renderTabPanel = value => (tab, index) => {
        const { label, component } = tab
        return <TabPanel value={value} index={index}>
            {component}
        </TabPanel>
    }

    return <>
        <MainCard title="Basic Chart Types">
            <Box sx={{ width: '100%' }}>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}>
                        {_.map(chartTypes, renderTab)}
                    </Tabs>
                </Box>

                {_.map(chartTypes, renderTabPanel(value))}
            </Box>
        </MainCard>
    </>
}

export default ChartTypes