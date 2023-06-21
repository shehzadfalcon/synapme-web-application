import React from 'react';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import post1 from '@/public/icons/post-1.png';
import ProfileInput from '@/components/profile/ProfileInput';
import NorthIcon from '@mui/icons-material/North';
import ShareIcon from '@mui/icons-material/Share';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import CardsStyles from './CardsStyles';
import CommentCard from './CommentCard';

const UserFeedCard = () => {
  return (
    <div className="p-3 lg:p-6 shadow-main rounded-3xl">
      <div className="flex items-center gap-3 p-3 lg:gap-4 lg:p-5">
        <Avatar
          alt="user1"
          src="/icons/show-user.png"
          className="lg:h-[64px] lg:w-[64px] w-[32px] h-[32px]"
        />
        <div className="flex items-center justify-between grow">
          <div className="grow">
            <p className="font-medium text-primary lg:text-[19px] text-[14px] lg:leading-[33.25px] leading-[24px]">
              {'Wade Warren'}
            </p>
            <p className="lg:font-medium font-normal text-bodyDark text-[13px] leading-[16.9px]">
              {'Impact of AI on Society'}
            </p>
          </div>
          <p className="text-body text-[13px] leading-[16.9px] font-normal">{'29 mins'}</p>
        </div>
      </div>
      <div>
        <Image alt="post" src={post1} style={CardsStyles.postImage} />
      </div>
      <div className="my-5 lg:p-5 lg:my-0">
        <p className="text-body text-base leading-[28px] lg:font-normal font-light">
          The impact of AI on society. It may cover topics such as machine learning, natural
          language processing, computer vision, robotics, and other aspects of AI research and
          development. AI posts may be found on blogs, social media platforms, news sites, and
          academic journals, and can help individuals stay up-to-date with the latest developments
          in this rapidly evolving field.
        </p>
      </div>
      <div className="w-full h-px bg-[#E9ECEF]" />
      <div className="flex gap-5 p-4">
        <button className="flex items-center gap-3 text-base font-normal text-body">
          <NorthIcon />
          6k Vote
        </button>
        <button className="flex items-center gap-3 text-base font-normal text-body">
          <InsertCommentIcon />
          140
        </button>
        <button className="flex items-center gap-3 ml-auto text-base font-normal text-primary">
          <ShareIcon />
          140 Shares
        </button>
      </div>
      <div className="w-full h-px bg-[#E9ECEF]" />

      {/* comments section */}
      <CommentCard />
      <CommentCard />

      {/* post a comment */}
      <ProfileInput />
    </div>
  );
};

export default UserFeedCard;
