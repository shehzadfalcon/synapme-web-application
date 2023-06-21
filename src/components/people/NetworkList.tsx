import React from 'react';
import DropDown from '@/components/menu/DropDown';
import Image from 'next/image';

const NetworkList: React.FC = () => {
  return (
    <div className="lg:shadow-main bg-white lg:rounded-xl lg:py-6 lg:px-4 xl:px-6">
      <div className="flex items-center mb-4">
        <h4 className="font-medium text-base leading-[20.8px] lg:text-[23px] lg:leading-[30px] text-bodyDark">
          Network List
        </h4>
        <h6 className="font-medium text-base text-primary ml-2 lg:ml-4">6</h6>
      </div>
      <div className="flex gap-2 overflow-x-auto lg:block lg:overflow-visible scrollbar">
        {[...Array(6)].map((item, index) => (
          <div key={index} className="flex gap-1 lg:gap-3 flex-col lg:flex-row min-w-[127px] lg:min-w-fit items-center mb-4 shadow-main lg:shadow-none rounded-xl lg:rounded-none py-3 lg:py-0">
            <div className="w-8 h-8 min-w-[32px] lg:w-12 lg:h-12 lg:min-w-[48px] rounded-full overflow-hidden relative">
              <Image src="/icons/show-user.png" alt="user1" fill />
            </div>
            <h6 className="font-normal text-sm leading-6 lg:text-base lg:leading-7 text-body">Warren</h6>
            <DropDown />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkList;
