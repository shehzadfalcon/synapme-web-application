import React from 'react';
import Styles from '@/styles/MUI/team/index';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ChooseUsImg from '@/public/our-team/Choose-us/img-1.png';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChooseUsCard from './ChooseUsCard';
import InsightsIcon from '@mui/icons-material/Insights';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const ChooseUs = () => {
  const ChooseUsCardData = [
    {
      title: 'Expertise and Quality Content:',
      description:
        'Our team consists of AI experts who design high-quality, up-to-date courses and resources that are both informative and engaging.',
      icon: <InsightsIcon sx={Styles.ChooseUsCardIcon} />,
    },
    {
      title: 'Accessible and User-Friendly Platform:',
      description:
        'Our online platform is designed to be user-friendly, accessible, and available to individuals of all skill levels. You can learn at your own pace and track your progress with ease.',
      icon: <SupervisorAccountIcon sx={Styles.ChooseUsCardIcon} />,
    },
    {
      title: 'Supportive and Collaborative Community:',
      description:
        'Our team provides support and guidance, and our community forum allows you to connect with others, ask questions, and collaborate on projects.',
      icon: <SupportAgentIcon sx={Styles.ChooseUsCardIcon} />,
    },
  ];
  return (
    <Grid container spacing="33px" sx={Styles.ChooseUsGrid}>
      <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <Box sx={Styles.ChooseUsGridImg}>
          <Image src={ChooseUsImg} alt="ChooseUsImg" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
        <Box sx={Styles.ChooseUsContentBox}>
          <Typography sx={Styles.ChooseUsContentBoxTypo}>Why Choose Us?</Typography>
          <Box sx={Styles.ChooseUsContentInnerBox}></Box>
          <Box sx={Styles.ChooseUsContentInnerBoxIcon}>
            <KeyboardArrowLeftIcon sx={Styles.ChooseUsIcon} />
            <KeyboardArrowLeftIcon sx={Styles.ChooseUsIcon} />
            <KeyboardArrowLeftIcon sx={Styles.ChooseUsIcon} />
            <KeyboardArrowLeftIcon sx={Styles.ChooseUsIcon} />
            <KeyboardArrowLeftIcon sx={Styles.ChooseUsIcon} />
          </Box>
        </Box>
        <Typography sx={Styles.ChooseUsMobileTypo}>
          I am a senior at Monterey High School in California, and I have deep interest in
          neuroscience and artificial intelligence (AI). I grew up in California and was introduced
          to the world of scouting at a young age, which instilled in me a love of the outdoors,
          valuable life skills, and life-long learning. My personal philosophy of life is built on
          the principles that I learned in scouting. I value being cheerful, helpful, kind, and
          brave, which have guided him in his personal and academic pursuits. I am active in clubs
          at my school and I am currently pursuing my dreams of becoming a brain-computer interface
          entrepreneur.
        </Typography>
        {ChooseUsCardData?.map((item, index) => {
          return <ChooseUsCard key={index} item={item} />;
        })}
      </Grid>
    </Grid>
  );
};

export default ChooseUs;
