import DefaultLayout from '@/components/layouts/DefaultLayout';
import PostGuideList from '@/components/postguide/PostGuideList';
import Image from 'next/image';

const dummyData = [
  {
    title: 'Write a descriptive title:',
    description:
      'The title of your post should be descriptive and give readers an idea of what the postis about. A good title can also help your post get noticed and attract more readers.',
  },
  {
    title: 'Write a descriptive title:',
    description:
      'The title of your post should be descriptive and give readers an idea of what the postis about. A good title can also help your post get noticed and attract more readers.',
  },
  ,
  {
    title: 'Write a descriptive title:',
    description:
      'The title of your post should be descriptive and give readers an idea of what the postis about. A good title can also help your post get noticed and attract more readers.',
  },
  {
    title: 'Write a descriptive title:',
    description:
      'The title of your post should be descriptive and give readers an idea of what the postis about. A good title can also help your post get noticed and attract more readers.',
  },
  {
    title: 'Write a descriptive title:',
    description:
      'The title of your post should be descriptive and give readers an idea of what the postis about. A good title can also help your post get noticed and attract more readers.',
  },
];

const postGuide: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="w-full bg-white mt-0 lg:mt-[65px] lg:rounded-[24px] lg:shadow-main lg:pt-[35px] lg:pb-[187px] lg:pl-[130px] lg:pr-[86px]">
        <div className="flex flex-col gap-[25px] lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
          <h4 className="text-primary font-semibold lg:font-bold text-[16px] lg:text-[42px] leading-[52px]">
            Post Guide
          </h4>
          <div className="w-full h-[195.66px] max-w-[664px] lg:w-[664px] lg:h-[423.18px] relative">
            <Image src="/post-guide/img-1.png" alt="" fill />
          </div>
        </div>
        <div className="mt-[27px] lg:mt-[122.82px]">
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

export default postGuide;
