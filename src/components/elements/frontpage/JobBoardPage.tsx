import React from 'react';
import { Tab } from '@headlessui/react';
import SettingsRemoteRoundedIcon from '@mui/icons-material/SettingsRemoteRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded';
import NeuralNetworkPopup from '@/components/profile/NeuralNetworkPopup';
import Filters from '@/components/job_board/Filters';
import JobSinglePost from '@/components/job_board/JobSinglePost';
import PostJob from '@/components/job_board/PostJob';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const JobBoardPage: React.FC = () => {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 xl:gap-10 lg:gap-3">
        <div className="order-2 col-span-full lg:order-1">
          <Tab.Group>
            <Tab.List className="flex items-center gap-2 w-full lg:max-w-[340px] mx-auto lg:mb-10 mb-8 lg:mt-0 mt-8">
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-full flex items-center gap-2 lg:h-11 h-8 px-6 whitespace-nowrap sm:text-base text-sm outline-0 sm:font-normal font-light sm:leading-[28px] leading-[24px] transition-all',
                    selected ? 'bg-primary text-white' : 'text-body',
                  )
                }
              >
                <SettingsRemoteRoundedIcon />
                Remote
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full group rounded-full flex items-center gap-2 lg:h-11 h-8 px-6 whitespace-nowrap sm:text-base text-sm outline-0 sm:font-normal font-light sm:leading-[28px] leading-[24px] transition-all',
                    selected ? 'bg-primary text-white' : 'text-body',
                  )
                }
              >
                <BusinessRoundedIcon />
                Office
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full group rounded-full flex items-center gap-2 lg:h-11 h-8 px-6 whitespace-nowrap sm:text-base text-sm outline-0 sm:font-normal font-light sm:leading-[28px] leading-[24px] transition-all',
                    selected ? 'bg-primary text-white' : 'text-body',
                  )
                }
              >
                <CloseFullscreenRoundedIcon /> Both
              </Tab>
            </Tab.List>
          </Tab.Group>
        </div>
        <div className="order-1 lg:col-span-2 lg:order-2">
          <Filters />
        </div>
        <div className="order-3 space-y-4 lg:space-y-8 lg:col-span-5">
          <PostJob />
          {[0, 1, 2, 3, 4, 5].map((item, index) => (
            <div key={index}>
              <JobSinglePost />
            </div>
          ))}
        </div>
      </div>
      <NeuralNetworkPopup />
    </div>
  );
};

export default JobBoardPage;
