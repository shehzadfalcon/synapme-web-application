import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Tab } from '@headlessui/react';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const FilterPostTabs: React.FC = () => {
  return (
    <div className="mb-0 lg:mb-10">
      <Tab.Group>
        <Tab.List className="flex w-full ml-auto md:max-w-[360px]">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-full py-2 sm:px-4 px-2 whitespace-nowrap sm:text-base text-sm outline-0 sm:font-normal font-light sm:leading-[28px] leading-[24px] transition-all duration-500 sm:max-w-[139px]',
                selected ? 'bg-primary text-white' : 'text-body',
              )
            }
          >
            <TrendingUpIcon /> Top Posts
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-full py-2 sm:px-4 px-2 sm:text-base text-sm outline-0 sm:font-normal font-light sm:leading-[28px] leading-[24px] transition-all duration-500 sm:max-w-[99px]',
                selected ? 'bg-primary text-white' : 'text-body',
              )
            }
          >
            <NewReleasesIcon /> New
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-full py-2 sm:px-4 px-2 sm:text-base text-sm outline-0 sm:font-normal font-light sm:leading-[28px] leading-[24px] transition-all duration-500 sm:max-w-[122px]',
                selected ? 'bg-primary text-white' : 'text-body',
              )
            }
          >
            <AutoAwesomeIcon /> popular
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default FilterPostTabs;
