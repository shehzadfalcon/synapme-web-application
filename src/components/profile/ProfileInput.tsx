import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const ProfileInput: React.FC = () => {
  return (
    <form className="border items-center border-[#E9ECEF] rounded-2xl min-h-[61px] px-6 flex">
      <input
        className="min-h-full outline-none input-base grow placeholder:text-body"
        placeholder="Lovely!"
      />
      <IconButton className="w-10 h-10">
        <SentimentSatisfiedAltIcon className="w-5 h-5 text-body" />
      </IconButton>
      <IconButton className="w-10 h-10">
        <CameraAltIcon className="w-[22px] h-[20px] object-contain" />
      </IconButton>
    </form>
  );
};

export default ProfileInput;
