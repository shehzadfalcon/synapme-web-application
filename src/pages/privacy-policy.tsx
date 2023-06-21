/* eslint-disable @next/next/no-img-element */
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const privacyPolicy: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="sm:mt-[65px] w-full sm:pl-[132px] sm:pt-[80px] sm:pr-[84px] sm:pb-[164px] bg-[#FFFFFF] sm:rounded-[24px] sm:shadow-lg">
        <div className="w-full flex flex-col sm:flex-row items-center gap-[18px] sm:gap-[145px] ">
          <h4 className="font-semibold sm:font-bold text-[#DE0B0B] text-[16px] sm:text-[42px] leading-[52px] w-full text-left">
            Privacy Policy
          </h4>
          <img
            className="w-[280.4px] h-[237px] sm:w-[569.42px] sm:h-[406px]"
            src="/privacy-policy/img-1.svg"
            alt="Priacy Policy"
          />
        </div>
        <div className="mt-[58px] relative">
          At SynapMe, we take your privacy seriously and are committed to protecting your personal
          information. This Privacy Policy outlines how we collect, use, and share your personal
          information when you use our website. Information We Collect: When you create an account
          on SynapMe, we collect the following personal information: Your name Your email address
          Your date of birth Your gender Your technology ethics beliefs (optional) Your STEM
          background (optional) We also collect information about your use of our website,
          including: Your IP address Your browser type and version Your operating system Your device
          information Your activity on our website How We Use Your Information: We use your personal
          information to: Create and manage your account Communicate with you about our website and
          services Provide customer support Analyze and improve our website and services Personalize
          your experience on our website Comply with legal requirements We may also use your
          personal information to send you promotional emails about our website and services. You
          can opt-out of these emails at any time by clicking the unsubscribe link at the bottom of
          the email. How We Share Your Information: We may share your personal information with
          third-party service providers who help us operate our website and provide services to you.
          These service providers may include: Web hosting companies Payment processors Email
          service providers Analytics providers We may also share your personal information in
          response to legal requests, such as court orders or subpoenas, or to protect our legal
          rights. Your Choices: You can control the information we collect about you in the
          following ways: You can update your account information at any time by logging into your
          account. You can opt-out of promotional emails by clicking the unsubscribe link at the
          bottom of the email. You can delete your account at any time by contacting us at [insert
          contact email here]. Security: We take reasonable measures to protect your personal
          information from unauthorized access, disclosure, or misuse. We use SSL encryption to
          protect your data during transmission, and we store your data on secure servers. However,
          no security measures are 100% effective, and we cannot guarantee the security of your
          personal information. Childrens Privacy: Our website is not intended for children under
          the age of 13, and we do not knowingly collect personal information from children under
          the age of 13. If we become aware that we have collected personal information from a child
          under the age of 13, we will take steps to delete that information. Changes to this
          Privacy Policy: We may update this Privacy Policy from time to time. If we make any
          material changes, we will notify you by email or by posting a notice on our website.
          Contact Us: If you have any questions about this Privacy Policy or our data practices,
          please contact us at [hrhudson80@gmail.com]. By creating an account on SynapMe, you agree
          to the following terms and conditions You are responsible for maintaining the
          confidentiality of your account information, including your username and password. You are
          responsible for all activity that occurs under your account. You agree to provide accurate
          and complete information when creating your account. You agree not to use SynapMe for any
          illegal or unauthorized purpose. You agree not to violate any applicable laws or
          regulations. You agree not to harass, intimidate, or harm other members of the community.
          You agree not to post or share any content that is obscene, offensive, or illegal. You
          agree not to post or share any content that infringes on the intellectual property rights
          of others. You agree not to use SynapMe to promote any products or services. You agree to
          comply with the Code of Conduct for SynapMe. You acknowledge that SynapMe is not
          responsible for any content posted by users and that SynapMe reserves the right to remove
          any content that violates these terms and conditions. You acknowledge that SynapMe may
          modify these terms and conditions at any time, and that your continued use of SynapMe
          after any modifications constitutes your acceptance of the modified terms and conditions.
          By creating an account on SynapMe, you agree to these terms and conditions and to the Code
          of Conduct. If you do not agree to these terms and conditions or to the Code of Conduct,
          do not create an account on SynapMe
          <img
            className="absolute top-[574px] right-[63px] hidden sm:block"
            src="/privacy-policy/img-2.svg"
            alt="Lines"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default privacyPolicy;
