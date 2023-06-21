import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Styles from '@/styles/MUI/home';
import CheckIcon from '@mui/icons-material/Check';

export const LeaderBoardUser = ({ item }: any) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Avatar
          alt="user1"
          src={item.img}
          className="xl:w-[64px] xl:h-[64px] lg:h-[48px] lg:w-[48px] h-[32px] w-[32px] object-cover"
        />
        <div className="flex items-center gap-2">
          <p className="text-body text-base leading-[28px] font-normal">{item.name}</p>
          <CheckIcon className="w-4 h-4 p-px text-white rounded-full bg-primary" />
        </div>
      </div>
      <div className="flex items-center gap-5 lg:hidden">
        <div className="flex gap-2 items-center text-bodyDark text-base leading-[28px] font-light">
          Vote <p className="text-primary">{item.vote}</p>
        </div>
        <p className="text-body text-base leading-[28px] font-light">{item.date}</p>
      </div>
      <p className="lg:mt-4 text-body xl:text-base text-sm xl:leading-[28px] leading-[24px] xl:font-normal font-light">
        {item.bio}
      </p>
      <div className="hidden lg:block">
        <div className="flex gap-2 mt-2 items-center text-bodyDark xl:text-base text-sm xl:leading-[28px] leading-[24px] xl:font-normal font-light">
          Vote <p className="text-primary">{item.vote}</p>
        </div>
        <p className="text-body xl:text-base text-sm xl:leading-[28px] leading-[24px] xl:font-normal font-light mt-2">
          {item.date}
        </p>
      </div>
    </>
  );
};
