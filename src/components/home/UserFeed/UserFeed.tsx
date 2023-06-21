import React from 'react';
import FilterPostTabs from '../FilterPostTabs';
import CreatePostModal from '../CreatePostModal';
import CreatePost from '@/components/home/CreatePost';
import UserFeedCard from './UserFeedCard';
import OrganizedPosts from '../OrganizedPosts';

const UserFeed: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleModal = () => setOpen(!open);

  return (
    <>
      {/* render create post modal */}
      <CreatePostModal handleModal={handleModal} open={open} setOpen={setOpen} />
      <FilterPostTabs />
      <div className="block py-6 bg-white lg:hidden">
        <OrganizedPosts />
      </div>
      <div className="px-4 pt-4 pb-4 bg-white lg:px-5 xl:px-10 lg:pb-4 xl:pb-8 shadow-main rounded-3xl xl:pt-14 lg:pt-6">
        <CreatePost handleModal={handleModal} />
      </div>

      {/* Feeds card */}
      <div className="mt-4 space-y-4">
        <UserFeedCard />
      </div>
    </>
  );
};

export default UserFeed;
