import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

interface ArticleProps {
  networkName: string;
  networkProfileSrc: string;
  member: boolean;
}

const ProfileNetworkCard: React.FC<ArticleProps> = ({ networkName, networkProfileSrc, member }) => {
  return (
    <Card className="network-card flex flex-row justify-between items-center p-2 shadow-none">
      <div className="flex flex-row justify-center items-center">
        <CardMedia
          className="w-16 h-16 p-2"
          component="img"
          image={networkProfileSrc}
          alt="networkProfile"
        />
        <Typography className="p-2 text-[#141414] underline cursor-pointer">{networkName}</Typography>
      </div>
      <button className="synap-default-button variant-1 w-18 mr-5">{member ? 'Unfollow' : 'Follow'}</button>
    </Card>
  );
};

export default ProfileNetworkCard;
