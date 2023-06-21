import * as React from 'react';
import EachNotification from '@/components/notification/EachNotification';
interface EachNotifProps {
  entityName: string;
  entityProfileSrc: string;
  notifType: string;
  notifDate: string; // use text for now
}

const NotificationBody: React.FC = () => {
  const NotifData = [
    {
      entityName: 'Andrei',
      entityProfileSrc: '/profile/users/profile-1.png',
      notifType: 'comment',
      notifDate: '13 minutes ago', // will use ISO date later
    },
    {
      entityName: 'Andrei',
      entityProfileSrc: '/profile/users/profile-2.png',
      notifType: 'vote',
      notifDate: 'a day ago',
    },
    {
      entityName: 'Andrei',
      entityProfileSrc: '/profile/users/profile-3.png',
      notifType: 'comment',
      notifDate: '2 days ago',
    },
    {
      entityName: 'Andrei',
      entityProfileSrc: '/profile/users/profile-4.png',
      notifType: 'share',
      notifDate: '3 days ago',
    },
    {
      entityName: 'Andrei',
      entityProfileSrc: '/profile/users/profile-5.png',
      notifType: 'comment',
      notifDate: '3 days ago',
    },
  ];

  return (
    <div className="m-auto max-w-3xl h-screen flex flex-col">
      <div className="flex justify-between items-center my-4">
        <p className="font-medium">Notifications</p>
        <p className="text-[#777777]">Mark all as read</p>
      </div>
      <div className="w-full min-h-[500px] p-2 rounded-3xl bg-[#F2F8FD]">
        {NotifData.map((eachNotifData, index) => (
          <EachNotification {...eachNotifData} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NotificationBody;
