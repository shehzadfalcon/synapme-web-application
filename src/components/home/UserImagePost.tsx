import Image from 'next/image';
import UserPostTop from './UserPostTop';
import UserPostStats from './UserPostStat';
import { IUserImagePostProps } from 'types';
import UserPostComments from './UserPostComments';
import UserPostCommentBox from './UserPostCommentBox';
// import styles from "@/styles/home/UserImagePost.module.css";

export default function UserImagePost({
  votes,
  shares,
  time,
  name,
  title,
  comments,
  postImage,
  profileImage,
}: IUserImagePostProps) {
  return (
    <div className="user_image_post">
      <UserPostTop name={name} time={time} title={title} profileImage={profileImage} />

      <div className="post_image">
        <Image src={postImage} width={800} height={400} alt="Post image" />
      </div>

      <UserPostStats votes={votes} shares={shares} comments={comments} />

      <p className="content">
        The impact of AI on society. It may cover topics such as machine learning, natural language
        processing, computer vision, robotics, and other aspects of AI research and development. AI
        posts may be found on blogs, social media platforms, news sites, and academic journals, and
        can help individuals stay up-to-date with the latest developments in this rapidly evolving
        field.
      </p>

      <UserPostComments />

      <UserPostCommentBox />
    </div>
  );
}
