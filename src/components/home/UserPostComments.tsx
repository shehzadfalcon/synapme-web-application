import Image from 'next/image';
import VoteIcon from '@/public/icons/vote.png';
import ReplyIcon from '@/public/icons/reply.png';
import RobertFoxImage from '@/public/icons/robert-fox.png';
import PaulMoliveImage from '@/public/icons/paul-molive.png';
// import styles from "@/styles/home/UserPostComments.module.css";

export default function UserPostComments() {
  return (
    <div className="comments">
      <div className="comment">
        <div className="user_image">
          <Image src={PaulMoliveImage} alt="User image" />
        </div>

        <div>
          <div className="name_and_comment">
            <p>Paul Molive</p>
            <p>This post on AI is a comprehensive guide</p>
          </div>

          <div className="actions">
            <div className="action">
              <Image src={VoteIcon} alt="Vote icon" />
              <p>1k Vote</p>
            </div>

            <div className="action">
              <Image src={ReplyIcon} alt="Reply icon" />
              <p>Reply</p>
            </div>
            <p>Translate</p>
            <p className="time">5 min</p>
          </div>
        </div>
      </div>

      <div className="comment">
        <div className="user_image">
          <Image src={RobertFoxImage} alt="User image" />
        </div>

        <div>
          <div className="name_and_comment">
            <p>Robert Fox</p>
            <p>The author of this AI post presents a unique perspective</p>
          </div>

          <div className="actions">
            <div className="action">
              <Image src={VoteIcon} alt="Vote icon" />
              <p>2k Vote</p>
            </div>

            <div className="action">
              <Image src={ReplyIcon} alt="Reply icon" />
              <p>Reply</p>
            </div>
            <p>Translate</p>
            <p className="time">5 min</p>
          </div>
        </div>
      </div>
    </div>
  );
}
