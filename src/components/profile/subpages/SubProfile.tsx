import * as React from 'react';
import { ProfileArticleCard } from '@/components/profile/cards';

const SubProfile: React.FC = () => {
  return (
    <>
      <ProfileArticleCard
        title="Research Scientist"
        time={24}
        content="AI is being used more and more in customer service to improve response times and accuracy. With machine learning algorithms, chatbots and virtual assistants can analyze and understand customer queries, provide relevant information, and even solve issues. AI-powered customer service helps companies to save time and money, as well as improve customer satisfaction by providing a personalized and efficient experience."
        imageSrc="/profile/articles/img-1.png"
        voteCount={500}
        commentCount={140}
        shareCount={40}
      />
    </>
  );
};

export default SubProfile;
