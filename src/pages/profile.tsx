import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import ProfilePage from '@/components/elements/frontpage/ProfilePage';

const login: React.FC = () => {
  return (
    <DefaultLayout>
      <ProfilePage />
    </DefaultLayout>
  );
};

export default login;
