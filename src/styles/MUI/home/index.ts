// eslint-disable-next-line import/no-anonymous-default-export
export default {
  container: { mt: '40px', maxWidth: '1344px', mx: 'auto' },
  blk: {
    boxShadow: '0px 10px 13px rgba(17, 38, 146, 0.05)',
    p: '24px',
    borderRadius: '12px',
    background: '#fff',
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
      fontSize: '14px !important',
      height:'36px !important',
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
  scrollBar: {
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#d1d5db',
    },
  },
  defaultBtn: {
    borderRadius: '50px',
    background: '#DE0B0B',
    color: '#fff',
    padding: '8px 16px',
    '&:hover': {
      background: 'rgb(222 11 11 / 70%)',
    },
  },
  organizePostBox: {
    boxShadow: '0px 10px 13px rgba(17, 38, 146, 0.05)',
    p: '24px',
    borderRadius: '12px',
    background: '#fff',
  },
  organizePostTypo: {
    fontWeight: 500,
    color: '#141414',
    fontSize: '23px',
    lineHeight: '30px',
    fontFamily: 'Inter',
  },
  organizePostList: {
    p: 0,
    mt: '24px',
  },
  organizePostListIcon: {
    color: '#DE0B0B',
  },
  organizePostBtn: {
    px: 0,
  },
  organizePostListItemText: {
    color: '#DE0B0B',
    fontSize: '19px',
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: '33.25px',
  },
  CreatePostModalAvatar: {
    width: 56,
    height: 56,
  },
  CreatePostModalIcons: {
    color: '#777777',
  },
  CreatePostModalEmojiEmotionsIcon: {
    color: '#DE0B0B',
  },
  CreatePostModalButton: {
    marginTop: '46px',
    width: '100%',
  },
  userFeedBox: {
    width: '100%',
  },
  CreatePostAvatar: {
    width: 64,
    height: 64,
  },
  UserFeedCardButton: {
    color: '#DE0B0B',
    ml: 'auto',
  },
  UserFeedCardTypoBox: {
    borderBottom: '1px solid #E9ECEF',
    borderTop: '1px solid #E9ECEF',
    mt: 1,
    p: 3,
  },
  UserFeedCardTypoBoxTypo: {
    mt: 1,
  },
  LeaderboardBox: {
    height: 'calc(100vh - 250px)',
    overflow: 'auto',
  },
  LeaderboardTypo: {
    fontWeight: 500,
    color: '#141414',
    fontSize: '23px',
    lineHeight: '30px',
    fontFamily: 'Inter',
  },
  LeaderboardChatBotButton: {
    mt: 4,
    width: '100%',
    fontSize: '16px',
  },
  homeGridItemOne: {
    height: 'fit-content',
    top: 78,
  },
  homeGridItemThree: {
    height: 'fit-content',
  },
  CommentCardAvatarBox: {
    p: '7.75px',
    border: '1px solid #777777',
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CommentCardAvatar: {
    width: 40,
    height: 40,
    border: '1px solid #DE0B0B',
  },
  CommentCardTypoOne: {
    fontWeight: 500,
    fontSize: '19px',
    lineHeight: '33.25px',
    color: '#DE0B0B',
    fontFamily: 'Inter',
  },
  CommentBoxButtonOne: {
    gap: '8px',
  },
  CommentBoxButtonTwo: {
    gap: '16px',
    color: '#141414',
  },
  CommentBoxButtonThree: {
    color: '#141414',
  },
  LeaderBoardUserBoxOne: {
    pb: '25px',
    borderBottom: '1px solid #777777',
    mt: '24px',
  },
  LeaderBoardUserAvatar: {
    width: 64,
    height: 64,
  },
  LeaderBoardUserBoxTwo: {
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
  LeaderBoardUserCheckIcon: {
    color: '#fff',
    width: '9px',
    height: '9px',
  },
  LeaderBoardUserBioTypo: {
    mt: 2,
  },
  LeaderBoardUserVoteTypo: {
    fontWeight: 400,
    fontSize: '16px',
    color: '#777777',
    lineHeight: '28px',
    fontFamily: 'Inter',
    mt: 1,
  },
  LeaderBoardUserVoteTypoColor: {
    color: '#DE0B0B',
  },
  LeaderBoardUserDateTypo: {
    fontWeight: 400,
    fontSize: '16px',
    color: '#777777',
    lineHeight: '28px',
    fontFamily: 'Inter',
    mt: 1,
  },
};
