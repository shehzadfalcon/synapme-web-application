import * as React from 'react';
import Image from 'next/image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DropDown from '@/components/menu/DropDown';

interface EachNotifProps {
  entityName: string;
  entityProfileSrc: string;
  notifType: string;
  notifDate: string; // use text for now
}

const EachNotification: React.FC<EachNotifProps> = ({
  entityName,
  entityProfileSrc,
  notifType,
  notifDate,
}) => {
  const constructMessage = (): React.ReactElement => {
    switch (notifType) {
      case 'share':
        return (
          <p>
            {entityName} <span className="text-[#777777]">shared your post</span>
          </p>
        );
      case 'comment':
        return (
          <p>
            {entityName} <span className="text-[#777777]">commented on your post</span>
          </p>
        );
      case 'vote':
        return (
          <p>
            {entityName} <span className="text-[#777777]">voted your post</span>
          </p>
        );
      default:
        return <p></p>;
    }
  };

  const markAsRead = () => {console.log('run')};

  const data = [{ name: 'Mark as read', onClick: markAsRead }];

  return (
    <div className="w-full py-4 h-auto flex justify-between lg-max:text-sm">
      <div className="flex flex-row items-center">
        <Image
          className="rounded-full w-10 h-10 mr-5"
          width={40}
          height={40}
          alt=""
          src={entityProfileSrc}
        />
        {constructMessage()}
      </div>
      <div className="flex flex-row items-center">
        <p className="mr-4 text-[#777777]">{notifDate}</p>
        <DropDown actions={data} permanent />
      </div>
    </div>
  );
};

export default EachNotification;
