import Image from 'next/image';
import { IUserPostStats } from 'types';
import VoteIcon from '@/public/icons/vote.png';
import ShareIcon from '@/public/icons/share.png';
import CommentIcon from '@/public/icons/comment.png';
// import styles from "@/styles/home/UserPostStats.module.css";

export default function UserPostStats({ votes, shares, comments }: IUserPostStats) {
  return (
    <div className="stats">
      <div className="vote_and_comment">
        <div>
          <Image src={VoteIcon} alt="Vote icon" />
          <p>{votes} Vote</p>
        </div>

        <div>
          <Image src={CommentIcon} alt="Comment icon" />
          <p>{comments}</p>
        </div>
      </div>

      <div className="share">
        <Image src={ShareIcon} alt="Share icon" />
        <p>{shares} Share</p>
      </div>
    </div>
  );
}
