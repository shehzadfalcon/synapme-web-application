import Image from 'next/image';
import { IUserPostTopProps } from 'types';
// import styles from "@/styles/home/UserPostTop.module.css";

export default function UserPostTop({ time, name, title, profileImage }: IUserPostTopProps) {
  return (
    <div className="post_top">
      <div className="image_and_about">
        <Image src={profileImage} width={50} height={50} alt="User image" />

        <div className="name_and_about">
          <p>{name}</p>
          <p>{title}</p>
        </div>
      </div>

      <p className="time">{time}</p>
    </div>
  );
}
