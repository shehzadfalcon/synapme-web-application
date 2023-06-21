import DefaultLayout from '@/components/layouts/DefaultLayout';
import PostGuideList from '@/components/codeofconduct/codeoOfConduct';
import Image from 'next/image';

const dummyData = [
  {
    point:
      'Respect all members of the community and refrain from using offensive or profane language.',
  },
  {
    point: 'Do not promote or contribute to flame wars and trolls.',
  },
  {
    point: 'Refrain from posting spam, advertisements, or other disruptive content.',
  },
  {
    point: 'Do not impede the flow of discussion or flood the forum with unnecessary posts.',
  },
  {
    point:
      'Respect the individual opinions of all members of the forum, and refrain from attacking other members for their beliefs.',
  },
  {
    point:
      'Respect the individual opinions of all members of the forum, and refrain from attacking other members for their beliefs.',
  },
  {
    point: 'Do not use the forum for the purpose of bullying or harassment.',
  },
  {
    point:
      'Do not post any content that could be considered offensive or illegal, such as racism and hate speech.',
  },
  {
    point:
      'Respect the privacy of all members and refrain from posting personal information or other confidential material',
  },
  {
    point:
      'Do not post any content that could be considered offensive or illegal, such as racism and hate speech.',
  },
  {
    point:
      'Respect copyright laws, refrain from posting or linking to any copyrighted material without permission, and don’t hack. 1',
  },
  {
    point: 'Refrain from threatening or encouraging any illegal activities.',
  },
  {
    point: 'If a user violates any of the above rules, please report immediately.',
  },
  {
    point:
      'Anyone who breaks the code of conduct will have their account removed and be permanently banned.',
  },
];

const codeOfConduct: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="w-full bg-white mt-0 lg:mt-[65px] lg:rounded-[24px] lg:shadow-main lg:pt-[17px] lg:pb-[162px] lg:pl-[130px] lg:pr-[79px]">
        <div className="relative flex flex-col gap-2 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
          <h4 className="text-primary font-semibold lg:font-bold text-[16px] lg:text-[42px] leading-[52px]">
            Code of Conduct
          </h4>
          <div className="w-[208.92px] ml-auto h-[217.45px] max-w-[442px] lg:w-[442px] lg:h-[460.05px] relative">
            <Image src="/code-of-conduct/img-1.png" alt="code-of-conduct" fill />
          </div>
          <div className="absolute hidden lg:block top-[-20px] left-[-80px] w-full h-[460.05px] max-w-[944.71px] lg:w-[944.71px] lg:h-[333.19px]">
            <Image src="/code-of-conduct/img-2.png" alt="code-of-conduct" fill />
          </div>
        </div>
        <div className="mt-[27px] lg:mt-[100px]">
          <PostGuideList data={dummyData} />
        </div>
      </div>
      <div className="lg:flex justify-end hidden mt-[32px] cursor-pointer">
        <button className="text-[16px] text-white leading-[28px] bg-primary rounded-[50px] w-[260px] h-[44px]">
          Try Chatbot
        </button>
      </div>
    </DefaultLayout>
  );
};

export default codeOfConduct;
