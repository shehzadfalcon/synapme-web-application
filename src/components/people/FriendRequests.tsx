import React from 'react';
import { UserRequests } from './UserRequests';

const Requests = [
  {
    name: 'Joseph',
    img: '/icons/user-1.png',
    date: '09 Jan 2023',
  },
  {
    name: 'Michel',
    img: '/icons/user-2.png',
    date: '08 Jan 2023',
  },
  {
    name: 'Michel',
    img: '/icons/user-2.png',
    date: '08 Jan 2023',
  },
  {
    name: 'Michel',
    img: '/icons/user-2.png',
    date: '08 Jan 2023',
  },
];


const FriendRequests: React.FC = () => {
  return (
    <div className="lg:shadow-main lg:bg-white lg:rounded-xl  lg:p-6 mt-8 lg:mt-0 mb-8 lg:mb-0">
      <div className="flex gap-1 lg:gap-4 items-center mb-6">
        <h4 className="font-medium text-base leading-[20px] lg:text-[23px] lg:leading-[30px] text-bodyDark">Synap Request</h4>
        <div className="lg:w-[21px] lg:h-[21px] lg:min-w-[21px] rounded-full flex items-center justify-center lg:bg-primary font-medium  text-base leading-[20px] text-primary lg:text-white">
          3
        </div>
      </div>
      <div className="overflow-y-auto lg:overflow-visible h-60 lg:h-full pr-6 lg:pr-0 scrollbar">
        {Requests.map((item, index) => {
          return <UserRequests key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default FriendRequests;
