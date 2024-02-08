import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {
  UserCircleIcon,
  ArrowLeftEndOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { Menu, Transition } from '@headlessui/react';
import { useAuth } from '@/hooks/useAuth';
import { useLogout } from '@/features/auth';

const Header = () => {
  const { user } = useAuth();
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation();
  };

  return (
    <header>
      <div className="mx-auto flex max-w-7xl justify-between py-10 md:px-8">
        <h1 className="text-2xl font-semibold text-primary">ChatsApp</h1>
        {user && (
          <div className="flex items-center">
            <p className="text-secondary">{user?.name}</p>
            <Menu as="div" className="relative ml-3">
              {({ open }) => (
                <>
                  <Menu.Button className="flex h-10 w-10 cursor-pointer items-center text-neutral">
                    <UserCircleIcon className="" />
                  </Menu.Button>
                  <Transition
                    show={open}
                    as={React.Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="absolute right-0 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={handleLogout}
                              to=""
                              className={classNames(
                                'group flex w-full items-center rounded-md  px-4 py-2 text-sm ',
                                active
                                  ? 'bg-accent text-white'
                                  : 'text-gray-900'
                              )}
                            >
                              <ArrowLeftEndOnRectangleIcon className="mr-2 h-5 w-5" />
                              Logout
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
