import React from 'react';
import { Tab } from '@headlessui/react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const NeuralNetworkPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="pt-10">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-[111] overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full lg:py-14 lg:px-20 p-3 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl max-w-[1360px] rounded-3xl">
                  <div
                    onClick={closeModal}
                    className="absolute flex items-center justify-center w-10 h-10 rounded-full cursor-pointer top-4 right-6 bg-body/10 hover:opacity-60"
                  >
                    <CloseRoundedIcon />
                  </div>
                  <Tab.Group>
                    <div className="flex items-center">
                      <Tab.List className="flex flex-col items-start w-full gap-2 mx-auto mb-4 lg:justify-around lg:items-center lg:flex-row xl:mb-20 lg:mb-10">
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              'w-full border-b max-w-fit lg:h-11 h-8 whitespace-nowrap sm:text-base text-sm outline-0 sm:font-medium font-normal sm:leading-[28px] leading-[24px] transition-all',
                              selected
                                ? 'border-primary text-primary'
                                : 'text-bodyDark border-bodyDark lg:border-transparent',
                            )
                          }
                        >
                          Create Neural Network
                        </Tab>
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              'w-full border-b max-w-fit lg:h-11 h-8 whitespace-nowrap sm:text-base text-sm outline-0 sm:font-medium font-normal sm:leading-[28px] leading-[24px] transition-all',
                              selected
                                ? 'border-primary text-primary'
                                : 'text-bodyDark border-bodyDark lg:border-transparent',
                            )
                          }
                        >
                          Select Neuran
                        </Tab>
                      </Tab.List>
                    </div>
                    <Tab.Panels className="mt-2">
                      <Tab.Panel>
                        <div className="grid grid-cols-1 gap-5 2xl:gap-24 lg:gap-10 lg:grid-cols-2">
                          <div>
                            <div>
                              <p className="mb-1 text-sm font-normal leading-7 lg:text-base lg:mb-2 text-body">
                                Name of Neural Network
                              </p>
                              <input className="h-11 bg-[#F2F8FD] rounded-xl px-4 w-full outline-primary font-normal" />
                            </div>
                            <div className="mt-2 lg:mt-12">
                              <p className="mb-1 text-sm font-normal leading-7 lg:text-base lg:mb-2 text-body">
                                Description
                              </p>
                              <textarea
                                rows={5}
                                placeholder="Feel free to join our platform to form the network"
                                className="bg-[#F2F8FD] resize-none scrollbar rounded-xl p-4 w-full outline-primary font-normal placeholder:font-light text-base leading-7"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="grid grid-cols-3 gap-5">
                              <div>
                                <p className="text-sm font-light text-bodyDark lg:text-base lg:font-normal">
                                  Synap Name
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-light text-bodyDark lg:text-base lg:font-normal">
                                  Status
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-light text-bodyDark lg:text-base lg:font-normal">
                                  Invite
                                </p>
                              </div>
                              <div className="w-full h-px col-span-3 bg-body/30"></div>
                              <div className="h-[205px] col-span-3 overflow-auto scrollbar grid grid-cols-1 gap-5">
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
                                  <div key={idx} className="grid grid-cols-3 lg:gap-5">
                                    <p className="text-sm font-light text-body lg:text-base lg:font-normal">
                                      Jhon
                                    </p>
                                    <p className="text-sm font-light text-body lg:text-base lg:font-normal">
                                      Pending
                                    </p>
                                    <button
                                      onClick={() => alert('Invite')}
                                      className="text-base hover:opacity-70 leading-[28px] font-normal text-white bg-primary h-9 w-[82px] rounded-xl"
                                    >
                                      Invite
                                    </button>
                                  </div>
                                ))}
                              </div>
                              <button
                                onClick={() => alert('Invite')}
                                className="col-span-3 text-base hover:opacity-70 leading-[28px] font-normal text-white bg-primary lg:h-[60px] h-11 w-full rounded-xl"
                              >
                                Create Neural Netowrk
                              </button>
                            </div>
                          </div>
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <div className="grid grid-cols-1 gap-5 2xl:gap-24 lg:gap-10 lg:grid-cols-2">
                          <div>
                            <div>
                              <p className="mb-1 text-sm font-normal leading-7 lg:text-base lg:mb-2 text-body">
                                Neuran’s Role
                              </p>
                              <input
                                value={'Leader of Group'}
                                className="h-11 bg-[#F2F8FD] rounded-xl px-4 w-full outline-primary font-normal"
                              />
                            </div>
                            <div className="mt-2 lg:mt-12">
                              <p className="mb-1 text-sm font-normal leading-7 lg:text-base lg:mb-2 text-body">
                                Description
                              </p>
                              <textarea
                                rows={5}
                                placeholder="Able to Write Sub-Posts"
                                className="bg-[#F2F8FD] resize-none scrollbar rounded-xl p-4 w-full outline-primary font-normal placeholder:font-light text-base leading-7"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="grid grid-cols-3 gap-5">
                              <div>
                                <p className="text-sm font-light text-bodyDark lg:text-base lg:font-normal">
                                  Synap Name
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-light text-bodyDark lg:text-base lg:font-normal">
                                  Status
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-light text-bodyDark lg:text-base lg:font-normal">
                                  Neuran
                                </p>
                              </div>
                              <div className="w-full h-px col-span-3 bg-body/30"></div>
                              <div className="h-[205px] col-span-3 grid grid-cols-1 gap-5 overflow-auto scrollbar">
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
                                  <div key={idx} className="grid grid-cols-3 lg:gap-5">
                                    <p className="text-sm font-light text-body lg:text-base lg:font-normal">
                                      Jhon
                                    </p>
                                    <p className="text-sm font-light text-body lg:text-base lg:font-normal">
                                      Not-Elected
                                    </p>
                                    <button
                                      onClick={() => alert('Invite')}
                                      className="lg:text-base text-sm hover:opacity-70 lg:leading-[28px] font-normal text-white bg-primary h-9 w-[82px] rounded-xl"
                                    >
                                      Elect
                                    </button>
                                  </div>
                                ))}
                              </div>
                              <button
                                onClick={() => alert('Invite')}
                                className="col-span-3 text-base hover:opacity-70 leading-[28px] font-normal text-white bg-primary lg:h-[60px] h-11 w-full rounded-xl"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default NeuralNetworkPopup;
