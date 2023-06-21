import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import OrganizedPosts from '@/components/home/OrganizedPosts';
import TopLeaders from '@/components/home/TopLeaders';
import LeaderBoards from '@/components/home/Leaderboards';
import UserFeed from '@/components/home/UserFeed/index';

const home: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="pt-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-9 xl:gap-10 lg:gap-3">
          <div className="lg:col-span-2 ">
            <div className="hidden p-6 bg-white xl:p-6 lg:p-3 shadow-main rounded-xl lg:block">
              <OrganizedPosts />
            </div>
            <div className="bg-white lg:mt-6 xl:p-6 lg:p-3 lg:shadow-main rounded-xl">
              <TopLeaders />
            </div>
          </div>
          <div className="order-3 mt-6 lg:col-span-5 lg:order-2 lg:mt-0 ">
            <UserFeed />
          </div>
          <div className="order-2 lg:col-span-2 lg:order-3">
            <div className="mt-6 bg-white lg:mt-0 lg:p-3 xl:p-6 lg:shadow-main rounded-xl">
              <LeaderBoards />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default home;
