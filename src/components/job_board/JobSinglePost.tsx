import React from 'react';
import Image from 'next/image';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';

const JobSinglePost: React.FC = () => {
  return (
    <div className="p-4 2xl:p-12 xl:p-10 lg:p-6 shadow-main rounded-3xl">
      <div className="flex items-center">
        <div className="flex gap-3 xl:gap-9 lg:gap-4 grow">
          <Image
            alt="profile-icon"
            src="/profile/articles/img-1.png"
            width="4"
            height="18"
            priority
            className="lg:h-[74px] lg:block hidden lg:w-[74px] h-[32px] w-[32px] rounded-xl lg:mt-4"
          />
          <div className="grow">
            <div className="flex items-center justify-between gap-4 grow">
              <Image
                alt="profile-icon"
                src="/profile/articles/img-1.png"
                width="4"
                height="18"
                priority
                className="lg:h-[74px] lg:hidden lg:w-[74px] h-[32px] w-[32px] rounded lg:mt-4"
              />
              <p className="text-primary grow lg:text-[24px] text-base lg:leading-[42px] lg:font-semibold font-medium">
                James
              </p>
              <p className="lg:text-[16px] text-sm lg:leading-[35px] lg:font-normal font-light text-body">
                Posted 12 min ago
              </p>
            </div>
            <h4 className="lg:text-2xl text-base lg:leading-[42px] text-bodyDark lg:font-medium lg:mt-2 mt-5">
              Full-Stack Developer for fast paced company
            </h4>
            <p className="lg:text-xl text-sm lg:leading-[42px] text-body font-light lg:mt-0 mt-2">
              Islamabad Pakistan, Remote Work
            </p>
            <div className="flex flex-col gap-3 mt-6 lg:flex-row lg:items-center lg:mt-5 xl:gap-10">
              <div className="flex items-center gap-3 lg:gap-2">
                <WatchLaterRoundedIcon className="text-base lg:text-xl text-body" />
                <p className="text-body lg:text-base lg:leading-[28px] text-sm font-normal">
                  Full-Time
                </p>
              </div>
              <div className="flex items-center gap-3 lg:gap-2">
                <PaymentsRoundedIcon className="text-base lg:text-xl text-body" />
                <p className="text-body lg:text-base lg:leading-[28px] text-sm font-normal">
                  120000 per year
                </p>
              </div>
              <div className="flex items-center gap-3 lg:gap-2">
                <BusinessCenterRoundedIcon className="text-base lg:text-xl text-body" />
                <p className="text-body lg:text-base lg:leading-[28px] text-sm font-normal">
                  2-3 year of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 lg:items-center lg:justify-between lg:flex-row lg:mt-12">
        <p className="text-body lg:text-base lg:leading-[28px] lg:font-medium text-sm font-light">
          13 Applications
        </p>
        <div className="flex flex-col gap-4 mt-6 lg:mt-0 lg:flex-row">
          <button
            onClick={() => alert('save')}
            className="ring-1 ring-primary text-base hover:opacity-70 leading-[28px] font-normal text-primary h-9 w-full lg:w-[75px] rounded-full lg:rounded-xl"
          >
            save
          </button>
          <button
            onClick={() => alert('Applied')}
            className="ring-1 ring-primary text-base hover:opacity-70 leading-[28px] font-normal text-white bg-primary h-9 w-full lg:w-[122px] rounded-full lg:rounded-xl"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSinglePost;
