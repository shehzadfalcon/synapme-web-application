import * as React from 'react';
import { ProfileVoteCard } from '@/components/profile/cards';

const SubVote: React.FC = () => {
  return (
    <>
      <ProfileVoteCard
        title="Research Scientist"
        href="https://google.com"
        time={24}
        voteCount={500}
        commentCount={140}
        shareCount={40}
      />
      <ProfileVoteCard
        title="Research Scientist"
        href="https://google.com"
        time={24}
        voteCount={500}
        commentCount={140}
        shareCount={40}
      />
    </>
  );
};

export default SubVote;
