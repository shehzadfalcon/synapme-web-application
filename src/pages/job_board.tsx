import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import JobBoardPage from '@/components/elements/frontpage/JobBoardPage';

const login: React.FC = () => {
  return (
    <DefaultLayout>
      <JobBoardPage />
    </DefaultLayout>
  );
};

export default login;
