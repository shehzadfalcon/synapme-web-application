/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PeopleFeeds from './PeopleFeed/PeopleFeeds';



const UserFeed: React.FC = () => {
  return (
    <>
      <div className="lg:flex items-center gap-2 h-12 border border-body rounded-[50px] pl-4 py-3 hidden">
        <input type="text" className="w-full font-roboto font-noraml text-base leading-6 text-body outline-none" placeholder="Search for people by name, job title, or other relevant criteria" />
        <button type="button" className="font-normal text-base leading-7 text-body w-12 h-12 flex items-center justify-center">
          <SearchIcon className="text-body" />
        </button>
      </div>

      {/* people feeds */}
      <PeopleFeeds />
    </>
  );
};

export default UserFeed;
