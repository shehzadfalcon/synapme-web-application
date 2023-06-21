import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Styles from '@/styles/MUI/team/index';

const ChooseUsCard = ({ item }: any) => {
  return (
    <Stack sx={Styles.ChooseusCardStack}>
      <Box sx={Styles.ChooseUsCardBox}>{item?.icon}</Box>
      <Box>
        <Typography sx={Styles.ChooseUsCardTypoOne}>{item?.title}</Typography>
        <Typography sx={Styles.ChooseUsCardTypoTwo}>{item?.description}</Typography>
      </Box>
    </Stack>
  );
};

export default ChooseUsCard;
