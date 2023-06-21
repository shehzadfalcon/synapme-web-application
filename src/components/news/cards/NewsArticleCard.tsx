import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import PersonIcon from '@mui/icons-material/Person';
import SnDefaultLink from '@/components/buttons/SnDefaultLink';

interface ArticleProps {
  imageSrc: string;
  language: string;
  time: string;
  title: string;
  userName: string;
  commentCount: number;
  shareCount: number;
}

const NewsArticleCard: React.FC<ArticleProps> = ({
  imageSrc,
  language,
  time,
  title,
  userName,
  commentCount,
  shareCount,
}) => {
  return (
    <Card sx={{ boxShadow: 'none', marginTop: '30px' }}>
      <CardMedia className="card-media-img" component="img" image={imageSrc} alt="Paella dish" />
      <CardActions sx={{ marginTop: '20px', padding: '0px' }}>
        <Typography variant="body2" color="text.secondary">
          <span style={{ color: '#DE0B0B', fontSize: '16px' }}>{language}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span style={{ fontSize: '16px' }}>{time}</span>
        </Typography>
      </CardActions>
      <CardHeader
        sx={{ padding: '0px', marginTop: '5px' }}
        className="profile-article-card-header"
        subheader={title}
      />

      <CardActions sx={{ padding: '0px' }} disableSpacing className="profile-card-actions">
        <SnDefaultLink
          className="username"
          content={userName}
          ButtonIcon={PersonIcon}
          href="/news"
        />
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
      </CardActions>
    </Card>
  );
};

export default NewsArticleCard;
