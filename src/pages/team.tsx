import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Box } from '@mui/material';
import Banner from '@/components/team/Banner';
import AboutUs from '@/components/team/AboutUs';
import OurTeam from '@/components/team/OurTeam';
import ChooseUs from '@/components/team/ChooseUs';

const team: React.FC = () => {
  return (
    <DefaultLayout>
      <Box>
        <Banner />
        <AboutUs />
        <ChooseUs />
        <OurTeam />
      </Box>
    </DefaultLayout>
  );
};

export default team;
