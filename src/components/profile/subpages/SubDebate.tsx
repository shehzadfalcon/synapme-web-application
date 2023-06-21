import * as React from 'react';
import { ProfileDebateCard } from '@/components/profile/cards';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';

const SubProfile: React.FC = () => {
  return (
    <div className="">
      <div className="flex items-center grid-cols-2 gap-1 my-6">
        <p className="text-[19px] leading-[33.25px] font-medium text-primary">Debating.... </p>
        <p className="text-[19px] leading-[33.25px] font-medium text-bodyDark">
          on Data AI Revolution
        </p>
      </div>
      <div className="h-[17px] bg-primary w-full" />
      <div className="flex items-center gap-10 mt-2 xl:px-2">
        <div className="flex items-center justify-between grow">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Avatar
                alt="profile-icon"
                src="/profile/users/profile-1.png"
                className="lg:h-[48px] lg:w-[48px] h-[32px] w-[32px]"
              />
              <div className="z-10 absolute right-1 bottom-1 w-2 h-2 rounded-full bg-[#138410]" />
            </div>
            <div>
              <p className="text-bodyDark xl:text-[14px] text-[12px] xl:leading-[24.5px] leading-[20px] font-normal">
                James
              </p>
              <p className="text-bodyDark xl:text-[14px] text-[12px] xl:leading-[24.5px] leading-[20px] xl:font-normal font-light">
                Vote <span className="text-body">3K</span>
              </p>
            </div>
          </div>
          <p className="text-body text-base leading-[28px] font-normal">VS</p>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Avatar
                alt="profile-icon"
                src="/profile/users/profile-3.png"
                className="lg:h-[48px] lg:w-[48px] h-[32px] w-[32px]"
              />
              <div className="z-10 absolute right-1 bottom-1 w-2 h-2 rounded-full bg-[#138410]" />
            </div>
            <div>
              <p className="text-bodyDark xl:text-[14px] text-[12px] xl:leading-[24.5px] leading-[20px] font-normal">
                James
              </p>
              <p className="text-bodyDark xl:text-[14px] text-[12px] xl:leading-[24.5px] leading-[20px] xl:font-normal font-light">
                Vote <span className="text-body">3K</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between grow">
          <div className="flex items-center gap-2">
            <AccessAlarmRoundedIcon className="text-body" />
            <p className="text-sm font-light text-bodyDark xl:text-base xl:font-normal">
              Ending in <span className="text-body">03 min:04 Sec</span>
            </p>
          </div>
          <div>
            <a href="#" className="text-base leading-[28px] text-primary underline font-normal">
              Lets Vote
            </a>
          </div>
        </div>
      </div>
      <ProfileDebateCard
        userProfileSrc="/profile/articles/img-1.png"
        userName="James"
        opponentName="Ronaldo"
        opponentProfileSrc="/profile/articles/img-2.png"
        userTotalVotes={100}
        opponentTotalVotes={98}
        debateTopic="Debate on will can Ai Replace the google"
        commentsCount={101}
        sharesCount={10}
        date="02/29/2023"
        winner={true}
      />
    </div>
  );
};

export default SubProfile;
