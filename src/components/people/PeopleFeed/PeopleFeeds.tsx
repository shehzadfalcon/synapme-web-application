import React from 'react';
import Image from 'next/image';
import people1 from '@/public/icons/people-1.png';
import NorthIcon from '@mui/icons-material/North';
import ShareIcon from '@mui/icons-material/Share';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ProfileInput from '@/components/profile/ProfileInput';

const PeopleFeeds = () => {
  return (

    <div className="lg:shadow-main lg:rounded-3xl bg-white lg:px-6 lg:py-12 mt-4">
      <div className="flex items-center gap-3 lg:gap-5 lg:mb-6">
        <div className="w-8 h-8 min-w-[32px] lg:w-12 lg:h-12 lg:min-w-[48px] rounded-full overflow-hidden relative">
          <Image src="/icons/show-user.png" alt="user1" fill />
        </div>
        <div className="flex items-center gap-3 lg:gap-5 w-full">
          <div>
            <h5 className="font-medium text-base leading-7 lg:text-[19px] lg:leading-[33.25px] text-primary">James</h5>
            <p className="font-medium text-[13px] leading-[16.9px] text-bodyDark hidden lg:block">Impact of AI on Society</p>
          </div>
          <button type="button" className="h-[36px] py-0.5 lg:py-2 px-2 lg:px-4 rounded-[50px] border border-primary bg-primary font-normal text-sm lg:text-[16px] text-white">
            SynapMe@
          </button>
          <p className="ml-auto font-normal text-[13px] leading-[16.9px] text-body">29 mins</p>
        </div>
      </div>
      <p className="font-medium text-[13px] leading-[16.9px] text-bodyDark lg:hidden my-2">Impact of AI on Society</p>
      <p className="font-normal text-base leading-7 text-body">
        The video showcases the impact of artificial intelligence on our daily lives, demonstrating how this technology is rapidly transforming various industries and improving the way we live, work, and communicate.
      </p>
      <div className="rounded-3xl overflow-hidden mt-2 lg:mt-7">
        <Image alt="post" src={people1} className="w-full h-full" />
      </div>
      <div className="flex lg:py-[14px] my-3 lg:mb-0 lg:mt-[14px] lg:ml-[21px] gap-4 lg:border-t lg:border-[#E9ECEF}">
        <div className="flex items-center">
          <button type="button">
            <NorthIcon className="text-body text-base lg:text-2xl" />
          </button>
          <p className="font-normal text-sm leading-6 lg:text-base lg:leading-7 text-body ml-2">6k Vote</p>
        </div>
        <div className="flex items-center">
          <button type="button">
            <InsertCommentIcon className="text-body text-base lg:text-2xl" />
          </button>
          <p className="font-normal text-sm leading-6 lg:text-base lg:leading-7 text-body ml-2">140</p>
        </div>

        <div className="flex items-center ml-auto">
          <button type="button">
            <ShareIcon className="text-primary text-base lg:text-2xl" />
          </button>
          <p className="font-normal text-sm leading-6 lg:text-base lg:leading-7 text-primary ml-2">99 Shares</p>
        </div>
      </div>
      <ProfileInput />
    </div>
  );
};

export default PeopleFeeds;
