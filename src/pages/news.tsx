import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import NewsPage from '@/components/elements/frontpage/NewsPage';

const news: React.FC = () => {
  return (
    <DefaultLayout>
      <NewsPage />
    </DefaultLayout>
  );
};
export default news;
