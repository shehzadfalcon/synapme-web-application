// import styles from "@/styles/home/CreatePost.module.css";
import Styles from '@/styles/MUI/home';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';

import { Avatar } from '@mui/material';

export default function CreatePost({ handleModal }: any) {
  return (
    <div className="flex lg:gap-[30px] gap-4">
      <Avatar
        alt="user1"
        src="/icons/post-user.png"
        className="lg:h-[64px] lg:w-[64px] h-[42px] w-[42px]"
      />
      <div className="grow">
        <input
          placeholder="Start Post"
          className="lg:min-h-[61px] min-h-[48px] font-normal placeholder:font-light text-base leading-[28px] text-body outline-primary grow w-full border border-[#E9ECEF] rounded-2xl lg:px-6 px-3"
        />
        <div className="flex items-center gap-1 xl:mt-[38px] lg:mt-5 mt-3">
          <button
            type="button"
            className="flex items-center h-8 gap-2 px-3 transition-all duration-500 rounded-full sm:gap-4 sm:px-5 hover:bg-gray-100 sm:h-11 "
          >
            <InsertPhotoIcon sx={Styles.CreatePostModalIcons} />
            <p className="text-sm font-light sm:text-base sm:font-normal text-body">Photo</p>
          </button>
          <button
            type="button"
            className="flex items-center h-8 gap-2 px-3 transition-all duration-500 rounded-full sm:gap-4 sm:px-5 hover:bg-gray-100 sm:h-11 "
          >
            <VideocamIcon sx={Styles.CreatePostModalIcons} />
            <p className="text-sm font-light sm:text-base sm:font-normal text-body">Video</p>
          </button>
          <button
            onClick={handleModal}
            className="sm:px-5 px-3 sm:text-base text-sm sm:font-normal font-light text-white transition-[opacity] duration-500 rounded-full lg:opacity-0 hover:opacity-100 bg-primary sm:h-11 h-8"
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}
