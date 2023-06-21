import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import ShareIcon from '@mui/icons-material/Share';
import NorthIcon from '@mui/icons-material/North';
import ProfileInput from '@/components/profile/ProfileInput';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

interface ArticleProps {
  title: string;
  time: number;
  content: string;
  imageSrc: string;
  voteCount: number;
  commentCount: number;
  shareCount: number;
}

const ProfileArticleCard: React.FC<ArticleProps> = ({
  title,
  time,
  content,
  imageSrc,
  voteCount,
  commentCount,
  shareCount,
}) => {
  return (
    <div className="mt-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-bodyDark text-[19px] font-medium leading-[33.25px]">{title}</h2>
        <span className="text-[13px] leading-[16.9px] text-body font-normal">{time} mins</span>
      </div>
      <p className="text-[16px] text-body leading-[28px] lg:font-normal font-light">{content}</p>
      <CardMedia className="w-full h-full" component="img" image={imageSrc} alt="post media" />
      <div>
        <div className="w-full h-px bg-[#E9ECEF]" />
        <div className="flex gap-5 p-4">
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
        <ProfileInput />
      </div>
    </div>
  );
};

export default ProfileArticleCard;
