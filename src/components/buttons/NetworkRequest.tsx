import React, { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import { Avatar } from '@mui/material';

// supports static images and material ui icons

interface NetworkRequestProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  img: string;
  name: string;
  active?: boolean;
}

const NetworkRequest: React.FC<NetworkRequestProps> = ({
  name,
  className,
  img,
  active,
  onClick,
  ...props
}) => {
  return (
    <div className="flex flex-col p-5 space-y-5 lg:items-center lg:flex-row lg:space-y-0 rounded-3xl lg:shadow-none shadow-main lg:p-0">
      <div className="flex items-center gap-2 lg:gap-4 grow">
        <div>
          <Avatar
            alt={img}
            src={img}
            className="lg:w-[64px] w-[32px] lg:h-[64px] h-[32px] object-cover"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-base leading-[24px] lg:font-normal font-light text-body">{name}</p>
          {active ? (
            <Image alt="active" src="/profile/networks/check.png" width="14" height="14" priority />
          ) : null}
        </div>
      </div>
      <div className="flex gap-4 ml-10 lg:ml-auto">
        <button className="h-[30px] lg:h-11 lg:w-[118px] w-[80px] hover:opacity-60 ring-1 ring-primary rounded-full lg:text-base text-sm leading-[28px] lg:font-normal font-light text-primary">
          Decline
        </button>
        <button className="h-[30px] lg:h-11 lg:w-[118px] w-[80px] hover:opacity-60 ring-1 ring-primary rounded-full lg:text-base text-sm leading-[28px] lg:font-normal font-light text-white bg-primary">
          Accept
        </button>{' '}
      </div>
    </div>
  );
};

export default NetworkRequest;
