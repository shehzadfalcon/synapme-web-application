import React from 'react';
import Styles from '@/styles/MUI/team/index';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import AboutUsImg from '@/public/our-team/about-us/img-2.png';

const AboutUs = () => {
  return (
    <Grid container spacing="50px" sx={Styles.AboutUsContainerGrid}>
      <Grid item xs={12} md={7}>
        <Typography sx={Styles.AboutUstypoOne}>About ME</Typography>
        <Typography sx={Styles.AboutUstypoTwo}>
          I am a senior at Monterey High School in California, and I have deep interest in
          neuroscience and artificial intelligence (AI). I grew up in California and was introduced
          to the world of scouting at a young age, which instilled in me a love of the outdoors,
          valuable life skills, and life-long learning. My personal philosophy of life is built on
          the principles that I learned in scouting. I value being cheerful, helpful, kind, and
          brave, which have guided him in his personal and academic pursuits. I am active in clubs
          at my school and I am currently pursuing my dreams of becoming a brain-computer interface
          entrepreneur.
        </Typography>
        <Typography sx={Styles.AboutUstypoThree}>
          My passion for neuroscience and AI has led me to creating this forum for people to share
          their beliefs on emerging technologies in this field. I hope to foster a community of
          like-minded individuals who can collaborate and learn from one another, ultimately
          contributing to the ethical advancement of these fields and making a positive impact on
          society.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box sx={Styles.AboutUsGridImg}>
          <Image src={AboutUsImg} alt="AboutusImg" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
