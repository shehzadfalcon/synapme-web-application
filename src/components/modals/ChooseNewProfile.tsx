import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Button, Typography, TextField, Modal } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import SnTextInput from '@/components/inputs/SnTextFormInput';
import SnDefaultSearchBar from '@/components/buttons/SnDefaultSearchBar';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CachedIcon from '@mui/icons-material/Cached';

interface ChooseAvatar {}

interface EachSet {
  name: string;
  src: string;
  id: number;
}

const ChooseNewProfile: React.FC<ChooseAvatar> = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [currentAvatar, setCurrentAvatar] = useState<EachSet>({
    id: 1,
    name: 'avatar1',
    src: '/avatars/synap-profile-1.png',
  });

  const synapAvatars = [
    { id: 1, name: 'avatar1', src: '/avatars/synap-profile-1.png' },
    { id: 2, name: 'avatar2', src: '/avatars/synap-profile-2.png' },
    { id: 3, name: 'avatar3', src: '/avatars/synap-profile-3.png' },
    { id: 4, name: 'avatar4', src: '/avatars/synap-profile-4.png' },
    { id: 5, name: 'avatar5', src: '/avatars/synap-profile-5.png' },
    { id: 6, name: 'avatar6', src: '/avatars/synap-profile-6.png' },
    { id: 7, name: 'avatar7', src: '/avatars/synap-profile-7.png' },
    { id: 8, name: 'avatar8', src: '/avatars/synap-profile-8.png' },
    { id: 9, name: 'avatar9', src: '/avatars/synap-profile-9.png' },
    { id: 10, name: 'avatar10', src: '/avatars/synap-profile-10.png' },
  ];

  function findAvatarById(id: number): any {
    return synapAvatars.find(avatar => avatar.id === id);
  }

  const switchAvatarLeft = () => {
    const nextAvatarId = currentAvatar.id <= 9 ? currentAvatar.id + 1 : currentAvatar.id;
    const obj = findAvatarById(nextAvatarId);
    setCurrentAvatar(obj);
  };

  const switchAvatarRight = () => {
    const nextAvatarId = currentAvatar.id >= 2 ? currentAvatar.id - 1 : 1;
    const obj = findAvatarById(nextAvatarId);
    setCurrentAvatar(obj);
  };

  return (
    <>
      <div className="flex flex-col justify-between w-[480px] p-5 h-full">
        <div className="shadow-md w-full h-[176px] rounded-xl">
          <div className="flex flex-wrap items-center justify-between w-full rounded-xl p-3">
            {synapAvatars.map(eachSet => (
              <Image
                className={`rounded-full basis-1/5 px-4 py-3 cursor-pointer`}
                alt={eachSet.name}
                key={eachSet.id}
                width={30}
                height={30}
                src={eachSet.src}
                onClick={() => {
                  setCurrentAvatar(eachSet);
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center border border-solid border-[#cccccc] w-full h-[100px] text-[#141414] font-medium text-lg rounded-xl mt-3">
          Choose New Avatar
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[200px] p-5 h-full rounded-xl">
        <div className="w-full h-[176px] flex flex-row justify-center items-center shadow-md rounded-xl">
          <Image
            className="rounded-full"
            alt={currentAvatar?.name ?? 'avatar1'}
            width={100}
            height={100}
            src={currentAvatar?.src ?? '/avatars/synap-profile-1.png'}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full h-[100px] flex flex-row justify-around items-center">
            <UndoIcon
              onClick={switchAvatarRight}
              className="cursor-pointer w-[26px] h-[26px] p-1 rounded-full bg-[#ebebeb] text-[#777777]"
            />
            <RedoIcon
              onClick={switchAvatarLeft}
              className="cursor-pointer w-[26px] h-[26px] p-1 rounded-full bg-[#ebebeb] text-[#777777]"
            />
            <FileUploadIcon className="cursor-pointer w-[26px] p-1 h-[26px] rounded-full bg-[#ebebeb] text-[#777777]" />
            <CachedIcon className="cursor-pointer w-[26px] p-1 h-[26px] rounded-full bg-[#ebebeb] text-[#777777]" />
          </div>
          <button className="bg-[#de0b0b] w-full h-[24px] rounded-md text-white text-[14px] font-light">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ChooseNewProfile;
