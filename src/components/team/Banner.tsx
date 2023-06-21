import { Box, Typography } from '@mui/material';
import Styles from '@/styles/MUI/team/index';
import Image from 'next/image';
import BannerImg from '@/public/our-team/banner/img-1.png';

const Banner = () => {
  return (
    <Box sx={Styles.BannerBox}>
      <Box sx={Styles.BannerImg}>
        <Image src={BannerImg} alt="BannerImg" fill />
      </Box>
      <Box sx={Styles.BannerContent}>
        <Typography sx={Styles.BannerInnerContentTypoOne}>
          Meet{' '}
          <Typography component="span" sx={Styles.BannerInnerContentTypoTwo}>
            Our Team
          </Typography>{' '}
          of Professionals
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
