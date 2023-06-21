/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Box, Grid } from '@mui/material';
import NetworkList from '@/components/people/NetworkList';
import FriendRequests from '@/components/people/FriendRequests';
import UserFeed from '@/components/people/UserFeed';
import Styles from '@/styles/people';
import Troubleshooting from '@/components/troubleshooting';

const troubleshooting: React.FC = () => {
  return (
    <DefaultLayout>
      <Troubleshooting />
    </DefaultLayout>
  );
};

export default troubleshooting;
