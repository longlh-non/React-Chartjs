import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import AcquisitionsChart from './charts/AcquisitionsChart';
import DimensionsChart from './charts/DimensionsChart';

export default function TabsVertical() {
  return (
    <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
      sx={{ minWidth: 300, height: 160 }}
    >
      <TabList>
        <Tab>Acquisitions by year</Tab>
        <Tab>Dimensions</Tab>
        {/* <Tab>Third tab</Tab> */}
      </TabList>
      <TabPanel value={0}>
        <AcquisitionsChart />
      </TabPanel>
      <TabPanel value={1}>
        <DimensionsChart />
      </TabPanel>
    </Tabs>
  );
}