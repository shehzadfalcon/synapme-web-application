import React from 'react';
import { List, ListItem, ListItemButton } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import NorthIcon from '@mui/icons-material/North';
import ShareIcon from '@mui/icons-material/Share';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

const listData = [
  {
    text: 'Hight Vote',
    icon: <NorthIcon />,
  },
  {
    text: 'Most Shared',
    icon: <ShareIcon />,
  },
  {
    text: 'Most Shared',
    icon: <StackedLineChartIcon />,
  },
];

const OrganizedPosts: React.FC = () => {
  return (
    <>
      <h2 className="font-medium text-bodyDark xl:text-[23px] text-[18px]">Organize Posts</h2>
      <List className="p-0 lg:-mx-6 mt-[16px] flex lg:block overflow-x-auto scrollbar pb-3 lg:pb-0">
        <ListItem disablePadding className="p-0 min-w-fit">
          <ListItemButton className="gap-3 px-5 py-2 xl:gap-6">
            <ListIcon className="text-3xl text-primary" />
            <p className="text-primary xl:text-[19px] text-[16px] xl:leading-[33.25px] leading-[26px] xl:font-normal font-light">
              All
            </p>
          </ListItemButton>
        </ListItem>
        {listData.map((item, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton className="gap-3 px-5 py-2 xl:gap-6 min-w-fit">
                <div className="text-2xl text-body">{item.icon}</div>
                <p className="text-body xl:text-[19px] text-[16px] xl:leading-[33.25px] leading-[26px] whitespace-nowrap xl:font-normal font-light">
                  {item.text}
                </p>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default OrganizedPosts;
