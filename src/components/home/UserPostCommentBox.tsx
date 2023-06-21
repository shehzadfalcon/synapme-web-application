import Image from 'next/image';
import EmojiIcon from '@/public/icons/emoji.png';
import CameraIcon from '@/public/icons/camera.png';
// import styles from "@/styles/home/UserPostCommentBox.module.css";

export default function UserPostCommentBox() {
  return (
    <div className="comment_box">
      <input type="text" placeholder="Lovely!" />

      <div className="emoji_and_camera">
        <Image src={EmojiIcon} alt="Emoji icon" />
        <Image src={CameraIcon} alt="Camera icon" />
      </div>
    </div>
  );
}
