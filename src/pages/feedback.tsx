import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import UserFeedback from '@/components/feedback/UserFeedback';

const signup: React.FC = () => {
  return (
    <DefaultLayout>
      <UserFeedback />
    </DefaultLayout>
  );
};

export default signup;
