import Image from 'next/image';
import UserPostTop from './UserPostTop';
import UserPostStats from './UserPostStat';
import { IUserVideoPostProps } from 'types';
// import styles from "@/styles/home/UserVideoPost.module.css";
import UserPostCommentBox from './UserPostCommentBox';

export default function UserImagePost({
  votes,
  time,
  name,
  shares,
  title,
  comments,
  profileImage,
  postThumbnail,
}: IUserVideoPostProps) {
  return (
    <div className="user_video_post">
      <UserPostTop name={name} time={time} title={title} profileImage={profileImage} />

      <p className="content">
        The impact of AI on society. It may cover topics such as machine learning, natural language
        processing, computer vision, robotics, and other aspects of AI research and development. AI
        posts may be found on blogs, social media platforms, news sites, and academic journals, and
        can help individuals stay up-to-date with the latest developments in this rapidly evolving
        field.
      </p>

      <div className="post_thumbnail">
        <Image src={postThumbnail} width={800} height={400} alt="Post image" />
      </div>

      <UserPostStats votes={votes} shares={shares} comments={comments} />

      <UserPostCommentBox />
    </div>
  );
}
