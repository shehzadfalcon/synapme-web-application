import React, { ButtonHTMLAttributes } from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
// supports static images and material ui icons

interface NetworkRequestProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imageSrc: string;
  language: string;
  time: string;
  title: string;
  userName: string;
  commentCount: number;
  shareCount: number;
}

const RecentNewsSection: React.FC<NetworkRequestProps> = ({
  imageSrc,
  language,
  time,
  title,
  userName,
  commentCount,
  shareCount,
  onClick,
  ...props
}) => {
  return (
    <div className="news-section">
      <div className="section-a">
        <Image alt={imageSrc} src={imageSrc} width="64" height="64" priority />
      </div>
      <div className="section-b">
        <div className="title">
          <span className="language">{language}</span>
          <span className="time">{time}</span>
        </div>
        <div className="title-name">
          <u>{title}</u>
        </div>
        <div className="news-actions">
          <IconButton disableRipple className="icon-button-disabled">
            <PersonIcon />
            <p>{userName}</p>
          </IconButton>
          <IconButton disableRipple className="icon-button-disabled">
            <CommentIcon />
            <p>{commentCount}</p>
          </IconButton>
          <IconButton disableRipple className="icon-button-disabled-shared">
            <ShareIcon />
            <p>{shareCount} share</p>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default RecentNewsSection;
