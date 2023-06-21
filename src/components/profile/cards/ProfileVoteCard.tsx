import * as React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import NorthIcon from '@mui/icons-material/North';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

interface ArticleProps {
  title: string;
  href?: string;
  time: number;
  voteCount: number;
  commentCount: number;
  shareCount: number;
}

const ProfileVoteCard: React.FC<ArticleProps> = ({
  title,
  href,
  time,
  voteCount = 0,
  commentCount = 0,
  shareCount = 0,
}) => {
  return (
    <div className="mt-6 space-y-6">
      <div className="flex items-center justify-between">
        <a href="#" className="text-bodyDark text-[19px] font-medium leading-[33.25px] underline">
          {title}
        </a>
        <span className="text-[13px] leading-[16.9px] text-body font-normal">{time} mins</span>
      </div>
      <div>
        <div className="w-full h-px bg-[#E9ECEF]" />
        <div className="flex gap-5 px-4 py-6">
          <button className="flex items-center gap-3 text-base font-normal text-body">
            <NorthIcon />
            {voteCount}k Vote
          </button>
          <button className="flex items-center gap-3 text-base font-normal text-body">
            <InsertCommentIcon />
            {commentCount}
          </button>
          <button className="flex items-center gap-3 ml-auto text-base font-normal text-primary">
            <ShareIcon />
            {shareCount} Shares
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileVoteCard;
