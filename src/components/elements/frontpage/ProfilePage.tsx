import React, { useState } from 'react';
import Image from 'next/image';
import NetworkRequest from '@/components/buttons/NetworkRequest';
import { SubProfile, SubVote, SubDebate, SubNetwork } from '@/components/profile/subpages';
import { ProfileDropMenu, VoteDropMenu } from '@/components/profile/dropdown';
import { Avatar } from '@mui/material';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import { Tab } from '@headlessui/react';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

enum SubPageTab {
  Profile,
  Vote,
  Debate,
  NetworkJoined,
}

const ProfilePage: React.FC = () => {
  const [subPage, setSubPage] = useState<SubPageTab>(SubPageTab.Profile);

  const renderSubPage = (): React.ReactElement => {
    switch (subPage) {
      case SubPageTab.Profile: {
        return <SubProfile />;
      }
      case SubPageTab.Vote: {
        return <SubVote />;
      }
      case SubPageTab.Debate: {
        return <SubDebate />;
      }
      case SubPageTab.NetworkJoined: {
        return <SubNetwork />;
      }
      default:
        return <SubProfile />;
    }
  };

  const renderDropDown = (): React.ReactElement => {
    switch (subPage) {
      case SubPageTab.Profile: {
        return <ProfileDropMenu />;
      }
      case SubPageTab.Vote: {
        return <VoteDropMenu />;
      }
      case SubPageTab.Debate: {
        return <ProfileDropMenu />;
      }
      case SubPageTab.NetworkJoined: {
        return <ProfileDropMenu />;
      }
      default:
        return <ProfileDropMenu />;
    }
  };

  return (
    <div className="pt-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 xl:gap-10 lg:gap-3">
        <div className="order-2 p-3 lg:col-span-3 xl:p-6 lg:p-3 lg:shadow-main rounded-xl lg:order-1">
          <div className="flex items-center">
            <div className="flex items-center gap-3 xl:gap-6 lg:gap-3.5 grow">
              <Avatar
                alt="profile-icon"
                src="/profile/users/profile-1.png"
                className="lg:h-[80px] lg:w-[80px] h-[32px] w-[32px]"
              />
              <p className="text-primary lg:text-[19px] text-[16px] lg:leading-[33.25px] leading-[28px] font-medium">
                James
              </p>
              <p className="text-[13px] leading-[16.9px] font-medium text-bodyDark">
                Synap <span className="text-body">12k</span>
              </p>
              <p className="text-[13px] leading-[16.9px] font-medium text-bodyDark">
                Coins <span className="text-body">1234</span>
              </p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={() => alert('SynapMe')}
                className="text-[16px] lg:inline hidden leading-[28px] text-white font-normal bg-primary h-11 px-4 rounded-full"
              >
                SynapMe@
              </button>
              <button
                onClick={() => alert('Lets Debate')}
                className="text-[16px] lg:flex hidden leading-[28px] font-normal text-primary border border-primary items-center gap-2.5 h-11 px-4 rounded-full"
              >
                <Image
                  alt="profile-icon"
                  src="/profile/debate.png"
                  width="17"
                  height="17"
                  style={{ paddingRight: '6px' }}
                  priority
                />{' '}
                Lets Debate
              </button>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex items-center justify-center w-10 h-10 rounded-full lg:bg-transparent bg-body/10 hover:bg-body hover:bg-opacity-10">
                      <Image
                        alt="profile-icon"
                        src="/profile/more.png"
                        width="4"
                        height="18"
                        priority
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-56 mt-2 overflow-hidden origin-top-right bg-white divide-y divide-gray-100 rounded-xl shadow-main ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div>
                        <Menu.Item>
                          <button className="text-[15px] hover:bg-gray-100 w-full h-full px-4 py-4 text-left leading-[16.9px] font-medium text-bodyDark">
                            Action Item
                          </button>
                        </Menu.Item>
                      </div>
                      <div>
                        <Menu.Item>
                          <button className="text-[15px] hover:bg-gray-100 px-4 py-4 text-left w-full leading-[16.9px] font-medium text-bodyDark">
                            Action Item
                          </button>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 lg:mt-0">
            <a
              href="tel:+1111-111-111"
              className="flex items-center gap-2 lg:text-base text-sm lg:font-medium font-normal  underline text-body lg:ml-[98px] lg:-mt-4"
            >
              <VideocamRoundedIcon className="text-xl" />
              Video Call
            </a>
            <button
              onClick={() => alert('SynapMe')}
              className="lg:text-[16px] text-sm lg:hidden leading-[28px] text-white lg:font-normal font-light bg-primary h-8 lg:h-11 px-4 rounded-full"
            >
              SynapMe@
            </button>
            <button
              onClick={() => alert('Lets Debate')}
              className="lg:text-[16px] text-sm lg:hidden flex leading-[28px] lg:font-normal font-light text-primary border border-primary items-center lg:gap-2.5 gap-px h-8 lg:h-11 px-4 rounded-full"
            >
              <Image
                alt="profile-icon"
                src="/profile/debate.png"
                width="17"
                height="17"
                style={{ paddingRight: '6px' }}
                priority
              />{' '}
              Lets Debate
            </button>
          </div>
          <p className="text-[16px] text-body leading-[28px] lg:font-normal font-light lg:mt-3 mt-5">
            A research scientist who works with AI and machine learning typically has a strong
            background in computer science and mathematics. They use their expertise to develop and
            test new algorithms, models, and tools to solve complex problems in various fields such
            as healthcare, finance, and natural language processing...
          </p>
          <div className="mt-6">
            <Tab.Group>
              <div className="flex items-center pb-3 overflow-x-auto border-b lg:pb-0 gap-x-5 scrollbar">
                <Tab.List className="flex items-center w-full ml-auto">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-full lg:h-11 h-8 px-4 whitespace-nowrap sm:text-base text-sm outline-0 sm:font-normal font-light sm:leading-[28px] leading-[24px] transition-all',
                        selected ? 'bg-primary text-white' : 'text-bodyDark',
                      )
                    }
                  >
                    Profile
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        'w-full group rounded-full gap-2 lg:h-11 h-8 px-4 whitespace-nowrap sm:text-base text-sm outline-0 sm:font-normal font-light sm:leading-[28px] leading-[24px] transition-all',
                        selected ? 'bg-primary text-white' : 'text-bodyDark',
                      )
                    }
                  >
                    Vote <span className="group-focus:text-white text-body"> 24K</span>
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        'w-full group rounded-full lg:h-11 h-8 px-4 whitespace-nowrap sm:text-base text-sm outline-0 sm:font-normal font-light sm:leading-[28px] leading-[24px] transition-all',
                        selected ? 'bg-primary text-white' : 'text-bodyDark',
                      )
                    }
                  >
                    Debate <span className="group-focus:text-white text-body"> 4</span>
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        'w-full group rounded-full lg:h-11 h-8 px-4 whitespace-nowrap sm:text-base text-sm outline-0 sm:font-normal font-light sm:leading-[28px] leading-[24px] transition-all',
                        selected ? 'bg-primary text-white' : 'text-bodyDark',
                      )
                    }
                  >
                    Network Joined <span className="group-focus:text-white text-body"> 12K</span>
                  </Tab>
                </Tab.List>
                <div className="hidden lg:inline">{renderDropDown()}</div>
              </div>
              <Tab.Panels>
                <Tab.Panel>
                  <SubProfile />
                </Tab.Panel>
                <Tab.Panel>
                  <SubVote />
                </Tab.Panel>
                <Tab.Panel>
                  <SubDebate />
                </Tab.Panel>
                <Tab.Panel>
                  <h1 className="text-center text-bodyDark">No Content</h1>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        <div className="order-1 lg:col-span-2 lg:order-2">
          <div className="p-3 xl:p-6 lg:p-3 lg:shadow-main rounded-xl">
            <h2 className="text-[23px] leading-[29.9px] font-medium text-bodyDark mb-6">
              Neural Network Requests
            </h2>
            <div className="h-full p-2 -mx-2 space-y-6 overflow-auto lg:max-h-full max-h-72 scrollbar">
              <NetworkRequest img="/profile/articles/img-1.png" name="Kaggle" active />
              <NetworkRequest img="/profile/networks/ml.png" name="ML" active />
              <NetworkRequest img="/profile/networks/centaur.png" name="Centaur" active />
              <NetworkRequest
                img="/profile/networks/red_tropolis.png"
                name="Red Tropolis" // Network status is off for example.
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
