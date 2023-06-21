import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const UserFeedback: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:h-[400px] rounded-3xl py-[50px] px-[10%] feedback-section">
        <div className="flex flex-col flex-1">
          <h1 className="font-bold text-base lg:text-[42px] leading-[52.5px] lg:leading-[52.5px] text-primary mb-5 text-center lg:text-left">Help us improve!</h1>
          <p className="font-normal text-sm lg:font-base leading-7 text-bodyDark text-center lg:text-left">
            Your feedback is invaluable as we strive for continuous improvement. Share your
            thoughts, suggestions, and ideas with us to shape the future of our offerings. Join us
            on this journey to better serve your needs. Your input matters, and we appreciate your
            contribution towards an exceptional experience!
          </p>
        </div>
        <div className="h-[220px] w-[200px] lg:flex-1 bg-contain bg-no-repeat bg-center mt-10 lg:mt-0 bg-feedback-design" />
      </div>
      <div className="lg:border lg:border-body lg:rounded-3xl overflow-hidden lg:mt-[50px] py-[50px] lg:px-[10%]">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:border-dashed lg:border-b lg:border-primary pb-[30px]">
          <h1 className="font-semibold text-base lg:text-[32px] leading-[25.89px] text-primary">Send your feedback</h1>
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <p className="font-semibold text-base leading-[25.89px] text-bodyDark">Rate our website</p>
            <Image alt="rating-stars" src="/icons/rating-stars.png" height={20} width={100} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-[10%]">
          <form className="flex flex-col flex-1">
            <label htmlFor="" className="font-medium text-base lg:text-[20px] leading-[25.89px] text-bodyDark mb-[30px] mt-5 text-center lg:text-left">
              Got any idea, Suggestions or any feedback
            </label>
            <textarea
              placeholder="Start Writing your Feedback"
              className="border border-[#737373] rounded-[12px] h-[265px] p-5 font-noraml text-base leading-7 text-body outline-none resize-none"
              name="message"></textarea>
            <button type="button" className="mt-3 lg:mt-6 h-[36px] lg:h-[60px] rounded-md lg:rounded-xl py-1 lg:py-2 px-6 w-full bg-primary font-normal text-base leading-7 text-white hover:bg-primary/70">Send</button>
          </form>
          <div className="flex-1 mt-[45px]">
            <p className='font-normal text-base leading-[30.89px] text-bodyDark text-center lg:text-left'>Having problem with our website?</p>
            <Link href="/feedback" className='underline font-medium text-base leading-[30.89px] text-primary block text-center lg:text-left'>Visit help center</Link>
            <p className='font-normal text-base leading-[30.89px] text-bodyDark text-center lg:text-left mt-4'>Want to explore Ai & ML then</p>
            <Link href="/feedback" className="underline font-medium text-base leading-[30.89px] text-primary block text-center lg:text-left">Go to our forum</Link>
            <p className="mt-6 font-normal text-base leading-7 text-body text-center lg:text-left">
              Thank you for taking the time to provide feedback regarding our website. We value
              your opinion and appreciate your input. Your feedback helps us improve our website
              and provide a better experience for all our users. We take your comments and
              suggestions seriously and will use them to make necessary improvements.
            </p>
            <p className="mt-1 font-medium text-base leading-7 text-primary text-center lg:text-left">Thanks again for your valuable feedback,</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;
