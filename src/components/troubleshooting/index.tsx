import * as React from 'react';

import SnDefaultSearchBar from '@/components/buttons/SnDefaultSearchBar';

import FaqAccordion from './FaqAccordion';
import TroubleshootingCard from './TroubleshootingCard';
import LinesDots from '@/public/troubleshooting/img-2.png';
import Cross from '@/public/troubleshooting/img-3.png';
import BlackArrows from '@/public/troubleshooting/img-4.png';
import dotedLine from '@/public/troubleshooting/img-5.png';
import dotedLine2 from '@/public/troubleshooting/img-6.png';
import Image from 'next/image';
import Button from '@mui/material/Button';


const AccordionData = [
  {
    title: "What is artificial intelligence (AI)?",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "What is a neural network?",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "What are the applications of AI and neural networks?",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "How do I get started with AI and neural networks?",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "What are the ethical considerations around AI and neural networks?",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }

]
const TroubleshootingData = [
  {
    troubleshootingNumber: "Troubleshooting #1",
    title: "Difficulty understanding neural networks",
    summary: "If you're having trouble understanding neural networks, try breaking the concepts down into smaller pieces."
  },
  {
    troubleshootingNumber: "Troubleshooting #2",
    title: "Difficulty understanding neural networks",
    summary: "If you're having trouble understanding neural networks, try breaking the concepts down into smaller pieces."
  },
  {
    troubleshootingNumber: "Troubleshooting #3",
    title: "Difficulty understanding neural networks",
    summary: "If you're having trouble understanding neural networks, try breaking the concepts down into smaller pieces."
  },
  {
    troubleshootingNumber: "Troubleshooting #4",
    title: "Difficulty understanding neural networks",
    summary: "If you're having trouble understanding neural networks, try breaking the concepts down into smaller pieces."
  }
]

const Troubleshooting: React.FC = () => {
  return (
    <div className="shadow-[0px_10px_13px_rgba(17,38,146,0.05)] rounded-3xl pt-[162px] relative">
      <div className="w-[280px] h-[140.94px] absolute top-[6px] right-[248px] rotate-[-20deg]">
        <Image src={dotedLine} alt="dotedLine" fill />
      </div>
      <div className="w-[325px] h-[80px] absolute top-[250px] left-[6px]">
        <Image src={dotedLine2} alt="dotedLine2" fill />
      </div>
      <div className="flex items-center gap-2.5 justify-center">
        <div className="w-[27px] h-[21px]">
          <Image src={BlackArrows} alt="BlackArrows" />
        </div>
        <h2 className="font-bold text-[42px] leading-[54.6px] text-[#DE0B0B] text-center">
          Hello, what can we <span className="text-[#141414]">Help</span> you find?
        </h2>
      </div>
      <p className="font-normal text-xl leading-5 text-[#141414] mt-4 text-center">
        we are here for you. Find articles, help and advice from experts
      </p>
      <div className="mx-auto max-w-[581px] mt-[42px]">
        <SnDefaultSearchBar className="h-12 rounded-[50px]" placeholder='Search for people by name, job title etc' />
      </div>
      <h3 className="font-semibold text-4xl leading-[46.8px] text-[#141414] border-b-[3px] border-[#DE0B0B] w-fit mx-auto mt-[86px]">
        Categories
      </h3>
      <div className="grid grid-cols-2 gap-x-[14px] gap-y-1 mt-[85px] max-w-[1180px] mx-auto">
        {
          TroubleshootingData.map((item, index) => {
            return <TroubleshootingCard key={index} item={item} />
          })
        }
      </div>
      <button className="mt-10 ml-auto block max-w-[260px] w-full rounded-[50px] py-2 px-4 bg-[#DE0B0B] hover:bg-[rgba(222,11,11,0.7)] font-normal text-14 leading-7 text-white">Try Chatbot</button>
      <div className="relative pb-[141px]">
        <h3 className="font-semibold text-4xl leading-[46.8px] text-[#141414] border-b-[3px] border-[#DE0B0B] w-fit mx-auto">
          FAQS
        </h3>
        <p className="mt-4 max-w-[679px] mx-auto font-normal text-base leading-[25.89px] text-[#777777] text-center">
          Sure! Here are some FAQ questions and answers you could include on your artificial intelligence and neural network website:
        </p>
        <div className="max-w-[764px] mx-auto mt-[70px]">
          {
            AccordionData.map((item, index) => {
              return <FaqAccordion key={index} classes="mb-2" item={item} />
            })
          }
        </div>
        <div className="w-[142px] h-[253px] absolute top-6 left-[110px]">
          <Image src={LinesDots} alt="LinesDots" />
        </div>
        <div className="w-[142px] h-[253px] absolute bottom-[20px] right-[57px]">
          <Image src={LinesDots} alt="LinesDots" />
        </div>
        <div className="w-4 h-4 absolute bottom-[128px] left-[134px]">
          <Image src={Cross} alt="Cross" />
        </div>
        <div className="w-4 h-4 absolute top-[100px] right-[200px]">
          <Image src={Cross} alt="Cross" />
        </div>
      </div>
    </div>
  );
};

export default Troubleshooting;
