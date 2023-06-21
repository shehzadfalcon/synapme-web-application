import React from 'react';
import Image from 'next/image';

const data = [
  {
    name: 'David',
    count: 23,
  },
  {
    name: 'Elina',
    count: 12,
  },
  {
    name: 'Ethan',
    count: 32,
  },
  {
    name: 'Ethan',
    count: 32,
  },
  {
    name: 'Ethan',
    count: 32,
  },
  {
    name: 'Ethan',
    count: 32,
  },
  {
    name: 'Ethan',
    count: 32,
  },
  {
    name: 'Ethan',
    count: 32,
  },
  {
    name: 'Ethan',
    count: 32,
  },
  {
    name: 'Ethan',
    count: 32,
  },
];

const TopLeaders: React.FC = () => {
  return (
    <div>
      <h2 className="font-medium text-primary lg:text-[18px] sm:text-[16px] text-[14px] lg:border-b lg:pb-5">
        Top 10 people moving in Leaderboard
      </h2>
      <div className="flex flex-row w-full p-2 mt-3 space-x-5 overflow-x-auto lg:mt-6 lg:p-0 lg:space-y-5 lg:space-x-0 lg:flex-col scrollbar">
        {data.map(({ name, count }) => (
          <div
            key={count}
            className="flex items-center gap-6 px-4 py-3 bg-white lg:min-w-auto min-w-fit lg:shadow-none shadow-main rounded-xl lg:py-0 lg:px-0"
          >
            <div className="flex flex-col items-center">
              <Image
                alt="user_name"
                src="/icons/post-user.png"
                width="50"
                height="50"
                priority
                className="clip_polygon"
              />
              <div className="z-10 w-4 h-4 -mt-3 text-xs text-center text-white rounded-full bg-bodyDark">
                1
              </div>
            </div>
            <div>
              <p className="text-bodyDark xl:text-[19px] text-[16px] xl:leading-[32px] leading-[28px] font-normal">
                {name}
              </p>
              <div className="flex items-center gap-1">
                <Image
                  alt="topleads_icon"
                  src="/icons/topleads_icon.jpg"
                  width="12"
                  height="13"
                  priority
                  className="-ml-4 clip_polygon"
                />
                <p className="text-primary xl:text-[19px] text-[15px] xl:leading-[32px] leading-[26px] xl:font-normal font-light">
                  Vote {count}K
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLeaders;
