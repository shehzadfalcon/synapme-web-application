import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import SnDefaultLink from '@/components/buttons/SnDefaultLink';
import RecentNewsSection from '@/components/section/news/RecentNews';
import RecentNewsMobile from '@/components/section/news/RecentNewsMobile';
import { News } from '@/components/news/subpages';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TimelineIcon from '@mui/icons-material/Timeline';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { useRouter } from 'next/router';

enum SubPageTab {
  News,
  New,
  Popular,
}

const NewsPage: React.FC = () => {
  const [subPage, setSubPage] = useState<SubPageTab>(SubPageTab.News);
  const router = useRouter();

  const renderSubPage = (): React.ReactElement => {
    switch (subPage) {
      case SubPageTab.News: {
        return <News />;
      }
      case SubPageTab.New: {
        return <div />;
      }
      case SubPageTab.Popular: {
        return <div />;
      }
      default:
        return <News />;
    }
  };

  return (
    <>
      <div className="title-mobile-news">Recent News</div>
      <div className="mobile-recent-news">
        <RecentNewsMobile
          language="Machine Learning"
          title="Machine learning helps predict heart attacks with high accuracy, study finds"
          time="09 Jan 2023"
          imageSrc="/news/recent-news/img-1.png"
          userName="John Doe"
          commentCount={140}
          shareCount={99}
        />
        <RecentNewsMobile
          language="Neural Network"
          title="Neural networks used to improve accuracy of weather forecasting"
          time="09 Jan 2023"
          imageSrc="/news/recent-news/img-2.png"
          userName="John Doe"
          commentCount={140}
          shareCount={99}
        />
        <RecentNewsMobile
          language="Artificial Intelligence"
          title="AI-powered chatbot helps students with mental health support during pandemic"
          time="09 Jan 2023"
          imageSrc="/news/recent-news/img-3.png"
          userName="John Doe"
          commentCount={140}
          shareCount={99}
        />
        <RecentNewsMobile
          language="Machine Learning"
          title="Researchers develop AI system that can detect Alzheimer's disease."
          time="09 Jan 2023"
          imageSrc="/news/recent-news/img-4.png"
          userName="John Doe"
          commentCount={140}
          shareCount={99}
        />
        {/* <div className="button">
            <Button className="btn">Try Chatbot</Button>
          </div> */}
      </div>
      <div className="news-page">
        <SnDefaultLink
          className={`primary-nav-button${router.pathname === '/news' ? ' selected' : ''}`}
          content="News"
          href="/news"
          ButtonIcon={TimelineIcon}
        />
        <SnDefaultLink
          className={`primary-nav-button${router.pathname === '/new' ? ' selected' : ''}`}
          content="New"
          ButtonIcon={NewReleasesIcon}
          href="/new"
        />
        <SnDefaultLink
          className={`primary-nav-button${router.pathname === '/popular' ? ' selected' : ''}`}
          content="Popular"
          ButtonIcon={AutoAwesomeIcon}
          href="/popular"
        />
      </div>
      <div className="news-page-left">
        <div className="news-feeds">{renderSubPage()}</div>
        <div className="recent-news">
          <div className="title">Recent News</div>
          <div className="recent-news child">
            <RecentNewsSection
              language="Machine Learning"
              title="Machine learning helps predict heart attacks with high accuracy, study finds"
              time="09 Jan 2023"
              imageSrc="/news/recent-news/img-1.png"
              userName="John Doe"
              commentCount={140}
              shareCount={99}
            />
            <RecentNewsSection
              language="Neural Network"
              title="Neural networks used to improve accuracy of weather forecasting"
              time="09 Jan 2023"
              imageSrc="/news/recent-news/img-2.png"
              userName="John Doe"
              commentCount={140}
              shareCount={99}
            />
            <RecentNewsSection
              language="Artificial Intelligence"
              title="AI-powered chatbot helps students with mental health support during pandemic"
              time="09 Jan 2023"
              imageSrc="/news/recent-news/img-3.png"
              userName="John Doe"
              commentCount={140}
              shareCount={99}
            />
            <RecentNewsSection
              language="Machine Learning"
              title="Researchers develop AI system that can detect Alzheimer's disease."
              time="09 Jan 2023"
              imageSrc="/news/recent-news/img-4.png"
              userName="John Doe"
              commentCount={140}
              shareCount={99}
            />
            <div className="button">
              <Button
                variant="contained"
                className="mt-10 ml-auto block max-w-[260px] w-full rounded-[50px] py-2 px-4 bg-[#DE0B0B] hover:bg-[#DE0B0B] font-normal text-base leading-7 text-white"
              >
                Try Chatbot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
