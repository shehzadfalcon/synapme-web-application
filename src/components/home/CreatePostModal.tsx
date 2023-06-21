import { Avatar, Button, MenuItem, Modal, Stack, Typography } from '@mui/material';
// import styles from '@/styles/home/CreatePostModal.module.css';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import UserImage from '@/public/icons/user.png';
import Menu from '@mui/material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import Styles from '@/styles/MUI/home';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
//create post modal
const CreatePostModal = ({ open, handleModal }: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  // close menu
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  //item height
  const ITEM_HEIGHT = 48;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="create_post_modal">
          <div className="create_post_modal_header">
            <h6 className="title">Create Post</h6>
            <button type="button" className="close_modal" onClick={handleModal}>
              <CloseIcon color="inherit" />
            </button>
          </div>
          <div className="create_post_modal_body">
            <div className="user_details">
              <Avatar src={`${UserImage}`} alt="Remy Sharp" sx={Styles.CreatePostModalAvatar} />
              <h6 className="user_name">Irfan Falak</h6>
              <div>
                <button type="button" onClick={handleClick} className="drop_down_btn">
                  <PeopleAltIcon />
                  Anyone
                  <ArrowDropDownIcon fontSize="small" />
                </button>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    'aria-labelledby': 'long-button',
                  }}
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleCloseMenu}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                    },
                  }}
                >
                  <MenuItem onClick={handleCloseMenu}>Hello</MenuItem>
                </Menu>
              </div>
            </div>
            <textarea
              name=""
              id=""
              className="post_details"
              placeholder="Write Something..."
            ></textarea>
            <div className="add_to_post">
              <button type="button" className="add_to_post_btn">
                Add to your post
              </button>
              <Stack direction="row" gap="20px" ml="auto" alignItems="center">
                <button type="button" className="create_post_createBtn">
                  <InsertPhotoIcon sx={Styles.CreatePostModalIcons} />
                  <Typography component="h6" sx={Styles.typo}>
                    Photo
                  </Typography>
                </button>
                <button type="button" className="create_post_createBtn">
                  <VideocamIcon sx={Styles.CreatePostModalIcons} />
                  <Typography component="h6" sx={Styles.typo}>
                    Video
                  </Typography>
                </button>
                <EmojiEmotionsIcon sx={Styles.CreatePostModalEmojiEmotionsIcon} />
              </Stack>
            </div>
            <Button sx={{ ...Styles.defaultBtn, ...Styles.CreatePostModalButton }}>Post</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
