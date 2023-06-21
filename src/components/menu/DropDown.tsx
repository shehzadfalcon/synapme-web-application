import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface DropDownProps {
  permanent?: boolean;
  actions?: { name: string; onClick: () => void }[];
}

const DropDown: React.FC<DropDownProps> = ({ permanent, actions }) => {
  return (
    <Menu as="div" className={`relative lg:block text-left ml-auto${permanent ? '' : ' hidden'}`}>
      <Menu.Button className="h-6 w-6 rounded-full overflow-hidden flex items-center justify-center">
        <MoreVertIcon />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 overflow-hidden w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 bg-white">
            {actions?.length ? (
              actions.map((action, index) => (
                <Menu.Item key={index}>
                  <button
                    type="button"
                    onClick={action.onClick}
                    key={index}
                    className="px-2 py-2 hover:bg-gray-50 w-full text-left"
                  >
                    {action.name}
                  </button>
                </Menu.Item>
              ))
            ) : (
              <Menu.Item>
                <button type="button" className="px-2 py-2 hover:bg-gray-50 w-full text-left">
                  actions
                </button>
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDown;
