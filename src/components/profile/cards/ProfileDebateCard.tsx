import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Divider from '@mui/material/Divider';
import NorthIcon from '@mui/icons-material/North';
import CommentIcon from '@mui/icons-material/Comment';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Link from 'next/link';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Avatar } from '@mui/material';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';

interface ArticleProps {
  userName: string;
  userProfileSrc: string;
  opponentName: string;
  opponentProfileSrc: string;
  userTotalVotes: number;
  opponentTotalVotes: number;
  debateTopic: string;
  commentsCount: number;
  sharesCount: number;
  date: string;
  winner: boolean;
}

const ProfileDebateCard: React.FC<ArticleProps> = ({
  userName,
  userProfileSrc,
  opponentName,
  opponentProfileSrc,
  userTotalVotes,
  opponentTotalVotes,
  debateTopic,
  commentsCount,
  sharesCount,
  date,
  winner,
}) => {
  return (
    <>
      <div className="mt-6 space-y-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-bodyDark text-[19px] font-medium leading-[33.25px] underline">
            Debate on will can Ai Replace the google
          </a>
          <span className="text-[13px] leading-[16.9px] text-body font-normal">22 mins</span>
        </div>

        <div>
          <div className="w-full h-px bg-[#E9ECEF]" />
          <div className="flex gap-5 px-2 py-5">
            <button className="flex items-center gap-3 text-base font-normal text-body">
              <NorthIcon />
              2k Vote
            </button>
            <button className="flex items-center gap-3 text-base font-normal text-body">
              <InsertCommentIcon />
              23
            </button>
            <div className="flex items-center justify-evenly grow">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Avatar
                    alt="profile-icon"
                    src="/profile/users/profile-1.png"
                    className="lg:h-[48px] lg:w-[48px] h-[32px] w-[32px]"
                  />
                  <div className="z-10 absolute right-1 bottom-1 w-2 h-2 rounded-full bg-[#138410]" />
                </div>
                <div>
                  <p className="text-bodyDark xl:text-[14px] text-[12px] xl:leading-[24.5px] leading-[20px] font-normal">
                    James <span className="text-primary">Loss</span>
                  </p>
                  <p className="text-bodyDark xl:text-[14px] text-[12px] xl:leading-[24.5px] leading-[20px] xl:font-normal font-light">
                    Vote <span className="text-body">3K</span>
                  </p>
                </div>
              </div>
              <p className="text-body text-base leading-[28px] font-normal">VS</p>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Avatar
                    alt="profile-icon"
                    src="/profile/users/profile-3.png"
                    className="lg:h-[48px] lg:w-[48px] h-[32px] w-[32px]"
                  />
                  <div className="z-10 absolute right-1 bottom-1 w-2 h-2 rounded-full bg-[#138410]" />
                </div>
                <div>
                  <p className="text-bodyDark xl:text-[14px] text-[12px] xl:leading-[24.5px] leading-[20px] font-normal">
                    James <span className="text-[#138410]">Win</span>
                  </p>
                  <p className="text-bodyDark xl:text-[14px] text-[12px] xl:leading-[24.5px] leading-[20px] xl:font-normal font-light">
                    Vote <span className="text-body">3K</span>
                  </p>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-3 ml-auto text-base font-normal text-primary">
              <ShareIcon />
              23 Shares
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDebateCard;
