import * as React from 'react';
import { NewsArticleCard } from '@/components/news/cards';
const News: React.FC = () => {
  return (
    <div className="news">
      <NewsArticleCard
        language="Machine Learning"
        title="AI breakthroughs promise to change the world as we know it."
        time="09 Jan 2023"
        imageSrc="/news/top-news/img-1.png"
        userName="John Doe"
        commentCount={140}
        shareCount={99}
      />
      <NewsArticleCard
        language="Artificial Intelligence"
        title="Cutting-edge technology brings us one step closer to human-like intelligence."
        time="09 Jan 2023"
        imageSrc="/news/top-news/img-2.png"
        userName="John Doe"
        commentCount={140}
        shareCount={99}
      />
      <NewsArticleCard
        language="Machine Learning"
        title="AI breakthroughs promise to change the world as we know it."
        time="09 Jan 2023"
        imageSrc="/news/top-news/img-3.png"
        userName="John Doe"
        commentCount={140}
        shareCount={99}
      />
    </div>
  );
};

export default News;
