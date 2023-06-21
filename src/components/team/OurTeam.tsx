import React from 'react';
import Styles from '@/styles/MUI/team/index';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import OurTeamImg from '@/public/our-team/our-team/img-1.png';
import OurTeamImgOne from '@/public/our-team/our-team/img-2.png';
import OurTeamImgTwo from '@/public/our-team/our-team/img-3.png';

const OurTeam: React.FC = () => {
  return (
    <Grid container spacing="50px" sx={Styles.OurTeamGrid}>
      <Grid item xs={12} md={5}>
        <Box sx={Styles.OurTeamBox}>
          <Box sx={Styles.OurTeamImg}>
            <Image src={OurTeamImg} alt="OurTeamImg" />
          </Box>
          <Typography sx={Styles.OurTeamTypoMain}>Our Team</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Box sx={Styles.OurTeamSectionTwo}>
          <Box sx={Styles.OurTeamSectionTwoImgOne}>
            <Image src={OurTeamImgOne} alt="OurTeamImg" />
          </Box>
          <Box sx={Styles.OutTeamResearch}>
            <Typography sx={Styles.OurTeamTypo}>Researcher Expert</Typography>
          </Box>
          <Box sx={Styles.OutTeamCEO}>
            <Typography sx={Styles.OurTeamTypo}>1 CEO</Typography>
          </Box>
          <Box sx={Styles.OurTeamSectionTwoImgTwo}>
            <Image src={OurTeamImgTwo} alt="OurTeamImg" />
          </Box>
          <Box sx={Styles.OutTeamScientist}>
            <Typography sx={Styles.OurTeamTypo}>
              Data <br /> Scientist
            </Typography>
          </Box>
          <Box sx={Styles.OurTeamSectionTwoImgThree}>
            <Image src={OurTeamImgTwo} alt="OurTeamImg" />
          </Box>
          <Box sx={Styles.OurTeamSectionTwoImgFour}>
            <Image src={OurTeamImgTwo} alt="OurTeamImg" />
          </Box>
          <Box sx={Styles.OurTeamSectionTwoImgFive}>
            <Image src={OurTeamImgTwo} alt="OurTeamImg" />
          </Box>
          <Box sx={Styles.OurTeamModel}>
            <Typography sx={Styles.OurTeamTypo}>
              Model <br /> Evalutor
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OurTeam;
