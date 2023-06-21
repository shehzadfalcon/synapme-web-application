/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import NetworkList from '@/components/people/NetworkList';
import FriendRequests from '@/components/people/FriendRequests';
import UserFeed from '@/components/people/UserFeed';

const people: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="relative grid grid-cols-9 lg:gap-5 xl:gap-10 mt-10">
        <div className="col-span-9 lg:col-span-2 order-1 lg:h-fit lg:sticky lg:top-10">
          <NetworkList />
        </div>
        <div className="col-span-9 lg:col-span-5 order-3 lg:order-2">
          <UserFeed />
        </div>
        <div className="col-span-9 lg:col-span-2 order-2 lg:order-3">
          <FriendRequests />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default people;
