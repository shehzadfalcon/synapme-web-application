import React, { memo, ReactNode } from 'react';

interface AppContentProps {
  children: ReactNode;
}

const AppContent: React.FC<AppContentProps> = ({ children }) => {
  return <div className="max-w-[1440px] xl:px-10 lg:px-5 px-3 mx-auto">{children}</div>;
};

export default memo(AppContent);
