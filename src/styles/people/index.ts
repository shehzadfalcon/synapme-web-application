import { createTheme } from '@mui/material';
const theme = createTheme();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  container: {
    mt: '40px',
    maxWidth: '1344px',
    mx: 'auto',
  },
  blk: {
    boxShadow: '0px 10px 13px rgba(17, 38, 146, 0.05)',
    p: '24px',
    borderRadius: '12px',
    background: '#fff',
    [theme.breakpoints.down('md')]: {
      p: 0,
      boxShadow: 'none',
    },
  },
  createPost: {
    boxShadow: ' 0px 10px 13px rgba(17, 38, 146, 0.05)',
    borderRadius: '24px',
    background: '#fff',
    pt: '57px',
    pl: '54px',
    pr: '90px',
    pb: '32px',
  },
  txtField: {
    width: '100%',
    '& .MuiInputBase-input': {
      fontWeight: 400,
      fontSize: '16px',
      fontFamily: 'Inter',
      lineHeight: '28px',
      color: '#2B2E34',
      width: '100%',
      padding: '16px 24px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0.1rem solid #E9ECEF',
      borderRadius: '16px',
    },
  },
  typo: {
    fontWeight: 400,
    fontSize: '16px',
    color: '#777777',
    lineHeight: '28px',
    fontFamily: 'Inter',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '24px',
    },
  },
  iconBtn: {
    color: '#777777',
    p: '0',
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: 'Inter',
    lineHeight: '28px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      '& .MuiSvgIcon-root': {
        fontSize: '16px !important',
      },
    },
  },
  tabs: {
    '.MuiTabs-flexContainer': {
      justifyContent: 'flex-end !important',
      mb: '40px',
    },
    '& .Mui-selected': {
      p: '8px 16px !important',
      borderRadius: '50px !important',
      backgroundColor: '#DE0B0B !important',
      color: '#FFFFFF !important',
      fontSize: '16px !important',
      fontWeight: '400 !important',
      fontFamily: 'Inter !important',
      lineHeight: '28px !important',
    },
    '.MuiTabs-indicator': {
      backgroundColor: 'transparent',
    },
    '.MuiButtonBase-root': {
      p: '8px 16px !important',
      flexDirection: 'row',
      gap: '8px',
      alignItems: 'center',
      minHeight: 'unset',
      color: '#777777',
      fontWeight: '400',
      fontFamily: 'Inter',
      lineHeight: '28px',
      textTransform: 'capitalize',
    },
    '.MuiSvgIcon-root': {
      mb: '0px !important',
    },
  },
  peopleGridItems: {
    height: 'fit-content',
    top: 78,
    position: 'sticky',
    [theme.breakpoints.down('md')]: {
      position: 'static',
    },
  },
  NetWorkListTypoOne: {
    fontWeight: 500,
    color: '#141414',
    fontSize: '23px',
    lineHeight: '30px',
    fontFamily: 'Inter',
    mb: 2,
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '21px',
    },
  },
  NetWorkListTypoTwo: {
    fontWeight: '500',
    fontSize: '16px',
    color: '#DE0B0B',
    fontFamily: 'Inter',
    ml: '16px',
    [theme.breakpoints.down('md')]: {
      ml: 1,
    },
  },
  NetWorkListAvatar: {
    width: 48,
    height: 48,
    [theme.breakpoints.down('md')]: {
      width: 32,
      height: 32,
    },
  },
  UserFeedButton: {
    p: 0,
    minWidth: 'fit-content',
    position: 'absolute',
    right: '24px',
    top: '18px',
  },
  FriendRequestsTypoOne: {
    fontWeight: 500,
    color: '#141414',
    fontSize: '23px',
    lineHeight: '30px',
    fontFamily: 'Inter',
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '21px',
      gap: '4px',
      my: 4,
    },
  },
  FriendRequestsBox: {
    width: '21px',
    height: '21px',
    borderRadius: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#DE0B0B',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      background: 'transparent',
    },
  },
  FriendRequestsTypoTwo: {
    fontWeight: 500,
    color: '#fff',
    fontSize: '16px',
    lineHeight: '20.8px',
    fontFamily: 'Inter',
    [theme.breakpoints.down('md')]: {
      color: '#DE0B0B',
    },
  },
  UserRequestsBoxOne: {
    pb: '25px',
    borderBottom: '1px solid #777777',
    mt: '24px',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      pt: '8px',
      pb: '14px',
      px: '37px',
      boxShadow: '0px 10px 13px rgba(17, 38, 146, 0.05)',
      borderRadius: '24px',
      borderBottom: 'none',
      mt: 0,
      mb: '22px',
    },
  },
  UserRequestsAvatar: {
    width: 64,
    height: 64,
    [theme.breakpoints.down('md')]: {
      width: 32,
      height: 32,
    },
  },
  UserRequestsBoxTwo: {
    width: '12px',
    height: '12px',
    borderRadius: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#DE0B0B',
    boxSizing: 'border-box',
  },
  UserRequestsCheckIcon: {
    color: '#fff',
    width: '9px',
    height: '9px',
  },
  UserRequestsVoteTypo: {
    fontWeight: 400,
    fontSize: '16px',
    color: '#777777',
    lineHeight: '28px',
    fontFamily: 'Inter',
    mt: 1,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  UserRequestsVoteTypoColor: {
    color: '#DE0B0B',
  },
  UserRequestsDateTypo: {
    fontWeight: 400,
    fontSize: '16px',
    color: '#777777',
    lineHeight: '28px',
    fontFamily: 'Inter',
    mt: 1,
    [theme.breakpoints.down('md')]: {
      fontWeight: '300',
      fontSize: '14px',
      lineHeight: '24px',
      position: 'absolute',
      top: '12.5px',
      right: '20px',
      mt: 0,
    },
  },
  UserRequestsBioTypo: {
    mt: 2,
  },
  PeopleFeedsBoxOne: {
    boxShadow: '0px 10px 13px rgba(17, 38, 146, 0.05)',
    borderRadius: '24px',
    background: '#fff',
    px: '24px',
    pt: '48px',
    pb: '50px',
    mt: 2,
    [theme.breakpoints.down('md')]: {
      px: 0,
      boxShadow: 'none',
    },
  },
  PeopleFeedsAvatar: {
    width: 64,
    height: 64,
    [theme.breakpoints.down('md')]: {
      width: 32,
      height: 32,
    },
  },
  PeopleFeedsTypoOne: {
    fontWeight: 500,
    fontSize: '19px',
    color: '#DE0B0B',
    lineHeight: '33.25px',
    fontFamily: 'Inter',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },
  PeopleFeedsTypoTwo: {
    fontWeight: 500,
    fontSize: '13px',
    color: '#141414',
    lineHeight: '16.9px',
    fontFamily: 'Inter',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  PeopleFeedsTypoThree: {
    fontWeight: 400,
    fontSize: '13px',
    color: '#777777',
    lineHeight: '16.9px',
    fontFamily: 'Inter',
    ml: 'auto',
  },
  PeopleFeedsTypoFour: {
    mt: 1,
  },
  PeopleFeedsImageBox: {
    borderRadius: '24px',
    overflow: 'hidden',
    mt: '30px',
  },
  PeopleFeedsImage: {
    width: '100%',
    height: '100%',
  },
  PeopleFeedsStack: {
    borderTop: '1px solid #E9ECEF',
  },
  PeopleFeedsShareButton: {
    color: '#DE0B0B',
    ml: 'auto',
  },
  networkBlk: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      overflowX: 'auto',
      gap: '8px',
    },
  },
  networkCard: {
    [theme.breakpoints.down('md')]: {
      minWidth: '127px',
      background: '#fff',
      boxShadow: '0px 10px 13px rgba(17, 38, 146, 0.05)',
      py: '12px',
      flexDirection: 'column',
      gap: '4px',
      borderRadius: '12px',
    },
  },
  FriendRequestsBlk: {
    [theme.breakpoints.down('md')]: {
      height: '250px',
      overflowY: 'auto',
      px: '8px',
    },
  },
  dropDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  userDetails: {
    gap: '30px',
    [theme.breakpoints.down('md')]: {
      gap: '12px',
    },
  },
  userFeed: {
    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
};
