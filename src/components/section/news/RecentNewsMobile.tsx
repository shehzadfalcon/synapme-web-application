import React, { ButtonHTMLAttributes } from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import SnDefaultLink from '@/components/buttons/SnDefaultLink';

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
    <div className="news-section-mobile">
      <div className="header-news-mobile">
        <Image
          alt="synap-header-icon"
          src={imageSrc}
          width="50"
          height="50"
          priority
          className="main-icon"
        />
        <p>{language}</p>
      </div>
      <div className="details">
        <SnDefaultLink className="author" content={userName} ButtonIcon={PersonIcon} href="/news" />
        <p className="time">{time}</p>
      </div>
      <p className="news-title">{title}</p>
      <div className="actions">
        <SnDefaultLink
          className="comment"
          content={`${commentCount}`}
          ButtonIcon={CommentIcon}
          href="/news"
        />
        <SnDefaultLink
          className="share"
          content={`${shareCount} share`}
          ButtonIcon={ShareIcon}
          href="/news"
        />
      </div>
    </div>
  );
};

export default RecentNewsSection;
