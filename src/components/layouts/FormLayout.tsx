import React, { ReactNode } from 'react';
import AppContent from '@src/components/elements/coreui/AppContent';
import Image from 'next/image';
import Header from '@src/components/elements/header/SynapMeHeader';
import Footer from '../elements/footer/SynapMeFooter';

interface FormLayoutProps {
  children: ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-form">
        <div className="synap-context">
          <p className="synap-content-title">Welcome back to SynapMe</p>
          <Image
            alt="synap-header-icon"
            src="/icons/synap-white-icon.png"
            width="100"
            height="100"
            className="synap-icon"
            priority
          />
          <p className="synap-content-text">
            Mission- to develop a platform that democratizes the ethics of artificial intelligence
            and neurotechnology by providing a comfortable and user-friendly space for people to
            share their beliefs, collaborate, and learn from one another. The goal is to create a
            community of like-minded individuals who can contribute to the ethical advancement of
            these fields and make a positive impact on societ
          </p>
        </div>
        <div className="synap-form">{children}</div>
      </div>
    </>
  );
};

export default FormLayout;
