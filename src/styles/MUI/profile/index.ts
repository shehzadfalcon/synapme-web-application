import { createTheme } from '@mui/material';
const theme = createTheme();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  container: { maxWidth: '1344px', mx: 'auto' },
  profileActicleCardTitle: {
    [theme.breakpoints.down('md')]: {
      px: 0,
    },
  },
  profileActicleCardDescription: {
    [theme.breakpoints.down('md')]: {
      px: 0,
    },
  },
};
