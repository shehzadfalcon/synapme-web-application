import React from 'react';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import ReplyIcon from '@/public/icons/reply.png';
import NorthIcon from '@mui/icons-material/North';

const CommentCard = () => {
  return (
    <div className="flex flex-col gap-3 my-5 lg:flex-row lg:gap-6 lg:p-5 lg:my-0">
      <div className="lg:w-[56px] lg:h-[56px] w-[32px] h-[32px] border border-[#777777] lg:p-1.5 p-[2px] rounded-full">
        <Avatar
          alt="user1"
          src="/icons/user-1.png"
          className="object-cover w-full h-full border border-primary"
        />
      </div>
      <div>
        <p className="text-primary lg:text-[19px] text-[16px] lg:leading-[33.25px] leading-[28px] font-medium">
          Paul Molive
        </p>
        <p className="text-body lg:text-base text-sm lg:leading-[28px] leading-[24px] font-normal">
          This post on AI is a comprehensive guide
        </p>
        <div className="flex gap-5">
          <button className="flex items-center lg:gap-3 gap-2 lg:text-base text-sm lg:leading-[28px] leading-[24px] lg:font-normal font-light text-body">
            <NorthIcon className="lg:w-[20px] w-4" />
            6k Vote
          </button>
          <button className="flex items-center gap-3 lg:text-base text-sm lg:leading-[28px] leading-[24px] lg:font-normal font-light text-bodyDark">
            <Image alt="post" src={ReplyIcon} width={18} height={16} className="object-contain" />
            Reply
          </button>
          <button className="text-bodyDark lg:text-base text-sm lg:leading-[28px] leading-[24px] lg:font-normal font-light">
            Translate
          </button>
          <p className="text-body lg:text-base text-sm lg:leading-[28px] leading-[24px] lg:font-normal font-light">
            5 min
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
