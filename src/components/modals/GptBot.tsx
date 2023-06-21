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

interface GptFormModal {}

const GptBot: React.FC<GptFormModal> = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <>
      <div className="flex flex-col justify-between items-center h-full w-[240px] text-primary shadow-sm rounded-xl pb-5">
        <button className="w-[200px] rounded-md py-3 px-4 shadow-md flex justify-start items-center text-sm mt-8">
          <AddIcon className="w-[16px] h-[16px] mr-1" />
          New chat
        </button>
        <div className="flex flex-col gap-2">
          <button className="w-[200px] rounded-md py-3 px-4 shadow-md flex justify-start items-center text-sm">
            <AddIcon className="w-[16px] h-[16px] mr-1" />
            Clear Chat
          </button>
          <button className="w-[200px] rounded-md py-3 px-4 shadow-md flex justify-start items-center text-sm">
            <AddIcon className="w-[16px] h-[16px] mr-1" />
            Learn AI & ML
          </button>
          <button className="w-[200px] rounded-md py-3 px-4 shadow-md flex justify-start items-center text-sm">
            <AddIcon className="w-[16px] h-[16px] mr-1" />
            Logout
          </button>
        </div>
      </div>
      <div className="flex-1 h-full flex flex-col justify-center items-center">
        <p className="text-primary font-semibold text-3xl">ChatBot</p>
        <p className="text-[#141414] text-center leading-5 mt-8 w-full max-w-[500px] text-sm">
          Welcome to SynapMe, where the bridge between AI developers, Neuroscientists, and
          Ethicists. . . becomes shorter.
        </p>
        <SnDefaultSearchBar
          onChange={e => {
            setSearchInput(e.target.value);
          }}
          placeholder="Search topic, write content, create ideas..."
          value={searchInput}
          className="max-h-[36px] rounded-xl max-w-[500px] mt-8"
        />
        <div className="w-full max-w-[500px] border border-[#777777] rounded-xl p-4 mt-[25px]">
          <h4 className="text-primary font-semibold text-xl">Warning</h4>
          <p className='text-[#777777] text-sm'>
            When opening the chatbot, there should be a warning stating that information Gilbert
            provides isn’t reliable and should be fact-checked before drawing conclusions.
          </p>
        </div>
      </div>
    </>
  );
};

export default GptBot;
