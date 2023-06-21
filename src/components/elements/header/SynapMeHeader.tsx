import React, { useState, memo } from 'react';
import SnDefaultLink from '@/components/buttons/SnDefaultLink';
import SnDefaultSearchBar from '@/components/buttons/SnDefaultSearchBar';
import Image from 'next/image';

// material ui icons
import LiveTvIcon from '@mui/icons-material/LiveTv';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <header className="synap-header">
      <div className="mobile-frac">
        <Image
          alt="synap-header-icon"
          src="/icons/synap-header-icon.png"
          width="50"
          height="50"
          priority
          className="main-icon"
        />
        <SnDefaultSearchBar
          onChange={e => {
            setSearchInput(e.target.value);
          }}
          className="header-input-mobile"
          value={searchInput}
        />
        <SnDefaultLink
          className="donate-button mobile"
          ButtonIcon={AttachMoneyIcon}
          content="Donate"
        />
      </div>
      <div className="header-main">
        <div className="nav-links">
          <Image
            alt="synap-header-icon"
            src="/icons/synap-header-icon.png"
            width="50"
            height="50"
            priority
            className="main-icon"
          />
          <SnDefaultLink
            className="primary-nav-button responsive"
            content="Home"
            href="/home"
            ButtonIcon={HomeIcon}
          />
          <SnDefaultLink
            className="primary-nav-button responsive"
            content="People"
            href="/people"
            ButtonIcon={GroupIcon}
          />
          <SnDefaultLink
            className="primary-nav-button responsive"
            content="News"
            href="/news"
            ButtonIcon={LiveTvIcon}
          />
          <SnDefaultLink
            className="primary-nav-button responsive"
            content="Notifications"
            ButtonIcon={CircleNotificationsIcon}
            href="/notifications"
          />
        </div>

        <div className="second-column">
          <SnDefaultSearchBar
            onChange={e => {
              setSearchInput(e.target.value);
            }}
            className="header-input-web"
          />
          <div className="form-links">
            <SnDefaultLink className="variant-1" content="Sign Up" href="/signup" />
            <SnDefaultLink className="ml-3 variant-2" content="Login" href="/login" />
          </div>
          <SnDefaultLink
            className="donate-button web"
            ButtonIcon={AttachMoneyIcon}
            content="Donate"
          />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
