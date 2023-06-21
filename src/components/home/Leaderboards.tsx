import React, { useState } from 'react';
import ModalLayout from '@/components/modals/ModalLayout';
// import GptForm from '@/components/modals/GptForm';
import GptBot from '@/components/modals/GptBot';
import ChooseNewProfile from '@/components/modals/ChooseNewProfile';

import { LeaderBoardUser } from '@/components/home/LeaderBoardUser';

const LeaderBoard = [
  {
    name: 'Joseph',
    img: '/icons/user-1.png',
    bio: 'An AI researcher who has published several papers on machine learning and is recognized for his contributions to the field.',
    vote: '20K',
    date: '09 Jan 2023',
  },
  {
    name: 'Michel',
    img: '/icons/user-2.png',
    bio: 'A software engineer who has built and deployed several AI-powered applications, including chatbots and recommendation systems.',
    vote: '10K',
    date: '08 Jan 2023',
  },
  {
    name: 'Lily',
    img: '/icons/user-3.png',
    bio: 'A data scientist who has worked on several high-profile AI projects for major corporations, including developing predictive models for customer behavior.',
    vote: '20K',
    date: '04 Jan 2023',
  },
  {
    name: 'Alexander',
    img: '/icons/user-4.png',
    bio: 'An entrepreneur who has founded a successful AI startup and is known for her innovative use of machine learning in a variety of industries.',
    vote: '5K',
    date: '03 Jan 2023',
  },
];

const LeaderBoards: React.FC = () => {
  const [showGptForm, setShowGptForm] = useState<boolean>(false);
  const handleClose = () => {
    setShowGptForm(false);
  };

  return (
    <>
      <h2 className="font-medium text-bodyDark xl:text-[23px] text-[18px] mb-6">LeaderBoard</h2>
      <div className="flex flex-row w-full p-2 mt-3 space-x-5 overflow-x-auto lg:mt-0 lg:p-0 lg:space-x-0 lg:flex-col scrollbar">
        {LeaderBoard.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col lg:gap-0 gap-3 px-4 py-3 bg-white lg:min-w-auto min-w-[80%] lg:shadow-none shadow-main rounded-3xl lg:py-0 lg:px-0"
            >
              <LeaderBoardUser key={index} item={item} />
              <div className="hidden w-full h-px my-5 bg-body/10 lg:block" />
            </div>
          );
        })}
        <button
          onClick={() => {
            setShowGptForm(true);
          }}
          className="mt-10 ml-auto block max-w-[260px] w-full rounded-[50px] py-2 px-4 bg-[#DE0B0B] hover:bg-[rgba(222,11,11,0.7)] font-normal text-14 leading-7 text-white"
        >
          Try Chatbot
        </button>
        <ModalLayout className="max-h-[400px]" open={showGptForm} handleClose={handleClose}>
          {/* <GptForm /> */}
          {/* <GptBot /> */}
          <ChooseNewProfile/>
        </ModalLayout>
      </div>
    </>
  );
};

export default LeaderBoards;
