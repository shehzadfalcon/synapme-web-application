import * as React from 'react';
import { ProfileNetworkCard } from '@/components/profile/cards';

const SubNetwork: React.FC = () => {
  return (
    <div className="articles network max-h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-red">
      <ProfileNetworkCard
        networkName="Allyvengine"
        networkProfileSrc="/profile/networks/network1.png"
        member={true}
      />
      <ProfileNetworkCard
        networkName="Namat"
        networkProfileSrc="/profile/networks/network2.png"
        member={false}
      />
      <ProfileNetworkCard
        networkName="Ramm"
        networkProfileSrc="/profile/networks/network3.png"
        member={false}
      />
      <ProfileNetworkCard
        networkName="Limebit"
        networkProfileSrc="/profile/networks/network4.png"
        member={true}
      />
      <ProfileNetworkCard
        networkName="Allyvengine"
        networkProfileSrc="/profile/networks/network1.png"
        member={true}
      />
      <ProfileNetworkCard
        networkName="Namat"
        networkProfileSrc="/profile/networks/network2.png"
        member={false}
      />
      <ProfileNetworkCard
        networkName="Ramm"
        networkProfileSrc="/profile/networks/network3.png"
        member={false}
      />
      <ProfileNetworkCard
        networkName="Limebit"
        networkProfileSrc="/profile/networks/network4.png"
        member={true}
      />
    </div>
  );
};

export default SubNetwork;
