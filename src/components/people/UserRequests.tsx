import React from 'react';
import SnDefaultButton from '@/components/buttons/SnDefaultButton';
import CheckIcon from '@mui/icons-material/Check';
import Styles from '@/styles/people';
import Image from 'next/image';



export const UserRequests = ({ item }: any) => {
  return (
    <div className="lg:pb-6 lg:border-b lg:border-body mb-5 relative shadow-main lg:shadow-none rounded-3xl lg:rounded-none py-3 lg:py-0 px-[37px] lg:px-0">
      <div className="flex items-center gap-2 lg:gap-3">
        <div className="w-8 h-8 min-w-[32px] lg:w-16 lg:h-16 lg:min-w-[64px] rounded-full overflow-hidden relative">
          <Image src={item.img} alt="user1" fill />
        </div>
        <div className="flex items-center gap-2">
          <p className="font-normal text-base lg:leading-7 text-body">{item.name}</p>
          <div className="w-3 h-3 min-w-[12px] rounded-full overflow-hidden flex items-center justify-center bg-primary">
            <CheckIcon className="text-white w-[9px] h-[9px]" />
          </div>
        </div>
      </div>
      <p className="font-normal text-[13px] leading-[22.75px] lg:text-base lg:leading-7 text-body mt-4">
       Want to be friends with you
      </p>
      <div className="flex items-center gap-1 mt-3 lg:mt-1">
        <button type="button" className="h-[29px] xl:h-[36px] py-0.5 xl:py-1 px-2 xl:px-5 rounded-[50px] border border-primary font-normal text-sm xl:text-base text-primary">
          Decline
        </button>
        <button type="button" className="h-[29px] xl:h-[36px] py-0.5 xl:py-1 px-2 xl:px-5 rounded-[50px] border border-primary bg-primary font-normal text-sm xl:text-base text-white">
          Accept
        </button>
      </div>
      <p className="font-normal text-sm leading-6 lg:text-base lg:leading-7 text-body lg:mt-2  absolute top-4 right-4 lg:static">
        {item.date}
      </p>
    </div>
  );
};
