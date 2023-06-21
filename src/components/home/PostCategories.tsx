import Image from 'next/image';
import TopPostsIcon from '@/public/icons/top-posts.png';
import NewPostsIcon from '@/public/icons/new-posts.png';
// import styles from '@/styles/home/PostCategories.module.css';
import PopularPostsIcon from '@/public/icons/popular-posts.png';

export default function PostCategories() {
  return (
    <div className="post_categories">
      <div className="top_posts">
        <Image src={TopPostsIcon} alt="Top post icon" />
        <p>Top Posts</p>
      </div>
      <div className="new_posts">
        <Image src={NewPostsIcon} alt="New post icon" />
        <p>New</p>
      </div>
      <div className="popular_posts">
        <Image src={PopularPostsIcon} alt="Popular post icon" />
        <p>Popular</p>
      </div>
    </div>
  );
}
